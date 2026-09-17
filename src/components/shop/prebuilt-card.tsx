"use client";
/* eslint-disable @next/next/no-img-element -- Catalog images use uploaded URLs. */

import { AddToCart } from "@/components/member/add-to-cart";
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
    <div className="product-row items-center border-b border-line transition-colors hover:bg-paper">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md border border-line">
        
        <img src={src} alt={prebuilt.name} className={cn("h-full w-full object-contain")} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs text-primary">{{AI_MINI:"AI 미니 PC",AI_PREBUILT:"AI 완제품",AI_BUILD:"AI 추천 조합"}[prebuilt.kind??""]}</p><h3 className="text-sm font-bold text-ink">{prebuilt.name}</h3>
        {prebuilt.description && <p className="mt-0.5 text-xs text-ink-muted">{prebuilt.description}</p>}
        <p className="mt-1.5 truncate text-xs text-ink-muted">
          {prebuilt.components.map((c) => c.name+((c.quantity??1)>1?` × ${c.quantity}`:"")).join(" · ")}
        </p>
        <details className="mt-3 text-sm"><summary className="cursor-pointer">상품정보 · 상세 스펙</summary><p className="whitespace-pre-wrap py-3">{prebuilt.specText || "상세 스펙을 준비 중입니다."}</p>{prebuilt.infoImages?.map(src=><div key={src}><img src={src} alt={`${prebuilt.name} 상품정보`} className="w-full"/></div>)}</details>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-2">
        <div className="text-right">
          {prebuilt.discountRate > 0 && (
            <div className="flex items-center justify-end gap-1.5">
              <Badge tone="danger">{prebuilt.discountRate}%</Badge>
              <span className="text-xs text-ink-muted line-through">{formatKRW(prebuilt.price)}</span>
            </div>
          )}
          <p className="product-price text-ink">{formatKRW(discounted)}</p>
        </div>

        <AddToCart prebuiltPCId={prebuilt.id}/>
        {prebuilt.components.length > 0 && <Button type="button" size="sm" onClick={onSelect}>
          이 구성으로 시작
        </Button>}
      </div>
    </div>
  );
}
