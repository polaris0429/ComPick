module.exports = [
"[project]/prisma/additional-products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "additionalProducts",
    ()=>additionalProducts
]);
/** Official specifications checked 2026-09-15. Prices/stock are presentation samples, not live offers. */ const entries = [
    {
        key: "amd-9700x",
        name: "Ryzen 7 9700X",
        brand: "AMD",
        category: "CPU",
        price: 389000,
        source: "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-7-9700x.html",
        summary: "Zen 5 기반 8코어 16스레드 AM5 프로세서. 기본 TDP 65W이며 Radeon 내장 그래픽을 제공합니다.",
        attributes: {
            socket: "AM5",
            cores: 8,
            threads: 16,
            baseClockGHz: 3.8,
            boostClockGHz: 5.5,
            tdpWatts: 65,
            integratedGraphics: true
        }
    },
    {
        key: "amd-9950x",
        name: "Ryzen 9 9950X",
        brand: "AMD",
        category: "CPU",
        price: 799000,
        source: "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-9-9950x.html",
        summary: "16코어 32스레드 AM5 프로세서. 기본 TDP 170W로 렌더링 등 멀티스레드 작업용 구성에 사용할 수 있습니다.",
        attributes: {
            socket: "AM5",
            cores: 16,
            threads: 32,
            baseClockGHz: 4.3,
            boostClockGHz: 5.7,
            tdpWatts: 170,
            integratedGraphics: true
        }
    },
    {
        key: "msi-b650-tomahawk",
        name: "MAG B650 TOMAHAWK WIFI",
        brand: "MSI",
        category: "MOTHERBOARD",
        price: 269000,
        source: "https://www.msi.com/Motherboard/MAG-B650-TOMAHAWK-WIFI/Specification",
        summary: "AM5·B650 기반 ATX 보드. DDR5 슬롯 4개와 M.2 슬롯 3개를 제공합니다. CPU 세대에 따라 BIOS 업데이트 및 슬롯 사용 제한이 있을 수 있습니다.",
        attributes: {
            socket: "AM5",
            formFactor: "ATX",
            chipset: "B650",
            memoryType: "DDR5",
            memorySlots: 4,
            maxMemoryGB: 256,
            m2Slots: 3
        }
    },
    {
        key: "asus-b650-plus-wifi",
        name: "TUF GAMING B650-PLUS WIFI",
        brand: "ASUS",
        category: "MOTHERBOARD",
        price: 249000,
        source: "https://www.asus.com/us/motherboards-components/motherboards/tuf-gaming/tuf-gaming-b650-plus-wifi/techspec/",
        summary: "AM5·B650 기반 ATX 보드. DDR5 슬롯 4개와 M.2 슬롯 3개를 제공합니다. CPU 지원 목록과 필요한 BIOS 버전을 함께 확인하세요.",
        attributes: {
            socket: "AM5",
            formFactor: "ATX",
            chipset: "B650",
            memoryType: "DDR5",
            memorySlots: 4,
            maxMemoryGB: 256,
            m2Slots: 3
        }
    },
    {
        key: "kingston-kf560c36bbek2-32",
        name: "FURY Beast DDR5-6000 CL36 32GB (16GB×2) KF560C36BBEK2-32",
        brand: "Kingston",
        category: "RAM",
        price: 139000,
        source: "https://www.kingston.com/datasheets/KF560C36BBEK2-32.pdf",
        summary: "16GB 모듈 2개로 구성한 32GB DDR5 키트. 6000MT/s는 EXPO/XMP 프로필 적용 속도이며, 기본 JEDEC 속도는 4800MT/s입니다.",
        attributes: {
            memoryType: "DDR5",
            capacityGB: 32,
            modules: 2,
            speedMHz: 6000
        }
    },
    {
        key: "kingston-kf560c36bbek2-64",
        name: "FURY Beast DDR5-6000 CL36 64GB (32GB×2) KF560C36BBEK2-64",
        brand: "Kingston",
        category: "RAM",
        price: 259000,
        source: "https://www.kingston.com/datasheets/KF560C36BBEK2-64.pdf",
        summary: "32GB 모듈 2개로 구성한 64GB DDR5 키트. 6000MT/s는 EXPO/XMP 프로필 적용 속도이며 실제 동작 속도는 CPU와 메인보드 설정에 따라 달라집니다.",
        attributes: {
            memoryType: "DDR5",
            capacityGB: 64,
            modules: 2,
            speedMHz: 6000
        }
    },
    {
        key: "msi-rtx4060-ventus-black",
        name: "GeForce RTX 4060 VENTUS 2X BLACK 8G",
        brand: "MSI",
        category: "GPU",
        price: 399000,
        source: "https://www.msi.com/Graphics-Card/GeForce-RTX-4060-VENTUS-2X-BLACK-8G/Specification",
        summary: "8GB GDDR6, 길이 199mm의 듀얼 팬 그래픽카드. 8핀 전원 1개, 권장 파워 550W. 제조사 소비전력 범위 115~120W 중 상한 120W를 계산에 사용합니다. 두께 41mm를 슬롯 간격으로 환산한 약 2.1슬롯 표기입니다.",
        attributes: {
            vramGB: 8,
            lengthMm: 199,
            slotWidth: 2.1,
            recommendedPsuWattage: 550,
            powerDrawWatts: 120,
            powerConnector: "8PIN_1"
        }
    },
    {
        key: "msi-4070super-ventus-oc",
        name: "GeForce RTX 4070 SUPER 12G VENTUS 2X OC",
        brand: "MSI",
        category: "GPU",
        price: 899000,
        source: "https://www.msi.com/Graphics-Card/GeForce-RTX-4070-SUPER-12G-VENTUS-2X-OC/Specification",
        summary: "12GB GDDR6X, 길이 242mm의 듀얼 팬 그래픽카드. 소비전력 220W, 권장 파워 650W, 16핀 전원을 사용합니다. 두께 43mm를 환산해 약 2.2슬롯으로 표시합니다.",
        attributes: {
            vramGB: 12,
            lengthMm: 242,
            slotWidth: 2.2,
            recommendedPsuWattage: 650,
            powerDrawWatts: 220,
            powerConnector: "12VHPWR"
        }
    },
    ...[
        1000,
        2000
    ].map((capacityGB)=>({
            key: `samsung-990-evo-plus-${capacityGB}`,
            name: `990 EVO Plus ${capacityGB / 1000}TB NVMe`,
            brand: "Samsung",
            category: "STORAGE",
            price: capacityGB === 1000 ? 129000 : 219000,
            source: "https://www.samsung.com/sg/memory-storage/nvme-ssd/990-evo-plus-1tb-mz-v9s1t0bw/",
            summary: "M.2 2280 NVMe SSD. PCIe 4.0 x4와 5.0 x2를 지원하며, 이 카탈로그에서는 PCIe 4.0으로 분류합니다. 표시 용량은 제조사 기준 십진 용량입니다.",
            attributes: {
                storageType: "NVME_SSD",
                formFactor: "M2_2280",
                interface: "PCIE_GEN4",
                capacityGB
            }
        })),
    ...[
        750,
        850
    ].map((wattage)=>({
            key: `corsair-rm${wattage}e`,
            name: `RM${wattage}e ${wattage}W 80 PLUS Gold (CP-902026${wattage === 750 ? 2 : 3})`,
            brand: "Corsair",
            category: "PSU",
            price: wattage === 750 ? 139000 : 159000,
            source: `https://www.corsair.com/us/en/p/psu/cp-902026${wattage === 750 ? 2 : 3}-na/rme-series-rm${wattage}e-fully-modular-low-noise-atx-power-supply-cp-902026${wattage === 750 ? 2 : 3}-na`,
            summary: "80 PLUS Gold 인증 ATX 파워서플라이. 필요한 케이블만 연결하는 풀 모듈러 방식입니다. 구매 시 제품 번호와 동봉 케이블을 확인하세요.",
            attributes: {
                wattage,
                efficiencyRating: "80PLUS_GOLD",
                formFactor: "ATX",
                modular: "FULL"
            }
        })),
    ...[
        false,
        true
    ].map((white)=>({
            key: `deepcool-ch560-${white ? "white" : "black"}`,
            name: white ? "CH560 WH" : "CH560 Black",
            brand: "DeepCool",
            category: "CASE",
            price: white ? 109000 : 99000,
            source: white ? "https://cn.deepcool.com/products/Cases/CH560-WH-New-Generation-of-Airflow-Case/2023/17108.shtml" : "https://de.deepcool.com/products/Cases/CH560-New-Generation-of-Airflow-Case/2023/17109.shtml",
            summary: "E-ATX까지 지원하는 미들타워. GPU 최대 380mm, 공랭 쿨러 최대 175mm, 전면/상단 최대 360mm 라디에이터를 지원합니다. 라디에이터와 그래픽카드의 동시 장착 여유는 별도 확인이 필요합니다.",
            attributes: {
                supportedFormFactors: [
                    "E_ATX",
                    "ATX",
                    "MICRO_ATX",
                    "MINI_ITX"
                ],
                maxGpuLengthMm: 380,
                maxCoolerHeightMm: 175,
                maxRadiatorSizeMm: 360,
                psuFormFactor: "ATX"
            }
        })),
    {
        key: "deepcool-ak400",
        name: "AK400",
        brand: "DeepCool",
        category: "COOLER",
        price: 35000,
        source: "https://de.deepcool.com/products/Cooling/cpuaircoolers/AK400-Performance-CPU-Cooler-1700-AM5/2021/15347.shtml",
        summary: "높이 155mm의 싱글타워 공랭 쿨러. 4개 히트파이프와 120mm 팬을 사용합니다. 220W는 제조사의 방열 성능 표기이며 모든 CPU 부하에서의 온도를 보장하는 수치는 아닙니다.",
        attributes: {
            coolerType: "AIR",
            supportedSockets: [
                "AM5",
                "AM4",
                "LGA1700",
                "LGA1200",
                "LGA1151",
                "LGA1150",
                "LGA1155"
            ],
            heightMm: 155,
            radiatorSizeMm: null,
            tdpRatingWatts: 220
        }
    },
    {
        key: "deepcool-ag400",
        name: "AG400",
        brand: "DeepCool",
        category: "COOLER",
        price: 29000,
        source: "https://pl.deepcool.com/products/Cooling/cpuaircoolers/GAMMAXX-AG400-Single-Tower-CPU-Cooler-1851-1700-AM5/2024/15932.shtml",
        summary: "높이 150mm의 싱글타워 공랭 쿨러. 4개 히트파이프와 120mm 팬을 사용합니다. 220W는 제조사 방열 성능 표기입니다. LGA1851 사용 시 해당 소켓용 브래킷이 포함된 패키지를 확인하세요.",
        attributes: {
            coolerType: "AIR",
            supportedSockets: [
                "AM5",
                "AM4",
                "LGA1851",
                "LGA1700",
                "LGA1200",
                "LGA1151",
                "LGA1150",
                "LGA1155"
            ],
            heightMm: 150,
            radiatorSizeMm: null,
            tdpRatingWatts: 220
        }
    }
];
const additionalProducts = entries.map(({ key, source, summary, ...product })=>({
        ...product,
        catalogKey: key,
        stock: 10,
        salesCount: 0,
        discountRate: 0,
        marketingContent: {
            eyebrow: product.brand,
            title: product.name,
            text: summary,
            features: [],
            promoTitle: "가격·재고 안내",
            promoText: "실제 출시된 제품의 사양을 바탕으로 등록했습니다. 가격과 재고는 로컬 시연용 예시이며 실시간 판매가·재고가 아닙니다.",
            sourceUrl: source
        }
    }));
}),
"[project]/prisma/seed-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allProducts",
    ()=>allProducts,
    "categorySeeds",
    ()=>categorySeeds,
    "prebuiltSeeds",
    ()=>prebuiltSeeds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$additional$2d$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prisma/additional-products.ts [app-rsc] (ecmascript)");
