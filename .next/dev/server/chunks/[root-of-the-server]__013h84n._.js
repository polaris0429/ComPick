module.exports = [
"[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("pg-587764f78a6c7a9c");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "PrismaPg",
    ()=>PrismaPgAdapterFactory
]);
// src/pg.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/debug/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/driver-adapter-utils/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2d$array$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postgres-array/index.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
// package.json
var name = "@prisma/adapter-pg";
// src/constants.ts
var FIRST_NORMAL_OBJECT_ID = 16384;
;
;
;
var { types } = __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"];
var { builtins: ScalarColumnType, getTypeParser } = types;
var AdditionalScalarColumnType = {
    NAME: 19
};
var ArrayColumnType = {
    BIT_ARRAY: 1561,
    BOOL_ARRAY: 1e3,
    BYTEA_ARRAY: 1001,
    BPCHAR_ARRAY: 1014,
    CHAR_ARRAY: 1002,
    CIDR_ARRAY: 651,
    DATE_ARRAY: 1182,
    FLOAT4_ARRAY: 1021,
    FLOAT8_ARRAY: 1022,
    INET_ARRAY: 1041,
    INT2_ARRAY: 1005,
    INT4_ARRAY: 1007,
    INT8_ARRAY: 1016,
    JSONB_ARRAY: 3807,
    JSON_ARRAY: 199,
    MONEY_ARRAY: 791,
    NUMERIC_ARRAY: 1231,
    OID_ARRAY: 1028,
    TEXT_ARRAY: 1009,
    TIMESTAMP_ARRAY: 1115,
    TIMESTAMPTZ_ARRAY: 1185,
    TIME_ARRAY: 1183,
    UUID_ARRAY: 2951,
    VARBIT_ARRAY: 1563,
    VARCHAR_ARRAY: 1015,
    XML_ARRAY: 143
};
var UnsupportedNativeDataType = class _UnsupportedNativeDataType extends Error {
    // map of type codes to type names
    static typeNames = {
        16: "bool",
        17: "bytea",
        18: "char",
        19: "name",
        20: "int8",
        21: "int2",
        22: "int2vector",
        23: "int4",
        24: "regproc",
        25: "text",
        26: "oid",
        27: "tid",
        28: "xid",
        29: "cid",
        30: "oidvector",
        32: "pg_ddl_command",
        71: "pg_type",
        75: "pg_attribute",
        81: "pg_proc",
        83: "pg_class",
        114: "json",
        142: "xml",
        194: "pg_node_tree",
        269: "table_am_handler",
        325: "index_am_handler",
        600: "point",
        601: "lseg",
        602: "path",
        603: "box",
        604: "polygon",
        628: "line",
        650: "cidr",
        700: "float4",
        701: "float8",
        705: "unknown",
        718: "circle",
        774: "macaddr8",
        790: "money",
        829: "macaddr",
        869: "inet",
        1033: "aclitem",
        1042: "bpchar",
        1043: "varchar",
        1082: "date",
        1083: "time",
        1114: "timestamp",
        1184: "timestamptz",
        1186: "interval",
        1266: "timetz",
        1560: "bit",
        1562: "varbit",
        1700: "numeric",
        1790: "refcursor",
        2202: "regprocedure",
        2203: "regoper",
        2204: "regoperator",
        2205: "regclass",
        2206: "regtype",
        2249: "record",
        2275: "cstring",
        2276: "any",
        2277: "anyarray",
        2278: "void",
        2279: "trigger",
        2280: "language_handler",
        2281: "internal",
        2283: "anyelement",
        2287: "_record",
        2776: "anynonarray",
        2950: "uuid",
        2970: "txid_snapshot",
        3115: "fdw_handler",
        3220: "pg_lsn",
        3310: "tsm_handler",
        3361: "pg_ndistinct",
        3402: "pg_dependencies",
        3500: "anyenum",
        3614: "tsvector",
        3615: "tsquery",
        3642: "gtsvector",
        3734: "regconfig",
        3769: "regdictionary",
        3802: "jsonb",
        3831: "anyrange",
        3838: "event_trigger",
        3904: "int4range",
        3906: "numrange",
        3908: "tsrange",
        3910: "tstzrange",
        3912: "daterange",
        3926: "int8range",
        4072: "jsonpath",
        4089: "regnamespace",
        4096: "regrole",
        4191: "regcollation",
        4451: "int4multirange",
        4532: "nummultirange",
        4533: "tsmultirange",
        4534: "tstzmultirange",
        4535: "datemultirange",
        4536: "int8multirange",
        4537: "anymultirange",
        4538: "anycompatiblemultirange",
        4600: "pg_brin_bloom_summary",
        4601: "pg_brin_minmax_multi_summary",
        5017: "pg_mcv_list",
        5038: "pg_snapshot",
        5069: "xid8",
        5077: "anycompatible",
        5078: "anycompatiblearray",
        5079: "anycompatiblenonarray",
        5080: "anycompatiblerange"
    };
    type;
    constructor(code){
        super();
        this.type = _UnsupportedNativeDataType.typeNames[code] || "Unknown";
        this.message = `Unsupported column type ${this.type}`;
    }
};
function fieldToColumnType(fieldTypeId) {
    switch(fieldTypeId){
        case ScalarColumnType.INT2:
        case ScalarColumnType.INT4:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int32;
        case ScalarColumnType.INT8:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64;
        case ScalarColumnType.FLOAT4:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Float;
        case ScalarColumnType.FLOAT8:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Double;
        case ScalarColumnType.BOOL:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Boolean;
        case ScalarColumnType.DATE:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Date;
        case ScalarColumnType.TIME:
        case ScalarColumnType.TIMETZ:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Time;
        case ScalarColumnType.TIMESTAMP:
        case ScalarColumnType.TIMESTAMPTZ:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTime;
        case ScalarColumnType.NUMERIC:
        case ScalarColumnType.MONEY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Numeric;
        case ScalarColumnType.JSON:
        case ScalarColumnType.JSONB:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Json;
        case ScalarColumnType.UUID:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Uuid;
        case ScalarColumnType.OID:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64;
        case ScalarColumnType.BPCHAR:
        case ScalarColumnType.TEXT:
        case ScalarColumnType.VARCHAR:
        case ScalarColumnType.BIT:
        case ScalarColumnType.VARBIT:
        case ScalarColumnType.INET:
        case ScalarColumnType.CIDR:
        case ScalarColumnType.XML:
        case AdditionalScalarColumnType.NAME:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Text;
        case ScalarColumnType.BYTEA:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Bytes;
        case ArrayColumnType.INT2_ARRAY:
        case ArrayColumnType.INT4_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int32Array;
        case ArrayColumnType.FLOAT4_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].FloatArray;
        case ArrayColumnType.FLOAT8_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DoubleArray;
        case ArrayColumnType.NUMERIC_ARRAY:
        case ArrayColumnType.MONEY_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].NumericArray;
        case ArrayColumnType.BOOL_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].BooleanArray;
        case ArrayColumnType.CHAR_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].CharacterArray;
        case ArrayColumnType.BPCHAR_ARRAY:
        case ArrayColumnType.TEXT_ARRAY:
        case ArrayColumnType.VARCHAR_ARRAY:
        case ArrayColumnType.VARBIT_ARRAY:
        case ArrayColumnType.BIT_ARRAY:
        case ArrayColumnType.INET_ARRAY:
        case ArrayColumnType.CIDR_ARRAY:
        case ArrayColumnType.XML_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].TextArray;
        case ArrayColumnType.DATE_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateArray;
        case ArrayColumnType.TIME_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].TimeArray;
        case ArrayColumnType.TIMESTAMP_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTimeArray;
        case ArrayColumnType.TIMESTAMPTZ_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTimeArray;
        case ArrayColumnType.JSON_ARRAY:
        case ArrayColumnType.JSONB_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].JsonArray;
        case ArrayColumnType.BYTEA_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].BytesArray;
        case ArrayColumnType.UUID_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].UuidArray;
        case ArrayColumnType.INT8_ARRAY:
        case ArrayColumnType.OID_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64Array;
        default:
            if (fieldTypeId >= FIRST_NORMAL_OBJECT_ID) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Text;
            }
            throw new UnsupportedNativeDataType(fieldTypeId);
    }
}
function normalize_array(element_normalizer) {
    return (str)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2d$array$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parse"])(str, element_normalizer);
}
function normalize_numeric(numeric) {
    return numeric;
}
function normalize_date(date) {
    return date;
}
function normalize_timestamp(time) {
    return `${time.replace(" ", "T")}+00:00`;
}
function normalize_timestamptz(time) {
    return time.replace(" ", "T").replace(/[+-]\d{2}(:\d{2})?$/, "+00:00");
}
function normalize_time(time) {
    return time;
}
function normalize_timez(time) {
    return time.replace(/[+-]\d{2}(:\d{2})?$/, "");
}
function normalize_money(money) {
    return money.slice(1);
}
function normalize_xml(xml) {
    return xml;
}
function toJson(json) {
    return json;
}
var parsePgBytes = getTypeParser(ScalarColumnType.BYTEA);
var normalizeByteaArray = getTypeParser(ArrayColumnType.BYTEA_ARRAY);
function convertBytes(serializedBytes) {
    return parsePgBytes(serializedBytes);
}
function normalizeBit(bit) {
    return bit;
}
var customParsers = {
    [ScalarColumnType.NUMERIC]: normalize_numeric,
    [ArrayColumnType.NUMERIC_ARRAY]: normalize_array(normalize_numeric),
    [ScalarColumnType.TIME]: normalize_time,
    [ArrayColumnType.TIME_ARRAY]: normalize_array(normalize_time),
    [ScalarColumnType.TIMETZ]: normalize_timez,
    [ScalarColumnType.DATE]: normalize_date,
    [ArrayColumnType.DATE_ARRAY]: normalize_array(normalize_date),
    [ScalarColumnType.TIMESTAMP]: normalize_timestamp,
    [ArrayColumnType.TIMESTAMP_ARRAY]: normalize_array(normalize_timestamp),
    [ScalarColumnType.TIMESTAMPTZ]: normalize_timestamptz,
    [ArrayColumnType.TIMESTAMPTZ_ARRAY]: normalize_array(normalize_timestamptz),
    [ScalarColumnType.MONEY]: normalize_money,
    [ArrayColumnType.MONEY_ARRAY]: normalize_array(normalize_money),
    [ScalarColumnType.JSON]: toJson,
    [ArrayColumnType.JSON_ARRAY]: normalize_array(toJson),
    [ScalarColumnType.JSONB]: toJson,
    [ArrayColumnType.JSONB_ARRAY]: normalize_array(toJson),
    [ScalarColumnType.BYTEA]: convertBytes,
    [ArrayColumnType.BYTEA_ARRAY]: normalizeByteaArray,
    [ArrayColumnType.BIT_ARRAY]: normalize_array(normalizeBit),
    [ArrayColumnType.VARBIT_ARRAY]: normalize_array(normalizeBit),
    [ArrayColumnType.XML_ARRAY]: normalize_array(normalize_xml)
};
function mapArg(arg, argType) {
    if (arg === null) {
        return null;
    }
    if (Array.isArray(arg) && argType.arity === "list") {
        return arg.map((value)=>mapArg(value, argType));
    }
    if (typeof arg === "string" && argType.scalarType === "datetime") {
        arg = new Date(arg);
    }
    if (arg instanceof Date) {
        switch(argType.dbType){
            case "TIME":
            case "TIMETZ":
                return formatTime(arg);
            case "DATE":
                return formatDate(arg);
            default:
                return formatDateTime(arg);
        }
    }
    if (typeof arg === "string" && argType.scalarType === "bytes") {
        return Buffer.from(arg, "base64");
    }
    if (ArrayBuffer.isView(arg)) {
        return new Uint8Array(arg.buffer, arg.byteOffset, arg.byteLength);
    }
    return arg;
}
function formatDateTime(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    const ms = date.getUTCMilliseconds();
    return pad(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate()) + " " + pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + (ms ? "." + String(ms).padStart(3, "0") : "");
}
function formatDate(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    return pad(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate());
}
function formatTime(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    const ms = date.getUTCMilliseconds();
    return pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + (ms ? "." + String(ms).padStart(3, "0") : "");
}
// src/errors.ts
var TLS_ERRORS = /* @__PURE__ */ new Set([
    "UNABLE_TO_GET_ISSUER_CERT",
    "UNABLE_TO_GET_CRL",
    "UNABLE_TO_DECRYPT_CERT_SIGNATURE",
    "UNABLE_TO_DECRYPT_CRL_SIGNATURE",
    "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY",
    "CERT_SIGNATURE_FAILURE",
    "CRL_SIGNATURE_FAILURE",
    "CERT_NOT_YET_VALID",
    "CERT_HAS_EXPIRED",
    "CRL_NOT_YET_VALID",
    "CRL_HAS_EXPIRED",
    "ERROR_IN_CERT_NOT_BEFORE_FIELD",
    "ERROR_IN_CERT_NOT_AFTER_FIELD",
    "ERROR_IN_CRL_LAST_UPDATE_FIELD",
    "ERROR_IN_CRL_NEXT_UPDATE_FIELD",
    "DEPTH_ZERO_SELF_SIGNED_CERT",
    "SELF_SIGNED_CERT_IN_CHAIN",
    "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
    "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
    "CERT_CHAIN_TOO_LONG",
    "CERT_REVOKED",
    "INVALID_CA",
    "INVALID_PURPOSE",
    "CERT_UNTRUSTED",
    "CERT_REJECTED",
    "HOSTNAME_MISMATCH",
    "ERR_TLS_CERT_ALTNAME_FORMAT",
    "ERR_TLS_CERT_ALTNAME_INVALID"
]);
var SOCKET_ERRORS = /* @__PURE__ */ new Set([
    "ENOTFOUND",
    "ECONNREFUSED",
    "ECONNRESET",
    "ETIMEDOUT"
]);
function convertDriverError(error) {
    if (isSocketError(error)) {
        return mapSocketError(error);
    }
    if (isTlsError(error)) {
        return {
            kind: "TlsConnectionError",
            reason: error.message
        };
    }
    if (isDriverError(error)) {
        return {
            originalCode: error.code,
            originalMessage: error.message,
            ...mapDriverError(error)
        };
    }
    throw error;
}
function mapDriverError(error) {
    switch(error.code){
        case "22001":
            return {
                kind: "LengthMismatch",
                column: error.column
            };
        case "22003":
            return {
                kind: "ValueOutOfRange",
                cause: error.message
            };
        case "22P02":
            return {
                kind: "InvalidInputValue",
                message: error.message
            };
        case "23505":
            {
                const fields = error.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
                let constraint;
                if (error.constraint) {
                    constraint = {
                        index: error.constraint
                    };
                } else if (fields !== void 0) {
                    constraint = {
                        fields
                    };
                }
                let table = error.table;
                if (table === void 0 && fields !== void 0 && fields.length > 0) {
                    const suffix = `_${fields.join("_")}_key`;
                    if (error.constraint?.endsWith(suffix)) {
                        table = error.constraint.slice(0, -suffix.length);
                    }
                }
                return {
                    kind: "UniqueConstraintViolation",
                    constraint,
                    table
                };
            }
        case "23502":
            {
                const fields = error.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
                return {
                    kind: "NullConstraintViolation",
                    constraint: fields !== void 0 ? {
                        fields
                    } : void 0
                };
            }
        case "23503":
            {
                let constraint;
                if (error.column) {
                    constraint = {
                        fields: [
                            error.column
                        ]
                    };
                } else if (error.constraint) {
                    constraint = {
                        index: error.constraint
                    };
                }
                return {
                    kind: "ForeignKeyConstraintViolation",
                    constraint
                };
            }
        case "23001":
            {
                let constraint;
                if (error.column) {
                    constraint = {
                        fields: [
                            error.column
                        ]
                    };
                } else if (error.constraint) {
                    constraint = {
                        index: error.constraint
                    };
                }
                return {
                    kind: "RestrictViolation",
                    constraint
                };
            }
        case "3D000":
            return {
                kind: "DatabaseDoesNotExist",
                db: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "28000":
            return {
                kind: "DatabaseAccessDenied",
                db: error.message.split(",").find((s)=>s.startsWith(" database"))?.split('"').at(1)
            };
        case "28P01":
            return {
                kind: "AuthenticationFailed",
                user: error.message.split(" ").pop()?.split('"').at(1)
            };
        case "40001":
        case "40P01":
            return {
                kind: "TransactionWriteConflict"
            };
        case "42P01":
            return {
                kind: "TableDoesNotExist",
                table: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "42703":
            {
                const rawColumn = error.message.match(/^column (.+) does not exist$/)?.at(1);
                return {
                    kind: "ColumnNotFound",
                    column: rawColumn?.replace(/"((?:""|[^"])*)"/g, (_, id)=>id.replaceAll('""', '"'))
                };
            }
        case "42P04":
            return {
                kind: "DatabaseAlreadyExists",
                db: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "53300":
            return {
                kind: "TooManyConnections",
                cause: error.message
            };
        default:
            return {
                kind: "postgres",
                code: error.code ?? "N/A",
                severity: error.severity ?? "N/A",
                message: error.message,
                detail: error.detail,
                column: error.column,
                hint: error.hint
            };
    }
}
function isDriverError(error) {
    return typeof error.code === "string" && typeof error.message === "string" && typeof error.severity === "string" && (typeof error.detail === "string" || error.detail === void 0) && (typeof error.column === "string" || error.column === void 0) && (typeof error.hint === "string" || error.hint === void 0);
}
function mapSocketError(error) {
    switch(error.code){
        case "ENOTFOUND":
        case "ECONNREFUSED":
            return {
                kind: "DatabaseNotReachable",
                host: error.address ?? error.hostname,
                port: error.port
            };
        case "ECONNRESET":
            return {
                kind: "ConnectionClosed"
            };
        case "ETIMEDOUT":
            return {
                kind: "SocketTimeout"
            };
    }
}
function isSocketError(error) {
    return typeof error.code === "string" && typeof error.syscall === "string" && typeof error.errno === "number" && SOCKET_ERRORS.has(error.code);
}
function isTlsError(error) {
    if (typeof error.code === "string") {
        return TLS_ERRORS.has(error.code);
    }
    switch(error.message){
        case "The server does not support SSL connections":
        case "There was an error establishing an SSL connection":
            return true;
    }
    return false;
}
// src/pg.ts
var types2 = __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].types;
var debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Debug"])("prisma:driver-adapter:pg");
var PgQueryable = class {
    constructor(client, pgOptions){
        this.client = client;
        this.pgOptions = pgOptions;
    }
    provider = "postgres";
    adapterName = name;
    /**
   * Execute a query given as SQL, interpolating the given parameters.
   */ async queryRaw(query) {
        const tag = "[js::query_raw]";
        debug(`${tag} %O`, query);
        const { fields, rows } = await this.performIO(query);
        const columnNames = fields.map((field)=>field.name);
        let columnTypes = [];
        try {
            columnTypes = fields.map((field)=>fieldToColumnType(field.dataTypeID));
        } catch (e) {
            if (e instanceof UnsupportedNativeDataType) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DriverAdapterError"]({
                    kind: "UnsupportedNativeDataType",
                    type: e.type
                });
            }
            throw e;
        }
        const udtParser = this.pgOptions?.userDefinedTypeParser;
        if (udtParser) {
            for(let i = 0; i < fields.length; i++){
                const field = fields[i];
                if (field.dataTypeID >= FIRST_NORMAL_OBJECT_ID && !Object.hasOwn(customParsers, field.dataTypeID)) {
                    for(let j = 0; j < rows.length; j++){
                        rows[j][i] = await udtParser(field.dataTypeID, rows[j][i], this);
                    }
                }
            }
        }
        return {
            columnNames,
            columnTypes,
            rows
        };
    }
    /**
   * Execute a query given as SQL, interpolating the given parameters and
   * returning the number of affected rows.
   * Note: Queryable expects a u64, but napi.rs only supports u32.
   */ async executeRaw(query) {
        const tag = "[js::execute_raw]";
        debug(`${tag} %O`, query);
        return (await this.performIO(query)).rowCount ?? 0;
    }
    /**
   * Run a query against the database, returning the result set.
   * Should the query fail due to a connection error, the connection is
   * marked as unhealthy.
   */ async performIO(query) {
        const { sql, args } = query;
        const values = args.map((arg, i)=>mapArg(arg, query.argTypes[i]));
        try {
            const result = await this.client.query({
                name: this.pgOptions?.statementNameGenerator?.(query),
                text: sql,
                values,
                rowMode: "array",
                types: {
                    getTypeParser: (oid, format)=>{
                        if (format === "text" && customParsers[oid]) {
                            return customParsers[oid];
                        }
                        return types2.getTypeParser(oid, format);
                    }
                }
            });
            return result;
        } catch (e) {
            this.onError(e);
        }
    }
    onError(error) {
        debug("Error in performIO: %O", error);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DriverAdapterError"](convertDriverError(error));
    }
};
var PgTransaction = class extends PgQueryable {
    constructor(client, options, pgOptions, cleanup){
        super(client, pgOptions);
        this.options = options;
        this.pgOptions = pgOptions;
        this.cleanup = cleanup;
    }
    async commit() {
        debug(`[js::commit]`);
        this.cleanup?.();
        this.client.release();
    }
    async rollback() {
        debug(`[js::rollback]`);
        this.cleanup?.();
        this.client.release();
    }
    async createSavepoint(name2) {
        await this.executeRaw({
            sql: `SAVEPOINT ${name2}`,
            args: [],
            argTypes: []
        });
    }
    async rollbackToSavepoint(name2) {
        await this.executeRaw({
            sql: `ROLLBACK TO SAVEPOINT ${name2}`,
            args: [],
            argTypes: []
        });
    }
    async releaseSavepoint(name2) {
        await this.executeRaw({
            sql: `RELEASE SAVEPOINT ${name2}`,
            args: [],
            argTypes: []
        });
    }
};
var PrismaPgAdapter = class extends PgQueryable {
    constructor(client, pgOptions, release){
        super(client);
        this.pgOptions = pgOptions;
        this.release = release;
    }
    async startTransaction(isolationLevel) {
        const options = {
            usePhantomQuery: false
        };
        const tag = "[js::startTransaction]";
        debug("%s options: %O", tag, options);
        const conn = await this.client.connect().catch((error)=>this.onError(error));
        const onError = (err)=>{
            debug(`Error from pool connection: ${err.message} %O`, err);
            this.pgOptions?.onConnectionError?.(err);
        };
        conn.on("error", onError);
        const cleanup = ()=>{
            conn.removeListener("error", onError);
        };
        try {
            const tx = new PgTransaction(conn, options, this.pgOptions, cleanup);
            await tx.executeRaw({
                sql: "BEGIN",
                args: [],
                argTypes: []
            });
            if (isolationLevel) {
                await tx.executeRaw({
                    sql: `SET TRANSACTION ISOLATION LEVEL ${isolationLevel}`,
                    args: [],
                    argTypes: []
                });
            }
            return tx;
        } catch (error) {
            cleanup();
            conn.release(error);
            this.onError(error);
        }
    }
    async executeScript(script) {
        const statements = script.split(";").map((stmt)=>stmt.trim()).filter((stmt)=>stmt.length > 0);
        for (const stmt of statements){
            try {
                await this.client.query(stmt);
            } catch (error) {
                this.onError(error);
            }
        }
    }
    getConnectionInfo() {
        return {
            schemaName: this.pgOptions?.schema,
            supportsRelationJoins: true
        };
    }
    async dispose() {
        return this.release?.();
    }
    underlyingDriver() {
        return this.client;
    }
};
var PrismaPgAdapterFactory = class {
    constructor(poolOrConfig, options){
        this.options = options;
        if (poolOrConfig instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].Pool) {
            this.externalPool = poolOrConfig;
            this.config = poolOrConfig.options;
        } else if (typeof poolOrConfig === "string") {
            this.externalPool = null;
            this.config = {
                connectionString: poolOrConfig
            };
        } else {
            this.externalPool = null;
            this.config = poolOrConfig;
        }
    }
    provider = "postgres";
    adapterName = name;
    config;
    externalPool;
    async connect() {
        const client = this.externalPool ?? new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].Pool(this.config);
        const onIdleClientError = (err)=>{
            debug(`Error from idle pool client: ${err.message} %O`, err);
            this.options?.onPoolError?.(err);
        };
        client.on("error", onIdleClientError);
        return new PrismaPgAdapter(client, this.options, async ()=>{
            if (this.externalPool) {
                if (this.options?.disposeExternalPool) {
                    await this.externalPool.end();
                    this.externalPool = null;
                } else {
                    this.externalPool.removeListener("error", onIdleClientError);
                }
            } else {
                await client.end();
            }
        });
    }
    async connectToShadowDb() {
        const conn = await this.connect();
        const database = `prisma_migrate_shadow_db_${globalThis.crypto.randomUUID()}`;
        await conn.executeScript(`CREATE DATABASE "${database}"`);
        const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].Pool({
            ...this.config,
            database
        });
        return new PrismaPgAdapter(client, void 0, async ()=>{
            await conn.executeScript(`DROP DATABASE "${database}"`);
            await client.end();
        });
    }
};
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@prisma/client-runtime-utils/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod2)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod2);
// src/index.ts
var index_exports = {};
__export(index_exports, {
    AnyNull: ()=>AnyNull,
    AnyNullClass: ()=>AnyNullClass,
    DbNull: ()=>DbNull,
    DbNullClass: ()=>DbNullClass,
    Decimal: ()=>Decimal,
    JsonNull: ()=>JsonNull,
    JsonNullClass: ()=>JsonNullClass,
    NullTypes: ()=>NullTypes,
    ObjectEnumValue: ()=>ObjectEnumValue,
    PrismaClientInitializationError: ()=>PrismaClientInitializationError,
    PrismaClientKnownRequestError: ()=>PrismaClientKnownRequestError,
    PrismaClientRustError: ()=>PrismaClientRustError,
    PrismaClientRustPanicError: ()=>PrismaClientRustPanicError,
    PrismaClientUnknownRequestError: ()=>PrismaClientUnknownRequestError,
    PrismaClientValidationError: ()=>PrismaClientValidationError,
    Sql: ()=>Sql,
    empty: ()=>empty,
    hasBatchIndex: ()=>hasBatchIndex,
    isAnyNull: ()=>isAnyNull,
    isDbNull: ()=>isDbNull,
    isJsonNull: ()=>isJsonNull,
    isObjectEnumValue: ()=>isObjectEnumValue,
    join: ()=>join,
    raw: ()=>raw,
    sql: ()=>sql
});
module.exports = __toCommonJS(index_exports);
// src/errors/ErrorWithBatchIndex.ts
function hasBatchIndex(value) {
    return typeof value["batchRequestIdx"] === "number";
}
// src/errors/setClassName.ts
function setClassName(classObject, name) {
    Object.defineProperty(classObject, "name", {
        value: name,
        configurable: true
    });
}
// src/errors/PrismaClientInitializationError.ts
var PrismaClientInitializationError = class _PrismaClientInitializationError extends Error {
    clientVersion;
    errorCode;
    retryable;
    constructor(message, clientVersion, errorCode){
        super(message);
        this.name = "PrismaClientInitializationError";
        this.clientVersion = clientVersion;
        this.errorCode = errorCode;
        Error.captureStackTrace(_PrismaClientInitializationError);
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
    }
};
setClassName(PrismaClientInitializationError, "PrismaClientInitializationError");
// src/errors/PrismaClientKnownRequestError.ts
var PrismaClientKnownRequestError = class extends Error {
    code;
    meta;
    clientVersion;
    batchRequestIdx;
    constructor(message, { code, clientVersion, meta, batchRequestIdx }){
        super(message);
        this.name = "PrismaClientKnownRequestError";
        this.code = code;
        this.clientVersion = clientVersion;
        this.meta = meta;
        Object.defineProperty(this, "batchRequestIdx", {
            value: batchRequestIdx,
            enumerable: false,
            writable: true
        });
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
    }
};
setClassName(PrismaClientKnownRequestError, "PrismaClientKnownRequestError");
// src/errors/log.ts
function getBacktrace(log3) {
    if (log3.fields?.message) {
        let str = log3.fields?.message;
        if (log3.fields?.file) {
            str += ` in ${log3.fields.file}`;
            if (log3.fields?.line) {
                str += `:${log3.fields.line}`;
            }
            if (log3.fields?.column) {
                str += `:${log3.fields.column}`;
            }
        }
        if (log3.fields?.reason) {
            str += `
${log3.fields?.reason}`;
        }
        return str;
    }
    return "Unknown error";
}
function isPanic(err) {
    return err.fields?.message === "PANIC";
}
// src/errors/PrismaClientRustError.ts
var PrismaClientRustError = class extends Error {
    clientVersion;
    _isPanic;
    constructor({ clientVersion, error }){
        const backtrace = getBacktrace(error);
        super(backtrace ?? "Unknown error");
        this._isPanic = isPanic(error);
        this.clientVersion = clientVersion;
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientRustError";
    }
    isPanic() {
        return this._isPanic;
    }
};
setClassName(PrismaClientRustError, "PrismaClientRustError");
// src/errors/PrismaClientRustPanicError.ts
var PrismaClientRustPanicError = class extends Error {
    clientVersion;
    constructor(message, clientVersion){
        super(message);
        this.name = "PrismaClientRustPanicError";
        this.clientVersion = clientVersion;
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
    }
};
setClassName(PrismaClientRustPanicError, "PrismaClientRustPanicError");
// src/errors/PrismaClientUnknownRequestError.ts
var PrismaClientUnknownRequestError = class extends Error {
    clientVersion;
    batchRequestIdx;
    constructor(message, { clientVersion, batchRequestIdx }){
        super(message);
        this.name = "PrismaClientUnknownRequestError";
        this.clientVersion = clientVersion;
        Object.defineProperty(this, "batchRequestIdx", {
            value: batchRequestIdx,
            writable: true,
            enumerable: false
        });
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
    }
};
setClassName(PrismaClientUnknownRequestError, "PrismaClientUnknownRequestError");
// src/errors/PrismaClientValidationError.ts
var PrismaClientValidationError = class extends Error {
    name = "PrismaClientValidationError";
    clientVersion;
    constructor(message, { clientVersion }){
        super(message);
        this.clientVersion = clientVersion;
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
    }
};
setClassName(PrismaClientValidationError, "PrismaClientValidationError");
// src/nullTypes.ts
var secret = Symbol();
var PRISMA_OBJECT_ENUM_VALUE = Symbol.for("prisma.objectEnumValue");
var ObjectEnumValue = class {
    [PRISMA_OBJECT_ENUM_VALUE] = true;
    #representation;
    constructor(arg){
        if (arg === secret) {
            this.#representation = `Prisma.${this._getName()}`;
        } else {
            this.#representation = `new Prisma.${this._getNamespace()}.${this._getName()}()`;
        }
    }
    _getName() {
        return this.constructor.name;
    }
    toString() {
        return this.#representation;
    }
};
function setClassName2(classObject, name) {
    Object.defineProperty(classObject, "name", {
        value: name,
        configurable: true
    });
}
var NullTypesEnumValue = class extends ObjectEnumValue {
    _getNamespace() {
        return "NullTypes";
    }
};
var DbNullClass = class extends NullTypesEnumValue {
    // Phantom private property to prevent structural type equality
    // eslint-disable-next-line no-unused-private-class-members
    #_brand_DbNull;
};
setClassName2(DbNullClass, "DbNull");
var JsonNullClass = class extends NullTypesEnumValue {
    // Phantom private property to prevent structural type equality
    // eslint-disable-next-line no-unused-private-class-members
    #_brand_JsonNull;
};
setClassName2(JsonNullClass, "JsonNull");
var AnyNullClass = class extends NullTypesEnumValue {
    // Phantom private property to prevent structural type equality
    // eslint-disable-next-line no-unused-private-class-members
    #_brand_AnyNull;
};
setClassName2(AnyNullClass, "AnyNull");
var NullTypes = {
    DbNull: DbNullClass,
    JsonNull: JsonNullClass,
    AnyNull: AnyNullClass
};
var DbNull = new DbNullClass(secret);
var JsonNull = new JsonNullClass(secret);
var AnyNull = new AnyNullClass(secret);
function isObjectEnumValue(value) {
    return typeof value === "object" && value !== null && value[PRISMA_OBJECT_ENUM_VALUE] === true;
}
function isDbNull(value) {
    return value === DbNull;
}
function isJsonNull(value) {
    return value === JsonNull;
}
function isAnyNull(value) {
    return value === AnyNull;
}
// ../../node_modules/.pnpm/decimal.js@10.5.0/node_modules/decimal.js/decimal.mjs
var EXP_LIMIT = 9e15;
var MAX_DIGITS = 1e9;
var NUMERALS = "0123456789abcdef";
var LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
var PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
var DEFAULTS = {
    // These values must be integers within the stated ranges (inclusive).
    // Most of these values can be changed at run-time using the `Decimal.config` method.
    // The maximum number of significant digits of the result of a calculation or base conversion.
    // E.g. `Decimal.config({ precision: 20 });`
    precision: 20,
    // 1 to MAX_DIGITS
    // The rounding mode used when rounding to `precision`.
    //
    // ROUND_UP         0 Away from zero.
    // ROUND_DOWN       1 Towards zero.
    // ROUND_CEIL       2 Towards +Infinity.
    // ROUND_FLOOR      3 Towards -Infinity.
    // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
    // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
    // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
    // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
    // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
    //
    // E.g.
    // `Decimal.rounding = 4;`
    // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
    rounding: 4,
    // 0 to 8
    // The modulo mode used when calculating the modulus: a mod n.
    // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
    // The remainder (r) is calculated as: r = a - n * q.
    //
    // UP         0 The remainder is positive if the dividend is negative, else is negative.
    // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
    // FLOOR      3 The remainder has the same sign as the divisor (Python %).
    // HALF_EVEN  6 The IEEE 754 remainder function.
    // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
    //
    // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
    // division (9) are commonly used for the modulus operation. The other rounding modes can also
    // be used, but they may not give useful results.
    modulo: 1,
    // 0 to 9
    // The exponent value at and beneath which `toString` returns exponential notation.
    // JavaScript numbers: -7
    toExpNeg: -7,
    // 0 to -EXP_LIMIT
    // The exponent value at and above which `toString` returns exponential notation.
    // JavaScript numbers: 21
    toExpPos: 21,
    // 0 to EXP_LIMIT
    // The minimum exponent value, beneath which underflow to zero occurs.
    // JavaScript numbers: -324  (5e-324)
    minE: -EXP_LIMIT,
    // -1 to -EXP_LIMIT
    // The maximum exponent value, above which overflow to Infinity occurs.
    // JavaScript numbers: 308  (1.7976931348623157e+308)
    maxE: EXP_LIMIT,
    // 1 to EXP_LIMIT
    // Whether to use cryptographically-secure random number generation, if available.
    crypto: false
};
var inexact;
var quadrant;
var external = true;
var decimalError = "[DecimalError] ";
var invalidArgument = decimalError + "Invalid argument: ";
var precisionLimitExceeded = decimalError + "Precision limit exceeded";
var cryptoUnavailable = decimalError + "crypto unavailable";
var tag = "[object Decimal]";
var mathfloor = Math.floor;
var mathpow = Math.pow;
var isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
var isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
var isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
var isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
var BASE = 1e7;
var LOG_BASE = 7;
var MAX_SAFE_INTEGER = 9007199254740991;
var LN10_PRECISION = LN10.length - 1;
var PI_PRECISION = PI.length - 1;
var P = {
    toStringTag: tag
};
P.absoluteValue = P.abs = function() {
    var x = new this.constructor(this);
    if (x.s < 0) x.s = 1;
    return finalise(x);
};
P.ceil = function() {
    return finalise(new this.constructor(this), this.e + 1, 2);
};
P.clampedTo = P.clamp = function(min2, max2) {
    var k, x = this, Ctor = x.constructor;
    min2 = new Ctor(min2);
    max2 = new Ctor(max2);
    if (!min2.s || !max2.s) return new Ctor(NaN);
    if (min2.gt(max2)) throw Error(invalidArgument + max2);
    k = x.cmp(min2);
    return k < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
};
P.comparedTo = P.cmp = function(y) {
    var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
    if (!xd || !yd) {
        return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
    }
    if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;
    if (xs !== ys) return xs;
    if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;
    xdL = xd.length;
    ydL = yd.length;
    for(i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i){
        if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
    }
    return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
};
P.cosine = P.cos = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.d) return new Ctor(NaN);
    if (!x.d[0]) return new Ctor(1);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;
    x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
};
P.cubeRoot = P.cbrt = function() {
    var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
    if (!x.isFinite() || x.isZero()) return new Ctor(x);
    external = false;
    s = x.s * mathpow(x.s * x, 1 / 3);
    if (!s || Math.abs(s) == 1 / 0) {
        n = digitsToString(x.d);
        e = x.e;
        if (s = (e - n.length + 1) % 3) n += s == 1 || s == -2 ? "0" : "00";
        s = mathpow(n, 1 / 3);
        e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
        if (s == 1 / 0) {
            n = "5e" + e;
        } else {
            n = s.toExponential();
            n = n.slice(0, n.indexOf("e") + 1) + e;
        }
        r = new Ctor(n);
        r.s = x.s;
    } else {
        r = new Ctor(s.toString());
    }
    sd = (e = Ctor.precision) + 3;
    for(;;){
        t = r;
        t3 = t.times(t).times(t);
        t3plusx = t3.plus(x);
        r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
            n = n.slice(sd - 3, sd + 1);
            if (n == "9999" || !rep && n == "4999") {
                if (!rep) {
                    finalise(t, e + 1, 0);
                    if (t.times(t).times(t).eq(x)) {
                        r = t;
                        break;
                    }
                }
                sd += 4;
                rep = 1;
            } else {
                if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
                    finalise(r, e + 1, 1);
                    m = !r.times(r).times(r).eq(x);
                }
                break;
            }
        }
    }
    external = true;
    return finalise(r, e, Ctor.rounding, m);
};
P.decimalPlaces = P.dp = function() {
    var w, d = this.d, n = NaN;
    if (d) {
        w = d.length - 1;
        n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
        w = d[w];
        if (w) for(; w % 10 == 0; w /= 10)n--;
        if (n < 0) n = 0;
    }
    return n;
};
P.dividedBy = P.div = function(y) {
    return divide(this, new this.constructor(y));
};
P.dividedToIntegerBy = P.divToInt = function(y) {
    var x = this, Ctor = x.constructor;
    return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
};
P.equals = P.eq = function(y) {
    return this.cmp(y) === 0;
};
P.floor = function() {
    return finalise(new this.constructor(this), this.e + 1, 3);
};
P.greaterThan = P.gt = function(y) {
    return this.cmp(y) > 0;
};
P.greaterThanOrEqualTo = P.gte = function(y) {
    var k = this.cmp(y);
    return k == 1 || k === 0;
};
P.hyperbolicCosine = P.cosh = function() {
    var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
    if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
    if (x.isZero()) return one;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;
    if (len < 32) {
        k = Math.ceil(len / 3);
        n = (1 / tinyPow(4, k)).toString();
    } else {
        k = 16;
        n = "2.3283064365386962890625e-10";
    }
    x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
    var cosh2_x, i = k, d8 = new Ctor(8);
    for(; i--;){
        cosh2_x = x.times(x);
        x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
    }
    return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.hyperbolicSine = P.sinh = function() {
    var k, pr, rm, len, x = this, Ctor = x.constructor;
    if (!x.isFinite() || x.isZero()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;
    if (len < 3) {
        x = taylorSeries(Ctor, 2, x, x, true);
    } else {
        k = 1.4 * Math.sqrt(len);
        k = k > 16 ? 16 : k | 0;
        x = x.times(1 / tinyPow(5, k));
        x = taylorSeries(Ctor, 2, x, x, true);
        var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
        for(; k--;){
            sinh2_x = x.times(x);
            x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
        }
    }
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(x, pr, rm, true);
};
P.hyperbolicTangent = P.tanh = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite()) return new Ctor(x.s);
    if (x.isZero()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 7;
    Ctor.rounding = 1;
    return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
};
P.inverseCosine = P.acos = function() {
    var x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
    if (k !== -1) {
        return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
    }
    if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);
    Ctor.precision = pr + 6;
    Ctor.rounding = 1;
    x = new Ctor(1).minus(x).div(x.plus(1)).sqrt().atan();
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.times(2);
};
P.inverseHyperbolicCosine = P.acosh = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
    if (!x.isFinite()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
    Ctor.rounding = 1;
    external = false;
    x = x.times(x).minus(1).sqrt().plus(x);
    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.ln();
};
P.inverseHyperbolicSine = P.asinh = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite() || x.isZero()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
    Ctor.rounding = 1;
    external = false;
    x = x.times(x).plus(1).sqrt().plus(x);
    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.ln();
};
P.inverseHyperbolicTangent = P.atanh = function() {
    var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
    if (!x.isFinite()) return new Ctor(NaN);
    if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    xsd = x.sd();
    if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);
    Ctor.precision = wpr = xsd - x.e;
    x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
    Ctor.precision = pr + 4;
    Ctor.rounding = 1;
    x = x.ln();
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.times(0.5);
};
P.inverseSine = P.asin = function() {
    var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
    if (x.isZero()) return new Ctor(x);
    k = x.abs().cmp(1);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (k !== -1) {
        if (k === 0) {
            halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
            halfPi.s = x.s;
            return halfPi;
        }
        return new Ctor(NaN);
    }
    Ctor.precision = pr + 6;
    Ctor.rounding = 1;
    x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.times(2);
};
P.inverseTangent = P.atan = function() {
    var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
    if (!x.isFinite()) {
        if (!x.s) return new Ctor(NaN);
        if (pr + 4 <= PI_PRECISION) {
            r = getPi(Ctor, pr + 4, rm).times(0.5);
            r.s = x.s;
            return r;
        }
    } else if (x.isZero()) {
        return new Ctor(x);
    } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
        r = getPi(Ctor, pr + 4, rm).times(0.25);
        r.s = x.s;
        return r;
    }
    Ctor.precision = wpr = pr + 10;
    Ctor.rounding = 1;
    k = Math.min(28, wpr / LOG_BASE + 2 | 0);
    for(i = k; i; --i)x = x.div(x.times(x).plus(1).sqrt().plus(1));
    external = false;
    j = Math.ceil(wpr / LOG_BASE);
    n = 1;
    x2 = x.times(x);
    r = new Ctor(x);
    px = x;
    for(; i !== -1;){
        px = px.times(x2);
        t = r.minus(px.div(n += 2));
        px = px.times(x2);
        r = t.plus(px.div(n += 2));
        if (r.d[j] !== void 0) for(i = j; r.d[i] === t.d[i] && i--;);
    }
    if (k) r = r.times(2 << k - 1);
    external = true;
    return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.isFinite = function() {
    return !!this.d;
};
P.isInteger = P.isInt = function() {
    return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
};
P.isNaN = function() {
    return !this.s;
};
P.isNegative = P.isNeg = function() {
    return this.s < 0;
};
P.isPositive = P.isPos = function() {
    return this.s > 0;
};
P.isZero = function() {
    return !!this.d && this.d[0] === 0;
};
P.lessThan = P.lt = function(y) {
    return this.cmp(y) < 0;
};
P.lessThanOrEqualTo = P.lte = function(y) {
    return this.cmp(y) < 1;
};
P.logarithm = P.log = function(base) {
    var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
    if (base == null) {
        base = new Ctor(10);
        isBase10 = true;
    } else {
        base = new Ctor(base);
        d = base.d;
        if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);
        isBase10 = base.eq(10);
    }
    d = arg.d;
    if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
        return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
    }
    if (isBase10) {
        if (d.length > 1) {
            inf = true;
        } else {
            for(k = d[0]; k % 10 === 0;)k /= 10;
            inf = k !== 1;
        }
    }
    external = false;
    sd = pr + guard;
    num = naturalLogarithm(arg, sd);
    denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
    r = divide(num, denominator, sd, 1);
    if (checkRoundingDigits(r.d, k = pr, rm)) {
        do {
            sd += 10;
            num = naturalLogarithm(arg, sd);
            denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
            r = divide(num, denominator, sd, 1);
            if (!inf) {
                if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
                    r = finalise(r, pr + 1, 0);
                }
                break;
            }
        }while (checkRoundingDigits(r.d, k += 10, rm))
    }
    external = true;
    return finalise(r, pr, rm);
};
P.minus = P.sub = function(y) {
    var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
    y = new Ctor(y);
    if (!x.d || !y.d) {
        if (!x.s || !y.s) y = new Ctor(NaN);
        else if (x.d) y.s = -y.s;
        else y = new Ctor(y.d || x.s !== y.s ? x : NaN);
        return y;
    }
    if (x.s != y.s) {
        y.s = -y.s;
        return x.plus(y);
    }
    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (!xd[0] || !yd[0]) {
        if (yd[0]) y.s = -y.s;
        else if (xd[0]) y = new Ctor(x);
        else return new Ctor(rm === 3 ? -0 : 0);
        return external ? finalise(y, pr, rm) : y;
    }
    e = mathfloor(y.e / LOG_BASE);
    xe = mathfloor(x.e / LOG_BASE);
    xd = xd.slice();
    k = xe - e;
    if (k) {
        xLTy = k < 0;
        if (xLTy) {
            d = xd;
            k = -k;
            len = yd.length;
        } else {
            d = yd;
            e = xe;
            len = xd.length;
        }
        i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
        if (k > i) {
            k = i;
            d.length = 1;
        }
        d.reverse();
        for(i = k; i--;)d.push(0);
        d.reverse();
    } else {
        i = xd.length;
        len = yd.length;
        xLTy = i < len;
        if (xLTy) len = i;
        for(i = 0; i < len; i++){
            if (xd[i] != yd[i]) {
                xLTy = xd[i] < yd[i];
                break;
            }
        }
        k = 0;
    }
    if (xLTy) {
        d = xd;
        xd = yd;
        yd = d;
        y.s = -y.s;
    }
    len = xd.length;
    for(i = yd.length - len; i > 0; --i)xd[len++] = 0;
    for(i = yd.length; i > k;){
        if (xd[--i] < yd[i]) {
            for(j = i; j && xd[--j] === 0;)xd[j] = BASE - 1;
            --xd[j];
            xd[i] += BASE;
        }
        xd[i] -= yd[i];
    }
    for(; xd[--len] === 0;)xd.pop();
    for(; xd[0] === 0; xd.shift())--e;
    if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);
    y.d = xd;
    y.e = getBase10Exponent(xd, e);
    return external ? finalise(y, pr, rm) : y;
};
P.modulo = P.mod = function(y) {
    var q, x = this, Ctor = x.constructor;
    y = new Ctor(y);
    if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);
    if (!y.d || x.d && !x.d[0]) {
        return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
    }
    external = false;
    if (Ctor.modulo == 9) {
        q = divide(x, y.abs(), 0, 3, 1);
        q.s *= y.s;
    } else {
        q = divide(x, y, 0, Ctor.modulo, 1);
    }
    q = q.times(y);
    external = true;
    return x.minus(q);
};
P.naturalExponential = P.exp = function() {
    return naturalExponential(this);
};
P.naturalLogarithm = P.ln = function() {
    return naturalLogarithm(this);
};
P.negated = P.neg = function() {
    var x = new this.constructor(this);
    x.s = -x.s;
    return finalise(x);
};
P.plus = P.add = function(y) {
    var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
    y = new Ctor(y);
    if (!x.d || !y.d) {
        if (!x.s || !y.s) y = new Ctor(NaN);
        else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);
        return y;
    }
    if (x.s != y.s) {
        y.s = -y.s;
        return x.minus(y);
    }
    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (!xd[0] || !yd[0]) {
        if (!yd[0]) y = new Ctor(x);
        return external ? finalise(y, pr, rm) : y;
    }
    k = mathfloor(x.e / LOG_BASE);
    e = mathfloor(y.e / LOG_BASE);
    xd = xd.slice();
    i = k - e;
    if (i) {
        if (i < 0) {
            d = xd;
            i = -i;
            len = yd.length;
        } else {
            d = yd;
            e = k;
            len = xd.length;
        }
        k = Math.ceil(pr / LOG_BASE);
        len = k > len ? k + 1 : len + 1;
        if (i > len) {
            i = len;
            d.length = 1;
        }
        d.reverse();
        for(; i--;)d.push(0);
        d.reverse();
    }
    len = xd.length;
    i = yd.length;
    if (len - i < 0) {
        i = len;
        d = yd;
        yd = xd;
        xd = d;
    }
    for(carry = 0; i;){
        carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
        xd[i] %= BASE;
    }
    if (carry) {
        xd.unshift(carry);
        ++e;
    }
    for(len = xd.length; xd[--len] == 0;)xd.pop();
    y.d = xd;
    y.e = getBase10Exponent(xd, e);
    return external ? finalise(y, pr, rm) : y;
};
P.precision = P.sd = function(z) {
    var k, x = this;
    if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
    if (x.d) {
        k = getPrecision(x.d);
        if (z && x.e + 1 > k) k = x.e + 1;
    } else {
        k = NaN;
    }
    return k;
};
P.round = function() {
    var x = this, Ctor = x.constructor;
    return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
};
P.sine = P.sin = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite()) return new Ctor(NaN);
    if (x.isZero()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;
    x = sine(Ctor, toLessThanHalfPi(Ctor, x));
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
};
P.squareRoot = P.sqrt = function() {
    var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
    if (s !== 1 || !d || !d[0]) {
        return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
    }
    external = false;
    s = Math.sqrt(+x);
    if (s == 0 || s == 1 / 0) {
        n = digitsToString(d);
        if ((n.length + e) % 2 == 0) n += "0";
        s = Math.sqrt(n);
        e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
        if (s == 1 / 0) {
            n = "5e" + e;
        } else {
            n = s.toExponential();
            n = n.slice(0, n.indexOf("e") + 1) + e;
        }
        r = new Ctor(n);
    } else {
        r = new Ctor(s.toString());
    }
    sd = (e = Ctor.precision) + 3;
    for(;;){
        t = r;
        r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
            n = n.slice(sd - 3, sd + 1);
            if (n == "9999" || !rep && n == "4999") {
                if (!rep) {
                    finalise(t, e + 1, 0);
                    if (t.times(t).eq(x)) {
                        r = t;
                        break;
                    }
                }
                sd += 4;
                rep = 1;
            } else {
                if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
                    finalise(r, e + 1, 1);
                    m = !r.times(r).eq(x);
                }
                break;
            }
        }
    }
    external = true;
    return finalise(r, e, Ctor.rounding, m);
};
P.tangent = P.tan = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite()) return new Ctor(NaN);
    if (x.isZero()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 10;
    Ctor.rounding = 1;
    x = x.sin();
    x.s = 1;
    x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
};
P.times = P.mul = function(y) {
    var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
    y.s *= x.s;
    if (!xd || !xd[0] || !yd || !yd[0]) {
        return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
    }
    e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
    xdL = xd.length;
    ydL = yd.length;
    if (xdL < ydL) {
        r = xd;
        xd = yd;
        yd = r;
        rL = xdL;
        xdL = ydL;
        ydL = rL;
    }
    r = [];
    rL = xdL + ydL;
    for(i = rL; i--;)r.push(0);
    for(i = ydL; --i >= 0;){
        carry = 0;
        for(k = xdL + i; k > i;){
            t = r[k] + yd[i] * xd[k - i - 1] + carry;
            r[k--] = t % BASE | 0;
            carry = t / BASE | 0;
        }
        r[k] = (r[k] + carry) % BASE | 0;
    }
    for(; !r[--rL];)r.pop();
    if (carry) ++e;
    else r.shift();
    y.d = r;
    y.e = getBase10Exponent(r, e);
    return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
};
P.toBinary = function(sd, rm) {
    return toStringBinary(this, 2, sd, rm);
};
P.toDecimalPlaces = P.toDP = function(dp, rm) {
    var x = this, Ctor = x.constructor;
    x = new Ctor(x);
    if (dp === void 0) return x;
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    return finalise(x, dp + x.e + 1, rm);
};
P.toExponential = function(dp, rm) {
    var str, x = this, Ctor = x.constructor;
    if (dp === void 0) {
        str = finiteToString(x, true);
    } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        x = finalise(new Ctor(x), dp + 1, rm);
        str = finiteToString(x, true, dp + 1);
    }
    return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFixed = function(dp, rm) {
    var str, y, x = this, Ctor = x.constructor;
    if (dp === void 0) {
        str = finiteToString(x);
    } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        y = finalise(new Ctor(x), dp + x.e + 1, rm);
        str = finiteToString(y, false, dp + y.e + 1);
    }
    return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFraction = function(maxD) {
    var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
    if (!xd) return new Ctor(x);
    n1 = d0 = new Ctor(1);
    d1 = n0 = new Ctor(0);
    d = new Ctor(d1);
    e = d.e = getPrecision(xd) - x.e - 1;
    k = e % LOG_BASE;
    d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
    if (maxD == null) {
        maxD = e > 0 ? d : n1;
    } else {
        n = new Ctor(maxD);
        if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
        maxD = n.gt(d) ? e > 0 ? d : n1 : n;
    }
    external = false;
    n = new Ctor(digitsToString(xd));
    pr = Ctor.precision;
    Ctor.precision = e = xd.length * LOG_BASE * 2;
    for(;;){
        q = divide(n, d, 0, 1, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.cmp(maxD) == 1) break;
        d0 = d1;
        d1 = d2;
        d2 = n1;
        n1 = n0.plus(q.times(d2));
        n0 = d2;
        d2 = d;
        d = n.minus(q.times(d2));
        n = d2;
    }
    d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;
    r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [
        n1,
        d1
    ] : [
        n0,
        d0
    ];
    Ctor.precision = pr;
    external = true;
    return r;
};
P.toHexadecimal = P.toHex = function(sd, rm) {
    return toStringBinary(this, 16, sd, rm);
};
P.toNearest = function(y, rm) {
    var x = this, Ctor = x.constructor;
    x = new Ctor(x);
    if (y == null) {
        if (!x.d) return x;
        y = new Ctor(1);
        rm = Ctor.rounding;
    } else {
        y = new Ctor(y);
        if (rm === void 0) {
            rm = Ctor.rounding;
        } else {
            checkInt32(rm, 0, 8);
        }
        if (!x.d) return y.s ? x : y;
        if (!y.d) {
            if (y.s) y.s = x.s;
            return y;
        }
    }
    if (y.d[0]) {
        external = false;
        x = divide(x, y, 0, rm, 1).times(y);
        external = true;
        finalise(x);
    } else {
        y.s = x.s;
        x = y;
    }
    return x;
};
P.toNumber = function() {
    return +this;
};
P.toOctal = function(sd, rm) {
    return toStringBinary(this, 8, sd, rm);
};
P.toPower = P.pow = function(y) {
    var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
    if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));
    x = new Ctor(x);
    if (x.eq(1)) return x;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (y.eq(1)) return finalise(x, pr, rm);
    e = mathfloor(y.e / LOG_BASE);
    if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
        r = intPow(Ctor, x, k, pr);
        return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
    }
    s = x.s;
    if (s < 0) {
        if (e < y.d.length - 1) return new Ctor(NaN);
        if ((y.d[e] & 1) == 0) s = 1;
        if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
            x.s = s;
            return x;
        }
    }
    k = mathpow(+x, yn);
    e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
    if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);
    external = false;
    Ctor.rounding = x.s = 1;
    k = Math.min(12, (e + "").length);
    r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
    if (r.d) {
        r = finalise(r, pr + 5, 1);
        if (checkRoundingDigits(r.d, pr, rm)) {
            e = pr + 10;
            r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
            if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
                r = finalise(r, pr + 1, 0);
            }
        }
    }
    r.s = s;
    external = true;
    Ctor.rounding = rm;
    return finalise(r, pr, rm);
};
P.toPrecision = function(sd, rm) {
    var str, x = this, Ctor = x.constructor;
    if (sd === void 0) {
        str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        x = finalise(new Ctor(x), sd, rm);
        str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
    }
    return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toSignificantDigits = P.toSD = function(sd, rm) {
    var x = this, Ctor = x.constructor;
    if (sd === void 0) {
        sd = Ctor.precision;
        rm = Ctor.rounding;
    } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
    }
    return finalise(new Ctor(x), sd, rm);
};
P.toString = function() {
    var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.truncated = P.trunc = function() {
    return finalise(new this.constructor(this), this.e + 1, 1);
};
P.valueOf = P.toJSON = function() {
    var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    return x.isNeg() ? "-" + str : str;
};
function digitsToString(d) {
    var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
    if (indexOfLastWord > 0) {
        str += w;
        for(i = 1; i < indexOfLastWord; i++){
            ws = d[i] + "";
            k = LOG_BASE - ws.length;
            if (k) str += getZeroString(k);
            str += ws;
        }
        w = d[i];
        ws = w + "";
        k = LOG_BASE - ws.length;
        if (k) str += getZeroString(k);
    } else if (w === 0) {
        return "0";
    }
    for(; w % 10 === 0;)w /= 10;
    return str + w;
}
function checkInt32(i, min2, max2) {
    if (i !== ~~i || i < min2 || i > max2) {
        throw Error(invalidArgument + i);
    }
}
function checkRoundingDigits(d, i, rm, repeating) {
    var di, k, r, rd;
    for(k = d[0]; k >= 10; k /= 10)--i;
    if (--i < 0) {
        i += LOG_BASE;
        di = 0;
    } else {
        di = Math.ceil((i + 1) / LOG_BASE);
        i %= LOG_BASE;
    }
    k = mathpow(10, LOG_BASE - i);
    rd = d[di] % k | 0;
    if (repeating == null) {
        if (i < 3) {
            if (i == 0) rd = rd / 100 | 0;
            else if (i == 1) rd = rd / 10 | 0;
            r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
        } else {
            r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
        }
    } else {
        if (i < 4) {
            if (i == 0) rd = rd / 1e3 | 0;
            else if (i == 1) rd = rd / 100 | 0;
            else if (i == 2) rd = rd / 10 | 0;
            r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
        } else {
            r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1;
        }
    }
    return r;
}
function convertBase(str, baseIn, baseOut) {
    var j, arr = [
        0
    ], arrL, i = 0, strL = str.length;
    for(; i < strL;){
        for(arrL = arr.length; arrL--;)arr[arrL] *= baseIn;
        arr[0] += NUMERALS.indexOf(str.charAt(i++));
        for(j = 0; j < arr.length; j++){
            if (arr[j] > baseOut - 1) {
                if (arr[j + 1] === void 0) arr[j + 1] = 0;
                arr[j + 1] += arr[j] / baseOut | 0;
                arr[j] %= baseOut;
            }
        }
    }
    return arr.reverse();
}
function cosine(Ctor, x) {
    var k, len, y;
    if (x.isZero()) return x;
    len = x.d.length;
    if (len < 32) {
        k = Math.ceil(len / 3);
        y = (1 / tinyPow(4, k)).toString();
    } else {
        k = 16;
        y = "2.3283064365386962890625e-10";
    }
    Ctor.precision += k;
    x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
    for(var i = k; i--;){
        var cos2x = x.times(x);
        x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
    }
    Ctor.precision -= k;
    return x;
}
var divide = /* @__PURE__ */ function() {
    function multiplyInteger(x, k, base) {
        var temp, carry = 0, i = x.length;
        for(x = x.slice(); i--;){
            temp = x[i] * k + carry;
            x[i] = temp % base | 0;
            carry = temp / base | 0;
        }
        if (carry) x.unshift(carry);
        return x;
    }
    function compare(a, b, aL, bL) {
        var i, r;
        if (aL != bL) {
            r = aL > bL ? 1 : -1;
        } else {
            for(i = r = 0; i < aL; i++){
                if (a[i] != b[i]) {
                    r = a[i] > b[i] ? 1 : -1;
                    break;
                }
            }
        }
        return r;
    }
    function subtract(a, b, aL, base) {
        var i = 0;
        for(; aL--;){
            a[aL] -= i;
            i = a[aL] < b[aL] ? 1 : 0;
            a[aL] = i * base + a[aL] - b[aL];
        }
        for(; !a[0] && a.length > 1;)a.shift();
    }
    return function(x, y, pr, rm, dp, base) {
        var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign2 = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
        if (!xd || !xd[0] || !yd || !yd[0]) {
            return new Ctor(// Return NaN if either NaN, or both Infinity or 0.
            !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
            xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0);
        }
        if (base) {
            logBase = 1;
            e = x.e - y.e;
        } else {
            base = BASE;
            logBase = LOG_BASE;
            e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
        }
        yL = yd.length;
        xL = xd.length;
        q = new Ctor(sign2);
        qd = q.d = [];
        for(i = 0; yd[i] == (xd[i] || 0); i++);
        if (yd[i] > (xd[i] || 0)) e--;
        if (pr == null) {
            sd = pr = Ctor.precision;
            rm = Ctor.rounding;
        } else if (dp) {
            sd = pr + (x.e - y.e) + 1;
        } else {
            sd = pr;
        }
        if (sd < 0) {
            qd.push(1);
            more = true;
        } else {
            sd = sd / logBase + 2 | 0;
            i = 0;
            if (yL == 1) {
                k = 0;
                yd = yd[0];
                sd++;
                for(; (i < xL || k) && sd--; i++){
                    t = k * base + (xd[i] || 0);
                    qd[i] = t / yd | 0;
                    k = t % yd | 0;
                }
                more = k || i < xL;
            } else {
                k = base / (yd[0] + 1) | 0;
                if (k > 1) {
                    yd = multiplyInteger(yd, k, base);
                    xd = multiplyInteger(xd, k, base);
                    yL = yd.length;
                    xL = xd.length;
                }
                xi = yL;
                rem = xd.slice(0, yL);
                remL = rem.length;
                for(; remL < yL;)rem[remL++] = 0;
                yz = yd.slice();
                yz.unshift(0);
                yd0 = yd[0];
                if (yd[1] >= base / 2) ++yd0;
                do {
                    k = 0;
                    cmp = compare(yd, rem, yL, remL);
                    if (cmp < 0) {
                        rem0 = rem[0];
                        if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                        k = rem0 / yd0 | 0;
                        if (k > 1) {
                            if (k >= base) k = base - 1;
                            prod = multiplyInteger(yd, k, base);
                            prodL = prod.length;
                            remL = rem.length;
                            cmp = compare(prod, rem, prodL, remL);
                            if (cmp == 1) {
                                k--;
                                subtract(prod, yL < prodL ? yz : yd, prodL, base);
                            }
                        } else {
                            if (k == 0) cmp = k = 1;
                            prod = yd.slice();
                        }
                        prodL = prod.length;
                        if (prodL < remL) prod.unshift(0);
                        subtract(rem, prod, remL, base);
                        if (cmp == -1) {
                            remL = rem.length;
                            cmp = compare(yd, rem, yL, remL);
                            if (cmp < 1) {
                                k++;
                                subtract(rem, yL < remL ? yz : yd, remL, base);
                            }
                        }
                        remL = rem.length;
                    } else if (cmp === 0) {
                        k++;
                        rem = [
                            0
                        ];
                    }
                    qd[i++] = k;
                    if (cmp && rem[0]) {
                        rem[remL++] = xd[xi] || 0;
                    } else {
                        rem = [
                            xd[xi]
                        ];
                        remL = 1;
                    }
                }while ((xi++ < xL || rem[0] !== void 0) && sd--)
                more = rem[0] !== void 0;
            }
            if (!qd[0]) qd.shift();
        }
        if (logBase == 1) {
            q.e = e;
            inexact = more;
        } else {
            for(i = 1, k = qd[0]; k >= 10; k /= 10)i++;
            q.e = i + e * logBase - 1;
            finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
        }
        return q;
    };
}();
function finalise(x, sd, rm, isTruncated) {
    var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
    out: if (sd != null) {
        xd = x.d;
        if (!xd) return x;
        for(digits = 1, k = xd[0]; k >= 10; k /= 10)digits++;
        i = sd - digits;
        if (i < 0) {
            i += LOG_BASE;
            j = sd;
            w = xd[xdi = 0];
            rd = w / mathpow(10, digits - j - 1) % 10 | 0;
        } else {
            xdi = Math.ceil((i + 1) / LOG_BASE);
            k = xd.length;
            if (xdi >= k) {
                if (isTruncated) {
                    for(; k++ <= xdi;)xd.push(0);
                    w = rd = 0;
                    digits = 1;
                    i %= LOG_BASE;
                    j = i - LOG_BASE + 1;
                } else {
                    break out;
                }
            } else {
                w = k = xd[xdi];
                for(digits = 1; k >= 10; k /= 10)digits++;
                i %= LOG_BASE;
                j = i - LOG_BASE + digits;
                rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
            }
        }
        isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
        roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
        if (sd < 1 || !xd[0]) {
            xd.length = 0;
            if (roundUp) {
                sd -= x.e + 1;
                xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
                x.e = -sd || 0;
            } else {
                xd[0] = x.e = 0;
            }
            return x;
        }
        if (i == 0) {
            xd.length = xdi;
            k = 1;
            xdi--;
        } else {
            xd.length = xdi + 1;
            k = mathpow(10, LOG_BASE - i);
            xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
        }
        if (roundUp) {
            for(;;){
                if (xdi == 0) {
                    for(i = 1, j = xd[0]; j >= 10; j /= 10)i++;
                    j = xd[0] += k;
                    for(k = 1; j >= 10; j /= 10)k++;
                    if (i != k) {
                        x.e++;
                        if (xd[0] == BASE) xd[0] = 1;
                    }
                    break;
                } else {
                    xd[xdi] += k;
                    if (xd[xdi] != BASE) break;
                    xd[xdi--] = 0;
                    k = 1;
                }
            }
        }
        for(i = xd.length; xd[--i] === 0;)xd.pop();
    }
    if (external) {
        if (x.e > Ctor.maxE) {
            x.d = null;
            x.e = NaN;
        } else if (x.e < Ctor.minE) {
            x.e = 0;
            x.d = [
                0
            ];
        }
    }
    return x;
}
function finiteToString(x, isExp, sd) {
    if (!x.isFinite()) return nonFiniteToString(x);
    var k, e = x.e, str = digitsToString(x.d), len = str.length;
    if (isExp) {
        if (sd && (k = sd - len) > 0) {
            str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
        } else if (len > 1) {
            str = str.charAt(0) + "." + str.slice(1);
        }
        str = str + (x.e < 0 ? "e" : "e+") + x.e;
    } else if (e < 0) {
        str = "0." + getZeroString(-e - 1) + str;
        if (sd && (k = sd - len) > 0) str += getZeroString(k);
    } else if (e >= len) {
        str += getZeroString(e + 1 - len);
        if (sd && (k = sd - e - 1) > 0) str = str + "." + getZeroString(k);
    } else {
        if ((k = e + 1) < len) str = str.slice(0, k) + "." + str.slice(k);
        if (sd && (k = sd - len) > 0) {
            if (e + 1 === len) str += ".";
            str += getZeroString(k);
        }
    }
    return str;
}
function getBase10Exponent(digits, e) {
    var w = digits[0];
    for(e *= LOG_BASE; w >= 10; w /= 10)e++;
    return e;
}
function getLn10(Ctor, sd, pr) {
    if (sd > LN10_PRECISION) {
        external = true;
        if (pr) Ctor.precision = pr;
        throw Error(precisionLimitExceeded);
    }
    return finalise(new Ctor(LN10), sd, 1, true);
}
function getPi(Ctor, sd, rm) {
    if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
    return finalise(new Ctor(PI), sd, rm, true);
}
function getPrecision(digits) {
    var w = digits.length - 1, len = w * LOG_BASE + 1;
    w = digits[w];
    if (w) {
        for(; w % 10 == 0; w /= 10)len--;
        for(w = digits[0]; w >= 10; w /= 10)len++;
    }
    return len;
}
function getZeroString(k) {
    var zs = "";
    for(; k--;)zs += "0";
    return zs;
}
function intPow(Ctor, x, n, pr) {
    var isTruncated, r = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
    external = false;
    for(;;){
        if (n % 2) {
            r = r.times(x);
            if (truncate(r.d, k)) isTruncated = true;
        }
        n = mathfloor(n / 2);
        if (n === 0) {
            n = r.d.length - 1;
            if (isTruncated && r.d[n] === 0) ++r.d[n];
            break;
        }
        x = x.times(x);
        truncate(x.d, k);
    }
    external = true;
    return r;
}
function isOdd(n) {
    return n.d[n.d.length - 1] & 1;
}
function maxOrMin(Ctor, args, n) {
    var k, y, x = new Ctor(args[0]), i = 0;
    for(; ++i < args.length;){
        y = new Ctor(args[i]);
        if (!y.s) {
            x = y;
            break;
        }
        k = x.cmp(y);
        if (k === n || k === 0 && x.s === n) {
            x = y;
        }
    }
    return x;
}
function naturalExponential(x, sd) {
    var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
    if (!x.d || !x.d[0] || x.e > 17) {
        return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
    }
    if (sd == null) {
        external = false;
        wpr = pr;
    } else {
        wpr = sd;
    }
    t = new Ctor(0.03125);
    while(x.e > -2){
        x = x.times(t);
        k += 5;
    }
    guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
    wpr += guard;
    denominator = pow2 = sum2 = new Ctor(1);
    Ctor.precision = wpr;
    for(;;){
        pow2 = finalise(pow2.times(x), wpr, 1);
        denominator = denominator.times(++i);
        t = sum2.plus(divide(pow2, denominator, wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
            j = k;
            while(j--)sum2 = finalise(sum2.times(sum2), wpr, 1);
            if (sd == null) {
                if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
                    Ctor.precision = wpr += 10;
                    denominator = pow2 = t = new Ctor(1);
                    i = 0;
                    rep++;
                } else {
                    return finalise(sum2, Ctor.precision = pr, rm, external = true);
                }
            } else {
                Ctor.precision = pr;
                return sum2;
            }
        }
        sum2 = t;
    }
}
function naturalLogarithm(y, sd) {
    var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
    if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
        return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
    }
    if (sd == null) {
        external = false;
        wpr = pr;
    } else {
        wpr = sd;
    }
    Ctor.precision = wpr += guard;
    c = digitsToString(xd);
    c0 = c.charAt(0);
    if (Math.abs(e = x.e) < 15e14) {
        while(c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3){
            x = x.times(y);
            c = digitsToString(x.d);
            c0 = c.charAt(0);
            n++;
        }
        e = x.e;
        if (c0 > 1) {
            x = new Ctor("0." + c);
            e++;
        } else {
            x = new Ctor(c0 + "." + c.slice(1));
        }
    } else {
        t = getLn10(Ctor, wpr + 2, pr).times(e + "");
        x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
        Ctor.precision = pr;
        return sd == null ? finalise(x, pr, rm, external = true) : x;
    }
    x1 = x;
    sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
    x2 = finalise(x.times(x), wpr, 1);
    denominator = 3;
    for(;;){
        numerator = finalise(numerator.times(x2), wpr, 1);
        t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
            sum2 = sum2.times(2);
            if (e !== 0) sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
            sum2 = divide(sum2, new Ctor(n), wpr, 1);
            if (sd == null) {
                if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
                    Ctor.precision = wpr += guard;
                    t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
                    x2 = finalise(x.times(x), wpr, 1);
                    denominator = rep = 1;
                } else {
                    return finalise(sum2, Ctor.precision = pr, rm, external = true);
                }
            } else {
                Ctor.precision = pr;
                return sum2;
            }
        }
        sum2 = t;
        denominator += 2;
    }
}
function nonFiniteToString(x) {
    return String(x.s * x.s / 0);
}
function parseDecimal(x, str) {
    var e, i, len;
    if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
    if ((i = str.search(/e/i)) > 0) {
        if (e < 0) e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
    } else if (e < 0) {
        e = str.length;
    }
    for(i = 0; str.charCodeAt(i) === 48; i++);
    for(len = str.length; str.charCodeAt(len - 1) === 48; --len);
    str = str.slice(i, len);
    if (str) {
        len -= i;
        x.e = e = e - i - 1;
        x.d = [];
        i = (e + 1) % LOG_BASE;
        if (e < 0) i += LOG_BASE;
        if (i < len) {
            if (i) x.d.push(+str.slice(0, i));
            for(len -= LOG_BASE; i < len;)x.d.push(+str.slice(i, i += LOG_BASE));
            str = str.slice(i);
            i = LOG_BASE - str.length;
        } else {
            i -= len;
        }
        for(; i--;)str += "0";
        x.d.push(+str);
        if (external) {
            if (x.e > x.constructor.maxE) {
                x.d = null;
                x.e = NaN;
            } else if (x.e < x.constructor.minE) {
                x.e = 0;
                x.d = [
                    0
                ];
            }
        }
    } else {
        x.e = 0;
        x.d = [
            0
        ];
    }
    return x;
}
function parseOther(x, str) {
    var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
    if (str.indexOf("_") > -1) {
        str = str.replace(/(\d)_(?=\d)/g, "$1");
        if (isDecimal.test(str)) return parseDecimal(x, str);
    } else if (str === "Infinity" || str === "NaN") {
        if (!+str) x.s = NaN;
        x.e = NaN;
        x.d = null;
        return x;
    }
    if (isHex.test(str)) {
        base = 16;
        str = str.toLowerCase();
    } else if (isBinary.test(str)) {
        base = 2;
    } else if (isOctal.test(str)) {
        base = 8;
    } else {
        throw Error(invalidArgument + str);
    }
    i = str.search(/p/i);
    if (i > 0) {
        p = +str.slice(i + 1);
        str = str.substring(2, i);
    } else {
        str = str.slice(2);
    }
    i = str.indexOf(".");
    isFloat = i >= 0;
    Ctor = x.constructor;
    if (isFloat) {
        str = str.replace(".", "");
        len = str.length;
        i = len - i;
        divisor = intPow(Ctor, new Ctor(base), i, i * 2);
    }
    xd = convertBase(str, base, BASE);
    xe = xd.length - 1;
    for(i = xe; xd[i] === 0; --i)xd.pop();
    if (i < 0) return new Ctor(x.s * 0);
    x.e = getBase10Exponent(xd, xe);
    x.d = xd;
    external = false;
    if (isFloat) x = divide(x, divisor, len * 4);
    if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
    external = true;
    return x;
}
function sine(Ctor, x) {
    var k, len = x.d.length;
    if (len < 3) {
        return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
    }
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;
    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x);
    var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
    for(; k--;){
        sin2_x = x.times(x);
        x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
    }
    return x;
}
function taylorSeries(Ctor, n, x, y, isHyperbolic) {
    var j, t, u, x2, i = 1, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
    external = false;
    x2 = x.times(x);
    u = new Ctor(y);
    for(;;){
        t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
        u = isHyperbolic ? y.plus(t) : y.minus(t);
        y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
        t = u.plus(y);
        if (t.d[k] !== void 0) {
            for(j = k; t.d[j] === u.d[j] && j--;);
            if (j == -1) break;
        }
        j = u;
        u = y;
        y = t;
        t = j;
        i++;
    }
    external = true;
    t.d.length = k + 1;
    return t;
}
function tinyPow(b, e) {
    var n = b;
    while(--e)n *= b;
    return n;
}
function toLessThanHalfPi(Ctor, x) {
    var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
    x = x.abs();
    if (x.lte(halfPi)) {
        quadrant = isNeg ? 4 : 1;
        return x;
    }
    t = x.divToInt(pi);
    if (t.isZero()) {
        quadrant = isNeg ? 3 : 2;
    } else {
        x = x.minus(t.times(pi));
        if (x.lte(halfPi)) {
            quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
            return x;
        }
        quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
    }
    return x.minus(pi).abs();
}
function toStringBinary(x, baseOut, sd, rm) {
    var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
    if (isExp) {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
    } else {
        sd = Ctor.precision;
        rm = Ctor.rounding;
    }
    if (!x.isFinite()) {
        str = nonFiniteToString(x);
    } else {
        str = finiteToString(x);
        i = str.indexOf(".");
        if (isExp) {
            base = 2;
            if (baseOut == 16) {
                sd = sd * 4 - 3;
            } else if (baseOut == 8) {
                sd = sd * 3 - 2;
            }
        } else {
            base = baseOut;
        }
        if (i >= 0) {
            str = str.replace(".", "");
            y = new Ctor(1);
            y.e = str.length - i;
            y.d = convertBase(finiteToString(y), 10, base);
            y.e = y.d.length;
        }
        xd = convertBase(str, 10, base);
        e = len = xd.length;
        for(; xd[--len] == 0;)xd.pop();
        if (!xd[0]) {
            str = isExp ? "0p+0" : "0";
        } else {
            if (i < 0) {
                e--;
            } else {
                x = new Ctor(x);
                x.d = xd;
                x.e = e;
                x = divide(x, y, sd, rm, 0, base);
                xd = x.d;
                e = x.e;
                roundUp = inexact;
            }
            i = xd[sd];
            k = base / 2;
            roundUp = roundUp || xd[sd + 1] !== void 0;
            roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
            xd.length = sd;
            if (roundUp) {
                for(; ++xd[--sd] > base - 1;){
                    xd[sd] = 0;
                    if (!sd) {
                        ++e;
                        xd.unshift(1);
                    }
                }
            }
            for(len = xd.length; !xd[len - 1]; --len);
            for(i = 0, str = ""; i < len; i++)str += NUMERALS.charAt(xd[i]);
            if (isExp) {
                if (len > 1) {
                    if (baseOut == 16 || baseOut == 8) {
                        i = baseOut == 16 ? 4 : 3;
                        for(--len; len % i; len++)str += "0";
                        xd = convertBase(str, base, baseOut);
                        for(len = xd.length; !xd[len - 1]; --len);
                        for(i = 1, str = "1."; i < len; i++)str += NUMERALS.charAt(xd[i]);
                    } else {
                        str = str.charAt(0) + "." + str.slice(1);
                    }
                }
                str = str + (e < 0 ? "p" : "p+") + e;
            } else if (e < 0) {
                for(; ++e;)str = "0" + str;
                str = "0." + str;
            } else {
                if (++e > len) for(e -= len; e--;)str += "0";
                else if (e < len) str = str.slice(0, e) + "." + str.slice(e);
            }
        }
        str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
    }
    return x.s < 0 ? "-" + str : str;
}
function truncate(arr, len) {
    if (arr.length > len) {
        arr.length = len;
        return true;
    }
}
function abs(x) {
    return new this(x).abs();
}
function acos(x) {
    return new this(x).acos();
}
function acosh(x) {
    return new this(x).acosh();
}
function add(x, y) {
    return new this(x).plus(y);
}
function asin(x) {
    return new this(x).asin();
}
function asinh(x) {
    return new this(x).asinh();
}
function atan(x) {
    return new this(x).atan();
}
function atanh(x) {
    return new this(x).atanh();
}
function atan2(y, x) {
    y = new this(y);
    x = new this(x);
    var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
    if (!y.s || !x.s) {
        r = new this(NaN);
    } else if (!y.d && !x.d) {
        r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
        r.s = y.s;
    } else if (!x.d || y.isZero()) {
        r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
        r.s = y.s;
    } else if (!y.d || x.isZero()) {
        r = getPi(this, wpr, 1).times(0.5);
        r.s = y.s;
    } else if (x.s < 0) {
        this.precision = wpr;
        this.rounding = 1;
        r = this.atan(divide(y, x, wpr, 1));
        x = getPi(this, wpr, 1);
        this.precision = pr;
        this.rounding = rm;
        r = y.s < 0 ? r.minus(x) : r.plus(x);
    } else {
        r = this.atan(divide(y, x, wpr, 1));
    }
    return r;
}
function cbrt(x) {
    return new this(x).cbrt();
}
function ceil(x) {
    return finalise(x = new this(x), x.e + 1, 2);
}
function clamp(x, min2, max2) {
    return new this(x).clamp(min2, max2);
}
function config(obj) {
    if (!obj || typeof obj !== "object") throw Error(decimalError + "Object expected");
    var i, p, v, useDefaults = obj.defaults === true, ps = [
        "precision",
        1,
        MAX_DIGITS,
        "rounding",
        0,
        8,
        "toExpNeg",
        -EXP_LIMIT,
        0,
        "toExpPos",
        0,
        EXP_LIMIT,
        "maxE",
        0,
        EXP_LIMIT,
        "minE",
        -EXP_LIMIT,
        0,
        "modulo",
        0,
        9
    ];
    for(i = 0; i < ps.length; i += 3){
        if (p = ps[i], useDefaults) this[p] = DEFAULTS[p];
        if ((v = obj[p]) !== void 0) {
            if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
            else throw Error(invalidArgument + p + ": " + v);
        }
    }
    if (p = "crypto", useDefaults) this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
        if (v === true || v === false || v === 0 || v === 1) {
            if (v) {
                if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                    this[p] = true;
                } else {
                    throw Error(cryptoUnavailable);
                }
            } else {
                this[p] = false;
            }
        } else {
            throw Error(invalidArgument + p + ": " + v);
        }
    }
    return this;
}
function cos(x) {
    return new this(x).cos();
}
function cosh(x) {
    return new this(x).cosh();
}
function clone(obj) {
    var i, p, ps;
    function Decimal2(v) {
        var e, i2, t, x = this;
        if (!(x instanceof Decimal2)) return new Decimal2(v);
        x.constructor = Decimal2;
        if (isDecimalInstance(v)) {
            x.s = v.s;
            if (external) {
                if (!v.d || v.e > Decimal2.maxE) {
                    x.e = NaN;
                    x.d = null;
                } else if (v.e < Decimal2.minE) {
                    x.e = 0;
                    x.d = [
                        0
                    ];
                } else {
                    x.e = v.e;
                    x.d = v.d.slice();
                }
            } else {
                x.e = v.e;
                x.d = v.d ? v.d.slice() : v.d;
            }
            return;
        }
        t = typeof v;
        if (t === "number") {
            if (v === 0) {
                x.s = 1 / v < 0 ? -1 : 1;
                x.e = 0;
                x.d = [
                    0
                ];
                return;
            }
            if (v < 0) {
                v = -v;
                x.s = -1;
            } else {
                x.s = 1;
            }
            if (v === ~~v && v < 1e7) {
                for(e = 0, i2 = v; i2 >= 10; i2 /= 10)e++;
                if (external) {
                    if (e > Decimal2.maxE) {
                        x.e = NaN;
                        x.d = null;
                    } else if (e < Decimal2.minE) {
                        x.e = 0;
                        x.d = [
                            0
                        ];
                    } else {
                        x.e = e;
                        x.d = [
                            v
                        ];
                    }
                } else {
                    x.e = e;
                    x.d = [
                        v
                    ];
                }
                return;
            }
            if (v * 0 !== 0) {
                if (!v) x.s = NaN;
                x.e = NaN;
                x.d = null;
                return;
            }
            return parseDecimal(x, v.toString());
        }
        if (t === "string") {
            if ((i2 = v.charCodeAt(0)) === 45) {
                v = v.slice(1);
                x.s = -1;
            } else {
                if (i2 === 43) v = v.slice(1);
                x.s = 1;
            }
            return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
        }
        if (t === "bigint") {
            if (v < 0) {
                v = -v;
                x.s = -1;
            } else {
                x.s = 1;
            }
            return parseDecimal(x, v.toString());
        }
        throw Error(invalidArgument + v);
    }
    Decimal2.prototype = P;
    Decimal2.ROUND_UP = 0;
    Decimal2.ROUND_DOWN = 1;
    Decimal2.ROUND_CEIL = 2;
    Decimal2.ROUND_FLOOR = 3;
    Decimal2.ROUND_HALF_UP = 4;
    Decimal2.ROUND_HALF_DOWN = 5;
    Decimal2.ROUND_HALF_EVEN = 6;
    Decimal2.ROUND_HALF_CEIL = 7;
    Decimal2.ROUND_HALF_FLOOR = 8;
    Decimal2.EUCLID = 9;
    Decimal2.config = Decimal2.set = config;
    Decimal2.clone = clone;
    Decimal2.isDecimal = isDecimalInstance;
    Decimal2.abs = abs;
    Decimal2.acos = acos;
    Decimal2.acosh = acosh;
    Decimal2.add = add;
    Decimal2.asin = asin;
    Decimal2.asinh = asinh;
    Decimal2.atan = atan;
    Decimal2.atanh = atanh;
    Decimal2.atan2 = atan2;
    Decimal2.cbrt = cbrt;
    Decimal2.ceil = ceil;
    Decimal2.clamp = clamp;
    Decimal2.cos = cos;
    Decimal2.cosh = cosh;
    Decimal2.div = div;
    Decimal2.exp = exp;
    Decimal2.floor = floor;
    Decimal2.hypot = hypot;
    Decimal2.ln = ln;
    Decimal2.log = log;
    Decimal2.log10 = log10;
    Decimal2.log2 = log2;
    Decimal2.max = max;
    Decimal2.min = min;
    Decimal2.mod = mod;
    Decimal2.mul = mul;
    Decimal2.pow = pow;
    Decimal2.random = random;
    Decimal2.round = round;
    Decimal2.sign = sign;
    Decimal2.sin = sin;
    Decimal2.sinh = sinh;
    Decimal2.sqrt = sqrt;
    Decimal2.sub = sub;
    Decimal2.sum = sum;
    Decimal2.tan = tan;
    Decimal2.tanh = tanh;
    Decimal2.trunc = trunc;
    if (obj === void 0) obj = {};
    if (obj) {
        if (obj.defaults !== true) {
            ps = [
                "precision",
                "rounding",
                "toExpNeg",
                "toExpPos",
                "maxE",
                "minE",
                "modulo",
                "crypto"
            ];
            for(i = 0; i < ps.length;)if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
        }
    }
    Decimal2.config(obj);
    return Decimal2;
}
function div(x, y) {
    return new this(x).div(y);
}
function exp(x) {
    return new this(x).exp();
}
function floor(x) {
    return finalise(x = new this(x), x.e + 1, 3);
}
function hypot() {
    var i, n, t = new this(0);
    external = false;
    for(i = 0; i < arguments.length;){
        n = new this(arguments[i++]);
        if (!n.d) {
            if (n.s) {
                external = true;
                return new this(1 / 0);
            }
            t = n;
        } else if (t.d) {
            t = t.plus(n.times(n));
        }
    }
    external = true;
    return t.sqrt();
}
function isDecimalInstance(obj) {
    return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}
