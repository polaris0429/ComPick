import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import type { Prisma } from "../src/generated/prisma";

async function main() {
  const matches = await prisma.product.findMany({where:{name:"Ryzen 7 9800X3D",brand:"AMD",category:{code:"CPU"}}});
  if (matches.length !== 1) throw new Error(`Expected one Ryzen 7 9800X3D product, found ${matches.length}`);
  const product = matches[0]!;
  const previous = product.marketingContent && typeof product.marketingContent === "object" && !Array.isArray(product.marketingContent) ? product.marketingContent : {};
  const result = await prisma.product.updateMany({where:{id:product.id,updatedAt:product.updatedAt},data:{
    images:["/products/ryzen-9800x3d/thumbnail.jpeg",...product.images.slice(1)],
    marketingContent:{eyebrow:"",title:"",text:"",features:[],promoTitle:"",promoText:"",...previous,infoImages:["/products/ryzen-9800x3d/info.jpg"]} as Prisma.InputJsonValue,
  }});
  if (!result.count) throw new Error("Product changed while updating; no data was overwritten.");
  console.log("Ryzen 7 9800X3D thumbnail and product information image updated.");
}
main().catch((error)=>{console.error(error);process.exitCode=1;}).finally(()=>prisma.$disconnect());
