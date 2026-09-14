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
    <nav
      className="sticky top-6 flex flex-col gap-0.5 rounded-lg border border-line bg-paper-raised p-2"
      aria-label="부품 카테고리"
    >
      <p className="px-2 pb-1 pt-1 text-xs font-bold text-ink-muted">부품 카테고리</p>

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
              "flex items-center justify-between gap-2 rounded-md px-2.5 py-2 text-left text-sm transition-colors",
              isActive
                ? "bg-primary-soft font-bold text-primary-dark"
                : "text-ink-muted hover:bg-paper hover:text-ink",
            )}
          >
            <span className="flex items-center gap-2.5">
              <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
              {category.name}
            </span>
            <span className="text-xs font-normal text-ink-muted">{category.productCount}</span>
          </button>
        );
      })}

      <div className="mt-2 border-t border-line pt-2">
        <button
          type="button"
          onClick={onSelectPrebuilt}
          aria-current={activeTab === "prebuilt" ? "true" : undefined}
          className={cn(
            "flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm transition-colors",
            activeTab === "prebuilt"
              ? "bg-primary-soft font-bold text-primary-dark"
              : "text-ink-muted hover:bg-paper hover:text-ink",
          )}
        >
          <Package className="h-4 w-4 shrink-0" strokeWidth={2} />
          완제품 PC
        </button>
      </div>
    </nav>
  );
}
