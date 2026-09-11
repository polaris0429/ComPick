import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "md", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-md font-medium transition-colors",
        "disabled:cursor-not-allowed disabled:opacity-40",
        variant === "primary" && "bg-copper text-white hover:bg-copper-dark",
        variant === "secondary" && "bg-circuit text-white hover:bg-circuit-light",
        variant === "outline" && "border border-line text-ink hover:bg-paper-raised",
        variant === "ghost" && "text-ink-muted hover:bg-paper-raised hover:text-ink",
        size === "sm" && "px-2.5 py-1 text-xs",
        size === "md" && "px-4 py-2 text-sm",
        className,
      )}
      {...props}
    />
  );
});
