"use client";

import { useMemo, useState } from "react";
import type { CategoryCode } from "@/generated/prisma";
import type { CatalogProduct, CategorySummary, PrebuiltSummary } from "@/lib/repositories/catalog";
import { applyDiscount } from "@/lib/format";
import { useBuildStore } from "@/store/build-store";
import { CategoryNav } from "@/components/shop/category-nav";
import { HeroBanner } from "@/components/shop/hero-banner";
import { StatusBar } from "@/components/shop/status-bar";
import { ProductFilters, type SortOption } from "@/components/shop/product-filters";
import { ProductList } from "@/components/shop/product-list";
import { ProductDetailModal } from "@/components/shop/product-detail-modal";
import { PrebuiltList } from "@/components/shop/prebuilt-list";
import { QuotePanel } from "@/components/shop/quote-panel";

interface BuildWorkspaceProps {
  categories: CategorySummary[];
  products: CatalogProduct[];
  prebuilts: PrebuiltSummary[];
}

function matchesFilters(product: CatalogProduct, filters: Record<string, Set<string>>): boolean {
  const attrs = product.attributes as unknown as Record<string, unknown>;
  for (const [key, selected] of Object.entries(filters)) {
    if (selected.size === 0) continue;
    if (!selected.has(String(attrs[key]))) return false;
  }
  return true;
}

function sortProducts(products: CatalogProduct[], sort: SortOption): CatalogProduct[] {
  const sorted = [...products];
  switch (sort) {
    case "popular":
      sorted.sort((a, b) => b.salesCount - a.salesCount);
      break;
    case "price-asc":
      sorted.sort(
        (a, b) => applyDiscount(a.price, a.discountRate) - applyDiscount(b.price, b.discountRate),
      );
      break;
    case "price-desc":
      sorted.sort(
        (a, b) => applyDiscount(b.price, b.discountRate) - applyDiscount(a.price, a.discountRate),
      );
      break;
    case "discount":
      sorted.sort((a, b) => b.discountRate - a.discountRate);
      break;
  }
  return sorted;
}

export function BuildWorkspace({ categories, products, prebuilts }: BuildWorkspaceProps) {
  const [activeTab, setActiveTab] = useState<"parts" | "prebuilt">("parts");
  const [activeCategory, setActiveCategory] = useState<CategoryCode>(
    categories[0]?.code ?? "CPU",
  );
  const [activeFilters, setActiveFilters] = useState<Record<string, Set<string>>>({});
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [detailProduct, setDetailProduct] = useState<CatalogProduct | null>(null);

  const selectPart = useBuildStore((s) => s.selectPart);
  const selectedParts = useBuildStore((s) => s.selectedParts);
  const loadPrebuilt = useBuildStore((s) => s.loadPrebuilt);

  const categoryProducts = useMemo(
    () => products.filter((p) => p.categoryCode === activeCategory),
    [products, activeCategory],
  );

  const visibleProducts = useMemo(
    () => sortProducts(categoryProducts.filter((p) => matchesFilters(p, activeFilters)), sortBy),
    [categoryProducts, activeFilters, sortBy],
  );

  const activeCategoryName =
    categories.find((c) => c.code === activeCategory)?.name ?? activeCategory;
  const detailCategoryName = detailProduct
    ? (categories.find((c) => c.code === detailProduct.categoryCode)?.name ?? detailProduct.categoryCode)
    : "";

  function handleSelectCategory(code: CategoryCode) {
    setActiveTab("parts");
    setActiveCategory(code);
    setActiveFilters({});
  }

  function handleToggleFilter(key: string, value: string) {
    setActiveFilters((prev) => {
      const next = { ...prev };
      const current = new Set(next[key] ?? []);
      if (current.has(value)) {
        current.delete(value);
      } else {
        current.add(value);
      }
      next[key] = current;
      return next;
    });
  }

  const hasActiveFilters = Object.values(activeFilters).some((set) => set.size > 0);

  return (
    <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-6 py-6 lg:grid-cols-[220px_1fr_340px]">
      <div className="lg:order-1">
        <CategoryNav
          categories={categories}
          activeTab={activeTab}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          onSelectPrebuilt={() => setActiveTab("prebuilt")}
        />
      </div>

      <main className="flex min-w-0 flex-col gap-4 lg:order-2">
        <HeroBanner />
        <StatusBar />

        <div className="flex gap-1 border-b border-line">
          <button
            type="button"
            onClick={() => setActiveTab("parts")}
            className={`border-b-2 px-1 pb-2 text-sm font-bold transition-colors ${
              activeTab === "parts"
                ? "border-primary text-primary"
                : "border-transparent text-ink-muted hover:text-ink"
            }`}
          >
            부품으로 견적하기
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("prebuilt")}
            className={`border-b-2 px-1 pb-2 text-sm font-bold transition-colors ${
              activeTab === "prebuilt"
                ? "border-primary text-primary"
                : "border-transparent text-ink-muted hover:text-ink"
            }`}
          >
            추천 완제품 PC
          </button>
        </div>

        {activeTab === "parts" ? (
          <>
            <h2 className="text-sm font-bold text-ink">{activeCategoryName}</h2>
            <ProductFilters
              category={activeCategory}
              productCount={visibleProducts.length}
              categoryProducts={categoryProducts}
              activeFilters={activeFilters}
              onToggleFilter={handleToggleFilter}
              onClearFilters={() => setActiveFilters({})}
              sortBy={sortBy}
              onChangeSortBy={setSortBy}
            />
            <ProductList
              products={visibleProducts}
              selectedCategoryPartId={selectedParts[activeCategory]?.id}
              onSelect={(product) => selectPart(product)}
              onOpenDetail={(product) => setDetailProduct(product)}
              onClearFilters={() => setActiveFilters({})}
              hasActiveFilters={hasActiveFilters}
            />
          </>
        ) : (
          <PrebuiltList prebuilts={prebuilts} onSelect={(prebuilt) => loadPrebuilt(prebuilt.components)} />
        )}
      </main>

      <div className="lg:order-3">
        <QuotePanel />
      </div>

      {detailProduct && (
        <ProductDetailModal
          product={detailProduct}
          categoryName={detailCategoryName}
          isSelected={selectedParts[detailProduct.categoryCode]?.id === detailProduct.id}
          onClose={() => setDetailProduct(null)}
          onSelect={() => selectPart(detailProduct)}
        />
      )}
    </div>
  );
}
