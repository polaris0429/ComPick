import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 조건부 Tailwind 클래스를 안전하게 병합합니다.
 * clsx로 조건부 클래스명을 조합한 뒤, tailwind-merge로 충돌하는
 * 유틸리티(예: "p-2 p-4")를 뒤에 오는 값 기준으로 정리합니다.
 *
 * 예: cn("px-2 py-1", isActive && "bg-copper text-white", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
