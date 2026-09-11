import type { CatalogProduct } from "@/lib/repositories/catalog";
import { ProductCard } from "@/components/shop/product-card";

interface ProductGridProps {
  products: CatalogProduct[];
  selectedCategoryPartId?: string;
  onSelect: (product: CatalogProduct) => void;
  onOpenDetail: (product: CatalogProduct) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

export function ProductGrid({
  products,
  selectedCategoryPartId,
  onSelect,
  onOpenDetail,
  onClearFilters,
  hasActiveFilters,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-md border border-dashed border-line py-16 text-center">
        <p className="text-sm text-ink-muted">선택한 조건에 맞는 상품이 없습니다.</p>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="text-sm font-medium text-copper hover:text-copper-dark"
          >
            필터 초기화
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isSelected={product.id === selectedCategoryPartId}
          onSelect={() => onSelect(product)}
          onOpenDetail={() => onOpenDetail(product)}
        />
      ))}
    </div>
  );
}
