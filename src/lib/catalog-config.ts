import { Box, CircuitBoard, Cpu, Fan, Gpu, HardDrive, MemoryStick, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CategoryCode } from "@/generated/prisma";

/** 카테고리별 아이콘 - 좌측 네비게이션과 상품 이미지 placeholder가 함께 사용 */
export const CATEGORY_ICONS: Record<CategoryCode, LucideIcon> = {
  CPU: Cpu,
  MOTHERBOARD: CircuitBoard,
  RAM: MemoryStick,
  GPU: Gpu,
  STORAGE: HardDrive,
  PSU: Zap,
  CASE: Box,
  COOLER: Fan,
};

/** 카테고리 하나의 스펙 필드 표시 설정 */
export interface AttributeFieldConfig {
  /** ProductAttributes의 키 */
  key: string;
  /** 한글 라벨 */
  label: string;
  /** 값 뒤에 붙일 단위 (없으면 생략) */
  unit?: string;
  /** true면 필터 칩으로도 노출 (값은 실제 상품 데이터에서 동적으로 뽑음) */
  filterable?: boolean;
}

/**
 * 카테고리별로 상품 카드에 보여줄 스펙과, 그중 필터로도 쓸 필드를 정의합니다.
 * 8개 속성을 전부 보여주면 카드가 지저분해지므로 카테고리당 가장 구매
 * 결정에 영향이 큰 3~4개만 고릅니다. (전체 속성은 src/types/product-attributes.ts)
 */
export const CATEGORY_ATTRIBUTE_FIELDS: Record<CategoryCode, AttributeFieldConfig[]> = {
  CPU: [
    { key: "socket", label: "소켓", filterable: true },
    { key: "cores", label: "코어", unit: "코어" },
    { key: "boostClockGHz", label: "부스트 클럭", unit: "GHz" },
    { key: "tdpWatts", label: "TDP", unit: "W" },
  ],
  MOTHERBOARD: [
    { key: "socket", label: "소켓", filterable: true },
    { key: "formFactor", label: "폼팩터", filterable: true },
    { key: "memoryType", label: "메모리 규격" },
    { key: "m2Slots", label: "M.2 슬롯", unit: "개" },
  ],
  RAM: [
    { key: "memoryType", label: "규격" },
    { key: "capacityGB", label: "용량", unit: "GB", filterable: true },
    { key: "speedMHz", label: "속도", unit: "MHz", filterable: true },
  ],
  GPU: [
    { key: "vramGB", label: "VRAM", unit: "GB", filterable: true },
    { key: "lengthMm", label: "길이", unit: "mm" },
    { key: "powerDrawWatts", label: "소비전력", unit: "W" },
    { key: "recommendedPsuWattage", label: "권장 파워", unit: "W" },
  ],
  STORAGE: [
    { key: "storageType", label: "종류", filterable: true },
    { key: "capacityGB", label: "용량", unit: "GB", filterable: true },
    { key: "interface", label: "인터페이스" },
  ],
  PSU: [
    { key: "wattage", label: "용량", unit: "W", filterable: true },
    { key: "efficiencyRating", label: "인증", filterable: true },
    { key: "modular", label: "모듈러" },
  ],
  CASE: [
    { key: "psuFormFactor", label: "파워 규격", filterable: true },
    { key: "maxGpuLengthMm", label: "최대 GPU 길이", unit: "mm" },
    { key: "maxCoolerHeightMm", label: "최대 쿨러 높이", unit: "mm" },
  ],
  COOLER: [
    { key: "coolerType", label: "종류", filterable: true },
    { key: "heightMm", label: "높이", unit: "mm" },
    { key: "radiatorSizeMm", label: "라디에이터", unit: "mm" },
    { key: "tdpRatingWatts", label: "냉각 성능", unit: "W" },
  ],
};

/**
 * 상품 상세 모달에서 카테고리 구분 없이 attributes의 모든 키를 보여줄 때 쓰는
 * 라벨/단위 맵입니다. CATEGORY_ATTRIBUTE_FIELDS는 카드에 보여줄 3~4개만
 * 고른 부분집합이라, 상세 화면에서는 이 전체 맵으로 attributes 객체의 키를
 * 그대로 순회합니다. (formFactor처럼 여러 카테고리가 같은 키를 다른 의미로
 * 쓰는 경우도 있지만, 라벨은 공용으로 두어도 자연스럽습니다.)
 */
export const ATTRIBUTE_LABELS: Record<string, { label: string; unit?: string }> = {
  socket: { label: "소켓" },
  cores: { label: "코어 수", unit: "코어" },
  threads: { label: "스레드 수", unit: "스레드" },
  baseClockGHz: { label: "베이스 클럭", unit: "GHz" },
  boostClockGHz: { label: "부스트 클럭", unit: "GHz" },
  tdpWatts: { label: "TDP", unit: "W" },
  integratedGraphics: { label: "내장 그래픽" },
  formFactor: { label: "폼팩터" },
  chipset: { label: "칩셋" },
  memoryType: { label: "메모리 규격" },
  memorySlots: { label: "메모리 슬롯", unit: "개" },
  maxMemoryGB: { label: "최대 메모리", unit: "GB" },
  m2Slots: { label: "M.2 슬롯", unit: "개" },
  capacityGB: { label: "용량", unit: "GB" },
  modules: { label: "모듈 구성", unit: "개" },
  speedMHz: { label: "속도", unit: "MHz" },
  vramGB: { label: "VRAM", unit: "GB" },
  lengthMm: { label: "길이", unit: "mm" },
  slotWidth: { label: "슬롯 두께", unit: "슬롯" },
  recommendedPsuWattage: { label: "권장 파워 용량", unit: "W" },
  powerDrawWatts: { label: "소비전력", unit: "W" },
  powerConnector: { label: "전원 커넥터" },
  storageType: { label: "저장장치 종류" },
  interface: { label: "인터페이스" },
  wattage: { label: "정격 출력", unit: "W" },
  efficiencyRating: { label: "80+ 인증" },
  modular: { label: "모듈러 방식" },
  supportedFormFactors: { label: "지원 폼팩터" },
  maxGpuLengthMm: { label: "최대 GPU 길이", unit: "mm" },
  maxCoolerHeightMm: { label: "최대 쿨러 높이", unit: "mm" },
  maxRadiatorSizeMm: { label: "최대 라디에이터", unit: "mm" },
  psuFormFactor: { label: "파워 폼팩터" },
  coolerType: { label: "쿨러 종류" },
  supportedSockets: { label: "지원 소켓" },
  heightMm: { label: "높이", unit: "mm" },
  radiatorSizeMm: { label: "라디에이터 크기", unit: "mm" },
  tdpRatingWatts: { label: "냉각 성능", unit: "W" },
};
