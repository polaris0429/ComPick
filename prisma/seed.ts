// tsx로 직접 실행되는 순수 Node 스크립트라, Next.js(next dev/build)와 달리
// .env를 자동으로 읽어주지 않습니다. 다른 import보다 반드시 먼저 실행되어야
// @/lib/prisma가 모듈 로드 시점에 DATABASE_URL을 정상적으로 찾습니다.
import "dotenv/config";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma";
import { categorySeeds, allProducts, prebuiltSeeds, type CategoryCodeSeed } from "./seed-data";

// ════════════════════════════════════════════════════════════════
// 시딩 로직
// ════════════════════════════════════════════════════════════════

async function main() {
  console.log("🌱 ComPick 시드 데이터 생성을 시작합니다...");

  // FK 의존 역순으로 기존 시드 데이터를 정리합니다. User/Order는 이 스크립트가
  // 건드리지 않습니다 — 만약 실제 주문이 이 상품들을 참조하고 있다면
  // deleteMany가 FK 제약으로 실패하는 것이 의도된 동작입니다(주문 이력 보호).
  await prisma.prebuiltPCComponent.deleteMany();
  await prisma.prebuiltPC.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  console.log("📁 카테고리 생성 중...");
  const categoryIdByCode = new Map<CategoryCodeSeed, string>();
  for (const seed of categorySeeds) {
    const category = await prisma.category.create({ data: seed });
    categoryIdByCode.set(seed.code, category.id);
  }

  console.log(`📦 상품 ${allProducts.length}개 생성 중...`);
  const productIdByName = new Map<string, string>();
  for (const product of allProducts) {
    const categoryId = categoryIdByCode.get(product.category);
    if (!categoryId) {
      throw new Error(`알 수 없는 카테고리 코드입니다: ${product.category}`);
    }

    const created = await prisma.product.create({
      data: {
        name: product.name,
        brand: product.brand,
        categoryId,
        price: product.price,
        discountRate: product.discountRate ?? 0,
        salesCount: product.salesCount ?? 0,
        stock: product.stock ?? 0,
        images: product.images ?? [],
        ...(product.marketingContent ? { marketingContent: product.marketingContent as unknown as Prisma.InputJsonValue } : {}),
        attributes: product.attributes as unknown as Prisma.InputJsonValue,
      },
    });

    if (productIdByName.has(product.name)) {
      throw new Error(`상품 이름이 중복되었습니다 (시드 데이터 오류): ${product.name}`);
    }
    productIdByName.set(product.name, created.id);
  }

  console.log(`🖥️  완제품 PC ${prebuiltSeeds.length}개 생성 중...`);
  for (const prebuilt of prebuiltSeeds) {
    const created = await prisma.prebuiltPC.create({
      data: {
        name: prebuilt.name,
        description: prebuilt.description,
        price: prebuilt.price,
        discountRate: prebuilt.discountRate,
        salesCount: prebuilt.salesCount,
      },
    });

    for (const componentName of prebuilt.componentNames) {
      const productId = productIdByName.get(componentName);
      if (!productId) {
        throw new Error(
          `완제품 "${prebuilt.name}"이 참조하는 부품을 찾을 수 없습니다: "${componentName}" ` +
            "(상품 시드 데이터의 name과 정확히 일치해야 합니다)",
        );
      }
      await prisma.prebuiltPCComponent.create({
        data: { prebuiltPCId: created.id, productId, quantity: 1 },
      });
    }
  }

  console.log("✅ 시드 완료:", {
    categories: categorySeeds.length,
    products: allProducts.length,
    prebuiltPCs: prebuiltSeeds.length,
  });
}

main()
  .catch((error) => {
    console.error("❌ 시드 중 오류가 발생했습니다:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
