import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  tone?: "neutral" | "signal" | "alert" | "copper";
  children: ReactNode;
  className?: string;
}

export function Badge({ tone = "neutral", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium",
        tone === "neutral" && "border border-line bg-paper-raised text-ink-muted",
        tone === "signal" && "bg-signal-soft text-signal",
        tone === "alert" && "bg-alert-soft text-alert",
        tone === "copper" && "bg-copper text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
