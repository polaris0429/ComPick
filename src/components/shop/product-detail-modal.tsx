"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { ATTRIBUTE_LABELS } from "@/lib/catalog-config";
import { applyDiscount, formatKRW, prettifyValue } from "@/lib/format";
import type { CatalogProduct } from "@/lib/repositories/catalog";
import { ProductImage } from "@/components/shop/product-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductDetailModalProps {
  product: CatalogProduct;
  isSelected: boolean;
  onClose: () => void;
  onSelect: () => void;
}

function formatAttributeValue(value: unknown): string {
  if (value === null || value === undefined) return "-";
  if (typeof value === "boolean") return value ? "있음" : "없음";
  if (Array.isArray(value)) {
    return value.map((item) => prettifyValue(String(item))).join(", ");
  }
  if (typeof value === "string") return prettifyValue(value);
  return String(value);
}

export function ProductDetailModal({ product, isSelected, onClose, onSelect }: ProductDetailModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const attrs = product.attributes as unknown as Record<string, unknown>;
  const discounted = applyDiscount(product.price, product.discountRate);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-md bg-paper-raised shadow-lg"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line p-4">
          <div>
            <p className="text-xs text-ink-muted">{product.brand}</p>
            <h2 className="text-base font-semibold text-ink">{product.name}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="shrink-0 text-ink-muted hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-4 sm:flex-row">
          <div className="aspect-square w-full shrink-0 overflow-hidden rounded-md border border-line sm:w-64">
            <ProductImage imageUrl={product.imageUrl} categoryCode={product.categoryCode} alt={product.name} />
          </div>

          <dl className="grid flex-1 auto-rows-min grid-cols-2 gap-x-4 gap-y-2">
            {Object.entries(attrs).map(([key, value]) => {
              const config = ATTRIBUTE_LABELS[key];
              return (
                <div key={key} className="flex flex-col gap-0.5 border-b border-line pb-1.5">
                  <dt className="text-xs text-ink-muted">{config?.label ?? key}</dt>
                  <dd className="font-mono text-sm text-ink">
                    {formatAttributeValue(value)}
                    {config?.unit ? ` ${config.unit}` : ""}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-line p-4">
          <div>
            {product.discountRate > 0 && (
              <div className="flex items-center gap-1.5">
                <Badge tone="alert">{product.discountRate}%</Badge>
                <span className="text-xs text-ink-muted line-through">{formatKRW(product.price)}</span>
              </div>
            )}
            <p className="font-mono text-lg font-semibold text-ink">{formatKRW(discounted)}</p>
          </div>

          <Button type="button" variant={isSelected ? "outline" : "primary"} onClick={onSelect}>
            {isSelected ? "담김" : "장바구니에 담기"}
          </Button>
        </div>
      </div>
    </div>
  );
}
