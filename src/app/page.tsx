import { cn } from "@/lib/utils";

const steps = [
  {
    label: "프로젝트 구조",
    detail: "Next.js 16 스캐폴딩, Docker, 문서화 자동화 규칙",
    done: true,
  },
  {
    label: "데이터베이스 설계",
    detail: "Prisma 스키마, 필드 레벨 암호화, 부품 시드 데이터",
    done: false,
  },
  {
    label: "상태 관리 & 호환성 로직",
    detail: "Zustand 스토어, 소켓 · 폼팩터 · 와트수 검증 매트릭스",
    done: false,
  },
  {
    label: "메인 UI",
    detail: "좌 · 중 · 우 3단 패널, 다중 필터링, sticky 견적 패널",
    done: false,
  },
  {
    label: "결제 연동",
    detail: "토스페이먼츠 v2 SDK, 서버 액션 결제 승인 검증",
    done: false,
  },
  {
    label: "인증 & 관리자",
    detail: "Auth.js 로그인, Recharts 매출 · 판매량 대시보드",
    done: false,
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-24">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          ComPick
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">
          소켓부터 와트수까지 — 부품을 고르는 즉시 호환 여부를 확인하는
          맞춤형 조립 PC 쇼핑몰, 컴픽입니다.
        </p>
      </header>

      <ol className="mt-16 flex flex-col">
        {steps.map((step, i) => (
          <li
            key={step.label}
            className="flex gap-4 border-t border-line py-4 first:border-t-0"
          >
            <span
              className={cn(
                "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium",
                step.done
                  ? "bg-copper text-white"
                  : "border border-line text-ink-muted",
              )}
            >
              {i + 1}
            </span>
            <div>
              <p
                className={cn(
                  "font-medium",
                  step.done ? "text-ink" : "text-ink-muted",
                )}
              >
                {step.label}
                {step.done && (
                  <span className="ml-2 text-xs font-normal text-copper">
                    완료
                  </span>
                )}
              </p>
              <p className="mt-0.5 text-sm text-ink-muted">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>

      <footer className="mt-16 border-t border-line pt-6 text-sm text-ink-muted">
        <p>
          로컬 개발:{" "}
          <code className="rounded bg-paper-raised px-1.5 py-0.5 font-mono text-xs text-ink">
            npm run docker:up
          </code>{" "}
          로 DB를 띄운 뒤{" "}
          <code className="rounded bg-paper-raised px-1.5 py-0.5 font-mono text-xs text-ink">
            npm run dev
          </code>
        </p>
      </footer>
    </main>
  );
}
