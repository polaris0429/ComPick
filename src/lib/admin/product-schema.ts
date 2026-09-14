import { z } from "zod";

const text = z.string().trim().min(1).max(200);
const positive = z.number().positive().max(1000000);
const count = positive.int();
const nonnegative = z.number().min(0).max(1000000);
const formFactor = z.enum(["E_ATX", "ATX", "MICRO_ATX", "MINI_ITX"]);
const memoryType = z.enum(["DDR4", "DDR5"]);
const socketList = z.array(text).min(1);
export const attributeSchemas = {
  CPU: z.looseObject({ socket: text, cores: count, threads: count, baseClockGHz: positive, boostClockGHz: positive, tdpWatts: positive, integratedGraphics: z.boolean() }),
  MOTHERBOARD: z.looseObject({ socket: text, formFactor, chipset: text, memoryType, memorySlots: count, maxMemoryGB: count, m2Slots: nonnegative.int() }),
  RAM: z.looseObject({ memoryType, capacityGB: count, modules: count, speedMHz: count }),
  GPU: z.looseObject({ vramGB: positive, lengthMm: positive, slotWidth: positive, recommendedPsuWattage: positive, powerDrawWatts: positive, powerConnector: z.enum(["NONE", "8PIN_1", "8PIN_2", "12VHPWR"]) }),
  STORAGE: z.looseObject({ storageType: z.enum(["NVME_SSD", "SATA_SSD", "HDD"]), formFactor: z.enum(["M2_2280", "2_5_INCH", "3_5_INCH"]), interface: z.enum(["PCIE_GEN3", "PCIE_GEN4", "PCIE_GEN5", "SATA3"]), capacityGB: count }),
  PSU: z.looseObject({ wattage: positive, efficiencyRating: z.enum(["80PLUS_WHITE", "80PLUS_BRONZE", "80PLUS_GOLD", "80PLUS_PLATINUM"]), formFactor: z.enum(["ATX", "SFX"]), modular: z.enum(["FULL", "SEMI", "NONE"]) }),
  CASE: z.looseObject({ supportedFormFactors: z.array(formFactor).min(1), maxGpuLengthMm: positive, maxCoolerHeightMm: positive, maxRadiatorSizeMm: positive.nullable(), psuFormFactor: z.enum(["ATX", "SFX"]) }),
  COOLER: z.looseObject({ coolerType: z.enum(["AIR", "AIO_LIQUID"]), supportedSockets: socketList, heightMm: positive.nullable(), radiatorSizeMm: positive.nullable(), tdpRatingWatts: positive }),
};
export type AdminCategory = keyof typeof attributeSchemas;
export const imagePath = z.string().max(2000).refine((value) => {
  if (/^\/(?!\/)[a-zA-Z0-9/_.-]+$/.test(value) && !value.includes("..")) return true;
  try { return new URL(value).protocol === "https:"; } catch { return false; }
}, "이미지는 /로 시작하는 로컬 경로 또는 https 주소를 입력하세요.");
const attributeValue = z.union([z.string().max(1000), z.number().finite(), z.boolean(), z.null(), z.array(z.union([z.string(), z.number(), z.boolean()])).max(100)]);
export const productInput = z.object({
  id: z.string().min(1).optional(),
  updatedAt: z.string().datetime().optional(),
  name: text,
  brand: text,
  categoryCode: z.enum(["CPU", "MOTHERBOARD", "RAM", "GPU", "STORAGE", "PSU", "CASE", "COOLER"]),
  price: z.number().int().min(0).max(2147483647),
  discountRate: z.number().int().min(0).max(100),
  stock: z.number().int().min(0).max(2147483647),
  isActive: z.boolean(),
  images: z.array(imagePath).max(12),
  infoImages: z.array(imagePath).max(20),
  infoText: z.string().max(20000),
  attributes: z.record(z.string().min(1).max(100), attributeValue),
}).superRefine((data, ctx) => {
  const result = attributeSchemas[data.categoryCode].safeParse(data.attributes);
  if (!result.success) for (const issue of result.error.issues) ctx.addIssue({ code: "custom", path: ["attributes", ...issue.path], message: issue.message });
  if (data.id && !data.updatedAt) ctx.addIssue({code:"custom",path:["updatedAt"],message:"상품을 다시 불러와 주세요."});
});
export type AdminProductInput = z.infer<typeof productInput>;
export type AdminProduct = AdminProductInput & { id: string; updatedAt: string; salesCount: number };
export const SPEC_TEMPLATES: Record<AdminCategory, AdminProductInput["attributes"]> = {
  CPU: { socket: "AM5", cores: 8, threads: 16, baseClockGHz: 4.2, boostClockGHz: 5.2, tdpWatts: 120, integratedGraphics: true },
  MOTHERBOARD: { socket: "AM5", formFactor: "ATX", chipset: "X870", memoryType: "DDR5", memorySlots: 4, maxMemoryGB: 128, m2Slots: 3 },
  RAM: { memoryType: "DDR5", capacityGB: 32, modules: 2, speedMHz: 6000 },
  GPU: { vramGB: 16, lengthMm: 300, slotWidth: 2.5, recommendedPsuWattage: 850, powerDrawWatts: 300, powerConnector: "12VHPWR" },
  STORAGE: { storageType: "NVME_SSD", formFactor: "M2_2280", interface: "PCIE_GEN4", capacityGB: 1000 },
  PSU: { wattage: 850, efficiencyRating: "80PLUS_GOLD", formFactor: "ATX", modular: "FULL" },
  CASE: { supportedFormFactors: ["ATX", "MICRO_ATX"], maxGpuLengthMm: 360, maxCoolerHeightMm: 165, maxRadiatorSizeMm: 360, psuFormFactor: "ATX" },
  COOLER: { coolerType: "AIR", supportedSockets: ["AM5"], heightMm: 155, radiatorSizeMm: null, tdpRatingWatts: 200 },
};
