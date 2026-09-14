"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, ClipboardList, X } from "lucide-react";
import type { CategoryCode } from "@/generated/prisma";
import { formatKRW } from "@/lib/format";
import { useBuildStore } from "@/store/build-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CATEGORY_ORDER: CategoryCode[] = [
  "CPU",
  "MOTHERBOARD",
  "RAM",
  "GPU",
  "STORAGE",
  "PSU",
  "CASE",
  "COOLER",
];

export function QuotePanel() {
  const selectedParts = useBuildStore((s) => s.selectedParts);
  const compatibility = useBuildStore((s) => s.compatibility);
  const totalPrice = useBuildStore((s) => s.totalPrice);
  const totalDiscountedPrice = useBuildStore((s) => s.totalDiscountedPrice);
  const removePart = useBuildStore((s) => s.removePart);
  const clearAll = useBuildStore((s) => s.clearAll);

  const [showPaymentNotice, setShowPaymentNotice] = useState(false);

  const orderedParts = CATEGORY_ORDER.map((code) => selectedParts[code]).filter(
    (part): part is NonNullable<typeof part> => Boolean(part),
  );
  const hasErrors = compatibility.issues.some((i) => i.severity === "error");
  const canCheckout = orderedParts.length > 0 && !hasErrors;
  const discountAmount = totalPrice - totalDiscountedPrice;

  return (
    <aside className="sticky top-6 flex w-full flex-col gap-4 rounded-xl border border-line bg-paper-raised p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-1.5 text-sm font-bold text-ink">
          <ClipboardList className="h-4 w-4 text-primary" />내 견적
        </h2>
        {orderedParts.length > 0 && (
          <button type="button" onClick={clearAll} className="text-xs text-ink-muted hover:text-danger">
            전체 비우기
          </button>
        )}
      </div>

      {orderedParts.length > 0 && (
        <div
          className={cn(
            "flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-bold",
            hasErrors
              ? "bg-danger-soft text-danger"
              : compatibility.issues.length > 0
                ? "bg-warning-soft text-warning"
                : "bg-success-soft text-success",
          )}
        >
          {hasErrors ? (
            <AlertTriangle className="h-4 w-4 shrink-0" />
          ) : compatibility.issues.length > 0 ? (
            <AlertTriangle className="h-4 w-4 shrink-0" />
          ) : (
            <CheckCircle2 className="h-4 w-4 shrink-0" />
          )}
          {hasErrors
            ? `호환 불가 ${compatibility.issues.filter((i) => i.severity === "error").length}건`
            : compatibility.issues.length > 0
              ? `확인 필요 ${compatibility.issues.length}건`
              : "모든 부품이 호환됩니다"}
        </div>
      )}

      {compatibility.issues.length > 0 && (
        <ul className="flex flex-col gap-1">
          {compatibility.issues.map((issue, i) => (
            <li
              key={`${issue.ruleId}-${i}`}
              className={issue.severity === "error" ? "text-xs text-danger" : "text-xs text-ink-muted"}
            >
              · {issue.message}
            </li>
          ))}
        </ul>
      )}

      {orderedParts.length === 0 ? (
        <p className="rounded-lg border border-dashed border-line py-8 text-center text-xs text-ink-muted">
          왼쪽에서 부품을 선택하면 여기에 담깁니다.
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {orderedParts.map((part) => (
            <li key={part.id} className="flex items-start justify-between gap-2 text-xs">
              <div className="min-w-0">
                <p className="truncate text-ink">{part.name}</p>
                <p className="font-mono text-ink-muted">{formatKRW(part.price)}</p>
              </div>
              <button
                type="button"
                onClick={() => removePart(part.categoryCode)}
                aria-label={`${part.name} 제거`}
                className="shrink-0 text-ink-muted hover:text-danger"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-col gap-1.5 border-t border-line pt-3 text-xs">
        <div className="flex justify-between text-ink-muted">
          <span>상품 합계</span>
          <span className="font-mono">{formatKRW(totalPrice)}</span>
        </div>
        <div className="flex justify-between text-ink-muted">
          <span>할인 금액</span>
          <span className="font-mono text-danger">-{formatKRW(discountAmount)}</span>
        </div>
        <div className="flex justify-between text-ink-muted">
          <span>배송비</span>
          <span className="font-mono">무료</span>
        </div>
        <div className="flex items-baseline justify-between border-t border-line pt-1.5">
          <span className="text-sm font-bold text-ink">총 결제금액</span>
          <span className="font-mono text-lg font-extrabold text-primary">
            {formatKRW(totalDiscountedPrice)}
          </span>
        </div>
      </div>

      <Button type="button" disabled={!canCheckout} onClick={() => setShowPaymentNotice(true)} className="w-full">
        Toss Pay로 결제하기
      </Button>
      {showPaymentNotice && (
        <p className="text-center text-xs text-ink-muted">결제 연동은 Step 5에서 제공됩니다.</p>
      )}
    </aside>
  );
}
