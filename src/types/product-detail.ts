/**
 * 상세 모달의 "상품정보" 탭 콘텐츠 (판매자가 작성하는 마케팅 카피).
 * ────────────────────────────────────────────────────────────────
 * "상세 스펙" 탭은 Product.attributes(정형 데이터)를 그대로 표로 보여주면
 * 되지만, "상품정보" 탭은 쿠팡/네이버쇼핑처럼 광고 카피 + 특징 카드 +
 * 프로모션 섹션으로 구성된 자유 콘텐츠입니다. Product.marketingContent에
 * 이 타입으로 JSONB 저장됩니다.
 */

export interface MarketingFeature {
  /** 아이콘으로 쓸 짧은 기호/이모지 (예: "⚡", "◎") */
  icon: string;
  title: string;
  description: string;
}

export interface MarketingContent {
  /** 상단 작은 브랜드 태그 (예: "AMD RYZEN™ 7 7800X3D") */
  eyebrow: string;
  /** 히어로 카피 제목 */
  title: string;
  /** 히어로 카피 본문 (1~2문장) */
  text: string;
  /** 특징 카드 3개 */
  features: MarketingFeature[];
  /** 하단 프로모션 섹션 제목 */
  promoTitle: string;
  /** 하단 프로모션 섹션 본문 */
  promoText: string;
}
