import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker 런타임 이미지를 최소화하기 위해 standalone 출력을 사용합니다.
  // (Dockerfile의 runner 스테이지가 .next/standalone 을 그대로 복사합니다)
  output: "standalone",

  images: {
    remotePatterns: [
      // 상품 이미지를 저장할 CDN/오브젝트 스토리지 도메인이 정해지면 여기에 추가합니다.
      // 예: { protocol: "https", hostname: "cdn.compick.example.com" },
    ],
  },

  // TODO(Step 2): prisma/schema.prisma에 실제 모델이 추가되고 나면,
  // Prisma 쿼리 엔진 바이너리가 standalone 출력 트레이싱에 정상적으로
  // 포함되는지 `docker build` 로 검증합니다. 누락 시 아래와 같이
  // outputFileTracingIncludes 설정이 필요할 수 있습니다.
  // outputFileTracingIncludes: {
  //   "/**/*": ["./node_modules/.prisma/client/**/*"],
  // },
};

export default nextConfig;
