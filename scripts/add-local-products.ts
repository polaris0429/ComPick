import "dotenv/config";
import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { prisma } from "../src/lib/prisma";
import { Prisma } from "../src/generated/prisma";
import { additionalProducts } from "../prisma/additional-products";
import { productInput } from "../src/lib/admin/product-schema";

async function main() {
  const url = new URL(process.env.DATABASE_URL ?? "");
  if (!["localhost","127.0.0.1","[::1]"].includes(url.hostname)) throw new Error("로컬 DB에서만 실행할 수 있습니다.");
  for (const p of additionalProducts) productInput.parse({...p,categoryCode:p.category,isActive:true,images:[],infoImages:[],infoText:p.marketingContent.text});
  const before = await prisma.product.findMany({orderBy:{id:"asc"}});
  const backup = `/private/tmp/compick-products-before-${Date.now()}.json`;
  await writeFile(backup,JSON.stringify(before,null,2),{mode:0o600});
  const result = await prisma.$transaction(async(tx)=>{
    await tx.$executeRaw`SELECT pg_advisory_xact_lock(20260915)`;
    const categories=await tx.category.findMany();
    let added=0,skipped=0;
    for(const p of additionalProducts){
      const id=`catalog-${p.catalogKey}`;
      const category=categories.find(c=>c.code===p.category);
      if(!category)throw new Error(`카테고리가 없습니다: ${p.category}`);
      const existing=await tx.product.findFirst({where:{OR:[{id},{name:p.name,brand:p.brand,categoryId:category.id}]}});
      if(existing){skipped++;continue;}
      await tx.product.create({data:{id,name:p.name,brand:p.brand,categoryId:category.id,price:p.price,stock:p.stock,salesCount:0,discountRate:0,isActive:true,images:[],attributes:p.attributes as Prisma.InputJsonValue,marketingContent:p.marketingContent as unknown as Prisma.InputJsonValue}});
      added++;
    }
    const originals=await tx.product.findMany({where:{id:{in:before.map(p=>p.id)}},orderBy:{id:"asc"}});
    assert.deepEqual(originals,before,"기존 상품은 변경되지 않아야 합니다.");
    return {added,skipped,total:await tx.product.count()};
  });
  console.log(JSON.stringify({...result,backup}));
  console.log(await prisma.product.groupBy({by:["categoryId"],_count:true}));
}
main().catch(e=>{console.error(e.message);process.exitCode=1}).finally(()=>prisma.$disconnect());
