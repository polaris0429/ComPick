module.exports = [
"[project]/src/lib/demo-catalog.ts [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/_13_j7si._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/lib/demo-catalog.ts [app-rsc] (ecmascript)");
    });
});
}),
"[project]/src/lib/repositories/catalog.ts [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[externals]_node_crypto_1f-2opq._.js",
  "server/chunks/ssr/src_generated_prisma_runtime_client_1tr8gr7.js",
  "server/chunks/ssr/src_generated_prisma_query_compiler_fast_bg_wasm-base64_1zl9b0x.js",
  "server/chunks/ssr/src_generated_prisma_0zkpmh3._.js",
  "server/chunks/ssr/src_lib_13aj1_-._.js",
  "server/chunks/ssr/[externals]__0q--j-3._.js",
  "server/chunks/ssr/[root-of-the-server]__1l_p-c1._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/lib/repositories/catalog.ts [app-rsc] (ecmascript)");
    });
});
}),
];