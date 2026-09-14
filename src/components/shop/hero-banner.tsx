import { CheckCircle2 } from "lucide-react";

export function HeroBanner() {
  return (
    <div className="rounded-xl bg-gradient-to-br from-primary to-primary-dark px-6 py-8 text-white">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
        <CheckCircle2 className="h-3.5 w-3.5" />
        실시간 호환성 검사
      </span>
      <h1 className="mt-3 text-2xl font-extrabold">나만의 PC를 직접 구성하세요</h1>
      <p className="mt-1.5 text-sm text-white/80">
        소켓, 폼팩터, 전력까지 — 부품을 담는 즉시 호환 여부를 확인해 드립니다.
      </p>
    </div>
  );
}
