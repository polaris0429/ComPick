/**
 * 견적(빌드) 상태 관리 Zustand 스토어.
 * ────────────────────────────────────────────────────────────────
 * persist 미들웨어로 localStorage에 자동 저장/복원하여
 * 새로고침해도 견적이 유지됩니다.
 *
 * 부품 선택/제거 시 호환성 검사가 자동으로 재실행되므로
 * 소비자 코드에서 수동 호출할 필요가 없습니다.
 */

import { createStore } from "zustand/vanilla";
import { useStore } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { CategoryCode } from "@/generated/prisma";
import type { ProductAttributes } from "@/types/product-attributes";
import {
  checkAllCompatibility,
  type CompatibilityReport,
  type SelectedPartsMap,
} from "@/lib/compatibility";

// ─── 타입 정의 ─────────────────────────────────────────────────

/** 스토어에 저장되는 선택된 부품 정보 */
export interface SelectedPart {
  /** Product.id (DB PK) */
  id: string;
  name: string;
  brand: string;
  /** 원(KRW) 단위 정가 */
  price: number;
  /** 0~100 사이 할인율(%) */
  discountRate: number;
  /** 대표 이미지 (Product.images[0], 없으면 null) */
  image: string | null;
  /** 부품이 속한 카테고리 */
  categoryCode: CategoryCode;
  /** 파싱된 JSONB attributes */
  attributes: ProductAttributes;
}

interface BuildState {
  /** 카테고리별 선택된 부품 (미선택 카테고리는 키 자체가 없음) */
  selectedParts: Partial<Record<CategoryCode, SelectedPart>>;

  /** 전체 호환성 검증 결과 */
  compatibility: CompatibilityReport;

  /** 할인 적용 전 합계 (원) */
  totalPrice: number;

  /** 할인 적용 후 합계 (원) */
  totalDiscountedPrice: number;
}

interface BuildActions {
  /** 부품 선택/교체 → 호환성 재검증 + 가격 재계산 */
  selectPart: (part: SelectedPart) => void;

  /** 부품 제거 → 호환성 재검증 + 가격 재계산 */
  removePart: (category: CategoryCode) => void;

  /** 전체 견적 초기화 */
  clearAll: () => void;

  /** 완제품 PC 구성 일괄 로드 → 호환성 검증 + 가격 계산 */
  loadPrebuilt: (parts: SelectedPart[]) => void;
}

// ─── 헬퍼 함수 ─────────────────────────────────────────────────

/** 빈 호환성 보고서 (부품 미선택 상태) */
function emptyReport(): CompatibilityReport {
  return {
    isCompatible: true,
    issues: [],
    powerEstimate: { cpuTdp: 0, gpuPower: 0, basePower: 80, total: 80 },
  };
}

/** selectedParts에서 attributes만 추출해 SelectedPartsMap 형태로 변환 */
function toAttributesMap(
  parts: Partial<Record<CategoryCode, SelectedPart>>,
): SelectedPartsMap {
  const map: SelectedPartsMap = {};
  for (const [key, part] of Object.entries(parts)) {
    if (part) {
      map[key as CategoryCode] = part.attributes;
    }
  }
  return map;
}

/** 선택된 부품들의 가격 합계 계산 */
function calculatePrices(parts: Partial<Record<CategoryCode, SelectedPart>>): {
  totalPrice: number;
  totalDiscountedPrice: number;
} {
  let totalPrice = 0;
  let totalDiscountedPrice = 0;

  for (const part of Object.values(parts)) {
    if (part) {
      totalPrice += part.price;
      totalDiscountedPrice += Math.round(
        part.price * (100 - part.discountRate) / 100,
      );
    }
  }

  return { totalPrice, totalDiscountedPrice };
}

/** 상태를 재계산합니다 (호환성 + 가격) */
function recalculate(
  selectedParts: Partial<Record<CategoryCode, SelectedPart>>,
): Pick<BuildState, "compatibility" | "totalPrice" | "totalDiscountedPrice"> {
  const partCount = Object.keys(selectedParts).length;
  const compatibility =
    partCount === 0
      ? emptyReport()
      : checkAllCompatibility(toAttributesMap(selectedParts));
  const { totalPrice, totalDiscountedPrice } = calculatePrices(selectedParts);

  return { compatibility, totalPrice, totalDiscountedPrice };
}

// ─── 초기 상태 ─────────────────────────────────────────────────

const initialState: BuildState = {
  selectedParts: {},
  compatibility: emptyReport(),
  totalPrice: 0,
  totalDiscountedPrice: 0,
};

// ─── 스토어 생성 ───────────────────────────────────────────────

export const buildStore = createStore<BuildState & BuildActions>()(
  persist(
    (set) => ({
      ...initialState,

      selectPart: (part) =>
        set((state) => {
          const selectedParts = {
            ...state.selectedParts,
            [part.categoryCode]: part,
          };
          return { selectedParts, ...recalculate(selectedParts) };
        }),

      removePart: (category) =>
        set((state) => {
          const selectedParts = { ...state.selectedParts };
          delete selectedParts[category];
          return { selectedParts, ...recalculate(selectedParts) };
        }),

      clearAll: () => set(initialState),

      loadPrebuilt: (parts) =>
        set(() => {
          const selectedParts: Partial<Record<CategoryCode, SelectedPart>> = {};
          for (const part of parts) {
            selectedParts[part.categoryCode] = part;
          }
          return { selectedParts, ...recalculate(selectedParts) };
        }),
    }),
    {
      name: "compick-build",
      storage: createJSONStorage(() => {
        // SSR 환경(서버)에서는 localStorage가 없으므로 빈 구현을 반환
        if (typeof window === "undefined") {
          return {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {},
          };
        }
        return localStorage;
      }),
      // persist에서 복원할 때 호환성을 재검증
      // (저장된 이후 규칙이 바뀌었을 수 있으므로)
      onRehydrateStorage: () => (state) => {
        if (state && Object.keys(state.selectedParts).length > 0) {
          const recalculated = recalculate(state.selectedParts);
          state.compatibility = recalculated.compatibility;
          state.totalPrice = recalculated.totalPrice;
          state.totalDiscountedPrice = recalculated.totalDiscountedPrice;
        }
      },
    },
  ),
);

// ─── React Hook ────────────────────────────────────────────────

/**
 * React 컴포넌트에서 사용하는 빌드 스토어 훅.
 *
 * @example
 * ```tsx
 * const selectedParts = useBuildStore((s) => s.selectedParts);
 * const selectPart = useBuildStore((s) => s.selectPart);
 * const { isCompatible, issues } = useBuildStore((s) => s.compatibility);
 * ```
 */
export function useBuildStore<T>(selector: (state: BuildState & BuildActions) => T): T {
  return useStore(buildStore, selector);
}
