import { prisma } from "@/lib/prisma";
import type { CategoryCode } from "@/generated/prisma";
import type { ProductAttributes } from "@/types/product-attributes";
import type { MarketingContent } from "@/types/product-detail";
import type { SelectedPart } from "@/store/build-store";

/**
 * 카탈로그 화면(목록, 상세 모달, 견적 패널)에서 쓰는 상품 형태.
 * SelectedPart를 확장하므로 Zustand 스토어의 selectPart()/loadPrebuilt()에
 * 변환 없이 그대로 전달할 수 있습니다.
 */
export interface CatalogProduct extends SelectedPart {
  images: string[];
  salesCount: number;
  marketingContent: MarketingContent | null;
}

export interface CategorySummary {
  code: CategoryCode;
  name: string;
  sortOrder: number;
  /** 좌측 네비게이션에 표시할 활성 상품 수 */
  productCount: number;
}

export interface PrebuiltSummary {
  id: string;
  name: string;
  description: string | null;
  images: string[];
  price: number;
  discountRate: number;
  salesCount: number;
  components: CatalogProduct[];
}

export async function getCategories(): Promise<CategorySummary[]> {
  const categories = await prisma.category.findMany({
    orderBy: { sortOrder: "asc" },
    include: { _count: { select: { products: { where: { isActive: true } } } } },
  });
  return categories.map((c) => ({
    code: c.code,
    name: c.name,
    sortOrder: c.sortOrder,
    productCount: c._count.products,
  }));
}

function toCatalogProduct(p: {
  id: string;
  name: string;
  brand: string;
  price: number;
  discountRate: number;
  images: string[];
  salesCount: number;
  attributes: unknown;
  marketingContent: unknown;
  category: { code: CategoryCode };
}): CatalogProduct {
  return {
    id: p.id,
    name: p.name,
    brand: p.brand,
    price: p.price,
    discountRate: p.discountRate,
    image: p.images[0] ?? null,
    images: p.images,
    salesCount: p.salesCount,
    categoryCode: p.category.code,
    attributes: p.attributes as unknown as ProductAttributes,
    marketingContent: (p.marketingContent as unknown as MarketingContent | null) ?? null,
  };
}

export async function getActiveProducts(): Promise<CatalogProduct[]> {
  const products = await prisma.product.findMany({
    where: { isActive: true },
    include: { category: true },
    orderBy: { salesCount: "desc" },
  });

  return products.map(toCatalogProduct);
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
    images: pb.images,
    price: pb.price,
    discountRate: pb.discountRate,
    salesCount: pb.salesCount,
    components: pb.components.map((c) => toCatalogProduct(c.product)),
  }));
}
