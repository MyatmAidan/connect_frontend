(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/index.parts.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
;
;
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/root/TooltipRootContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipRootContext",
    ()=>TooltipRootContext,
    "useTooltipRootContext",
    ()=>useTooltipRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const TooltipRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) TooltipRootContext.displayName = "TooltipRootContext";
function useTooltipRootContext(optional) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](TooltipRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: TooltipRootContext is missing. Tooltip parts must be placed within <Tooltip.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/store/TooltipStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipStore",
    ()=>TooltipStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/createSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$ReactStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/ReactStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popups/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupTriggerMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popups/popupTriggerMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popups/popupStoreUtils.js [app-client] (ecmascript)");
;
;
;
;
;
;
const selectors = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popupStoreSelectors"],
    disabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.disabled),
    instantType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.instantType),
    isInstantPhase: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.isInstantPhase),
    trackCursorAxis: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.trackCursorAxis),
    disableHoverablePopup: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.disableHoverablePopup),
    lastOpenChangeReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.openChangeReason),
    closeOnClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.closeOnClick),
    closeDelay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.closeDelay),
    hasViewport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.hasViewport)
};
class TooltipStore extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$ReactStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactStore"] {
    constructor(initialState, floatingId, nested = false){
        const triggerElements = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupTriggerMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopupTriggerMap"]();
        const state = {
            ...createInitialState(),
            ...initialState
        };
        state.floatingRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPopupFloatingRootContext"])(triggerElements, floatingId, nested);
        super(state, {
            popupRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"](),
            onOpenChange: undefined,
            onOpenChangeComplete: undefined,
            triggerElements
        }, selectors);
    }
    setOpen = (nextOpen, eventDetails)=>{
        const reason = eventDetails.reason;
        const isHover = reason === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].triggerHover;
        const isFocusOpen = nextOpen && reason === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].triggerFocus;
        const isDismissClose = !nextOpen && (reason === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].triggerPress || reason === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].escapeKey);
        eventDetails.preventUnmountOnClose = ()=>{
            this.set('preventUnmountingOnClose', true);
        };
        this.context.onOpenChange?.(nextOpen, eventDetails);
        if (eventDetails.isCanceled) {
            return;
        }
        this.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
        const changeState = ()=>{
            const updatedState = {
                open: nextOpen,
                openChangeReason: reason
            };
            if (isFocusOpen) {
                updatedState.instantType = 'focus';
            } else if (isDismissClose) {
                updatedState.instantType = 'dismiss';
            } else if (reason === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].triggerHover) {
                updatedState.instantType = undefined;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOpenTriggerState"])(updatedState, nextOpen, eventDetails.trigger);
            this.update(updatedState);
        };
        if (isHover) {
            // If a hover reason is provided, we need to flush the state synchronously. This ensures
            // `node.getAnimations()` knows about the new state.
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](changeState);
        } else {
            changeState();
        }
    };
    // Used by trigger clicks to clear a delayed hover open without reporting a public open-state change.
    cancelPendingOpen(event) {
        this.state.floatingRootContext.dispatchOpenChange(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].triggerPress, event));
    }
    static useStore(externalStore, initialState) {
        /* eslint-disable react-hooks/rules-of-hooks */ const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopupStore"])(externalStore, (floatingId, nested)=>new TooltipStore(initialState, floatingId, nested)).store;
        /* eslint-enable react-hooks/rules-of-hooks */ return store;
    }
}
function createInitialState() {
    return {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInitialPopupStoreState"])(),
        disabled: false,
        instantType: undefined,
        isInstantPhase: false,
        trackCursorAxis: 'none',
        disableHoverablePopup: false,
        openChangeReason: null,
        closeOnClick: true,
        closeDelay: 0,
        hasViewport: false
    };
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/root/TooltipRoot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipRoot",
    ()=>TooltipRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$fastHooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/fastHooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnFirstRender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useOnFirstRender.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$root$2f$TooltipRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/root/TooltipRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useClientPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useClientPoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useDismiss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useDismiss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popups/popupStoreUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$store$2f$TooltipStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/store/TooltipStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
/**
 * Groups all parts of the tooltip.
 * Doesn't render its own HTML element.
 *
 * Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
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
const TooltipRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$fastHooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fastComponent"])(function TooltipRoot(props) {
    const { disabled = false, defaultOpen = false, open: openProp, disableHoverablePopup = false, trackCursorAxis = 'none', actionsRef, onOpenChange, onOpenChangeComplete, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null, children } = props;
    const store = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$store$2f$TooltipStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipStore"].useStore(handle?.store, {
        open: defaultOpen,
        openProp,
        activeTriggerId: defaultTriggerIdProp,
        triggerIdProp
    });
    // Support initially open state when uncontrolled
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnFirstRender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnFirstRender"])({
        "TooltipRoot.TooltipRoot.useOnFirstRender": ()=>{
            if (openProp === undefined && store.state.open === false && defaultOpen === true) {
                store.update({
                    open: true,
                    activeTriggerId: defaultTriggerIdProp
                });
            }
        }
    }["TooltipRoot.TooltipRoot.useOnFirstRender"]);
    store.useControlledProp('openProp', openProp);
    store.useControlledProp('triggerIdProp', triggerIdProp);
    store.useContextCallback('onOpenChange', onOpenChange);
    store.useContextCallback('onOpenChangeComplete', onOpenChangeComplete);
    const openState = store.useState('open');
    const open = !disabled && openState;
    const activeTriggerId = store.useState('activeTriggerId');
    const mounted = store.useState('mounted');
    const payload = store.useState('payload');
    store.useSyncedValues({
        trackCursorAxis,
        disableHoverablePopup
    });
    store.useSyncedValue('disabled', disabled);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImplicitActiveTrigger"])(store);
    const { forceUnmount, transitionStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenStateTransitions"])(open, store);
    const isInstantPhase = store.useState('isInstantPhase');
    const instantType = store.useState('instantType');
    const lastOpenChangeReason = store.useState('lastOpenChangeReason');
    // Animations should be instant in two cases:
    // 1) Opening during the provider's instant phase (adjacent tooltip opens instantly)
    // 2) Closing because another tooltip opened (reason === 'none')
    // Otherwise, allow the animation to play. In particular, do not disable animations
    // during the 'ending' phase unless it's due to a sibling opening.
    const previousInstantTypeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "TooltipRoot.TooltipRoot.useIsoLayoutEffect": ()=>{
            if (openState && disabled) {
                store.setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].disabled));
            }
        }
    }["TooltipRoot.TooltipRoot.useIsoLayoutEffect"], [
        openState,
        disabled,
        store
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "TooltipRoot.TooltipRoot.useIsoLayoutEffect": ()=>{
            if (transitionStatus === 'ending' && lastOpenChangeReason === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].none || transitionStatus !== 'ending' && isInstantPhase) {
                // Capture the current instant type so we can restore it later
                // and set to 'delay' to disable animations while moving from one trigger to another
                // within a delay group.
                if (instantType !== 'delay') {
                    previousInstantTypeRef.current = instantType;
                }
                store.set('instantType', 'delay');
            } else if (previousInstantTypeRef.current !== null) {
                store.set('instantType', previousInstantTypeRef.current);
                previousInstantTypeRef.current = null;
            }
        }
    }["TooltipRoot.TooltipRoot.useIsoLayoutEffect"], [
        transitionStatus,
        isInstantPhase,
        lastOpenChangeReason,
        instantType,
        store
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "TooltipRoot.TooltipRoot.useIsoLayoutEffect": ()=>{
            if (open) {
                if (activeTriggerId == null) {
                    store.set('payload', undefined);
                }
            }
        }
    }["TooltipRoot.TooltipRoot.useIsoLayoutEffect"], [
        store,
        activeTriggerId,
        open
    ]);
    const handleImperativeClose = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "TooltipRoot.TooltipRoot.useCallback[handleImperativeClose]": ()=>{
            store.setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].imperativeAction));
        }
    }["TooltipRoot.TooltipRoot.useCallback[handleImperativeClose]"], [
        store
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](actionsRef, {
        "TooltipRoot.TooltipRoot.useImperativeHandle": ()=>({
                unmount: forceUnmount,
                close: handleImperativeClose
            })
    }["TooltipRoot.TooltipRoot.useImperativeHandle"], [
        forceUnmount,
        handleImperativeClose
    ]);
    const shouldRenderInteractions = open || mounted || !disabled && trackCursorAxis !== 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$root$2f$TooltipRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipRootContext"].Provider, {
        value: store,
        children: [
            shouldRenderInteractions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TooltipInteractions, {
                store: store,
                disabled: disabled,
                trackCursorAxis: trackCursorAxis
            }),
            typeof children === 'function' ? children({
                payload
            }) : children
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) TooltipRoot.displayName = "TooltipRoot";
function TooltipInteractions({ store, disabled, trackCursorAxis }) {
    const floatingRootContext = store.useState('floatingRootContext');
    const dismiss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useDismiss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDismiss"])(floatingRootContext, {
        enabled: !disabled,
        referencePress: {
            "TooltipInteractions.useDismiss[dismiss]": ()=>store.select('closeOnClick')
        }["TooltipInteractions.useDismiss[dismiss]"]
    });
    const clientPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useClientPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientPoint"])(floatingRootContext, {
        enabled: !disabled && trackCursorAxis !== 'none',
        axis: trackCursorAxis === 'none' ? undefined : trackCursorAxis
    });
    const activeTriggerProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "TooltipInteractions.useMemo[activeTriggerProps]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(clientPoint.reference, dismiss.reference)
    }["TooltipInteractions.useMemo[activeTriggerProps]"], [
        clientPoint.reference,
        dismiss.reference
    ]);
    const inactiveTriggerProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "TooltipInteractions.useMemo[inactiveTriggerProps]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(clientPoint.trigger, dismiss.trigger)
    }["TooltipInteractions.useMemo[inactiveTriggerProps]"], [
        clientPoint.trigger,
        dismiss.trigger
    ]);
    const popupProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "TooltipInteractions.useMemo[popupProps]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOCUSABLE_POPUP_PROPS"], clientPoint.floating, dismiss.floating)
    }["TooltipInteractions.useMemo[popupProps]"], [
        clientPoint.floating,
        dismiss.floating
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopupInteractionProps"])(store, {
        activeTriggerProps,
        inactiveTriggerProps,
        popupProps
    });
    return null;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/provider/TooltipProviderContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipProviderContext",
    ()=>TooltipProviderContext,
    "useTooltipProviderContext",
    ()=>useTooltipProviderContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const TooltipProviderContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) TooltipProviderContext.displayName = "TooltipProviderContext";
function useTooltipProviderContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](TooltipProviderContext);
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/trigger/TooltipTriggerDataAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipTriggerDataAttributes",
    ()=>TooltipTriggerDataAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
;
let TooltipTriggerDataAttributes = function(TooltipTriggerDataAttributes) {
    /**
   * Present when the corresponding tooltip is open.
   */ TooltipTriggerDataAttributes[TooltipTriggerDataAttributes["popupOpen"] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonTriggerDataAttributes"].popupOpen] = "popupOpen";
    /**
   * Present when the trigger is disabled, either by the `disabled` prop or by a parent `<Tooltip.Root>` component.
   */ TooltipTriggerDataAttributes["triggerDisabled"] = "data-trigger-disabled";
    return TooltipTriggerDataAttributes;
}({});
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/utils/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OPEN_DELAY",
    ()=>OPEN_DELAY
]);
const OPEN_DELAY = 600;
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/trigger/TooltipTrigger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$fastHooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/fastHooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useValueAsRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$root$2f$TooltipRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/root/TooltipRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popups/popupStoreUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$provider$2f$TooltipProviderContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/provider/TooltipProviderContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$safePolygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/safePolygon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingDelayGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingDelayGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useFocus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useFocus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useHoverReferenceInteraction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverReferenceInteraction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$shadowDom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/shadowDom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/utils/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$trigger$2f$TooltipTriggerDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/trigger/TooltipTriggerDataAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useHoverInteractionSharedState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverInteractionSharedState.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/utils/constants.js [app-client] (ecmascript)");
'use client';
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
;
;
;
;
const TOOLTIP_TRIGGER_IDENTIFIER = 'data-base-ui-tooltip-trigger';
function getTargetElement(event) {
    if ('composedPath' in event) {
        const path = event.composedPath();
        for(let i = 0; i < path.length; i += 1){
            const element = path[i];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(element)) {
                return element;
            }
        }
    }
    const target = event.target;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(target)) {
        return target;
    }
    return null;
}
function closestEnabledTooltipTrigger(element) {
    let current = element;
    while(current){
        if (current.hasAttribute(TOOLTIP_TRIGGER_IDENTIFIER)) {
            return current;
        }
        const parentElement = current.parentElement;
        if (parentElement) {
            current = parentElement;
            continue;
        }
        const root = current.getRootNode();
        current = 'host' in root && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(root.host) ? root.host : null;
    }
    return null;
}
const TooltipTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$fastHooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fastComponentRef"])(function TooltipTrigger(componentProps, forwardedRef) {
    const { render, className, style, handle, payload, disabled: disabledProp, delay, closeOnClick = true, closeDelay, id: idProp, ...elementProps } = componentProps;
    const rootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$root$2f$TooltipRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTooltipRootContext"])(true);
    const store = handle?.store ?? rootContext;
    if (!store) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: <Tooltip.Trigger> must be either used within a <Tooltip.Root> component or provided with a handle.' : "TURBOPACK unreachable");
    }
    const thisTriggerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    const isTriggerActive = store.useState('isTriggerActive', thisTriggerId);
    const isOpenedByThisTrigger = store.useState('isOpenedByTrigger', thisTriggerId);
    const floatingRootContext = store.useState('floatingRootContext');
    const triggerElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const delayWithDefault = delay ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OPEN_DELAY"];
    const closeDelayWithDefault = closeDelay ?? 0;
    const { registerTrigger, isMountedByThisTrigger } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTriggerDataForwarding"])(thisTriggerId, triggerElementRef, store, {
        payload,
        closeOnClick,
        closeDelay: closeDelayWithDefault
    });
    const providerContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$provider$2f$TooltipProviderContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTooltipProviderContext"])();
    const { delayRef, isInstantPhase, hasProvider } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingDelayGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDelayGroup"])(floatingRootContext, {
        open: isOpenedByThisTrigger
    });
    const hoverInteraction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useHoverInteractionSharedState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useHoverInteractionSharedState"])(floatingRootContext);
    store.useSyncedValue('isInstantPhase', isInstantPhase);
    const rootDisabled = store.useState('disabled');
    const disabled = disabledProp ?? rootDisabled;
    const disabledRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueAsRef"])(disabled);
    const trackCursorAxis = store.useState('trackCursorAxis');
    const disableHoverablePopup = store.useState('disableHoverablePopup');
    const isNestedTriggerHoveredRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const nestedTriggerOpenTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])();
    // Local copy so it can be cleared on mouseLeave without resetting the hover hook's own pointerType.
    const pointerTypeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](undefined);
    function getOpenDelay() {
        const providerDelay = providerContext?.delay;
        const groupOpenValue = typeof delayRef.current === 'object' ? delayRef.current.open : undefined;
        let computedOpenDelay = delayWithDefault;
        if (hasProvider) {
            if (groupOpenValue !== 0) {
                computedOpenDelay = delay ?? providerDelay ?? delayWithDefault;
            } else {
                computedOpenDelay = 0;
            }
        }
        return computedOpenDelay;
    }
    function isEnabledNestedTriggerTarget(target) {
        const triggerEl = triggerElementRef.current;
        if (!triggerEl || !target) {
            return false;
        }
        const nearestTrigger = closestEnabledTooltipTrigger(target);
        return nearestTrigger !== null && nearestTrigger !== triggerEl && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$shadowDom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(triggerEl, nearestTrigger);
    }
    function detectNestedTriggerHover(target) {
        const nestedTriggerHovered = isEnabledNestedTriggerTarget(target);
        isNestedTriggerHoveredRef.current = nestedTriggerHovered;
        if (nestedTriggerHovered) {
            hoverInteraction.openChangeTimeout.clear();
            hoverInteraction.restTimeout.clear();
            hoverInteraction.restTimeoutPending = false;
            nestedTriggerOpenTimeout.clear();
        }
        return nestedTriggerHovered;
    }
    const hoverProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useHoverReferenceInteraction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHoverReferenceInteraction"])(floatingRootContext, {
        enabled: !disabled,
        mouseOnly: true,
        move: false,
        handleClose: !disableHoverablePopup && trackCursorAxis !== 'both' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$safePolygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safePolygon"])() : null,
        restMs: getOpenDelay,
        delay () {
            const closeValue = typeof delayRef.current === 'object' ? delayRef.current.close : undefined;
            let computedCloseDelay = closeDelayWithDefault;
            if (closeDelay == null && hasProvider) {
                computedCloseDelay = closeValue;
            }
            return {
                close: computedCloseDelay
            };
        },
        triggerElementRef,
        isActiveTrigger: isTriggerActive,
        isClosing: {
            "TooltipTrigger.TooltipTrigger.useHoverReferenceInteraction[hoverProps]": ()=>store.select('transitionStatus') === 'ending'
        }["TooltipTrigger.TooltipTrigger.useHoverReferenceInteraction[hoverProps]"],
        shouldOpen () {
            return !isNestedTriggerHoveredRef.current;
        }
    });
    const focusProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useFocus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocus"])(floatingRootContext, {
        enabled: !disabled
    }).reference;
    const handleNestedTriggerHover = (event)=>{
        const wasNestedTriggerHovered = isNestedTriggerHoveredRef.current;
        const target = getTargetElement(event);
        const nestedTriggerHovered = detectNestedTriggerHover(target);
        const triggerEl = triggerElementRef.current;
        const targetInsideTrigger = triggerEl && target && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$shadowDom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(triggerEl, target);
        // Only close hover-opened parents. Focus/click-like opens remain owned by
        // their original interaction and should not be clobbered by nested hover.
        if (nestedTriggerHovered && store.select('open') && store.select('lastOpenChangeReason') === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].triggerHover) {
            store.setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].triggerHover, event));
            return;
        }
        if (wasNestedTriggerHovered && !nestedTriggerHovered && targetInsideTrigger && !disabledRef.current && !store.select('open') && triggerEl && // Match the hover hook's non-strict mouse fallback for mouse-only event sequences.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMouseLikePointerType"])(pointerTypeRef.current)) {
            const open = ()=>{
                if (!isNestedTriggerHoveredRef.current && !disabledRef.current && !store.select('open')) {
                    store.setOpen(true, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].triggerHover, event, triggerEl));
                }
            };
            const openDelay = getOpenDelay();
            // With `move: false`, the hover hook only listens to mouseenter/mouseleave
            // on the parent trigger. Leaving a nested child for the parent area fires
            // no event the hook can react to, so reopen locally.
            if (openDelay === 0) {
                nestedTriggerOpenTimeout.clear();
                open();
            } else {
                nestedTriggerOpenTimeout.start(openDelay, open);
            }
        }
    };
    const rootTriggerProps = store.useState('triggerProps', isMountedByThisTrigger);
    const shouldApplyRootTriggerProps = isMountedByThisTrigger || trackCursorAxis !== 'none';
    const state = {
        open: isOpenedByThisTrigger
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        state,
        ref: [
            forwardedRef,
            registerTrigger,
            triggerElementRef
        ],
        props: [
            hoverProps,
            focusProps,
            shouldApplyRootTriggerProps ? rootTriggerProps : undefined,
            {
                onMouseOver (event) {
                    handleNestedTriggerHover(event.nativeEvent);
                },
                onFocus (event) {
                    if (isEnabledNestedTriggerTarget(getTargetElement(event.nativeEvent))) {
                        event.preventBaseUIHandler();
                    }
                },
                onMouseLeave () {
                    isNestedTriggerHoveredRef.current = false;
                    nestedTriggerOpenTimeout.clear();
                    pointerTypeRef.current = undefined;
                },
                onPointerEnter (event) {
                    pointerTypeRef.current = event.pointerType;
                },
                onPointerDown (event) {
                    pointerTypeRef.current = event.pointerType;
                    store.set('closeOnClick', closeOnClick);
                    if (closeOnClick && !store.select('open')) {
                        store.cancelPendingOpen(event.nativeEvent);
                    }
                },
                onClick (event) {
                    if (closeOnClick && !store.select('open')) {
                        store.cancelPendingOpen(event.nativeEvent);
                    }
                },
                id: thisTriggerId,
                [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$trigger$2f$TooltipTriggerDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTriggerDataAttributes"].triggerDisabled]: disabled ? '' : undefined,
                [TOOLTIP_TRIGGER_IDENTIFIER]: disabled ? undefined : ''
            },
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerOpenStateMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) TooltipTrigger.displayName = "TooltipTrigger";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/portal/TooltipPortalContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipPortalContext",
    ()=>TooltipPortalContext,
    "useTooltipPortalContext",
    ()=>useTooltipPortalContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const TooltipPortalContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) TooltipPortalContext.displayName = "TooltipPortalContext";
function useTooltipPortalContext() {
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](TooltipPortalContext);
    if (value === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: <Tooltip.Portal> is missing.' : "TURBOPACK unreachable");
    }
    return value;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/portal/TooltipPortal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipPortal",
    ()=>TooltipPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$root$2f$TooltipRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/root/TooltipRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$portal$2f$TooltipPortalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/portal/TooltipPortalContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$FloatingPortalLite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/FloatingPortalLite.js [app-client] (ecmascript)");
/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const TooltipPortal = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function TooltipPortal(props, forwardedRef) {
    const { keepMounted = false, ...portalProps } = props;
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$root$2f$TooltipRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTooltipRootContext"])();
    const mounted = store.useState('mounted');
    const shouldRender = mounted || keepMounted;
    if (!shouldRender) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$portal$2f$TooltipPortalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipPortalContext"].Provider, {
        value: keepMounted,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$FloatingPortalLite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingPortalLite"], {
            ref: forwardedRef,
            ...portalProps
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) TooltipPortal.displayName = "TooltipPortal";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/positioner/TooltipPositionerContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipPositionerContext",
    ()=>TooltipPositionerContext,
    "useTooltipPositionerContext",
    ()=>useTooltipPositionerContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const TooltipPositionerContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) TooltipPositionerContext.displayName = "TooltipPositionerContext";
function useTooltipPositionerContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](TooltipPositionerContext);
    if (context === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: TooltipPositionerContext is missing. TooltipPositioner parts must be placed within <Tooltip.Positioner>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/positioner/TooltipPositioner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipPositioner",
    ()=>TooltipPositioner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$root$2f$TooltipRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/root/TooltipRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$positioner$2f$TooltipPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/positioner/TooltipPositionerContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useAnchorPositioning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/useAnchorPositioning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$portal$2f$TooltipPortalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/portal/TooltipPortalContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$adaptiveOriginMiddleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/adaptiveOriginMiddleware.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$usePositioner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/usePositioner.js [app-client] (ecmascript)");
/**
 * Positions the tooltip against the trigger.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const TooltipPositioner = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function TooltipPositioner(componentProps, forwardedRef) {
    const { render, className, anchor, positionMethod = 'absolute', side = 'top', align = 'center', sideOffset = 0, alignOffset = 0, collisionBoundary = 'clipping-ancestors', collisionPadding = 5, arrowPadding = 5, sticky = false, disableAnchorTracking = false, collisionAvoidance = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POPUP_COLLISION_AVOIDANCE"], style, ...elementProps } = componentProps;
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$root$2f$TooltipRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTooltipRootContext"])();
    const keepMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$portal$2f$TooltipPortalContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTooltipPortalContext"])();
    const open = store.useState('open');
    const mounted = store.useState('mounted');
    const trackCursorAxis = store.useState('trackCursorAxis');
    const disableHoverablePopup = store.useState('disableHoverablePopup');
    const floatingRootContext = store.useState('floatingRootContext');
    const instantType = store.useState('instantType');
    const transitionStatus = store.useState('transitionStatus');
    const hasViewport = store.useState('hasViewport');
    const positioning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useAnchorPositioning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnchorPositioning"])({
        anchor,
        positionMethod,
        floatingRootContext,
        mounted,
        side,
        sideOffset,
        align,
        alignOffset,
        collisionBoundary,
        collisionPadding,
        sticky,
        arrowPadding,
        disableAnchorTracking,
        keepMounted,
        collisionAvoidance,
        adaptiveOrigin: hasViewport ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$adaptiveOriginMiddleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adaptiveOrigin"] : undefined
    });
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "TooltipPositioner.TooltipPositioner.useMemo[state]": ()=>({
                open,
                side: positioning.side,
                align: positioning.align,
                anchorHidden: positioning.anchorHidden,
                instant: trackCursorAxis !== 'none' ? 'tracking-cursor' : instantType
            })
    }["TooltipPositioner.TooltipPositioner.useMemo[state]"], [
        open,
        positioning.side,
        positioning.align,
        positioning.anchorHidden,
        trackCursorAxis,
        instantType
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$usePositioner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePositioner"])(componentProps, state, {
        styles: positioning.positionerStyles,
        transitionStatus,
        props: elementProps,
        refs: [
            forwardedRef,
            store.useStateSetter('positionerElement')
        ],
        hidden: !mounted,
        inert: !open || trackCursorAxis === 'both' || disableHoverablePopup
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$positioner$2f$TooltipPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipPositionerContext"].Provider, {
        value: positioning,
        children: element
    });
});
if ("TURBOPACK compile-time truthy", 1) TooltipPositioner.displayName = "TooltipPositioner";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/popup/TooltipPopup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipPopup",
    ()=>TooltipPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$root$2f$TooltipRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/root/TooltipRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$positioner$2f$TooltipPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/positioner/TooltipPositionerContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/stateAttributesMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useOpenChangeComplete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getDisabledMountTransitionStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/getDisabledMountTransitionStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useHoverFloatingInteraction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverFloatingInteraction.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popupStateMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
};
const TooltipPopup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function TooltipPopup(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$root$2f$TooltipRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTooltipRootContext"])();
    const { side, align } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$positioner$2f$TooltipPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTooltipPositionerContext"])();
    const open = store.useState('open');
    const instantType = store.useState('instantType');
    const transitionStatus = store.useState('transitionStatus');
    const popupProps = store.useState('popupProps');
    const floatingContext = store.useState('floatingRootContext');
    const disabled = store.useState('disabled');
    const closeDelay = store.useState('closeDelay');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useOpenChangeComplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenChangeComplete"])({
        open,
        ref: store.context.popupRef,
        onComplete () {
            if (open) {
                store.context.onOpenChangeComplete?.(true);
            }
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useHoverFloatingInteraction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHoverFloatingInteraction"])(floatingContext, {
        enabled: !disabled,
        closeDelay
    });
    const setPopupElement = store.useStateSetter('popupElement');
    const state = {
        open,
        side,
        align,
        instant: instantType,
        transitionStatus
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: [
            forwardedRef,
            store.context.popupRef,
            setPopupElement
        ],
        props: [
            popupProps,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getDisabledMountTransitionStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDisabledMountTransitionStyles"])(transitionStatus),
            elementProps
        ],
        stateAttributesMapping
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) TooltipPopup.displayName = "TooltipPopup";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/arrow/TooltipArrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipArrow",
    ()=>TooltipArrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$positioner$2f$TooltipPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/positioner/TooltipPositionerContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$root$2f$TooltipRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/root/TooltipRootContext.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const TooltipArrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function TooltipArrow(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$root$2f$TooltipRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTooltipRootContext"])();
    const { arrowRef, side, align, arrowUncentered, arrowStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$positioner$2f$TooltipPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTooltipPositionerContext"])();
    const open = store.useState('open');
    const instantType = store.useState('instantType');
    const state = {
        open,
        side,
        align,
        uncentered: arrowUncentered,
        instant: instantType
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: [
            forwardedRef,
            arrowRef
        ],
        props: [
            {
                style: arrowStyles,
                'aria-hidden': true
            },
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popupStateMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) TooltipArrow.displayName = "TooltipArrow";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/provider/TooltipProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipProvider",
    ()=>TooltipProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingDelayGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingDelayGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$provider$2f$TooltipProviderContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/provider/TooltipProviderContext.js [app-client] (ecmascript)");
/**
 * Provides a shared delay for multiple tooltips. The grouping logic ensures that
 * once a tooltip becomes visible, the adjacent tooltips will be shown instantly.
 *
 * Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const TooltipProvider = function TooltipProvider(props) {
    const { delay, closeDelay, timeout = 400 } = props;
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "TooltipProvider.useMemo[contextValue]": ()=>({
                delay,
                closeDelay
            })
    }["TooltipProvider.useMemo[contextValue]"], [
        delay,
        closeDelay
    ]);
    const delayValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "TooltipProvider.useMemo[delayValue]": ()=>({
                open: delay,
                close: closeDelay
            })
    }["TooltipProvider.useMemo[delayValue]"], [
        delay,
        closeDelay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$provider$2f$TooltipProviderContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProviderContext"].Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingDelayGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingDelayGroup"], {
            delay: delayValue,
            timeoutMs: timeout,
            children: props.children
        })
    });
};
if ("TURBOPACK compile-time truthy", 1) TooltipProvider.displayName = "TooltipProvider";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/viewport/TooltipViewportCssVars.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipViewportCssVars",
    ()=>TooltipViewportCssVars
]);
let TooltipViewportCssVars = /*#__PURE__*/ function(TooltipViewportCssVars) {
    /**
   * The width of the parent popup.
   * This variable is placed on the 'previous' container and stores the width of the popup when the previous content was rendered.
   * It can be used to freeze the dimensions of the popup when animating between different content.
   */ TooltipViewportCssVars["popupWidth"] = "--popup-width";
    /**
   * The height of the parent popup.
   * This variable is placed on the 'previous' container and stores the height of the popup when the previous content was rendered.
   * It can be used to freeze the dimensions of the popup when animating between different content.
   */ TooltipViewportCssVars["popupHeight"] = "--popup-height";
    return TooltipViewportCssVars;
}({});
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/viewport/TooltipViewport.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipViewport",
    ()=>TooltipViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$root$2f$TooltipRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/root/TooltipRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$positioner$2f$TooltipPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/positioner/TooltipPositionerContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$viewport$2f$TooltipViewportCssVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/viewport/TooltipViewportCssVars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$usePopupViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/usePopupViewport.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const stateAttributesMapping = {
    activationDirection: (value)=>value ? {
            'data-activation-direction': value
        } : null
};
const TooltipViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function TooltipViewport(componentProps, forwardedRef) {
    const { render, className, style, children, ...elementProps } = componentProps;
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$root$2f$TooltipRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTooltipRootContext"])();
    const positioner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$positioner$2f$TooltipPositionerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTooltipPositionerContext"])();
    const instantType = store.useState('instantType');
    const { children: childrenToRender, state: viewportState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$usePopupViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopupViewport"])({
        store,
        side: positioner.side,
        cssVars: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$viewport$2f$TooltipViewportCssVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipViewportCssVars"],
        children
    });
    const state = {
        activationDirection: viewportState.activationDirection,
        transitioning: viewportState.transitioning,
        instant: instantType
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: forwardedRef,
        props: [
            elementProps,
            {
                children: childrenToRender
            }
        ],
        stateAttributesMapping
    });
});
if ("TURBOPACK compile-time truthy", 1) TooltipViewport.displayName = "TooltipViewport";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/store/TooltipHandle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipHandle",
    ()=>TooltipHandle,
    "createTooltipHandle",
    ()=>createTooltipHandle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$store$2f$TooltipStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/store/TooltipStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
