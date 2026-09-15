module.exports = [
"[project]/src/app/api/admin/products/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$access$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/access.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$product$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/product-schema.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const runtime = "nodejs";
const denied = ()=>Response.json({
        error: "로컬 개발 서버에서만 이용할 수 있습니다."
    }, {
        status: 403
    });
async function GET(request) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$access$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["canUseLocalAdmin"])(request.headers)) return denied();
    try {
        const [categories, products] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].category.findMany({
                orderBy: {
                    sortOrder: "asc"
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].product.findMany({
                include: {
                    category: true
                },
                orderBy: {
                    updatedAt: "desc"
                }
            })
        ]);
        return Response.json({
            categories: categories.map(({ code, name })=>({
                    code,
                    name
                })),
            products: products.map((p)=>{
                const marketing = p.marketingContent ?? {};
                return {
                    id: p.id,
                    name: p.name,
                    brand: p.brand,
                    categoryCode: p.category.code,
                    price: p.price,
                    discountRate: p.discountRate,
                    stock: p.stock,
                    isActive: p.isActive,
                    images: p.images,
                    attributes: p.attributes,
                    infoImages: Array.isArray(marketing.infoImages) ? marketing.infoImages : [],
                    infoText: typeof marketing.text === "string" ? marketing.text : "",
                    salesCount: p.salesCount,
                    updatedAt: p.updatedAt.toISOString()
                };
            })
        }, {
            headers: {
                "Cache-Control": "no-store"
            }
        });
    } catch  {
        return Response.json({
            error: "상품 목록을 불러오지 못했습니다. DB 연결을 확인해 주세요."
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$access$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["canMutateLocalAdmin"])(request)) return denied();
    let body;
    try {
        body = await request.json();
    } catch  {
        return Response.json({
            error: "잘못된 요청입니다."
        }, {
            status: 400
        });
    }
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$product$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["productInput"].safeParse(body);
    if (!parsed.success) return Response.json({
        error: parsed.error.issues.map((i)=>`${i.path.join(".")}: ${i.message}`).join("\n")
    }, {
        status: 400
    });
    const input = parsed.data;
    try {
        const category = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].category.findUnique({
            where: {
                code: input.categoryCode
            }
        });
        if (!category) return Response.json({
            error: "등록되지 않은 카테고리입니다."
        }, {
            status: 400
        });
        const previous = input.id ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].product.findUnique({
            where: {
                id: input.id
            }
        }) : null;
        if (input.id && !previous) return Response.json({
            error: "삭제된 상품입니다."
        }, {
            status: 404
        });
        const oldMarketing = previous?.marketingContent;
        const marketing = oldMarketing && typeof oldMarketing === "object" && !Array.isArray(oldMarketing) ? oldMarketing : {};
        const data = {
            name: input.name,
            brand: input.brand,
            categoryId: category.id,
            price: input.price,
            discountRate: input.discountRate,
            stock: input.stock,
            isActive: input.isActive,
            images: input.images,
            attributes: input.attributes,
            marketingContent: {
                eyebrow: "",
                title: "",
                features: [],
                promoTitle: "",
                promoText: "",
                ...marketing,
                text: input.infoText,
                infoImages: input.infoImages
            }
        };
        if (input.id) {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].product.updateMany({
                where: {
                    id: input.id,
                    updatedAt: new Date(input.updatedAt)
                },
                data
            });
            if (!result.count) return Response.json({
                error: "다른 곳에서 수정된 상품입니다. 목록을 새로고침하고 다시 수정해 주세요."
            }, {
                status: 409
            });
            return Response.json({
                id: input.id
            });
        }
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].product.create({
            data
        });
        return Response.json({
            id: product.id
        }, {
            status: 201
        });
    } catch  {
        return Response.json({
            error: "저장하지 못했습니다. DB 연결과 입력 값을 확인해 주세요."
        }, {
            status: 500
        });
    }
}
async function DELETE(request) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$access$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["canMutateLocalAdmin"])(request)) return denied();
    let body;
    try {
        body = await request.json();
    } catch  {
        return Response.json({
            error: "잘못된 요청입니다."
        }, {
            status: 400
        });
    }
    if (!body || typeof body !== "object" || typeof body.id !== "string" || typeof body.updatedAt !== "string" || !Number.isFinite(Date.parse(body.updatedAt))) return Response.json({
        error: "삭제할 상품을 다시 선택해 주세요."
    }, {
        status: 400
    });
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].product.deleteMany({
            where: {
                id: body.id,
                updatedAt: new Date(body.updatedAt)
            }
        });
        if (!result.count) return Response.json({
            error: "상품이 변경되었거나 이미 삭제되었습니다. 목록을 새로고침하세요."
        }, {
            status: 409
        });
        return Response.json({
            ok: true
        });
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Prisma"].PrismaClientKnownRequestError && error.code === "P2003") return Response.json({
            error: "주문 또는 완제품에서 사용 중인 상품은 삭제할 수 없습니다. 판매 상태를 ‘숨김’으로 변경해 주세요."
        }, {
            status: 409
        });
        return Response.json({
            error: "상품을 삭제하지 못했습니다."
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/admin/access.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canMutateLocalAdmin",
    ()=>canMutateLocalAdmin,
    "canUseLocalAdmin",
    ()=>canUseLocalAdmin
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
function equalSecret(actual, expected) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(actual).digest(), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(expected).digest());
}
function canUseLocalAdmin(headers) {
    if (process.env.NEXT_PUBLIC_COMPICK_DEMO_MODE === "1") return false;
    const host = headers.get("host") ?? "";
    if ("TURBOPACK compile-time truthy", 1) return /^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/.test(host);
    //TURBOPACK unreachable
    ;
    const username = undefined;
    const password = undefined;
    const origin = undefined;
}
function canMutateLocalAdmin(request) {
    if (!canUseLocalAdmin(request.headers)) return false;
    const origin = request.headers.get("origin");
    if (!origin) return false;
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return new URL(origin).host === request.headers.get("host") && [
            "http:",
            "https:"
        ].includes(new URL(origin).protocol);
    } catch  {
        return false;
    }
}
}),
"[project]/src/lib/admin/product-schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SPEC_TEMPLATES",
    ()=>SPEC_TEMPLATES,
    "attributeSchemas",
    ()=>attributeSchemas,
    "imagePath",
    ()=>imagePath,
    "productInput",
    ()=>productInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
