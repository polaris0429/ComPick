"use client";

import { Check, Plus } from "lucide-react";
import { CATEGORY_ATTRIBUTE_FIELDS } from "@/lib/catalog-config";
import { applyDiscount, formatKRW, prettifyValue } from "@/lib/format";
import type { CatalogProduct } from "@/lib/repositories/catalog";
import { ProductImage } from "@/components/shop/product-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductListItemProps {
  product: CatalogProduct;
  isSelected: boolean;
  onSelect: () => void;
  onOpenDetail: () => void;
}

/** 다나와/쿠팡식 가로 리스트 행. [이미지] [이름+스펙] [가격+담기]. */
export function ProductListItem({ product, isSelected, onSelect, onOpenDetail }: ProductListItemProps) {
  const fields = CATEGORY_ATTRIBUTE_FIELDS[product.categoryCode];
  const attrs = product.attributes as unknown as Record<string, unknown>;
  const discounted = applyDiscount(product.price, product.discountRate);

  return (
    <div
      className={cn(
        "flex items-center gap-4 border-b border-line px-3 py-4 transition-colors hover:bg-paper",
        isSelected && "bg-primary-soft/40",
      )}
    >
      <button
        type="button"
        onClick={onOpenDetail}
        aria-label={`${product.name} 상세보기`}
        className="h-20 w-20 shrink-0 overflow-hidden rounded-md border border-line"
      >
        <ProductImage imageUrl={product.image} categoryCode={product.categoryCode} alt={product.name} />
      </button>

      <div className="min-w-0 flex-1">
        <button type="button" onClick={onOpenDetail} className="text-left">
          <p className="text-xs text-ink-muted">{product.brand}</p>
          <h3 className="truncate text-sm font-bold text-ink hover:text-primary">{product.name}</h3>
        </button>

        <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
          {fields.map((field) => {
            const raw = attrs[field.key];
            if (raw === null || raw === undefined) return null;
            const display = typeof raw === "string" ? prettifyValue(raw) : String(raw);
            return (
              <span key={field.key} className="text-xs text-ink-muted">
                {field.label} <span className="font-mono text-ink">{display}{field.unit ? ` ${field.unit}` : ""}</span>
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-2">
        <div className="text-right">
          {product.discountRate > 0 && (
            <div className="flex items-center justify-end gap-1.5">
              <Badge tone="danger">{product.discountRate}%</Badge>
              <span className="text-xs text-ink-muted line-through">{formatKRW(product.price)}</span>
            </div>
          )}
          <p className="font-mono text-base font-bold text-ink">{formatKRW(discounted)}</p>
        </div>

        <Button type="button" size="sm" variant={isSelected ? "outline" : "primary"} onClick={onSelect}>
          {isSelected ? (
            <>
              <Check className="h-3.5 w-3.5" /> 담김
            </>
          ) : (
            <>
              <Plus className="h-3.5 w-3.5" /> 담기
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
