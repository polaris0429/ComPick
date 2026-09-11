"use client";

import { Package } from "lucide-react";
import type { CategoryCode } from "@/generated/prisma";
import { CATEGORY_ICONS } from "@/lib/catalog-config";
import type { CategorySummary } from "@/lib/repositories/catalog";
import { cn } from "@/lib/utils";

interface CategoryNavProps {
  categories: CategorySummary[];
  activeTab: "parts" | "prebuilt";
  activeCategory: CategoryCode;
  onSelectCategory: (code: CategoryCode) => void;
  onSelectPrebuilt: () => void;
}

export function CategoryNav({
  categories,
  activeTab,
  activeCategory,
  onSelectCategory,
  onSelectPrebuilt,
}: CategoryNavProps) {
  return (
    <nav className="sticky top-6 flex flex-col gap-0.5" aria-label="부품 카테고리">
      <p className="px-3 pb-2 text-xs font-medium text-ink-muted">부품 카테고리</p>

      {categories.map((category) => {
        const Icon = CATEGORY_ICONS[category.code];
        const isActive = activeTab === "parts" && activeCategory === category.code;
        return (
          <button
            key={category.code}
            type="button"
            onClick={() => onSelectCategory(category.code)}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "flex items-center gap-2.5 rounded-r-md border-l-2 px-3 py-2 text-left text-sm transition-colors",
              isActive
                ? "border-copper bg-paper-raised font-medium text-ink"
                : "border-transparent text-ink-muted hover:bg-paper-raised hover:text-ink",
            )}
          >
            <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
            {category.name}
          </button>
        );
      })}

      <div className="mt-3 border-t border-line pt-3">
        <button
          type="button"
          onClick={onSelectPrebuilt}
          aria-current={activeTab === "prebuilt" ? "true" : undefined}
          className={cn(
            "flex w-full items-center gap-2.5 rounded-r-md border-l-2 px-3 py-2 text-left text-sm transition-colors",
            activeTab === "prebuilt"
              ? "border-copper bg-paper-raised font-medium text-ink"
              : "border-transparent text-ink-muted hover:bg-paper-raised hover:text-ink",
          )}
        >
          <Package className="h-4 w-4 shrink-0" strokeWidth={2} />
          완제품 PC
        </button>
      </div>
    </nav>
  );
}