;
const categorySeeds = [
    {
        code: "CPU",
        name: "CPU",
        sortOrder: 0
    },
    {
        code: "MOTHERBOARD",
        name: "메인보드",
        sortOrder: 1
    },
    {
        code: "RAM",
        name: "RAM",
        sortOrder: 2
    },
    {
        code: "GPU",
        name: "그래픽카드",
        sortOrder: 3
    },
    {
        code: "STORAGE",
        name: "저장장치",
        sortOrder: 4
    },
    {
        code: "PSU",
        name: "파워",
        sortOrder: 5
    },
    {
        code: "CASE",
        name: "케이스",
        sortOrder: 6
    },
    {
        code: "COOLER",
        name: "쿨러",
        sortOrder: 7
    }
];
// ════════════════════════════════════════════════════════════════
// 상품 더미 데이터 — AM5 / LGA1851 두 소켓 계열로 호환성 검증(Step 3)이
// 실제로 갈릴 만한 조합이 나오도록 구성했습니다.
// ════════════════════════════════════════════════════════════════
const cpuProducts = [
    {
        name: "Ryzen 7 9800X3D",
        images: [
            "/products/ryzen-9800x3d/thumbnail.jpeg"
        ],
        marketingContent: {
            eyebrow: "",
            title: "",
            text: "",
            features: [],
            promoTitle: "",
            promoText: "",
            infoImages: [
                "/products/ryzen-9800x3d/info.jpg"
            ]
        },
        brand: "AMD",
        category: "CPU",
        price: 729000,
        discountRate: 5,
        salesCount: 1240,
        stock: 34,
        attributes: {
            socket: "AM5",
            cores: 8,
            threads: 16,
            baseClockGHz: 4.7,
            boostClockGHz: 5.2,
            tdpWatts: 120,
            integratedGraphics: true
        }
    },
    {
        name: "Ryzen 5 9600X",
        brand: "AMD",
        category: "CPU",
        price: 329000,
        salesCount: 860,
        stock: 52,
        attributes: {
            socket: "AM5",
            cores: 6,
            threads: 12,
            baseClockGHz: 3.9,
            boostClockGHz: 5.4,
            tdpWatts: 65,
            integratedGraphics: true
        }
    },
    {
        name: "Core Ultra 9 285K",
        brand: "Intel",
        category: "CPU",
        price: 799000,
        discountRate: 8,
        salesCount: 410,
        stock: 21,
        attributes: {
            socket: "LGA1851",
            cores: 24,
            threads: 24,
            baseClockGHz: 3.7,
            boostClockGHz: 5.7,
            tdpWatts: 125,
            integratedGraphics: true
        }
    },
    {
        name: "Core Ultra 5 245K",
        brand: "Intel",
        category: "CPU",
        price: 389000,
        salesCount: 505,
        stock: 40,
        attributes: {
            socket: "LGA1851",
            cores: 14,
            threads: 14,
            baseClockGHz: 4.2,
            boostClockGHz: 5.2,
            tdpWatts: 125,
            integratedGraphics: true
        }
    }
];
const motherboardProducts = [
    {
        name: "ROG STRIX X870-A GAMING WIFI",
        brand: "ASUS",
        category: "MOTHERBOARD",
        price: 459000,
        discountRate: 10,
        salesCount: 210,
        stock: 15,
        attributes: {
            socket: "AM5",
            formFactor: "ATX",
            chipset: "X870",
            memoryType: "DDR5",
            memorySlots: 4,
            maxMemoryGB: 192,
            m2Slots: 4
        }
    },
    {
        name: "MAG B850M MORTAR WIFI",
        brand: "MSI",
        category: "MOTHERBOARD",
        price: 259000,
        salesCount: 380,
        stock: 28,
        attributes: {
            socket: "AM5",
            formFactor: "MICRO_ATX",
            chipset: "B850",
            memoryType: "DDR5",
            memorySlots: 4,
            maxMemoryGB: 128,
            m2Slots: 3
        }
    },
    {
        name: "Z890 AORUS ELITE WIFI7",
        brand: "GIGABYTE",
        category: "MOTHERBOARD",
        price: 399000,
        discountRate: 5,
        salesCount: 150,
        stock: 18,
        attributes: {
            socket: "LGA1851",
            formFactor: "ATX",
            chipset: "Z890",
            memoryType: "DDR5",
            memorySlots: 4,
            maxMemoryGB: 192,
            m2Slots: 4
        }
    },
    {
        name: "B860M Pro-A WIFI",
        brand: "ASRock",
        category: "MOTHERBOARD",
        price: 219000,
        salesCount: 190,
        stock: 33,
        attributes: {
            socket: "LGA1851",
            formFactor: "MICRO_ATX",
            chipset: "B860",
            memoryType: "DDR5",
            memorySlots: 4,
            maxMemoryGB: 128,
            m2Slots: 3
        }
    }
];
const ramProducts = [
    {
        name: "Trident Z5 RGB DDR5-6000 32GB(16Gx2)",
        brand: "G.SKILL",
        category: "RAM",
        price: 179000,
        discountRate: 12,
        salesCount: 640,
        stock: 60,
        attributes: {
            memoryType: "DDR5",
            capacityGB: 32,
            modules: 2,
            speedMHz: 6000
        }
    },
    {
        name: "Vengeance DDR5-5600 32GB(16Gx2)",
        brand: "Corsair",
        category: "RAM",
        price: 149000,
        salesCount: 720,
        stock: 75,
        attributes: {
            memoryType: "DDR5",
            capacityGB: 32,
            modules: 2,
            speedMHz: 5600
        }
    },
    {
        name: "Ripjaws S5 DDR5-6400 64GB(32Gx2)",
        brand: "G.SKILL",
        category: "RAM",
        price: 349000,
        discountRate: 6,
        salesCount: 95,
        stock: 20,
        attributes: {
            memoryType: "DDR5",
            capacityGB: 64,
            modules: 2,
            speedMHz: 6400
        }
    }
];
const gpuProducts = [
    {
        name: "GeForce RTX 5070 12GB",
        brand: "NVIDIA",
        category: "GPU",
        price: 799000,
        salesCount: 330,
        stock: 12,
        attributes: {
            vramGB: 12,
            lengthMm: 305,
            slotWidth: 2.5,
            recommendedPsuWattage: 650,
            powerDrawWatts: 250,
            powerConnector: "12VHPWR"
        }
    },
    {
        name: "GeForce RTX 5080 16GB",
        brand: "NVIDIA",
        category: "GPU",
        price: 1499000,
        discountRate: 3,
        salesCount: 140,
        stock: 7,
        attributes: {
            vramGB: 16,
            lengthMm: 336,
            slotWidth: 3,
            recommendedPsuWattage: 850,
            powerDrawWatts: 360,
            powerConnector: "12VHPWR"
        }
    },
    {
        name: "Radeon RX 9070 XT 16GB",
        brand: "AMD",
        category: "GPU",
        price: 899000,
        discountRate: 7,
        salesCount: 180,
        stock: 14,
        attributes: {
            vramGB: 16,
            lengthMm: 320,
            slotWidth: 2.5,
            recommendedPsuWattage: 750,
            powerDrawWatts: 304,
            powerConnector: "8PIN_2"
        }
    }
];
const storageProducts = [
    {
        name: "990 PRO 2TB NVMe",
        brand: "Samsung",
        category: "STORAGE",
        price: 219000,
        discountRate: 15,
        salesCount: 980,
        stock: 90,
        attributes: {
            storageType: "NVME_SSD",
            formFactor: "M2_2280",
            interface: "PCIE_GEN4",
            capacityGB: 2000
        }
    },
    {
        name: "Black SN850X 1TB NVMe",
        brand: "WD",
        category: "STORAGE",
        price: 129000,
        salesCount: 1100,
        stock: 110,
        attributes: {
            storageType: "NVME_SSD",
            formFactor: "M2_2280",
            interface: "PCIE_GEN4",
            capacityGB: 1000
        }
    },
    {
        name: "870 EVO 1TB SATA",
        brand: "Samsung",
        category: "STORAGE",
        price: 89000,
        salesCount: 430,
        stock: 65,
        attributes: {
            storageType: "SATA_SSD",
            formFactor: "2_5_INCH",
            interface: "SATA3",
            capacityGB: 1000
        }
    }
];
const psuProducts = [
    {
        name: "RM850x SHIFT 850W 80+ GOLD",
        brand: "Corsair",
        category: "PSU",
        price: 189000,
        discountRate: 8,
        salesCount: 260,
        stock: 24,
        attributes: {
            wattage: 850,
            efficiencyRating: "80PLUS_GOLD",
            formFactor: "ATX",
            modular: "FULL"
        }
    },
    {
        name: "MAG A650BN 650W 80+ BRONZE",
        brand: "MSI",
        category: "PSU",
        price: 99000,
        salesCount: 410,
        stock: 45,
        attributes: {
            wattage: 650,
            efficiencyRating: "80PLUS_BRONZE",
            formFactor: "ATX",
            modular: "NONE"
        }
    },
    {
        name: "PRIME PX-1000 1000W 80+ PLATINUM",
        brand: "Seasonic",
        category: "PSU",
        price: 259000,
        discountRate: 5,
        salesCount: 70,
        stock: 10,
        attributes: {
            wattage: 1000,
            efficiencyRating: "80PLUS_PLATINUM",
            formFactor: "ATX",
            modular: "FULL"
        }
    }
];
const caseProducts = [
    {
        name: "H5 Flow",
        brand: "NZXT",
        category: "CASE",
        price: 119000,
        salesCount: 300,
        stock: 26,
        attributes: {
            supportedFormFactors: [
                "ATX",
                "MICRO_ATX",
                "MINI_ITX"
            ],
            maxGpuLengthMm: 400,
            maxCoolerHeightMm: 165,
            maxRadiatorSizeMm: 360,
            psuFormFactor: "ATX"
        }
    },
    {
        name: "North",
        brand: "Fractal Design",
        category: "CASE",
        price: 179000,
        discountRate: 4,
        salesCount: 150,
        stock: 12,
        attributes: {
            supportedFormFactors: [
                "ATX",
                "MICRO_ATX",
                "MINI_ITX"
            ],
            maxGpuLengthMm: 355,
            maxCoolerHeightMm: 170,
            maxRadiatorSizeMm: 280,
            psuFormFactor: "ATX"
        }
    },
    {
        name: "A3 mATX",
        brand: "Lian Li",
        category: "CASE",
        price: 89000,
        salesCount: 95,
        stock: 18,
        attributes: {
            // 미니 케이스라 ATX 메인보드는 들어가지 않습니다 — Step 3 폼팩터 검증용 반례
            supportedFormFactors: [
                "MICRO_ATX",
                "MINI_ITX"
            ],
            maxGpuLengthMm: 322,
            maxCoolerHeightMm: 71,
            maxRadiatorSizeMm: 240,
            psuFormFactor: "ATX"
        }
    }
];
const coolerProducts = [
    {
        name: "NH-D15",
        brand: "Noctua",
        category: "COOLER",
        price: 159000,
        salesCount: 220,
        stock: 22,
        attributes: {
            coolerType: "AIR",
            supportedSockets: [
                "AM5",
                "LGA1851"
            ],
            // A3 mATX 케이스(maxCoolerHeightMm: 71)와는 절대 맞지 않는 대형 쿨러 — Step 3 간섭 검증용 반례
            heightMm: 165,
            radiatorSizeMm: null,
            tdpRatingWatts: 250
        }
    },
    {
        name: "AK620 DIGITAL",
        brand: "DeepCool",
        category: "COOLER",
        price: 79000,
        discountRate: 10,
        salesCount: 340,
        stock: 40,
        attributes: {
            coolerType: "AIR",
            supportedSockets: [
                "AM5",
                "LGA1851"
            ],
            heightMm: 160,
            radiatorSizeMm: null,
            tdpRatingWatts: 220
        }
    },
    {
        name: "Liquid Freezer III 360",
        brand: "ARCTIC",
        category: "COOLER",
        price: 149000,
        salesCount: 180,
        stock: 16,
        attributes: {
            coolerType: "AIO_LIQUID",
            supportedSockets: [
                "AM5",
                "LGA1851"
            ],
            heightMm: null,
            radiatorSizeMm: 360,
            tdpRatingWatts: 350
        }
    },
    {
        name: "iCUE LINK H100i",
        brand: "Corsair",
        category: "COOLER",
        price: 199000,
        discountRate: 6,
        salesCount: 130,
        stock: 11,
        attributes: {
            coolerType: "AIO_LIQUID",
            supportedSockets: [
                "AM5",
                "LGA1851"
            ],
            heightMm: null,
            radiatorSizeMm: 240,
            tdpRatingWatts: 280
        }
    }
];
const allProducts = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$additional$2d$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["additionalProducts"],
    ...cpuProducts,
    ...motherboardProducts,
    ...ramProducts,
    ...gpuProducts,
    ...storageProducts,
    ...psuProducts,
    ...caseProducts,
    ...coolerProducts
];
const prebuiltSeeds = [
    {
        name: "입문 게이밍 PC - Ryzen 5 · RTX 5070",
        description: "1440p 게이밍에 무리 없는 밸런스형 구성입니다.",
        price: 1890000,
        discountRate: 5,
        salesCount: 64,
        componentNames: [
            "Ryzen 5 9600X",
            "MAG B850M MORTAR WIFI",
            "Vengeance DDR5-5600 32GB(16Gx2)",
            "GeForce RTX 5070 12GB",
            "Black SN850X 1TB NVMe",
            "MAG A650BN 650W 80+ BRONZE",
            "H5 Flow",
            "AK620 DIGITAL"
        ]
    },
    {
        name: "하이엔드 크리에이터 PC - Core Ultra 9 · RTX 5080",
        description: "영상 편집과 3D 작업까지 여유 있게 처리하는 고성능 구성입니다.",
        price: 3390000,
        discountRate: 8,
        salesCount: 21,
        componentNames: [
            "Core Ultra 9 285K",
            "Z890 AORUS ELITE WIFI7",
            "Ripjaws S5 DDR5-6400 64GB(32Gx2)",
            "GeForce RTX 5080 16GB",
            "990 PRO 2TB NVMe",
            "PRIME PX-1000 1000W 80+ PLATINUM",
            "North",
            "Liquid Freezer III 360"
        ]
    }
];
}),
"[project]/src/lib/demo-catalog.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDemoCatalog",
    ()=>getDemoCatalog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$seed$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prisma/seed-data.ts [app-rsc] (ecmascript)");
