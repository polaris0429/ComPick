module.exports = [
"[project]/src/components/shop/build-workspace.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BuildWorkspace",
    ()=>BuildWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/build-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$category$2d$nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/category-nav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$filters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/product-filters.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/product-grid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$prebuilt$2d$grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/prebuilt-grid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$quote$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/quote-panel.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function matchesFilters(product, filters) {
    const attrs = product.attributes;
    for (const [key, selected] of Object.entries(filters)){
        if (selected.size === 0) continue;
        if (!selected.has(String(attrs[key]))) return false;
    }
    return true;
}
function sortProducts(products, sort) {
    const sorted = [
        ...products
    ];
    switch(sort){
        case "popular":
            sorted.sort((a, b)=>b.salesCount - a.salesCount);
            break;
        case "price-asc":
            sorted.sort((a, b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyDiscount"])(a.price, a.discountRate) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyDiscount"])(b.price, b.discountRate));
            break;
        case "price-desc":
            sorted.sort((a, b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyDiscount"])(b.price, b.discountRate) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyDiscount"])(a.price, a.discountRate));
            break;
    }
    return sorted;
}
function BuildWorkspace({ categories, products, prebuilts }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("parts");
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(categories[0]?.code ?? "CPU");
    const [activeFilters, setActiveFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("popular");
    const selectPart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBuildStore"])((s)=>s.selectPart);
    const selectedParts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBuildStore"])((s)=>s.selectedParts);
    const loadPrebuilt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBuildStore"])((s)=>s.loadPrebuilt);
    const categoryProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>products.filter((p)=>p.categoryCode === activeCategory), [
        products,
        activeCategory
    ]);
    const visibleProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>sortProducts(categoryProducts.filter((p)=>matchesFilters(p, activeFilters)), sortBy), [
        categoryProducts,
        activeFilters,
        sortBy
    ]);
    function handleSelectCategory(code) {
        setActiveTab("parts");
        setActiveCategory(code);
        setActiveFilters({}); // 카테고리가 바뀌면 이전 카테고리의 필터는 의미가 없으므로 초기화
    }
    function handleToggleFilter(key, value) {
        setActiveFilters((prev)=>{
            const next = {
                ...prev
            };
            const current = new Set(next[key] ?? []);
            if (current.has(value)) {
                current.delete(value);
            } else {
                current.add(value);
            }
            next[key] = current;
            return next;
        });
    }
    const hasActiveFilters = Object.values(activeFilters).some((set)=>set.size > 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-6 py-6 lg:grid-cols-[220px_1fr_340px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:order-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$category$2d$nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategoryNav"], {
                    categories: categories,
                    activeTab: activeTab,
                    activeCategory: activeCategory,
                    onSelectCategory: handleSelectCategory,
                    onSelectPrebuilt: ()=>setActiveTab("prebuilt")
                }, void 0, false, {
                    fileName: "[project]/src/components/shop/build-workspace.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shop/build-workspace.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex min-w-0 flex-col gap-4 lg:order-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 border-b border-line",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab("parts"),
                                className: `border-b-2 px-1 pb-2 text-sm font-medium transition-colors ${activeTab === "parts" ? "border-copper text-ink" : "border-transparent text-ink-muted hover:text-ink"}`,
                                children: "부품 구성"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/build-workspace.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab("prebuilt"),
                                className: `border-b-2 px-1 pb-2 text-sm font-medium transition-colors ${activeTab === "prebuilt" ? "border-copper text-ink" : "border-transparent text-ink-muted hover:text-ink"}`,
                                children: "완제품 PC"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/build-workspace.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/build-workspace.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    activeTab === "parts" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$filters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductFilters"], {
                                category: activeCategory,
                                categoryProducts: categoryProducts,
                                activeFilters: activeFilters,
                                onToggleFilter: handleToggleFilter,
                                sortBy: sortBy,
                                onChangeSortBy: setSortBy
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/build-workspace.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductGrid"], {
                                products: visibleProducts,
                                selectedCategoryPartId: selectedParts[activeCategory]?.id,
                                onSelect: (product)=>selectPart(product),
                                onClearFilters: ()=>setActiveFilters({}),
                                hasActiveFilters: hasActiveFilters
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/build-workspace.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/build-workspace.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$prebuilt$2d$grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrebuiltGrid"], {
                        prebuilts: prebuilts,
                        onSelect: (prebuilt)=>loadPrebuilt(prebuilt.components)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/build-workspace.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/build-workspace.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:order-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$quote$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuotePanel"], {}, void 0, false, {
                    fileName: "[project]/src/components/shop/build-workspace.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shop/build-workspace.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/build-workspace.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/shop/category-nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryNav",
    ()=>CategoryNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.mjs [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circuit$2d$board$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircuitBoard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circuit-board.mjs [app-ssr] (ecmascript) <export default as CircuitBoard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$memory$2d$stick$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MemoryStick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/memory-stick.mjs [app-ssr] (ecmascript) <export default as MemoryStick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gpu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gpu.mjs [app-ssr] (ecmascript) <export default as Gpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.mjs [app-ssr] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.mjs [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fan$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fan$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/fan.mjs [app-ssr] (ecmascript) <export default as Fan>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.mjs [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const CATEGORY_ICONS = {
    CPU: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
    MOTHERBOARD: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circuit$2d$board$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircuitBoard$3e$__["CircuitBoard"],
    RAM: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$memory$2d$stick$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MemoryStick$3e$__["MemoryStick"],
    GPU: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gpu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gpu$3e$__["Gpu"],
    STORAGE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"],
    PSU: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    CASE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"],
    COOLER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fan$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fan$3e$__["Fan"]
};
function CategoryNav({ categories, activeTab, activeCategory, onSelectCategory, onSelectPrebuilt }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-6 flex flex-col gap-0.5",
        "aria-label": "부품 카테고리",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "px-3 pb-2 text-xs font-medium text-ink-muted",
                children: "부품 카테고리"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/category-nav.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            categories.map((category)=>{
                const Icon = CATEGORY_ICONS[category.code];
                const isActive = activeTab === "parts" && activeCategory === category.code;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onSelectCategory(category.code),
                    "aria-current": isActive ? "true" : undefined,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2.5 rounded-r-md border-l-2 px-3 py-2 text-left text-sm transition-colors", isActive ? "border-copper bg-paper-raised font-medium text-ink" : "border-transparent text-ink-muted hover:bg-paper-raised hover:text-ink"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "h-4 w-4 shrink-0",
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/src/components/shop/category-nav.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this),
                        category.name
                    ]
                }, category.code, true, {
                    fileName: "[project]/src/components/shop/category-nav.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 border-t border-line pt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onSelectPrebuilt,
                    "aria-current": activeTab === "prebuilt" ? "true" : undefined,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-center gap-2.5 rounded-r-md border-l-2 px-3 py-2 text-left text-sm transition-colors", activeTab === "prebuilt" ? "border-copper bg-paper-raised font-medium text-ink" : "border-transparent text-ink-muted hover:bg-paper-raised hover:text-ink"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                            className: "h-4 w-4 shrink-0",
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/src/components/shop/category-nav.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        "완제품 PC"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shop/category-nav.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shop/category-nav.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/category-nav.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/shop/prebuilt-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrebuiltCard",
    ()=>PrebuiltCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function PrebuiltCard({ prebuilt, onSelect }) {
    const discounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyDiscount"])(prebuilt.price, prebuilt.discountRate);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 rounded-md border-l-2 border-y border-r border-line border-l-circuit bg-paper-raised p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-medium text-ink",
                        children: prebuilt.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    prebuilt.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-ink-muted",
                        children: prebuilt.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex flex-col gap-0.5",
                children: prebuilt.components.map((component)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex justify-between gap-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-ink-muted",
                                children: component.brand
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate text-ink",
                                children: component.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this)
                        ]
                    }, component.id, true, {
                        fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto flex items-end justify-between gap-2 pt-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            prebuilt.discountRate > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        tone: "alert",
                                        children: [
                                            prebuilt.discountRate,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-ink-muted line-through",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatKRW"])(prebuilt.price)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-base font-semibold text-ink",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatKRW"])(discounted)
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        size: "sm",
                        variant: "secondary",
                        onClick: onSelect,
                        children: "이 구성으로 시작"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/prebuilt-card.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/shop/prebuilt-grid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrebuiltGrid",
    ()=>PrebuiltGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$prebuilt$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/prebuilt-card.tsx [app-ssr] (ecmascript)");
;
;
function PrebuiltGrid({ prebuilts, onSelect }) {
    if (prebuilts.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-md border border-dashed border-line py-16 text-center text-sm text-ink-muted",
            children: "준비된 완제품 구성이 아직 없습니다."
        }, void 0, false, {
            fileName: "[project]/src/components/shop/prebuilt-grid.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 gap-3 lg:grid-cols-2",
        children: prebuilts.map((prebuilt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$prebuilt$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrebuiltCard"], {
                prebuilt: prebuilt,
                onSelect: ()=>onSelect(prebuilt)
            }, prebuilt.id, false, {
                fileName: "[project]/src/components/shop/prebuilt-grid.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/shop/prebuilt-grid.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/shop/product-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog-config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ProductCard({ product, isSelected, onSelect }) {
    const fields = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_ATTRIBUTE_FIELDS"][product.categoryCode];
    const attrs = product.attributes;
    const discounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyDiscount"])(product.price, product.discountRate);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-3 rounded-md border-l-2 border-y border-r border-line bg-paper-raised p-4", isSelected && "border-l-copper ring-1 ring-copper"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-ink-muted",
                        children: product.brand
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/product-card.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-medium leading-snug text-ink",
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/product-card.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/product-card.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                className: "grid grid-cols-2 gap-x-3 gap-y-1",
                children: fields.map((field)=>{
                    const raw = attrs[field.key];
                    if (raw === null || raw === undefined) return null;
                    const display = typeof raw === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prettifyValue"])(raw) : String(raw);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between gap-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                className: "text-ink-muted",
                                children: field.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/product-card.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                className: "font-mono text-ink",
                                children: [
                                    display,
                                    field.unit ? ` ${field.unit}` : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shop/product-card.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this)
                        ]
                    }, field.key, true, {
                        fileName: "[project]/src/components/shop/product-card.tsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/shop/product-card.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto flex items-end justify-between gap-2 pt-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            product.discountRate > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        tone: "alert",
                                        children: [
                                            product.discountRate,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shop/product-card.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-ink-muted line-through",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatKRW"])(product.price)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shop/product-card.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shop/product-card.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-base font-semibold text-ink",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatKRW"])(discounted)
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/product-card.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/product-card.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        size: "sm",
                        variant: isSelected ? "outline" : "primary",
                        onClick: onSelect,
                        children: isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shop/product-card.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this),
                                " 담김"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shop/product-card.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this) : "담기"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/product-card.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/product-card.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/product-card.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/shop/product-filters.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductFilters",
    ()=>ProductFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.mjs [app-ssr] (ecmascript) <export default as ArrowUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog-config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const SORT_LABELS = {
    popular: "인기순",
    "price-asc": "낮은 가격순",
    "price-desc": "높은 가격순"
};
function getFilterOptions(products, key) {
    const values = new Set();
    for (const product of products){
        const raw = product.attributes[key];
        if (raw !== undefined && raw !== null) values.add(String(raw));
    }
    return Array.from(values).sort();
}
function ProductFilters({ category, categoryProducts, activeFilters, onToggleFilter, sortBy, onChangeSortBy }) {
    const filterFields = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_ATTRIBUTE_FIELDS"][category].filter((f)=>f.filterable);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 border-b border-line pb-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-start justify-between gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-x-5 gap-y-2",
                    children: filterFields.map((field)=>{
                        const options = getFilterOptions(categoryProducts, field.key);
                        if (options.length <= 1) return null;
                        const selected = activeFilters[field.key] ?? new Set();
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-ink-muted",
                                    children: field.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shop/product-filters.tsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1",
                                    children: options.map((value)=>{
                                        const isActive = selected.has(value);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onToggleFilter(field.key, value),
                                            "aria-pressed": isActive,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded border px-2 py-0.5 text-xs transition-colors", isActive ? "border-copper bg-copper text-white" : "border-line text-ink-muted hover:border-ink-muted hover:text-ink"),
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prettifyValue"])(value),
                                                field.unit ? ` ${field.unit}` : ""
                                            ]
                                        }, value, true, {
                                            fileName: "[project]/src/components/shop/product-filters.tsx",
                                            lineNumber: 63,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shop/product-filters.tsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, field.key, true, {
                            fileName: "[project]/src/components/shop/product-filters.tsx",
                            lineNumber: 57,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/shop/product-filters.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "flex shrink-0 items-center gap-1.5 text-xs text-ink-muted",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shop/product-filters.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: sortBy,
                            onChange: (e)=>onChangeSortBy(e.target.value),
                            className: "rounded border border-line bg-paper-raised px-2 py-1 text-xs text-ink",
                            children: Object.keys(SORT_LABELS).map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: option,
                                    children: SORT_LABELS[option]
                                }, option, false, {
                                    fileName: "[project]/src/components/shop/product-filters.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/shop/product-filters.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shop/product-filters.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shop/product-filters.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/shop/product-filters.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/shop/product-grid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductGrid",
    ()=>ProductGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/product-card.tsx [app-ssr] (ecmascript)");
;
;
function ProductGrid({ products, selectedCategoryPartId, onSelect, onClearFilters, hasActiveFilters }) {
    if (products.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-3 rounded-md border border-dashed border-line py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-ink-muted",
                    children: "선택한 조건에 맞는 상품이 없습니다."
                }, void 0, false, {
                    fileName: "[project]/src/components/shop/product-grid.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onClearFilters,
                    className: "text-sm font-medium text-copper hover:text-copper-dark",
                    children: "필터 초기화"
                }, void 0, false, {
                    fileName: "[project]/src/components/shop/product-grid.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shop/product-grid.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3",
        children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductCard"], {
                product: product,
                isSelected: product.id === selectedCategoryPartId,
                onSelect: ()=>onSelect(product)
            }, product.id, false, {
                fileName: "[project]/src/components/shop/product-grid.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/shop/product-grid.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/shop/quote-panel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuotePanel",
    ()=>QuotePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/build-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const CATEGORY_ORDER = [
    "CPU",
    "MOTHERBOARD",
    "RAM",
    "GPU",
    "STORAGE",
    "PSU",
    "CASE",
    "COOLER"
];
function QuotePanel() {
    const selectedParts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBuildStore"])((s)=>s.selectedParts);
    const compatibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBuildStore"])((s)=>s.compatibility);
    const totalPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBuildStore"])((s)=>s.totalPrice);
    const totalDiscountedPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBuildStore"])((s)=>s.totalDiscountedPrice);
    const removePart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBuildStore"])((s)=>s.removePart);
    const clearAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBuildStore"])((s)=>s.clearAll);
    const [showPaymentNotice, setShowPaymentNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const orderedParts = CATEGORY_ORDER.map((code)=>selectedParts[code]).filter((part)=>Boolean(part));
    const hasErrors = compatibility.issues.some((i)=>i.severity === "error");
    const canCheckout = orderedParts.length > 0 && !hasErrors;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "sticky top-6 flex w-full flex-col gap-4 rounded-md border border-line bg-paper-raised p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-medium text-ink",
                        children: "내 견적"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    orderedParts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: clearAll,
                        className: "text-xs text-ink-muted hover:text-alert",
                        children: "전체 비우기"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/quote-panel.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            orderedParts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded border border-dashed border-line py-8 text-center text-xs text-ink-muted",
                children: "왼쪽에서 부품을 선택하면 여기에 담깁니다."
            }, void 0, false, {
                fileName: "[project]/src/components/shop/quote-panel.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex flex-col gap-2",
                children: orderedParts.map((part)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-start justify-between gap-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-ink",
                                        children: part.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-ink-muted",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatKRW"])(part.price)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>removePart(part.categoryCode),
                                "aria-label": `${part.name} 제거`,
                                className: "shrink-0 text-ink-muted hover:text-alert",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shop/quote-panel.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this)
                        ]
                    }, part.id, true, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/shop/quote-panel.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1 border-t border-line pt-3",
                children: [
                    hasErrors ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                        tone: "alert",
                        className: "w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            " 호환 불가 ",
                            compatibility.issues.filter((i)=>i.severity === "error").length,
                            "건"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this) : compatibility.issues.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                        tone: "alert",
                        className: "w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            " 확인 필요 ",
                            compatibility.issues.length,
                            "건"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this) : orderedParts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                        tone: "signal",
                        className: "w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            " 호환 정상"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this) : null,
                    compatibility.issues.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex flex-col gap-1 pt-1",
                        children: compatibility.issues.map((issue, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: issue.severity === "error" ? "text-xs text-alert" : "text-xs text-ink-muted",
                                children: issue.message
                            }, `${issue.ruleId}-${i}`, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/quote-panel.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1 border-t border-line pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-xs text-ink-muted",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "정가 합계"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatKRW"])(totalPrice)
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-ink",
                                children: "할인 적용가"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-lg font-semibold text-ink",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatKRW"])(totalDiscountedPrice)
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/quote-panel.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                disabled: !canCheckout,
                onClick: ()=>setShowPaymentNotice(true),
                className: "w-full",
                children: "결제하기"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/quote-panel.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            showPaymentNotice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-xs text-ink-muted",
                children: "결제 연동은 Step 5에서 제공됩니다."
            }, void 0, false, {
                fileName: "[project]/src/components/shop/quote-panel.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/quote-panel.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Badge({ tone = "neutral", children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium", tone === "neutral" && "border border-line bg-paper-raised text-ink-muted", tone === "signal" && "bg-signal-soft text-signal", tone === "alert" && "bg-alert-soft text-alert", tone === "copper" && "bg-copper text-white", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function Button({ className, variant = "primary", size = "md", ...props }, ref) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center gap-1.5 rounded-md font-medium transition-colors", "disabled:cursor-not-allowed disabled:opacity-40", variant === "primary" && "bg-copper text-white hover:bg-copper-dark", variant === "secondary" && "bg-circuit text-white hover:bg-circuit-light", variant === "outline" && "border border-line text-ink hover:bg-paper-raised", variant === "ghost" && "text-ink-muted hover:bg-paper-raised hover:text-ink", size === "sm" && "px-2.5 py-1 text-xs", size === "md" && "px-4 py-2 text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
});
}),
"[project]/src/lib/catalog-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORY_ATTRIBUTE_FIELDS",
    ()=>CATEGORY_ATTRIBUTE_FIELDS
]);
const CATEGORY_ATTRIBUTE_FIELDS = {
    CPU: [
        {
            key: "socket",
            label: "소켓",
            filterable: true
        },
        {
            key: "cores",
            label: "코어",
            unit: "코어"
        },
        {
            key: "boostClockGHz",
            label: "부스트 클럭",
            unit: "GHz"
        },
        {
            key: "tdpWatts",
            label: "TDP",
            unit: "W"
        }
    ],
    MOTHERBOARD: [
        {
            key: "socket",
            label: "소켓",
            filterable: true
        },
        {
            key: "formFactor",
            label: "폼팩터",
            filterable: true
        },
        {
            key: "memoryType",
            label: "메모리 규격"
        },
        {
            key: "m2Slots",
            label: "M.2 슬롯",
            unit: "개"
        }
    ],
    RAM: [
        {
            key: "memoryType",
            label: "규격"
        },
        {
            key: "capacityGB",
            label: "용량",
            unit: "GB",
            filterable: true
        },
        {
            key: "speedMHz",
            label: "속도",
            unit: "MHz",
            filterable: true
        }
    ],
    GPU: [
        {
            key: "vramGB",
            label: "VRAM",
            unit: "GB",
            filterable: true
        },
        {
            key: "lengthMm",
            label: "길이",
            unit: "mm"
        },
        {
            key: "powerDrawWatts",
            label: "소비전력",
            unit: "W"
        },
        {
            key: "recommendedPsuWattage",
            label: "권장 파워",
            unit: "W"
        }
    ],
    STORAGE: [
        {
            key: "storageType",
            label: "종류",
            filterable: true
        },
        {
            key: "capacityGB",
            label: "용량",
            unit: "GB",
            filterable: true
        },
        {
            key: "interface",
            label: "인터페이스"
        }
    ],
    PSU: [
        {
            key: "wattage",
            label: "용량",
            unit: "W",
            filterable: true
        },
        {
            key: "efficiencyRating",
            label: "인증",
            filterable: true
        },
        {
            key: "modular",
            label: "모듈러"
        }
    ],
    CASE: [
        {
            key: "psuFormFactor",
            label: "파워 규격",
            filterable: true
        },
        {
            key: "maxGpuLengthMm",
            label: "최대 GPU 길이",
            unit: "mm"
        },
        {
            key: "maxCoolerHeightMm",
            label: "최대 쿨러 높이",
            unit: "mm"
        }
    ],
    COOLER: [
        {
            key: "coolerType",
            label: "종류",
            filterable: true
        },
        {
            key: "heightMm",
            label: "높이",
            unit: "mm"
        },
        {
            key: "radiatorSizeMm",
            label: "라디에이터",
            unit: "mm"
        },
        {
            key: "tdpRatingWatts",
            label: "냉각 성능",
            unit: "W"
        }
    ]
};
}),
"[project]/src/lib/compatibility/checker.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 호환성 검증 엔진.
 * ────────────────────────────────────────────────────────────────
 * 선택된 부품 조합에서 적용 가능한 모든 규칙을 실행하고,
 * 통합 CompatibilityReport를 반환합니다.
 */ __turbopack_context__.s([
    "checkAllCompatibility",
    ()=>checkAllCompatibility,
    "estimatePower",
    ()=>estimatePower
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/compatibility/rules.ts [app-ssr] (ecmascript)");
;
/** 기타 부품(RAM, SSD, 팬, 보드 등)의 기본 소비전력 여유치 (W) */ const BASE_SYSTEM_POWER_WATTS = 80;
function estimatePower(parts) {
    const cpuTdp = parts.CPU ? parts.CPU.tdpWatts : 0;
    const gpuPower = parts.GPU ? parts.GPU.powerDrawWatts : 0;
    return {
        cpuTdp,
        gpuPower,
        basePower: BASE_SYSTEM_POWER_WATTS,
        total: cpuTdp + gpuPower + BASE_SYSTEM_POWER_WATTS
    };
}
function checkAllCompatibility(parts) {
    const issues = [];
    const cpu = parts.CPU;
    const mb = parts.MOTHERBOARD;
    const ram = parts.RAM;
    const gpu = parts.GPU;
    const storage = parts.STORAGE;
    const psu = parts.PSU;
    const pcCase = parts.CASE;
    const cooler = parts.COOLER;
    // ─── CPU ↔ 메인보드 ──────────────────────────────────────
    if (cpu && mb) {
        const issue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkCpuMotherboardSocket"])(cpu, mb);
        if (issue) issues.push(issue);
    }
    // ─── 메인보드 ↔ RAM ──────────────────────────────────────
    if (mb && ram) {
        const typeIssue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkMotherboardRamType"])(mb, ram);
        if (typeIssue) issues.push(typeIssue);
        const slotsIssue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkMotherboardRamSlots"])(mb, ram);
        if (slotsIssue) issues.push(slotsIssue);
    }
    // ─── 메인보드 ↔ 케이스 ───────────────────────────────────
    if (mb && pcCase) {
        const issue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkMotherboardCaseFormFactor"])(mb, pcCase);
        if (issue) issues.push(issue);
    }
    // ─── GPU ↔ 케이스 ────────────────────────────────────────
    if (gpu && pcCase) {
        const issue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkGpuCaseLength"])(gpu, pcCase);
        if (issue) issues.push(issue);
    }
    // ─── 쿨러 ↔ CPU ─────────────────────────────────────────
    if (cooler && cpu) {
        const socketIssue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkCoolerCpuSocket"])(cooler, cpu);
        if (socketIssue) issues.push(socketIssue);
        const tdpIssue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkCoolerCpuTdp"])(cooler, cpu);
        if (tdpIssue) issues.push(tdpIssue);
    }
    // ─── 쿨러 ↔ 케이스 ──────────────────────────────────────
    if (cooler && pcCase) {
        const issue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkCoolerCaseClearance"])(cooler, pcCase);
        if (issue) issues.push(issue);
    }
    // ─── PSU ↔ 케이스 ───────────────────────────────────────
    if (psu && pcCase) {
        const issue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkPsuCaseFormFactor"])(psu, pcCase);
        if (issue) issues.push(issue);
    }
    // ─── PSU 전력 용량 ──────────────────────────────────────
    const powerEstimate = estimatePower(parts);
    if (psu) {
        const powerIssues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkPsuPowerCapacity"])(psu, gpu ?? null, powerEstimate.total);
        issues.push(...powerIssues);
    }
    // ─── 저장장치 ↔ 메인보드 M.2 슬롯 ──────────────────────
    if (storage && mb) {
        // 현재 스토어는 카테고리당 부품 1개이므로 기존 M.2 수 = 0
        const issue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkStorageMbM2Slots"])(storage, mb, 0);
        if (issue) issues.push(issue);
    }
    // ─── 결과 집계 ──────────────────────────────────────────
    const isCompatible = issues.every((i)=>i.severity !== "error");
    return {
        isCompatible,
        issues,
        powerEstimate
    };
}
}),
"[project]/src/lib/compatibility/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$checker$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/compatibility/checker.ts [app-ssr] (ecmascript)");
;
;
}),
"[project]/src/lib/compatibility/rules.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 개별 부품 쌍 간의 호환성 검증 규칙 (순수 함수).
 * ────────────────────────────────────────────────────────────────
 * 모든 함수는 호환이면 null, 비호환이면 CompatibilityIssue를 반환합니다.
 * checker.ts가 선택된 부품 조합에서 적용 가능한 규칙을 골라 실행합니다.
 */ __turbopack_context__.s([
    "checkCoolerCaseClearance",
    ()=>checkCoolerCaseClearance,
    "checkCoolerCpuSocket",
    ()=>checkCoolerCpuSocket,
    "checkCoolerCpuTdp",
    ()=>checkCoolerCpuTdp,
    "checkCpuMotherboardSocket",
    ()=>checkCpuMotherboardSocket,
    "checkGpuCaseLength",
    ()=>checkGpuCaseLength,
    "checkMotherboardCaseFormFactor",
    ()=>checkMotherboardCaseFormFactor,
    "checkMotherboardRamSlots",
    ()=>checkMotherboardRamSlots,
    "checkMotherboardRamType",
    ()=>checkMotherboardRamType,
    "checkPsuCaseFormFactor",
    ()=>checkPsuCaseFormFactor,
    "checkPsuPowerCapacity",
    ()=>checkPsuPowerCapacity,
    "checkStorageMbM2Slots",
    ()=>checkStorageMbM2Slots
]);
function checkCpuMotherboardSocket(cpu, mb) {
    if (cpu.socket === mb.socket) return null;
    return {
        ruleId: "cpu-mb-socket",
        severity: "error",
        message: `CPU 소켓(${cpu.socket})과 메인보드 소켓(${mb.socket})이 일치하지 않습니다.`,
        categories: [
            "CPU",
            "MOTHERBOARD"
        ]
    };
}
function checkMotherboardRamType(mb, ram) {
    if (mb.memoryType === ram.memoryType) return null;
    return {
        ruleId: "mb-ram-type",
        severity: "error",
        message: `메인보드 메모리 규격(${mb.memoryType})과 RAM 규격(${ram.memoryType})이 일치하지 않습니다.`,
        categories: [
            "MOTHERBOARD",
            "RAM"
        ]
    };
}
function checkMotherboardRamSlots(mb, ram) {
    if (ram.modules <= mb.memorySlots) return null;
    return {
        ruleId: "mb-ram-slots",
        severity: "error",
        message: `RAM 모듈 수(${ram.modules}개)가 메인보드 슬롯 수(${mb.memorySlots}개)를 초과합니다.`,
        categories: [
            "MOTHERBOARD",
            "RAM"
        ]
    };
}
function checkMotherboardCaseFormFactor(mb, pcCase) {
    if (pcCase.supportedFormFactors.includes(mb.formFactor)) return null;
    return {
        ruleId: "mb-case-formfactor",
        severity: "error",
        message: `메인보드 폼팩터(${mb.formFactor})를 이 케이스가 지원하지 않습니다. 지원: ${pcCase.supportedFormFactors.join(", ")}`,
        categories: [
            "MOTHERBOARD",
            "CASE"
        ]
    };
}
function checkGpuCaseLength(gpu, pcCase) {
    if (gpu.lengthMm <= pcCase.maxGpuLengthMm) return null;
    return {
        ruleId: "gpu-case-length",
        severity: "error",
        message: `GPU 길이(${gpu.lengthMm}mm)가 케이스 최대 수용 길이(${pcCase.maxGpuLengthMm}mm)를 초과합니다.`,
        categories: [
            "GPU",
            "CASE"
        ]
    };
}
function checkCoolerCpuSocket(cooler, cpu) {
    if (cooler.supportedSockets.includes(cpu.socket)) return null;
    return {
        ruleId: "cooler-cpu-socket",
        severity: "error",
        message: `이 쿨러는 CPU 소켓(${cpu.socket})을 지원하지 않습니다. 지원: ${cooler.supportedSockets.join(", ")}`,
        categories: [
            "COOLER",
            "CPU"
        ]
    };
}
function checkCoolerCpuTdp(cooler, cpu) {
    if (cooler.tdpRatingWatts >= cpu.tdpWatts) return null;
    return {
        ruleId: "cooler-cpu-tdp",
        severity: "warning",
        message: `쿨러의 냉각 성능(${cooler.tdpRatingWatts}W)이 CPU TDP(${cpu.tdpWatts}W)보다 낮아 발열 관리가 어려울 수 있습니다.`,
        categories: [
            "COOLER",
            "CPU"
        ]
    };
}
function checkCoolerCaseClearance(cooler, pcCase) {
    if (cooler.coolerType === "AIR") {
        // 공랭: 쿨러 높이 ≤ 케이스 최대 쿨러 높이
        if (cooler.heightMm != null && cooler.heightMm > pcCase.maxCoolerHeightMm) {
            return {
                ruleId: "cooler-case-clearance",
                severity: "error",
                message: `공랭 쿨러 높이(${cooler.heightMm}mm)가 케이스 최대 허용 높이(${pcCase.maxCoolerHeightMm}mm)를 초과합니다.`,
                categories: [
                    "COOLER",
                    "CASE"
                ]
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
                    categories: [
                        "COOLER",
                        "CASE"
                    ]
                };
            }
            if (cooler.radiatorSizeMm > maxRad) {
                return {
                    ruleId: "cooler-case-clearance",
                    severity: "error",
                    message: `라디에이터(${cooler.radiatorSizeMm}mm)가 케이스 최대 지원 크기(${maxRad}mm)를 초과합니다.`,
                    categories: [
                        "COOLER",
                        "CASE"
                    ]
                };
            }
        }
    }
    return null;
}
function checkPsuCaseFormFactor(psu, pcCase) {
    if (psu.formFactor === pcCase.psuFormFactor) return null;
    return {
        ruleId: "psu-case-formfactor",
        severity: "error",
        message: `파워 폼팩터(${psu.formFactor})가 케이스의 PSU 규격(${pcCase.psuFormFactor})과 일치하지 않습니다.`,
        categories: [
            "PSU",
            "CASE"
        ]
    };
}
function checkPsuPowerCapacity(psu, gpu, estimatedTotalPower) {
    const issues = [];
    // GPU 권장 PSU 와트수 체크
    if (gpu && psu.wattage < gpu.recommendedPsuWattage) {
        issues.push({
            ruleId: "psu-power-capacity",
            severity: "warning",
            message: `파워 용량(${psu.wattage}W)이 GPU 권장 파워(${gpu.recommendedPsuWattage}W)보다 낮습니다.`,
            categories: [
                "PSU",
                "GPU"
            ]
        });
    }
    // 예상 총 소비전력 체크
    if (psu.wattage < estimatedTotalPower) {
        issues.push({
            ruleId: "psu-power-capacity",
            severity: "warning",
            message: `파워 용량(${psu.wattage}W)이 예상 총 소비전력(${estimatedTotalPower}W)보다 낮습니다.`,
            categories: [
                "PSU",
                "CPU"
            ]
        });
    }
    return issues;
}
function checkStorageMbM2Slots(storage, mb, /** 이미 선택된 M.2 저장장치의 수 (현재 storage 제외) */ existingM2Count) {
    if (storage.formFactor !== "M2_2280") return null;
    if (existingM2Count + 1 <= mb.m2Slots) return null;
    return {
        ruleId: "storage-mb-m2slots",
        severity: "error",
        message: `M.2 슬롯(${mb.m2Slots}개)이 부족합니다. 선택된 M.2 SSD: ${existingM2Count + 1}개`,
        categories: [
            "STORAGE",
            "MOTHERBOARD"
        ]
    };
}
}),
"[project]/src/lib/format.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** 원화 표기 (예: 1234000 → "1,234,000원") */ __turbopack_context__.s([
    "applyDiscount",
    ()=>applyDiscount,
    "formatKRW",
    ()=>formatKRW,
    "prettifyValue",
    ()=>prettifyValue
]);
function formatKRW(amount) {
    return `${new Intl.NumberFormat("ko-KR").format(amount)}원`;
}
function applyDiscount(price, discountRate) {
    return Math.round(price * (100 - discountRate) / 100);
}
function prettifyValue(value) {
    return value.replace(/_/g, " ");
}
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/store/build-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildStore",
    ()=>buildStore,
    "useBuildStore",
    ()=>useBuildStore
]);
/**
 * 견적(빌드) 상태 관리 Zustand 스토어.
 * ────────────────────────────────────────────────────────────────
 * persist 미들웨어로 localStorage에 자동 저장/복원하여
 * 새로고침해도 견적이 유지됩니다.
 *
 * 부품 선택/제거 시 호환성 검사가 자동으로 재실행되므로
 * 소비자 코드에서 수동 호출할 필요가 없습니다.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/compatibility/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$checker$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/compatibility/checker.ts [app-ssr] (ecmascript)");
;
;
;
;
// ─── 헬퍼 함수 ─────────────────────────────────────────────────
/** 빈 호환성 보고서 (부품 미선택 상태) */ function emptyReport() {
    return {
        isCompatible: true,
        issues: [],
        powerEstimate: {
            cpuTdp: 0,
            gpuPower: 0,
            basePower: 80,
            total: 80
        }
    };
}
/** selectedParts에서 attributes만 추출해 SelectedPartsMap 형태로 변환 */ function toAttributesMap(parts) {
    const map = {};
    for (const [key, part] of Object.entries(parts)){
        if (part) {
            map[key] = part.attributes;
        }
    }
    return map;
}
/** 선택된 부품들의 가격 합계 계산 */ function calculatePrices(parts) {
    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    for (const part of Object.values(parts)){
        if (part) {
            totalPrice += part.price;
            totalDiscountedPrice += Math.round(part.price * (100 - part.discountRate) / 100);
        }
    }
    return {
        totalPrice,
        totalDiscountedPrice
    };
}
/** 상태를 재계산합니다 (호환성 + 가격) */ function recalculate(selectedParts) {
    const partCount = Object.keys(selectedParts).length;
    const compatibility = partCount === 0 ? emptyReport() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$checker$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkAllCompatibility"])(toAttributesMap(selectedParts));
    const { totalPrice, totalDiscountedPrice } = calculatePrices(selectedParts);
    return {
        compatibility,
        totalPrice,
        totalDiscountedPrice
    };
}
// ─── 초기 상태 ─────────────────────────────────────────────────
const initialState = {
    selectedParts: {},
    compatibility: emptyReport(),
    totalPrice: 0,
    totalDiscountedPrice: 0
};
const buildStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        ...initialState,
        selectPart: (part)=>set((state)=>{
                const selectedParts = {
                    ...state.selectedParts,
                    [part.categoryCode]: part
                };
                return {
                    selectedParts,
                    ...recalculate(selectedParts)
                };
            }),
        removePart: (category)=>set((state)=>{
                const selectedParts = {
                    ...state.selectedParts
                };
                delete selectedParts[category];
                return {
                    selectedParts,
                    ...recalculate(selectedParts)
                };
            }),
        clearAll: ()=>set(initialState),
        loadPrebuilt: (parts)=>set(()=>{
                const selectedParts = {};
                for (const part of parts){
                    selectedParts[part.categoryCode] = part;
                }
                return {
                    selectedParts,
                    ...recalculate(selectedParts)
                };
            })
    }), {
    name: "compick-build",
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>{
        // SSR 환경(서버)에서는 localStorage가 없으므로 빈 구현을 반환
        if ("TURBOPACK compile-time truthy", 1) {
            return {
                getItem: ()=>null,
                setItem: ()=>{},
                removeItem: ()=>{}
            };
        }
        //TURBOPACK unreachable
        ;
    }),
    // persist에서 복원할 때 호환성을 재검증
    // (저장된 이후 규칙이 바뀌었을 수 있으므로)
    onRehydrateStorage: ()=>(state)=>{
            if (state && Object.keys(state.selectedParts).length > 0) {
                const recalculated = recalculate(state.selectedParts);
                state.compatibility = recalculated.compatibility;
                state.totalPrice = recalculated.totalPrice;
                state.totalDiscountedPrice = recalculated.totalDiscountedPrice;
            }
        }
}));
function useBuildStore(selector) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(buildStore, selector);
}
}),
];

//# sourceMappingURL=src_19afkt2._.js.map