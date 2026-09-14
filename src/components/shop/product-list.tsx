import type { CatalogProduct } from "@/lib/repositories/catalog";
import { ProductListItem } from "@/components/shop/product-list-item";

interface ProductListProps {
  products: CatalogProduct[];
  selectedCategoryPartId?: string;
  onSelect: (product: CatalogProduct) => void;
  onOpenDetail: (product: CatalogProduct) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

export function ProductList({
  products,
  selectedCategoryPartId,
  onSelect,
  onOpenDetail,
  onClearFilters,
  hasActiveFilters,
}: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-dashed border-line bg-paper-raised py-16 text-center">
        <p className="text-sm text-ink-muted">선택한 조건에 맞는 상품이 없습니다.</p>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="text-sm font-bold text-primary hover:text-primary-dark"
          >
            필터 초기화
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-line bg-paper-raised">
      {products.map((product) => (
        <ProductListItem
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