;
function getDemoCatalog() {
    const products = __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$seed$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allProducts"].map((product, index)=>({
            id: `demo-product-${index}`,
            name: product.name,
            brand: product.brand,
            categoryCode: product.category,
            price: product.price,
            discountRate: product.discountRate ?? 0,
            salesCount: product.salesCount ?? 0,
            attributes: product.attributes,
            image: product.images?.[0] ?? null,
            images: product.images ?? [],
            marketingContent: product.marketingContent ?? null
        }));
    const categories = __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$seed$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categorySeeds"].map((category)=>({
            ...category,
            productCount: products.filter((p)=>p.categoryCode === category.code).length
        }));
    const prebuilts = __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$seed$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prebuiltSeeds"].map((prebuilt, index)=>({
            id: `demo-prebuilt-${index}`,
            name: prebuilt.name,
            description: prebuilt.description,
            price: prebuilt.price,
            discountRate: prebuilt.discountRate,
            salesCount: prebuilt.salesCount,
            images: [],
            components: prebuilt.componentNames.map((name)=>{
                const product = products.find((p)=>p.name === name);
                if (!product) throw new Error(`Missing demo component: ${name}`);
                return product;
            })
        }));
    return {
        products,
        categories,
        prebuilts
    };
}
}),
];

//# sourceMappingURL=_13_j7si._.js.map