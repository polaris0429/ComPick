import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "dark";
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
        "inline-flex items-center justify-center gap-1.5 rounded-md font-semibold transition-colors",
        "disabled:cursor-not-allowed disabled:opacity-40",
        variant === "primary" && "bg-primary text-white hover:bg-primary-dark",
        variant === "outline" && "border border-primary text-primary hover:bg-primary-soft",
        variant === "ghost" && "text-ink-muted hover:bg-paper hover:text-ink",
        variant === "dark" && "bg-dark text-white hover:bg-dark-raised",
        size === "sm" && "px-2.5 py-1 text-xs",
        size === "md" && "px-4 py-2.5 text-sm",
        className,
      )}
      {...props}
    />
  );
});