;
;
;
;
class TooltipHandle {
    /**
   * Internal store holding the tooltip state.
   * @internal
   */ constructor(){
        this.store = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$store$2f$TooltipStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipStore"]();
    }
    /**
   * Opens the tooltip and associates it with the trigger with the given ID.
   * The trigger must be a Tooltip.Trigger component with this handle passed as a prop.
   *
   * This method should only be called in an event handler or an effect (not during rendering).
   *
   * @param triggerId ID of the trigger to associate with the tooltip.
   */ open(triggerId) {
        const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) : undefined;
        if (triggerId && !triggerElement) {
            throw new Error(("TURBOPACK compile-time truthy", 1) ? `Base UI: TooltipHandle.open: No trigger found with id "${triggerId}".` : "TURBOPACK unreachable");
        }
        this.store.setOpen(true, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].imperativeAction, undefined, triggerElement));
    }
    /**
   * Closes the tooltip.
   */ close() {
        this.store.setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].imperativeAction, undefined, undefined));
    }
    /**
   * Indicates whether the tooltip is currently open.
   */ get isOpen() {
        return this.store.select('open');
    }
}
function createTooltipHandle() {
    return new TooltipHandle();
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/index.parts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$arrow$2f$TooltipArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipArrow"],
    "Handle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$store$2f$TooltipHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipHandle"],
    "Popup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$popup$2f$TooltipPopup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipPopup"],
    "Portal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$portal$2f$TooltipPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipPortal"],
    "Positioner",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$positioner$2f$TooltipPositioner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipPositioner"],
    "Provider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$provider$2f$TooltipProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"],
    "Root",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$root$2f$TooltipRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipRoot"],
    "Trigger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$trigger$2f$TooltipTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"],
    "Viewport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$viewport$2f$TooltipViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipViewport"],
    "createHandle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$store$2f$TooltipHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTooltipHandle"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/index.parts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$root$2f$TooltipRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/root/TooltipRoot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$trigger$2f$TooltipTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/trigger/TooltipTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$portal$2f$TooltipPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/portal/TooltipPortal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$positioner$2f$TooltipPositioner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/positioner/TooltipPositioner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$popup$2f$TooltipPopup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/popup/TooltipPopup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$arrow$2f$TooltipArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/arrow/TooltipArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$provider$2f$TooltipProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/provider/TooltipProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$viewport$2f$TooltipViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/viewport/TooltipViewport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$store$2f$TooltipHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/store/TooltipHandle.js [app-client] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/index.parts.js [app-client] (ecmascript) <export * as Tooltip>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/tooltip/index.parts.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=6e527_%40base-ui_react_esm_tooltip_db0a39df._.js.map