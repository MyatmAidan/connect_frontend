(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Hackathon/website/lib/validation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validationMessages",
    ()=>validationMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$i18n$2f$locales$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/i18n/locales/en.json (json)");
;
const validationMessages = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$i18n$2f$locales$2f$en$2e$json__$28$json$29$__["default"].validation;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Hackathon/website/schemas/loginSchema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loginSchema",
    ()=>loginSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/lib/validation.ts [app-client] (ecmascript)");
;
;
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validationMessages"].email),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validationMessages"].passwordRequired)
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Hackathon/website/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/ui/card.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/ui/card.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/ui/card.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/ui/card.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-(--card-spacing)", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/ui/card.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/ui/card.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Hackathon/website/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/ui/label.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Hackathon/website/store/company-auth-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCompanyAuthStore",
    ()=>useCompanyAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/api/company-auth.ts [app-client] (ecmascript)");
;
;
;
const useCompanyAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        company: null,
        token: null,
        isAuthenticated: false,
        login: (company, token)=>set({
                company,
                token,
                isAuthenticated: true
            }),
        logout: ()=>set({
                company: null,
                token: null,
                isAuthenticated: false
            }),
        setCompany: (company)=>set({
                company
            }),
        refetchCompany: async ()=>{
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanyMeApi"])();
                set({
                    company: data,
                    isAuthenticated: true
                });
            } catch  {
                set({
                    company: null,
                    token: null,
                    isAuthenticated: false
                });
            }
        }
    }), {
    name: "connect-company-auth",
    partialize: (state)=>({
            company: state.company,
            token: state.token,
            isAuthenticated: state.isAuthenticated
        }),
    onRehydrateStorage: ()=>(state)=>{
            if (state?.token) {
                state.isAuthenticated = true;
            }
        }
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Hackathon/website/api/company-api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "companyApi",
    ()=>companyApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$company$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/store/company-auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$loading$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/store/loading-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/i18n/config.ts [app-client] (ecmascript)");
;
;
;
;
;
const companyApiBaseUrl = ("TURBOPACK compile-time value", "http://127.0.0.1:8000/api/v1/company") || "http://localhost:8000/api/v1/company";
const companyApi = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: companyApiBaseUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});
companyApi.interceptors.request.use((config)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$loading$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoadingStore"].getState().incrementApiLoading();
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$company$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompanyAuthStore"].getState().token || "";
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        const lng = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]?.language === "string" && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].language || localStorage.getItem("i18nextLng") || "en";
        config.headers["Accept-Language"] = lng;
    }
    if (config.data instanceof FormData) {
        delete config.headers["Content-Type"];
    }
    return config;
});
companyApi.interceptors.response.use((response)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$loading$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoadingStore"].getState().decrementApiLoading();
    }
    if (response.status === 200 || response.status === 201) {
        return response.data;
    }
    return response;
}, (error)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$loading$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoadingStore"].getState().decrementApiLoading();
        const status = error.response?.status;
        if (status === 401 || status === 419) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$company$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompanyAuthStore"].getState().logout();
            window.dispatchEvent(new Event("company:unauthorized"));
        } else if (status === 403) {
            const requestUrl = String(error.config?.url ?? "");
            if (!requestUrl.includes("/auth/login")) {
                const message = error.response?.data?.message;
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(typeof message === "string" ? message : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].t("auth.unauthorized"));
            }
        }
    }
    return Promise.reject(error);
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Hackathon/website/api/company-auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "companyLoginApi",
    ()=>companyLoginApi,
    "companyLogoutApi",
    ()=>companyLogoutApi,
    "companyRegisterApi",
    ()=>companyRegisterApi,
    "getCompanyMeApi",
    ()=>getCompanyMeApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/api/company-api.ts [app-client] (ecmascript)");
