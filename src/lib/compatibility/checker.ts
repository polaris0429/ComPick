/**
 * 호환성 검증 엔진.
 * ────────────────────────────────────────────────────────────────
 * 선택된 부품 조합에서 적용 가능한 모든 규칙을 실행하고,
 * 통합 CompatibilityReport를 반환합니다.
 */

import type { CategoryCode } from "@/generated/prisma";
import type {
  CpuAttributes,
  MotherboardAttributes,
  RamAttributes,
  GpuAttributes,
  StorageAttributes,
  PsuAttributes,
  CaseAttributes,
  CoolerAttributes,
  ProductAttributes,
} from "@/types/product-attributes";
import type { CompatibilityIssue, CompatibilityReport, PowerEstimate } from "./types";
import {
  checkCpuMotherboardSocket,
  checkMotherboardRamType,
  checkMotherboardRamSlots,
  checkMotherboardCaseFormFactor,
  checkGpuCaseLength,
  checkCoolerCpuSocket,
  checkCoolerCpuTdp,
  checkCoolerCaseClearance,
  checkPsuCaseFormFactor,
  checkPsuPowerCapacity,
  checkStorageMbM2Slots,
} from "./rules";

/** 기타 부품(RAM, SSD, 팬, 보드 등)의 기본 소비전력 여유치 (W) */
const BASE_SYSTEM_POWER_WATTS = 80;

/** 검증 엔진에 전달하는 선택된 부품 맵 */
export type SelectedPartsMap = Partial<Record<CategoryCode, ProductAttributes>>;

/**
 * 예상 시스템 총 소비전력을 계산합니다.
 * CPU TDP + GPU 실측 소비전력 + 기타 기본치(80W)
 */
export function estimatePower(parts: SelectedPartsMap): PowerEstimate {
  const cpuTdp = parts.CPU ? (parts.CPU as CpuAttributes).tdpWatts : 0;
  const gpuPower = parts.GPU ? (parts.GPU as GpuAttributes).powerDrawWatts : 0;

  return {
    cpuTdp,
    gpuPower,
    basePower: BASE_SYSTEM_POWER_WATTS,
    total: cpuTdp + gpuPower + BASE_SYSTEM_POWER_WATTS,
  };
}

/**
 * 선택된 부품 조합의 전체 호환성을 검증합니다.
 *
 * 각 규칙은 관련 부품이 모두 선택되었을 때만 실행됩니다.
 * 예: CPU와 메인보드가 모두 선택된 경우에만 소켓 일치 검증을 수행합니다.
 */
export function checkAllCompatibility(parts: SelectedPartsMap): CompatibilityReport {
  const issues: CompatibilityIssue[] = [];

  const cpu = parts.CPU as CpuAttributes | undefined;
  const mb = parts.MOTHERBOARD as MotherboardAttributes | undefined;
  const ram = parts.RAM as RamAttributes | undefined;
  const gpu = parts.GPU as GpuAttributes | undefined;
  const storage = parts.STORAGE as StorageAttributes | undefined;
  const psu = parts.PSU as PsuAttributes | undefined;
  const pcCase = parts.CASE as CaseAttributes | undefined;
  const cooler = parts.COOLER as CoolerAttributes | undefined;

  // ─── CPU ↔ 메인보드 ──────────────────────────────────────

  if (cpu && mb) {
    const issue = checkCpuMotherboardSocket(cpu, mb);
    if (issue) issues.push(issue);
  }

  // ─── 메인보드 ↔ RAM ──────────────────────────────────────

  if (mb && ram) {
    const typeIssue = checkMotherboardRamType(mb, ram);
    if (typeIssue) issues.push(typeIssue);

    const slotsIssue = checkMotherboardRamSlots(mb, ram);
    if (slotsIssue) issues.push(slotsIssue);
  }

  // ─── 메인보드 ↔ 케이스 ───────────────────────────────────

  if (mb && pcCase) {
    const issue = checkMotherboardCaseFormFactor(mb, pcCase);
    if (issue) issues.push(issue);
  }

  // ─── GPU ↔ 케이스 ────────────────────────────────────────

  if (gpu && pcCase) {
    const issue = checkGpuCaseLength(gpu, pcCase);
    if (issue) issues.push(issue);
  }

  // ─── 쿨러 ↔ CPU ─────────────────────────────────────────

  if (cooler && cpu) {
    const socketIssue = checkCoolerCpuSocket(cooler, cpu);
    if (socketIssue) issues.push(socketIssue);

    const tdpIssue = checkCoolerCpuTdp(cooler, cpu);
    if (tdpIssue) issues.push(tdpIssue);
  }

  // ─── 쿨러 ↔ 케이스 ──────────────────────────────────────

  if (cooler && pcCase) {
    const issue = checkCoolerCaseClearance(cooler, pcCase);
    if (issue) issues.push(issue);
  }

  // ─── PSU ↔ 케이스 ───────────────────────────────────────

  if (psu && pcCase) {
    const issue = checkPsuCaseFormFactor(psu, pcCase);
    if (issue) issues.push(issue);
  }

  // ─── PSU 전력 용량 ──────────────────────────────────────

  const powerEstimate = estimatePower(parts);

  if (psu) {
    const powerIssues = checkPsuPowerCapacity(
      psu,
      gpu ?? null,
      powerEstimate.total,
    );
    issues.push(...powerIssues);
  }

  // ─── 저장장치 ↔ 메인보드 M.2 슬롯 ──────────────────────

  if (storage && mb) {
    // 현재 스토어는 카테고리당 부품 1개이므로 기존 M.2 수 = 0
    const issue = checkStorageMbM2Slots(storage, mb, 0);
    if (issue) issues.push(issue);
  }

  // ─── 결과 집계 ──────────────────────────────────────────

  const isCompatible = issues.every((i) => i.severity !== "error");

  return {
    isCompatible,
    issues,
    powerEstimate,
  };
}
