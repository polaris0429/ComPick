import { allProducts, categorySeeds, prebuiltSeeds } from "../../prisma/seed-data";
import type { CatalogProduct, CategorySummary, PrebuiltSummary } from "@/lib/repositories/catalog";

/** Explicit development preview only; never a fallback for a failed database query. */
export function getDemoCatalog() {
  const products: CatalogProduct[] = allProducts.map((product, index) => ({
    id: `demo-product-${index}`,
    name: product.name,
    brand: product.brand,
    categoryCode: product.category,
    price: product.price,
    discountRate: product.discountRate ?? 0,
    salesCount: product.salesCount ?? 0,
    attributes: product.attributes,
    image: product.images?.[0] ?? null,
    images: product.images ?? [],
    marketingContent: product.marketingContent ?? null,
  }));
  const categories: CategorySummary[] = categorySeeds.map((category) => ({
    ...category, productCount: products.filter((p) => p.categoryCode === category.code).length,
  }));
  const prebuilts: PrebuiltSummary[] = prebuiltSeeds.map((prebuilt, index) => ({
    id: `demo-prebuilt-${index}`,
    name: prebuilt.name,
    description: prebuilt.description,
    price: prebuilt.price,
    discountRate: prebuilt.discountRate,
    salesCount: prebuilt.salesCount,
    images: [],
    components: prebuilt.componentNames.map((name) => {
      const product = products.find((p) => p.name === name);
      if (!product) throw new Error(`Missing demo component: ${name}`);
      return product;
    }),
  }));
  return { products, categories, prebuilts };
}
