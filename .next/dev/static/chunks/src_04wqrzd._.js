(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/shop/build-workspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BuildWorkspace",
    ()=>BuildWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/build-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$category$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/category-nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$hero$2d$banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/hero-banner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$status$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/status-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$filters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/product-filters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/product-list.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$detail$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/product-detail-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$prebuilt$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/prebuilt-list.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$quote$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/quote-panel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
            sorted.sort((a, b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyDiscount"])(a.price, a.discountRate) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyDiscount"])(b.price, b.discountRate));
            break;
        case "price-desc":
            sorted.sort((a, b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyDiscount"])(b.price, b.discountRate) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyDiscount"])(a.price, a.discountRate));
            break;
        case "discount":
            sorted.sort((a, b)=>b.discountRate - a.discountRate);
            break;
    }
    return sorted;
}
function BuildWorkspace({ categories, products, prebuilts }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("parts");
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(categories[0]?.code ?? "CPU");
    const [activeFilters, setActiveFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("popular");
    const [detailProduct, setDetailProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectPart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"])({
        "BuildWorkspace.useBuildStore[selectPart]": (s)=>s.selectPart
    }["BuildWorkspace.useBuildStore[selectPart]"]);
    const selectedParts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"])({
        "BuildWorkspace.useBuildStore[selectedParts]": (s)=>s.selectedParts
    }["BuildWorkspace.useBuildStore[selectedParts]"]);
    const loadPrebuilt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"])({
        "BuildWorkspace.useBuildStore[loadPrebuilt]": (s)=>s.loadPrebuilt
    }["BuildWorkspace.useBuildStore[loadPrebuilt]"]);
    const categoryProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BuildWorkspace.useMemo[categoryProducts]": ()=>products.filter({
                "BuildWorkspace.useMemo[categoryProducts]": (p)=>p.categoryCode === activeCategory
            }["BuildWorkspace.useMemo[categoryProducts]"])
    }["BuildWorkspace.useMemo[categoryProducts]"], [
        products,
        activeCategory
    ]);
    const visibleProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BuildWorkspace.useMemo[visibleProducts]": ()=>sortProducts(categoryProducts.filter({
                "BuildWorkspace.useMemo[visibleProducts]": (p)=>matchesFilters(p, activeFilters)
            }["BuildWorkspace.useMemo[visibleProducts]"]), sortBy)
    }["BuildWorkspace.useMemo[visibleProducts]"], [
        categoryProducts,
        activeFilters,
        sortBy
    ]);
    const activeCategoryName = categories.find((c)=>c.code === activeCategory)?.name ?? activeCategory;
    const detailCategoryName = detailProduct ? categories.find((c)=>c.code === detailProduct.categoryCode)?.name ?? detailProduct.categoryCode : "";
    function handleSelectCategory(code) {
        setActiveTab("parts");
        setActiveCategory(code);
        setActiveFilters({});
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-6 py-6 lg:grid-cols-[220px_1fr_340px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:order-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$category$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryNav"], {
                    categories: categories,
                    activeTab: activeTab,
                    activeCategory: activeCategory,
                    onSelectCategory: handleSelectCategory,
                    onSelectPrebuilt: ()=>setActiveTab("prebuilt")
                }, void 0, false, {
                    fileName: "[project]/src/components/shop/build-workspace.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shop/build-workspace.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex min-w-0 flex-col gap-4 lg:order-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$hero$2d$banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroBanner"], {}, void 0, false, {
                        fileName: "[project]/src/components/shop/build-workspace.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$status$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusBar"], {}, void 0, false, {
                        fileName: "[project]/src/components/shop/build-workspace.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 border-b border-line",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab("parts"),
                                className: `border-b-2 px-1 pb-2 text-sm font-bold transition-colors ${activeTab === "parts" ? "border-primary text-primary" : "border-transparent text-ink-muted hover:text-ink"}`,
                                children: "부품으로 견적하기"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/build-workspace.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab("prebuilt"),
                                className: `border-b-2 px-1 pb-2 text-sm font-bold transition-colors ${activeTab === "prebuilt" ? "border-primary text-primary" : "border-transparent text-ink-muted hover:text-ink"}`,
                                children: "추천 완제품 PC"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/build-workspace.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/build-workspace.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    activeTab === "parts" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-bold text-ink",
                                children: activeCategoryName
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/build-workspace.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$filters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductFilters"], {
                                category: activeCategory,
                                productCount: visibleProducts.length,
                                categoryProducts: categoryProducts,
                                activeFilters: activeFilters,
                                onToggleFilter: handleToggleFilter,
                                onClearFilters: ()=>setActiveFilters({}),
                                sortBy: sortBy,
                                onChangeSortBy: setSortBy
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/build-workspace.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductList"], {
                                products: visibleProducts,
                                selectedCategoryPartId: selectedParts[activeCategory]?.id,
                                onSelect: (product)=>selectPart(product),
                                onOpenDetail: (product)=>setDetailProduct(product),
                                onClearFilters: ()=>setActiveFilters({}),
                                hasActiveFilters: hasActiveFilters
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/build-workspace.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/build-workspace.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$prebuilt$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrebuiltList"], {
                        prebuilts: prebuilts,
                        onSelect: (prebuilt)=>loadPrebuilt(prebuilt.components)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/build-workspace.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/build-workspace.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:order-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$quote$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuotePanel"], {}, void 0, false, {
                    fileName: "[project]/src/components/shop/build-workspace.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shop/build-workspace.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            detailProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$detail$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductDetailModal"], {
                product: detailProduct,
                categoryName: detailCategoryName,
                isSelected: selectedParts[detailProduct.categoryCode]?.id === detailProduct.id,
                onClose: ()=>setDetailProduct(null),
                onSelect: ()=>selectPart(detailProduct)
            }, void 0, false, {
                fileName: "[project]/src/components/shop/build-workspace.tsx",
                lineNumber: 179,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/build-workspace.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(BuildWorkspace, "vL9nVYrkJMYIl5bwq5GqkpB1pmw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"]
    ];
});
_c = BuildWorkspace;
var _c;
__turbopack_context__.k.register(_c, "BuildWorkspace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shop/category-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryNav",
    ()=>CategoryNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.mjs [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function CategoryNav({ categories, activeTab, activeCategory, onSelectCategory, onSelectPrebuilt }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-6 flex flex-col gap-0.5 rounded-lg border border-line bg-paper-raised p-2",
        "aria-label": "부품 카테고리",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "px-2 pb-1 pt-1 text-xs font-bold text-ink-muted",
                children: "부품 카테고리"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/category-nav.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            categories.map((category)=>{
                const Icon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_ICONS"][category.code];
                const isActive = activeTab === "parts" && activeCategory === category.code;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onSelectCategory(category.code),
                    "aria-current": isActive ? "true" : undefined,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between gap-2 rounded-md px-2.5 py-2 text-left text-sm transition-colors", isActive ? "bg-primary-soft font-bold text-primary-dark" : "text-ink-muted hover:bg-paper hover:text-ink"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "h-4 w-4 shrink-0",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shop/category-nav.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                category.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shop/category-nav.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-normal text-ink-muted",
                            children: category.productCount
                        }, void 0, false, {
                            fileName: "[project]/src/components/shop/category-nav.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    ]
                }, category.code, true, {
                    fileName: "[project]/src/components/shop/category-nav.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 border-t border-line pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onSelectPrebuilt,
                    "aria-current": activeTab === "prebuilt" ? "true" : undefined,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm transition-colors", activeTab === "prebuilt" ? "bg-primary-soft font-bold text-primary-dark" : "text-ink-muted hover:bg-paper hover:text-ink"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                            className: "h-4 w-4 shrink-0",
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/src/components/shop/category-nav.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        "완제품 PC"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shop/category-nav.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shop/category-nav.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/category-nav.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = CategoryNav;
var _c;
__turbopack_context__.k.register(_c, "CategoryNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shop/hero-banner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroBanner",
    ()=>HeroBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
;
;
function HeroBanner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl bg-gradient-to-br from-primary to-primary-dark px-6 py-8 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/hero-banner.tsx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    "실시간 호환성 검사"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/hero-banner.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mt-3 text-2xl font-extrabold",
                children: "나만의 PC를 직접 구성하세요"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/hero-banner.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 text-sm text-white/80",
                children: "소켓, 폼팩터, 전력까지 — 부품을 담는 즉시 호환 여부를 확인해 드립니다."
            }, void 0, false, {
                fileName: "[project]/src/components/shop/hero-banner.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/hero-banner.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = HeroBanner;
var _c;
__turbopack_context__.k.register(_c, "HeroBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shop/prebuilt-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrebuiltCard",
    ()=>PrebuiltCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function PrebuiltCard({ prebuilt, onSelect }) {
    const discounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyDiscount"])(prebuilt.price, prebuilt.discountRate);
    // 완제품은 케이스 안에 담긴 완성형 PC이므로, 실사진이 없을 때는 케이스
    // placeholder 일러스트를 재사용합니다.
    const src = prebuilt.images[0] ?? "/placeholders/case.svg";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4 border-b border-line px-3 py-4 transition-colors hover:bg-paper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-20 w-20 shrink-0 overflow-hidden rounded-md border border-line",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: src,
                    alt: prebuilt.name,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full w-full object-cover")
                }, void 0, false, {
                    fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-bold text-ink",
                        children: prebuilt.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    prebuilt.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-xs text-ink-muted",
                        children: prebuilt.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                        lineNumber: 29,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 truncate text-xs text-ink-muted",
                        children: prebuilt.components.map((c)=>c.name).join(" · ")
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex shrink-0 flex-col items-end gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            prebuilt.discountRate > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        tone: "danger",
                                        children: [
                                            prebuilt.discountRate,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-ink-muted line-through",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatKRW"])(prebuilt.price)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-base font-bold text-ink",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatKRW"])(discounted)
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        size: "sm",
                        onClick: onSelect,
                        children: "이 구성으로 시작"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/prebuilt-card.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/prebuilt-card.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = PrebuiltCard;
var _c;
__turbopack_context__.k.register(_c, "PrebuiltCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shop/prebuilt-list.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrebuiltList",
    ()=>PrebuiltList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$prebuilt$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/prebuilt-card.tsx [app-client] (ecmascript)");
;
;
function PrebuiltList({ prebuilts, onSelect }) {
    if (prebuilts.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border border-dashed border-line bg-paper-raised py-16 text-center text-sm text-ink-muted",
            children: "준비된 완제품 구성이 아직 없습니다."
        }, void 0, false, {
            fileName: "[project]/src/components/shop/prebuilt-list.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border border-line bg-paper-raised",
        children: prebuilts.map((prebuilt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$prebuilt$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrebuiltCard"], {
                prebuilt: prebuilt,
                onSelect: ()=>onSelect(prebuilt)
            }, prebuilt.id, false, {
                fileName: "[project]/src/components/shop/prebuilt-list.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/shop/prebuilt-list.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = PrebuiltList;
var _c;
__turbopack_context__.k.register(_c, "PrebuiltList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shop/product-detail-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductDetailModal",
    ()=>ProductDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.mjs [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/product-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const TABS = [
    {
        key: "info",
        label: "상품정보"
    },
    {
        key: "specs",
        label: "상세 스펙"
    },
    {
        key: "reviews",
        label: "상품평"
    },
    {
        key: "delivery",
        label: "배송/교환/반품"
    }
];
function formatAttributeValue(value) {
    if (value === null || value === undefined) return "-";
    if (typeof value === "boolean") return value ? "있음" : "없음";
    if (Array.isArray(value)) return value.map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prettifyValue"])(String(item))).join(", ");
    if (typeof value === "string") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prettifyValue"])(value);
    return String(value);
}
function ProductDetailModal({ product, categoryName, isSelected, onClose, onSelect }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("info");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailModal.useEffect": ()=>{
            function handleKeyDown(event) {
                if (event.key === "Escape") onClose();
            }
            document.addEventListener("keydown", handleKeyDown);
            return ({
                "ProductDetailModal.useEffect": ()=>document.removeEventListener("keydown", handleKeyDown)
            })["ProductDetailModal.useEffect"];
        }
    }["ProductDetailModal.useEffect"], [
        onClose
    ]);
    const attrs = product.attributes;
    const discounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyDiscount"])(product.price, product.discountRate);
    const highlightFields = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_ATTRIBUTE_FIELDS"][product.categoryCode];
    const marketing = product.marketingContent;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClose,
        className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": product.name,
            onClick: (e)=>e.stopPropagation(),
            className: "relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-paper-raised shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onClose,
                    "aria-label": "닫기",
                    className: "absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-paper-raised text-ink-muted shadow hover:text-ink",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-6 overflow-y-auto p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-6 sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-square w-full shrink-0 overflow-hidden rounded-lg border border-line sm:w-72",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductImage"], {
                                        imageUrl: product.image,
                                        categoryCode: product.categoryCode,
                                        alt: product.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-1 flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    tone: "primary",
                                                    children: categoryName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "mt-2 text-lg font-bold text-ink",
                                                    children: product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-ink-muted",
                                                    children: product.brand
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1 rounded-lg border border-line p-3 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-ink-muted",
                                                            children: "제조사"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-ink",
                                                            children: product.brand
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-ink-muted",
                                                            children: "제품분류"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-ink",
                                                            children: categoryName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this),
                                                highlightFields.slice(0, 2).map((field)=>{
                                                    const raw = attrs[field.key];
                                                    if (raw === null || raw === undefined) return null;
                                                    const display = typeof raw === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prettifyValue"])(raw) : String(raw);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-ink-muted",
                                                                children: field.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                                lineNumber: 106,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-medium text-ink",
                                                                children: [
                                                                    display,
                                                                    field.unit ? ` ${field.unit}` : ""
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, field.key, true, {
                                                        fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 21
                                                    }, this);
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-auto",
                                            children: [
                                                product.discountRate > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            tone: "danger",
                                                            children: [
                                                                product.discountRate,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-ink-muted line-through",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatKRW"])(product.price)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono text-2xl font-extrabold text-ink",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatKRW"])(discounted)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "button",
                                                    variant: "outline",
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 19
                                                        }, this),
                                                        " 장바구니"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "button",
                                                    variant: isSelected ? "outline" : "primary",
                                                    onClick: onSelect,
                                                    className: "flex-1",
                                                    children: isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 23
                                                            }, this),
                                                            " 담김"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 23
                                                            }, this),
                                                            " 견적에 담기"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1 border-b border-line",
                            children: TABS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveTab(tab.key),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b-2 px-3 pb-2.5 text-sm font-bold transition-colors", activeTab === tab.key ? "border-primary text-primary" : "border-transparent text-ink-muted hover:text-ink"),
                                    children: tab.label
                                }, tab.key, false, {
                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        activeTab === "info" && (marketing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl bg-gradient-to-br from-dark to-dark-raised p-6 text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-bold text-white/60",
                                            children: marketing.eyebrow
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-1.5 text-xl font-extrabold",
                                            children: marketing.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                            lineNumber: 173,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-white/80",
                                            children: marketing.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-3 sm:grid-cols-3",
                                    children: marketing.features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-line p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl",
                                                    children: feature.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-sm font-bold text-ink",
                                                    children: feature.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-xs text-ink-muted",
                                                    children: feature.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, feature.title, true, {
                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                            lineNumber: 179,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                    lineNumber: 177,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl bg-primary-soft p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-base font-bold text-primary-dark",
                                            children: marketing.promoTitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                            lineNumber: 188,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1.5 text-sm text-ink-muted",
                                            children: marketing.promoText
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                            lineNumber: 189,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                    lineNumber: 187,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                            lineNumber: 170,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "py-8 text-center text-sm text-ink-muted",
                            children: "등록된 상품 소개가 없습니다."
                        }, void 0, false, {
                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                            lineNumber: 193,
                            columnNumber: 15
                        }, this)),
                        activeTab === "specs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                            className: "grid grid-cols-1 gap-x-6 gap-y-0 sm:grid-cols-2",
                            children: Object.entries(attrs).map(([key, value])=>{
                                const config = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATTRIBUTE_LABELS"][key];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between border-b border-line py-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "text-ink-muted",
                                            children: config?.label ?? key
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                            lineNumber: 202,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "font-mono font-medium text-ink",
                                            children: [
                                                formatAttributeValue(value),
                                                config?.unit ? ` ${config.unit}` : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                            lineNumber: 203,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, key, true, {
                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                    lineNumber: 201,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this),
                        activeTab === "reviews" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "py-12 text-center text-sm text-ink-muted",
                            children: "아직 등록된 상품평이 없습니다."
                        }, void 0, false, {
                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this),
                        activeTab === "delivery" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 text-sm text-ink-muted",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                            className: "mt-0.5 h-4 w-4 shrink-0 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                            lineNumber: 220,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "주문 확인 후 1~2일 이내 출고되며, 평균 2~3일 내 수령하실 수 있습니다."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "단순 변심에 의한 교환·반품은 상품 수령 후 7일 이내 가능하며, 왕복 배송비는 구매자 부담입니다."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "상품 하자·오배송의 경우 배송비 없이 교환 또는 환불해 드립니다."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shop/product-detail-modal.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shop/product-detail-modal.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/shop/product-detail-modal.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(ProductDetailModal, "+bytDWnCjFlxbjDog9od4BcJbRE=");
_c = ProductDetailModal;
var _c;
__turbopack_context__.k.register(_c, "ProductDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shop/product-filters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductFilters",
    ()=>ProductFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const SORT_OPTIONS = [
    {
        value: "popular",
        label: "인기순"
    },
    {
        value: "price-asc",
        label: "낮은가격순"
    },
    {
        value: "price-desc",
        label: "높은가격순"
    },
    {
        value: "discount",
        label: "할인순"
    }
];
function getFilterOptions(products, key) {
    const values = new Set();
    for (const product of products){
        const raw = product.attributes[key];
        if (raw !== undefined && raw !== null) values.add(String(raw));
    }
    return Array.from(values).sort();
}
function ProductFilters({ category, productCount, categoryProducts, activeFilters, onToggleFilter, onClearFilters, sortBy, onChangeSortBy }) {
    const filterFields = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_ATTRIBUTE_FIELDS"][category].filter((f)=>f.filterable);
    const activeChips = Object.entries(activeFilters).flatMap(([key, values])=>Array.from(values).map((value)=>({
                key,
                value
            })));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-x-5 gap-y-2 rounded-lg border border-line bg-paper-raised p-3",
                children: filterFields.map((field)=>{
                    const options = getFilterOptions(categoryProducts, field.key);
                    if (options.length <= 1) return null;
                    const selected = activeFilters[field.key] ?? new Set();
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium text-ink-muted",
                                children: field.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/product-filters.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1",
                                children: options.map((value)=>{
                                    const isActive = selected.has(value);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onToggleFilter(field.key, value),
                                        "aria-pressed": isActive,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full border px-2.5 py-1 text-xs font-medium transition-colors", isActive ? "border-primary bg-primary text-white" : "border-line text-ink-muted hover:border-primary hover:text-primary"),
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prettifyValue"])(value),
                                            field.unit ? ` ${field.unit}` : ""
                                        ]
                                    }, value, true, {
                                        fileName: "[project]/src/components/shop/product-filters.tsx",
                                        lineNumber: 70,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/product-filters.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this)
                        ]
                    }, field.key, true, {
                        fileName: "[project]/src/components/shop/product-filters.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/shop/product-filters.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            activeChips.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-1.5",
                children: [
                    activeChips.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onToggleFilter(chip.key, chip.value),
                            className: "flex items-center gap-1 rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary-dark",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prettifyValue"])(chip.value),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shop/product-filters.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `${chip.key}-${chip.value}`, true, {
                            fileName: "[project]/src/components/shop/product-filters.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClearFilters,
                        className: "text-xs font-medium text-ink-muted underline hover:text-ink",
                        children: "전체 해제"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/product-filters.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/product-filters.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-line pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-ink-muted",
                        children: [
                            "전체 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-ink",
                                children: productCount
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/product-filters.tsx",
                                lineNumber: 118,
                                columnNumber: 14
                            }, this),
                            "개"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/product-filters.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1",
                        children: SORT_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onChangeSortBy(option.value),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded px-2 py-1 text-xs font-medium transition-colors", sortBy === option.value ? "text-primary font-bold" : "text-ink-muted hover:text-ink"),
                                children: option.label
                            }, option.value, false, {
                                fileName: "[project]/src/components/shop/product-filters.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/product-filters.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/product-filters.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/product-filters.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c = ProductFilters;
var _c;
__turbopack_context__.k.register(_c, "ProductFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shop/product-image.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductImage",
    ()=>ProductImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function ProductImage({ imageUrl, categoryCode, alt, className }) {
    const src = imageUrl ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_PLACEHOLDER_IMAGES"][categoryCode];
    return(// next/image는 외부 이미지 도메인을 next.config.ts에 미리 등록해야 해서,
    // 실사진 도메인이 아직 정해지지 않은 지금 단계에서는 유연한 <img>를 사용합니다.
    // (placeholder는 우리 자체 정적 파일이라 도메인 문제와 무관합니다)
    // eslint-disable-next-line @next/next/no-img-element
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: src,
        alt: alt,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full w-full object-cover", className)
    }, void 0, false, {
        fileName: "[project]/src/components/shop/product-image.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this));
}
_c = ProductImage;
var _c;
__turbopack_context__.k.register(_c, "ProductImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shop/product-list-item.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductListItem",
    ()=>ProductListItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/product-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function ProductListItem({ product, isSelected, onSelect, onOpenDetail }) {
    const fields = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_ATTRIBUTE_FIELDS"][product.categoryCode];
    const attrs = product.attributes;
    const discounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyDiscount"])(product.price, product.discountRate);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-4 border-b border-line px-3 py-4 transition-colors hover:bg-paper", isSelected && "bg-primary-soft/40"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onOpenDetail,
                "aria-label": `${product.name} 상세보기`,
                className: "h-20 w-20 shrink-0 overflow-hidden rounded-md border border-line",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductImage"], {
                    imageUrl: product.image,
                    categoryCode: product.categoryCode,
                    alt: product.name
                }, void 0, false, {
                    fileName: "[project]/src/components/shop/product-list-item.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shop/product-list-item.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onOpenDetail,
                        className: "text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-ink-muted",
                                children: product.brand
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/product-list-item.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "truncate text-sm font-bold text-ink hover:text-primary",
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/product-list-item.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/product-list-item.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1.5 flex flex-wrap gap-x-3 gap-y-1",
                        children: fields.map((field)=>{
                            const raw = attrs[field.key];
                            if (raw === null || raw === undefined) return null;
                            const display = typeof raw === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prettifyValue"])(raw) : String(raw);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-ink-muted",
                                children: [
                                    field.label,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-ink",
                                        children: [
                                            display,
                                            field.unit ? ` ${field.unit}` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shop/product-list-item.tsx",
                                        lineNumber: 54,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, field.key, true, {
                                fileName: "[project]/src/components/shop/product-list-item.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/product-list-item.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/product-list-item.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex shrink-0 flex-col items-end gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            product.discountRate > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        tone: "danger",
                                        children: [
                                            product.discountRate,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shop/product-list-item.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-ink-muted line-through",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatKRW"])(product.price)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shop/product-list-item.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shop/product-list-item.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-base font-bold text-ink",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatKRW"])(discounted)
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/product-list-item.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/product-list-item.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        size: "sm",
                        variant: isSelected ? "outline" : "primary",
                        onClick: onSelect,
                        children: isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shop/product-list-item.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                " 담김"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shop/product-list-item.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shop/product-list-item.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                " 담기"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shop/product-list-item.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/product-list-item.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/product-list-item.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/product-list-item.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = ProductListItem;
var _c;
__turbopack_context__.k.register(_c, "ProductListItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shop/product-list.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductList",
    ()=>ProductList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$list$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shop/product-list-item.tsx [app-client] (ecmascript)");
;
;
function ProductList({ products, selectedCategoryPartId, onSelect, onOpenDetail, onClearFilters, hasActiveFilters }) {
    if (products.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-3 rounded-lg border border-dashed border-line bg-paper-raised py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-ink-muted",
                    children: "선택한 조건에 맞는 상품이 없습니다."
                }, void 0, false, {
                    fileName: "[project]/src/components/shop/product-list.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onClearFilters,
                    className: "text-sm font-bold text-primary hover:text-primary-dark",
                    children: "필터 초기화"
                }, void 0, false, {
                    fileName: "[project]/src/components/shop/product-list.tsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shop/product-list.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border border-line bg-paper-raised",
        children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shop$2f$product$2d$list$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductListItem"], {
                product: product,
                isSelected: product.id === selectedCategoryPartId,
                onSelect: ()=>onSelect(product),
                onOpenDetail: ()=>onOpenDetail(product)
            }, product.id, false, {
                fileName: "[project]/src/components/shop/product-list.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/shop/product-list.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = ProductList;
var _c;
__turbopack_context__.k.register(_c, "ProductList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shop/quote-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuotePanel",
    ()=>QuotePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.mjs [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/build-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const selectedParts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"])({
        "QuotePanel.useBuildStore[selectedParts]": (s)=>s.selectedParts
    }["QuotePanel.useBuildStore[selectedParts]"]);
    const compatibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"])({
        "QuotePanel.useBuildStore[compatibility]": (s)=>s.compatibility
    }["QuotePanel.useBuildStore[compatibility]"]);
    const totalPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"])({
        "QuotePanel.useBuildStore[totalPrice]": (s)=>s.totalPrice
    }["QuotePanel.useBuildStore[totalPrice]"]);
    const totalDiscountedPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"])({
        "QuotePanel.useBuildStore[totalDiscountedPrice]": (s)=>s.totalDiscountedPrice
    }["QuotePanel.useBuildStore[totalDiscountedPrice]"]);
    const removePart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"])({
        "QuotePanel.useBuildStore[removePart]": (s)=>s.removePart
    }["QuotePanel.useBuildStore[removePart]"]);
    const clearAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"])({
        "QuotePanel.useBuildStore[clearAll]": (s)=>s.clearAll
    }["QuotePanel.useBuildStore[clearAll]"]);
    const [showPaymentNotice, setShowPaymentNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const orderedParts = CATEGORY_ORDER.map((code)=>selectedParts[code]).filter((part)=>Boolean(part));
    const hasErrors = compatibility.issues.some((i)=>i.severity === "error");
    const canCheckout = orderedParts.length > 0 && !hasErrors;
    const discountAmount = totalPrice - totalDiscountedPrice;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "sticky top-6 flex w-full flex-col gap-4 rounded-xl border border-line bg-paper-raised p-4 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "flex items-center gap-1.5 text-sm font-bold text-ink",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                className: "h-4 w-4 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            "내 견적"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    orderedParts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: clearAll,
                        className: "text-xs text-ink-muted hover:text-danger",
                        children: "전체 비우기"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/quote-panel.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            orderedParts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-bold", hasErrors ? "bg-danger-soft text-danger" : compatibility.issues.length > 0 ? "bg-warning-soft text-warning" : "bg-success-soft text-success"),
                children: [
                    hasErrors ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-4 w-4 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this) : compatibility.issues.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-4 w-4 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "h-4 w-4 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this),
                    hasErrors ? `호환 불가 ${compatibility.issues.filter((i)=>i.severity === "error").length}건` : compatibility.issues.length > 0 ? `확인 필요 ${compatibility.issues.length}건` : "모든 부품이 호환됩니다"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/quote-panel.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this),
            compatibility.issues.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex flex-col gap-1",
                children: compatibility.issues.map((issue, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: issue.severity === "error" ? "text-xs text-danger" : "text-xs text-ink-muted",
                        children: [
                            "· ",
                            issue.message
                        ]
                    }, `${issue.ruleId}-${i}`, true, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/shop/quote-panel.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this),
            orderedParts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded-lg border border-dashed border-line py-8 text-center text-xs text-ink-muted",
                children: "왼쪽에서 부품을 선택하면 여기에 담깁니다."
            }, void 0, false, {
                fileName: "[project]/src/components/shop/quote-panel.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex flex-col gap-2",
                children: orderedParts.map((part)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-start justify-between gap-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-ink",
                                        children: part.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-ink-muted",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatKRW"])(part.price)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>removePart(part.categoryCode),
                                "aria-label": `${part.name} 제거`,
                                className: "shrink-0 text-ink-muted hover:text-danger",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shop/quote-panel.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this)
                        ]
                    }, part.id, true, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/shop/quote-panel.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1.5 border-t border-line pt-3 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-ink-muted",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "상품 합계"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatKRW"])(totalPrice)
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-ink-muted",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "할인 금액"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-danger",
                                children: [
                                    "-",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatKRW"])(discountAmount)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-ink-muted",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "배송비"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                children: "무료"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline justify-between border-t border-line pt-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold text-ink",
                                children: "총 결제금액"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-lg font-extrabold text-primary",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatKRW"])(totalDiscountedPrice)
                            }, void 0, false, {
                                fileName: "[project]/src/components/shop/quote-panel.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shop/quote-panel.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shop/quote-panel.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                disabled: !canCheckout,
                onClick: ()=>setShowPaymentNotice(true),
                className: "w-full",
                children: "Toss Pay로 결제하기"
            }, void 0, false, {
                fileName: "[project]/src/components/shop/quote-panel.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            showPaymentNotice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-xs text-ink-muted",
                children: "결제 연동은 Step 5에서 제공됩니다."
            }, void 0, false, {
                fileName: "[project]/src/components/shop/quote-panel.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shop/quote-panel.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(QuotePanel, "4PL7uUmHCTzrIZr8/oDX0dqumbc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"]
    ];
});
_c = QuotePanel;
var _c;
__turbopack_context__.k.register(_c, "QuotePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shop/status-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBar",
    ()=>StatusBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.mjs [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/build-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const CHECK_GROUPS = [
    {
        label: "소켓 호환성",
        ruleIds: [
            "cpu-mb-socket",
            "cooler-cpu-socket"
        ]
    },
    {
        label: "폼팩터 호환성",
        ruleIds: [
            "mb-case-formfactor",
            "psu-case-formfactor"
        ]
    },
    {
        label: "전력 용량",
        ruleIds: [
            "psu-power-capacity"
        ]
    },
    {
        label: "물리적 간섭",
        ruleIds: [
            "gpu-case-length",
            "cooler-case-clearance"
        ]
    }
];
function StatusBar() {
    _s();
    const issues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"])({
        "StatusBar.useBuildStore[issues]": (s)=>s.compatibility.issues
    }["StatusBar.useBuildStore[issues]"]);
    const hasAnyPart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"])({
        "StatusBar.useBuildStore[hasAnyPart]": (s)=>Object.keys(s.selectedParts).length > 0
    }["StatusBar.useBuildStore[hasAnyPart]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 gap-2 rounded-lg border border-line bg-paper-raised p-3 sm:grid-cols-4",
        children: CHECK_GROUPS.map((group)=>{
            const groupIssues = issues.filter((i)=>group.ruleIds.includes(i.ruleId));
            const hasError = groupIssues.some((i)=>i.severity === "error");
            const hasWarning = groupIssues.some((i)=>i.severity === "warning");
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-2 py-1",
                children: [
                    !hasAnyPart ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                        className: "h-4 w-4 shrink-0 text-ink-muted",
                        strokeWidth: 2
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/status-bar.tsx",
                        lineNumber: 28,
                        columnNumber: 15
                    }, this) : hasError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-4 w-4 shrink-0 text-danger"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/status-bar.tsx",
                        lineNumber: 30,
                        columnNumber: 15
                    }, this) : hasWarning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-4 w-4 shrink-0 text-warning"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/status-bar.tsx",
                        lineNumber: 32,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "h-4 w-4 shrink-0 text-success"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/status-bar.tsx",
                        lineNumber: 34,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-medium", !hasAnyPart && "text-ink-muted", hasError && "text-danger", !hasError && hasWarning && "text-warning", hasAnyPart && !hasError && !hasWarning && "text-success"),
                        children: group.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/shop/status-bar.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this)
                ]
            }, group.label, true, {
                fileName: "[project]/src/components/shop/status-bar.tsx",
                lineNumber: 26,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/shop/status-bar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(StatusBar, "loNWD514uvRg6c5bYYj0RbJdVrA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$build$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuildStore"]
    ];
});
_c = StatusBar;
var _c;
__turbopack_context__.k.register(_c, "StatusBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Badge({ tone = "neutral", children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold", tone === "neutral" && "border border-line bg-paper-raised text-ink-muted", tone === "success" && "bg-success-soft text-success", tone === "warning" && "bg-warning-soft text-warning", tone === "danger" && "bg-danger-soft text-danger", tone === "primary" && "bg-primary-soft text-primary-dark", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = function Button({ className, variant = "primary", size = "md", ...props }, ref) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center gap-1.5 rounded-md font-semibold transition-colors", "disabled:cursor-not-allowed disabled:opacity-40", variant === "primary" && "bg-primary text-white hover:bg-primary-dark", variant === "outline" && "border border-primary text-primary hover:bg-primary-soft", variant === "ghost" && "text-ink-muted hover:bg-paper hover:text-ink", variant === "dark" && "bg-dark text-white hover:bg-dark-raised", size === "sm" && "px-2.5 py-1 text-xs", size === "md" && "px-4 py-2.5 text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
});
_c1 = Button;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/catalog-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ATTRIBUTE_LABELS",
    ()=>ATTRIBUTE_LABELS,
    "CATEGORY_ATTRIBUTE_FIELDS",
    ()=>CATEGORY_ATTRIBUTE_FIELDS,
    "CATEGORY_ICONS",
    ()=>CATEGORY_ICONS,
    "CATEGORY_PLACEHOLDER_IMAGES",
    ()=>CATEGORY_PLACEHOLDER_IMAGES
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circuit$2d$board$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircuitBoard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circuit-board.mjs [app-client] (ecmascript) <export default as CircuitBoard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.mjs [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fan$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fan$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/fan.mjs [app-client] (ecmascript) <export default as Fan>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gpu.mjs [app-client] (ecmascript) <export default as Gpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.mjs [app-client] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$memory$2d$stick$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MemoryStick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/memory-stick.mjs [app-client] (ecmascript) <export default as MemoryStick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
;
const CATEGORY_ICONS = {
    CPU: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
    MOTHERBOARD: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circuit$2d$board$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircuitBoard$3e$__["CircuitBoard"],
    RAM: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$memory$2d$stick$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MemoryStick$3e$__["MemoryStick"],
    GPU: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gpu$3e$__["Gpu"],
    STORAGE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"],
    PSU: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    CASE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"],
    COOLER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fan$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fan$3e$__["Fan"]
};
const CATEGORY_PLACEHOLDER_IMAGES = {
    CPU: "/placeholders/cpu.svg",
    MOTHERBOARD: "/placeholders/motherboard.svg",
    RAM: "/placeholders/ram.svg",
    GPU: "/placeholders/gpu.svg",
    STORAGE: "/placeholders/storage.svg",
    PSU: "/placeholders/psu.svg",
    CASE: "/placeholders/case.svg",
    COOLER: "/placeholders/cooler.svg"
};
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
const ATTRIBUTE_LABELS = {
    socket: {
        label: "소켓"
    },
    cores: {
        label: "코어 수",
        unit: "코어"
    },
    threads: {
        label: "스레드 수",
        unit: "스레드"
    },
    baseClockGHz: {
        label: "베이스 클럭",
        unit: "GHz"
    },
    boostClockGHz: {
        label: "부스트 클럭",
        unit: "GHz"
    },
    tdpWatts: {
        label: "TDP",
        unit: "W"
    },
    integratedGraphics: {
        label: "내장 그래픽"
    },
    formFactor: {
        label: "폼팩터"
    },
    chipset: {
        label: "칩셋"
    },
    memoryType: {
        label: "메모리 규격"
    },
    memorySlots: {
        label: "메모리 슬롯",
        unit: "개"
    },
    maxMemoryGB: {
        label: "최대 메모리",
        unit: "GB"
    },
    m2Slots: {
        label: "M.2 슬롯",
        unit: "개"
    },
    capacityGB: {
        label: "용량",
        unit: "GB"
    },
    modules: {
        label: "모듈 구성",
        unit: "개"
    },
    speedMHz: {
        label: "속도",
        unit: "MHz"
    },
    vramGB: {
        label: "VRAM",
        unit: "GB"
    },
    lengthMm: {
        label: "길이",
        unit: "mm"
    },
    slotWidth: {
        label: "슬롯 두께",
        unit: "슬롯"
    },
    recommendedPsuWattage: {
        label: "권장 파워 용량",
        unit: "W"
    },
    powerDrawWatts: {
        label: "소비전력",
        unit: "W"
    },
    powerConnector: {
        label: "전원 커넥터"
    },
    storageType: {
        label: "저장장치 종류"
    },
    interface: {
        label: "인터페이스"
    },
    wattage: {
        label: "정격 출력",
        unit: "W"
    },
    efficiencyRating: {
        label: "80+ 인증"
    },
    modular: {
        label: "모듈러 방식"
    },
    supportedFormFactors: {
        label: "지원 폼팩터"
    },
    maxGpuLengthMm: {
        label: "최대 GPU 길이",
        unit: "mm"
    },
    maxCoolerHeightMm: {
        label: "최대 쿨러 높이",
        unit: "mm"
    },
    maxRadiatorSizeMm: {
        label: "최대 라디에이터",
        unit: "mm"
    },
    psuFormFactor: {
        label: "파워 폼팩터"
    },
    coolerType: {
        label: "쿨러 종류"
    },
    supportedSockets: {
        label: "지원 소켓"
    },
    heightMm: {
        label: "높이",
        unit: "mm"
    },
    radiatorSizeMm: {
        label: "라디에이터 크기",
        unit: "mm"
    },
    tdpRatingWatts: {
        label: "냉각 성능",
        unit: "W"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/compatibility/checker.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/compatibility/rules.ts [app-client] (ecmascript)");
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
        const issue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkCpuMotherboardSocket"])(cpu, mb);
        if (issue) issues.push(issue);
    }
    // ─── 메인보드 ↔ RAM ──────────────────────────────────────
    if (mb && ram) {
        const typeIssue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkMotherboardRamType"])(mb, ram);
        if (typeIssue) issues.push(typeIssue);
        const slotsIssue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkMotherboardRamSlots"])(mb, ram);
        if (slotsIssue) issues.push(slotsIssue);
    }
    // ─── 메인보드 ↔ 케이스 ───────────────────────────────────
    if (mb && pcCase) {
        const issue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkMotherboardCaseFormFactor"])(mb, pcCase);
        if (issue) issues.push(issue);
    }
    // ─── GPU ↔ 케이스 ────────────────────────────────────────
    if (gpu && pcCase) {
        const issue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkGpuCaseLength"])(gpu, pcCase);
        if (issue) issues.push(issue);
    }
    // ─── 쿨러 ↔ CPU ─────────────────────────────────────────
    if (cooler && cpu) {
        const socketIssue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkCoolerCpuSocket"])(cooler, cpu);
        if (socketIssue) issues.push(socketIssue);
        const tdpIssue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkCoolerCpuTdp"])(cooler, cpu);
        if (tdpIssue) issues.push(tdpIssue);
    }
    // ─── 쿨러 ↔ 케이스 ──────────────────────────────────────
    if (cooler && pcCase) {
        const issue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkCoolerCaseClearance"])(cooler, pcCase);
        if (issue) issues.push(issue);
    }
    // ─── PSU ↔ 케이스 ───────────────────────────────────────
    if (psu && pcCase) {
        const issue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPsuCaseFormFactor"])(psu, pcCase);
        if (issue) issues.push(issue);
    }
    // ─── PSU 전력 용량 ──────────────────────────────────────
    const powerEstimate = estimatePower(parts);
    if (psu) {
        const powerIssues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPsuPowerCapacity"])(psu, gpu ?? null, powerEstimate.total);
        issues.push(...powerIssues);
    }
    // ─── 저장장치 ↔ 메인보드 M.2 슬롯 ──────────────────────
    if (storage && mb) {
        // 현재 스토어는 카테고리당 부품 1개이므로 기존 M.2 수 = 0
        const issue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkStorageMbM2Slots"])(storage, mb, 0);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/compatibility/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$checker$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/compatibility/checker.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$rules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/compatibility/rules.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/compatibility/rules.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/build-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/compatibility/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$checker$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/compatibility/checker.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
    const compatibility = partCount === 0 ? emptyReport() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$compatibility$2f$checker$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkAllCompatibility"])(toAttributesMap(selectedParts));
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
const buildStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
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
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>{
        // SSR 환경(서버)에서는 localStorage가 없으므로 빈 구현을 반환
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return localStorage;
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
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(buildStore, selector);
}
_s(useBuildStore, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_04wqrzd._.js.map