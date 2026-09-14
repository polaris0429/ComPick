"use client";

import { applyDiscount, formatKRW } from "@/lib/format";
import type { PrebuiltSummary } from "@/lib/repositories/catalog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PrebuiltCardProps {
  prebuilt: PrebuiltSummary;
  onSelect: () => void;
}

export function PrebuiltCard({ prebuilt, onSelect }: PrebuiltCardProps) {
  const discounted = applyDiscount(prebuilt.price, prebuilt.discountRate);
  // 완제품은 케이스 안에 담긴 완성형 PC이므로, 실사진이 없을 때는 케이스
  // placeholder 일러스트를 재사용합니다.
  const src = prebuilt.images[0] ?? "/placeholders/case.svg";

  return (
    <div className="flex items-center gap-4 border-b border-line px-3 py-4 transition-colors hover:bg-paper">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md border border-line">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={prebuilt.name} className={cn("h-full w-full object-cover")} />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-bold text-ink">{prebuilt.name}</h3>
        {prebuilt.description && <p className="mt-0.5 text-xs text-ink-muted">{prebuilt.description}</p>}
        <p className="mt-1.5 truncate text-xs text-ink-muted">
          {prebuilt.components.map((c) => c.name).join(" · ")}
        </p>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-2">
        <div className="text-right">
          {prebuilt.discountRate > 0 && (
            <div className="flex items-center justify-end gap-1.5">
              <Badge tone="danger">{prebuilt.discountRate}%</Badge>
              <span className="text-xs text-ink-muted line-through">{formatKRW(prebuilt.price)}</span>
            </div>
          )}
          <p className="font-mono text-base font-bold text-ink">{formatKRW(discounted)}</p>
        </div>

        <Button type="button" size="sm" onClick={onSelect}>
          이 구성으로 시작
        </Button>
      </div>
    </div>
  );
}