;
async function companyLoginApi(credentials) {
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyApi"].post("/auth/login", credentials);
    const body = result;
    return body.data;
}
async function companyRegisterApi(payload) {
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyApi"].post("/auth/register", payload);
    const body = result;
    return body.data;
}
async function companyLogoutApi() {
    await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyApi"].post("/auth/logout");
}
async function getCompanyMeApi() {
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyApi"].get("/auth/me");
    const body = result;
    return body.data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Hackathon/website/hooks/useCompanyAuthMutations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCompanyLoginMutation",
    ()=>useCompanyLoginMutation,
    "useCompanyLogoutMutation",
    ()=>useCompanyLogoutMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/api/company-auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$company$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/store/company-auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/hooks/useTranslation.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const COMPANY_AUTH_QUERY_KEY = [
    "company-auth"
];
function useCompanyLoginMutation() {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const locale = params?.locale || "en";
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$company$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompanyAuthStore"])({
        "useCompanyLoginMutation.useCompanyAuthStore[login]": (s)=>s.login
    }["useCompanyLoginMutation.useCompanyAuthStore[login]"]);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCompanyLoginMutation.useMutation": (credentials)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyLoginApi"])(credentials)
        }["useCompanyLoginMutation.useMutation"],
        onSuccess: {
            "useCompanyLoginMutation.useMutation": async (data)=>{
                login(data.company, data.token);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("auth.login"));
                queryClient.setQueryData(COMPANY_AUTH_QUERY_KEY, data.company);
                await queryClient.invalidateQueries();
                router.replace(`/company/${locale}/dashboard`);
            }
        }["useCompanyLoginMutation.useMutation"]
    });
}
_s(useCompanyLoginMutation, "lEeHaGqOwtnsREpAQVMLvb8PKTY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$company$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompanyAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useCompanyLogoutMutation() {
    _s1();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const locale = params?.locale || "en";
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$company$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompanyAuthStore"])({
        "useCompanyLogoutMutation.useCompanyAuthStore[logout]": (s)=>s.logout
    }["useCompanyLogoutMutation.useCompanyAuthStore[logout]"]);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCompanyLogoutMutation.useMutation": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companyLogoutApi"])()
        }["useCompanyLogoutMutation.useMutation"],
        onSuccess: {
            "useCompanyLogoutMutation.useMutation": async ()=>{
                logout();
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("auth.logout"));
                queryClient.removeQueries({
                    queryKey: COMPANY_AUTH_QUERY_KEY
                });
                router.replace(`/company/${locale}/login`);
            }
        }["useCompanyLogoutMutation.useMutation"],
        onError: {
            "useCompanyLogoutMutation.useMutation": async ()=>{
                logout();
                queryClient.removeQueries({
                    queryKey: COMPANY_AUTH_QUERY_KEY
                });
                router.replace(`/company/${locale}/login`);
            }
        }["useCompanyLogoutMutation.useMutation"]
    });
}
_s1(useCompanyLogoutMutation, "lBQPbHk8HeMj4jdyUP0JWxPtwes=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$company$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompanyAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Hackathon/website/components/portal-login-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortalLoginForm",
    ()=>PortalLoginForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$schemas$2f$loginSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/schemas/loginSchema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useAuthMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/hooks/useAuthMutations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useCompanyAuthMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/hooks/useCompanyAuthMutations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/hooks/useTranslation.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$brand$2f$brand$2d$mark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/components/brand/brand-mark.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
function PortalLoginForm({ className, defaultMode = "admin", ...props }) {
    _s();
    const { locale = "en" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultMode);
    const { mutate: adminLogin, isPending: adminPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useAuthMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoginMutation"])();
    const { mutate: companyLogin, isPending: companyPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useCompanyAuthMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompanyLoginMutation"])();
    const isPending = mode === "admin" ? adminPending : companyPending;
    const isCompany = mode === "company";
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$schemas$2f$loginSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginSchema"]),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortalLoginForm.useEffect": ()=>{
            setMode(defaultMode);
        }
    }["PortalLoginForm.useEffect"], [
        defaultMode
    ]);
    const handleModeSwitch = (next)=>{
        if (next === mode) return;
        setMode(next);
        form.reset({
            email: "",
            password: ""
        });
        form.clearErrors();
    };
    const handleError = (error)=>{
        const axiosError = error;
        const status = axiosError.response?.status;
        const data = axiosError.response?.data;
        const errors = data?.errors;
        if (status === 422 && errors) {
            Object.entries(errors).forEach(([field, messages])=>{
                const message = Array.isArray(messages) ? messages[0] : messages;
                if (message && field in form.getValues()) {
                    form.setError(field, {
                        type: "server",
                        message
                    });
                }
            });
            return;
        }
        if (status === 401) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("auth.invalidCredentials"));
            return;
        }
        if (status === 403) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(data?.message || t("auth.unauthorized"));
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(data?.message || t("auth.unexpectedError"));
    };
    const onSubmit = (values)=>{
        form.clearErrors();
        if (mode === "admin") {
            adminLogin(values, {
                onError: handleError
            });
        } else {
            companyLogin(values, {
                onError: handleError
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-6", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6 md:p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: form.handleSubmit(onSubmit),
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-3 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$brand$2f$brand$2d$mark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrandLogo"], {
                                    className: "h-12 max-w-full"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-semibold tracking-tight",
                                            children: t("auth.welcome")
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground text-sm",
                                            children: t("auth.portalSubtitle")
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-1 rounded-lg bg-muted p-1",
                            role: "tablist",
                            "aria-label": "Sign in as",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": mode === "admin",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-md px-3 py-2 text-sm font-medium transition-colors", mode === "admin" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                    onClick: ()=>handleModeSwitch("admin"),
                                    children: "Admin"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": mode === "company",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-md px-3 py-2 text-sm font-medium transition-colors", mode === "company" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                    onClick: ()=>handleModeSwitch("company"),
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "email",
                                    children: t("auth.email")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "email",
                                    type: "email",
                                    placeholder: t("auth.emailPlaceholder"),
                                    autoComplete: "email",
                                    ...form.register("email")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                form.formState.errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-destructive text-sm",
                                    children: form.formState.errors.email.message
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "password",
                                    children: t("auth.password")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "password",
                                    type: "password",
                                    autoComplete: "current-password",
                                    ...form.register("password")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this),
                                form.formState.errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-destructive text-sm",
                                    children: form.formState.errors.password.message
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                                    lineNumber: 178,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            variant: isCompany ? "secondary" : "default",
                            className: "w-full transition-transform active:scale-[0.98]",
                            disabled: isPending,
                            children: isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "size-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                                        lineNumber: 192,
                                        columnNumber: 19
                                    }, this),
                                    t("common.loading")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                                lineNumber: 191,
                                columnNumber: 17
                            }, this) : t("auth.login")
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this),
                        isCompany ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-sm text-muted-foreground",
                            children: [
                                t("company.auth.noAccount"),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/company/${locale}/register`,
                                    className: "text-primary underline",
                                    children: t("company.auth.register")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                                    lineNumber: 203,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                            lineNumber: 201,
                            columnNumber: 15
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/portal-login-form.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(PortalLoginForm, "81d3j/V0PTUbacfwVSrG+C/SzfE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useAuthMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoginMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useCompanyAuthMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompanyLoginMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = PortalLoginForm;
var _c;
__turbopack_context__.k.register(_c, "PortalLoginForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Hackathon_website_536a8c47._.js.map