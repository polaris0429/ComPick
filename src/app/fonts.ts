import localFont from "next/font/local";

/**
 * Pretendard Variable
 * ────────────────────────────────────────────────────────────────
 * `pretendard` npm 패키지에 포함된 단일 가변 폰트 파일을 next/font/local로
 * 직접 로드합니다. next/font/google 대신 이 방식을 쓰는 이유는 두 가지입니다.
 *  1) Pretendard는 Google Fonts에 없습니다.
 *  2) 빌드 시점에 외부 폰트 CDN에 접근할 필요가 없어, 네트워크가 제한된
 *     Docker 빌드 환경에서도 항상 동일하게 빌드됩니다.
 *
 * 생성되는 --font-pretendard CSS 변수는 globals.css의 @theme 블록이 정의한
 * --font-sans 안에서 참조되어 font-sans 유틸리티 전체에 적용됩니다.
 */
export const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});
