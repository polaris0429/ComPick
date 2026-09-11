"use client";

import { ArrowUpDown } from "lucide-react";
import type { CategoryCode } from "@/generated/prisma";
import { CATEGORY_ATTRIBUTE_FIELDS } from "@/lib/catalog-config";
import { prettifyValue } from "@/lib/format";
import type { CatalogProduct } from "@/lib/repositories/catalog";
import { cn } from "@/lib/utils";

export type SortOption = "popular" | "price-asc" | "price-desc";

const SORT_LABELS: Record<SortOption, string> = {
  popular: "인기순",
  "price-asc": "낮은 가격순",
  "price-desc": "높은 가격순",
};

interface ProductFiltersProps {
  category: CategoryCode;
  /** 필터 옵션 값을 뽑아낼, 아직 필터를 적용하지 않은 해당 카테고리 상품 전체 */
  categoryProducts: CatalogProduct[];
  activeFilters: Record<string, Set<string>>;
  onToggleFilter: (key: string, value: string) => void;
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
  categoryProducts,
  activeFilters,
  onToggleFilter,
  sortBy,
  onChangeSortBy,
}: ProductFiltersProps) {
  const filterFields = CATEGORY_ATTRIBUTE_FIELDS[category].filter((f) => f.filterable);

  return (
    <div className="flex flex-col gap-3 border-b border-line pb-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {filterFields.map((field) => {
            const options = getFilterOptions(categoryProducts, field.key);
            if (options.length <= 1) return null;
            const selected = activeFilters[field.key] ?? new Set<string>();

            return (
              <div key={field.key} className="flex items-center gap-1.5">
                <span className="text-xs text-ink-muted">{field.label}</span>
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
                          "rounded border px-2 py-0.5 text-xs transition-colors",
                          isActive
                            ? "border-copper bg-copper text-white"
                            : "border-line text-ink-muted hover:border-ink-muted hover:text-ink",
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

        <label className="flex shrink-0 items-center gap-1.5 text-xs text-ink-muted">
          <ArrowUpDown className="h-3.5 w-3.5" />
          <select
            value={sortBy}
            onChange={(e) => onChangeSortBy(e.target.value as SortOption)}
            className="rounded border border-line bg-paper-raised px-2 py-1 text-xs text-ink"
          >
            {(Object.keys(SORT_LABELS) as SortOption[]).map((option) => (
              <option key={option} value={option}>
                {SORT_LABELS[option]}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
