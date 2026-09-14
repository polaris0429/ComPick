"use client";

import { useEffect, useState } from "react";
import { Check, Plus, ShoppingCart, Truck, X } from "lucide-react";
import { ATTRIBUTE_LABELS, CATEGORY_ATTRIBUTE_FIELDS } from "@/lib/catalog-config";
import { applyDiscount, formatKRW, prettifyValue } from "@/lib/format";
import type { CatalogProduct } from "@/lib/repositories/catalog";
import { ProductImage } from "@/components/shop/product-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductDetailModalProps {
  product: CatalogProduct;
  categoryName: string;
  isSelected: boolean;
  onClose: () => void;
  onSelect: () => void;
}

type TabKey = "info" | "specs" | "reviews" | "delivery";

const TABS: { key: TabKey; label: string }[] = [
  { key: "info", label: "상품정보" },
  { key: "specs", label: "상세 스펙" },
  { key: "reviews", label: "상품평" },
  { key: "delivery", label: "배송/교환/반품" },
];

function formatAttributeValue(value: unknown): string {
  if (value === null || value === undefined) return "-";
  if (typeof value === "boolean") return value ? "있음" : "없음";
  if (Array.isArray(value)) return value.map((item) => prettifyValue(String(item))).join(", ");
  if (typeof value === "string") return prettifyValue(value);
  return String(value);
}

export function ProductDetailModal({
  product,
  categoryName,
  isSelected,
  onClose,
  onSelect,
}: ProductDetailModalProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("info");

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const attrs = product.attributes as unknown as Record<string, unknown>;
  const discounted = applyDiscount(product.price, product.discountRate);
  const highlightFields = CATEGORY_ATTRIBUTE_FIELDS[product.categoryCode];
  const marketing = product.marketingContent;

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-paper-raised shadow-lg"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-paper-raised text-ink-muted shadow hover:text-ink"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex flex-col gap-6 overflow-y-auto p-6">
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="aspect-square w-full shrink-0 overflow-hidden rounded-lg border border-line sm:w-72">
              <ProductImage imageUrl={product.image} categoryCode={product.categoryCode} alt={product.name} />
            </div>

            <div className="flex flex-1 flex-col gap-3">
              <div>
                <Badge tone="primary">{categoryName}</Badge>
                <h2 className="mt-2 text-lg font-bold text-ink">{product.name}</h2>
                <p className="text-sm text-ink-muted">{product.brand}</p>
              </div>

              <div className="flex flex-col gap-1 rounded-lg border border-line p-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-ink-muted">제조사</span>
                  <span className="font-medium text-ink">{product.brand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">제품분류</span>
                  <span className="font-medium text-ink">{categoryName}</span>
                </div>
                {highlightFields.slice(0, 2).map((field) => {
                  const raw = attrs[field.key];
                  if (raw === null || raw === undefined) return null;
                  const display = typeof raw === "string" ? prettifyValue(raw) : String(raw);
                  return (
                    <div key={field.key} className="flex justify-between">
                      <span className="text-ink-muted">{field.label}</span>
                      <span className="font-mono font-medium text-ink">
                        {display}
                        {field.unit ? ` ${field.unit}` : ""}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto">
                {product.discountRate > 0 && (
                  <div className="flex items-center gap-1.5">
                    <Badge tone="danger">{product.discountRate}%</Badge>
                    <span className="text-xs text-ink-muted line-through">{formatKRW(product.price)}</span>
                  </div>
                )}
                <p className="font-mono text-2xl font-extrabold text-ink">{formatKRW(discounted)}</p>
              </div>

              <div className="flex gap-2">
                <Button type="button" variant="outline" className="flex-1">
                  <ShoppingCart className="h-4 w-4" /> 장바구니
                </Button>
                <Button
                  type="button"
                  variant={isSelected ? "outline" : "primary"}
                  onClick={onSelect}
                  className="flex-1"
                >
                  {isSelected ? (
                    <>
                      <Check className="h-4 w-4" /> 담김
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4" /> 견적에 담기
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-1 border-b border-line">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  "border-b-2 px-3 pb-2.5 text-sm font-bold transition-colors",
                  activeTab === tab.key
                    ? "border-primary text-primary"
                    : "border-transparent text-ink-muted hover:text-ink",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "info" &&
            (marketing ? (
              <div className="flex flex-col gap-6">
                <div className="rounded-xl bg-gradient-to-br from-dark to-dark-raised p-6 text-white">
                  <p className="text-xs font-bold text-white/60">{marketing.eyebrow}</p>
                  <h3 className="mt-1.5 text-xl font-extrabold">{marketing.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{marketing.text}</p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {marketing.features.map((feature) => (
                    <div key={feature.title} className="rounded-lg border border-line p-4">
                      <span className="text-xl">{feature.icon}</span>
                      <p className="mt-2 text-sm font-bold text-ink">{feature.title}</p>
                      <p className="mt-1 text-xs text-ink-muted">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl bg-primary-soft p-6">
                  <h4 className="text-base font-bold text-primary-dark">{marketing.promoTitle}</h4>
                  <p className="mt-1.5 text-sm text-ink-muted">{marketing.promoText}</p>
                </div>
              </div>
            ) : (
              <p className="py-8 text-center text-sm text-ink-muted">등록된 상품 소개가 없습니다.</p>
            ))}

          {activeTab === "specs" && (
            <dl className="grid grid-cols-1 gap-x-6 gap-y-0 sm:grid-cols-2">
              {Object.entries(attrs).map(([key, value]) => {
                const config = ATTRIBUTE_LABELS[key];
                return (
                  <div key={key} className="flex items-center justify-between border-b border-line py-2 text-sm">
                    <dt className="text-ink-muted">{config?.label ?? key}</dt>
                    <dd className="font-mono font-medium text-ink">
                      {formatAttributeValue(value)}
                      {config?.unit ? ` ${config.unit}` : ""}
                    </dd>
                  </div>
                );
              })}
            </dl>
          )}

          {activeTab === "reviews" && (
            <p className="py-12 text-center text-sm text-ink-muted">아직 등록된 상품평이 없습니다.</p>
          )}

          {activeTab === "delivery" && (
            <div className="flex flex-col gap-3 text-sm text-ink-muted">
              <div className="flex items-start gap-2">
                <Truck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p>주문 확인 후 1~2일 이내 출고되며, 평균 2~3일 내 수령하실 수 있습니다.</p>
              </div>
              <p>단순 변심에 의한 교환·반품은 상품 수령 후 7일 이내 가능하며, 왕복 배송비는 구매자 부담입니다.</p>
              <p>상품 하자·오배송의 경우 배송비 없이 교환 또는 환불해 드립니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
