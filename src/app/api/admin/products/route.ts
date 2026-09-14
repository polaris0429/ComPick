import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma";
import { canMutateLocalAdmin, canUseLocalAdmin } from "@/lib/admin/access";
import { productInput } from "@/lib/admin/product-schema";

export const runtime = "nodejs";
const denied = () => Response.json({ error: "로컬 개발 서버에서만 이용할 수 있습니다." }, { status: 403 });

export async function GET(request: Request) {
  if (!canUseLocalAdmin(request.headers)) return denied();
  try {
    const [categories, products] = await Promise.all([
      prisma.category.findMany({orderBy:{sortOrder:"asc"}}),
      prisma.product.findMany({include:{category:true},orderBy:{updatedAt:"desc"}}),
    ]);
    return Response.json({ categories: categories.map(({code,name})=>({code,name})), products: products.map((p)=> {
      const marketing = (p.marketingContent ?? {}) as Record<string, unknown>;
      return { id:p.id, name:p.name, brand:p.brand, categoryCode:p.category.code, price:p.price, discountRate:p.discountRate, stock:p.stock, isActive:p.isActive, images:p.images, attributes:p.attributes, infoImages: Array.isArray(marketing.infoImages) ? marketing.infoImages : [], infoText: typeof marketing.text === "string" ? marketing.text : "", salesCount:p.salesCount, updatedAt:p.updatedAt.toISOString() };
    }) }, {headers:{"Cache-Control":"no-store"}});
  } catch { return Response.json({error:"상품 목록을 불러오지 못했습니다. DB 연결을 확인해 주세요."},{status:500}); }
}

export async function POST(request: Request) {
  if (!canMutateLocalAdmin(request)) return denied();
  let body;
  try { body = await request.json(); } catch { return Response.json({error:"잘못된 요청입니다."},{status:400}); }
  const parsed = productInput.safeParse(body);
  if (!parsed.success) return Response.json({error:parsed.error.issues.map((i)=>`${i.path.join(".")}: ${i.message}`).join("\n")},{status:400});
  const input = parsed.data;
  try {
    const category = await prisma.category.findUnique({where:{code:input.categoryCode}});
    if (!category) return Response.json({error:"등록되지 않은 카테고리입니다."},{status:400});
    const previous = input.id ? await prisma.product.findUnique({where:{id:input.id}}) : null;
    if (input.id && !previous) return Response.json({error:"삭제된 상품입니다."},{status:404});
    const oldMarketing = previous?.marketingContent;
    const marketing = oldMarketing && typeof oldMarketing === "object" && !Array.isArray(oldMarketing) ? oldMarketing : {};
    const data = { name:input.name, brand:input.brand, categoryId:category.id, price:input.price, discountRate:input.discountRate, stock:input.stock, isActive:input.isActive, images:input.images, attributes:input.attributes as Prisma.InputJsonValue, marketingContent:{ eyebrow:"", title:"", features:[], promoTitle:"", promoText:"", ...marketing, text:input.infoText, infoImages:input.infoImages } as Prisma.InputJsonValue };
    if (input.id) {
      const result = await prisma.product.updateMany({where:{id:input.id,updatedAt:new Date(input.updatedAt!)},data});
      if (!result.count) return Response.json({error:"다른 곳에서 수정된 상품입니다. 목록을 새로고침하고 다시 수정해 주세요."},{status:409});
      return Response.json({id:input.id});
    }
    const product = await prisma.product.create({data});
    return Response.json({id:product.id},{status:201});
  } catch { return Response.json({error:"저장하지 못했습니다. DB 연결과 입력 값을 확인해 주세요."},{status:500}); }
}

export async function DELETE(request: Request) {
  if (!canMutateLocalAdmin(request)) return denied();
  let body;
  try { body = await request.json(); } catch { return Response.json({error:"잘못된 요청입니다."},{status:400}); }
  if (!body || typeof body !== "object" || typeof body.id !== "string" || typeof body.updatedAt !== "string" || !Number.isFinite(Date.parse(body.updatedAt))) return Response.json({error:"삭제할 상품을 다시 선택해 주세요."},{status:400});
  try {
    const result = await prisma.product.deleteMany({where:{id:body.id,updatedAt:new Date(body.updatedAt)}});
    if (!result.count) return Response.json({error:"상품이 변경되었거나 이미 삭제되었습니다. 목록을 새로고침하세요."},{status:409});
    return Response.json({ok:true});
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2003") return Response.json({error:"주문 또는 완제품에서 사용 중인 상품은 삭제할 수 없습니다. 판매 상태를 ‘숨김’으로 변경해 주세요."},{status:409});
    return Response.json({error:"상품을 삭제하지 못했습니다."},{status:500});
  }
}
