import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma";
import { encryptField, hashForLookup } from "@/lib/encryption";
import { applyDiscount } from "@/lib/format";
import { MemberError, checkOrigin, currentMember, publicMember, issueSession, setSession, clearSession, sessionHash, rateLimit, memberTransaction } from "@/lib/member/server";

export const runtime="nodejs";
export const dynamic="force-dynamic";
const loginId=z.string().trim().toLowerCase().regex(/^[a-z0-9_]{4,30}$/, "아이디는 영문·숫자·밑줄 4~30자로 입력하세요.");
const password=z.string().min(12,"비밀번호는 12자 이상 입력하세요.").max(72).refine(s=>Buffer.byteLength(s,"utf8")<=72,"비밀번호는 UTF-8 기준 72바이트 이하여야 합니다.");
const fields={loginId,email:z.string().trim().toLowerCase().email().max(254),name:z.string().trim().min(1).max(50)};
const deliveryFields={phone:z.string().trim().max(20).refine(v=>!v||/^[0-9+() -]{7,20}$/.test(v),"전화번호를 확인하세요.").optional(),address:z.string().trim().max(300).refine(v=>!v||v.length>=5,"배송주소는 5자 이상 입력하세요.").optional(),addressDetail:z.string().trim().max(200).optional()};
const response=(data:unknown,status=200)=>Response.json(data,{status,headers:{"Cache-Control":"private, no-store"}});
const dummyHash=bcrypt.hashSync("dummy-password-for-timing-only",12);
type Context={params:Promise<{action:string}>};
function handleError(error:unknown){
 if(error instanceof MemberError)return response({error:error.message},error.status);
 if(error instanceof z.ZodError)return response({error:error.issues[0]?.message ?? "입력 내용을 확인하세요."},400);
 if(error instanceof Prisma.PrismaClientKnownRequestError && error.code==="P2002")return response({error:"이미 사용 중인 아이디 또는 이메일입니다."},409);
 return response({error:"요청을 처리하지 못했습니다. 잠시 후 다시 시도해 주세요."},500);
}
async function cart(userId:string){
 const rows=await prisma.cartItem.findMany({where:{userId},orderBy:{createdAt:"asc"},include:{product:true,prebuiltPC:{include:{components:{include:{product:true}}}}}});
 const items=rows.map(row=>{
 const p=row.product??row.prebuiltPC!;
 const stock=row.product?row.product.stock:(row.prebuiltPC!.components.length ? Math.min(99,...row.prebuiltPC!.components.map(c=>c.product.isActive?Math.floor(c.product.stock/c.quantity):0)) : row.prebuiltPC!.stock);
 const available=p.isActive && stock>=row.quantity;
 const unitPrice=applyDiscount(p.price,p.discountRate);
 return {productId:row.productId,prebuiltPCId:row.prebuiltPCId,id:row.id,name:p.name,image:p.images[0]??"",quantity:row.quantity,unitPrice,total:unitPrice*row.quantity,stock,available,kind:row.product?"부품":"완제품"};
 });
 return {items,total:items.filter(i=>i.available).reduce((s,i)=>s+i.total,0)};
}
export async function GET(_request:Request,context:Context){try{
 const {action}=await context.params;
 const user=await currentMember();
 if(action==="me")return response({user:user?publicMember(user):null});
 if(action==="cart"){if(!user)throw new MemberError("로그인이 필요합니다.",401);return response(await cart(user.id))}
 return response({error:"찾을 수 없습니다."},404);
}catch(e){return handleError(e)}}
export async function POST(request:Request,context:Context){try{
 checkOrigin(request);
 const {action}=await context.params;
 if(Number(request.headers.get("content-length"))>16384)throw new MemberError("요청이 너무 큽니다.",413);
 const raw=await request.text();if(Buffer.byteLength(raw)>16384)throw new MemberError("요청이 너무 큽니다.",413);
 let body;try{body=JSON.parse(raw||"{}")}catch{throw new MemberError("입력 형식을 확인하세요.")}
 if(action==="register"){
 const input=z.object({...fields,password}).parse(body);
 await rateLimit("register","global",50);await rateLimit("register",input.loginId,5);
 const passwordHash=await bcrypt.hash(input.password,12);
 const result=await prisma.$transaction(async tx=>{const user=await tx.user.create({data:{loginId:encryptField(input.loginId),loginIdHash:hashForLookup(`login:${input.loginId}`),email:encryptField(input.email),emailHash:hashForLookup(input.email),name:encryptField(input.name),nameEncrypted:true,passwordHash}});return {user,token:await issueSession(tx,user.id)}});
 await setSession(result.token);return response({user:publicMember(result.user)},201);
 }
 if(action==="login"){
 const input=z.object({loginId,password:z.string().min(1).max(72).refine(s=>Buffer.byteLength(s)<=72)}).parse(body);
 await rateLimit("login",input.loginId,8);
 const user=await prisma.user.findUnique({where:{loginIdHash:hashForLookup(`login:${input.loginId}`)}});
 const valid=await bcrypt.compare(input.password,user?.passwordHash??dummyHash);
 if(!user || !user.isActive || !valid)throw new MemberError("아이디 또는 비밀번호를 확인하세요.",401);
 const oldHash=await sessionHash();
 const token=await prisma.$transaction(async tx=>{
 await tx.$queryRaw`SELECT id FROM users WHERE id=${user.id} FOR UPDATE`;
 const fresh=await tx.user.findUnique({where:{id:user.id}});if(!fresh || !fresh.isActive || fresh.passwordHash!==user.passwordHash)throw new MemberError("다시 로그인해 주세요.",401);
 if(oldHash)await tx.memberSession.deleteMany({where:{tokenHash:oldHash}});
 await tx.memberSession.deleteMany({where:{expiresAt:{lt:new Date()}}});
 return issueSession(tx,user.id)});
 await setSession(token);return response({user:publicMember(user)});
 }
 if(action==="logout"){const hash=await sessionHash();if(hash)await prisma.memberSession.deleteMany({where:{tokenHash:hash}});await clearSession();return response({ok:true})}
 if(action==="profile" || action==="delete"){
 const user=await currentMember();if(!user)throw new MemberError("로그인이 필요합니다.",401);
 await rateLimit("sensitive",user.id,8);
 const input=z.object({currentPassword:z.string().min(1).max(72).refine(s=>Buffer.byteLength(s)<=72),...(action==="profile"?{...fields,...deliveryFields,newPassword:password.optional()}:{confirmation:z.literal("회원탈퇴")})}).parse(body);
 const result=await memberTransaction(async(tx,fresh)=>{
 if(!await bcrypt.compare(input.currentPassword,fresh.passwordHash))throw new MemberError("현재 비밀번호를 확인하세요.",403);
 if(action==="delete"){if(await tx.order.count({where:{userId:fresh.id,status:"PENDING",stockReserved:true}}))throw new MemberError("결제 승인 확인 중인 주문이 있습니다. 결제 상태 확인 후 탈퇴해 주세요.");await tx.user.delete({where:{id:fresh.id}});return null}
 const data=z.object({...fields,...deliveryFields,newPassword:password.optional()}).parse(body);
 const updated=await tx.user.update({where:{id:fresh.id},data:{loginId:encryptField(data.loginId),loginIdHash:hashForLookup(`login:${data.loginId}`),email:encryptField(data.email),emailHash:hashForLookup(data.email),name:encryptField(data.name),nameEncrypted:true,...(data.phone!==undefined?{phoneEncrypted:data.phone?encryptField(data.phone):null}:{}),...(data.address!==undefined?{addressEncrypted:data.address?encryptField(data.address):null}:{}),...(data.addressDetail!==undefined?{addressDetailEncrypted:data.addressDetail?encryptField(data.addressDetail):null}:{}),...(data.newPassword?{passwordHash:await bcrypt.hash(data.newPassword,12)}:{})}});
 await tx.memberSession.deleteMany({where:{userId:fresh.id}});
 return {user:updated,token:await issueSession(tx,fresh.id)};
 });
 if(result){await setSession(result.token);return response({user:publicMember(result.user)})}
 await clearSession();return response({ok:true});
 }
 if(action==="cart"){
 const input=z.discriminatedUnion("operation",[
 z.object({operation:z.literal("add"),productId:z.string().min(1).optional(),prebuiltPCId:z.string().min(1).optional(),quantity:z.number().int().min(1).max(99).default(1)}).refine(x=>Boolean(x.productId)!==Boolean(x.prebuiltPCId),"상품을 하나 선택하세요."),
 z.object({operation:z.literal("set"),id:z.string(),quantity:z.number().int().min(1).max(99)}),
 z.object({operation:z.literal("remove"),id:z.string()}),z.object({operation:z.literal("clear")})]).parse(body);
 await memberTransaction(async(tx,user)=>{
 if(input.operation==="clear"){await tx.cartItem.deleteMany({where:{userId:user.id}});return}
 if(input.operation==="remove"){const r=await tx.cartItem.deleteMany({where:{id:input.id,userId:user.id}});if(!r.count)throw new MemberError("장바구니 상품을 찾을 수 없습니다.",404);return}
 const existing=input.operation==="set"?await tx.cartItem.findFirst({where:{id:input.id,userId:user.id}}):await tx.cartItem.findFirst({where:{userId:user.id,...(input.productId?{productId:input.productId}:{prebuiltPCId:input.prebuiltPCId})}});
 if(input.operation==="set"&&!existing)throw new MemberError("장바구니 상품을 찾을 수 없습니다.",404);
 const productId=input.operation==="add"?input.productId:existing!.productId;
 const prebuiltPCId=input.operation==="add"?input.prebuiltPCId:existing!.prebuiltPCId;
 const quantity=input.operation==="set"?input.quantity:(existing?.quantity??0)+input.quantity;
 if(quantity>99)throw new MemberError("상품당 최대 99개까지 담을 수 있습니다.");
 if(productId){const p=await tx.product.findUnique({where:{id:productId}});if(!p?.isActive||p.stock<quantity)throw new MemberError("판매 상태 또는 재고 수량을 확인하세요.")}
 else{const p=await tx.prebuiltPC.findUnique({where:{id:prebuiltPCId!},include:{components:{include:{product:true}}}});if(!p?.isActive||(!p.components.length&&p.stock<quantity)||p.components.some(c=>!c.product.isActive||c.product.stock<quantity*c.quantity))throw new MemberError("완제품 구성의 판매 상태 또는 재고가 부족합니다.")}
 if(existing)await tx.cartItem.update({where:{id:existing.id},data:{quantity}});
 else{if(await tx.cartItem.count({where:{userId:user.id}})>=100)throw new MemberError("장바구니는 최대 100종까지 담을 수 있습니다.");await tx.cartItem.create({data:{userId:user.id,productId,prebuiltPCId,quantity}})}
 });
 return response({ok:true});
 }
 return response({error:"찾을 수 없습니다."},404);
}catch(e){return handleError(e)}}