function ln(x) {
    return new this(x).ln();
}
function log(x, y) {
    return new this(x).log(y);
}
function log2(x) {
    return new this(x).log(2);
}
function log10(x) {
    return new this(x).log(10);
}
function max() {
    return maxOrMin(this, arguments, -1);
}
function min() {
    return maxOrMin(this, arguments, 1);
}
function mod(x, y) {
    return new this(x).mod(y);
}
function mul(x, y) {
    return new this(x).mul(y);
}
function pow(x, y) {
    return new this(x).pow(y);
}
function random(sd) {
    var d, e, k, n, i = 0, r = new this(1), rd = [];
    if (sd === void 0) sd = this.precision;
    else checkInt32(sd, 1, MAX_DIGITS);
    k = Math.ceil(sd / LOG_BASE);
    if (!this.crypto) {
        for(; i < k;)rd[i++] = Math.random() * 1e7 | 0;
    } else if (crypto.getRandomValues) {
        d = crypto.getRandomValues(new Uint32Array(k));
        for(; i < k;){
            n = d[i];
            if (n >= 429e7) {
                d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
            } else {
                rd[i++] = n % 1e7;
            }
        }
    } else if (crypto.randomBytes) {
        d = crypto.randomBytes(k *= 4);
        for(; i < k;){
            n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
            if (n >= 214e7) {
                crypto.randomBytes(4).copy(d, i);
            } else {
                rd.push(n % 1e7);
                i += 4;
            }
        }
        i = k / 4;
    } else {
        throw Error(cryptoUnavailable);
    }
    k = rd[--i];
    sd %= LOG_BASE;
    if (k && sd) {
        n = mathpow(10, LOG_BASE - sd);
        rd[i] = (k / n | 0) * n;
    }
    for(; rd[i] === 0; i--)rd.pop();
    if (i < 0) {
        e = 0;
        rd = [
            0
        ];
    } else {
        e = -1;
        for(; rd[0] === 0; e -= LOG_BASE)rd.shift();
        for(k = 1, n = rd[0]; n >= 10; n /= 10)k++;
        if (k < LOG_BASE) e -= LOG_BASE - k;
    }
    r.e = e;
    r.d = rd;
    return r;
}
function round(x) {
    return finalise(x = new this(x), x.e + 1, this.rounding);
}
function sign(x) {
    x = new this(x);
    return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
}
function sin(x) {
    return new this(x).sin();
}
function sinh(x) {
    return new this(x).sinh();
}
function sqrt(x) {
    return new this(x).sqrt();
}
function sub(x, y) {
    return new this(x).sub(y);
}
function sum() {
    var i = 0, args = arguments, x = new this(args[i]);
    external = false;
    for(; x.s && ++i < args.length;)x = x.plus(args[i]);
    external = true;
    return finalise(x, this.precision, this.rounding);
}
function tan(x) {
    return new this(x).tan();
}
function tanh(x) {
    return new this(x).tanh();
}
function trunc(x) {
    return finalise(x = new this(x), x.e + 1, 1);
}
P[Symbol.for("nodejs.util.inspect.custom")] = P.toString;
P[Symbol.toStringTag] = "Decimal";
var Decimal = P.constructor = clone(DEFAULTS);
LN10 = new Decimal(LN10);
PI = new Decimal(PI);
// ../../node_modules/.pnpm/sql-template-tag@5.2.1/node_modules/sql-template-tag/dist/index.js
var Sql = class _Sql {
    constructor(rawStrings, rawValues){
        if (rawStrings.length - 1 !== rawValues.length) {
            if (rawStrings.length === 0) {
                throw new TypeError("Expected at least 1 string");
            }
            throw new TypeError(`Expected ${rawStrings.length} strings to have ${rawStrings.length - 1} values`);
        }
        const valuesLength = rawValues.reduce((len, value)=>len + (value instanceof _Sql ? value.values.length : 1), 0);
        this.values = new Array(valuesLength);
        this.strings = new Array(valuesLength + 1);
        this.strings[0] = rawStrings[0];
        let i = 0, pos = 0;
        while(i < rawValues.length){
            const child = rawValues[i++];
            const rawString = rawStrings[i];
            if (child instanceof _Sql) {
                this.strings[pos] += child.strings[0];
                let childIndex = 0;
                while(childIndex < child.values.length){
                    this.values[pos++] = child.values[childIndex++];
                    this.strings[pos] = child.strings[childIndex];
                }
                this.strings[pos] += rawString;
            } else {
                this.values[pos++] = child;
                this.strings[pos] = rawString;
            }
        }
    }
    get sql() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while(i < len)value += `?${this.strings[i++]}`;
        return value;
    }
    get statement() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while(i < len)value += `:${i}${this.strings[i++]}`;
        return value;
    }
    get text() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while(i < len)value += `$${i}${this.strings[i++]}`;
        return value;
    }
    inspect() {
        return {
            sql: this.sql,
            statement: this.statement,
            text: this.text,
            values: this.values
        };
    }
};
function join(values, separator = ",", prefix = "", suffix = "") {
    if (values.length === 0) {
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
    }
    return new Sql([
        prefix,
        ...Array(values.length - 1).fill(separator),
        suffix
    ], values);
}
function raw(value) {
    return new Sql([
        value
    ], []);
}
var empty = raw("");
function sql(strings, ...values) {
    return new Sql(strings, values);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    AnyNull,
    AnyNullClass,
    DbNull,
    DbNullClass,
    Decimal,
    JsonNull,
    JsonNullClass,
    NullTypes,
    ObjectEnumValue,
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
    PrismaClientRustError,
    PrismaClientRustPanicError,
    PrismaClientUnknownRequestError,
    PrismaClientValidationError,
    Sql,
    empty,
    hasBatchIndex,
    isAnyNull,
    isDbNull,
    isJsonNull,
    isObjectEnumValue,
    join,
    raw,
    sql
}); /*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.5.0
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/ 
}),
"[project]/node_modules/@prisma/debug/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Debug",
    ()=>Debug,
    "clearLogs",
    ()=>clearLogs,
    "default",
    ()=>index_default,
    "getLogs",
    ()=>getLogs
]);
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
// ../../node_modules/.pnpm/kleur@4.1.5/node_modules/kleur/colors.mjs
var colors_exports = {};
__export(colors_exports, {
    $: ()=>$,
    bgBlack: ()=>bgBlack,
    bgBlue: ()=>bgBlue,
    bgCyan: ()=>bgCyan,
    bgGreen: ()=>bgGreen,
    bgMagenta: ()=>bgMagenta,
    bgRed: ()=>bgRed,
    bgWhite: ()=>bgWhite,
    bgYellow: ()=>bgYellow,
    black: ()=>black,
    blue: ()=>blue,
    bold: ()=>bold,
    cyan: ()=>cyan,
    dim: ()=>dim,
    gray: ()=>gray,
    green: ()=>green,
    grey: ()=>grey,
    hidden: ()=>hidden,
    inverse: ()=>inverse,
    italic: ()=>italic,
    magenta: ()=>magenta,
    red: ()=>red,
    reset: ()=>reset,
    strikethrough: ()=>strikethrough,
    underline: ()=>underline,
    white: ()=>white,
    yellow: ()=>yellow
});
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
    ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
    isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
    enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
    let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
    let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
    return function(txt) {
        if (!$.enabled || txt == null) return txt;
        return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
    };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);
// src/index.ts
var MAX_ARGS_HISTORY = 100;
var COLORS = [
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "red"
];
var argsHistory = [];
var lastTimestamp = Date.now();
var lastColor = 0;
var processEnv = typeof process !== "undefined" ? process.env : {};
globalThis.DEBUG ??= processEnv.DEBUG ?? "";
globalThis.DEBUG_COLORS ??= processEnv.DEBUG_COLORS ? processEnv.DEBUG_COLORS === "true" : true;
var topProps = {
    enable (namespace) {
        if (typeof namespace === "string") {
            globalThis.DEBUG = namespace;
        }
    },
    disable () {
        const prev = globalThis.DEBUG;
        globalThis.DEBUG = "";
        return prev;
    },
    // this is the core logic to check if logging should happen or not
    enabled (namespace) {
        const listenedNamespaces = globalThis.DEBUG.split(",").map((s)=>{
            return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
        });
        const isListened = listenedNamespaces.some((listenedNamespace)=>{
            if (listenedNamespace === "" || listenedNamespace[0] === "-") return false;
            return namespace.match(RegExp(listenedNamespace.split("*").join(".*") + "$"));
        });
        const isExcluded = listenedNamespaces.some((listenedNamespace)=>{
            if (listenedNamespace === "" || listenedNamespace[0] !== "-") return false;
            return namespace.match(RegExp(listenedNamespace.slice(1).split("*").join(".*") + "$"));
        });
        return isListened && !isExcluded;
    },
    log: (...args)=>{
        const [namespace, format, ...rest] = args;
        const logWithFormatting = console.warn ?? console.log;
        logWithFormatting(`${namespace} ${format}`, ...rest);
    },
    formatters: {}
};
function debugCreate(namespace) {
    const instanceProps = {
        color: COLORS[lastColor++ % COLORS.length],
        enabled: topProps.enabled(namespace),
        namespace,
        log: topProps.log,
        extend: ()=>{}
    };
    const debugCall = (...args)=>{
        const { enabled, namespace: namespace2, color, log } = instanceProps;
        if (args.length !== 0) {
            argsHistory.push([
                namespace2,
                ...args
            ]);
        }
        if (argsHistory.length > MAX_ARGS_HISTORY) {
            argsHistory.shift();
        }
        if (topProps.enabled(namespace2) || enabled) {
            const stringArgs = args.map((arg)=>{
                if (typeof arg === "string") {
                    return arg;
                }
                return safeStringify(arg);
            });
            const ms = `+${Date.now() - lastTimestamp}ms`;
            lastTimestamp = Date.now();
            if (globalThis.DEBUG_COLORS) {
                log(colors_exports[color](bold(namespace2)), ...stringArgs, colors_exports[color](ms));
            } else {
                log(namespace2, ...stringArgs, ms);
            }
        }
    };
    return new Proxy(debugCall, {
        get: (_, prop)=>instanceProps[prop],
        set: (_, prop, value)=>instanceProps[prop] = value
    });
}
var Debug = new Proxy(debugCreate, {
    get: (_, prop)=>topProps[prop],
    set: (_, prop, value)=>topProps[prop] = value
});
function safeStringify(value, indent = 2) {
    const cache = /* @__PURE__ */ new Set();
    return JSON.stringify(value, (key, value2)=>{
        if (typeof value2 === "object" && value2 !== null) {
            if (cache.has(value2)) {
                return `[Circular *]`;
            }
            cache.add(value2);
        } else if (typeof value2 === "bigint") {
            return value2.toString();
        }
        return value2;
    }, indent);
}
function getLogs(numChars = 7500) {
    const logs = argsHistory.map(([namespace, ...args])=>{
        return `${namespace} ${args.map((arg)=>{
            if (typeof arg === "string") {
                return arg;
            } else {
                return JSON.stringify(arg);
            }
        }).join(" ")}`;
    }).join("\n");
    if (logs.length < numChars) {
        return logs;
    }
    return logs.slice(-numChars);
}
function clearLogs() {
    argsHistory.length = 0;
}
var index_default = Debug;
;
}),
"[project]/node_modules/@prisma/driver-adapter-utils/dist/index.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColumnTypeEnum",
    ()=>ColumnTypeEnum,
    "DriverAdapterError",
    ()=>DriverAdapterError,
    "bindAdapter",
    ()=>bindAdapter,
    "bindMigrationAwareSqlAdapterFactory",
    ()=>bindMigrationAwareSqlAdapterFactory,
    "bindSqlAdapterFactory",
    ()=>bindSqlAdapterFactory,
    "err",
    ()=>err,
    "isDriverAdapterError",
    ()=>isDriverAdapterError,
    "mockAdapter",
    ()=>mockAdapter,
    "mockAdapterErrors",
    ()=>mockAdapterErrors,
    "mockAdapterFactory",
    ()=>mockAdapterFactory,
    "mockMigrationAwareAdapterFactory",
    ()=>mockMigrationAwareAdapterFactory,
    "ok",
    ()=>ok
]);
// src/debug.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/debug/dist/index.mjs [app-route] (ecmascript)");
;
// src/error.ts
var DriverAdapterError = class extends Error {
    name = "DriverAdapterError";
    cause;
    constructor(payload){
        super(typeof payload["message"] === "string" ? payload["message"] : payload.kind);
        this.cause = payload;
    }
};
function isDriverAdapterError(error) {
    return error["name"] === "DriverAdapterError" && typeof error["cause"] === "object";
}
// src/result.ts
function ok(value) {
    return {
        ok: true,
        value,
        map (fn) {
            return ok(fn(value));
        },
        flatMap (fn) {
            return fn(value);
        }
    };
}
function err(error) {
    return {
        ok: false,
        error,
        map () {
            return err(error);
        },
        flatMap () {
            return err(error);
        }
    };
}
// src/binder.ts
var debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Debug"])("driver-adapter-utils");
var ErrorRegistryInternal = class {
    registeredErrors = [];
    consumeError(id) {
        return this.registeredErrors[id];
    }
    registerNewError(error) {
        let i = 0;
        while(this.registeredErrors[i] !== void 0){
            i++;
        }
        this.registeredErrors[i] = {
            error
        };
        return i;
    }
};
function copySymbolsFromSource(source, target) {
    const symbols = Object.getOwnPropertySymbols(source);
    const symbolObject = Object.fromEntries(symbols.map((symbol)=>[
            symbol,
            true
        ]));
    Object.assign(target, symbolObject);
}
var bindMigrationAwareSqlAdapterFactory = (adapterFactory)=>{
    const errorRegistry = new ErrorRegistryInternal();
    const boundFactory = {
        adapterName: adapterFactory.adapterName,
        provider: adapterFactory.provider,
        errorRegistry,
        connect: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connect.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        },
        connectToShadowDb: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connectToShadowDb.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        }
    };
    copySymbolsFromSource(adapterFactory, boundFactory);
    return boundFactory;
};
var bindSqlAdapterFactory = (adapterFactory)=>{
    const errorRegistry = new ErrorRegistryInternal();
    const boundFactory = {
        adapterName: adapterFactory.adapterName,
        provider: adapterFactory.provider,
        errorRegistry,
        connect: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connect.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        }
    };
    copySymbolsFromSource(adapterFactory, boundFactory);
    return boundFactory;
};
var bindAdapter = (adapter, errorRegistry = new ErrorRegistryInternal())=>{
    const boundAdapter = {
        adapterName: adapter.adapterName,
        errorRegistry,
        queryRaw: wrapAsync(errorRegistry, adapter.queryRaw.bind(adapter)),
        executeRaw: wrapAsync(errorRegistry, adapter.executeRaw.bind(adapter)),
        executeScript: wrapAsync(errorRegistry, adapter.executeScript.bind(adapter)),
        dispose: wrapAsync(errorRegistry, adapter.dispose.bind(adapter)),
        provider: adapter.provider,
        startTransaction: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapter.startTransaction.bind(adapter))(...args);
            return ctx.map((ctx2)=>bindTransaction(errorRegistry, ctx2));
        }
    };
    if (adapter.getConnectionInfo) {
        boundAdapter.getConnectionInfo = wrapSync(errorRegistry, adapter.getConnectionInfo.bind(adapter));
    }
    return boundAdapter;
};
var bindTransaction = (errorRegistry, transaction)=>{
    const boundTransaction = {
        adapterName: transaction.adapterName,
        provider: transaction.provider,
        options: transaction.options,
        queryRaw: wrapAsync(errorRegistry, transaction.queryRaw.bind(transaction)),
        executeRaw: wrapAsync(errorRegistry, transaction.executeRaw.bind(transaction)),
        commit: wrapAsync(errorRegistry, transaction.commit.bind(transaction)),
        rollback: wrapAsync(errorRegistry, transaction.rollback.bind(transaction))
    };
    if (transaction.createSavepoint) {
        boundTransaction.createSavepoint = wrapAsync(errorRegistry, transaction.createSavepoint.bind(transaction));
    }
    if (transaction.rollbackToSavepoint) {
        boundTransaction.rollbackToSavepoint = wrapAsync(errorRegistry, transaction.rollbackToSavepoint.bind(transaction));
    }
    if (transaction.releaseSavepoint) {
        boundTransaction.releaseSavepoint = wrapAsync(errorRegistry, transaction.releaseSavepoint.bind(transaction));
    }
    return boundTransaction;
};
function wrapAsync(registry, fn) {
    return async (...args)=>{
        try {
            return ok(await fn(...args));
        } catch (error) {
            debug("[error@wrapAsync]", error);
            if (isDriverAdapterError(error)) {
                return err(error.cause);
            }
            const id = registry.registerNewError(error);
            return err({
                kind: "GenericJs",
                id
            });
        }
    };
}
function wrapSync(registry, fn) {
    return (...args)=>{
        try {
            return ok(fn(...args));
        } catch (error) {
            debug("[error@wrapSync]", error);
            if (isDriverAdapterError(error)) {
                return err(error.cause);
            }
            const id = registry.registerNewError(error);
            return err({
                kind: "GenericJs",
                id
            });
        }
    };
}
// src/const.ts
var ColumnTypeEnum = {
    // Scalars
    Int32: 0,
    Int64: 1,
    Float: 2,
    Double: 3,
    Numeric: 4,
    Boolean: 5,
    Character: 6,
    Text: 7,
    Date: 8,
    Time: 9,
    DateTime: 10,
    Json: 11,
    Enum: 12,
    Bytes: 13,
    Set: 14,
    Uuid: 15,
    // Arrays
    Int32Array: 64,
    Int64Array: 65,
    FloatArray: 66,
    DoubleArray: 67,
    NumericArray: 68,
    BooleanArray: 69,
    CharacterArray: 70,
    TextArray: 71,
    DateArray: 72,
    TimeArray: 73,
    DateTimeArray: 74,
    JsonArray: 75,
    EnumArray: 76,
    BytesArray: 77,
    UuidArray: 78,
    // Custom
    UnknownNumber: 128
};
// src/mock.ts
var mockAdapterErrors = {
    queryRaw: new Error("Not implemented: queryRaw"),
    executeRaw: new Error("Not implemented: executeRaw"),
    startTransaction: new Error("Not implemented: startTransaction"),
    executeScript: new Error("Not implemented: executeScript"),
    dispose: new Error("Not implemented: dispose")
};
function mockAdapter(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        queryRaw: ()=>Promise.reject(mockAdapterErrors.queryRaw),
        executeRaw: ()=>Promise.reject(mockAdapterErrors.executeRaw),
        startTransaction: ()=>Promise.reject(mockAdapterErrors.startTransaction),
        executeScript: ()=>Promise.reject(mockAdapterErrors.executeScript),
        dispose: ()=>Promise.reject(mockAdapterErrors.dispose),
        [Symbol.for("adapter.mockAdapter")]: true
    };
}
function mockAdapterFactory(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        connect: ()=>Promise.resolve(mockAdapter(provider)),
        [Symbol.for("adapter.mockAdapterFactory")]: true
    };
}
function mockMigrationAwareAdapterFactory(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        connect: ()=>Promise.resolve(mockAdapter(provider)),
        connectToShadowDb: ()=>Promise.resolve(mockAdapter(provider)),
        [Symbol.for("adapter.mockMigrationAwareAdapterFactory")]: true
    };
}
;
}),
"[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compare",
    ()=>compare,
    "compareSync",
    ()=>compareSync,
    "decodeBase64",
    ()=>decodeBase64,
    "default",
    ()=>__TURBOPACK__default__export__,
    "encodeBase64",
    ()=>encodeBase64,
    "genSalt",
    ()=>genSalt,
    "genSaltSync",
    ()=>genSaltSync,
    "getRounds",
    ()=>getRounds,
    "getSalt",
    ()=>getSalt,
    "hash",
    ()=>hash,
    "hashSync",
    ()=>hashSync,
    "setRandomFallback",
    ()=>setRandomFallback,
    "truncates",
    ()=>truncates
]);
/*
 Copyright (c) 2012 Nevins Bartolomeo <nevins.bartolomeo@gmail.com>
 Copyright (c) 2012 Shane Girish <shaneGirish@gmail.com>
 Copyright (c) 2025 Daniel Wirtz <dcode@dcode.io>

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ // The Node.js crypto module is used as a fallback for the Web Crypto API. When
// building for the browser, inclusion of the crypto module should be disabled,
// which the package hints at in its package.json for bundlers that support it.
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
/**
 * The random implementation to use as a fallback.
 * @type {?function(number):!Array.<number>}
 * @inner
 */ var randomFallback = null;
