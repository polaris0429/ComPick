"use client";

import Link from "next/link";

import { useMemo, useState } from "react";
import type { CategoryCode } from "@/generated/prisma";
import type { CatalogProduct, CategorySummary, PrebuiltSummary } from "@/lib/repositories/catalog";
import { applyDiscount } from "@/lib/format";
import { useBuildStore } from "@/store/build-store";
import { CategoryNav } from "@/components/shop/category-nav";
import { HeroBanner } from "@/components/shop/hero-banner";
import { SiteHeader, type ShopTab } from "@/components/shop/site-header";
import { AiPcGuide } from "@/components/shop/ai-pc-guide";
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
  const [activeTab, setActiveTab] = useState<ShopTab>("parts");
  const [activeCategory, setActiveCategory] = useState<CategoryCode>(
    categories[0]?.code ?? "CPU",
  );
  const [activeFilters, setActiveFilters] = useState<Record<string, Set<string>>>({});
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [detailProduct, setDetailProduct] = useState<CatalogProduct | null>(null);

  const selectPart = useBuildStore((s) => s.selectPart);
  const selectedParts = useBuildStore((s) => s.selectedParts);
  const loadPrebuilt = useBuildStore((s) => s.loadPrebuilt);

  const categoryProducts = useMemo(
    () => products.filter((p) => searchQuery !== null
      ? `${p.brand} ${p.name}`.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      : p.categoryCode === activeCategory),
    [products, activeCategory, searchQuery],
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
    setSearchQuery(null);
    setActiveTab("parts");
    setActiveCategory(code);
    setActiveFilters({});
  }

  function handleNavigate(tab: ShopTab) {
    setActiveTab(tab);
    setSearchQuery(null);
    setActiveFilters({});
    if (tab === "ai") setActiveCategory("GPU");
  }

  function handleSearch(query: string) {
    setActiveTab("parts");
    setSearchQuery(query);
    setActiveFilters({});
    document.getElementById("catalog")?.scrollIntoView({ block: "start" });
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
    <>
    <SiteHeader activeTab={activeTab} onNavigate={handleNavigate} onSearch={handleSearch} partCount={Object.keys(selectedParts).length} />
    <HeroBanner onNavigate={handleNavigate} />
    <div className="shop-container service-strip"><span><b>01</b> 원하는 부품 선택</span><span><b>02</b> 실시간 호환성 확인</span><span><b>03</b> 나만의 PC 견적 완성</span><strong>좋은 PC의 시작, ComPick</strong></div>
    <div className="shop-container breadcrumb">홈 <span>/</span> {activeTab === "ai" ? "Ai PC" : activeTab === "prebuilt" ? "완제품 PC" : "PC 견적"}</div>
    <div id="catalog" className="shop-container workspace-grid">
      <div className="lg:order-1">
        <CategoryNav
          categories={categories}
          activeTab={activeTab === "ai" ? "parts" : activeTab}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          onSelectPrebuilt={() => handleNavigate("prebuilt")}
        />
      </div>

      <main className="flex min-w-0 flex-col gap-4 lg:order-2">
        {activeTab === "ai" ? <AiPcGuide activeCategory={activeCategory} onSelectCategory={(code) => { setActiveCategory(code); setActiveFilters({}); }} /> :
          <div className="section-heading"><div><p className="section-eyebrow">{activeTab === "parts" ? "CUSTOM PC" : "COMPICK SELECT"}</p><h1>{activeTab === "parts" ? "나만의 PC 견적" : "추천 완제품 PC"}</h1></div><span>용도와 예산에 맞게, 하나씩 골라보세요.</span></div>}


        <div className="catalog-tabs" aria-label="상품 보기">
          {([{ id: "parts", label: "부품으로 견적하기" }, { id: "prebuilt", label: "추천 완제품 PC" }, { id: "ai", label: "Ai PC" }] as const).map((tab) => <button key={tab.id} aria-pressed={activeTab === tab.id} onClick={() => handleNavigate(tab.id)}>{tab.label}</button>)}
        </div>

        {activeTab !== "prebuilt" ? (
          <>
            <div className="flex items-center justify-between"><h2 className="text-base font-bold text-ink">{searchQuery !== null ? (searchQuery ? `“${searchQuery}” 검색 결과` : "전체 PC 부품") : activeCategoryName}</h2>{searchQuery !== null && <button className="text-xs text-primary" onClick={() => setSearchQuery(null)}>검색 초기화</button>}</div>
            {searchQuery === null ? <ProductFilters
              category={activeCategory}
              productCount={visibleProducts.length}
              categoryProducts={categoryProducts}
              activeFilters={activeFilters}
              onToggleFilter={handleToggleFilter}
              onClearFilters={() => setActiveFilters({})}
              sortBy={sortBy}
              onChangeSortBy={setSortBy}
            /> : <p className="text-sm text-ink-muted">전체 {visibleProducts.length}개 상품</p>}
            <ProductList
              products={visibleProducts}
              selectedPartIds={Object.values(selectedParts).flatMap((part) => part ? [part.id] : [])}
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

      <div id="my-quote" className="quote-column lg:order-3">
        <QuotePanel />
        <StatusBar />
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
    <footer id="shopping-guide" className="shop-footer"><div className="shop-container footer-content">
      <div><Link href="/" className="brand">Com<span>Pick</span></Link><p>내게 맞는 한 대를 완성하는 곳.</p><small>© ComPick. All rights reserved.</small></div>
      <div><strong>PC 견적 이용안내</strong><p>부품을 담으면 호환성과 합계가 자동으로 계산됩니다.<br />완제품 구성도 불러와 원하는 부품으로 바꿀 수 있습니다.</p></div>
      <div><strong>구매 전 확인해 주세요</strong><p>현재 주문·결제 서비스는 준비 중입니다.<br />상품별 상세 사양과 호환 여부를 확인해 주세요.</p></div>
    </div></footer>
    </>
  );
}