const text = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(200);
const positive = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().max(1000000);
const count = positive.int();
const nonnegative = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1000000);
const formFactor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "E_ATX",
    "ATX",
    "MICRO_ATX",
    "MINI_ITX"
]);
const memoryType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "DDR4",
    "DDR5"
]);
const socketList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(text).min(1);
const attributeSchemas = {
    CPU: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
        socket: text,
        cores: count,
        threads: count,
        baseClockGHz: positive,
        boostClockGHz: positive,
        tdpWatts: positive,
        integratedGraphics: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
    }),
    MOTHERBOARD: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
        socket: text,
        formFactor,
        chipset: text,
        memoryType,
        memorySlots: count,
        maxMemoryGB: count,
        m2Slots: nonnegative.int()
    }),
    RAM: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
        memoryType,
        capacityGB: count,
        modules: count,
        speedMHz: count
    }),
    GPU: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
        vramGB: positive,
        lengthMm: positive,
        slotWidth: positive,
        recommendedPsuWattage: positive,
        powerDrawWatts: positive,
        powerConnector: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "NONE",
            "8PIN_1",
            "8PIN_2",
            "12VHPWR"
        ])
    }),
    STORAGE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
        storageType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "NVME_SSD",
            "SATA_SSD",
            "HDD"
        ]),
        formFactor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "M2_2280",
            "2_5_INCH",
            "3_5_INCH"
        ]),
        interface: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "PCIE_GEN3",
            "PCIE_GEN4",
            "PCIE_GEN5",
            "SATA3"
        ]),
        capacityGB: count
    }),
    PSU: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
        wattage: positive,
        efficiencyRating: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "80PLUS_WHITE",
            "80PLUS_BRONZE",
            "80PLUS_GOLD",
            "80PLUS_PLATINUM"
        ]),
        formFactor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "ATX",
            "SFX"
        ]),
        modular: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "FULL",
            "SEMI",
            "NONE"
        ])
    }),
    CASE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
        supportedFormFactors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(formFactor).min(1),
        maxGpuLengthMm: positive,
        maxCoolerHeightMm: positive,
        maxRadiatorSizeMm: positive.nullable(),
        psuFormFactor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "ATX",
            "SFX"
        ])
    }),
    COOLER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
        coolerType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "AIR",
            "AIO_LIQUID"
        ]),
        supportedSockets: socketList,
        heightMm: positive.nullable(),
        radiatorSizeMm: positive.nullable(),
        tdpRatingWatts: positive
    })
};
const imagePath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(2000).refine((value)=>{
    if (/^\/(?!\/)[a-zA-Z0-9/_.-]+$/.test(value) && !value.includes("..")) return true;
    try {
        return new URL(value).protocol === "https:";
    } catch  {
        return false;
    }
}, "이미지는 /로 시작하는 로컬 경로 또는 https 주소를 입력하세요.");
const attributeValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(1000),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().finite(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].null(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
    ])).max(100)
]);
const productInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).optional(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime().optional(),
    name: text,
    brand: text,
    categoryCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "CPU",
        "MOTHERBOARD",
        "RAM",
        "GPU",
        "STORAGE",
        "PSU",
        "CASE",
        "COOLER"
    ]),
    price: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).max(2147483647),
    discountRate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).max(100),
    stock: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).max(2147483647),
    isActive: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    images: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(imagePath).max(12),
    infoImages: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(imagePath).max(20),
    infoText: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(20000),
    attributes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(100), attributeValue)
}).superRefine((data, ctx)=>{
    const result = attributeSchemas[data.categoryCode].safeParse(data.attributes);
    if (!result.success) for (const issue of result.error.issues)ctx.addIssue({
        code: "custom",
        path: [
            "attributes",
            ...issue.path
        ],
        message: issue.message
    });
    if (data.id && !data.updatedAt) ctx.addIssue({
        code: "custom",
        path: [
            "updatedAt"
        ],
        message: "상품을 다시 불러와 주세요."
    });
});
const SPEC_TEMPLATES = {
    CPU: {
        socket: "AM5",
        cores: 8,
        threads: 16,
        baseClockGHz: 4.2,
        boostClockGHz: 5.2,
        tdpWatts: 120,
        integratedGraphics: true
    },
    MOTHERBOARD: {
        socket: "AM5",
        formFactor: "ATX",
        chipset: "X870",
        memoryType: "DDR5",
        memorySlots: 4,
        maxMemoryGB: 128,
        m2Slots: 3
    },
    RAM: {
        memoryType: "DDR5",
        capacityGB: 32,
        modules: 2,
        speedMHz: 6000
    },
    GPU: {
        vramGB: 16,
        lengthMm: 300,
        slotWidth: 2.5,
        recommendedPsuWattage: 850,
        powerDrawWatts: 300,
        powerConnector: "12VHPWR"
    },
    STORAGE: {
        storageType: "NVME_SSD",
        formFactor: "M2_2280",
        interface: "PCIE_GEN4",
        capacityGB: 1000
    },
    PSU: {
        wattage: 850,
        efficiencyRating: "80PLUS_GOLD",
        formFactor: "ATX",
        modular: "FULL"
    },
    CASE: {
        supportedFormFactors: [
            "ATX",
            "MICRO_ATX"
        ],
        maxGpuLengthMm: 360,
        maxCoolerHeightMm: 165,
        maxRadiatorSizeMm: 360,
        psuFormFactor: "ATX"
    },
    COOLER: {
        coolerType: "AIR",
        supportedSockets: [
            "AM5"
        ],
        heightMm: 155,
        radiatorSizeMm: null,
        tdpRatingWatts: 200
    }
};
}),
"[project]/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
/**
 * Prisma 7부터 schema.prisma의 datasource 블록에 `url`을 더 이상 쓸 수
 * 없습니다 (CLI용 연결 정보는 prisma.config.ts로, 런타임 연결은 driver
 * adapter로 완전히 분리되었습니다). 그래서 PrismaClient가 연결 문자열을
 * 저절로 찾지 못하고, 아래처럼 @prisma/adapter-pg에 명시적으로 넘겨줘야
 * 합니다.
 *
 * Next.js 개발 서버는 파일을 저장할 때마다 모듈을 다시 로드합니다. 매번 새
 * PrismaClient를 생성하면 DB 커넥션이 계속 쌓이므로, globalThis에 캐싱해
 * 인스턴스를 하나만 유지합니다. 프로덕션(서버리스가 아닌 Docker 컨테이너)
 * 빌드에서는 모듈이 한 번만 로드되므로 이 캐싱이 없어도 되지만, 있어도
 * 무해합니다.
 */ const globalForPrisma = globalThis;
function createPrismaClient() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
        throw new Error("DATABASE_URL 환경 변수가 설정되지 않았습니다. .env를 확인하세요. " + "예: DATABASE_URL=postgresql://compick:compick_dev_password@localhost:5432/compick?schema=public");
    }
    const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaPg"]({
        connectionString
    });
    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaClient"]({
        adapter
    });
}
const prisma = globalForPrisma.prisma ?? createPrismaClient();
if ("TURBOPACK compile-time truthy", 1) {
    globalForPrisma.prisma = prisma;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=src_1x05a7d._.js.map