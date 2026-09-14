"use client";

import { X } from "lucide-react";
import type { CategoryCode } from "@/generated/prisma";
import { CATEGORY_ATTRIBUTE_FIELDS } from "@/lib/catalog-config";
import { prettifyValue } from "@/lib/format";
import type { CatalogProduct } from "@/lib/repositories/catalog";
import { cn } from "@/lib/utils";

export type SortOption = "popular" | "price-asc" | "price-desc" | "discount";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "popular", label: "인기순" },
  { value: "price-asc", label: "낮은가격순" },
  { value: "price-desc", label: "높은가격순" },
  { value: "discount", label: "할인순" },
];

interface ProductFiltersProps {
  category: CategoryCode;
  productCount: number;
  /** 필터 옵션 값을 뽑아낼, 아직 필터를 적용하지 않은 해당 카테고리 상품 전체 */
  categoryProducts: CatalogProduct[];
  activeFilters: Record<string, Set<string>>;
  onToggleFilter: (key: string, value: string) => void;
  onClearFilters: () => void;
  sortBy: SortOption;
  onChangeSortBy: (sort: SortOption) => void;
}

function getFilterOptions(products: CatalogProduct[], key: string): string[] {
  const values = new Set<string>();
  for (const product of products) {
    const raw = (product.attributes as unknown as Record<string, unknown>)[key];
    if (raw !== undefined && raw !== null) values.add(String(raw));
  }
  return Array.from(values).sort();
}

export function ProductFilters({
  category,
  productCount,
  categoryProducts,
  activeFilters,
  onToggleFilter,
  onClearFilters,
  sortBy,
  onChangeSortBy,
}: ProductFiltersProps) {
  const filterFields = CATEGORY_ATTRIBUTE_FIELDS[category].filter((f) => f.filterable);
  const activeChips = Object.entries(activeFilters).flatMap(([key, values]) =>
    Array.from(values).map((value) => ({ key, value })),
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-lg border border-line bg-paper-raised p-3">
        {filterFields.map((field) => {
          const options = getFilterOptions(categoryProducts, field.key);
          if (options.length <= 1) return null;
          const selected = activeFilters[field.key] ?? new Set<string>();

          return (
            <div key={field.key} className="flex items-center gap-1.5">
              <span className="text-xs font-medium text-ink-muted">{field.label}</span>
              <div className="flex flex-wrap gap-1">
                {options.map((value) => {
                  const isActive = selected.has(value);
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => onToggleFilter(field.key, value)}
                      aria-pressed={isActive}
                      className={cn(
                        "rounded border px-2.5 py-1 text-xs font-medium transition-colors",
                        isActive
                          ? "border-primary bg-primary text-white"
                          : "border-line text-ink-muted hover:border-primary hover:text-primary",
                      )}
                    >
                      {prettifyValue(value)}
                      {field.unit ? ` ${field.unit}` : ""}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {activeChips.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5">
          {activeChips.map((chip) => (
            <button
              key={`${chip.key}-${chip.value}`}
              type="button"
              onClick={() => onToggleFilter(chip.key, chip.value)}
              className="flex items-center gap-1 rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary-dark"
            >
              {prettifyValue(chip.value)}
              <X className="h-3 w-3" />
            </button>
          ))}
          <button
            type="button"
            onClick={onClearFilters}
            className="text-xs font-medium text-ink-muted underline hover:text-ink"
          >
            전체 해제
          </button>
        </div>
      )}

      <div className="flex flex-wrap gap-2 items-center justify-between border-b border-line pb-2">
        <p className="text-sm text-ink-muted">
          전체 <span className="font-bold text-ink">{productCount}</span>개
        </p>
        <div className="flex gap-1">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onChangeSortBy(option.value)}
              className={cn(
                "rounded px-2 py-1 text-xs font-medium transition-colors",
                sortBy === option.value
                  ? "text-primary font-bold"
                  : "text-ink-muted hover:text-ink",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
