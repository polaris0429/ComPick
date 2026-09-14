module.exports = [
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

//# sourceMappingURL=_0nxlvqa._.js.map