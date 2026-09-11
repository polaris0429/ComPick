"use client";

import { Package } from "lucide-react";
import { applyDiscount, formatKRW } from "@/lib/format";
import type { PrebuiltSummary } from "@/lib/repositories/catalog";
import { ImagePlaceholder } from "@/components/shop/product-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PrebuiltCardProps {
  prebuilt: PrebuiltSummary;
  onSelect: () => void;
}

export function PrebuiltCard({ prebuilt, onSelect }: PrebuiltCardProps) {
  const discounted = applyDiscount(prebuilt.price, prebuilt.discountRate);

  return (
    <div className="flex flex-col overflow-hidden rounded-md border-l-2 border-y border-r border-line border-l-circuit bg-paper-raised">
      <div className="aspect-[2/1] border-b border-line">
        {prebuilt.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={prebuilt.imageUrl}
            alt={prebuilt.name}
            className={cn("h-full w-full object-cover")}
          />
        ) : (
          <ImagePlaceholder icon={Package} alt={prebuilt.name} />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-sm font-medium text-ink">{prebuilt.name}</h3>
          {prebuilt.description && (
            <p className="mt-1 text-xs text-ink-muted">{prebuilt.description}</p>
          )}
        </div>

        <ul className="flex flex-col gap-0.5">
          {prebuilt.components.map((component) => (
            <li key={component.id} className="flex justify-between gap-2 text-xs">
              <span className="text-ink-muted">{component.brand}</span>
              <span className="truncate text-ink">{component.name}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between gap-2 pt-1">
          <div>
            {prebuilt.discountRate > 0 && (
              <div className="flex items-center gap-1.5">
                <Badge tone="alert">{prebuilt.discountRate}%</Badge>
                <span className="text-xs text-ink-muted line-through">{formatKRW(prebuilt.price)}</span>
              </div>
            )}
            <p className="font-mono text-base font-semibold text-ink">{formatKRW(discounted)}</p>
          </div>

          <Button type="button" size="sm" variant="secondary" onClick={onSelect}>
            이 구성으로 시작
          </Button>
        </div>
      </div>
    </div>
  );
}
