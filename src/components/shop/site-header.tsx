import { Search, ShoppingCart } from "lucide-react";

const UTILITY_LINKS = ["고객센터", "주문조회", "로그인", "회원가입", "관리자"];
const NAV_ITEMS = ["PC 견적", "완제품 PC", "PC 부품", "모니터", "주변기기", "특가/이벤트"];

/**
 * 상단 유틸리티 바 / 검색 / 내비게이션은 참고 디자인의 시각적 구조를
 * 그대로 따릅니다. "PC 견적"만 실제로 존재하는 화면이고, 나머지 항목(로그인,
 * 관리자, 모니터 등)은 Step 6 이전이라 아직 기능이 없어 비활성 텍스트로만
 * 둡니다 — 클릭했는데 아무 일도 안 일어나는 버튼처럼 보이지 않도록 일부러
 * <button>/<a> 대신 <span>을 썼습니다.
 */
export function SiteHeader() {
  return (
    <div className="border-b border-line bg-paper-raised">
      <div className="border-b border-line bg-dark">
        <div className="mx-auto flex max-w-[1440px] items-center justify-end gap-4 px-6 py-1.5 text-xs text-white/70">
          {UTILITY_LINKS.map((label) => (
            <span key={label} className="cursor-default">
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] items-center gap-8 px-6 py-4">
        <span className="shrink-0 text-2xl font-extrabold tracking-tight text-ink">
          Com<span className="text-primary">Pick</span>
        </span>

        <div className="flex flex-1 items-center rounded-full border-2 border-primary bg-paper-raised px-4 py-2">
          <input
            type="text"
            placeholder="찾으시는 부품을 검색해보세요"
            className="flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink-muted"
          />
          <Search className="h-4 w-4 shrink-0 text-primary" />
        </div>

        <div className="flex shrink-0 items-center gap-1 text-ink-muted">
          <ShoppingCart className="h-5 w-5" />
          <span className="text-xs">장바구니</span>
        </div>
      </div>

      <nav className="mx-auto flex max-w-[1440px] items-center gap-6 px-6">
        {NAV_ITEMS.map((label, i) => (
          <span
            key={label}
            className={
              i === 0
                ? "border-b-2 border-primary py-3 text-sm font-bold text-primary"
                : "cursor-default py-3 text-sm text-ink-muted"
            }
          >
            {label}
          </span>
        ))}
      </nav>
    </div>
  );
}
