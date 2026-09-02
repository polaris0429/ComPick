import coreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/**
 * Next.js 16부터 `next lint`가 제거되어 ESLint를 flat config로 직접 구성합니다.
 * eslint-config-next가 core-web-vitals / typescript 서브패스로 flat config
 * 배열을 내보내므로 그대로 펼쳐서 사용합니다.
 */
const eslintConfig = [
  ...coreWebVitals,
  ...nextTypescript,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/**",
      "next-env.d.ts",
      "src/generated/**",
    ],
  },
];

export default eslintConfig;
