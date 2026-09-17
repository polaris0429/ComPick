module.exports = [
"[project]/src/app/api/member/[action]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/encryption.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/member/server.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const runtime = "nodejs";
const dynamic = "force-dynamic";
const loginId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().toLowerCase().regex(/^[a-z0-9_]{4,30}$/, "아이디는 영문·숫자·밑줄 4~30자로 입력하세요.");
const password = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(12, "비밀번호는 12자 이상 입력하세요.").max(72).refine((s)=>Buffer.byteLength(s, "utf8") <= 72, "비밀번호는 UTF-8 기준 72바이트 이하여야 합니다.");
const fields = {
    loginId,
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().toLowerCase().email().max(254),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(50)
};
const deliveryFields = {
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().max(20).refine((v)=>!v || /^[0-9+() -]{7,20}$/.test(v), "전화번호를 확인하세요.").optional(),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().max(300).refine((v)=>!v || v.length >= 5, "배송주소는 5자 이상 입력하세요.").optional(),
    addressDetail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().max(200).optional()
};
const response = (data, status = 200)=>Response.json(data, {
        status,
        headers: {
            "Cache-Control": "private, no-store"
        }
    });
const dummyHash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hashSync("dummy-password-for-timing-only", 12);
function handleError(error) {
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MemberError"]) return response({
        error: error.message
    }, error.status);
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodError) return response({
        error: error.issues[0]?.message ?? "입력 내용을 확인하세요."
    }, 400);
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Prisma"].PrismaClientKnownRequestError && error.code === "P2002") return response({
        error: "이미 사용 중인 아이디 또는 이메일입니다."
    }, 409);
    return response({
        error: "요청을 처리하지 못했습니다. 잠시 후 다시 시도해 주세요."
    }, 500);
}
async function cart(userId) {
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].cartItem.findMany({
        where: {
            userId
        },
        orderBy: {
            createdAt: "asc"
        },
        include: {
            product: true,
            prebuiltPC: {
                include: {
                    components: {
                        include: {
                            product: true
                        }
                    }
                }
            }
        }
    });
    const items = rows.map((row)=>{
        const p = row.product ?? row.prebuiltPC;
        const stock = row.product ? row.product.stock : row.prebuiltPC.components.length ? Math.min(99, ...row.prebuiltPC.components.map((c)=>c.product.isActive ? Math.floor(c.product.stock / c.quantity) : 0)) : row.prebuiltPC.stock;
        const available = p.isActive && stock >= row.quantity;
        const unitPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyDiscount"])(p.price, p.discountRate);
        return {
            productId: row.productId,
            prebuiltPCId: row.prebuiltPCId,
            id: row.id,
            name: p.name,
            image: p.images[0] ?? "",
            quantity: row.quantity,
            unitPrice,
            total: unitPrice * row.quantity,
            stock,
            available,
            kind: row.product ? "부품" : "완제품"
        };
    });
    return {
        items,
        total: items.filter((i)=>i.available).reduce((s, i)=>s + i.total, 0)
    };
}
async function GET(_request, context) {
    try {
        const { action } = await context.params;
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["currentMember"])();
        if (action === "me") return response({
            user: user ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publicMember"])(user) : null
        });
        if (action === "cart") {
            if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MemberError"]("로그인이 필요합니다.", 401);
            return response(await cart(user.id));
        }
        return response({
            error: "찾을 수 없습니다."
        }, 404);
    } catch (e) {
        return handleError(e);
    }
}
async function POST(request, context) {
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkOrigin"])(request);
        const { action } = await context.params;
        if (Number(request.headers.get("content-length")) > 16384) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MemberError"]("요청이 너무 큽니다.", 413);
        const raw = await request.text();
        if (Buffer.byteLength(raw) > 16384) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MemberError"]("요청이 너무 큽니다.", 413);
        let body;
        try {
            body = JSON.parse(raw || "{}");
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MemberError"]("입력 형식을 확인하세요.");
        }
        if (action === "register") {
            const input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                ...fields,
                password
            }).parse(body);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rateLimit"])("register", "global", 50);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rateLimit"])("register", input.loginId, 5);
            const passwordHash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(input.password, 12);
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
                const user = await tx.user.create({
                    data: {
                        loginId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encryptField"])(input.loginId),
                        loginIdHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashForLookup"])(`login:${input.loginId}`),
                        email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encryptField"])(input.email),
                        emailHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashForLookup"])(input.email),
                        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encryptField"])(input.name),
                        nameEncrypted: true,
                        passwordHash
                    }
                });
                return {
                    user,
                    token: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["issueSession"])(tx, user.id)
                };
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setSession"])(result.token);
            return response({
                user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publicMember"])(result.user)
            }, 201);
        }
        if (action === "login") {
            const input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                loginId,
                password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(72).refine((s)=>Buffer.byteLength(s) <= 72)
            }).parse(body);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rateLimit"])("login", input.loginId, 8);
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                where: {
                    loginIdHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashForLookup"])(`login:${input.loginId}`)
                }
            });
            const valid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(input.password, user?.passwordHash ?? dummyHash);
            if (!user || !user.isActive || !valid) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MemberError"]("아이디 또는 비밀번호를 확인하세요.", 401);
            const oldHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessionHash"])();
            const token = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
                await tx.$queryRaw`SELECT id FROM users WHERE id=${user.id} FOR UPDATE`;
                const fresh = await tx.user.findUnique({
                    where: {
                        id: user.id
                    }
                });
                if (!fresh || !fresh.isActive || fresh.passwordHash !== user.passwordHash) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MemberError"]("다시 로그인해 주세요.", 401);
                if (oldHash) await tx.memberSession.deleteMany({
                    where: {
                        tokenHash: oldHash
                    }
                });
                await tx.memberSession.deleteMany({
                    where: {
                        expiresAt: {
                            lt: new Date()
                        }
                    }
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["issueSession"])(tx, user.id);
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setSession"])(token);
            return response({
                user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publicMember"])(user)
            });
        }
        if (action === "logout") {
            const hash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessionHash"])();
            if (hash) await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].memberSession.deleteMany({
                where: {
                    tokenHash: hash
                }
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clearSession"])();
            return response({
                ok: true
            });
        }
        if (action === "profile" || action === "delete") {
            const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["currentMember"])();
            if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MemberError"]("로그인이 필요합니다.", 401);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rateLimit"])("sensitive", user.id, 8);
            const input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                currentPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(72).refine((s)=>Buffer.byteLength(s) <= 72),
                ...action === "profile" ? {
                    ...fields,
                    ...deliveryFields,
                    newPassword: password.optional()
                } : {
                    confirmation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("회원탈퇴")
                }
            }).parse(body);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["memberTransaction"])(async (tx, fresh)=>{
                if (!await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(input.currentPassword, fresh.passwordHash)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MemberError"]("현재 비밀번호를 확인하세요.", 403);
                if (action === "delete") {
                    if (await tx.order.count({
                        where: {
                            userId: fresh.id,
                            status: "PENDING",
                            stockReserved: true
                        }
                    })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MemberError"]("결제 승인 확인 중인 주문이 있습니다. 결제 상태 확인 후 탈퇴해 주세요.");
                    await tx.user.delete({
                        where: {
                            id: fresh.id
                        }
                    });
                    return null;
                }
                const data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    ...fields,
                    ...deliveryFields,
                    newPassword: password.optional()
                }).parse(body);
                const updated = await tx.user.update({
                    where: {
                        id: fresh.id
                    },
                    data: {
                        loginId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encryptField"])(data.loginId),
                        loginIdHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashForLookup"])(`login:${data.loginId}`),
                        email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encryptField"])(data.email),
                        emailHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashForLookup"])(data.email),
                        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encryptField"])(data.name),
                        nameEncrypted: true,
                        ...data.phone !== undefined ? {
                            phoneEncrypted: data.phone ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encryptField"])(data.phone) : null
                        } : {},
                        ...data.address !== undefined ? {
                            addressEncrypted: data.address ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encryptField"])(data.address) : null
                        } : {},
                        ...data.addressDetail !== undefined ? {
                            addressDetailEncrypted: data.addressDetail ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encryptField"])(data.addressDetail) : null
                        } : {},
                        ...data.newPassword ? {
                            passwordHash: await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(data.newPassword, 12)
                        } : {}
                    }
                });
                await tx.memberSession.deleteMany({
                    where: {
                        userId: fresh.id
                    }
                });
                return {
                    user: updated,
                    token: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["issueSession"])(tx, fresh.id)
                };
            });
            if (result) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setSession"])(result.token);
                return response({
                    user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publicMember"])(result.user)
                });
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clearSession"])();
            return response({
                ok: true
            });
        }
        if (action === "cart") {
            const input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("operation", [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    operation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("add"),
                    productId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).optional(),
                    prebuiltPCId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).optional(),
                    quantity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1).max(99).default(1)
                }).refine((x)=>Boolean(x.productId) !== Boolean(x.prebuiltPCId), "상품을 하나 선택하세요."),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    operation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("set"),
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    quantity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1).max(99)
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    operation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("remove"),
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    operation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("clear")
                })
            ]).parse(body);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["memberTransaction"])(async (tx, user)=>{
                if (input.operation === "clear") {
                    await tx.cartItem.deleteMany({
                        where: {
                            userId: user.id
                        }
                    });
                    return;
                }
                if (input.operation === "remove") {
                    const r = await tx.cartItem.deleteMany({
                        where: {
                            id: input.id,
                            userId: user.id
                        }
                    });
                    if (!r.count) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MemberError"]("장바구니 상품을 찾을 수 없습니다.", 404);
                    return;
                }
                const existing = input.operation === "set" ? await tx.cartItem.findFirst({
                    where: {
                        id: input.id,
                        userId: user.id
                    }
                }) : await tx.cartItem.findFirst({
                    where: {
                        userId: user.id,
                        ...input.productId ? {
                            productId: input.productId
                        } : {
                            prebuiltPCId: input.prebuiltPCId
                        }
                    }
                });
                if (input.operation === "set" && !existing) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MemberError"]("장바구니 상품을 찾을 수 없습니다.", 404);
                const productId = input.operation === "add" ? input.productId : existing.productId;
                const prebuiltPCId = input.operation === "add" ? input.prebuiltPCId : existing.prebuiltPCId;
                const quantity = input.operation === "set" ? input.quantity : (existing?.quantity ?? 0) + input.quantity;
                if (quantity > 99) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MemberError"]("상품당 최대 99개까지 담을 수 있습니다.");
                if (productId) {
                    const p = await tx.product.findUnique({
                        where: {
                            id: productId
                        }
                    });
                    if (!p?.isActive || p.stock < quantity) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MemberError"]("판매 상태 또는 재고 수량을 확인하세요.");
                } else {
                    const p = await tx.prebuiltPC.findUnique({
                        where: {
                            id: prebuiltPCId
                        },
                        include: {
                            components: {
                                include: {
                                    product: true
                                }
                            }
                        }
                    });
                    if (!p?.isActive || !p.components.length && p.stock < quantity || p.components.some((c)=>!c.product.isActive || c.product.stock < quantity * c.quantity)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MemberError"]("완제품 구성의 판매 상태 또는 재고가 부족합니다.");
                }
                if (existing) await tx.cartItem.update({
                    where: {
                        id: existing.id
                    },
                    data: {
                        quantity
                    }
                });
                else {
                    if (await tx.cartItem.count({
                        where: {
                            userId: user.id
                        }
                    }) >= 100) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MemberError"]("장바구니는 최대 100종까지 담을 수 있습니다.");
                    await tx.cartItem.create({
                        data: {
                            userId: user.id,
                            productId,
                            prebuiltPCId,
                            quantity
                        }
                    });
                }
            });
            return response({
                ok: true
            });
        }
        return response({
            error: "찾을 수 없습니다."
        }, 404);
    } catch (e) {
        return handleError(e);
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/encryption.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decryptField",
    ()=>decryptField,
    "encryptField",
    ()=>encryptField,
    "hashForLookup",
    ()=>hashForLookup
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
/**
 * 필드 레벨 암호화
 * ────────────────────────────────────────────────────────────────
 * 이메일처럼 "저장은 암호화하되, 로그인 시 WHERE 절로 조회는 되어야 하는"
 * 값을 다루기 위한 두 가지 원시 함수를 제공합니다.
 *
 *  - encryptField/decryptField: AES-256-GCM. 매 호출마다 랜덤 IV를 사용하므로
 *    같은 평문이라도 암호문이 매번 달라집니다(의미론적으로 안전). DB에는 이
 *    암호문만 저장하고, 화면 표시나 비즈니스 로직에서는 복호화해서 씁니다.
 *
 *  - hashForLookup: HMAC-SHA256. 같은 입력이면 항상 같은 출력이 나오는
 *    "결정적" 해시입니다. AES-GCM 암호문은 매번 달라져서 등호(=) 조회에
 *    쓸 수 없기 때문에, 조회 전용 컬럼(예: User.emailHash)에 이 값을 저장하고
 *    로그인 시 `WHERE emailHash = hashForLookup(입력값)` 형태로 찾습니다.
 *
 * 암호화 키와 해시 키는 절대 같은 바이트를 재사용하지 않고, HKDF로 하나의
 * 마스터 키(FIELD_ENCRYPTION_KEY)에서 용도별로 분리해 파생시킵니다.
 */ const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12; // GCM 권장 nonce 길이 (96bit)
const AUTH_TAG_LENGTH = 16;
const KEY_LENGTH = 32; // AES-256 → 32바이트
let cachedMasterKey = null;
function getMasterKey() {
    if (cachedMasterKey) return cachedMasterKey;
    const raw = process.env.FIELD_ENCRYPTION_KEY;
    if (!raw) {
        throw new Error("FIELD_ENCRYPTION_KEY 환경 변수가 설정되지 않았습니다. " + ".env에 base64로 인코딩된 32바이트 키를 설정하세요. 생성 예시: openssl rand -base64 32");
    }
    const key = Buffer.from(raw, "base64");
    if (key.length !== KEY_LENGTH) {
        throw new Error(`FIELD_ENCRYPTION_KEY는 base64로 인코딩된 32바이트 키여야 합니다 (디코딩 결과 ${key.length}바이트). ` + "생성 예시: openssl rand -base64 32");
    }
    cachedMasterKey = key;
    return key;
}
/** HKDF로 마스터 키에서 용도별 하위 키를 파생합니다 (암호화 키 ≠ 해시 키). */ function deriveKey(purpose) {
    const masterKey = getMasterKey();
    const derived = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].hkdfSync("sha256", masterKey, Buffer.alloc(0), Buffer.from(`compick:field-encryption:${purpose}`, "utf8"), KEY_LENGTH);
    return Buffer.from(derived);
}
function encryptField(plaintext) {
    const key = deriveKey("encrypt");
    const iv = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomBytes(IV_LENGTH);
    const cipher = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createCipheriv(ALGORITHM, key, iv, {
        authTagLength: AUTH_TAG_LENGTH
    });
    const ciphertext = Buffer.concat([
        cipher.update(plaintext, "utf8"),
        cipher.final()
    ]);
    const authTag = cipher.getAuthTag();
    return Buffer.concat([
        iv,
        authTag,
        ciphertext
    ]).toString("base64");
}
function decryptField(payload) {
    const key = deriveKey("encrypt");
    const raw = Buffer.from(payload, "base64");
    if (raw.length < IV_LENGTH + AUTH_TAG_LENGTH) {
        throw new Error("잘못된 형식의 암호화 값입니다 (길이가 너무 짧음).");
    }
    const iv = raw.subarray(0, IV_LENGTH);
    const authTag = raw.subarray(IV_LENGTH, IV_LENGTH + AUTH_TAG_LENGTH);
    const ciphertext = raw.subarray(IV_LENGTH + AUTH_TAG_LENGTH);
    const decipher = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createDecipheriv(ALGORITHM, key, iv, {
        authTagLength: AUTH_TAG_LENGTH
    });
    decipher.setAuthTag(authTag);
    const plaintext = Buffer.concat([
        decipher.update(ciphertext),
        decipher.final()
    ]);
    return plaintext.toString("utf8");
}
function hashForLookup(plaintext) {
    const key = deriveKey("hash");
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createHmac("sha256", key).update(plaintext, "utf8").digest("hex");
}
}),
"[project]/src/lib/format.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/member/server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "MemberError",
    ()=>MemberError,
    "checkOrigin",
    ()=>checkOrigin,
    "clearSession",
    ()=>clearSession,
    "cookieName",
    ()=>cookieName,
    "currentMember",
    ()=>currentMember,
    "issueSession",
    ()=>issueSession,
    "memberTransaction",
    ()=>memberTransaction,
    "publicMember",
    ()=>publicMember,
    "rateLimit",
    ()=>rateLimit,
    "sessionHash",
    ()=>sessionHash,
    "setSession",
    ()=>setSession,
    "tokenHash",
    ()=>tokenHash
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/encryption.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
class MemberError extends Error {
    status;
    constructor(message, status = 400){
        super(message), this.status = status;
    }
}
const cookieName = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "compick-session";
const cookieOptions = {
    httpOnly: true,
    secure: ("TURBOPACK compile-time value", "development") === "production",
    sameSite: "lax",
    path: "/"
};
const tokenHash = (token)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(token).digest("hex");
async function sessionHash() {
    const token = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])()).get(cookieName)?.value;
    return token && /^[a-f0-9]{64}$/.test(token) ? tokenHash(token) : null;
}
async function currentMember() {
    const hash = await sessionHash();
    if (!hash) return null;
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].memberSession.findUnique({
        where: {
            tokenHash: hash
        },
        include: {
            user: true
        }
    });
    return session && session.user.isActive && session.expiresAt > new Date() ? session.user : null;
}
const publicMember = (u)=>({
        id: u.id,
        loginId: u.loginId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decryptField"])(u.loginId) : "",
        email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decryptField"])(u.email),
        name: u.nameEncrypted ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decryptField"])(u.name) : u.name,
        phone: u.phoneEncrypted ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decryptField"])(u.phoneEncrypted) : "",
        address: u.addressEncrypted ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decryptField"])(u.addressEncrypted) : "",
        addressDetail: u.addressDetailEncrypted ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decryptField"])(u.addressDetailEncrypted) : ""
    });
