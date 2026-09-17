import {z} from 'zod';
import type {Prisma} from '@/generated/prisma';
import {applyDiscount} from '@/lib/format';
import {MemberError} from '@/lib/member/server';
export const itemSchema=z.array(z.object({productId:z.string().min(1).optional(),prebuiltPCId:z.string().min(1).optional(),quantity:z.number().int().min(1).max(99)}).refine(i=>Boolean(i.productId)!==Boolean(i.prebuiltPCId),'상품을 선택하세요.')).min(1).max(100);
export type LineInput=z.infer<typeof itemSchema>[number];
export async function resolveItems(tx:Prisma.TransactionClient,input:LineInput[]){
 const merged=new Map<string,LineInput>();for(const line of input){const key=line.productId?`p:${line.productId}`:`b:${line.prebuiltPCId}`;const quantity=(merged.get(key)?.quantity??0)+line.quantity;if(quantity>99)throw new MemberError('상품별 최대 99개까지 가능합니다.');merged.set(key,{...line,quantity})}
 const inventory=new Map<string,number>();const lines=[];
 for(const line of merged.values()){
  const item=line.productId?await tx.product.findUnique({where:{id:line.productId}}):await tx.prebuiltPC.findUnique({where:{id:line.prebuiltPCId},include:{components:{include:{product:true}}}});
  if(!item?.isActive)throw new MemberError('판매하지 않는 상품이 포함되어 있습니다.');
  if('components' in item && item.components.length){for(const c of item.components){if(!c.product.isActive)throw new MemberError('판매 중지된 구성 부품이 있습니다.');inventory.set(`p:${c.productId}`,(inventory.get(`p:${c.productId}`)??0)+c.quantity*line.quantity)}}
  else {const key=line.productId?`p:${item.id}`:`b:${item.id}`;inventory.set(key,(inventory.get(key)??0)+line.quantity)}
  lines.push({...line,name:item.name,image:item.images[0]??'',price:item.price,unitPrice:applyDiscount(item.price,item.discountRate)});
 }
 for(const [key,quantity] of inventory){const p=key.startsWith('p:')?await tx.product.findUnique({where:{id:key.slice(2)}}):await tx.prebuiltPC.findUnique({where:{id:key.slice(2)}});if(!p||p.stock<quantity)throw new MemberError(`${p?.name??'상품'} 재고가 부족합니다.`)}
 const totalAmount=lines.reduce((n,i)=>n+i.price*i.quantity,0),finalAmount=lines.reduce((n,i)=>n+i.unitPrice*i.quantity,0);
 if(finalAmount>100000000)throw new MemberError('주문 가능 금액을 초과했습니다.');
 return {lines,totalAmount,finalAmount,inventory:Object.fromEntries(inventory)};
}
