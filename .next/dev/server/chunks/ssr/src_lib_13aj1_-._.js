module.exports = [
"[project]/src/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
    const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaPg"]({
        connectionString
    });
    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaClient"]({
        adapter
    });
}
const prisma = globalForPrisma.prisma ?? createPrismaClient();
if ("TURBOPACK compile-time truthy", 1) {
    globalForPrisma.prisma = prisma;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/repositories/catalog.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "getActivePrebuiltPCs",
    ()=>getActivePrebuiltPCs,
    "getActiveProducts",
    ()=>getActiveProducts,
    "getCategories",
    ()=>getCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function getCategories() {
    const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].category.findMany({
        orderBy: {
            sortOrder: "asc"
        },
        include: {
            _count: {
                select: {
                    products: {
                        where: {
                            isActive: true
                        }
                    }
                }
            }
        }
    });
    return categories.map((c)=>({
            code: c.code,
            name: c.name,
            sortOrder: c.sortOrder,
            productCount: c._count.products
        }));
}
function toCatalogProduct(p) {
    return {
        id: p.id,
        name: p.name,
        brand: p.brand,
        price: p.price,
        discountRate: p.discountRate,
        image: p.images[0] ?? null,
        images: p.images,
        salesCount: p.salesCount,
        categoryCode: p.category.code,
        attributes: p.attributes,
        marketingContent: p.marketingContent ?? null
    };
}
async function getActiveProducts() {
    const products = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product.findMany({
        where: {
            isActive: true
        },
        include: {
            category: true
        },
        orderBy: {
            salesCount: "desc"
        }
    });
    return products.map(toCatalogProduct);
}
async function getActivePrebuiltPCs() {
    const prebuilts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].prebuiltPC.findMany({
        where: {
            isActive: true
        },
        orderBy: {
            salesCount: "desc"
        },
        include: {
            components: {
                include: {
                    product: {
                        include: {
                            category: true
                        }
                    }
                }
            }
        }
    });
    return prebuilts.map((pb)=>({
            id: pb.id,
            kind: pb.kind,
            specText: pb.specText,
            infoImages: pb.infoImages,
            name: pb.name,
            description: pb.description,
            images: pb.images,
            price: pb.price,
            discountRate: pb.discountRate,
            salesCount: pb.salesCount,
            components: pb.components.map((c)=>({
                    ...toCatalogProduct(c.product),
                    quantity: c.quantity
                }))
        }));
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=src_lib_13aj1_-._.js.map