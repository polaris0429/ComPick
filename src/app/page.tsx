import { getActivePrebuiltPCs, getActiveProducts, getCategories } from "@/lib/repositories/catalog";
import { SiteHeader } from "@/components/shop/site-header";
import { BuildWorkspace } from "@/components/shop/build-workspace";

// 가격/재고/할인율이 자주 바뀌는 카탈로그이므로 빌드 시점에 정적으로 굳히지 않고
// 매 요청마다 새로 렌더링합니다.
export const dynamic = "force-dynamic";

export default async function Home() {
  const [categories, products, prebuilts] = await Promise.all([
    getCategories(),
    getActiveProducts(),
    getActivePrebuiltPCs(),
  ]);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <BuildWorkspace categories={categories} products={products} prebuilts={prebuilts} />
    </div>
  );
}
