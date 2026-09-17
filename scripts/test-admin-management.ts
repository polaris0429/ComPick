import 'dotenv/config';
import assert from 'node:assert/strict';
import {randomBytes} from 'node:crypto';
import {prisma} from '../src/lib/prisma';
const base='http://127.0.0.1:3000';
async function api(path:string,body?:unknown,cookie='',origin=base){const r=await fetch(base+path,{method:body?'POST':'GET',headers:{origin,cookie,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});const text=await r.text();let data;try{data=JSON.parse(text)}catch{data={text}}return {status:r.status,data,cookie:r.headers.get('set-cookie')?.split(';')[0]??cookie}}
async function main(){assert(['localhost','127.0.0.1'].includes(new URL(process.env.DATABASE_URL!).hostname));let userId='';try{
assert.equal((await api('/api/admin/management')).status,401);
const admin=await api('/api/admin-session',{username:process.env.ADMIN_USERNAME,password:process.env.ADMIN_PASSWORD});assert.equal(admin.status,200,JSON.stringify(admin.data));assert(admin.cookie.includes('compick-admin='));const baseline=await api('/api/admin/management',undefined,admin.cookie);assert.equal(baseline.status,200);
const loginId='management_'+randomBytes(4).toString('hex'),password=randomBytes(18).toString('hex');const u=await api('/api/member/register',{loginId,password,name:'관리 검증용',email:loginId+'@example.invalid'});assert.equal(u.status,201);userId=u.data.user.id;
const product=await prisma.product.findFirstOrThrow();const order=await prisma.order.create({data:{userId,status:'PAID',paidAt:new Date(),totalAmount:25000,finalAmount:25000,items:{create:{productId:product.id,name:'배송 UI 검증용 가상 주문',image:'/placeholders/cpu.svg',quantity:1,unitPrice:25000}}}});
const stats=await api('/api/admin/management',undefined,admin.cookie);assert.equal(stats.data.summary.revenue,baseline.data.summary.revenue+25000);assert.equal(stats.data.summary.paidOrders,baseline.data.summary.paidOrders+1);
const body={action:'shipping',id:order.id,updatedAt:order.updatedAt.toISOString(),shippingStatus:'SHIPPED',courier:'테스트 택배',trackingNumber:'TEST123456'};
assert.equal((await api('/api/admin/management',body,admin.cookie,'https://foreign.invalid')).status,403);
assert.equal((await api('/api/admin/management',body,admin.cookie)).status,200);
assert.equal((await api('/api/admin/management',body,admin.cookie)).status,409);
const history=await api('/api/commerce/orders',undefined,u.cookie);assert.equal(history.data.orders[0].trackingNumber,'TEST123456');assert.equal(history.data.orders[0].shippingStatus,'SHIPPED');assert.equal(history.data.orders[0].items[0].image,'/placeholders/cpu.svg');
assert.equal((await api('/api/admin/management',{action:'member',id:userId,isActive:false},admin.cookie)).status,200);
assert.equal((await api('/api/member/cart',undefined,u.cookie)).status,401);
assert.equal((await api('/api/member/login',{loginId,password})).status,401);
assert.equal((await api('/api/admin/management',{action:'member',id:userId,isActive:true},admin.cookie)).status,200);
assert.equal((await api('/api/member/login',{loginId,password})).status,200);
console.log('PASS: administrator login/cookie, unauthorized access, sales totals from paid fixtures, shipping update/concurrency, order thumbnails/tracking, member suspension/session revocation/reactivation');
}finally{if(userId){await prisma.order.deleteMany({where:{userId}});await prisma.user.deleteMany({where:{id:userId}})}}}
main().catch(e=>{console.error(e);process.exitCode=1}).finally(()=>prisma.$disconnect());
