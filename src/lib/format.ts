/** 원화 표기 (예: 1234000 → "1,234,000원") */
export function formatKRW(amount: number): string {
  return `${new Intl.NumberFormat("ko-KR").format(amount)}원`;
}

/** 정가와 할인율(0~100)로 할인 적용가를 계산 (원 단위 반올림) */
export function applyDiscount(price: number, discountRate: number): number {
  return Math.round((price * (100 - discountRate)) / 100);
}

/** ENUM성 attribute 값을 사람이 읽기 좋은 형태로 (예: "80PLUS_GOLD" → "80PLUS GOLD") */
export function prettifyValue(value: string): string {
  return value.replace(/_/g, " ");
}
