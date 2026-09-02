/**
 * 개별 부품 쌍 간의 호환성 검증 규칙 (순수 함수).
 * ────────────────────────────────────────────────────────────────
 * 모든 함수는 호환이면 null, 비호환이면 CompatibilityIssue를 반환합니다.
 * checker.ts가 선택된 부품 조합에서 적용 가능한 규칙을 골라 실행합니다.
 */

import type {
  CpuAttributes,
  MotherboardAttributes,
  RamAttributes,
  GpuAttributes,
  StorageAttributes,
  PsuAttributes,
  CaseAttributes,
  CoolerAttributes,
} from "@/types/product-attributes";
import type { CompatibilityIssue } from "./types";

// ─── CPU ↔ 메인보드 ────────────────────────────────────────────

/** CPU 소켓과 메인보드 소켓이 일치하는지 검증 */
export function checkCpuMotherboardSocket(
  cpu: CpuAttributes,
  mb: MotherboardAttributes,
): CompatibilityIssue | null {
  if (cpu.socket === mb.socket) return null;

  return {
    ruleId: "cpu-mb-socket",
    severity: "error",
    message: `CPU 소켓(${cpu.socket})과 메인보드 소켓(${mb.socket})이 일치하지 않습니다.`,
    categories: ["CPU", "MOTHERBOARD"],
  };
}

// ─── 메인보드 ↔ RAM ────────────────────────────────────────────

/** 메인보드 메모리 타입과 RAM 메모리 타입이 일치하는지 검증 */
export function checkMotherboardRamType(
  mb: MotherboardAttributes,
  ram: RamAttributes,
): CompatibilityIssue | null {
  if (mb.memoryType === ram.memoryType) return null;

  return {
    ruleId: "mb-ram-type",
    severity: "error",
    message: `메인보드 메모리 규격(${mb.memoryType})과 RAM 규격(${ram.memoryType})이 일치하지 않습니다.`,
    categories: ["MOTHERBOARD", "RAM"],
  };
}

/** RAM 모듈 수가 메인보드의 슬롯 수 이하인지 검증 */
export function checkMotherboardRamSlots(
  mb: MotherboardAttributes,
  ram: RamAttributes,
): CompatibilityIssue | null {
  if (ram.modules <= mb.memorySlots) return null;

  return {
    ruleId: "mb-ram-slots",
    severity: "error",
    message: `RAM 모듈 수(${ram.modules}개)가 메인보드 슬롯 수(${mb.memorySlots}개)를 초과합니다.`,
    categories: ["MOTHERBOARD", "RAM"],
  };
}

// ─── 메인보드 ↔ 케이스 ─────────────────────────────────────────

/** 케이스가 메인보드의 폼팩터를 수용할 수 있는지 검증 */
export function checkMotherboardCaseFormFactor(
  mb: MotherboardAttributes,
  pcCase: CaseAttributes,
): CompatibilityIssue | null {
  if (pcCase.supportedFormFactors.includes(mb.formFactor)) return null;

  return {
    ruleId: "mb-case-formfactor",
    severity: "error",
    message: `메인보드 폼팩터(${mb.formFactor})를 이 케이스가 지원하지 않습니다. 지원: ${pcCase.supportedFormFactors.join(", ")}`,
    categories: ["MOTHERBOARD", "CASE"],
  };
}

// ─── GPU ↔ 케이스 ──────────────────────────────────────────────

/** GPU 길이가 케이스 최대 수용 길이 이하인지 검증 */
export function checkGpuCaseLength(
  gpu: GpuAttributes,
  pcCase: CaseAttributes,
): CompatibilityIssue | null {
  if (gpu.lengthMm <= pcCase.maxGpuLengthMm) return null;

  return {
    ruleId: "gpu-case-length",
    severity: "error",
    message: `GPU 길이(${gpu.lengthMm}mm)가 케이스 최대 수용 길이(${pcCase.maxGpuLengthMm}mm)를 초과합니다.`,
    categories: ["GPU", "CASE"],
  };
}

// ─── 쿨러 ↔ CPU ────────────────────────────────────────────────

/** 쿨러가 CPU 소켓을 지원하는지 검증 */
export function checkCoolerCpuSocket(
  cooler: CoolerAttributes,
  cpu: CpuAttributes,
): CompatibilityIssue | null {
  if (cooler.supportedSockets.includes(cpu.socket)) return null;

  return {
    ruleId: "cooler-cpu-socket",
    severity: "error",
    message: `이 쿨러는 CPU 소켓(${cpu.socket})을 지원하지 않습니다. 지원: ${cooler.supportedSockets.join(", ")}`,
    categories: ["COOLER", "CPU"],
  };
}

/** 쿨러의 TDP 등급이 CPU TDP를 감당할 수 있는지 검증 */
export function checkCoolerCpuTdp(
  cooler: CoolerAttributes,
  cpu: CpuAttributes,
): CompatibilityIssue | null {
  if (cooler.tdpRatingWatts >= cpu.tdpWatts) return null;

  return {
    ruleId: "cooler-cpu-tdp",
    severity: "warning",
    message: `쿨러의 냉각 성능(${cooler.tdpRatingWatts}W)이 CPU TDP(${cpu.tdpWatts}W)보다 낮아 발열 관리가 어려울 수 있습니다.`,
    categories: ["COOLER", "CPU"],
  };
}

