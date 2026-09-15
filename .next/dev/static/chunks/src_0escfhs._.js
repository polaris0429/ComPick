(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/admin/product-manager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductManager",
    ()=>ProductManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* eslint-disable @next/next/no-img-element -- Local admin previews preserve uploaded images without optimization. */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.mjs [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.mjs [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-search.mjs [app-client] (ecmascript) <export default as PackageSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$product$2d$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/product-schema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function blankProduct() {
    return {
        name: "",
        brand: "",
        categoryCode: "CPU",
        price: 0,
        discountRate: 0,
        stock: 0,
        isActive: false,
        images: [],
        infoImages: [],
        infoText: "",
        attributes: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$product$2d$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPEC_TEMPLATES"].CPU
        }
    };
}
async function jsonRequest(url, options) {
    const response = await fetch(url, {
        cache: "no-store",
        ...options
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error ?? "요청을 처리하지 못했습니다.");
    return data;
}
function ProductManager() {
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(blankProduct);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [categoryFilter, setCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [dirty, setDirty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newSpec, setNewSpec] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formRevision, setFormRevision] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [jsonErrors, setJsonErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    async function loadProducts() {
        const data = await jsonRequest("/api/admin/products");
        setProducts(data.products);
        setCategories(data.categories);
        return data.products;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductManager.useEffect": ()=>{
            let cancelled = false;
            jsonRequest("/api/admin/products").then({
                "ProductManager.useEffect": (data)=>{
                    if (cancelled) return;
                    setProducts(data.products);
                    setCategories(data.categories);
                    const initial = data.products.find({
                        "ProductManager.useEffect": (p)=>p.name === "Ryzen 7 9800X3D"
                    }["ProductManager.useEffect"]) ?? data.products[0];
                    if (initial) setDraft(initial);
                }
            }["ProductManager.useEffect"]).catch({
                "ProductManager.useEffect": (e)=>{
                    if (!cancelled) setError(e.message);
                }
            }["ProductManager.useEffect"]).finally({
                "ProductManager.useEffect": ()=>{
                    if (!cancelled) setLoading(false);
                }
            }["ProductManager.useEffect"]);
            return ({
                "ProductManager.useEffect": ()=>{
                    cancelled = true;
                }
            })["ProductManager.useEffect"];
        }
    }["ProductManager.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductManager.useEffect": ()=>{
            if (!dirty) return;
            const protect = {
                "ProductManager.useEffect.protect": (event)=>event.preventDefault()
            }["ProductManager.useEffect.protect"];
            window.addEventListener("beforeunload", protect);
            return ({
                "ProductManager.useEffect": ()=>window.removeEventListener("beforeunload", protect)
            })["ProductManager.useEffect"];
        }
    }["ProductManager.useEffect"], [
        dirty
    ]);
    function change(patch) {
        setDraft((p)=>({
                ...p,
                ...patch
            }));
        setDirty(true);
        setNotice("");
    }
    function selectProduct(product) {
        if (dirty && !window.confirm("저장하지 않은 변경 내용이 있습니다. 이동하시겠습니까?")) return;
        setFormRevision((value)=>value + 1);
        setDraft(product ?? blankProduct());
        setDirty(false);
        setError("");
        setNotice("");
        setJsonErrors({});
    }
    async function refresh() {
        if (dirty && !window.confirm("저장하지 않은 변경 내용을 버리고 새로고침하시겠습니까?")) return;
        setBusy(true);
        setError("");
        try {
            const next = await loadProducts();
            setDraft(next.find((p)=>p.id === draft.id) ?? blankProduct());
            setFormRevision((value)=>value + 1);
            setDirty(false);
            setJsonErrors({});
        } catch (e) {
            setError(e.message);
        } finally{
            setBusy(false);
        }
    }
    async function save(event) {
        event.preventDefault();
        setError("");
        setNotice("");
        if (Object.keys(jsonErrors).length) {
            setError("스펙의 배열 형식을 확인해 주세요.");
            return;
        }
        setBusy(true);
        try {
            const result = await jsonRequest("/api/admin/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...draft,
                    images: draft.images.map((s)=>s.trim()).filter(Boolean),
                    infoImages: draft.infoImages.map((s)=>s.trim()).filter(Boolean)
                })
            });
            // The write succeeded even if the following refresh fails.
            setDirty(false);
            setDraft((previous)=>({
                    ...previous,
                    id: result.id
                }));
            const next = await loadProducts();
            setDraft(next.find((p)=>p.id === result.id) ?? blankProduct());
            setNotice("저장했습니다. 쇼핑몰에서 새로고침하면 변경 내용이 반영됩니다.");
        } catch (e) {
            setError(e.message);
        } finally{
            setBusy(false);
        }
    }
    async function remove() {
        if (!draft.id || !window.confirm(`‘${draft.name}’ 상품을 삭제하시겠습니까? 삭제한 상품은 복구할 수 없습니다.`)) return;
        setBusy(true);
        setError("");
        setNotice("");
        try {
            await jsonRequest("/api/admin/products", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: draft.id,
                    updatedAt: draft.updatedAt
                })
            });
            setDraft(blankProduct());
            setDirty(false);
            setJsonErrors({});
            await loadProducts();
            setNotice("상품을 삭제했습니다.");
        } catch (e) {
            setError(e.message);
        } finally{
            setBusy(false);
        }
    }
    async function upload(file, kind) {
        if (!file) return;
        setBusy(true);
        setError("");
        try {
            const form = new FormData();
            form.append("file", file);
            const result = await jsonRequest("/api/admin/upload", {
                method: "POST",
                body: form
            });
            change({
                [kind]: kind === "images" ? [
                    result.url,
                    ...draft.images.slice(1)
                ] : [
                    ...draft.infoImages,
                    result.url
                ]
            });
            setNotice("이미지를 올렸습니다. ‘상품 저장’을 눌러 적용하세요.");
        } catch (e) {
            setError(e.message);
        } finally{
            setBusy(false);
        }
    }
    function updateSpec(key, value) {
        change({
            attributes: {
                ...draft.attributes,
                [key]: value
            }
        });
    }
    const visible = products.filter((p)=>(!categoryFilter || p.categoryCode === categoryFilter) && `${p.name} ${p.brand}`.toLowerCase().includes(search.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "admin-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "admin-top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "brand",
                        children: [
                            "Com",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Pick"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                lineNumber: 108,
                                columnNumber: 71
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/product-manager.tsx",
                        lineNumber: 108,
                        columnNumber: 35
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "상품 관리 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "ADMIN"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                lineNumber: 108,
                                columnNumber: 107
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/product-manager.tsx",
                        lineNumber: 108,
                        columnNumber: 95
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        target: "_blank",
                        children: [
                            "쇼핑몰 보기 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                lineNumber: 108,
                                columnNumber: 172
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/product-manager.tsx",
                        lineNumber: 108,
                        columnNumber: 134
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/product-manager.tsx",
                lineNumber: 108,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "CATALOG MANAGEMENT"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                lineNumber: 109,
                                columnNumber: 41
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "상품 관리"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                lineNumber: 109,
                                columnNumber: 66
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "상품과 이미지, 상세 정보를 한곳에서 관리하세요."
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                lineNumber: 109,
                                columnNumber: 80
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/product-manager.tsx",
                        lineNumber: 109,
                        columnNumber: 36
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "admin-primary",
                        disabled: busy || loading,
                        onClick: ()=>selectProduct(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                lineNumber: 109,
                                columnNumber: 217
                            }, this),
                            "새 상품 등록"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/product-manager.tsx",
                        lineNumber: 109,
                        columnNumber: 126
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/product-manager.tsx",
                lineNumber: 109,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-workspace",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "admin-list",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "admin-list-head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            "등록 상품 ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: products.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 111,
                                                columnNumber: 84
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                        lineNumber: 111,
                                        columnNumber: 70
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-label": "상품 목록 새로고침",
                                        disabled: busy,
                                        onClick: refresh,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/product-manager.tsx",
                                            lineNumber: 111,
                                            columnNumber: 183
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                        lineNumber: 111,
                                        columnNumber: 117
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                lineNumber: 111,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                "aria-label": "관리 상품 검색",
                                placeholder: "상품명 또는 제조사 검색",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                lineNumber: 112,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                "aria-label": "관리 카테고리 필터",
                                value: categoryFilter,
                                onChange: (e)=>setCategoryFilter(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "전체 카테고리"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                        lineNumber: 113,
                                        columnNumber: 114
                                    }, this),
                                    categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c.code,
                                            children: c.name
                                        }, c.code, false, {
                                            fileName: "[project]/src/components/admin/product-manager.tsx",
                                            lineNumber: 113,
                                            columnNumber: 168
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                lineNumber: 113,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "admin-products",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "admin-empty",
                                    children: "상품을 불러오는 중입니다."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/product-manager.tsx",
                                    lineNumber: 114,
                                    columnNumber: 52
                                }, this) : visible.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "admin-empty",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageSearch$3e$__["PackageSearch"], {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/product-manager.tsx",
                                            lineNumber: 114,
                                            columnNumber: 150
                                        }, this),
                                        "검색 결과가 없습니다."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/product-manager.tsx",
                                    lineNumber: 114,
                                    columnNumber: 123
                                }, this) : visible.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: busy,
                                        className: p.id === draft.id ? "selected" : "",
                                        onClick: ()=>selectProduct(p),
                                        children: [
                                            p.images[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: p.images[0],
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 115,
                                                columnNumber: 26
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageSearch$3e$__["PackageSearch"], {
                                                size: 32
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 115,
                                                columnNumber: 60
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: [
                                                            p.brand,
                                                            " · ",
                                                            p.categoryCode
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: p.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 60
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatKRW"])(p.price),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                                children: p.isActive ? "판매 노출" : "숨김"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 112
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 85
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 116,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                        lineNumber: 114,
                                        columnNumber: 212
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                lineNumber: 114,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/product-manager.tsx",
                        lineNumber: 111,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "admin-editor",
                        onSubmit: save,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "admin-editor-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: draft.id ? "상품 수정" : "새 상품"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 120,
                                                columnNumber: 52
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: draft.name || "새 상품을 등록하세요"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 120,
                                                columnNumber: 96
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                        lineNumber: 120,
                                        columnNumber: 47
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: dirty ? "저장하지 않은 변경 사항" : "저장된 정보"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                        lineNumber: 120,
                                        columnNumber: 140
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                lineNumber: 120,
                                columnNumber: 9
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "admin-error",
                                role: "alert",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                lineNumber: 121,
                                columnNumber: 19
                            }, this),
                            notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "admin-notice",
                                role: "status",
                                children: notice
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                lineNumber: 121,
                                columnNumber: 86
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                disabled: busy || loading,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "admin-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 50
                                                    }, this),
                                                    " 기본 정보"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 123,
                                                columnNumber: 46
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "admin-fields",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "wide",
                                                        children: [
                                                            "상품명",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                value: draft.name,
                                                                maxLength: 200,
                                                                onChange: (e)=>change({
                                                                        name: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 40
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "제조사 / 브랜드",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                value: draft.brand,
                                                                onChange: (e)=>change({
                                                                        brand: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "카테고리",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: draft.categoryCode,
                                                                onChange: (e)=>{
                                                                    const code = e.target.value;
                                                                    if (window.confirm("카테고리를 바꾸면 스펙이 해당 분류의 예시 값으로 초기화됩니다. 변경하시겠습니까?")) {
                                                                        change({
                                                                            categoryCode: code,
                                                                            attributes: {
                                                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$product$2d$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPEC_TEMPLATES"][code]
                                                                            }
                                                                        });
                                                                        setJsonErrors({});
                                                                    }
                                                                },
                                                                children: categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: c.code,
                                                                        children: c.name
                                                                    }, c.code, false, {
                                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                        lineNumber: 126,
                                                                        columnNumber: 296
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 24
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "판매가 (원)",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: 0,
                                                                max: 2147483647,
                                                                required: true,
                                                                value: draft.price,
                                                                onChange: (e)=>change({
                                                                        price: Number(e.target.value)
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "할인율 (%)",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: 0,
                                                                max: 100,
                                                                required: true,
                                                                value: draft.discountRate,
                                                                onChange: (e)=>change({
                                                                        discountRate: Number(e.target.value)
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "재고 수량",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: 0,
                                                                required: true,
                                                                value: draft.stock,
                                                                onChange: (e)=>change({
                                                                        stock: Number(e.target.value)
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "판매 상태",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: String(draft.isActive),
                                                                onChange: (e)=>change({
                                                                        isActive: e.target.value === "true"
                                                                    }),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "true",
                                                                        children: "판매 노출"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                        lineNumber: 130,
                                                                        columnNumber: 125
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "false",
                                                                        children: "숨김"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                        lineNumber: 130,
                                                                        columnNumber: 160
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 123,
                                                columnNumber: 76
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                        lineNumber: 123,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "admin-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "02"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 50
                                                    }, this),
                                                    " 상품 썸네일"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 132,
                                                columnNumber: 46
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "첫 번째 이미지가 상품 목록과 상세 팝업의 대표 사진으로 표시됩니다."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 132,
                                                columnNumber: 77
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "admin-media-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "admin-thumbnail",
                                                        children: draft.images[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: draft.images[0],
                                                            alt: "상품 썸네일 미리보기"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/product-manager.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 98
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageSearch$3e$__["PackageSearch"], {
                                                            size: 38
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/product-manager.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 147
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 46
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "admin-media-input",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "admin-upload",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                        lineNumber: 133,
                                                                        columnNumber: 247
                                                                    }, this),
                                                                    "썸네일 파일 선택",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        accept: "image/jpeg,image/png,image/webp",
                                                                        onChange: (e)=>{
                                                                            upload(e.target.files?.[0], "images");
                                                                            e.target.value = "";
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                        lineNumber: 133,
                                                                        columnNumber: 275
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 215
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    "이미지 주소 (한 줄에 하나)",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        rows: 3,
                                                                        value: draft.images.join("\n"),
                                                                        onChange: (e)=>change({
                                                                                images: e.target.value.split("\n")
                                                                            })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                        lineNumber: 133,
                                                                        columnNumber: 441
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 418
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: "JPG · PNG · WEBP / 최대 20MB"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 561
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 180
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 133,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                        lineNumber: 132,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "admin-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "03"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 50
                                                    }, this),
                                                    " 상품정보"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 135,
                                                columnNumber: 46
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "긴 상세 이미지도 원본 비율로 표시됩니다. 여러 이미지를 등록하면 위에서 아래로 이어집니다."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 135,
                                                columnNumber: 75
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "상품 설명",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        rows: 4,
                                                        value: draft.infoText,
                                                        onChange: (e)=>change({
                                                                infoText: e.target.value
                                                            }),
                                                        placeholder: "상품 소개 문구를 입력하세요."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 136,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "admin-upload",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 45
                                                    }, this),
                                                    "상품정보 이미지 추가",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: "image/jpeg,image/png,image/webp",
                                                        onChange: (e)=>{
                                                            upload(e.target.files?.[0], "infoImages");
                                                            e.target.value = "";
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 75
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 137,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "상품정보 이미지 주소 (표시 순서대로 한 줄에 하나)",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        rows: 3,
                                                        value: draft.infoImages.join("\n"),
                                                        onChange: (e)=>change({
                                                                infoImages: e.target.value.split("\n")
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 138,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "admin-detail-previews",
                                                children: draft.infoImages.map((url, i)=>url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "상세 이미지 ",
                                                                            i + 1
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                        lineNumber: 139,
                                                                        columnNumber: 120
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        "aria-label": `상세 이미지 ${i + 1} 제거`,
                                                                        onClick: ()=>change({
                                                                                infoImages: draft.infoImages.filter((_, n)=>n !== i)
                                                                            }),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            size: 15
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                            lineNumber: 139,
                                                                            columnNumber: 272
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                        lineNumber: 139,
                                                                        columnNumber: 145
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 115
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: url,
                                                                alt: `상품정보 이미지 ${i + 1} 미리보기`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 306
                                                            }, this)
                                                        ]
                                                    }, `${i}-${url}`, true, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 90
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 139,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                        lineNumber: 135,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "admin-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "04"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 50
                                                    }, this),
                                                    " 상세 스펙"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 141,
                                                columnNumber: 46
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "호환성 검사에 사용되는 항목입니다. 기본 항목 이름은 유지하고 값만 수정하세요. 배열은 ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: '["AM5", "LGA1851"]'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 128
                                                    }, this),
                                                    " 형식입니다."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 141,
                                                columnNumber: 76
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "admin-specs",
                                                children: Object.entries(draft.attributes).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATTRIBUTE_LABELS"][key]?.label ?? key,
                                                                    " ",
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATTRIBUTE_LABELS"][key]?.unit && `(${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATTRIBUTE_LABELS"][key]?.unit})`,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: key
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 315
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 204
                                                            }, this),
                                                            typeof value === "boolean" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: String(value),
                                                                onChange: (e)=>updateSpec(key, e.target.value === "true"),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "true",
                                                                        children: "있음 / 지원"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 133
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "false",
                                                                        children: "없음 / 미지원"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 170
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 45
                                                            }, this) : Array.isArray(value) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        defaultValue: JSON.stringify(value),
                                                                        onChange: (e)=>{
                                                                            try {
                                                                                const parsed = JSON.parse(e.target.value);
                                                                                if (!Array.isArray(parsed)) throw new Error();
                                                                                updateSpec(key, parsed);
                                                                                setJsonErrors((prev)=>{
                                                                                    const next = {
                                                                                        ...prev
                                                                                    };
                                                                                    delete next[key];
                                                                                    return next;
                                                                                });
                                                                            } catch  {
                                                                                setJsonErrors((prev)=>({
                                                                                        ...prev,
                                                                                        [key]: "배열 형식을 확인하세요."
                                                                                    }));
                                                                                setDirty(true);
                                                                            }
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 249
                                                                    }, this),
                                                                    jsonErrors[key] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        className: "text-danger",
                                                                        children: jsonErrors[key]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 602
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 244
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: typeof value === "number" || value === null ? "number" : "text",
                                                                step: "any",
                                                                value: value === null ? "" : String(value),
                                                                placeholder: value === null ? "해당 없음" : "",
                                                                onChange: (e)=>updateSpec(key, typeof value === "number" || value === null ? e.target.value === "" ? null : Number(e.target.value) : e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 668
                                                            }, this)
                                                        ]
                                                    }, `${formRevision}-${draft.id ?? "new"}-${draft.updatedAt ?? "new"}-${draft.categoryCode}-${key}`, true, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 95
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 142,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "admin-add-spec",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        "aria-label": "추가 스펙 항목명",
                                                        value: newSpec,
                                                        onChange: (e)=>setNewSpec(e.target.value),
                                                        placeholder: "추가 항목명 (예: L3 캐시)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            const key = newSpec.trim();
                                                            if (key && !Object.hasOwn(draft.attributes, key) && ![
                                                                "__proto__",
                                                                "constructor",
                                                                "prototype"
                                                            ].includes(key)) {
                                                                updateSpec(key, "");
                                                                setNewSpec("");
                                                            }
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 372
                                                            }, this),
                                                            "항목 추가"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 167
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 145,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                        lineNumber: 141,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                lineNumber: 122,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "admin-savebar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "admin-delete",
                                        disabled: busy || !draft.id,
                                        onClick: remove,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 148,
                                                columnNumber: 133
                                            }, this),
                                            "상품 삭제"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                        lineNumber: 148,
                                        columnNumber: 40
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: busy ? "처리 중…" : "저장 후 쇼핑몰 새로고침으로 확인"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                        lineNumber: 148,
                                        columnNumber: 166
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "admin-primary",
                                        disabled: busy || loading,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                                lineNumber: 148,
                                                columnNumber: 293
                                            }, this),
                                            draft.id ? "상품 저장" : "상품 등록"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/product-manager.tsx",
                                        lineNumber: 148,
                                        columnNumber: 218
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/product-manager.tsx",
                                lineNumber: 148,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/product-manager.tsx",
                        lineNumber: 119,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/product-manager.tsx",
                lineNumber: 110,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/product-manager.tsx",
        lineNumber: 107,
        columnNumber: 10
    }, this);
}
_s(ProductManager, "rSPHbjX8U/5ohhsmLkrI+CsWwtc=");
_c = ProductManager;
var _c;
__turbopack_context__.k.register(_c, "ProductManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/admin/product-schema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const text = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(200);
const positive = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().max(1000000);
const count = positive.int();
const nonnegative = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1000000);
const formFactor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "E_ATX",
    "ATX",
    "MICRO_ATX",
    "MINI_ITX"
]);
const memoryType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "DDR4",
    "DDR5"
]);
const socketList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(text).min(1);
const attributeSchemas = {
    CPU: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
        socket: text,
        cores: count,
        threads: count,
        baseClockGHz: positive,
        boostClockGHz: positive,
        tdpWatts: positive,
        integratedGraphics: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
    }),
    MOTHERBOARD: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
        socket: text,
        formFactor,
        chipset: text,
        memoryType,
        memorySlots: count,
        maxMemoryGB: count,
        m2Slots: nonnegative.int()
    }),
    RAM: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
        memoryType,
        capacityGB: count,
        modules: count,
        speedMHz: count
    }),
    GPU: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
        vramGB: positive,
        lengthMm: positive,
        slotWidth: positive,
        recommendedPsuWattage: positive,
        powerDrawWatts: positive,
        powerConnector: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "NONE",
            "8PIN_1",
            "8PIN_2",
            "12VHPWR"
        ])
    }),
    STORAGE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
        storageType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "NVME_SSD",
            "SATA_SSD",
            "HDD"
        ]),
        formFactor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "M2_2280",
            "2_5_INCH",
            "3_5_INCH"
        ]),
        interface: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "PCIE_GEN3",
            "PCIE_GEN4",
            "PCIE_GEN5",
            "SATA3"
        ]),
        capacityGB: count
    }),
    PSU: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
        wattage: positive,
        efficiencyRating: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "80PLUS_WHITE",
            "80PLUS_BRONZE",
            "80PLUS_GOLD",
            "80PLUS_PLATINUM"
        ]),
        formFactor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "ATX",
            "SFX"
        ]),
        modular: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "FULL",
            "SEMI",
            "NONE"
        ])
    }),
    CASE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
        supportedFormFactors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(formFactor).min(1),
        maxGpuLengthMm: positive,
        maxCoolerHeightMm: positive,
        maxRadiatorSizeMm: positive.nullable(),
        psuFormFactor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "ATX",
            "SFX"
        ])
    }),
    COOLER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
        coolerType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "AIR",
            "AIO_LIQUID"
        ]),
        supportedSockets: socketList,
        heightMm: positive.nullable(),
        radiatorSizeMm: positive.nullable(),
        tdpRatingWatts: positive
    })
};
const imagePath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(2000).refine((value)=>{
    if (/^\/(?!\/)[a-zA-Z0-9/_.-]+$/.test(value) && !value.includes("..")) return true;
    try {
        return new URL(value).protocol === "https:";
    } catch  {
        return false;
    }
}, "이미지는 /로 시작하는 로컬 경로 또는 https 주소를 입력하세요.");
const attributeValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(1000),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().finite(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].null(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
    ])).max(100)
]);
const productInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).optional(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime().optional(),
    name: text,
    brand: text,
    categoryCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "CPU",
        "MOTHERBOARD",
        "RAM",
        "GPU",
        "STORAGE",
        "PSU",
        "CASE",
        "COOLER"
    ]),
    price: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).max(2147483647),
    discountRate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).max(100),
    stock: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).max(2147483647),
    isActive: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    images: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(imagePath).max(12),
    infoImages: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(imagePath).max(20),
    infoText: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(20000),
    attributes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(100), attributeValue)
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
]);

//# sourceMappingURL=src_0escfhs._.js.map