import {randomUUID} from 'node:crypto';
import {z} from 'zod';
import {prisma} from '@/lib/prisma';
import {encryptField} from '@/lib/encryption';
import {MemberError,checkOrigin,currentMember,memberTransaction,rateLimit} from '@/lib/member/server';
import {itemSchema,resolveItems} from '@/lib/commerce/catalog';
export const runtime='nodejs';
export const dynamic='force-dynamic';
const reply=(data:unknown,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'private, no-store'}});
const fail=(e:unknown)=>reply({error:e instanceof MemberError?e.message:e instanceof z.ZodError?e.issues[0]?.message:'요청을 처리하지 못했습니다. 다시 시도해 주세요.'},e instanceof MemberError?e.status:400);
function keys(){const env=process.env;const client=env.TOSS_CLIENT_KEY??env.NEXT_PUBLIC_TOSS_CLIENT_KEY??'',secret=env.TOSS_SECRET_KEY??'';if(!client.startsWith('test_ck_')||!secret.startsWith('test_sk_'))throw new MemberError('결제 서비스 설정을 확인해 주세요.',503);return {client,secret}}
export async function GET(_r:Request,{params}:{params:Promise<{action:string}>}){try{const {action}=await params;const user=await currentMember();if(!user)throw new MemberError('로그인이 필요합니다.',401);if(action==='orders'){const orders=await prisma.order.findMany({where:{userId:user.id},include:{items:{include:{product:true,prebuiltPC:true}}},orderBy:{createdAt:'desc'},take:50});return reply({orders:orders.map(o=>({id:o.id,status:o.status,finalAmount:o.finalAmount,createdAt:o.createdAt,shippingStatus:o.shippingStatus,courier:o.courier,trackingNumber:o.trackingNumber,shippedAt:o.shippedAt,deliveredAt:o.deliveredAt,items:o.items.map(i=>({id:i.id,name:i.name||i.product?.name||i.prebuiltPC?.name||'상품',image:i.image||i.product?.images[0]||i.prebuiltPC?.images[0]||'',quantity:i.quantity,unitPrice:i.unitPrice}))}))})}throw new MemberError('찾을 수 없습니다.',404)}catch(e){return fail(e)}}
export async function POST(r:Request,{params}:{params:Promise<{action:string}>}){try{
 checkOrigin(r);const user=await currentMember();if(!user)throw new MemberError('로그인이 필요합니다.',401);
 const raw=await r.text();if(raw.length>50000)throw new MemberError('요청이 너무 큽니다.',413);const body=JSON.parse(raw);const {action}=await params;
 if(action==='preview'){const input=itemSchema.parse(body.items);return reply(await memberTransaction(tx=>resolveItems(tx,input)))}
 if(action==='cart'){const input=itemSchema.parse(body.items);await memberTransaction(async(tx,u)=>{await resolveItems(tx,input);const old=await tx.cartItem.findMany({where:{userId:u.id}});const combined=[...old.map(i=>({productId:i.productId??undefined,prebuiltPCId:i.prebuiltPCId??undefined,quantity:i.quantity})),...input];const result=await resolveItems(tx,combined);if(result.lines.length>100)throw new MemberError('장바구니는 100종까지 담을 수 있습니다.');for(const line of result.lines){const existing=old.find(i=>line.productId?i.productId===line.productId:i.prebuiltPCId===line.prebuiltPCId);if(existing)await tx.cartItem.update({where:{id:existing.id},data:{quantity:line.quantity}});else await tx.cartItem.create({data:{userId:u.id,productId:line.productId,prebuiltPCId:line.prebuiltPCId,quantity:line.quantity}})}});return reply({ok:true})}
 if(action==='order'){
 const {client}=keys();await rateLimit('order',user.id,20);
 const input=z.object({items:itemSchema,requestKey:z.string().uuid(),expectedAmount:z.number().int().positive(),shipping:z.object({name:z.string().trim().min(1).max(50),phone:z.string().regex(/^[0-9+\- ]{8,20}$/),address:z.string().trim().min(5).max(300),detail:z.string().max(200),memo:z.string().max(300)})}).parse(body);
 const order=await memberTransaction(async(tx,u)=>{const requestKey=`${u.id}:${input.requestKey}`;const old=await tx.order.findUnique({where:{requestKey},include:{items:true}});if(old){if(old.status!=='PENDING')throw new MemberError('이미 처리된 주문입니다.');return old}const resolved=await resolveItems(tx,input.items);if(resolved.finalAmount!==input.expectedAmount)throw new MemberError('가격이 변경되었습니다. 주문서를 새로고침하세요.',409);return tx.order.create({data:{userId:u.id,requestKey,totalAmount:resolved.totalAmount,discountAmount:resolved.totalAmount-resolved.finalAmount,finalAmount:resolved.finalAmount,tossOrderId:randomUUID(),shippingEncrypted:encryptField(JSON.stringify(input.shipping)),inventory:resolved.inventory,items:{create:resolved.lines.map(i=>({productId:i.productId,prebuiltPCId:i.prebuiltPCId,quantity:i.quantity,unitPrice:i.unitPrice,name:i.name,image:i.image}))}},include:{items:true}})});
 return reply({orderId:order.tossOrderId,amount:order.finalAmount,orderName:(order.items[0]?.name??'컴픽 주문')+(order.items.length>1?` 외 ${order.items.length-1}건`:''),customerKey:user.id,clientKey:client});
 }
 if(action==='confirm'){
 const {secret}=keys();const input=z.object({orderId:z.string().max(100),paymentKey:z.string().min(1).max(250),amount:z.number().int().positive()}).parse(body);
 const order=await memberTransaction(async(tx,u)=>{const o=await tx.order.findUnique({where:{tossOrderId:input.orderId}});if(!o||o.userId!==u.id)throw new MemberError('주문을 찾을 수 없습니다.',404);if(o.finalAmount!==input.amount)throw new MemberError('주문 금액이 일치하지 않습니다.');if(o.tossPaymentKey&&o.tossPaymentKey!==input.paymentKey)throw new MemberError('결제 정보가 일치하지 않습니다.');if(o.status==='PAID')return o;if(o.status!=='PENDING')throw new MemberError('처리할 수 없는 주문입니다.');if(!o.stockReserved){for(const [key,quantity] of Object.entries((o.inventory??{}) as Record<string,number>).sort(([a],[b])=>a.localeCompare(b))){const where={id:key.slice(2),isActive:true,stock:{gte:quantity}};const result=key.startsWith('p:')?await tx.product.updateMany({where,data:{stock:{decrement:quantity}}}):await tx.prebuiltPC.updateMany({where,data:{stock:{decrement:quantity}}});if(!result.count)throw new MemberError('재고가 변경되어 결제를 승인할 수 없습니다.')}}return tx.order.update({where:{id:o.id},data:{stockReserved:true,tossPaymentKey:input.paymentKey}})});
 if(order.status==='PAID')return reply({ok:true,id:order.id});
 // Keep the reservation on ambiguous network errors; the same order/key can be retried safely.
 const response=await fetch('https://api.tosspayments.com/v1/payments/confirm',{method:'POST',headers:{Authorization:`Basic ${Buffer.from(secret+':').toString('base64')}`,'Content-Type':'application/json','Idempotency-Key':order.id},body:JSON.stringify({paymentKey:input.paymentKey,orderId:order.tossOrderId,amount:order.finalAmount}),signal:AbortSignal.timeout(12000)});
 let payment=await response.json();
 if(!response.ok){const lookup=await fetch(`https://api.tosspayments.com/v1/payments/orders/${encodeURIComponent(input.orderId)}`,{headers:{Authorization:`Basic ${Buffer.from(secret+':').toString('base64')}`},signal:AbortSignal.timeout(10000)});if(lookup.ok)payment=await lookup.json();}
 if(payment.status!=='DONE'||payment.orderId!==input.orderId||payment.paymentKey!==input.paymentKey||payment.totalAmount!==order.finalAmount)throw new MemberError('결제 승인이 확인되지 않았습니다. 주문 내역을 확인하거나 다시 승인해 주세요.',409);
 await memberTransaction(async(tx,u)=>{const fresh=await tx.order.findFirst({where:{id:order.id,userId:u.id}});if(!fresh)throw new MemberError('주문을 찾을 수 없습니다.',404);await tx.order.update({where:{id:order.id},data:{status:'PAID',paidAt:new Date()}})});
 return reply({ok:true,id:order.id});
 }
 throw new MemberError('찾을 수 없습니다.',404);
 }catch(e){return fail(e)}}