async function issueSession(tx, userId) {
    const token = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(32).toString("hex");
    await tx.memberSession.create({
        data: {
            tokenHash: tokenHash(token),
            userId,
            expiresAt: new Date(Date.now() + 7 * 86400000)
        }
    });
    return token;
}
async function setSession(token) {
    (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])()).set(cookieName, token, {
        ...cookieOptions,
        maxAge: 7 * 86400
    });
}
async function clearSession() {
    (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])()).set(cookieName, "", {
        ...cookieOptions,
        maxAge: 0
    });
}
function checkOrigin(request) {
    if (process.env.NEXT_PUBLIC_COMPICK_DEMO_MODE === "1") throw new MemberError("데모 모드에서는 회원 기능을 사용할 수 없습니다.", 403);
    const origin = request.headers.get("origin");
    const host = request.headers.get("host") ?? "";
    if (("TURBOPACK compile-time value", "development") !== "production" && !/^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/.test(host)) throw new MemberError("허용되지 않은 요청입니다.", 403);
    const expected = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `${new URL(request.url).protocol}//${host}`;
    if (!origin || !expected || origin !== expected) throw new MemberError("허용되지 않은 요청입니다.", 403);
    if (("TURBOPACK compile-time value", "development") === "production" && !expected.startsWith("https://")) //TURBOPACK unreachable
    ;
}
async function rateLimit(scope, identity, limit = 8) {
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$encryption$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashForLookup"])(`member-rate:${scope}:${identity}`);
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$queryRaw`INSERT INTO member_rate_limits (key,attempts,"expiresAt") VALUES (${key},1,NOW()+INTERVAL '15 minutes') ON CONFLICT (key) DO UPDATE SET attempts=CASE WHEN member_rate_limits."expiresAt"<NOW() THEN 1 ELSE member_rate_limits.attempts+1 END, "expiresAt"=CASE WHEN member_rate_limits."expiresAt"<NOW() THEN NOW()+INTERVAL '15 minutes' ELSE member_rate_limits."expiresAt" END RETURNING attempts`;
    if ((rows[0]?.attempts ?? limit + 1) > limit) throw new MemberError("시도가 많습니다. 15분 후 다시 시도해 주세요.", 429);
}
async function memberTransaction(fn) {
    const hash = await sessionHash();
    if (!hash) throw new MemberError("로그인이 필요합니다.", 401);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
        const s = await tx.memberSession.findUnique({
            where: {
                tokenHash: hash
            }
        });
        if (!s || s.expiresAt <= new Date()) throw new MemberError("다시 로그인해 주세요.", 401);
        await tx.$queryRaw`SELECT id FROM users WHERE id=${s.userId} FOR UPDATE`;
        const fresh = await tx.memberSession.findUnique({
            where: {
                tokenHash: hash
            },
            include: {
                user: true
            }
        });
        if (!fresh || !fresh.user.isActive || fresh.expiresAt <= new Date()) throw new MemberError("다시 로그인해 주세요.", 401);
        return fn(tx, fresh.user);
    }, {
        timeout: 15000
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
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

//# sourceMappingURL=src_0zrbfw7._.js.map