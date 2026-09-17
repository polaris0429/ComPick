import { randomBytes, createHash } from "node:crypto";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { decryptField, hashForLookup } from "@/lib/encryption";
import type { Prisma, User } from "@/generated/prisma";

export class MemberError extends Error {constructor(message:string, public status=400){super(message)}}
export const cookieName=process.env.NODE_ENV==="production"?"__Host-compick-session":"compick-session";
const cookieOptions={httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax" as const,path:"/"};
export const tokenHash=(token:string)=>createHash("sha256").update(token).digest("hex");
export async function sessionHash(){const token=(await cookies()).get(cookieName)?.value;return token && /^[a-f0-9]{64}$/.test(token)?tokenHash(token):null}
export async function currentMember(){const hash=await sessionHash();if(!hash)return null;const session=await prisma.memberSession.findUnique({where:{tokenHash:hash},include:{user:true}});return session && session.user.isActive && session.expiresAt>new Date()?session.user:null}
export const publicMember=(u:User)=>({id:u.id,loginId:u.loginId?decryptField(u.loginId):"",email:decryptField(u.email),name:u.nameEncrypted?decryptField(u.name):u.name,phone:u.phoneEncrypted?decryptField(u.phoneEncrypted):"",address:u.addressEncrypted?decryptField(u.addressEncrypted):"",addressDetail:u.addressDetailEncrypted?decryptField(u.addressDetailEncrypted):""});
export async function issueSession(tx:Prisma.TransactionClient,userId:string){const token=randomBytes(32).toString("hex");await tx.memberSession.create({data:{tokenHash:tokenHash(token),userId,expiresAt:new Date(Date.now()+7*86400000)}});return token}
export async function setSession(token:string){(await cookies()).set(cookieName,token,{...cookieOptions,maxAge:7*86400})}
export async function clearSession(){(await cookies()).set(cookieName,"",{...cookieOptions,maxAge:0})}
export function checkOrigin(request:Request){
 if(process.env.NEXT_PUBLIC_COMPICK_DEMO_MODE==="1")throw new MemberError("데모 모드에서는 회원 기능을 사용할 수 없습니다.",403);
 const origin=request.headers.get("origin");
 const host=request.headers.get("host")??"";
 if(process.env.NODE_ENV!=="production" && !/^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/.test(host))throw new MemberError("허용되지 않은 요청입니다.",403);
 const expected=process.env.NODE_ENV==="production"?process.env.AUTH_URL:`${new URL(request.url).protocol}//${host}`;
 if(!origin || !expected || origin!==expected)throw new MemberError("허용되지 않은 요청입니다.",403);
 if(process.env.NODE_ENV==="production" && !expected.startsWith("https://"))throw new MemberError("HTTPS 설정이 필요합니다.",503);
}
export async function rateLimit(scope:string,identity:string,limit=8){
 const key=hashForLookup(`member-rate:${scope}:${identity}`);
 const rows=await prisma.$queryRaw<{attempts:number}[]>`INSERT INTO member_rate_limits (key,attempts,"expiresAt") VALUES (${key},1,NOW()+INTERVAL '15 minutes') ON CONFLICT (key) DO UPDATE SET attempts=CASE WHEN member_rate_limits."expiresAt"<NOW() THEN 1 ELSE member_rate_limits.attempts+1 END, "expiresAt"=CASE WHEN member_rate_limits."expiresAt"<NOW() THEN NOW()+INTERVAL '15 minutes' ELSE member_rate_limits."expiresAt" END RETURNING attempts`;
 if((rows[0]?.attempts ?? limit+1)>limit)throw new MemberError("시도가 많습니다. 15분 후 다시 시도해 주세요.",429);
}
export async function memberTransaction<T>(fn:(tx:Prisma.TransactionClient,user:User)=>Promise<T>){
 const hash=await sessionHash();if(!hash)throw new MemberError("로그인이 필요합니다.",401);
 return prisma.$transaction(async(tx)=>{
 const s=await tx.memberSession.findUnique({where:{tokenHash:hash}});if(!s || s.expiresAt<=new Date())throw new MemberError("다시 로그인해 주세요.",401);
 await tx.$queryRaw`SELECT id FROM users WHERE id=${s.userId} FOR UPDATE`;
 const fresh=await tx.memberSession.findUnique({where:{tokenHash:hash},include:{user:true}});if(!fresh || !fresh.user.isActive || fresh.expiresAt<=new Date())throw new MemberError("다시 로그인해 주세요.",401);
 return fn(tx,fresh.user);
 },{timeout:15000});
}
