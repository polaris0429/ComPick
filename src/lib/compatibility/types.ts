/**
 * 호환성 검증 결과를 표현하는 타입들.
 * ────────────────────────────────────────────────────────────────
 * rules.ts의 개별 검증 함수들과 checker.ts의 전체 검증 엔진이
 * 이 타입들을 공유합니다.
 */

import type { CategoryCode } from "@/generated/prisma";

/** 비호환(장착 물리적 불가) vs 경고(권장 미달이지만 장착 자체는 가능) */
export type CompatibilitySeverity = "error" | "warning";

/** 개별 호환성 검증 실패 항목 */
export interface CompatibilityIssue {
  /** 규칙 식별자 (예: "cpu-mb-socket", "psu-power-capacity") */
  ruleId: string;

  /** error: 장착 불가 / warning: 경고만 */
  severity: CompatibilitySeverity;

  /** 사용자에게 보여줄 한글 메시지 */
  message: string;

  /** 이 이슈에 관련된 카테고리 쌍 (UI에서 어떤 슬롯을 강조할지 결정) */
  categories: [CategoryCode, CategoryCode];
}

/** 예상 시스템 총 소비전력 계산 결과 */
export interface PowerEstimate {
  /** CPU TDP (없으면 0) */
  cpuTdp: number;
  /** GPU 실측 소비전력 (없으면 0) */
  gpuPower: number;
  /** 기타 부품(RAM, SSD, 팬 등) 기본 여유치 */
  basePower: number;
  /** cpuTdp + gpuPower + basePower */
  total: number;
}

/** 전체 호환성 검증 보고서 */
export interface CompatibilityReport {
  /**
   * true  = 모든 검증 통과 or warning만 존재 (조립 가능)
   * false = error 심각도 이슈가 하나 이상 존재 (장착 불가)
   */
  isCompatible: boolean;

  /** 검출된 이슈 목록 (없으면 빈 배열) */
  issues: CompatibilityIssue[];

  /** 예상 총 소비전력 (CPU, GPU가 선택되지 않았으면 해당 값은 0) */
  powerEstimate: PowerEstimate;
}
