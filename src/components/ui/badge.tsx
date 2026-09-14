import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  tone?: "neutral" | "success" | "warning" | "danger" | "primary";
  children: ReactNode;
  className?: string;
}

export function Badge({ tone = "neutral", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold",
        tone === "neutral" && "border border-line bg-paper-raised text-ink-muted",
        tone === "success" && "bg-success-soft text-success",
        tone === "warning" && "bg-warning-soft text-warning",
        tone === "danger" && "bg-danger-soft text-danger",
        tone === "primary" && "bg-primary-soft text-primary-dark",
        className,
      )}
    >
      {children}
    </span>
  );
}
