"use client";

import { Check, Plus } from "lucide-react";
import { CATEGORY_ATTRIBUTE_FIELDS } from "@/lib/catalog-config";
import { applyDiscount, formatKRW, prettifyValue } from "@/lib/format";
import type { CatalogProduct } from "@/lib/repositories/catalog";
import { ProductImage } from "@/components/shop/product-image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: CatalogProduct;
  isSelected: boolean;
  onSelect: () => void;
  onOpenDetail: () => void;
}

export function ProductCard({ product, isSelected, onSelect, onOpenDetail }: ProductCardProps) {
  const fields = CATEGORY_ATTRIBUTE_FIELDS[product.categoryCode];
  const attrs = product.attributes as unknown as Record<string, unknown>;
  const discounted = applyDiscount(product.price, product.discountRate);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpenDetail}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenDetail();
        }
      }}
      aria-label={`${product.name} 상세보기`}
      className={cn(
        "flex cursor-pointer flex-col overflow-hidden rounded-md border-l-2 border-y border-r border-line bg-paper-raised transition-shadow hover:shadow-md",
        isSelected && "border-l-copper ring-1 ring-copper",
      )}
    >
      <div className="relative aspect-square border-b border-line">
        <ProductImage imageUrl={product.imageUrl} categoryCode={product.categoryCode} alt={product.name} />

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          aria-label={isSelected ? `${product.name} 담김` : `${product.name} 장바구니에 담기`}
          aria-pressed={isSelected}
          className={cn(
            "absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full shadow-sm transition-colors",
            isSelected
              ? "bg-copper text-white"
              : "bg-paper-raised text-ink hover:bg-copper hover:text-white",
          )}
        >
          {isSelected ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className="text-xs text-ink-muted">{product.brand}</p>
          <h3 className="text-sm font-medium leading-snug text-ink">{product.name}</h3>
        </div>

        <dl className="grid grid-cols-2 gap-x-3 gap-y-1">
          {fields.map((field) => {
            const raw = attrs[field.key];
            if (raw === null || raw === undefined) return null;
            const display = typeof raw === "string" ? prettifyValue(raw) : String(raw);
            return (
              <div key={field.key} className="flex justify-between gap-2 text-xs">
                <dt className="text-ink-muted">{field.label}</dt>
                <dd className="font-mono text-ink">
                  {display}
                  {field.unit ? ` ${field.unit}` : ""}
                </dd>
              </div>
            );
          })}
        </dl>

        <div className="mt-auto pt-1">
          {product.discountRate > 0 && (
            <div className="flex items-center gap-1.5">
              <Badge tone="alert">{product.discountRate}%</Badge>
              <span className="text-xs text-ink-muted line-through">{formatKRW(product.price)}</span>
            </div>
          )}
          <p className="font-mono text-base font-semibold text-ink">{formatKRW(discounted)}</p>
        </div>
      </div>
    </div>
  );
}
