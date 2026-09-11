"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, X } from "lucide-react";
import type { CategoryCode } from "@/generated/prisma";
import { formatKRW } from "@/lib/format";
import { useBuildStore } from "@/store/build-store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

  return (
    <aside className="sticky top-6 flex w-full flex-col gap-4 rounded-md border border-line bg-paper-raised p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-ink">내 견적</h2>
        {orderedParts.length > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="text-xs text-ink-muted hover:text-alert"
          >
            전체 비우기
          </button>
        )}
      </div>

      {orderedParts.length === 0 ? (
        <p className="rounded border border-dashed border-line py-8 text-center text-xs text-ink-muted">
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
                className="shrink-0 text-ink-muted hover:text-alert"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-col gap-1 border-t border-line pt-3">
        {hasErrors ? (
          <Badge tone="alert" className="w-fit">
            <AlertTriangle className="h-3.5 w-3.5" /> 호환 불가 {compatibility.issues.filter((i) => i.severity === "error").length}건
          </Badge>
        ) : compatibility.issues.length > 0 ? (
          <Badge tone="alert" className="w-fit">
            <AlertTriangle className="h-3.5 w-3.5" /> 확인 필요 {compatibility.issues.length}건
          </Badge>
        ) : orderedParts.length > 0 ? (
          <Badge tone="signal" className="w-fit">
            <CheckCircle2 className="h-3.5 w-3.5" /> 호환 정상
          </Badge>
        ) : null}

        {compatibility.issues.length > 0 && (
          <ul className="flex flex-col gap-1 pt-1">
            {compatibility.issues.map((issue, i) => (
              <li
                key={`${issue.ruleId}-${i}`}
                className={
                  issue.severity === "error"
                    ? "text-xs text-alert"
                    : "text-xs text-ink-muted"
                }
              >
                {issue.message}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-col gap-1 border-t border-line pt-3">
        <div className="flex justify-between text-xs text-ink-muted">
          <span>정가 합계</span>
          <span className="font-mono">{formatKRW(totalPrice)}</span>
        </div>
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-ink">할인 적용가</span>
          <span className="font-mono text-lg font-semibold text-ink">
            {formatKRW(totalDiscountedPrice)}
          </span>
        </div>
      </div>

      <Button
        type="button"
        disabled={!canCheckout}
        onClick={() => setShowPaymentNotice(true)}
        className="w-full"
      >
        결제하기
      </Button>
      {showPaymentNotice && (
        <p className="text-center text-xs text-ink-muted">
          결제 연동은 Step 5에서 제공됩니다.
        </p>
      )}
    </aside>
  );
}
