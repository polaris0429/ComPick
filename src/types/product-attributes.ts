/**
 * Product.attributes (JSONB) 의 카테고리별 형태를 정의합니다.
 * ────────────────────────────────────────────────────────────────
 * Prisma의 Json 타입은 스키마 레벨에서 형태를 강제하지 못하므로,
 * 애플리케이션 레벨에서 이 타입들로 캐스팅해 사용합니다.
 *
 *   const attrs = product.attributes as CpuAttributes;
 *
 * 필드명은 Step 3의 호환성 검증 매트릭스가 그대로 참조할 값이므로,
 * 이후 단계에서 이름을 바꾸면 시드 데이터와 검증 로직을 함께 갱신해야 합니다.
 */

export type FormFactor = "E_ATX" | "ATX" | "MICRO_ATX" | "MINI_ITX";

export interface CpuAttributes {
  socket: string; // 예: "AM5", "LGA1851"
  cores: number;
  threads: number;
  baseClockGHz: number;
  boostClockGHz: number;
  tdpWatts: number;
  integratedGraphics: boolean;
}

export interface MotherboardAttributes {
  socket: string; // CPU.socket과 일치해야 호환
  formFactor: FormFactor;
  chipset: string;
  memoryType: "DDR4" | "DDR5";
  memorySlots: number;
  maxMemoryGB: number;
  m2Slots: number;
}

export interface RamAttributes {
  memoryType: "DDR4" | "DDR5";
  capacityGB: number; // 키트 전체 용량 (예: 32 = 16GB x 2)
  modules: number; // 키트 구성 개수 (예: 2)
  speedMHz: number;
}

export interface GpuAttributes {
  vramGB: number;
  lengthMm: number; // 케이스 최대 GPU 길이와 비교
  slotWidth: number; // PCIe 슬롯 점유 폭
  recommendedPsuWattage: number; // 이 GPU를 쓸 때 권장 최소 PSU 용량
  powerDrawWatts: number; // 실측 소비전력 (총 소비전력 합산용)
  powerConnector: "NONE" | "8PIN_1" | "8PIN_2" | "12VHPWR";
}

export interface StorageAttributes {
  storageType: "NVME_SSD" | "SATA_SSD" | "HDD";
  formFactor: "M2_2280" | "2_5_INCH" | "3_5_INCH";
  interface: "PCIE_GEN3" | "PCIE_GEN4" | "PCIE_GEN5" | "SATA3";
  capacityGB: number;
}

export interface PsuAttributes {
  wattage: number;
  efficiencyRating: "80PLUS_WHITE" | "80PLUS_BRONZE" | "80PLUS_GOLD" | "80PLUS_PLATINUM";
  formFactor: "ATX" | "SFX";
  modular: "FULL" | "SEMI" | "NONE";
}

export interface CaseAttributes {
  supportedFormFactors: FormFactor[]; // 이 케이스가 수용 가능한 메인보드 폼팩터들
  maxGpuLengthMm: number;
  maxCoolerHeightMm: number; // 공랭 쿨러 높이 제한
  maxRadiatorSizeMm: number | null; // 수랭 라디에이터 최대 지원 규격 (없으면 null)
  psuFormFactor: "ATX" | "SFX";
}

export interface CoolerAttributes {
  coolerType: "AIR" | "AIO_LIQUID";
  supportedSockets: string[]; // CPU/메인보드 socket 값과 비교
  heightMm: number | null; // AIR 쿨러일 때만 의미 있음 (케이스 간섭 체크)
  radiatorSizeMm: number | null; // AIO일 때만 의미 있음 (케이스 라디에이터 체크)
  tdpRatingWatts: number; // 이 쿨러가 감당 가능한 CPU TDP
}

export type ProductAttributes =
  | CpuAttributes
  | MotherboardAttributes
  | RamAttributes
  | GpuAttributes
  | StorageAttributes
  | PsuAttributes
  | CaseAttributes
  | CoolerAttributes;