// ─── 쿨러 ↔ 케이스 ─────────────────────────────────────────────

/** 쿨러가 케이스에 물리적으로 장착 가능한지 검증 (높이/라디에이터) */
export function checkCoolerCaseClearance(
  cooler: CoolerAttributes,
  pcCase: CaseAttributes,
): CompatibilityIssue | null {
  if (cooler.coolerType === "AIR") {
    // 공랭: 쿨러 높이 ≤ 케이스 최대 쿨러 높이
    if (cooler.heightMm != null && cooler.heightMm > pcCase.maxCoolerHeightMm) {
      return {
        ruleId: "cooler-case-clearance",
        severity: "error",
        message: `공랭 쿨러 높이(${cooler.heightMm}mm)가 케이스 최대 허용 높이(${pcCase.maxCoolerHeightMm}mm)를 초과합니다.`,
        categories: ["COOLER", "CASE"],
      };
    }
  } else {
    // AIO 수랭: 라디에이터 크기 ≤ 케이스 최대 라디에이터 크기
    if (cooler.radiatorSizeMm != null) {
      const maxRad = pcCase.maxRadiatorSizeMm;
      if (maxRad == null) {
        return {
          ruleId: "cooler-case-clearance",
          severity: "error",
          message: `이 케이스는 수랭 라디에이터를 지원하지 않습니다.`,
          categories: ["COOLER", "CASE"],
        };
      }
      if (cooler.radiatorSizeMm > maxRad) {
        return {
          ruleId: "cooler-case-clearance",
          severity: "error",
          message: `라디에이터(${cooler.radiatorSizeMm}mm)가 케이스 최대 지원 크기(${maxRad}mm)를 초과합니다.`,
          categories: ["COOLER", "CASE"],
        };
      }
    }
  }

  return null;
}

// ─── PSU ↔ 케이스 ──────────────────────────────────────────────

/** 파워 폼팩터와 케이스의 PSU 폼팩터가 일치하는지 검증 */
export function checkPsuCaseFormFactor(
  psu: PsuAttributes,
  pcCase: CaseAttributes,
): CompatibilityIssue | null {
  if (psu.formFactor === pcCase.psuFormFactor) return null;

  return {
    ruleId: "psu-case-formfactor",
    severity: "error",
    message: `파워 폼팩터(${psu.formFactor})가 케이스의 PSU 규격(${pcCase.psuFormFactor})과 일치하지 않습니다.`,
    categories: ["PSU", "CASE"],
  };
}

// ─── PSU 전력 용량 ─────────────────────────────────────────────

/**
 * 파워 용량이 GPU 권장 전력 및 예상 총 소비전력을 충족하는지 검증.
 * warning 수준 — 작동은 하지만 안정성/수명에 문제가 될 수 있음.
 */
export function checkPsuPowerCapacity(
  psu: PsuAttributes,
  gpu: GpuAttributes | null,
  estimatedTotalPower: number,
): CompatibilityIssue[] {
  const issues: CompatibilityIssue[] = [];

  // GPU 권장 PSU 와트수 체크
  if (gpu && psu.wattage < gpu.recommendedPsuWattage) {
    issues.push({
      ruleId: "psu-power-capacity",
      severity: "warning",
      message: `파워 용량(${psu.wattage}W)이 GPU 권장 파워(${gpu.recommendedPsuWattage}W)보다 낮습니다.`,
      categories: ["PSU", "GPU"],
    });
  }

  // 예상 총 소비전력 체크
  if (psu.wattage < estimatedTotalPower) {
    issues.push({
      ruleId: "psu-power-capacity",
      severity: "warning",
      message: `파워 용량(${psu.wattage}W)이 예상 총 소비전력(${estimatedTotalPower}W)보다 낮습니다.`,
      categories: ["PSU", "CPU"],
    });
  }

  return issues;
}

// ─── 저장장치 ↔ 메인보드 M.2 슬롯 ─────────────────────────────

/** 선택된 M.2 SSD가 메인보드 M.2 슬롯 수를 초과하지 않는지 검증 */
export function checkStorageMbM2Slots(
  storage: StorageAttributes,
  mb: MotherboardAttributes,
  /** 이미 선택된 M.2 저장장치의 수 (현재 storage 제외) */
  existingM2Count: number,
): CompatibilityIssue | null {
  if (storage.formFactor !== "M2_2280") return null;
  if (existingM2Count + 1 <= mb.m2Slots) return null;

  return {
    ruleId: "storage-mb-m2slots",
    severity: "error",
    message: `M.2 슬롯(${mb.m2Slots}개)이 부족합니다. 선택된 M.2 SSD: ${existingM2Count + 1}개`,
    categories: ["STORAGE", "MOTHERBOARD"],
  };
}
