(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__1cdfb4e5._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Desktop/Hackathon/website/lib/i18n-config.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>defaultLocale,
    "isValidLocale",
    ()=>isValidLocale,
    "locales",
    ()=>locales
]);
const locales = [
    "en",
    "my"
];
const defaultLocale = "en";
function isValidLocale(locale) {
    return locales.includes(locale);
}
}),
"[project]/Desktop/Hackathon/website/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/lib/i18n-config.ts [middleware-edge] (ecmascript)");
;
;
const STATIC_EXTENSIONS = /\.(jpg|jpeg|png|gif|svg|webp|ico|css|js|woff|woff2|ttf|eot)(\?.*)?$/i;
function getLocaleFromPath(pathname) {
    const segment = pathname.split("/")[1];
    return segment && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isValidLocale"])(segment) ? segment : null;
}
function isNextInternalRequest(request) {
    return request.headers.has("next-action") || request.headers.has("next-router-state-tree") || request.headers.get("rsc") === "1" || request.headers.get("next-router-prefetch") === "1" || request.nextUrl.searchParams.has("_rsc");
}
function middleware(request) {
    const { pathname } = request.nextUrl;
    if (STATIC_EXTENSIONS.test(pathname) || pathname.startsWith("/api/") || pathname.startsWith("/_next/") || isNextInternalRequest(request)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    if (pathname === "/company" || pathname === "/company/") {
        const url = request.nextUrl.clone();
        url.pathname = "/company/en/login";
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
    }
    if (pathname.startsWith("/company/")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const pathnameLocale = getLocaleFromPath(pathname);
    if (!pathnameLocale) {
        const preferred = request.cookies.get("NEXT_LOCALE")?.value || request.headers.get("accept-language")?.split(",")[0]?.split("-")[0] || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultLocale"];
        const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isValidLocale"])(preferred) ? preferred : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultLocale"];
        const url = request.nextUrl.clone();
        url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
    }
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    response.cookies.set("NEXT_LOCALE", pathnameLocale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365
    });
    return response;
}
const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__1cdfb4e5._.js.map