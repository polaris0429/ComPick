import 'dotenv/config';
import assert from 'node:assert/strict';
import {randomBytes,createHash} from 'node:crypto';
import bcrypt from 'bcryptjs';
import {prisma} from '../src/lib/prisma';
import {decryptField,hashForLookup} from '../src/lib/encryption';
const base='http://127.0.0.1:3000';
const prefix=`test_${randomBytes(5).toString('hex')}`;
const password=randomBytes(18).toString('hex');
const nextPassword=randomBytes(18).toString('hex');
const ids:string[]=[];
async function call(action:string,body?:unknown,cookie='',origin=base){
 const r=await fetch(`${base}/api/member/${action}`,{method:body===undefined?'GET':'POST',headers:{origin,cookie,'Content-Type':'application/json'},body:body===undefined?undefined:JSON.stringify(body)});
 return {status:r.status,data:await r.json(),cookie:r.headers.get('set-cookie')?.split(';')[0]??cookie,headers:r.headers};
}
async function main(){
 assert(['localhost','127.0.0.1','[::1]'].includes(new URL(process.env.DATABASE_URL!).hostname),'Local DB only');
 const original=await prisma.product.findMany({orderBy:{id:'asc'}});
 try{
 assert.equal((await call('cart')).status,401);
 assert.equal((await call('register',{},'','https://foreign.invalid')).status,403);
 assert.equal((await call('register',{},'','')).status,403);
 assert.equal((await call('register',{loginId:prefix,password:'short',email:`${prefix}@example.invalid`,name:'테스트'})).status,400);
 const a=await call('register',{loginId:prefix,password,email:`${prefix}@example.invalid`,name:'검증 회원'});
 assert.equal(a.status,201,JSON.stringify(a.data));ids.push(a.data.user.id);
 assert.match(a.headers.get('set-cookie')!,/HttpOnly/i);assert.match(a.headers.get('set-cookie')!,/SameSite=lax/i);
 const b=await call('register',{loginId:prefix+'b',password,email:`${prefix}b@example.invalid`,name:'검증 회원 B'});
 assert.equal(b.status,201);ids.push(b.data.user.id);
 assert.equal((await call('register',{loginId:prefix.toUpperCase(),password,email:`${prefix}c@example.invalid`,name:'중복'})).status,409);
 const stored=await prisma.user.findUniqueOrThrow({where:{id:ids[0]}});
 assert.notEqual(stored.loginId,prefix);assert.equal(decryptField(stored.loginId!),prefix);
 assert.notEqual(stored.name,'검증 회원');assert.equal(decryptField(stored.name),'검증 회원');
 assert.equal(decryptField(stored.email),`${prefix}@example.invalid`);assert.notEqual(stored.passwordHash,password);assert(await bcrypt.compare(password,stored.passwordHash));
 const rawToken=a.cookie.split('=')[1]!;
 assert(await prisma.memberSession.findUnique({where:{tokenHash:createHash('sha256').update(rawToken).digest('hex')}}));
 assert.equal((await call('login',{loginId:prefix,password:'wrongpassword'})).status,401);
 const p=original.find(p=>p.isActive&&p.stock>2)!;assert(p);
 assert.equal((await call('cart',{operation:'add',productId:p.id,quantity:2,unitPrice:1},a.cookie)).status,200);
 const ac=await call('cart',undefined,a.cookie);assert.equal(ac.data.items.length,1);assert.equal(ac.data.items[0].quantity,2);assert(ac.data.total>2);
 assert.equal((await call('cart',undefined,b.cookie)).data.items.length,0);
 const item=ac.data.items[0].id;
 assert.equal((await call('cart',{operation:'set',id:item,quantity:3},b.cookie)).status,404);
 assert.equal((await call('cart',{operation:'remove',id:item},b.cookie)).status,404);
 assert.equal((await call('cart',{operation:'set',id:item,quantity:100},a.cookie)).status,400);
 assert.equal((await call('cart',{operation:'set',id:item,quantity:1},a.cookie)).status,200);
 assert.equal((await call('logout',{},a.cookie)).status,200);
 assert.equal((await call('cart',undefined,a.cookie)).status,401);
 const a2=await call('login',{loginId:prefix,password});assert.equal(a2.status,200);
 assert.equal((await call('cart',undefined,a2.cookie)).data.items.length,1);
 const other=await call('login',{loginId:prefix,password});assert.equal(other.status,200);
 const edited=await call('profile',{loginId:prefix+'c',email:`${prefix}new@example.invalid`,name:'수정 회원',currentPassword:password,newPassword:nextPassword},a2.cookie);
 assert.equal(edited.status,200);assert.equal(edited.data.user.name,'수정 회원');
 assert.equal((await call('cart',undefined,other.cookie)).status,401);
 assert.equal((await call('cart',undefined,a2.cookie)).status,401);
 assert.equal((await call('login',{loginId:prefix+'c',password})).status,401);
 const a3=await call('login',{loginId:prefix+'c',password:nextPassword});assert.equal(a3.status,200);
 assert.equal((await call('delete',{currentPassword:'wrongpassword',confirmation:'회원탈퇴'},a3.cookie)).status,403);
 assert.equal((await call('delete',{currentPassword:nextPassword},a3.cookie)).status,400);
 assert.equal((await call('delete',{currentPassword:nextPassword,confirmation:'회원탈퇴'},a3.cookie)).status,200);
 assert.equal(await prisma.user.count({where:{id:ids[0]}}),0);assert.equal(await prisma.cartItem.count({where:{userId:ids[0]}}),0);assert.equal(await prisma.memberSession.count({where:{userId:ids[0]}}),0);
 assert.equal((await call('cart',undefined,edited.cookie)).status,401);
 for(let i=0;i<9;i++){const r=await call('login',{loginId:prefix+'limit',password});assert.equal(r.status,i===8?429:401)}
 assert.deepEqual(await prisma.product.findMany({orderBy:{id:'asc'}}),original);
 console.log('PASS: registration, encryption/hash, cookies, login, CSRF, user isolation, quantity/price, logout, profile/password session revocation, withdrawal, rate limit, original products unchanged');
 }finally{
 await prisma.user.deleteMany({where:{id:{in:ids}}});
 const keys=[...['', 'b','c','limit'].flatMap(s=>['login','register'].map(scope=>hashForLookup(`member-rate:${scope}:${prefix+s}`))),...ids.map(id=>hashForLookup(`member-rate:sensitive:${id}`))];
 await prisma.memberRateLimit.deleteMany({where:{key:{in:keys}}});
 }
}
main().catch(e=>{console.error(e);process.exitCode=1}).finally(()=>prisma.$disconnect());
