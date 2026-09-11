import { prisma } from "@/lib/prisma";
import type { CategoryCode } from "@/generated/prisma";
import type { ProductAttributes } from "@/types/product-attributes";
import type { SelectedPart } from "@/store/build-store";

/**
 * 카탈로그 화면(상품 카드, 견적 패널)에서 쓰는 상품 형태.
 * SelectedPart를 확장하므로 Zustand 스토어의 selectPart()/loadPrebuilt()에
 * 변환 없이 그대로 넘길 수 있습니다.
 */
export interface CatalogProduct extends SelectedPart {
  salesCount: number;
}

export interface CategorySummary {
  code: CategoryCode;
  name: string;
  sortOrder: number;
}

export interface PrebuiltSummary {
  id: string;
  name: string;
  description: string | null;
  imageUrl: string | null;
  price: number;
  discountRate: number;
  salesCount: number;
  components: CatalogProduct[];
}

export async function getCategories(): Promise<CategorySummary[]> {
  const categories = await prisma.category.findMany({
    orderBy: { sortOrder: "asc" },
  });
  return categories.map((c) => ({ code: c.code, name: c.name, sortOrder: c.sortOrder }));
}

export async function getActiveProducts(): Promise<CatalogProduct[]> {
  const products = await prisma.product.findMany({
    where: { isActive: true },
    include: { category: true },
    orderBy: { salesCount: "desc" },
  });

  return products.map((p) => ({
    id: p.id,
    name: p.name,
    brand: p.brand,
    price: p.price,
    discountRate: p.discountRate,
    imageUrl: p.imageUrl,
    salesCount: p.salesCount,
    categoryCode: p.category.code,
    attributes: p.attributes as unknown as ProductAttributes,
  }));
}

export async function getActivePrebuiltPCs(): Promise<PrebuiltSummary[]> {
  const prebuilts = await prisma.prebuiltPC.findMany({
    where: { isActive: true },
    orderBy: { salesCount: "desc" },
    include: {
      components: {
        include: { product: { include: { category: true } } },
      },
    },
  });

  return prebuilts.map((pb) => ({
    id: pb.id,
    name: pb.name,
    description: pb.description,
    imageUrl: pb.imageUrl,
    price: pb.price,
    discountRate: pb.discountRate,
    salesCount: pb.salesCount,
    components: pb.components.map((c) => ({
      id: c.product.id,
      name: c.product.name,
      brand: c.product.brand,
      price: c.product.price,
      discountRate: c.product.discountRate,
      imageUrl: c.product.imageUrl,
      salesCount: c.product.salesCount,
      categoryCode: c.product.category.code,
      attributes: c.product.attributes as unknown as ProductAttributes,
    })),
  }));
}