/**
 * Generates cryptographically secure random bytes.
 * @function
 * @param {number} len Bytes length
 * @returns {!Array.<number>} Random bytes
 * @throws {Error} If no random implementation is available
 * @inner
 */ function randomBytes(len) {
    // Web Crypto API. Globally available in the browser and in Node.js >=23.
    try {
        return crypto.getRandomValues(new Uint8Array(len));
    } catch  {}
    // Node.js crypto module for non-browser environments.
    try {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(len);
    } catch  {}
    // Custom fallback specified with `setRandomFallback`.
    if (!randomFallback) {
        throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");
    }
    return randomFallback(len);
}
function setRandomFallback(random) {
    randomFallback = random;
}
function genSaltSync(rounds, seed_length) {
    rounds = rounds || GENSALT_DEFAULT_LOG2_ROUNDS;
    if (typeof rounds !== "number") throw Error("Illegal arguments: " + typeof rounds + ", " + typeof seed_length);
    if (rounds < 4) rounds = 4;
    else if (rounds > 31) rounds = 31;
    var salt = [];
    salt.push("$2b$");
    if (rounds < 10) salt.push("0");
    salt.push(rounds.toString());
    salt.push("$");
    salt.push(base64_encode(randomBytes(BCRYPT_SALT_LEN), BCRYPT_SALT_LEN)); // May throw
    return salt.join("");
}
function genSalt(rounds, seed_length, callback) {
    if (typeof seed_length === "function") callback = seed_length, seed_length = undefined; // Not supported.
    if (typeof rounds === "function") callback = rounds, rounds = undefined;
    if (typeof rounds === "undefined") rounds = GENSALT_DEFAULT_LOG2_ROUNDS;
    else if (typeof rounds !== "number") throw Error("illegal arguments: " + typeof rounds);
    function _async(callback) {
        nextTick(function() {
            // Pretty thin, but salting is fast enough
            try {
                callback(null, genSaltSync(rounds));
            } catch (err) {
                callback(err);
            }
        });
    }
    if (callback) {
        if (typeof callback !== "function") throw Error("Illegal callback: " + typeof callback);
        _async(callback);
    } else return new Promise(function(resolve, reject) {
        _async(function(err, res) {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}
function hashSync(password, salt) {
    if (typeof salt === "undefined") salt = GENSALT_DEFAULT_LOG2_ROUNDS;
    if (typeof salt === "number") salt = genSaltSync(salt);
    if (typeof password !== "string" || typeof salt !== "string") throw Error("Illegal arguments: " + typeof password + ", " + typeof salt);
    return _hash(password, salt);
}
function hash(password, salt, callback, progressCallback) {
    function _async(callback) {
        if (typeof password === "string" && typeof salt === "number") genSalt(salt, function(err, salt) {
            _hash(password, salt, callback, progressCallback);
        });
        else if (typeof password === "string" && typeof salt === "string") _hash(password, salt, callback, progressCallback);
        else nextTick(callback.bind(this, Error("Illegal arguments: " + typeof password + ", " + typeof salt)));
    }
    if (callback) {
        if (typeof callback !== "function") throw Error("Illegal callback: " + typeof callback);
        _async(callback);
    } else return new Promise(function(resolve, reject) {
        _async(function(err, res) {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}
/**
 * Compares two strings of the same length in constant time.
 * @param {string} known Must be of the correct length
 * @param {string} unknown Must be the same length as `known`
 * @returns {boolean}
 * @inner
 */ function safeStringCompare(known, unknown) {
    var diff = known.length ^ unknown.length;
    for(var i = 0; i < known.length; ++i){
        diff |= known.charCodeAt(i) ^ unknown.charCodeAt(i);
    }
    return diff === 0;
}
function compareSync(password, hash) {
    if (typeof password !== "string" || typeof hash !== "string") throw Error("Illegal arguments: " + typeof password + ", " + typeof hash);
    if (hash.length !== 60) return false;
    return safeStringCompare(hashSync(password, hash.substring(0, hash.length - 31)), hash);
}
function compare(password, hashValue, callback, progressCallback) {
    function _async(callback) {
        if (typeof password !== "string" || typeof hashValue !== "string") {
            nextTick(callback.bind(this, Error("Illegal arguments: " + typeof password + ", " + typeof hashValue)));
            return;
        }
        if (hashValue.length !== 60) {
            nextTick(callback.bind(this, null, false));
            return;
        }
        hash(password, hashValue.substring(0, 29), function(err, comp) {
            if (err) callback(err);
            else callback(null, safeStringCompare(comp, hashValue));
        }, progressCallback);
    }
    if (callback) {
        if (typeof callback !== "function") throw Error("Illegal callback: " + typeof callback);
        _async(callback);
    } else return new Promise(function(resolve, reject) {
        _async(function(err, res) {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}
function getRounds(hash) {
    if (typeof hash !== "string") throw Error("Illegal arguments: " + typeof hash);
    return parseInt(hash.split("$")[2], 10);
}
function getSalt(hash) {
    if (typeof hash !== "string") throw Error("Illegal arguments: " + typeof hash);
    if (hash.length !== 60) throw Error("Illegal hash length: " + hash.length + " != 60");
    return hash.substring(0, 29);
}
function truncates(password) {
    if (typeof password !== "string") throw Error("Illegal arguments: " + typeof password);
    return utf8Length(password) > 72;
}
/**
 * Continues with the callback after yielding to the event loop.
 * @function
 * @param {function(...[*])} callback Callback to execute
 * @inner
 */ var nextTick = typeof setImmediate === "function" ? setImmediate : typeof scheduler === "object" && typeof scheduler.postTask === "function" ? scheduler.postTask.bind(scheduler) : setTimeout;
/** Calculates the byte length of a string encoded as UTF8. */ function utf8Length(string) {
    var len = 0, c = 0;
    for(var i = 0; i < string.length; ++i){
        c = string.charCodeAt(i);
        if (c < 128) len += 1;
        else if (c < 2048) len += 2;
        else if ((c & 0xfc00) === 0xd800 && (string.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            ++i;
            len += 4;
        } else len += 3;
    }
    return len;
}
/** Converts a string to an array of UTF8 bytes. */ function utf8Array(string) {
    var offset = 0, c1, c2;
    var buffer = new Array(utf8Length(string));
    for(var i = 0, k = string.length; i < k; ++i){
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6 | 192;
            buffer[offset++] = c1 & 63 | 128;
        } else if ((c1 & 0xfc00) === 0xd800 && ((c2 = string.charCodeAt(i + 1)) & 0xfc00) === 0xdc00) {
            c1 = 0x10000 + ((c1 & 0x03ff) << 10) + (c2 & 0x03ff);
            ++i;
            buffer[offset++] = c1 >> 18 | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12 | 224;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
        }
    }
    return buffer;
}
// A base64 implementation for the bcrypt algorithm. This is partly non-standard.
/**
 * bcrypt's own non-standard base64 dictionary.
 * @type {!Array.<string>}
 * @const
 * @inner
 **/ var BASE64_CODE = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
/**
 * @type {!Array.<number>}
 * @const
 * @inner
 **/ var BASE64_INDEX = [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    0,
    1,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    -1,
    -1,
    -1,
    -1,
    -1
];
/**
 * Encodes a byte array to base64 with up to len bytes of input.
 * @param {!Array.<number>} b Byte array
 * @param {number} len Maximum input length
 * @returns {string}
 * @inner
 */ function base64_encode(b, len) {
    var off = 0, rs = [], c1, c2;
    if (len <= 0 || len > b.length) throw Error("Illegal len: " + len);
    while(off < len){
        c1 = b[off++] & 0xff;
        rs.push(BASE64_CODE[c1 >> 2 & 0x3f]);
        c1 = (c1 & 0x03) << 4;
        if (off >= len) {
            rs.push(BASE64_CODE[c1 & 0x3f]);
            break;
        }
        c2 = b[off++] & 0xff;
        c1 |= c2 >> 4 & 0x0f;
        rs.push(BASE64_CODE[c1 & 0x3f]);
        c1 = (c2 & 0x0f) << 2;
        if (off >= len) {
            rs.push(BASE64_CODE[c1 & 0x3f]);
            break;
        }
        c2 = b[off++] & 0xff;
        c1 |= c2 >> 6 & 0x03;
        rs.push(BASE64_CODE[c1 & 0x3f]);
        rs.push(BASE64_CODE[c2 & 0x3f]);
    }
    return rs.join("");
}
/**
 * Decodes a base64 encoded string to up to len bytes of output.
 * @param {string} s String to decode
 * @param {number} len Maximum output length
 * @returns {!Array.<number>}
 * @inner
 */ function base64_decode(s, len) {
    var off = 0, slen = s.length, olen = 0, rs = [], c1, c2, c3, c4, o, code;
    if (len <= 0) throw Error("Illegal len: " + len);
    while(off < slen - 1 && olen < len){
        code = s.charCodeAt(off++);
        c1 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        code = s.charCodeAt(off++);
        c2 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        if (c1 == -1 || c2 == -1) break;
        o = c1 << 2 >>> 0;
        o |= (c2 & 0x30) >> 4;
        rs.push(String.fromCharCode(o));
        if (++olen >= len || off >= slen) break;
        code = s.charCodeAt(off++);
        c3 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        if (c3 == -1) break;
        o = (c2 & 0x0f) << 4 >>> 0;
        o |= (c3 & 0x3c) >> 2;
        rs.push(String.fromCharCode(o));
        if (++olen >= len || off >= slen) break;
        code = s.charCodeAt(off++);
        c4 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        o = (c3 & 0x03) << 6 >>> 0;
        o |= c4;
        rs.push(String.fromCharCode(o));
        ++olen;
    }
    var res = [];
    for(off = 0; off < olen; off++)res.push(rs[off].charCodeAt(0));
    return res;
}
/**
 * @type {number}
 * @const
 * @inner
 */ var BCRYPT_SALT_LEN = 16;
/**
 * @type {number}
 * @const
 * @inner
 */ var GENSALT_DEFAULT_LOG2_ROUNDS = 10;
/**
 * @type {number}
 * @const
 * @inner
 */ var BLOWFISH_NUM_ROUNDS = 16;
/**
 * @type {number}
 * @const
 * @inner
 */ var MAX_EXECUTION_TIME = 100;
/**
 * @type {Array.<number>}
 * @const
 * @inner
 */ var P_ORIG = [
    0x243f6a88,
    0x85a308d3,
    0x13198a2e,
    0x03707344,
    0xa4093822,
    0x299f31d0,
    0x082efa98,
    0xec4e6c89,
    0x452821e6,
    0x38d01377,
    0xbe5466cf,
    0x34e90c6c,
    0xc0ac29b7,
    0xc97c50dd,
    0x3f84d5b5,
    0xb5470917,
    0x9216d5d9,
    0x8979fb1b
];
/**
 * @type {Array.<number>}
 * @const
 * @inner
 */ var S_ORIG = [
    0xd1310ba6,
    0x98dfb5ac,
    0x2ffd72db,
    0xd01adfb7,
    0xb8e1afed,
    0x6a267e96,
    0xba7c9045,
    0xf12c7f99,
    0x24a19947,
    0xb3916cf7,
    0x0801f2e2,
    0x858efc16,
    0x636920d8,
    0x71574e69,
    0xa458fea3,
    0xf4933d7e,
    0x0d95748f,
    0x728eb658,
    0x718bcd58,
    0x82154aee,
    0x7b54a41d,
    0xc25a59b5,
    0x9c30d539,
    0x2af26013,
    0xc5d1b023,
    0x286085f0,
    0xca417918,
    0xb8db38ef,
    0x8e79dcb0,
    0x603a180e,
    0x6c9e0e8b,
    0xb01e8a3e,
    0xd71577c1,
    0xbd314b27,
    0x78af2fda,
    0x55605c60,
    0xe65525f3,
    0xaa55ab94,
    0x57489862,
    0x63e81440,
    0x55ca396a,
    0x2aab10b6,
    0xb4cc5c34,
    0x1141e8ce,
    0xa15486af,
    0x7c72e993,
    0xb3ee1411,
    0x636fbc2a,
    0x2ba9c55d,
    0x741831f6,
    0xce5c3e16,
    0x9b87931e,
    0xafd6ba33,
    0x6c24cf5c,
    0x7a325381,
    0x28958677,
    0x3b8f4898,
    0x6b4bb9af,
    0xc4bfe81b,
    0x66282193,
    0x61d809cc,
    0xfb21a991,
    0x487cac60,
    0x5dec8032,
    0xef845d5d,
    0xe98575b1,
    0xdc262302,
    0xeb651b88,
    0x23893e81,
    0xd396acc5,
    0x0f6d6ff3,
    0x83f44239,
    0x2e0b4482,
    0xa4842004,
    0x69c8f04a,
    0x9e1f9b5e,
    0x21c66842,
    0xf6e96c9a,
    0x670c9c61,
    0xabd388f0,
    0x6a51a0d2,
    0xd8542f68,
    0x960fa728,
    0xab5133a3,
    0x6eef0b6c,
    0x137a3be4,
    0xba3bf050,
    0x7efb2a98,
    0xa1f1651d,
    0x39af0176,
    0x66ca593e,
    0x82430e88,
    0x8cee8619,
    0x456f9fb4,
    0x7d84a5c3,
    0x3b8b5ebe,
    0xe06f75d8,
    0x85c12073,
    0x401a449f,
    0x56c16aa6,
    0x4ed3aa62,
    0x363f7706,
    0x1bfedf72,
    0x429b023d,
    0x37d0d724,
    0xd00a1248,
    0xdb0fead3,
    0x49f1c09b,
    0x075372c9,
    0x80991b7b,
    0x25d479d8,
    0xf6e8def7,
    0xe3fe501a,
    0xb6794c3b,
    0x976ce0bd,
    0x04c006ba,
    0xc1a94fb6,
    0x409f60c4,
    0x5e5c9ec2,
    0x196a2463,
    0x68fb6faf,
    0x3e6c53b5,
    0x1339b2eb,
    0x3b52ec6f,
    0x6dfc511f,
    0x9b30952c,
    0xcc814544,
    0xaf5ebd09,
    0xbee3d004,
    0xde334afd,
    0x660f2807,
    0x192e4bb3,
    0xc0cba857,
    0x45c8740f,
    0xd20b5f39,
    0xb9d3fbdb,
    0x5579c0bd,
    0x1a60320a,
    0xd6a100c6,
    0x402c7279,
    0x679f25fe,
    0xfb1fa3cc,
    0x8ea5e9f8,
    0xdb3222f8,
    0x3c7516df,
    0xfd616b15,
    0x2f501ec8,
    0xad0552ab,
    0x323db5fa,
    0xfd238760,
    0x53317b48,
    0x3e00df82,
    0x9e5c57bb,
    0xca6f8ca0,
    0x1a87562e,
    0xdf1769db,
    0xd542a8f6,
    0x287effc3,
    0xac6732c6,
    0x8c4f5573,
    0x695b27b0,
    0xbbca58c8,
    0xe1ffa35d,
    0xb8f011a0,
    0x10fa3d98,
    0xfd2183b8,
    0x4afcb56c,
    0x2dd1d35b,
    0x9a53e479,
    0xb6f84565,
    0xd28e49bc,
    0x4bfb9790,
    0xe1ddf2da,
    0xa4cb7e33,
    0x62fb1341,
    0xcee4c6e8,
    0xef20cada,
    0x36774c01,
    0xd07e9efe,
    0x2bf11fb4,
    0x95dbda4d,
    0xae909198,
    0xeaad8e71,
    0x6b93d5a0,
    0xd08ed1d0,
    0xafc725e0,
    0x8e3c5b2f,
    0x8e7594b7,
    0x8ff6e2fb,
    0xf2122b64,
    0x8888b812,
    0x900df01c,
    0x4fad5ea0,
    0x688fc31c,
    0xd1cff191,
    0xb3a8c1ad,
    0x2f2f2218,
    0xbe0e1777,
    0xea752dfe,
    0x8b021fa1,
    0xe5a0cc0f,
    0xb56f74e8,
    0x18acf3d6,
    0xce89e299,
    0xb4a84fe0,
    0xfd13e0b7,
    0x7cc43b81,
    0xd2ada8d9,
    0x165fa266,
    0x80957705,
    0x93cc7314,
    0x211a1477,
    0xe6ad2065,
    0x77b5fa86,
    0xc75442f5,
    0xfb9d35cf,
    0xebcdaf0c,
    0x7b3e89a0,
    0xd6411bd3,
    0xae1e7e49,
    0x00250e2d,
    0x2071b35e,
    0x226800bb,
    0x57b8e0af,
    0x2464369b,
    0xf009b91e,
    0x5563911d,
    0x59dfa6aa,
    0x78c14389,
    0xd95a537f,
    0x207d5ba2,
    0x02e5b9c5,
    0x83260376,
    0x6295cfa9,
    0x11c81968,
    0x4e734a41,
    0xb3472dca,
    0x7b14a94a,
    0x1b510052,
    0x9a532915,
    0xd60f573f,
    0xbc9bc6e4,
    0x2b60a476,
    0x81e67400,
    0x08ba6fb5,
    0x571be91f,
    0xf296ec6b,
    0x2a0dd915,
    0xb6636521,
    0xe7b9f9b6,
    0xff34052e,
    0xc5855664,
    0x53b02d5d,
    0xa99f8fa1,
    0x08ba4799,
    0x6e85076a,
    0x4b7a70e9,
    0xb5b32944,
    0xdb75092e,
    0xc4192623,
    0xad6ea6b0,
    0x49a7df7d,
    0x9cee60b8,
    0x8fedb266,
    0xecaa8c71,
    0x699a17ff,
    0x5664526c,
    0xc2b19ee1,
    0x193602a5,
    0x75094c29,
    0xa0591340,
    0xe4183a3e,
    0x3f54989a,
    0x5b429d65,
    0x6b8fe4d6,
    0x99f73fd6,
    0xa1d29c07,
    0xefe830f5,
    0x4d2d38e6,
    0xf0255dc1,
    0x4cdd2086,
    0x8470eb26,
    0x6382e9c6,
    0x021ecc5e,
    0x09686b3f,
    0x3ebaefc9,
    0x3c971814,
    0x6b6a70a1,
    0x687f3584,
    0x52a0e286,
    0xb79c5305,
    0xaa500737,
    0x3e07841c,
    0x7fdeae5c,
    0x8e7d44ec,
    0x5716f2b8,
    0xb03ada37,
    0xf0500c0d,
    0xf01c1f04,
    0x0200b3ff,
    0xae0cf51a,
    0x3cb574b2,
    0x25837a58,
    0xdc0921bd,
    0xd19113f9,
    0x7ca92ff6,
    0x94324773,
    0x22f54701,
    0x3ae5e581,
    0x37c2dadc,
    0xc8b57634,
    0x9af3dda7,
    0xa9446146,
    0x0fd0030e,
    0xecc8c73e,
    0xa4751e41,
    0xe238cd99,
    0x3bea0e2f,
    0x3280bba1,
    0x183eb331,
    0x4e548b38,
    0x4f6db908,
    0x6f420d03,
    0xf60a04bf,
    0x2cb81290,
    0x24977c79,
    0x5679b072,
    0xbcaf89af,
    0xde9a771f,
    0xd9930810,
    0xb38bae12,
    0xdccf3f2e,
    0x5512721f,
    0x2e6b7124,
    0x501adde6,
    0x9f84cd87,
    0x7a584718,
    0x7408da17,
    0xbc9f9abc,
    0xe94b7d8c,
    0xec7aec3a,
    0xdb851dfa,
    0x63094366,
    0xc464c3d2,
    0xef1c1847,
    0x3215d908,
    0xdd433b37,
    0x24c2ba16,
    0x12a14d43,
    0x2a65c451,
    0x50940002,
    0x133ae4dd,
    0x71dff89e,
    0x10314e55,
    0x81ac77d6,
    0x5f11199b,
    0x043556f1,
    0xd7a3c76b,
    0x3c11183b,
    0x5924a509,
    0xf28fe6ed,
    0x97f1fbfa,
    0x9ebabf2c,
    0x1e153c6e,
    0x86e34570,
    0xeae96fb1,
    0x860e5e0a,
    0x5a3e2ab3,
    0x771fe71c,
    0x4e3d06fa,
    0x2965dcb9,
    0x99e71d0f,
    0x803e89d6,
    0x5266c825,
    0x2e4cc978,
    0x9c10b36a,
    0xc6150eba,
    0x94e2ea78,
    0xa5fc3c53,
    0x1e0a2df4,
    0xf2f74ea7,
    0x361d2b3d,
    0x1939260f,
    0x19c27960,
    0x5223a708,
    0xf71312b6,
    0xebadfe6e,
    0xeac31f66,
    0xe3bc4595,
    0xa67bc883,
    0xb17f37d1,
    0x018cff28,
    0xc332ddef,
    0xbe6c5aa5,
    0x65582185,
    0x68ab9802,
    0xeecea50f,
    0xdb2f953b,
    0x2aef7dad,
    0x5b6e2f84,
    0x1521b628,
    0x29076170,
    0xecdd4775,
    0x619f1510,
    0x13cca830,
    0xeb61bd96,
    0x0334fe1e,
    0xaa0363cf,
    0xb5735c90,
    0x4c70a239,
    0xd59e9e0b,
    0xcbaade14,
    0xeecc86bc,
    0x60622ca7,
    0x9cab5cab,
    0xb2f3846e,
    0x648b1eaf,
    0x19bdf0ca,
    0xa02369b9,
    0x655abb50,
    0x40685a32,
    0x3c2ab4b3,
    0x319ee9d5,
    0xc021b8f7,
    0x9b540b19,
    0x875fa099,
    0x95f7997e,
    0x623d7da8,
    0xf837889a,
    0x97e32d77,
    0x11ed935f,
    0x16681281,
    0x0e358829,
    0xc7e61fd6,
    0x96dedfa1,
    0x7858ba99,
    0x57f584a5,
    0x1b227263,
    0x9b83c3ff,
    0x1ac24696,
    0xcdb30aeb,
    0x532e3054,
    0x8fd948e4,
    0x6dbc3128,
    0x58ebf2ef,
    0x34c6ffea,
    0xfe28ed61,
    0xee7c3c73,
    0x5d4a14d9,
    0xe864b7e3,
    0x42105d14,
    0x203e13e0,
    0x45eee2b6,
    0xa3aaabea,
    0xdb6c4f15,
    0xfacb4fd0,
    0xc742f442,
    0xef6abbb5,
    0x654f3b1d,
    0x41cd2105,
    0xd81e799e,
    0x86854dc7,
    0xe44b476a,
    0x3d816250,
    0xcf62a1f2,
    0x5b8d2646,
    0xfc8883a0,
    0xc1c7b6a3,
    0x7f1524c3,
    0x69cb7492,
    0x47848a0b,
    0x5692b285,
    0x095bbf00,
    0xad19489d,
    0x1462b174,
    0x23820e00,
    0x58428d2a,
    0x0c55f5ea,
    0x1dadf43e,
    0x233f7061,
    0x3372f092,
    0x8d937e41,
    0xd65fecf1,
    0x6c223bdb,
    0x7cde3759,
    0xcbee7460,
    0x4085f2a7,
    0xce77326e,
    0xa6078084,
    0x19f8509e,
    0xe8efd855,
    0x61d99735,
    0xa969a7aa,
    0xc50c06c2,
    0x5a04abfc,
    0x800bcadc,
    0x9e447a2e,
    0xc3453484,
    0xfdd56705,
    0x0e1e9ec9,
    0xdb73dbd3,
    0x105588cd,
    0x675fda79,
    0xe3674340,
    0xc5c43465,
    0x713e38d8,
    0x3d28f89e,
    0xf16dff20,
    0x153e21e7,
    0x8fb03d4a,
    0xe6e39f2b,
    0xdb83adf7,
    0xe93d5a68,
    0x948140f7,
    0xf64c261c,
    0x94692934,
    0x411520f7,
    0x7602d4f7,
    0xbcf46b2e,
    0xd4a20068,
    0xd4082471,
    0x3320f46a,
    0x43b7d4b7,
    0x500061af,
    0x1e39f62e,
    0x97244546,
    0x14214f74,
    0xbf8b8840,
    0x4d95fc1d,
    0x96b591af,
    0x70f4ddd3,
    0x66a02f45,
    0xbfbc09ec,
    0x03bd9785,
    0x7fac6dd0,
    0x31cb8504,
    0x96eb27b3,
    0x55fd3941,
    0xda2547e6,
    0xabca0a9a,
    0x28507825,
    0x530429f4,
    0x0a2c86da,
    0xe9b66dfb,
    0x68dc1462,
    0xd7486900,
    0x680ec0a4,
    0x27a18dee,
    0x4f3ffea2,
    0xe887ad8c,
    0xb58ce006,
    0x7af4d6b6,
    0xaace1e7c,
    0xd3375fec,
    0xce78a399,
    0x406b2a42,
    0x20fe9e35,
    0xd9f385b9,
    0xee39d7ab,
    0x3b124e8b,
    0x1dc9faf7,
    0x4b6d1856,
    0x26a36631,
    0xeae397b2,
    0x3a6efa74,
    0xdd5b4332,
    0x6841e7f7,
    0xca7820fb,
    0xfb0af54e,
    0xd8feb397,
    0x454056ac,
    0xba489527,
    0x55533a3a,
    0x20838d87,
    0xfe6ba9b7,
    0xd096954b,
    0x55a867bc,
    0xa1159a58,
    0xcca92963,
    0x99e1db33,
    0xa62a4a56,
    0x3f3125f9,
    0x5ef47e1c,
    0x9029317c,
    0xfdf8e802,
    0x04272f70,
    0x80bb155c,
    0x05282ce3,
    0x95c11548,
    0xe4c66d22,
    0x48c1133f,
    0xc70f86dc,
    0x07f9c9ee,
    0x41041f0f,
    0x404779a4,
    0x5d886e17,
    0x325f51eb,
    0xd59bc0d1,
    0xf2bcc18f,
    0x41113564,
    0x257b7834,
    0x602a9c60,
    0xdff8e8a3,
    0x1f636c1b,
    0x0e12b4c2,
    0x02e1329e,
    0xaf664fd1,
    0xcad18115,
    0x6b2395e0,
    0x333e92e1,
    0x3b240b62,
    0xeebeb922,
    0x85b2a20e,
    0xe6ba0d99,
    0xde720c8c,
    0x2da2f728,
    0xd0127845,
    0x95b794fd,
    0x647d0862,
    0xe7ccf5f0,
    0x5449a36f,
    0x877d48fa,
    0xc39dfd27,
    0xf33e8d1e,
    0x0a476341,
    0x992eff74,
    0x3a6f6eab,
    0xf4f8fd37,
    0xa812dc60,
    0xa1ebddf8,
    0x991be14c,
    0xdb6e6b0d,
    0xc67b5510,
    0x6d672c37,
    0x2765d43b,
    0xdcd0e804,
    0xf1290dc7,
    0xcc00ffa3,
    0xb5390f92,
    0x690fed0b,
    0x667b9ffb,
    0xcedb7d9c,
    0xa091cf0b,
    0xd9155ea3,
    0xbb132f88,
    0x515bad24,
    0x7b9479bf,
    0x763bd6eb,
    0x37392eb3,
    0xcc115979,
    0x8026e297,
    0xf42e312d,
    0x6842ada7,
    0xc66a2b3b,
    0x12754ccc,
    0x782ef11c,
    0x6a124237,
    0xb79251e7,
    0x06a1bbe6,
    0x4bfb6350,
    0x1a6b1018,
    0x11caedfa,
    0x3d25bdd8,
    0xe2e1c3c9,
    0x44421659,
    0x0a121386,
    0xd90cec6e,
    0xd5abea2a,
    0x64af674e,
    0xda86a85f,
    0xbebfe988,
    0x64e4c3fe,
    0x9dbc8057,
    0xf0f7c086,
    0x60787bf8,
    0x6003604d,
    0xd1fd8346,
    0xf6381fb0,
    0x7745ae04,
    0xd736fccc,
    0x83426b33,
    0xf01eab71,
    0xb0804187,
    0x3c005e5f,
    0x77a057be,
    0xbde8ae24,
    0x55464299,
    0xbf582e61,
    0x4e58f48f,
    0xf2ddfda2,
    0xf474ef38,
    0x8789bdc2,
    0x5366f9c3,
    0xc8b38e74,
    0xb475f255,
    0x46fcd9b9,
    0x7aeb2661,
    0x8b1ddf84,
    0x846a0e79,
    0x915f95e2,
    0x466e598e,
    0x20b45770,
    0x8cd55591,
    0xc902de4c,
    0xb90bace1,
    0xbb8205d0,
    0x11a86248,
    0x7574a99e,
    0xb77f19b6,
    0xe0a9dc09,
    0x662d09a1,
    0xc4324633,
    0xe85a1f02,
    0x09f0be8c,
    0x4a99a025,
    0x1d6efe10,
    0x1ab93d1d,
    0x0ba5a4df,
    0xa186f20f,
    0x2868f169,
    0xdcb7da83,
    0x573906fe,
    0xa1e2ce9b,
    0x4fcd7f52,
    0x50115e01,
    0xa70683fa,
    0xa002b5c4,
    0x0de6d027,
    0x9af88c27,
    0x773f8641,
    0xc3604c06,
    0x61a806b5,
    0xf0177a28,
    0xc0f586e0,
    0x006058aa,
    0x30dc7d62,
    0x11e69ed7,
    0x2338ea63,
    0x53c2dd94,
    0xc2c21634,
    0xbbcbee56,
    0x90bcb6de,
    0xebfc7da1,
    0xce591d76,
    0x6f05e409,
    0x4b7c0188,
    0x39720a3d,
    0x7c927c24,
    0x86e3725f,
    0x724d9db9,
    0x1ac15bb4,
    0xd39eb8fc,
    0xed545578,
    0x08fca5b5,
    0xd83d7cd3,
    0x4dad0fc4,
    0x1e50ef5e,
    0xb161e6f8,
    0xa28514d9,
    0x6c51133c,
    0x6fd5c7e7,
    0x56e14ec4,
    0x362abfce,
    0xddc6c837,
    0xd79a3234,
    0x92638212,
    0x670efa8e,
    0x406000e0,
    0x3a39ce37,
    0xd3faf5cf,
    0xabc27737,
    0x5ac52d1b,
    0x5cb0679e,
    0x4fa33742,
    0xd3822740,
    0x99bc9bbe,
    0xd5118e9d,
    0xbf0f7315,
    0xd62d1c7e,
    0xc700c47b,
    0xb78c1b6b,
    0x21a19045,
    0xb26eb1be,
    0x6a366eb4,
    0x5748ab2f,
    0xbc946e79,
    0xc6a376d2,
    0x6549c2c8,
    0x530ff8ee,
    0x468dde7d,
    0xd5730a1d,
    0x4cd04dc6,
    0x2939bbdb,
    0xa9ba4650,
    0xac9526e8,
    0xbe5ee304,
    0xa1fad5f0,
    0x6a2d519a,
    0x63ef8ce2,
    0x9a86ee22,
    0xc089c2b8,
    0x43242ef6,
    0xa51e03aa,
    0x9cf2d0a4,
    0x83c061ba,
    0x9be96a4d,
    0x8fe51550,
    0xba645bd6,
    0x2826a2f9,
    0xa73a3ae1,
    0x4ba99586,
    0xef5562e9,
    0xc72fefd3,
    0xf752f7da,
    0x3f046f69,
    0x77fa0a59,
    0x80e4a915,
    0x87b08601,
    0x9b09e6ad,
    0x3b3ee593,
    0xe990fd5a,
    0x9e34d797,
    0x2cf0b7d9,
    0x022b8b51,
    0x96d5ac3a,
    0x017da67d,
    0xd1cf3ed6,
    0x7c7d2d28,
    0x1f9f25cf,
    0xadf2b89b,
    0x5ad6b472,
    0x5a88f54c,
    0xe029ac71,
    0xe019a5e6,
    0x47b0acfd,
    0xed93fa9b,
    0xe8d3c48d,
    0x283b57cc,
    0xf8d56629,
    0x79132e28,
    0x785f0191,
    0xed756055,
    0xf7960e44,
    0xe3d35e8c,
    0x15056dd4,
    0x88f46dba,
    0x03a16125,
    0x0564f0bd,
    0xc3eb9e15,
    0x3c9057a2,
    0x97271aec,
    0xa93a072a,
    0x1b3f6d9b,
    0x1e6321f5,
    0xf59c66fb,
    0x26dcf319,
    0x7533d928,
    0xb155fdf5,
    0x03563482,
    0x8aba3cbb,
    0x28517711,
    0xc20ad9f8,
    0xabcc5167,
    0xccad925f,
    0x4de81751,
    0x3830dc8e,
    0x379d5862,
    0x9320f991,
    0xea7a90c2,
    0xfb3e7bce,
    0x5121ce64,
    0x774fbe32,
    0xa8b6e37e,
    0xc3293d46,
    0x48de5369,
    0x6413e680,
    0xa2ae0810,
    0xdd6db224,
    0x69852dfd,
    0x09072166,
    0xb39a460a,
    0x6445c0dd,
    0x586cdecf,
    0x1c20c8ae,
    0x5bbef7dd,
    0x1b588d40,
    0xccd2017f,
    0x6bb4e3bb,
    0xdda26a7e,
    0x3a59ff45,
    0x3e350a44,
    0xbcb4cdd5,
    0x72eacea8,
    0xfa6484bb,
    0x8d6612ae,
    0xbf3c6f47,
    0xd29be463,
    0x542f5d9e,
    0xaec2771b,
    0xf64e6370,
    0x740e0d8d,
    0xe75b1357,
    0xf8721671,
    0xaf537d5d,
    0x4040cb08,
    0x4eb4e2cc,
    0x34d2466a,
    0x0115af84,
    0xe1b00428,
    0x95983a1d,
    0x06b89fb4,
    0xce6ea048,
    0x6f3f3b82,
    0x3520ab82,
    0x011a1d4b,
    0x277227f8,
    0x611560b1,
    0xe7933fdc,
    0xbb3a792b,
    0x344525bd,
    0xa08839e1,
    0x51ce794b,
    0x2f32c9b7,
    0xa01fbac9,
    0xe01cc87e,
    0xbcc7d1f6,
    0xcf0111c3,
    0xa1e8aac7,
    0x1a908749,
    0xd44fbd9a,
    0xd0dadecb,
    0xd50ada38,
    0x0339c32a,
    0xc6913667,
    0x8df9317c,
    0xe0b12b4f,
    0xf79e59b7,
    0x43f5bb3a,
    0xf2d519ff,
    0x27d9459c,
    0xbf97222c,
    0x15e6fc2a,
    0x0f91fc71,
    0x9b941525,
    0xfae59361,
    0xceb69ceb,
    0xc2a86459,
    0x12baa8d1,
    0xb6c1075e,
    0xe3056a0c,
    0x10d25065,
    0xcb03a442,
    0xe0ec6e0e,
    0x1698db3b,
    0x4c98a0be,
    0x3278e964,
    0x9f1f9532,
    0xe0d392df,
    0xd3a0342b,
    0x8971f21e,
    0x1b0a7441,
    0x4ba3348c,
    0xc5be7120,
    0xc37632d8,
    0xdf359f8d,
    0x9b992f2e,
    0xe60b6f47,
    0x0fe3f11d,
    0xe54cda54,
    0x1edad891,
    0xce6279cf,
    0xcd3e7e6f,
    0x1618b166,
    0xfd2c1d05,
    0x848fd2c5,
    0xf6fb2299,
    0xf523f357,
    0xa6327623,
    0x93a83531,
    0x56cccd02,
    0xacf08162,
    0x5a75ebb5,
    0x6e163697,
    0x88d273cc,
    0xde966292,
    0x81b949d0,
    0x4c50901b,
    0x71c65614,
    0xe6c6c7bd,
    0x327a140a,
    0x45e1d006,
    0xc3f27b9a,
    0xc9aa53fd,
    0x62a80f00,
    0xbb25bfe2,
    0x35bdd2f6,
    0x71126905,
    0xb2040222,
    0xb6cbcf7c,
    0xcd769c2b,
    0x53113ec0,
    0x1640e3d3,
    0x38abbd60,
    0x2547adf0,
    0xba38209c,
    0xf746ce76,
    0x77afa1c5,
    0x20756060,
    0x85cbfe4e,
    0x8ae88dd8,
    0x7aaaf9b0,
    0x4cf9aa7e,
    0x1948c25c,
    0x02fb8a8c,
    0x01c36ae4,
    0xd6ebe1f9,
    0x90d4f869,
    0xa65cdea0,
    0x3f09252d,
    0xc208e69f,
    0xb74e6132,
    0xce77e25b,
    0x578fdfe3,
    0x3ac372e6
];
/**
 * @type {Array.<number>}
 * @const
 * @inner
 */ var C_ORIG = [
    0x4f727068,
    0x65616e42,
    0x65686f6c,
    0x64657253,
    0x63727944,
    0x6f756274
];
/**
 * @param {Array.<number>} lr
 * @param {number} off
 * @param {Array.<number>} P
 * @param {Array.<number>} S
 * @returns {Array.<number>}
 * @inner
 */ function _encipher(lr, off, P, S) {
    // This is our bottleneck: 1714/1905 ticks / 90% - see profile.txt
    var n, l = lr[off], r = lr[off + 1];
    l ^= P[0];
    /*
    for (var i=0, k=BLOWFISH_NUM_ROUNDS-2; i<=k;)
        // Feistel substitution on left word
        n  = S[l >>> 24],
        n += S[0x100 | ((l >> 16) & 0xff)],
        n ^= S[0x200 | ((l >> 8) & 0xff)],
        n += S[0x300 | (l & 0xff)],
        r ^= n ^ P[++i],
        // Feistel substitution on right word
        n  = S[r >>> 24],
        n += S[0x100 | ((r >> 16) & 0xff)],
        n ^= S[0x200 | ((r >> 8) & 0xff)],
        n += S[0x300 | (r & 0xff)],
        l ^= n ^ P[++i];
    */ //The following is an unrolled version of the above loop.
    //Iteration 0
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[1];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[2];
    //Iteration 1
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[3];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[4];
    //Iteration 2
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[5];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[6];
    //Iteration 3
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[7];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[8];
    //Iteration 4
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[9];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[10];
    //Iteration 5
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[11];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[12];
    //Iteration 6
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[13];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[14];
    //Iteration 7
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[15];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[16];
    lr[off] = r ^ P[BLOWFISH_NUM_ROUNDS + 1];
    lr[off + 1] = l;
    return lr;
}
/**
 * @param {Array.<number>} data
 * @param {number} offp
 * @returns {{key: number, offp: number}}
 * @inner
 */ function _streamtoword(data, offp) {
    for(var i = 0, word = 0; i < 4; ++i)word = word << 8 | data[offp] & 0xff, offp = (offp + 1) % data.length;
    return {
        key: word,
        offp: offp
    };
}
/**
 * @param {Array.<number>} key
 * @param {Array.<number>} P
 * @param {Array.<number>} S
 * @inner
 */ function _key(key, P, S) {
    var offset = 0, lr = [
        0,
        0
    ], plen = P.length, slen = S.length, sw;
    for(var i = 0; i < plen; i++)sw = _streamtoword(key, offset), offset = sw.offp, P[i] = P[i] ^ sw.key;
    for(i = 0; i < plen; i += 2)lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
    for(i = 0; i < slen; i += 2)lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
}
/**
 * Expensive key schedule Blowfish.
 * @param {Array.<number>} data
 * @param {Array.<number>} key
 * @param {Array.<number>} P
 * @param {Array.<number>} S
 * @inner
 */ function _ekskey(data, key, P, S) {
    var offp = 0, lr = [
        0,
        0
    ], plen = P.length, slen = S.length, sw;
    for(var i = 0; i < plen; i++)sw = _streamtoword(key, offp), offp = sw.offp, P[i] = P[i] ^ sw.key;
    offp = 0;
    for(i = 0; i < plen; i += 2)sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
    for(i = 0; i < slen; i += 2)sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
}
/**
 * Internaly crypts a string.
 * @param {Array.<number>} b Bytes to crypt
 * @param {Array.<number>} salt Salt bytes to use
 * @param {number} rounds Number of rounds
 * @param {function(Error, Array.<number>=)=} callback Callback receiving the error, if any, and the resulting bytes. If
 *  omitted, the operation will be performed synchronously.
 *  @param {function(number)=} progressCallback Callback called with the current progress
 * @returns {!Array.<number>|undefined} Resulting bytes if callback has been omitted, otherwise `undefined`
 * @inner
 */ function _crypt(b, salt, rounds, callback, progressCallback) {
    var cdata = C_ORIG.slice(), clen = cdata.length, err;
    // Validate
    if (rounds < 4 || rounds > 31) {
        err = Error("Illegal number of rounds (4-31): " + rounds);
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    if (salt.length !== BCRYPT_SALT_LEN) {
        err = Error("Illegal salt length: " + salt.length + " != " + BCRYPT_SALT_LEN);
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    rounds = 1 << rounds >>> 0;
    var P, S, i = 0, j;
    //Use typed arrays when available - huge speedup!
    if (typeof Int32Array === "function") {
        P = new Int32Array(P_ORIG);
        S = new Int32Array(S_ORIG);
    } else {
        P = P_ORIG.slice();
        S = S_ORIG.slice();
    }
    _ekskey(salt, b, P, S);
    /**
   * Calcualtes the next round.
   * @returns {Array.<number>|undefined} Resulting array if callback has been omitted, otherwise `undefined`
   * @inner
   */ function next() {
        if (progressCallback) progressCallback(i / rounds);
        if (i < rounds) {
            var start = Date.now();
            for(; i < rounds;){
                i = i + 1;
                _key(b, P, S);
                _key(salt, P, S);
                if (Date.now() - start > MAX_EXECUTION_TIME) break;
            }
        } else {
            for(i = 0; i < 64; i++)for(j = 0; j < clen >> 1; j++)_encipher(cdata, j << 1, P, S);
            var ret = [];
            for(i = 0; i < clen; i++)ret.push((cdata[i] >> 24 & 0xff) >>> 0), ret.push((cdata[i] >> 16 & 0xff) >>> 0), ret.push((cdata[i] >> 8 & 0xff) >>> 0), ret.push((cdata[i] & 0xff) >>> 0);
            if (callback) {
                callback(null, ret);
                return;
            } else return ret;
        }
        if (callback) nextTick(next);
    }
    // Async
    if (typeof callback !== "undefined") {
        next();
    // Sync
    } else {
        var res;
        while(true)if (typeof (res = next()) !== "undefined") return res || [];
    }
}
/**
 * Internally hashes a password.
 * @param {string} password Password to hash
 * @param {?string} salt Salt to use, actually never null
 * @param {function(Error, string=)=} callback Callback receiving the error, if any, and the resulting hash. If omitted,
 *  hashing is performed synchronously.
 *  @param {function(number)=} progressCallback Callback called with the current progress
 * @returns {string|undefined} Resulting hash if callback has been omitted, otherwise `undefined`
 * @inner
 */ function _hash(password, salt, callback, progressCallback) {
    var err;
    if (typeof password !== "string" || typeof salt !== "string") {
        err = Error("Invalid string / salt: Not a string");
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    // Validate the salt
    var minor, offset;
    if (salt.charAt(0) !== "$" || salt.charAt(1) !== "2") {
        err = Error("Invalid salt version: " + salt.substring(0, 2));
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    if (salt.charAt(2) === "$") minor = String.fromCharCode(0), offset = 3;
    else {
        minor = salt.charAt(2);
        if (minor !== "a" && minor !== "b" && minor !== "y" || salt.charAt(3) !== "$") {
            err = Error("Invalid salt revision: " + salt.substring(2, 4));
            if (callback) {
                nextTick(callback.bind(this, err));
                return;
            } else throw err;
        }
        offset = 4;
    }
    // Extract number of rounds
    if (salt.charAt(offset + 2) > "$") {
        err = Error("Missing salt rounds");
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    var r1 = parseInt(salt.substring(offset, offset + 1), 10) * 10, r2 = parseInt(salt.substring(offset + 1, offset + 2), 10), rounds = r1 + r2, real_salt = salt.substring(offset + 3, offset + 25);
    password += minor >= "a" ? "\x00" : "";
    var passwordb = utf8Array(password), saltb = base64_decode(real_salt, BCRYPT_SALT_LEN);
    /**
   * Finishes hashing.
   * @param {Array.<number>} bytes Byte array
   * @returns {string}
   * @inner
   */ function finish(bytes) {
        var res = [];
        res.push("$2");
        if (minor >= "a") res.push(minor);
        res.push("$");
        if (rounds < 10) res.push("0");
        res.push(rounds.toString());
        res.push("$");
        res.push(base64_encode(saltb, saltb.length));
        res.push(base64_encode(bytes, C_ORIG.length * 4 - 1));
        return res.join("");
    }
    // Sync
    if (typeof callback == "undefined") return finish(_crypt(passwordb, saltb, rounds));
    else {
        _crypt(passwordb, saltb, rounds, function(err, bytes) {
            if (err) callback(err, null);
            else callback(null, finish(bytes));
        }, progressCallback);
    }
}
function encodeBase64(bytes, length) {
    return base64_encode(bytes, length);
}
function decodeBase64(string, length) {
    return base64_decode(string, length);
}
const __TURBOPACK__default__export__ = {
    setRandomFallback,
    genSaltSync,
    genSalt,
    hashSync,
    hash,
    compareSync,
    compare,
    getRounds,
    getSalt,
    truncates,
    encodeBase64,
    decodeBase64
};
}),
"[project]/node_modules/postgres-array/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const BACKSLASH = '\\';
const DQUOT = '"';
const LBRACE = '{';
const RBRACE = '}';
const LBRACKET = '[';
const EQUALS = '=';
const COMMA = ',';
/** When the raw value is this, it means a literal `null` */ const NULL_STRING = 'NULL';
/**
 * Parses an array according to
 * https://www.postgresql.org/docs/17/arrays.html#ARRAYS-IO
 *
 * Trusts the data (mostly), so only hook up to trusted Postgres servers.
 */ function makeParseArrayWithTransform(transform) {
    const haveTransform = transform != null;
    return function parseArray(str) {
        const rbraceIndex = str.length - 1;
        if (rbraceIndex === 1) {
            return [];
        }
        if (str[rbraceIndex] !== RBRACE) {
            throw new Error('Invalid array text - must end with }');
        }
        // If starts with `[`, it is specifying the index boundas. Skip past first `=`.
        let position = 0;
        if (str[position] === LBRACKET) {
            position = str.indexOf(EQUALS) + 1;
        }
        if (str[position++] !== LBRACE) {
            throw new Error('Invalid array text - must start with {');
        }
        const output = [];
        let current = output;
        const stack = [];
        let currentStringStart = position;
        let currentString = '';
        let expectValue = true;
        for(; position < rbraceIndex; ++position){
            let char = str[position];
            // > The array output routine will put double quotes around element values if
            // > they are empty strings, contain curly braces, delimiter characters, double
            // > quotes, backslashes, or white space, or match the word NULL. Double quotes
            // > and backslashes embedded in element values will be backslash-escaped.
            if (char === DQUOT) {
                // It's escaped
                currentStringStart = ++position;
                let dquot = str.indexOf(DQUOT, currentStringStart);
                let backSlash = str.indexOf(BACKSLASH, currentStringStart);
                while(backSlash !== -1 && backSlash < dquot){
                    position = backSlash;
                    const part = str.slice(currentStringStart, position);
                    currentString += part;
                    currentStringStart = ++position;
                    if (dquot === position++) {
                        // This was an escaped doublequote; find the next one!
                        dquot = str.indexOf(DQUOT, position);
                    }
                    // Either way, find the next backslash
                    backSlash = str.indexOf(BACKSLASH, position);
                }
                position = dquot;
                const part = str.slice(currentStringStart, position);
                currentString += part;
                current.push(haveTransform ? transform(currentString) : currentString);
                currentString = '';
                expectValue = false;
            } else if (char === LBRACE) {
                const newArray = [];
                current.push(newArray);
                stack.push(current);
                current = newArray;
                currentStringStart = position + 1;
                expectValue = true;
            } else if (char === COMMA) {
                expectValue = true;
            } else if (char === RBRACE) {
                expectValue = false;
                const arr = stack.pop();
                if (arr === undefined) {
                    throw new Error("Invalid array text - too many '}'");
                }
                current = arr;
            } else if (expectValue) {
                currentStringStart = position;
                while((char = str[position]) !== COMMA && char !== RBRACE && position < rbraceIndex){
                    ++position;
                }
                const part = str.slice(currentStringStart, position--);
                current.push(part === NULL_STRING ? null : haveTransform ? transform(part) : part);
                expectValue = false;
            } else {
                throw new Error('Was expecting delimeter');
            }
        }
        return output;
    };
}
const parseArray = makeParseArrayWithTransform();
exports.parse = (source, transform)=>transform != null ? makeParseArrayWithTransform(transform)(source) : parseArray(source);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__013h84n._.js.map