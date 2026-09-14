import { BuildWorkspace } from "@/components/shop/build-workspace";

export const dynamic = "force-dynamic";

export default async function Home() {
  const isDemo = process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_COMPICK_DEMO_MODE === "1";
  const catalog = await (async () => {
    if (isDemo) {
      const { getDemoCatalog } = await import("@/lib/demo-catalog");
      return getDemoCatalog();
    }
    const { getCategories, getActiveProducts, getActivePrebuiltPCs } = await import("@/lib/repositories/catalog");
    const [categories, products, prebuilts] = await Promise.all([
      getCategories(), getActiveProducts(), getActivePrebuiltPCs(),
    ]);
    return { categories, products, prebuilts };
  })();

  return <div className="min-h-screen">
    {isDemo && <p className="bg-dark px-4 py-1 text-center text-[11px] text-white/70">디자인 미리보기 · 예시 상품과 가격입니다.</p>}
    <BuildWorkspace {...catalog} />
  </div>;
}
