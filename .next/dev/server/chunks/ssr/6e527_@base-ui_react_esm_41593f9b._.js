module.exports = [
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeEventPreventable",
    ()=>makeEventPreventable,
    "mergeClassNames",
    ()=>mergeClassNames,
    "mergeProps",
    ()=>mergeProps,
    "mergePropsN",
    ()=>mergePropsN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$mergeObjects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/mergeObjects.js [app-ssr] (ecmascript)");
;
const EMPTY_PROPS = {};
function mergeProps(a, b, c, d, e) {
    if (!c && !d && !e && !a) {
        return createInitialMergedProps(b);
    }
    // We need to mutably own `merged`.
    let merged = createInitialMergedProps(a);
    if (b) {
        merged = mergeInto(merged, b);
    }
    if (c) {
        merged = mergeInto(merged, c);
    }
    if (d) {
        merged = mergeInto(merged, d);
    }
    if (e) {
        merged = mergeInto(merged, e);
    }
    return merged;
}
function mergePropsN(props) {
    if (props.length === 0) {
        return EMPTY_PROPS;
    }
    if (props.length === 1) {
        return createInitialMergedProps(props[0]);
    }
    // We need to mutably own `merged`.
    let merged = createInitialMergedProps(props[0]);
    for(let i = 1; i < props.length; i += 1){
        merged = mergeInto(merged, props[i]);
    }
    return merged;
}
function createInitialMergedProps(inputProps) {
    if (isPropsGetter(inputProps)) {
        // Getter-returned handlers intentionally keep their existing semantics.
        return {
            ...resolvePropsGetter(inputProps, EMPTY_PROPS)
        };
    }
    return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
    if (isPropsGetter(inputProps)) {
        return resolvePropsGetter(inputProps, merged);
    }
    return mutablyMergeInto(merged, inputProps);
}
function copyInitialProps(inputProps) {
    const copiedProps = {
        ...inputProps
    };
    // `copiedProps` is our fresh own-object copy, so iterating with `for...in` is safe here.
    // eslint-disable-next-line guard-for-in
    for(const propName in copiedProps){
        const propValue = copiedProps[propName];
        if (isEventHandler(propName, propValue)) {
            copiedProps[propName] = wrapEventHandler(propValue);
        }
    }
    return copiedProps;
}
/**
 * Merges two sets of props. In case of conflicts, the external props take precedence.
 */ function mutablyMergeInto(mergedProps, externalProps) {
    if (!externalProps) {
        return mergedProps;
    }
    // eslint-disable-next-line guard-for-in
    for(const propName in externalProps){
        const externalPropValue = externalProps[propName];
        switch(propName){
            case 'style':
                {
                    mergedProps[propName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$mergeObjects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeObjects"])(mergedProps.style, externalPropValue);
                    break;
                }
            case 'className':
                {
                    mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
                    break;
                }
            default:
                {
                    if (isEventHandler(propName, externalPropValue)) {
                        mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
                    } else {
                        mergedProps[propName] = externalPropValue;
                    }
                }
        }
    }
    return mergedProps;
}
function isEventHandler(key, value) {
    // This approach is more efficient than using a regex.
    const code0 = key.charCodeAt(0);
    const code1 = key.charCodeAt(1);
    const code2 = key.charCodeAt(2);
    return code0 === 111 /* o */  && code1 === 110 /* n */  && code2 >= 65 /* A */  && code2 <= 90 /* Z */  && (typeof value === 'function' || typeof value === 'undefined');
}
function isPropsGetter(inputProps) {
    return typeof inputProps === 'function';
}
function resolvePropsGetter(inputProps, previousProps) {
    if (isPropsGetter(inputProps)) {
        return inputProps(previousProps);
    }
    return inputProps ?? EMPTY_PROPS;
}
function mergeEventHandlers(ourHandler, theirHandler) {
    if (!theirHandler) {
        return ourHandler;
    }
    if (!ourHandler) {
        return wrapEventHandler(theirHandler);
    }
    return (...args)=>{
        const event = args[0];
        if (isSyntheticEvent(event)) {
            const baseUIEvent = event;
            makeEventPreventable(baseUIEvent);
            const result = theirHandler(...args);
            if (!baseUIEvent.baseUIHandlerPrevented) {
                ourHandler?.(...args);
            }
            return result;
        }
        const result = theirHandler(...args);
        ourHandler?.(...args);
        return result;
    };
}
function wrapEventHandler(handler) {
    if (!handler) {
        return handler;
    }
    return (...args)=>{
        const event = args[0];
        if (isSyntheticEvent(event)) {
            makeEventPreventable(event);
        }
        return handler(...args);
    };
}
function makeEventPreventable(event) {
    event.preventBaseUIHandler = ()=>{
        event.baseUIHandlerPrevented = true;
    };
    return event;
}
function mergeClassNames(ourClassName, theirClassName) {
    if (theirClassName) {
        if (ourClassName) {
            // eslint-disable-next-line prefer-template
            return theirClassName + ' ' + ourClassName;
        }
        return theirClassName;
    }
    return ourClassName;
}
function isSyntheticEvent(event) {
    return event != null && typeof event === 'object' && 'nativeEvent' in event;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/use-render/useRender.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRender",
    ()=>useRender
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
;
function useRender(params) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])(params.defaultTagName ?? 'div', params, params);
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/button/Button.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/use-button/useButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function Button(componentProps, forwardedRef) {
    const { render, className, disabled = false, focusableWhenDisabled = false, nativeButton = true, style, ...elementProps } = componentProps;
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        focusableWhenDisabled,
        native: nativeButton
    });
    const state = {
        disabled
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        state,
        ref: [
            forwardedRef,
            buttonRef
        ],
        props: [
            elementProps,
            getButtonProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) Button.displayName = "Button";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/index.parts.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/control/FieldControlDataAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldControlDataAttributes",
    ()=>FieldControlDataAttributes
]);
let FieldControlDataAttributes = /*#__PURE__*/ function(FieldControlDataAttributes) {
    /**
   * Present when the field is disabled.
   */ FieldControlDataAttributes["disabled"] = "data-disabled";
    /**
   * Present when the field is in a valid state.
   */ FieldControlDataAttributes["valid"] = "data-valid";
    /**
   * Present when the field is in an invalid state.
   */ FieldControlDataAttributes["invalid"] = "data-invalid";
    /**
   * Present when the field has been touched.
   */ FieldControlDataAttributes["touched"] = "data-touched";
    /**
   * Present when the field's value has changed.
   */ FieldControlDataAttributes["dirty"] = "data-dirty";
    /**
   * Present when the field is filled.
   */ FieldControlDataAttributes["filled"] = "data-filled";
    /**
   * Present when the field control is focused.
   */ FieldControlDataAttributes["focused"] = "data-focused";
    return FieldControlDataAttributes;
}({});
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/utils/getCombinedFieldValidityData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Combines the field's client-side, stateful validity data with the external invalid state to
 * determine the field's true validity.
 */ __turbopack_context__.s([
    "getCombinedFieldValidityData",
    ()=>getCombinedFieldValidityData
]);
function getCombinedFieldValidityData(validityData, invalid) {
    return {
        ...validityData,
        state: {
            ...validityData.state,
            valid: !invalid && validityData.state.valid
        }
    };
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/root/useFieldValidation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFieldValidation",
    ()=>useFieldValidation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/empty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useTimeout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/labelable-provider/LabelableContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$form$2d$context$2f$FormContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/form-context/FormContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/utils/getCombinedFieldValidityData.js [app-ssr] (ecmascript)");
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
const validityKeys = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_VALIDITY_STATE"]);
function isOnlyValueMissing(state) {
    if (!state || state.valid || !state.valueMissing) {
        return false;
    }
    let onlyValueMissing = false;
    for (const key of validityKeys){
        if (key === 'valid') {
            continue;
        }
        if (key === 'valueMissing') {
            onlyValueMissing = state[key];
        }
        if (state[key]) {
            onlyValueMissing = false;
        }
    }
    return onlyValueMissing;
}
function useFieldValidation(params) {
    const { formRef, clearErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$form$2d$context$2f$FormContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { setValidityData, validate, validityData, validationDebounceTime, invalid, markedDirtyRef, state, name, shouldValidateOnChange, getRegisteredFieldId } = params;
    const { controlId, getDescriptionProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimeout"])();
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const commit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])(async (value, revalidate = false)=>{
        const element = inputRef.current;
        if (!element) {
            return;
        }
        function updateRegisteredFieldValidity(nextValidityData, externalInvalid = invalid) {
            const fieldId = getRegisteredFieldId() ?? controlId;
            if (fieldId == null) {
                return;
            }
            const currentFieldData = formRef.current.fields.get(fieldId);
            if (!currentFieldData) {
                return;
            }
            const validityDataWithFormErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCombinedFieldValidityData"])(nextValidityData, externalInvalid);
            formRef.current.fields.set(fieldId, {
                ...currentFieldData,
                validityData: validityDataWithFormErrors
            });
        }
        if (revalidate) {
            if (state.valid !== false) {
                return;
            }
            const currentNativeValidity = element.validity;
            if (!currentNativeValidity.valueMissing) {
                // The 'valueMissing' (required) condition has been resolved by the user typing.
                // Temporarily mark the field as valid for this onChange event.
                // Other native errors (e.g., typeMismatch) will be caught by full validation on blur or submit.
                const nextValidityData = {
                    value,
                    state: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_VALIDITY_STATE"],
                        valid: true
                    },
                    error: '',
                    errors: [],
                    initialValue: validityData.initialValue
                };
                element.setCustomValidity('');
                // The required value is now present; ignore stale external invalid state for this pass.
                updateRegisteredFieldValidity(nextValidityData, false);
                setValidityData(nextValidityData);
                return;
            }
            // Value is still missing, or other conditions apply.
            // Let's use a representation of current validity for isOnlyValueMissing.
            const currentNativeValidityObject = validityKeys.reduce((acc, key)=>{
                acc[key] = currentNativeValidity[key];
                return acc;
            }, {});
            // If it's (still) natively invalid due to something other than just valueMissing,
            // then bail from this revalidation on change to avoid "scolding" for other errors.
            if (!currentNativeValidityObject.valid && !isOnlyValueMissing(currentNativeValidityObject)) {
                return;
            }
        // If valueMissing is still true AND it's the only issue, or if the field is now natively valid,
        // let it fall through to the main validation logic below.
        }
        function getState(el) {
            const computedState = validityKeys.reduce((acc, key)=>{
                acc[key] = el.validity[key];
                return acc;
            }, {});
            let hasOnlyValueMissingError = false;
            for (const key of validityKeys){
                if (key === 'valid') {
                    continue;
                }
                if (key === 'valueMissing' && computedState[key]) {
                    hasOnlyValueMissingError = true;
                } else if (computedState[key]) {
                    return computedState;
                }
            }
            // Only make `valueMissing` mark the field invalid if it's been changed
            // to reduce error noise.
            if (hasOnlyValueMissingError && !markedDirtyRef.current) {
                computedState.valid = true;
                computedState.valueMissing = false;
            }
            return computedState;
        }
        timeout.clear();
        let result = null;
        let validationErrors = [];
        const nextState = getState(element);
        let defaultValidationMessage;
        const validateOnChange = shouldValidateOnChange();
        if (element.validationMessage && !validateOnChange) {
            // not validating on change, if there is a `validationMessage` from
            // native validity, set errors and skip calling the custom validate fn
            defaultValidationMessage = element.validationMessage;
            validationErrors = [
                element.validationMessage
            ];
        } else {
            // call the validate function because either
            // - validating on change, or
            // - native constraint validations passed, custom validity check is next
            const formValues = Array.from(formRef.current.fields.values()).reduce((acc, field)=>{
                if (field.name) {
                    acc[field.name] = field.getValue();
                }
                return acc;
            }, {});
            const resultOrPromise = validate(value, formValues);
            if (typeof resultOrPromise === 'object' && resultOrPromise !== null && 'then' in resultOrPromise) {
                result = await resultOrPromise;
            } else {
                result = resultOrPromise;
            }
            if (result !== null) {
                nextState.valid = false;
                nextState.customError = true;
                if (Array.isArray(result)) {
                    validationErrors = result;
                    element.setCustomValidity(result.join('\n'));
                } else if (result) {
                    validationErrors = [
                        result
                    ];
                    element.setCustomValidity(result);
                }
            } else if (validateOnChange) {
                // validate function returned no errors, if validating on change
                // we need to clear the custom validity state
                element.setCustomValidity('');
                nextState.customError = false;
                if (element.validationMessage) {
                    defaultValidationMessage = element.validationMessage;
                    validationErrors = [
                        element.validationMessage
                    ];
                } else if (element.validity.valid && !nextState.valid) {
                    nextState.valid = true;
                }
            }
        }
        const nextValidityData = {
            value,
            state: nextState,
            error: defaultValidationMessage ?? (Array.isArray(result) ? result[0] : result ?? ''),
            errors: validationErrors,
            initialValue: validityData.initialValue
        };
        // Keep Form-level errors part of overall field validity for submit blocking/focus logic.
        updateRegisteredFieldValidity(nextValidityData);
        setValidityData(nextValidityData);
    });
    const getValidationProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((externalProps = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])(getDescriptionProps, state.valid === false ? {
            'aria-invalid': true
        } : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"], externalProps), [
        getDescriptionProps,
        state.valid
    ]);
    const getInputValidationProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((externalProps = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])({
            onChange (event) {
                // Workaround for https://github.com/facebook/react/issues/9023
                if (event.nativeEvent.defaultPrevented) {
                    return;
                }
                clearErrors(name);
                if (!shouldValidateOnChange()) {
                    commit(event.currentTarget.value, true);
                    return;
                }
                // When validating on change, run client-side validation even if
                // externally invalid
                const element = event.currentTarget;
                if (element.value === '') {
                    // Ignore the debounce time for empty values.
                    commit(element.value);
                    return;
                }
                timeout.clear();
                if (validationDebounceTime) {
                    timeout.start(validationDebounceTime, ()=>{
                        commit(element.value);
                    });
                } else {
                    commit(element.value);
                }
            }
        }, getValidationProps(externalProps)), [
        getValidationProps,
        clearErrors,
        name,
        timeout,
        commit,
        validationDebounceTime,
        shouldValidateOnChange
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            getValidationProps,
            getInputValidationProps,
            inputRef,
            commit
        }), [
        getValidationProps,
        getInputValidationProps,
        commit
    ]);
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/root/FieldRoot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldRoot",
    ()=>FieldRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-root-context/FieldRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$fieldset$2f$root$2f$FieldsetRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/fieldset/root/FieldsetRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$form$2d$context$2f$FormContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/form-context/FormContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$LabelableProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/labelable-provider/LabelableProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$useFieldValidation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/root/useFieldValidation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$register$2d$control$2f$useFieldControlRegistration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-register-control/useFieldControlRegistration.js [app-ssr] (ecmascript)");
/**
 * @internal
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
const FieldRootInner = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function FieldRootInner(componentProps, forwardedRef) {
    const { errors, validationMode: formValidationMode, submitAttemptedRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$form$2d$context$2f$FormContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { render, className, validate: validateProp, validationDebounceTime = 0, validationMode = formValidationMode, name, disabled: disabledProp = false, invalid: invalidProp, dirty: dirtyProp, touched: touchedProp, actionsRef, style, ...elementProps } = componentProps;
    const { disabled: disabledFieldset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$fieldset$2f$root$2f$FieldsetRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFieldsetRootContext"])();
    const validate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])(validateProp || (()=>null));
    const disabled = disabledFieldset || disabledProp;
    const [touchedState, setTouchedUnwrapped] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [dirtyState, setDirtyUnwrapped] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [filled, setFilled] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [focused, setFocused] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const dirty = dirtyProp ?? dirtyState;
    const touched = touchedProp ?? touchedState;
    const markedDirtyRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const registeredFieldIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const getRegisteredFieldId = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>registeredFieldIdRef.current, []);
    const setRegisteredFieldId = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((id)=>{
        registeredFieldIdRef.current = id;
    }, []);
    const setDirty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((value)=>{
        if (dirtyProp !== undefined) {
            return;
        }
        if (value) {
            markedDirtyRef.current = true;
        }
        setDirtyUnwrapped(value);
    });
    const setTouched = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((value)=>{
        if (touchedProp !== undefined) {
            return;
        }
        setTouchedUnwrapped(value);
    });
    const shouldValidateOnChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])(()=>validationMode === 'onChange' || validationMode === 'onSubmit' && submitAttemptedRef.current);
    const hasFormError = !!name && Object.hasOwn(errors, name) && errors[name] !== undefined;
    const invalid = invalidProp === true || hasFormError;
    const [validityData, setValidityData] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({
        state: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_VALIDITY_STATE"],
        error: '',
        errors: [],
        value: null,
        initialValue: null
    });
    const valid = !invalid && validityData.state.valid;
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            disabled,
            touched,
            dirty,
            valid,
            filled,
            focused
        }), [
        disabled,
        touched,
        dirty,
        valid,
        filled,
        focused
    ]);
    const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$useFieldValidation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFieldValidation"])({
        setValidityData,
        validate,
        validityData,
        validationDebounceTime,
        invalid,
        markedDirtyRef,
        state,
        name,
        shouldValidateOnChange,
        getRegisteredFieldId
    });
    const validityValue = validityData.value;
    const handleImperativeValidate = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        markedDirtyRef.current = true;
        validation.commit(validityValue);
    }, [
        validation,
        validityValue
    ]);
    const registerFieldControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$register$2d$control$2f$useFieldControlRegistration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFieldControlRegistration"])({
        commit: validation.commit,
        invalid,
        markedDirtyRef,
        name,
        setRegisteredFieldId,
        setValidityData,
        validityData
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](actionsRef, ()=>({
            validate: handleImperativeValidate
        }), [
        handleImperativeValidate
    ]);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            invalid,
            name,
            validityData,
            setValidityData,
            disabled,
            touched,
            setTouched,
            dirty,
            setDirty,
            filled,
            setFilled,
            focused,
            setFocused,
            validate,
            validationMode,
            validationDebounceTime,
            shouldValidateOnChange,
            state,
            markedDirtyRef,
            registerFieldControl,
            validation
        }), [
        invalid,
        name,
        validityData,
        disabled,
        touched,
        setTouched,
        dirty,
        setDirty,
        filled,
        setFilled,
        focused,
        setFocused,
        validate,
        validationMode,
        validationDebounceTime,
        shouldValidateOnChange,
        state,
        registerFieldControl,
        validation
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        state,
        props: elementProps,
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldRootContext"].Provider, {
        value: contextValue,
        children: element
    });
});
/**
 * Groups all parts of the field.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */ if ("TURBOPACK compile-time truthy", 1) FieldRootInner.displayName = "FieldRootInner";
const FieldRoot = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function FieldRoot(componentProps, forwardedRef) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$LabelableProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LabelableProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FieldRootInner, {
            ...componentProps,
            ref: forwardedRef
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) FieldRoot.displayName = "FieldRoot";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/label/FieldLabel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldLabel",
    ()=>FieldLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/safeReact.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-root-context/FieldRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/labelable-provider/LabelableContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$useLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/labelable-provider/useLabel.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const FieldLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function FieldLabel(componentProps, forwardedRef) {
    const { render, className, style, id: idProp, nativeLabel = true, ...elementProps } = componentProps;
    const fieldRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFieldRootContext"])(false);
    const { labelId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const labelRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const labelProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$useLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLabel"])({
        id: labelId ?? idProp,
        native: nativeLabel
    });
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
            if (!labelRef.current) {
                return;
            }
            const isLabelTag = labelRef.current.tagName === 'LABEL';
            if (nativeLabel) {
                if (!isLabelTag) {
                    const ownerStackMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SafeReact"].captureOwnerStack?.() || '';
                    const message = '<Field.Label> expected a <label> element because the `nativeLabel` prop is true. ' + 'Rendering a non-<label> disables native label association, so `htmlFor` will not ' + 'work. Use a real <label> in the `render` prop, or set `nativeLabel` to `false`.';
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["error"])(`${message}${ownerStackMessage}`);
                }
            } else if (isLabelTag) {
                const ownerStackMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SafeReact"].captureOwnerStack?.() || '';
                const message = '<Field.Label> expected a non-<label> element because the `nativeLabel` prop is false. ' + 'Rendering a <label> assumes native label behavior while Base UI treats it as ' + 'non-native, which can cause unexpected pointer behavior. Use a non-<label> in the ' + '`render` prop, or set `nativeLabel` to `true`.';
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["error"])(`${message}${ownerStackMessage}`);
            }
        }, [
            nativeLabel
        ]);
    }
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('label', componentProps, {
        ref: [
            forwardedRef,
            labelRef
        ],
        state: fieldRootContext.state,
        props: [
            labelProps,
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) FieldLabel.displayName = "FieldLabel";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/error/FieldError.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldError",
    ()=>FieldError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-root-context/FieldRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/labelable-provider/LabelableContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$form$2d$context$2f$FormContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/form-context/FormContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useBaseUiId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useOpenChangeComplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useOpenChangeComplete.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/stateAttributesMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useTransitionStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useTransitionStatus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldValidityMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
};
const FieldError = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function FieldError(componentProps, forwardedRef) {
    const { render, id: idProp, className, match, style, ...elementProps } = componentProps;
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    const { validityData, state: fieldState, name } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFieldRootContext"])(false);
    const { setMessageIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const { errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$form$2d$context$2f$FormContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormContext"])();
    const formError = name ? errors[name] : null;
    const hasSpecificMatch = typeof match === 'string';
    let rendered = false;
    if (match === true) {
        rendered = true;
    } else if (hasSpecificMatch) {
        rendered = Boolean(validityData.state[match]);
    } else {
        rendered = Boolean(formError) || validityData.state.valid === false;
    }
    const { mounted, transitionStatus, setMounted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useTransitionStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransitionStatus"])(rendered);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (!rendered || !id) {
            return undefined;
        }
        setMessageIds((v)=>v.concat(id));
        return ()=>{
            setMessageIds((v)=>v.filter((item)=>item !== id));
        };
    }, [
        rendered,
        id,
        setMessageIds
    ]);
    const errorRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const [lastRenderedMessage, setLastRenderedMessage] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [lastRenderedMessageKey, setLastRenderedMessageKey] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const clientErrorMessage = validityData.errors.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("ul", {
        children: validityData.errors.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("li", {
                children: message
            }, message))
    }) : validityData.error;
    const errorMessage = hasSpecificMatch ? clientErrorMessage : formError || clientErrorMessage;
    let errorKey = validityData.error;
    if (formError != null) {
        errorKey = Array.isArray(formError) ? JSON.stringify(formError) : formError;
    } else if (validityData.errors.length > 1) {
        errorKey = JSON.stringify(validityData.errors);
    }
    if (rendered && errorKey !== lastRenderedMessageKey) {
        setLastRenderedMessageKey(errorKey);
        setLastRenderedMessage(errorMessage);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useOpenChangeComplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenChangeComplete"])({
        open: rendered,
        ref: errorRef,
        onComplete () {
            if (!rendered) {
                setMounted(false);
            }
        }
    });
    const state = {
        ...fieldState,
        transitionStatus
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            errorRef
        ],
        state,
        props: [
            {
                id,
                children: rendered ? errorMessage : lastRenderedMessage
            },
            elementProps
        ],
        stateAttributesMapping,
        enabled: mounted
    });
    if (!mounted) {
        return null;
    }
    return element;
});
if ("TURBOPACK compile-time truthy", 1) FieldError.displayName = "FieldError";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/description/FieldDescription.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldDescription",
    ()=>FieldDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-root-context/FieldRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/labelable-provider/LabelableContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useBaseUiId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const FieldDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function FieldDescription(componentProps, forwardedRef) {
    const { render, id: idProp, className, style, ...elementProps } = componentProps;
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    const fieldRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFieldRootContext"])(false);
    const { setMessageIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (!id) {
            return undefined;
        }
        setMessageIds((v)=>v.concat(id));
        return ()=>{
            setMessageIds((v)=>v.filter((item)=>item !== id));
        };
    }, [
        id,
        setMessageIds
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('p', componentProps, {
        ref: forwardedRef,
        state: fieldRootContext.state,
        props: [
            {
                id
            },
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) FieldDescription.displayName = "FieldDescription";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/control/FieldControl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldControl",
    ()=>FieldControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useControlled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useControlled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/owner.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-root-context/FieldRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$register$2d$control$2f$useRegisterFieldControl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-register-control/useRegisterFieldControl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/labelable-provider/LabelableContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$useLabelableId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/labelable-provider/useLabelableId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/reason-parts.js [app-ssr] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$shadowDom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/shadowDom.js [app-ssr] (ecmascript)");
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
const FieldControl = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function FieldControl(componentProps, forwardedRef) {
    const { render, className, id: idProp, name: nameProp, value: valueProp, disabled: disabledProp = false, onValueChange, defaultValue, autoFocus = false, style, ...elementProps } = componentProps;
    const { state: fieldState, name: fieldName, disabled: fieldDisabled, setTouched, setDirty, validityData, setFocused, setFilled, validationMode, validation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFieldRootContext"])();
    const disabled = fieldDisabled || disabledProp;
    const name = fieldName ?? nameProp;
    const state = {
        ...fieldState,
        disabled
    };
    const { labelId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$useLabelableId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLabelableId"])({
        id: idProp
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        const hasExternalValue = valueProp != null;
        if (validation.inputRef.current?.value || hasExternalValue && valueProp !== '') {
            setFilled(true);
        } else if (hasExternalValue && valueProp === '') {
            setFilled(false);
        }
    }, [
        validation.inputRef,
        setFilled,
        valueProp
    ]);
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (autoFocus && inputRef.current === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$shadowDom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["activeElement"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(inputRef.current))) {
            setFocused(true);
        }
    }, [
        autoFocus,
        setFocused
    ]);
    const [valueUnwrapped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useControlled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControlled"])({
        controlled: valueProp,
        default: defaultValue,
        name: 'FieldControl',
        state: 'value'
    });
    const isControlled = valueProp !== undefined;
    const value = isControlled ? valueUnwrapped : undefined;
    const getValueFromInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])(()=>validation.inputRef.current?.value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$register$2d$control$2f$useRegisterFieldControl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRegisterFieldControl"])(validation.inputRef, id, value, getValueFromInput);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('input', componentProps, {
        ref: [
            forwardedRef,
            inputRef
        ],
        state,
        props: [
            {
                id,
                disabled,
                name,
                ref: validation.inputRef,
                'aria-labelledby': labelId,
                autoFocus,
                ...isControlled ? {
                    value
                } : {
                    defaultValue
                },
                onChange (event) {
                    const inputValue = event.currentTarget.value;
                    onValueChange?.(inputValue, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].none, event.nativeEvent));
                    setDirty(inputValue !== validityData.initialValue);
                    setFilled(inputValue !== '');
                },
                onFocus () {
                    setFocused(true);
                },
                onBlur (event) {
                    setTouched(true);
                    setFocused(false);
                    if (validationMode === 'onBlur') {
                        validation.commit(event.currentTarget.value);
                    }
                },
                onKeyDown (event) {
                    if (event.currentTarget.tagName === 'INPUT' && event.key === 'Enter') {
                        setTouched(true);
                        validation.commit(event.currentTarget.value);
                    }
                }
            },
            validation.getInputValidationProps(),
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) FieldControl.displayName = "FieldControl";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/validity/FieldValidity.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldValidity",
    ()=>FieldValidity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-root-context/FieldRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/utils/getCombinedFieldValidityData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useTransitionStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useTransitionStatus.js [app-ssr] (ecmascript)");
/**
 * Used to display a custom message based on the field's validity.
 * Requires `children` to be a function that accepts field validity state as an argument.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const FieldValidity = function FieldValidity(props) {
    const { children } = props;
    const { validityData, invalid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFieldRootContext"])(false);
    const combinedFieldValidityData = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCombinedFieldValidityData"])(validityData, invalid), [
        validityData,
        invalid
    ]);
    const isInvalid = combinedFieldValidityData.state.valid === false;
    const { transitionStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useTransitionStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransitionStatus"])(isInvalid);
    const fieldValidityState = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        return {
            ...combinedFieldValidityData,
            validity: combinedFieldValidityData.state,
            transitionStatus
        };
    }, [
        combinedFieldValidityData,
        transitionStatus
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children(fieldValidityState)
    });
};
if ("TURBOPACK compile-time truthy", 1) FieldValidity.displayName = "FieldValidity";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/item/FieldItemContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldItemContext",
    ()=>FieldItemContext,
    "useFieldItemContext",
    ()=>useFieldItemContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const FieldItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({
    disabled: false
});
if ("TURBOPACK compile-time truthy", 1) FieldItemContext.displayName = "FieldItemContext";
function useFieldItemContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](FieldItemContext);
    return context;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/item/FieldItem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldItem",
    ()=>FieldItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-root-context/FieldRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$item$2f$FieldItemContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/item/FieldItemContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$LabelableProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/labelable-provider/LabelableProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$checkbox$2d$group$2f$CheckboxGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/checkbox-group/CheckboxGroupContext.js [app-ssr] (ecmascript)");
/**
 * Groups individual items in a checkbox group or radio group with a label and description.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const FieldItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function FieldItem(componentProps, forwardedRef) {
    const { render, className, style, disabled: disabledProp = false, ...elementProps } = componentProps;
    const { state, disabled: rootDisabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFieldRootContext"])(false);
    const disabled = rootDisabled || disabledProp;
    const checkboxGroupContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$checkbox$2d$group$2f$CheckboxGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCheckboxGroupContext"])();
    const hasParentCheckbox = checkboxGroupContext?.allValues !== undefined;
    const controlId = hasParentCheckbox ? checkboxGroupContext?.parent.id : undefined;
    const fieldItemContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            disabled
        }), [
        disabled
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        state,
        props: elementProps,
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$LabelableProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LabelableProvider"], {
        controlId: controlId,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$item$2f$FieldItemContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldItemContext"].Provider, {
            value: fieldItemContext,
            children: element
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) FieldItem.displayName = "FieldItem";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/index.parts.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Control",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$control$2f$FieldControl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldControl"],
    "Description",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$description$2f$FieldDescription$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldDescription"],
    "Error",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$error$2f$FieldError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldError"],
    "Item",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$item$2f$FieldItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldItem"],
    "Label",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$label$2f$FieldLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldLabel"],
    "Root",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldRoot"],
    "Validity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$validity$2f$FieldValidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldValidity"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/index.parts.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/root/FieldRoot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$label$2f$FieldLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/label/FieldLabel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$error$2f$FieldError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/error/FieldError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$description$2f$FieldDescription$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/description/FieldDescription.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$control$2f$FieldControl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/control/FieldControl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$validity$2f$FieldValidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/validity/FieldValidity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$item$2f$FieldItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/item/FieldItem.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/index.parts.js [app-ssr] (ecmascript) <export * as Field>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Field",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/index.parts.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/fieldset/root/FieldsetRootContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldsetRootContext",
    ()=>FieldsetRootContext,
    "useFieldsetRootContext",
    ()=>useFieldsetRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const FieldsetRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({
    legendId: undefined,
    setLegendId: ()=>{},
    disabled: undefined
});
if ("TURBOPACK compile-time truthy", 1) FieldsetRootContext.displayName = "FieldsetRootContext";
function useFieldsetRootContext(optional = false) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](FieldsetRootContext);
    if (!context && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: FieldsetRootContext is missing. Fieldset parts must be placed within <Fieldset.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/checkbox-group/CheckboxGroupContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckboxGroupContext",
    ()=>CheckboxGroupContext,
    "useCheckboxGroupContext",
    ()=>useCheckboxGroupContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const CheckboxGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) CheckboxGroupContext.displayName = "CheckboxGroupContext";
function useCheckboxGroupContext(optional = true) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](CheckboxGroupContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: CheckboxGroupContext is missing. CheckboxGroup parts must be placed within <CheckboxGroup>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/input/Input.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Field$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/field/index.parts.js [app-ssr] (ecmascript) <export * as Field>");
/**
 * A native input element that automatically works with [Field](https://base-ui.com/react/components/field).
 * Renders an `<input>` element.
 *
 * Documentation: [Base UI Input](https://base-ui.com/react/components/input)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function Input(props, forwardedRef) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Field$3e$__["Field"].Control, {
        ref: forwardedRef,
        ...props
    });
});
if ("TURBOPACK compile-time truthy", 1) Input.displayName = "Input";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/separator/Separator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
'use client';
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SeparatorComponent(componentProps, forwardedRef) {
    const { className, render, orientation = 'horizontal', style, ...elementProps } = componentProps;
    const state = {
        orientation
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: forwardedRef,
        props: [
            {
                role: 'separator',
                'aria-orientation': orientation
            },
            elementProps
        ]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) Separator.displayName = "Separator";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/index.parts.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
;
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogRootContext",
    ()=>DialogRootContext,
    "IsDrawerContext",
    ()=>IsDrawerContext,
    "useDialogRootContext",
    ()=>useDialogRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const IsDrawerContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](false);
if ("TURBOPACK compile-time truthy", 1) IsDrawerContext.displayName = "IsDrawerContext";
const DialogRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) DialogRootContext.displayName = "DialogRootContext";
function useDialogRootContext(optional) {
    const dialogRootContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](DialogRootContext);
    if (optional === false && dialogRootContext === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: DialogRootContext is missing. Dialog parts must be placed within <Dialog.Root>.' : "TURBOPACK unreachable");
    }
    return dialogRootContext;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/backdrop/DialogBackdrop.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogBackdrop",
    ()=>DialogBackdrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/stateAttributesMapping.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["popupStateMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
};
const DialogBackdrop = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function DialogBackdrop(componentProps, forwardedRef) {
    const { render, className, style, forceRender = false, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogRootContext"])();
    const open = store.useState('open');
    const nested = store.useState('nested');
    const mounted = store.useState('mounted');
    const transitionStatus = store.useState('transitionStatus');
    const state = {
        open,
        transitionStatus
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: [
            store.context.backdropRef,
            forwardedRef
        ],
        stateAttributesMapping,
        props: [
            {
                role: 'presentation',
                hidden: !mounted,
                style: {
                    userSelect: 'none',
                    WebkitUserSelect: 'none'
                }
            },
            elementProps
        ],
        enabled: forceRender || !nested
    });
});
if ("TURBOPACK compile-time truthy", 1) DialogBackdrop.displayName = "DialogBackdrop";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/close/DialogClose.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogClose",
    ()=>DialogClose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/use-button/useButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/reason-parts.js [app-ssr] (ecmascript) <export * as REASONS>");
'use client';
;
;
;
;
;
;
const DialogClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function DialogClose(componentProps, forwardedRef) {
    const { render, className, style, disabled = false, nativeButton = true, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogRootContext"])();
    const open = store.useState('open');
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        native: nativeButton
    });
    const state = {
        disabled
    };
    function handleClick(event) {
        if (open) {
            store.setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].closePress, event.nativeEvent));
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        state,
        ref: [
            forwardedRef,
            buttonRef
        ],
        props: [
            {
                onClick: handleClick
            },
            elementProps,
            getButtonProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) DialogClose.displayName = "DialogClose";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/description/DialogDescription.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogDescription",
    ()=>DialogDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useBaseUiId.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function DialogDescription(componentProps, forwardedRef) {
    const { render, className, style, id: idProp, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogRootContext"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    store.useSyncedValueWithCleanup('descriptionElementId', id);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('p', componentProps, {
        ref: forwardedRef,
        props: [
            {
                id
            },
            elementProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) DialogDescription.displayName = "DialogDescription";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/popup/DialogPopupCssVars.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogPopupCssVars",
    ()=>DialogPopupCssVars
]);
let DialogPopupCssVars = /*#__PURE__*/ function(DialogPopupCssVars) {
    /**
   * Indicates how many dialogs are nested within.
   * @type {number}
   */ DialogPopupCssVars["nestedDialogs"] = "--nested-dialogs";
    return DialogPopupCssVars;
}({});
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/popup/DialogPopupDataAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogPopupDataAttributes",
    ()=>DialogPopupDataAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-ssr] (ecmascript)");
;
let DialogPopupDataAttributes = function(DialogPopupDataAttributes) {
    /**
   * Present when the dialog is open.
   */ DialogPopupDataAttributes[DialogPopupDataAttributes["open"] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonPopupDataAttributes"].open] = "open";
    /**
   * Present when the dialog is closed.
   */ DialogPopupDataAttributes[DialogPopupDataAttributes["closed"] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonPopupDataAttributes"].closed] = "closed";
    /**
   * Present when the dialog is animating in.
   */ DialogPopupDataAttributes[DialogPopupDataAttributes["startingStyle"] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonPopupDataAttributes"].startingStyle] = "startingStyle";
    /**
   * Present when the dialog is animating out.
   */ DialogPopupDataAttributes[DialogPopupDataAttributes["endingStyle"] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonPopupDataAttributes"].endingStyle] = "endingStyle";
    /**
   * Present when the dialog is nested within another dialog.
   */ DialogPopupDataAttributes["nested"] = "data-nested";
    /**
   * Present when the dialog has other open dialogs nested within it.
   */ DialogPopupDataAttributes["nestedDialogOpen"] = "data-nested-dialog-open";
    return DialogPopupDataAttributes;
}({});
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/portal/DialogPortalContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogPortalContext",
    ()=>DialogPortalContext,
    "useDialogPortalContext",
    ()=>useDialogPortalContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const DialogPortalContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) DialogPortalContext.displayName = "DialogPortalContext";
function useDialogPortalContext() {
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](DialogPortalContext);
    if (value === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: <Dialog.Portal> is missing.' : "TURBOPACK unreachable");
    }
    return value;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/popup/DialogPopup.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogPopup",
    ()=>DialogPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingFocusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingFocusManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/stateAttributesMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$popup$2f$DialogPopupCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/popup/DialogPopupCssVars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$popup$2f$DialogPopupDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/popup/DialogPopupDataAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortalContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/portal/DialogPortalContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useOpenChangeComplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useOpenChangeComplete.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/composite/composite.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popups/popupStoreUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["popupStateMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionStatusMapping"],
    nestedDialogOpen (value) {
        return value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$popup$2f$DialogPopupDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogPopupDataAttributes"].nestedDialogOpen]: ''
        } : null;
    }
};
const DialogPopup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function DialogPopup(componentProps, forwardedRef) {
    const { render, className, style, finalFocus, initialFocus, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogRootContext"])();
    const descriptionElementId = store.useState('descriptionElementId');
    const disablePointerDismissal = store.useState('disablePointerDismissal');
    const floatingRootContext = store.useState('floatingRootContext');
    const rootPopupProps = store.useState('popupProps');
    const modal = store.useState('modal');
    const mounted = store.useState('mounted');
    const nested = store.useState('nested');
    const nestedOpenDialogCount = store.useState('nestedOpenDialogCount');
    const open = store.useState('open');
    const openMethod = store.useState('openMethod');
    const titleElementId = store.useState('titleElementId');
    const transitionStatus = store.useState('transitionStatus');
    const role = store.useState('role');
    const floatingId = floatingRootContext.useState('floatingId');
    const popupId = elementProps.id ?? floatingId;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortalContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogPortalContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useOpenChangeComplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenChangeComplete"])({
        open,
        ref: store.context.popupRef,
        onComplete () {
            if (open) {
                store.context.onOpenChangeComplete?.(true);
            }
        }
    });
    // Default initial focus logic:
    // If opened by touch, focus the popup element to prevent the virtual keyboard from opening
    // (this is required for Android specifically as iOS handles this automatically).
    function defaultInitialFocus(interactionType) {
        if (interactionType === 'touch') {
            return store.context.popupRef.current;
        }
        return true;
    }
    const resolvedInitialFocus = initialFocus === undefined ? defaultInitialFocus : initialFocus;
    const nestedDialogOpen = nestedOpenDialogCount > 0;
    const setPopupElement = store.useStateSetter('popupElement');
    const state = {
        open,
        nested,
        transitionStatus,
        nestedDialogOpen
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        props: [
            rootPopupProps,
            {
                id: popupId,
                'aria-labelledby': titleElementId ?? undefined,
                'aria-describedby': descriptionElementId ?? undefined,
                role,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FOCUSABLE_POPUP_PROPS"],
                hidden: !mounted,
                onKeyDown (event) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["COMPOSITE_KEYS"].has(event.key)) {
                        event.stopPropagation();
                    }
                },
                style: {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$popup$2f$DialogPopupCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogPopupCssVars"].nestedDialogs]: nestedOpenDialogCount
                }
            },
            elementProps
        ],
        ref: [
            forwardedRef,
            store.context.popupRef,
            setPopupElement
        ],
        stateAttributesMapping
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingFocusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingFocusManager"], {
        context: floatingRootContext,
        openInteractionType: openMethod,
        disabled: !mounted,
        closeOnFocusOut: !disablePointerDismissal,
        initialFocus: resolvedInitialFocus,
        returnFocus: finalFocus,
        modal: modal !== false,
        restoreFocus: "popup",
        children: element
    });
});
if ("TURBOPACK compile-time truthy", 1) DialogPopup.displayName = "DialogPopup";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/portal/DialogPortal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogPortal",
    ()=>DialogPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$inertValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/inertValue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingPortal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingPortal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortalContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/portal/DialogPortalContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$InternalBackdrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/InternalBackdrop.js [app-ssr] (ecmascript)");
/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const DialogPortal = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function DialogPortal(props, forwardedRef) {
    const { keepMounted = false, ...portalProps } = props;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogRootContext"])();
    const mounted = store.useState('mounted');
    const modal = store.useState('modal');
    const open = store.useState('open');
    const shouldRender = mounted || keepMounted;
    if (!shouldRender) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortalContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogPortalContext"].Provider, {
        value: keepMounted,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingPortal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingPortal"], {
            ref: forwardedRef,
            ...portalProps,
            children: [
                mounted && modal === true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$InternalBackdrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalBackdrop"], {
                    ref: store.context.internalBackdropRef,
                    inert: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$inertValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inertValue"])(!open)
                }),
                props.children
            ]
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) DialogPortal.displayName = "DialogPortal";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/useDialogRoot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogInteractions",
    ()=>DialogInteractions,
    "useDialogRoot",
    ()=>useDialogRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useScrollLock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useScrollLock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/empty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useDismiss$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useDismiss.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$shadowDom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/shadowDom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/reason-parts.js [app-ssr] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popups/popupStoreUtils.js [app-ssr] (ecmascript)");
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
function useDialogRoot(params) {
    const { store, parentContext, actionsRef, isDrawer } = params;
    const open = store.useState('open');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePopupRootSync"])(store, open);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImplicitActiveTrigger"])(store);
    const { forceUnmount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenStateTransitions"])(open, store);
    const handleImperativeClose = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        store.setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].imperativeAction));
    }, [
        store
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](actionsRef, ()=>({
            unmount: forceUnmount,
            close: handleImperativeClose
        }), [
        forceUnmount,
        handleImperativeClose
    ]);
    return {
        parentContext,
        isDrawer
    };
}
function DialogInteractions({ store, dialogRoot }) {
    const { parentContext, isDrawer } = dialogRoot;
    const open = store.useState('open');
    const disablePointerDismissal = store.useState('disablePointerDismissal');
    const modal = store.useState('modal');
    const popupElement = store.useState('popupElement');
    const floatingRootContext = store.useState('floatingRootContext');
    const [ownNestedOpenDialogs, setOwnNestedOpenDialogs] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [ownNestedOpenDrawers, setOwnNestedOpenDrawers] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const isTopmost = ownNestedOpenDialogs === 0;
    const dismiss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useDismiss$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDismiss"])(floatingRootContext, {
        outsidePressEvent () {
            if (store.context.internalBackdropRef.current || store.context.backdropRef.current) {
                return 'intentional';
            }
            // Ensure `aria-hidden` on outside elements is removed immediately
            // on outside press when trapping focus.
            return {
                mouse: modal === 'trap-focus' ? 'sloppy' : 'intentional',
                touch: 'sloppy'
            };
        },
        outsidePress (event) {
            if (!store.context.outsidePressEnabledRef.current) {
                return false;
            }
            // For mouse events, only accept left button (button 0)
            // For touch events, a single touch is equivalent to left button
            if ('button' in event && event.button !== 0) {
                return false;
            }
            if ('touches' in event && event.touches.length !== 1) {
                return false;
            }
            const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$shadowDom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTarget"])(event);
            if (isTopmost && !disablePointerDismissal) {
                const eventTarget = target;
                // Only close if the click occurred on the dialog's owning backdrop.
                // This supports multiple modal dialogs that aren't nested in the React tree:
                // https://github.com/mui/base-ui/issues/1320
                if (modal) {
                    return store.context.internalBackdropRef.current || store.context.backdropRef.current ? store.context.internalBackdropRef.current === eventTarget || store.context.backdropRef.current === eventTarget || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$shadowDom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contains"])(eventTarget, popupElement) && !eventTarget?.hasAttribute('data-base-ui-portal') : true;
                }
                return true;
            }
            return false;
        },
        escapeKey: isTopmost
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useScrollLock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollLock"])(open && modal === true, popupElement);
    // Listen for nested open/close events on this store to maintain the counts.
    store.useContextCallback('onNestedDialogOpen', (dialogCount, drawerCount)=>{
        setOwnNestedOpenDialogs(dialogCount);
        setOwnNestedOpenDrawers(drawerCount);
    });
    store.useContextCallback('onNestedDialogClose', ()=>{
        setOwnNestedOpenDialogs(0);
        setOwnNestedOpenDrawers(0);
    });
    // Notify parent of our open/close state using parent callbacks, if any
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (parentContext?.onNestedDialogOpen && open) {
            parentContext.onNestedDialogOpen(ownNestedOpenDialogs + 1, ownNestedOpenDrawers + (isDrawer ? 1 : 0));
        }
        if (parentContext?.onNestedDialogClose && !open) {
            parentContext.onNestedDialogClose();
        }
        return ()=>{
            if (parentContext?.onNestedDialogClose && open) {
                parentContext.onNestedDialogClose();
            }
        };
    }, [
        isDrawer,
        open,
        ownNestedOpenDialogs,
        ownNestedOpenDrawers,
        parentContext
    ]);
    const activeTriggerProps = dismiss.reference ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"];
    const inactiveTriggerProps = dismiss.trigger ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"];
    const popupProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FOCUSABLE_POPUP_PROPS"], dismiss.floating), [
        dismiss.floating
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePopupInteractionProps"])(store, {
        activeTriggerProps,
        inactiveTriggerProps,
        popupProps,
        nestedOpenDialogCount: ownNestedOpenDialogs,
        nestedOpenDrawerCount: ownNestedOpenDrawers
    });
    return null;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/store/DialogStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogStore",
    ()=>DialogStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/createSelector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$ReactStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/ReactStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popups/store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupTriggerMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popups/popupTriggerMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popups/popupStoreUtils.js [app-ssr] (ecmascript)");
;
;
;
const selectors = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["popupStoreSelectors"],
    modal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.modal),
    nested: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.nested),
    nestedOpenDialogCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.nestedOpenDialogCount),
    nestedOpenDrawerCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.nestedOpenDrawerCount),
    disablePointerDismissal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.disablePointerDismissal),
    openMethod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.openMethod),
    descriptionElementId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.descriptionElementId),
    titleElementId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.titleElementId),
    viewportElement: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.viewportElement),
    role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.role)
};
class DialogStore extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$ReactStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReactStore"] {
    constructor(initialState, floatingId, nested = false){
        const triggerElements = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupTriggerMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopupTriggerMap"]();
        const state = createInitialState(initialState);
        state.floatingRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPopupFloatingRootContext"])(triggerElements, floatingId, nested);
        super(state, {
            popupRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRef"](),
            backdropRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRef"](),
            internalBackdropRef: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRef"](),
            outsidePressEnabledRef: {
                current: true
            },
            triggerElements,
            onOpenChange: undefined,
            onOpenChangeComplete: undefined
        }, selectors);
    }
    setOpen = (nextOpen, eventDetails)=>{
        eventDetails.preventUnmountOnClose = ()=>{
            this.set('preventUnmountingOnClose', true);
        };
        if (!nextOpen && eventDetails.trigger == null && this.state.activeTriggerId != null) {
            // When closing the dialog, pass the old trigger to the onOpenChange event
            // so it's not reset too early (potentially causing focus issues in controlled scenarios).
            eventDetails.trigger = this.state.activeTriggerElement ?? undefined;
        }
        this.context.onOpenChange?.(nextOpen, eventDetails);
        if (eventDetails.isCanceled) {
            return;
        }
        this.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
        const updatedState = {
            open: nextOpen
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setOpenTriggerState"])(updatedState, nextOpen, eventDetails.trigger);
        this.update(updatedState);
    };
    static useStore(externalStore, initialState) {
        /* eslint-disable react-hooks/rules-of-hooks */ const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePopupStore"])(externalStore, (floatingId, nested)=>new DialogStore(initialState, floatingId, nested), true).store;
        /* eslint-enable react-hooks/rules-of-hooks */ return store;
    }
}
function createInitialState(initialState = {}) {
    return {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createInitialPopupStoreState"])(),
        modal: true,
        disablePointerDismissal: false,
        popupElement: null,
        viewportElement: null,
        descriptionElementId: undefined,
        titleElementId: undefined,
        openMethod: null,
        nested: false,
        nestedOpenDialogCount: 0,
        nestedOpenDrawerCount: 0,
        role: 'dialog',
        ...initialState
    };
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/useRenderDialogRoot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRenderDialogRoot",
    ()=>useRenderDialogRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnFirstRender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useOnFirstRender.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$useDialogRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/useDialogRoot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/store/DialogStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function useRenderDialogRoot(props, mode = 'dialog') {
    const { children, open: openProp, defaultOpen = false, onOpenChange, onOpenChangeComplete, disablePointerDismissal: disablePointerDismissalProp = false, modal: modalProp = true, actionsRef, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null } = props;
    const isDrawer = mode === 'drawer';
    const isAlertDialog = mode === 'alert-dialog';
    const modal = isAlertDialog ? true : modalProp;
    const disablePointerDismissal = isAlertDialog || disablePointerDismissalProp;
    const role = isAlertDialog ? 'alertdialog' : 'dialog';
    const parentDialogRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogRootContext"])(true);
    const nested = Boolean(parentDialogRootContext);
    const rootState = {
        modal,
        disablePointerDismissal,
        nested,
        role
    };
    const store = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogStore"].useStore(handle?.store, {
        open: defaultOpen,
        openProp,
        activeTriggerId: defaultTriggerIdProp,
        triggerIdProp,
        ...rootState
    });
    // Support initially open state when uncontrolled
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnFirstRender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOnFirstRender"])(()=>{
        const nextState = openProp === undefined && store.state.open === false && defaultOpen === true ? {
            open: true,
            activeTriggerId: defaultTriggerIdProp
        } : null;
        if (isAlertDialog) {
            // Handles can reuse plain Dialog stores; alert dialog invariants must exist immediately.
            store.update(nextState ? {
                ...rootState,
                ...nextState
            } : rootState);
        } else if (nextState) {
            store.update(nextState);
        }
    });
    store.useControlledProp('openProp', openProp);
    store.useControlledProp('triggerIdProp', triggerIdProp);
    store.useSyncedValues(rootState);
    store.useContextCallback('onOpenChange', onOpenChange);
    store.useContextCallback('onOpenChangeComplete', onOpenChangeComplete);
    const open = store.useState('open');
    const mounted = store.useState('mounted');
    const payload = store.useState('payload');
    const dialogRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$useDialogRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogRoot"])({
        store,
        actionsRef,
        parentContext: parentDialogRootContext?.store.context,
        isDrawer
    });
    const shouldRenderInteractions = open || mounted;
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            store
        }), [
        store
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsDrawerContext"].Provider, {
        value: false,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogRootContext"].Provider, {
            value: contextValue,
            children: [
                shouldRenderInteractions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$useDialogRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogInteractions"], {
                    store: store,
                    dialogRoot: dialogRoot
                }),
                typeof children === 'function' ? children({
                    payload
                }) : children
            ]
        })
    });
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/DialogRoot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogRoot",
    ()=>DialogRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$useRenderDialogRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/useRenderDialogRoot.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function DialogRoot(props) {
    const mode = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsDrawerContext"]) ? 'drawer' : 'dialog';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$useRenderDialogRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderDialogRoot"])(props, mode);
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/viewport/DialogViewportDataAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogViewportDataAttributes",
    ()=>DialogViewportDataAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-ssr] (ecmascript)");
;
let DialogViewportDataAttributes = function(DialogViewportDataAttributes) {
    /**
   * Present when the dialog is open.
   */ DialogViewportDataAttributes[DialogViewportDataAttributes["open"] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonPopupDataAttributes"].open] = "open";
    /**
   * Present when the dialog is closed.
   */ DialogViewportDataAttributes[DialogViewportDataAttributes["closed"] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonPopupDataAttributes"].closed] = "closed";
    /**
   * Present when the dialog is animating in.
   */ DialogViewportDataAttributes[DialogViewportDataAttributes["startingStyle"] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonPopupDataAttributes"].startingStyle] = "startingStyle";
    /**
   * Present when the dialog is animating out.
   */ DialogViewportDataAttributes[DialogViewportDataAttributes["endingStyle"] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonPopupDataAttributes"].endingStyle] = "endingStyle";
    /**
   * Present when the dialog is nested within another dialog.
   */ DialogViewportDataAttributes["nested"] = "data-nested";
    /**
   * Present when the dialog has other open dialogs nested within it.
   */ DialogViewportDataAttributes["nestedDialogOpen"] = "data-nested-dialog-open";
    return DialogViewportDataAttributes;
}({});
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/viewport/DialogViewport.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogViewport",
    ()=>DialogViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/stateAttributesMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortalContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/portal/DialogPortalContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$viewport$2f$DialogViewportDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/viewport/DialogViewportDataAttributes.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["popupStateMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionStatusMapping"],
    nested (value) {
        return value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$viewport$2f$DialogViewportDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogViewportDataAttributes"].nested]: ''
        } : null;
    },
    nestedDialogOpen (value) {
        return value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$viewport$2f$DialogViewportDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogViewportDataAttributes"].nestedDialogOpen]: ''
        } : null;
    }
};
const DialogViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function DialogViewport(componentProps, forwardedRef) {
    const { render, className, style, children, ...elementProps } = componentProps;
    const keepMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortalContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogPortalContext"])();
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogRootContext"])();
    const open = store.useState('open');
    const nested = store.useState('nested');
    const transitionStatus = store.useState('transitionStatus');
    const nestedOpenDialogCount = store.useState('nestedOpenDialogCount');
    const mounted = store.useState('mounted');
    const setViewportElement = store.useStateSetter('viewportElement');
    const nestedDialogOpen = nestedOpenDialogCount > 0;
    const state = {
        open,
        nested,
        transitionStatus,
        nestedDialogOpen
    };
    const shouldRender = keepMounted || mounted;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        enabled: shouldRender,
        state,
        ref: [
            forwardedRef,
            setViewportElement
        ],
        stateAttributesMapping,
        props: [
            {
                role: 'presentation',
                hidden: !mounted,
                style: {
                    pointerEvents: !open ? 'none' : undefined
                },
                children
            },
            elementProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) DialogViewport.displayName = "DialogViewport";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/title/DialogTitle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogTitle",
    ()=>DialogTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useBaseUiId.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function DialogTitle(componentProps, forwardedRef) {
    const { render, className, style, id: idProp, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogRootContext"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    store.useSyncedValueWithCleanup('titleElementId', id);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('h2', componentProps, {
        ref: forwardedRef,
        props: [
            {
                id
            },
            elementProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) DialogTitle.displayName = "DialogTitle";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/trigger/DialogTrigger.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/use-button/useButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popups/popupStoreUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useBaseUiId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useClick$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useClick.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenInteractionType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/useOpenInteractionType.js [app-ssr] (ecmascript)");
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
const DialogTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function DialogTrigger(componentProps, forwardedRef) {
    const { render, className, style, disabled = false, nativeButton = true, id: idProp, payload, handle, ...elementProps } = componentProps;
    const dialogRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogRootContext"])(true);
    const store = handle?.store ?? dialogRootContext?.store;
    if (!store) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: <Dialog.Trigger> must be used within <Dialog.Root> or provided with a handle.' : "TURBOPACK unreachable");
    }
    const thisTriggerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    const floatingContext = store.useState('floatingRootContext');
    const isOpenedByThisTrigger = store.useState('isOpenedByTrigger', thisTriggerId);
    const popupId = store.useState('triggerPopupId', thisTriggerId);
    const triggerElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const { registerTrigger, isMountedByThisTrigger } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTriggerDataForwarding"])(thisTriggerId, triggerElementRef, store, {
        payload
    });
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        native: nativeButton
    });
    const click = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useClick$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClick"])(floatingContext, {
        enabled: floatingContext != null
    });
    const interactionTypeProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenInteractionType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenMethodTriggerProps"])(()=>store.select('open'), (interactionType)=>{
        store.set('openMethod', interactionType);
    });
    const state = {
        disabled,
        open: isOpenedByThisTrigger
    };
    const rootTriggerProps = store.useState('triggerProps', isMountedByThisTrigger);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        state,
        ref: [
            buttonRef,
            forwardedRef,
            registerTrigger,
            triggerElementRef
        ],
        props: [
            click.reference,
            rootTriggerProps,
            interactionTypeProps,
            {
                [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLICK_TRIGGER_IDENTIFIER"]]: '',
                id: thisTriggerId,
                'aria-haspopup': 'dialog',
                'aria-expanded': isOpenedByThisTrigger,
                'aria-controls': popupId
            },
            elementProps,
            getButtonProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["triggerOpenStateMapping"]
    });
});
if ("TURBOPACK compile-time truthy", 1) DialogTrigger.displayName = "DialogTrigger";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/store/DialogHandle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogHandle",
    ()=>DialogHandle,
    "createDialogHandle",
    ()=>createDialogHandle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/store/DialogStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/reason-parts.js [app-ssr] (ecmascript) <export * as REASONS>");
;
;
;
class DialogHandle {
    /**
   * Internal store holding the dialog state.
   * @internal
   */ constructor(store){
        this.store = store ?? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogStore"]();
    }
    /**
   * Opens the dialog and associates it with the trigger with the given id.
   * The trigger, if provided, must be a matching Trigger component with this handle passed as a prop.
   *
   * This method should only be called in an event handler or an effect (not during rendering).
   *
   * @param triggerId ID of the trigger to associate with the dialog. If null, the dialog will open without a trigger association.
   */ open(triggerId) {
        const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) : undefined;
        if ("TURBOPACK compile-time truthy", 1) {
            if (triggerId && !triggerElement) {
                console.warn(`Base UI: DialogHandle.open: No trigger found with id "${triggerId}". The dialog will open, but the trigger will not be associated with the dialog.`);
            }
        }
        this.store.setOpen(true, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].imperativeAction, undefined, triggerElement));
    }
    /**
   * Opens the dialog and sets the payload.
   * Does not associate the dialog with any trigger.
   *
   * @param payload Payload to set when opening the dialog.
   */ openWithPayload(payload) {
        this.store.set('payload', payload);
        this.store.setOpen(true, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].imperativeAction, undefined, undefined));
    }
    /**
   * Closes the dialog.
   */ close() {
        this.store.setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].imperativeAction, undefined, undefined));
    }
    /**
   * Indicates whether the dialog is currently open.
   */ get isOpen() {
        return this.store.select('open');
    }
}
function createDialogHandle() {
    return new DialogHandle();
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/index.parts.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Backdrop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$backdrop$2f$DialogBackdrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogBackdrop"],
    "Close",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$close$2f$DialogClose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogClose"],
    "Description",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$description$2f$DialogDescription$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"],
    "Handle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogHandle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHandle"],
    "Popup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$popup$2f$DialogPopup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogPopup"],
    "Portal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogPortal"],
    "Root",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogRoot"],
    "Title",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$title$2f$DialogTitle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"],
    "Trigger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$trigger$2f$DialogTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"],
    "Viewport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$viewport$2f$DialogViewport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogViewport"],
    "createHandle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogHandle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDialogHandle"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/index.parts.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$backdrop$2f$DialogBackdrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/backdrop/DialogBackdrop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$close$2f$DialogClose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/close/DialogClose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$description$2f$DialogDescription$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/description/DialogDescription.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$popup$2f$DialogPopup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/popup/DialogPopup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/portal/DialogPortal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$DialogRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/DialogRoot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$viewport$2f$DialogViewport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/viewport/DialogViewport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$title$2f$DialogTitle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/title/DialogTitle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$trigger$2f$DialogTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/trigger/DialogTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogHandle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/store/DialogHandle.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/index.parts.js [app-ssr] (ecmascript) <export * as Dialog>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/index.parts.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/index.parts.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/root/AvatarRootContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarRootContext",
    ()=>AvatarRootContext,
    "useAvatarRootContext",
    ()=>useAvatarRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const AvatarRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) AvatarRootContext.displayName = "AvatarRootContext";
function useAvatarRootContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](AvatarRootContext);
    if (context === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: AvatarRootContext is missing. Avatar parts must be placed within <Avatar.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/root/stateAttributesMapping.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "avatarStateAttributesMapping",
    ()=>avatarStateAttributesMapping
]);
const avatarStateAttributesMapping = {
    imageLoadingStatus: ()=>null
};
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/root/AvatarRoot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarRoot",
    ()=>AvatarRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$root$2f$AvatarRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/root/AvatarRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/root/stateAttributesMapping.js [app-ssr] (ecmascript)");
/**
 * Displays a user's profile picture, initials, or fallback icon.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Avatar](https://base-ui.com/react/components/avatar)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const AvatarRoot = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function AvatarRoot(componentProps, forwardedRef) {
    const { className, render, style, ...elementProps } = componentProps;
    const [imageLoadingStatus, setImageLoadingStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]('idle');
    const state = {
        imageLoadingStatus
    };
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            imageLoadingStatus,
            setImageLoadingStatus
        }), [
        imageLoadingStatus,
        setImageLoadingStatus
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('span', componentProps, {
        state,
        ref: forwardedRef,
        props: elementProps,
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["avatarStateAttributesMapping"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$root$2f$AvatarRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarRootContext"].Provider, {
        value: contextValue,
        children: element
    });
});
if ("TURBOPACK compile-time truthy", 1) AvatarRoot.displayName = "AvatarRoot";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/image/useImageLoadingStatus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useImageLoadingStatus",
    ()=>useImageLoadingStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/empty.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function useImageLoadingStatus(src, { referrerPolicy, crossOrigin }) {
    const [loadingStatus, setLoadingStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]('idle');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (!src) {
            setLoadingStatus('error');
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NOOP"];
        }
        let isMounted = true;
        const image = new window.Image();
        const updateStatus = (status)=>()=>{
                if (!isMounted) {
                    return;
                }
                setLoadingStatus(status);
            };
        setLoadingStatus('loading');
        image.onload = updateStatus('loaded');
        image.onerror = updateStatus('error');
        if (referrerPolicy) {
            image.referrerPolicy = referrerPolicy;
        }
        image.crossOrigin = crossOrigin ?? null;
        image.src = src;
        // Fast path for cached/decoded images
        if (image.complete) {
            setLoadingStatus(image.naturalWidth > 0 ? 'loaded' : 'error');
        }
        return ()=>{
            isMounted = false;
        };
    }, [
        src,
        crossOrigin,
        referrerPolicy
    ]);
    return loadingStatus;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/image/AvatarImage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$root$2f$AvatarRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/root/AvatarRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/root/stateAttributesMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useOpenChangeComplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useOpenChangeComplete.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/stateAttributesMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useTransitionStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useTransitionStatus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$image$2f$useImageLoadingStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/image/useImageLoadingStatus.js [app-ssr] (ecmascript)");
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
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["avatarStateAttributesMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
};
const AvatarImage = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function AvatarImage(componentProps, forwardedRef) {
    const { className, render, onLoadingStatusChange: onLoadingStatusChangeProp, referrerPolicy, crossOrigin, style, ...elementProps } = componentProps;
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$root$2f$AvatarRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAvatarRootContext"])();
    const imageLoadingStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$image$2f$useImageLoadingStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImageLoadingStatus"])(componentProps.src, {
        referrerPolicy,
        crossOrigin
    });
    const isVisible = imageLoadingStatus === 'loaded';
    const { mounted, transitionStatus, setMounted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useTransitionStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransitionStatus"])(isVisible);
    const imageRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const handleLoadingStatusChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((status)=>{
        onLoadingStatusChangeProp?.(status);
        context.setImageLoadingStatus(status);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (imageLoadingStatus !== 'idle') {
            handleLoadingStatusChange(imageLoadingStatus);
        }
    }, [
        imageLoadingStatus,
        handleLoadingStatusChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useOpenChangeComplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenChangeComplete"])({
        open: isVisible,
        ref: imageRef,
        onComplete () {
            if (!isVisible) {
                setMounted(false);
            }
        }
    });
    const state = {
        imageLoadingStatus,
        transitionStatus
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('img', componentProps, {
        state,
        ref: [
            forwardedRef,
            imageRef
        ],
        props: elementProps,
        stateAttributesMapping,
        enabled: mounted
    });
    if (!mounted) {
        return null;
    }
    return element;
});
if ("TURBOPACK compile-time truthy", 1) AvatarImage.displayName = "AvatarImage";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/fallback/AvatarFallback.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarFallback",
    ()=>AvatarFallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useTimeout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$root$2f$AvatarRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/root/AvatarRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/root/stateAttributesMapping.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const AvatarFallback = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function AvatarFallback(componentProps, forwardedRef) {
    const { className, render, delay, style, ...elementProps } = componentProps;
    const { imageLoadingStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$root$2f$AvatarRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAvatarRootContext"])();
    const [delayPassed, setDelayPassed] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](delay === undefined);
    const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimeout"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (delay !== undefined) {
            timeout.start(delay, ()=>setDelayPassed(true));
        }
        return timeout.clear;
    }, [
        timeout,
        delay
    ]);
    const state = {
        imageLoadingStatus
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('span', componentProps, {
        state,
        ref: forwardedRef,
        props: elementProps,
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["avatarStateAttributesMapping"],
        enabled: imageLoadingStatus !== 'loaded' && delayPassed
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) AvatarFallback.displayName = "AvatarFallback";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/index.parts.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fallback",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$fallback$2f$AvatarFallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"],
    "Image",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$image$2f$AvatarImage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"],
    "Root",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$root$2f$AvatarRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarRoot"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/index.parts.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$root$2f$AvatarRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/root/AvatarRoot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$image$2f$AvatarImage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/image/AvatarImage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$fallback$2f$AvatarFallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/fallback/AvatarFallback.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/index.parts.js [app-ssr] (ecmascript) <export * as Avatar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$avatar$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/avatar/index.parts.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/context-menu/root/ContextMenuRootContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextMenuRootContext",
    ()=>ContextMenuRootContext,
    "useContextMenuRootContext",
    ()=>useContextMenuRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ContextMenuRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) ContextMenuRootContext.displayName = "ContextMenuRootContext";
function useContextMenuRootContext(optional = true) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](ContextMenuRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: ContextMenuRootContext is missing. ContextMenu parts must be placed within <ContextMenu.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/toolbar/root/ToolbarRootContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToolbarRootContext",
    ()=>ToolbarRootContext,
    "useToolbarRootContext",
    ()=>useToolbarRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ToolbarRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) ToolbarRootContext.displayName = "ToolbarRootContext";
function useToolbarRootContext(optional) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](ToolbarRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: ToolbarRootContext is missing. Toolbar parts must be placed within <Toolbar.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/menubar/MenubarContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenubarContext",
    ()=>MenubarContext,
    "useMenubarContext",
    ()=>useMenubarContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const MenubarContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
if ("TURBOPACK compile-time truthy", 1) MenubarContext.displayName = "MenubarContext";
function useMenubarContext(optional) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](MenubarContext);
    if (context === null && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: MenubarContext is missing. Menubar parts must be placed within <Menubar>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/alert-dialog/index.parts.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
;
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/alert-dialog/root/AlertDialogRoot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertDialogRoot",
    ()=>AlertDialogRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$useRenderDialogRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/root/useRenderDialogRoot.js [app-ssr] (ecmascript)");
'use client';
;
function AlertDialogRoot(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$root$2f$useRenderDialogRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderDialogRoot"])(props, 'alert-dialog');
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/alert-dialog/trigger/AlertDialogTrigger.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertDialogTrigger",
    ()=>AlertDialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$trigger$2f$DialogTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/trigger/DialogTrigger.js [app-ssr] (ecmascript)");
'use client';
;
const AlertDialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$trigger$2f$DialogTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"];
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/alert-dialog/handle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertDialogHandle",
    ()=>AlertDialogHandle,
    "alertDialogState",
    ()=>alertDialogState,
    "createAlertDialogHandle",
    ()=>createAlertDialogHandle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogHandle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/store/DialogHandle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/store/DialogStore.js [app-ssr] (ecmascript)");
;
;
const alertDialogState = {
    modal: true,
    disablePointerDismissal: true,
    role: 'alertdialog'
};
class AlertDialogHandle extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogHandle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHandle"] {
    constructor(store){
        const alertDialogStore = store ?? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$store$2f$DialogStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogStore"](alertDialogState);
        super(alertDialogStore);
        if (store) {
            // Supplied stores may have been created as plain dialogs; enforce alert-dialog state.
            this.store.update(alertDialogState);
        }
    }
}
function createAlertDialogHandle() {
    return new AlertDialogHandle();
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/alert-dialog/index.parts.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Backdrop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$backdrop$2f$DialogBackdrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogBackdrop"],
    "Close",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$close$2f$DialogClose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogClose"],
    "Description",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$description$2f$DialogDescription$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"],
    "Handle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$alert$2d$dialog$2f$handle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHandle"],
    "Popup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$popup$2f$DialogPopup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogPopup"],
    "Portal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogPortal"],
    "Root",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$alert$2d$dialog$2f$root$2f$AlertDialogRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogRoot"],
    "Title",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$title$2f$DialogTitle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"],
    "Trigger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$alert$2d$dialog$2f$trigger$2f$AlertDialogTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTrigger"],
    "Viewport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$viewport$2f$DialogViewport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogViewport"],
    "createHandle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$alert$2d$dialog$2f$handle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAlertDialogHandle"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$alert$2d$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/alert-dialog/index.parts.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$alert$2d$dialog$2f$root$2f$AlertDialogRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/alert-dialog/root/AlertDialogRoot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$backdrop$2f$DialogBackdrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/backdrop/DialogBackdrop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$close$2f$DialogClose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/close/DialogClose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$description$2f$DialogDescription$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/description/DialogDescription.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$popup$2f$DialogPopup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/popup/DialogPopup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$portal$2f$DialogPortal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/portal/DialogPortal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$title$2f$DialogTitle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/title/DialogTitle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$alert$2d$dialog$2f$trigger$2f$AlertDialogTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/alert-dialog/trigger/AlertDialogTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$viewport$2f$DialogViewport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/dialog/viewport/DialogViewport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$alert$2d$dialog$2f$handle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/alert-dialog/handle.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/alert-dialog/index.parts.js [app-ssr] (ecmascript) <export * as AlertDialog>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertDialog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$alert$2d$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$alert$2d$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/alert-dialog/index.parts.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/index.parts.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaRootContext",
    ()=>ScrollAreaRootContext,
    "useScrollAreaRootContext",
    ()=>useScrollAreaRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ScrollAreaRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) ScrollAreaRootContext.displayName = "ScrollAreaRootContext";
function useScrollAreaRootContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](ScrollAreaRootContext);
    if (context === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: ScrollAreaRootContext is missing. ScrollArea parts must be placed within <ScrollArea.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootCssVars.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaRootCssVars",
    ()=>ScrollAreaRootCssVars
]);
let ScrollAreaRootCssVars = /*#__PURE__*/ function(ScrollAreaRootCssVars) {
    /**
   * The scroll area's corner height.
   * @type {number}
   */ ScrollAreaRootCssVars["scrollAreaCornerHeight"] = "--scroll-area-corner-height";
    /**
   * The scroll area's corner width.
   * @type {number}
   */ ScrollAreaRootCssVars["scrollAreaCornerWidth"] = "--scroll-area-corner-width";
    return ScrollAreaRootCssVars;
}({});
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MIN_THUMB_SIZE",
    ()=>MIN_THUMB_SIZE,
    "SCROLL_TIMEOUT",
    ()=>SCROLL_TIMEOUT
]);
const SCROLL_TIMEOUT = 500;
const MIN_THUMB_SIZE = 16;
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/utils/getOffset.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOffset",
    ()=>getOffset
]);
function getOffset(element, prop, axis) {
    if (!element) {
        return 0;
    }
    const styles = getComputedStyle(element);
    const propAxis = axis === 'x' ? 'Inline' : 'Block';
    // Safari misreports `marginInlineEnd` in RTL.
    // We have to assume the start/end values are symmetrical, which is likely.
    if (axis === 'x' && prop === 'margin') {
        return parseFloat(styles[`${prop}InlineStart`]) * 2;
    }
    return parseFloat(styles[`${prop}${propAxis}Start`]) + parseFloat(styles[`${prop}${propAxis}End`]);
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarDataAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaScrollbarDataAttributes",
    ()=>ScrollAreaScrollbarDataAttributes
]);
let ScrollAreaScrollbarDataAttributes = /*#__PURE__*/ function(ScrollAreaScrollbarDataAttributes) {
    /**
   * Indicates the orientation of the scrollbar.
   * @type {'horizontal' | 'vertical'}
   */ ScrollAreaScrollbarDataAttributes["orientation"] = "data-orientation";
    /**
   * Present when the pointer is over the scroll area.
   */ ScrollAreaScrollbarDataAttributes["hovering"] = "data-hovering";
    /**
   * Present when the user scrolls inside the scroll area.
   */ ScrollAreaScrollbarDataAttributes["scrolling"] = "data-scrolling";
    /**
   * Present when the scroll area content is wider than the viewport.
   */ ScrollAreaScrollbarDataAttributes["hasOverflowX"] = "data-has-overflow-x";
    /**
   * Present when the scroll area content is taller than the viewport.
   */ ScrollAreaScrollbarDataAttributes["hasOverflowY"] = "data-has-overflow-y";
    /**
   * Present when there is overflow on the horizontal start side.
   */ ScrollAreaScrollbarDataAttributes["overflowXStart"] = "data-overflow-x-start";
    /**
   * Present when there is overflow on the horizontal end side.
   */ ScrollAreaScrollbarDataAttributes["overflowXEnd"] = "data-overflow-x-end";
    /**
   * Present when there is overflow on the vertical start side.
   */ ScrollAreaScrollbarDataAttributes["overflowYStart"] = "data-overflow-y-start";
    /**
   * Present when there is overflow on the vertical end side.
   */ ScrollAreaScrollbarDataAttributes["overflowYEnd"] = "data-overflow-y-end";
    return ScrollAreaScrollbarDataAttributes;
}({});
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootDataAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaRootDataAttributes",
    ()=>ScrollAreaRootDataAttributes
]);
let ScrollAreaRootDataAttributes = /*#__PURE__*/ function(ScrollAreaRootDataAttributes) {
    /**
   * Present when the user scrolls inside the scroll area.
   */ ScrollAreaRootDataAttributes["scrolling"] = "data-scrolling";
    /**
   * Present when the scroll area content is wider than the viewport.
   */ ScrollAreaRootDataAttributes["hasOverflowX"] = "data-has-overflow-x";
    /**
   * Present when the scroll area content is taller than the viewport.
   */ ScrollAreaRootDataAttributes["hasOverflowY"] = "data-has-overflow-y";
    /**
   * Present when there is overflow on the horizontal start side.
   */ ScrollAreaRootDataAttributes["overflowXStart"] = "data-overflow-x-start";
    /**
   * Present when there is overflow on the horizontal end side.
   */ ScrollAreaRootDataAttributes["overflowXEnd"] = "data-overflow-x-end";
    /**
   * Present when there is overflow on the vertical start side.
   */ ScrollAreaRootDataAttributes["overflowYStart"] = "data-overflow-y-start";
    /**
   * Present when there is overflow on the vertical end side.
   */ ScrollAreaRootDataAttributes["overflowYEnd"] = "data-overflow-y-end";
    return ScrollAreaRootDataAttributes;
}({});
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/stateAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrollAreaStateAttributesMapping",
    ()=>scrollAreaStateAttributesMapping
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootDataAttributes.js [app-ssr] (ecmascript)");
;
const scrollAreaStateAttributesMapping = {
    hasOverflowX: (value)=>value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootDataAttributes"].hasOverflowX]: ''
        } : null,
    hasOverflowY: (value)=>value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootDataAttributes"].hasOverflowY]: ''
        } : null,
    overflowXStart: (value)=>value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootDataAttributes"].overflowXStart]: ''
        } : null,
    overflowXEnd: (value)=>value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootDataAttributes"].overflowXEnd]: ''
        } : null,
    overflowYStart: (value)=>value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootDataAttributes"].overflowYStart]: ''
        } : null,
    overflowYEnd: (value)=>value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootDataAttributes"].overflowYEnd]: ''
        } : null,
    cornerHidden: ()=>null
};
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRoot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaRoot",
    ()=>ScrollAreaRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useTimeout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootCssVars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/utils/getOffset.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarDataAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/styles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useBaseUiId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$stateAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/stateAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$shadowDom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/shadowDom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$csp$2d$context$2f$CSPContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/csp-context/CSPContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
const DEFAULT_COORDS = {
    x: 0,
    y: 0
};
const DEFAULT_SIZE = {
    width: 0,
    height: 0
};
const DEFAULT_OVERFLOW_EDGES = {
    xStart: false,
    xEnd: false,
    yStart: false,
    yEnd: false
};
const DEFAULT_HIDDEN_STATE = {
    x: true,
    y: true,
    corner: true
};
const ScrollAreaRoot = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function ScrollAreaRoot(componentProps, forwardedRef) {
    const { render, className, overflowEdgeThreshold: overflowEdgeThresholdProp, style, ...elementProps } = componentProps;
    const overflowEdgeThreshold = normalizeOverflowEdgeThreshold(overflowEdgeThresholdProp);
    const rootId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseUiId"])();
    const scrollYTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimeout"])();
    const scrollXTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimeout"])();
    const { nonce, disableStyleElements } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$csp$2d$context$2f$CSPContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCSPContext"])();
    const [hovering, setHovering] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [scrollingX, setScrollingX] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [scrollingY, setScrollingY] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [touchModality, setTouchModality] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [hasMeasuredScrollbar, setHasMeasuredScrollbar] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [cornerSize, setCornerSize] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](DEFAULT_SIZE);
    const [thumbSize, setThumbSize] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](DEFAULT_SIZE);
    const [overflowEdges, setOverflowEdges] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](DEFAULT_OVERFLOW_EDGES);
    const [hiddenState, setHiddenState] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](DEFAULT_HIDDEN_STATE);
    const rootRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const viewportRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const scrollbarYRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const scrollbarXRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const thumbYRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const thumbXRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const cornerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const thumbDraggingRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const startYRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const startXRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const startScrollTopRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const startScrollLeftRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const currentOrientationRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]('vertical');
    const scrollPositionRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](DEFAULT_COORDS);
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((scrollPosition)=>{
        const offsetX = scrollPosition.x - scrollPositionRef.current.x;
        const offsetY = scrollPosition.y - scrollPositionRef.current.y;
        scrollPositionRef.current = scrollPosition;
        if (offsetY !== 0) {
            setScrollingY(true);
            scrollYTimeout.start(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_TIMEOUT"], ()=>{
                setScrollingY(false);
            });
        }
        if (offsetX !== 0) {
            setScrollingX(true);
            scrollXTimeout.start(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_TIMEOUT"], ()=>{
                setScrollingX(false);
            });
        }
    });
    const handlePointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((event)=>{
        if (event.button !== 0) {
            return;
        }
        thumbDraggingRef.current = true;
        startYRef.current = event.clientY;
        startXRef.current = event.clientX;
        currentOrientationRef.current = event.currentTarget.getAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarDataAttributes"].orientation);
        if (viewportRef.current) {
            startScrollTopRef.current = viewportRef.current.scrollTop;
            startScrollLeftRef.current = viewportRef.current.scrollLeft;
        }
        if (thumbYRef.current && currentOrientationRef.current === 'vertical') {
            thumbYRef.current.setPointerCapture(event.pointerId);
        }
        if (thumbXRef.current && currentOrientationRef.current === 'horizontal') {
            thumbXRef.current.setPointerCapture(event.pointerId);
        }
    });
    const handlePointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((event)=>{
        if (!thumbDraggingRef.current) {
            return;
        }
        const deltaY = event.clientY - startYRef.current;
        const deltaX = event.clientX - startXRef.current;
        if (viewportRef.current) {
            const scrollableContentHeight = viewportRef.current.scrollHeight;
            const viewportHeight = viewportRef.current.clientHeight;
            const scrollableContentWidth = viewportRef.current.scrollWidth;
            const viewportWidth = viewportRef.current.clientWidth;
            if (thumbYRef.current && scrollbarYRef.current && currentOrientationRef.current === 'vertical') {
                const scrollbarYOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(scrollbarYRef.current, 'padding', 'y');
                const thumbYOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(thumbYRef.current, 'margin', 'y');
                const thumbHeight = thumbYRef.current.offsetHeight;
                const maxThumbOffsetY = scrollbarYRef.current.offsetHeight - thumbHeight - scrollbarYOffset - thumbYOffset;
                const scrollRatioY = deltaY / maxThumbOffsetY;
                viewportRef.current.scrollTop = startScrollTopRef.current + scrollRatioY * (scrollableContentHeight - viewportHeight);
                event.preventDefault();
                setScrollingY(true);
                scrollYTimeout.start(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_TIMEOUT"], ()=>{
                    setScrollingY(false);
                });
            }
            if (thumbXRef.current && scrollbarXRef.current && currentOrientationRef.current === 'horizontal') {
                const scrollbarXOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(scrollbarXRef.current, 'padding', 'x');
                const thumbXOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(thumbXRef.current, 'margin', 'x');
                const thumbWidth = thumbXRef.current.offsetWidth;
                const maxThumbOffsetX = scrollbarXRef.current.offsetWidth - thumbWidth - scrollbarXOffset - thumbXOffset;
                const scrollRatioX = deltaX / maxThumbOffsetX;
                viewportRef.current.scrollLeft = startScrollLeftRef.current + scrollRatioX * (scrollableContentWidth - viewportWidth);
                event.preventDefault();
                setScrollingX(true);
                scrollXTimeout.start(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_TIMEOUT"], ()=>{
                    setScrollingX(false);
                });
            }
        }
    });
    const handlePointerUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((event)=>{
        thumbDraggingRef.current = false;
        if (thumbYRef.current && currentOrientationRef.current === 'vertical') {
            thumbYRef.current.releasePointerCapture(event.pointerId);
        }
        if (thumbXRef.current && currentOrientationRef.current === 'horizontal') {
            thumbXRef.current.releasePointerCapture(event.pointerId);
        }
    });
    function handleTouchModalityChange(event) {
        setTouchModality(event.pointerType === 'touch');
    }
    function handlePointerEnterOrMove(event) {
        handleTouchModalityChange(event);
        if (event.pointerType !== 'touch') {
            const isTargetRootChild = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$shadowDom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contains"])(rootRef.current, event.target);
            setHovering(isTargetRootChild);
        }
    }
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            scrolling: scrollingX || scrollingY,
            hasOverflowX: !hiddenState.x,
            hasOverflowY: !hiddenState.y,
            overflowXStart: overflowEdges.xStart,
            overflowXEnd: overflowEdges.xEnd,
            overflowYStart: overflowEdges.yStart,
            overflowYEnd: overflowEdges.yEnd,
            cornerHidden: hiddenState.corner
        }), [
        scrollingX,
        scrollingY,
        hiddenState.x,
        hiddenState.y,
        hiddenState.corner,
        overflowEdges
    ]);
    const props = {
        role: 'presentation',
        onPointerEnter: handlePointerEnterOrMove,
        onPointerMove: handlePointerEnterOrMove,
        onPointerDown: handleTouchModalityChange,
        onPointerLeave () {
            setHovering(false);
        },
        style: {
            position: 'relative',
            [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootCssVars"].scrollAreaCornerHeight]: `${cornerSize.height}px`,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootCssVars"].scrollAreaCornerWidth]: `${cornerSize.width}px`
        }
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: [
            forwardedRef,
            rootRef
        ],
        props: [
            props,
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$stateAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollAreaStateAttributesMapping"]
    });
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            handlePointerDown,
            handlePointerMove,
            handlePointerUp,
            handleScroll,
            cornerSize,
            setCornerSize,
            thumbSize,
            setThumbSize,
            hasMeasuredScrollbar,
            setHasMeasuredScrollbar,
            touchModality,
            cornerRef,
            scrollingX,
            setScrollingX,
            scrollingY,
            setScrollingY,
            hovering,
            setHovering,
            viewportRef,
            rootRef,
            scrollbarYRef,
            scrollbarXRef,
            thumbYRef,
            thumbXRef,
            rootId,
            hiddenState,
            setHiddenState,
            overflowEdges,
            setOverflowEdges,
            viewportState: state,
            overflowEdgeThreshold
        }), [
        handlePointerDown,
        handlePointerMove,
        handlePointerUp,
        handleScroll,
        cornerSize,
        thumbSize,
        hasMeasuredScrollbar,
        touchModality,
        scrollingX,
        setScrollingX,
        scrollingY,
        setScrollingY,
        hovering,
        setHovering,
        rootId,
        hiddenState,
        overflowEdges,
        state,
        overflowEdgeThreshold
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootContext"].Provider, {
        value: contextValue,
        children: [
            !disableStyleElements && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleDisableScrollbar"].getElement(nonce),
            element
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) ScrollAreaRoot.displayName = "ScrollAreaRoot";
function normalizeOverflowEdgeThreshold(threshold) {
    if (typeof threshold === 'number') {
        const value = Math.max(0, threshold);
        return {
            xStart: value,
            xEnd: value,
            yStart: value,
            yEnd: value
        };
    }
    return {
        xStart: Math.max(0, threshold?.xStart || 0),
        xEnd: Math.max(0, threshold?.xEnd || 0),
        yStart: Math.max(0, threshold?.yStart || 0),
        yEnd: Math.max(0, threshold?.yEnd || 0)
    };
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewportContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaViewportContext",
    ()=>ScrollAreaViewportContext,
    "useScrollAreaViewportContext",
    ()=>useScrollAreaViewportContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ScrollAreaViewportContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) ScrollAreaViewportContext.displayName = "ScrollAreaViewportContext";
function useScrollAreaViewportContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](ScrollAreaViewportContext);
    if (context === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: ScrollAreaViewportContext missing. ScrollAreaViewport parts must be placed within <ScrollArea.Viewport>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewportCssVars.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaViewportCssVars",
    ()=>ScrollAreaViewportCssVars
]);
let ScrollAreaViewportCssVars = /*#__PURE__*/ function(ScrollAreaViewportCssVars) {
    /**
   * The distance from the horizontal start edge in pixels.
   * @type {number}
   */ ScrollAreaViewportCssVars["scrollAreaOverflowXStart"] = "--scroll-area-overflow-x-start";
    /**
   * The distance from the horizontal end edge in pixels.
   * @type {number}
   */ ScrollAreaViewportCssVars["scrollAreaOverflowXEnd"] = "--scroll-area-overflow-x-end";
    /**
   * The distance from the vertical start edge in pixels.
   * @type {number}
   */ ScrollAreaViewportCssVars["scrollAreaOverflowYStart"] = "--scroll-area-overflow-y-start";
    /**
   * The distance from the vertical end edge in pixels.
   * @type {number}
   */ ScrollAreaViewportCssVars["scrollAreaOverflowYEnd"] = "--scroll-area-overflow-y-end";
    return ScrollAreaViewportCssVars;
}({});
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewport.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaViewport",
    ()=>ScrollAreaViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$detectBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/detectBrowser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useTimeout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewportContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$direction$2d$context$2f$DirectionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/direction-context/DirectionContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/utils/getOffset.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/clamp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/styles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$stateAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/stateAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewportCssVars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/scrollEdges.js [app-ssr] (ecmascript)");
// Module-level flag to ensure we only register the CSS properties once,
// regardless of how many Scroll Area components are mounted.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
let scrollAreaOverflowVarsRegistered = false;
/**
 * Removes inheritance of the scroll area overflow CSS variables, which
 * improves rendering performance in complex scroll areas with deep subtrees.
 * Instead, each child must manually opt-in to using these properties by
 * specifying `inherit`.
 * See https://motion.dev/blog/web-animation-performance-tier-list
 * under the "Improving CSS variable performance" section.
 */ function removeCSSVariableInheritance() {
    if (scrollAreaOverflowVarsRegistered || // When `inherits: false`, specifying `inherit` on child elements doesn't work
    // in Safari. To let CSS features work correctly, this optimization must be skipped.
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$detectBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWebKit"]) {
        return;
    }
    if (typeof CSS !== 'undefined' && 'registerProperty' in CSS) {
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportCssVars"].scrollAreaOverflowXStart,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportCssVars"].scrollAreaOverflowXEnd,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportCssVars"].scrollAreaOverflowYStart,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportCssVars"].scrollAreaOverflowYEnd
        ].forEach((name)=>{
            try {
                CSS.registerProperty({
                    name,
                    syntax: '<length>',
                    inherits: false,
                    initialValue: '0px'
                });
            } catch  {
            /* ignore already-registered */ }
        });
    }
    scrollAreaOverflowVarsRegistered = true;
}
const ScrollAreaViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function ScrollAreaViewport(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const { viewportRef, scrollbarYRef, scrollbarXRef, thumbYRef, thumbXRef, cornerRef, cornerSize, setCornerSize, setThumbSize, rootId, setHiddenState, hiddenState, setHasMeasuredScrollbar, handleScroll, setHovering, setOverflowEdges, overflowEdges, overflowEdgeThreshold, scrollingX, scrollingY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAreaRootContext"])();
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$direction$2d$context$2f$DirectionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])();
    const programmaticScrollRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](true);
    const lastMeasuredViewportMetricsRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([
        NaN,
        NaN,
        NaN,
        NaN
    ]);
    const scrollEndTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimeout"])();
    const waitForAnimationsTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimeout"])();
    const computeThumbPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])(()=>{
        const viewportEl = viewportRef.current;
        const scrollbarYEl = scrollbarYRef.current;
        const scrollbarXEl = scrollbarXRef.current;
        const thumbYEl = thumbYRef.current;
        const thumbXEl = thumbXRef.current;
        const cornerEl = cornerRef.current;
        if (!viewportEl) {
            return;
        }
        const scrollableContentHeight = viewportEl.scrollHeight;
        const scrollableContentWidth = viewportEl.scrollWidth;
        const viewportHeight = viewportEl.clientHeight;
        const viewportWidth = viewportEl.clientWidth;
        const scrollTop = viewportEl.scrollTop;
        const scrollLeft = viewportEl.scrollLeft;
        const lastMeasuredViewportMetrics = lastMeasuredViewportMetricsRef.current;
        const isFirstMeasurement = Number.isNaN(lastMeasuredViewportMetrics[0]);
        lastMeasuredViewportMetrics[0] = viewportHeight;
        lastMeasuredViewportMetrics[1] = scrollableContentHeight;
        lastMeasuredViewportMetrics[2] = viewportWidth;
        lastMeasuredViewportMetrics[3] = scrollableContentWidth;
        if (isFirstMeasurement) {
            setHasMeasuredScrollbar(true);
        }
        if (scrollableContentHeight === 0 || scrollableContentWidth === 0) {
            return;
        }
        const nextHiddenState = getHiddenState(viewportEl);
        const scrollbarYHidden = nextHiddenState.y;
        const scrollbarXHidden = nextHiddenState.x;
        const ratioX = viewportWidth / scrollableContentWidth;
        const ratioY = viewportHeight / scrollableContentHeight;
        const maxScrollLeft = Math.max(0, scrollableContentWidth - viewportWidth);
        const maxScrollTop = Math.max(0, scrollableContentHeight - viewportHeight);
        let scrollLeftFromStart = 0;
        let scrollLeftFromEnd = 0;
        if (!scrollbarXHidden) {
            let rawScrollLeftFromStart = 0;
            if (direction === 'rtl') {
                rawScrollLeftFromStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(-scrollLeft, 0, maxScrollLeft);
            } else {
                rawScrollLeftFromStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(scrollLeft, 0, maxScrollLeft);
            }
            scrollLeftFromStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeScrollOffset"])(rawScrollLeftFromStart, maxScrollLeft);
            scrollLeftFromEnd = maxScrollLeft - scrollLeftFromStart;
        }
        const rawScrollTopFromStart = !scrollbarYHidden ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(scrollTop, 0, maxScrollTop) : 0;
        const scrollTopFromStart = !scrollbarYHidden ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeScrollOffset"])(rawScrollTopFromStart, maxScrollTop) : 0;
        const scrollTopFromEnd = !scrollbarYHidden ? maxScrollTop - scrollTopFromStart : 0;
        const nextWidth = scrollbarXHidden ? 0 : viewportWidth;
        const nextHeight = scrollbarYHidden ? 0 : viewportHeight;
        let nextCornerWidth = 0;
        let nextCornerHeight = 0;
        if (!scrollbarXHidden && !scrollbarYHidden) {
            nextCornerWidth = scrollbarYEl?.offsetWidth || 0;
            nextCornerHeight = scrollbarXEl?.offsetHeight || 0;
        }
        // Only subtract corner size from scrollbar dimensions if the corner hasn't been sized yet.
        // Once sized, the layout will already account for it.
        const cornerNotYetSized = cornerSize.width === 0 && cornerSize.height === 0;
        const cornerWidthOffset = cornerNotYetSized ? nextCornerWidth : 0;
        const cornerHeightOffset = cornerNotYetSized ? nextCornerHeight : 0;
        const scrollbarXOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(scrollbarXEl, 'padding', 'x');
        const scrollbarYOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(scrollbarYEl, 'padding', 'y');
        const thumbXOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(thumbXEl, 'margin', 'x');
        const thumbYOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(thumbYEl, 'margin', 'y');
        const idealNextWidth = nextWidth - scrollbarXOffset - thumbXOffset;
        const idealNextHeight = nextHeight - scrollbarYOffset - thumbYOffset;
        const maxNextWidth = scrollbarXEl ? Math.min(scrollbarXEl.offsetWidth - cornerWidthOffset, idealNextWidth) : idealNextWidth;
        const maxNextHeight = scrollbarYEl ? Math.min(scrollbarYEl.offsetHeight - cornerHeightOffset, idealNextHeight) : idealNextHeight;
        const clampedNextWidth = Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_THUMB_SIZE"], maxNextWidth * ratioX);
        const clampedNextHeight = Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_THUMB_SIZE"], maxNextHeight * ratioY);
        setThumbSize((prevSize)=>{
            if (prevSize.height === clampedNextHeight && prevSize.width === clampedNextWidth) {
                return prevSize;
            }
            return {
                width: clampedNextWidth,
                height: clampedNextHeight
            };
        });
        // Handle Y (vertical) scroll
        if (scrollbarYEl && thumbYEl) {
            const maxThumbOffsetY = scrollbarYEl.offsetHeight - clampedNextHeight - scrollbarYOffset - thumbYOffset;
            const scrollRangeY = scrollableContentHeight - viewportHeight;
            const scrollRatioY = scrollRangeY === 0 ? 0 : scrollTop / scrollRangeY;
            // In Safari, don't allow it to go negative or too far as `scrollTop` considers the rubber
            // band effect.
            const thumbOffsetY = Math.min(maxThumbOffsetY, Math.max(0, scrollRatioY * maxThumbOffsetY));
            thumbYEl.style.transform = `translate3d(0,${thumbOffsetY}px,0)`;
        }
        // Handle X (horizontal) scroll
        if (scrollbarXEl && thumbXEl) {
            const maxThumbOffsetX = scrollbarXEl.offsetWidth - clampedNextWidth - scrollbarXOffset - thumbXOffset;
            const scrollRangeX = scrollableContentWidth - viewportWidth;
            const scrollRatioX = scrollRangeX === 0 ? 0 : scrollLeft / scrollRangeX;
            // In Safari, don't allow it to go negative or too far as `scrollLeft` considers the rubber
            // band effect.
            const thumbOffsetX = direction === 'rtl' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(scrollRatioX * maxThumbOffsetX, -maxThumbOffsetX, 0) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(scrollRatioX * maxThumbOffsetX, 0, maxThumbOffsetX);
            thumbXEl.style.transform = `translate3d(${thumbOffsetX}px,0,0)`;
        }
        const overflowMetricsPx = [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportCssVars"].scrollAreaOverflowXStart,
                scrollLeftFromStart
            ],
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportCssVars"].scrollAreaOverflowXEnd,
                scrollLeftFromEnd
            ],
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportCssVars"].scrollAreaOverflowYStart,
                scrollTopFromStart
            ],
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportCssVars"].scrollAreaOverflowYEnd,
                scrollTopFromEnd
            ]
        ];
        for (const [cssVar, value] of overflowMetricsPx){
            viewportEl.style.setProperty(cssVar, `${value}px`);
        }
        if (cornerEl) {
            if (scrollbarXHidden || scrollbarYHidden) {
                setCornerSize({
                    width: 0,
                    height: 0
                });
            } else if (!scrollbarXHidden && !scrollbarYHidden) {
                setCornerSize({
                    width: nextCornerWidth,
                    height: nextCornerHeight
                });
            }
        }
        setHiddenState((prevState)=>mergeHiddenState(prevState, nextHiddenState));
        const nextOverflowEdges = {
            xStart: !scrollbarXHidden && scrollLeftFromStart > overflowEdgeThreshold.xStart,
            xEnd: !scrollbarXHidden && scrollLeftFromEnd > overflowEdgeThreshold.xEnd,
            yStart: !scrollbarYHidden && scrollTopFromStart > overflowEdgeThreshold.yStart,
            yEnd: !scrollbarYHidden && scrollTopFromEnd > overflowEdgeThreshold.yEnd
        };
        setOverflowEdges((prev)=>{
            if (prev.xStart === nextOverflowEdges.xStart && prev.xEnd === nextOverflowEdges.xEnd && prev.yStart === nextOverflowEdges.yStart && prev.yEnd === nextOverflowEdges.yEnd) {
                return prev;
            }
            return nextOverflowEdges;
        });
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (!viewportRef.current) {
            return;
        }
        removeCSSVariableInheritance();
    }, [
        viewportRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        // Wait for scrollbar and thumb refs after hidden-state toggles, and refresh math on direction flips.
        queueMicrotask(computeThumbPosition);
    }, [
        computeThumbPosition,
        hiddenState,
        direction
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        // `onMouseEnter` doesn't fire upon load, so we need to check if the viewport is already
        // being hovered.
        if (viewportRef.current?.matches(':hover')) {
            setHovering(true);
        }
    }, [
        viewportRef,
        setHovering
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const viewport = viewportRef.current;
        if (typeof ResizeObserver === 'undefined' || !viewport) {
            return undefined;
        }
        let hasInitialized = false;
        const resizeObserver = new ResizeObserver(()=>{
            // Avoid duplicate mount-time recompute when observer data matches what the mount
            // scheduling pass already measured. If dimensions changed before the first observer
            // delivery, keep the recompute so overflow transitions stay in sync.
            if (!hasInitialized) {
                hasInitialized = true;
                const lastMeasuredViewportMetrics = lastMeasuredViewportMetricsRef.current;
                if (lastMeasuredViewportMetrics[0] === viewport.clientHeight && lastMeasuredViewportMetrics[1] === viewport.scrollHeight && lastMeasuredViewportMetrics[2] === viewport.clientWidth && lastMeasuredViewportMetrics[3] === viewport.scrollWidth) {
                    return;
                }
            }
            computeThumbPosition();
        });
        resizeObserver.observe(viewport);
        // Wait for subtree animations to finish, then recompute thumb geometry that
        // may have been affected by transform-based animations.
        waitForAnimationsTimeout.start(0, ()=>{
            const animations = viewport.getAnimations({
                subtree: true
            });
            if (animations.length === 0) {
                return;
            }
            Promise.allSettled(animations.map((animation)=>animation.finished)).then(computeThumbPosition).catch(()=>{});
        });
        return ()=>{
            resizeObserver.disconnect();
            waitForAnimationsTimeout.clear();
        };
    }, [
        computeThumbPosition,
        viewportRef,
        waitForAnimationsTimeout
    ]);
    function handleUserInteraction() {
        programmaticScrollRef.current = false;
    }
    const props = {
        role: 'presentation',
        ...rootId && {
            'data-id': `${rootId}-viewport`
        },
        // https://accessibilityinsights.io/info-examples/web/scrollable-region-focusable/
        // Keep non-scrollable viewports out of tab order.
        tabIndex: hiddenState.x && hiddenState.y ? -1 : 0,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleDisableScrollbar"].className,
        style: {
            overflow: 'scroll'
        },
        onScroll () {
            if (!viewportRef.current) {
                return;
            }
            computeThumbPosition();
            if (!programmaticScrollRef.current) {
                handleScroll({
                    x: viewportRef.current.scrollLeft,
                    y: viewportRef.current.scrollTop
                });
            }
            // Debounce the restoration of the programmatic flag so that it only
            // flips back to `true` once scrolling has come to a rest. This ensures
            // that momentum scrolling (where no further user-interaction events fire)
            // is still treated as user-driven.
            // 100 ms without scroll events ≈ scroll end
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollend_event
            scrollEndTimeout.start(100, ()=>{
                programmaticScrollRef.current = true;
            });
        },
        onWheel: handleUserInteraction,
        onTouchMove: handleUserInteraction,
        onPointerMove: handleUserInteraction,
        onPointerEnter: handleUserInteraction,
        onKeyDown: handleUserInteraction
    };
    const viewportState = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            scrolling: scrollingX || scrollingY,
            hasOverflowX: !hiddenState.x,
            hasOverflowY: !hiddenState.y,
            overflowXStart: overflowEdges.xStart,
            overflowXEnd: overflowEdges.xEnd,
            overflowYStart: overflowEdges.yStart,
            overflowYEnd: overflowEdges.yEnd,
            cornerHidden: hiddenState.corner
        }), [
        scrollingX,
        scrollingY,
        hiddenState.x,
        hiddenState.y,
        hiddenState.corner,
        overflowEdges
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            viewportRef
        ],
        state: viewportState,
        props: [
            props,
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$stateAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollAreaStateAttributesMapping"]
    });
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            computeThumbPosition
        }), [
        computeThumbPosition
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportContext"].Provider, {
        value: contextValue,
        children: element
    });
});
if ("TURBOPACK compile-time truthy", 1) ScrollAreaViewport.displayName = "ScrollAreaViewport";
function getHiddenState(viewport) {
    const y = viewport.clientHeight >= viewport.scrollHeight;
    const x = viewport.clientWidth >= viewport.scrollWidth;
    return {
        y,
        x,
        corner: y || x
    };
}
function mergeHiddenState(prevState, nextState) {
    if (prevState.y === nextState.y && prevState.x === nextState.x && prevState.corner === nextState.corner) {
        return prevState;
    }
    return nextState;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaScrollbarContext",
    ()=>ScrollAreaScrollbarContext,
    "useScrollAreaScrollbarContext",
    ()=>useScrollAreaScrollbarContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ScrollAreaScrollbarContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) ScrollAreaScrollbarContext.displayName = "ScrollAreaScrollbarContext";
function useScrollAreaScrollbarContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](ScrollAreaScrollbarContext);
    if (context === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: ScrollAreaScrollbarContext is missing. ScrollAreaScrollbar parts must be placed within <ScrollArea.Scrollbar>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarCssVars.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaScrollbarCssVars",
    ()=>ScrollAreaScrollbarCssVars
]);
let ScrollAreaScrollbarCssVars = /*#__PURE__*/ function(ScrollAreaScrollbarCssVars) {
    /**
   * The scroll area thumb's height.
   * @type {number}
   */ ScrollAreaScrollbarCssVars["scrollAreaThumbHeight"] = "--scroll-area-thumb-height";
    /**
   * The scroll area thumb's width.
   * @type {number}
   */ ScrollAreaScrollbarCssVars["scrollAreaThumbWidth"] = "--scroll-area-thumb-width";
    return ScrollAreaScrollbarCssVars;
}({});
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaScrollbar",
    ()=>ScrollAreaScrollbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$addEventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/addEventListener.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$shadowDom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/shadowDom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/utils/getOffset.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootCssVars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarCssVars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$direction$2d$context$2f$DirectionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/direction-context/DirectionContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$stateAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/stateAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
const ScrollAreaScrollbar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function ScrollAreaScrollbar(componentProps, forwardedRef) {
    const { render, className, orientation = 'vertical', keepMounted = false, style, ...elementProps } = componentProps;
    const { hovering, scrollingX, scrollingY, hiddenState, overflowEdges, scrollbarYRef, scrollbarXRef, viewportRef, thumbYRef, thumbXRef, handlePointerDown, handlePointerUp, rootId, thumbSize, hasMeasuredScrollbar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAreaRootContext"])();
    const state = {
        hovering,
        scrolling: {
            horizontal: scrollingX,
            vertical: scrollingY
        }[orientation],
        orientation,
        hasOverflowX: !hiddenState.x,
        hasOverflowY: !hiddenState.y,
        overflowXStart: overflowEdges.xStart,
        overflowXEnd: overflowEdges.xEnd,
        overflowYStart: overflowEdges.yStart,
        overflowYEnd: overflowEdges.yEnd,
        cornerHidden: hiddenState.corner
    };
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$direction$2d$context$2f$DirectionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])();
    const hideTrackUntilMeasured = !hasMeasuredScrollbar && !keepMounted;
    const isHidden = orientation === 'vertical' ? hiddenState.y : hiddenState.x;
    const shouldRender = keepMounted || !isHidden;
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!shouldRender) {
            return undefined;
        }
        const viewportEl = viewportRef.current;
        const scrollbarEl = orientation === 'vertical' ? scrollbarYRef.current : scrollbarXRef.current;
        if (!scrollbarEl) {
            return undefined;
        }
        function handleWheel(event) {
            if (!viewportEl || !scrollbarEl || event.ctrlKey) {
                return;
            }
            event.preventDefault();
            const horizontal = orientation === 'horizontal';
            const scrollProperty = horizontal ? 'scrollLeft' : 'scrollTop';
            const delta = horizontal ? event.deltaX : event.deltaY;
            const maxScroll = horizontal ? viewportEl.scrollWidth - viewportEl.clientWidth : viewportEl.scrollHeight - viewportEl.clientHeight;
            // RTL horizontal scrolling uses a negative `scrollLeft` range, from 0 to `-maxScroll`.
            const minScroll = horizontal && direction === 'rtl' ? -maxScroll : 0;
            const maxScrollValue = horizontal && direction === 'rtl' ? 0 : maxScroll;
            const scrollValue = viewportEl[scrollProperty];
            if (scrollValue <= minScroll && delta < 0 || scrollValue >= maxScrollValue && delta > 0) {
                return;
            }
            viewportEl[scrollProperty] = Math.min(maxScrollValue, Math.max(minScroll, scrollValue + delta));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$addEventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addEventListener"])(scrollbarEl, 'wheel', handleWheel, {
            passive: false
        });
    }, [
        direction,
        orientation,
        scrollbarXRef,
        scrollbarYRef,
        shouldRender,
        viewportRef
    ]);
    const props = {
        ...rootId && {
            'data-id': `${rootId}-scrollbar`
        },
        onPointerDown (event) {
            if (event.button !== 0) {
                return;
            }
            const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$shadowDom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTarget"])(event.nativeEvent);
            const thumb = orientation === 'vertical' ? thumbYRef.current : thumbXRef.current;
            // Ignore clicks on thumb, including cases where React retargets the
            // synthetic event to the track host across a shadow boundary.
            if (thumb && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$shadowDom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contains"])(thumb, target)) {
                return;
            }
            if (!viewportRef.current) {
                return;
            }
            // Handle Y-axis (vertical) scroll
            if (thumbYRef.current && scrollbarYRef.current && orientation === 'vertical') {
                const thumbYOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(thumbYRef.current, 'margin', 'y');
                const scrollbarYOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(scrollbarYRef.current, 'padding', 'y');
                const thumbHeight = thumbYRef.current.offsetHeight;
                const trackRectY = scrollbarYRef.current.getBoundingClientRect();
                const clickY = event.clientY - trackRectY.top - thumbHeight / 2 - scrollbarYOffset + thumbYOffset / 2;
                const scrollableContentHeight = viewportRef.current.scrollHeight;
                const viewportHeight = viewportRef.current.clientHeight;
                const maxThumbOffsetY = scrollbarYRef.current.offsetHeight - thumbHeight - scrollbarYOffset - thumbYOffset;
                const scrollRatioY = clickY / maxThumbOffsetY;
                const newScrollTop = scrollRatioY * (scrollableContentHeight - viewportHeight);
                viewportRef.current.scrollTop = newScrollTop;
            }
            if (thumbXRef.current && scrollbarXRef.current && orientation === 'horizontal') {
                const thumbXOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(thumbXRef.current, 'margin', 'x');
                const scrollbarXOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(scrollbarXRef.current, 'padding', 'x');
                const thumbWidth = thumbXRef.current.offsetWidth;
                const trackRectX = scrollbarXRef.current.getBoundingClientRect();
                const clickX = event.clientX - trackRectX.left - thumbWidth / 2 - scrollbarXOffset + thumbXOffset / 2;
                const scrollableContentWidth = viewportRef.current.scrollWidth;
                const viewportWidth = viewportRef.current.clientWidth;
                const maxThumbOffsetX = scrollbarXRef.current.offsetWidth - thumbWidth - scrollbarXOffset - thumbXOffset;
                const scrollRatioX = clickX / maxThumbOffsetX;
                let newScrollLeft;
                if (direction === 'rtl') {
                    // In RTL, invert the scroll direction
                    newScrollLeft = (1 - scrollRatioX) * (scrollableContentWidth - viewportWidth);
                    // Adjust for browsers that use negative scrollLeft in RTL
                    if (viewportRef.current.scrollLeft <= 0) {
                        newScrollLeft = -newScrollLeft;
                    }
                } else {
                    newScrollLeft = scrollRatioX * (scrollableContentWidth - viewportWidth);
                }
                viewportRef.current.scrollLeft = newScrollLeft;
            }
            handlePointerDown(event);
        },
        onPointerUp: handlePointerUp,
        style: {
            position: 'absolute',
            touchAction: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            visibility: hideTrackUntilMeasured ? 'hidden' : undefined,
            ...orientation === 'vertical' && {
                top: 0,
                bottom: `var(${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootCssVars"].scrollAreaCornerHeight})`,
                insetInlineEnd: 0,
                [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarCssVars"].scrollAreaThumbHeight]: `${thumbSize.height}px`
            },
            ...orientation === 'horizontal' && {
                insetInlineStart: 0,
                insetInlineEnd: `var(${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootCssVars"].scrollAreaCornerWidth})`,
                bottom: 0,
                [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarCssVars"].scrollAreaThumbWidth]: `${thumbSize.width}px`
            }
        }
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            orientation === 'vertical' ? scrollbarYRef : scrollbarXRef
        ],
        state,
        props: [
            props,
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$stateAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollAreaStateAttributesMapping"]
    });
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            orientation
        }), [
        orientation
    ]);
    if (!shouldRender) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarContext"].Provider, {
        value: contextValue,
        children: element
    });
});
if ("TURBOPACK compile-time truthy", 1) ScrollAreaScrollbar.displayName = "ScrollAreaScrollbar";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/content/ScrollAreaContent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaContent",
    ()=>ScrollAreaContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewportContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$stateAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/stateAttributes.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const ScrollAreaContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function ScrollAreaContent(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const { computeThumbPosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAreaViewportContext"])();
    const { viewportState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAreaRootContext"])();
    const contentWrapperRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (typeof ResizeObserver === 'undefined') {
            return undefined;
        }
        let hasInitialized = false;
        const resizeObserver = new ResizeObserver(()=>{
            // ResizeObserver fires once upon observing, so we skip the initial call
            // to avoid double-calculating the thumb position on mount.
            if (!hasInitialized) {
                hasInitialized = true;
                return;
            }
            computeThumbPosition();
        });
        if (contentWrapperRef.current) {
            resizeObserver.observe(contentWrapperRef.current);
        }
        return ()=>{
            resizeObserver.disconnect();
        };
    }, [
        computeThumbPosition
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            contentWrapperRef
        ],
        state: viewportState,
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$stateAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollAreaStateAttributesMapping"],
        props: [
            {
                role: 'presentation',
                style: {
                    minWidth: 'fit-content'
                }
            },
            elementProps
        ]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) ScrollAreaContent.displayName = "ScrollAreaContent";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/thumb/ScrollAreaThumb.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaThumb",
    ()=>ScrollAreaThumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarCssVars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const ScrollAreaThumb = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function ScrollAreaThumb(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const { thumbYRef, thumbXRef, handlePointerDown, handlePointerMove, handlePointerUp, setScrollingX, setScrollingY, hasMeasuredScrollbar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAreaRootContext"])();
    const { orientation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAreaScrollbarContext"])();
    const state = {
        orientation
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            orientation === 'vertical' ? thumbYRef : thumbXRef
        ],
        state,
        props: [
            {
                onPointerDown: handlePointerDown,
                onPointerMove: handlePointerMove,
                onPointerUp (event) {
                    if (orientation === 'vertical') {
                        setScrollingY(false);
                    }
                    if (orientation === 'horizontal') {
                        setScrollingX(false);
                    }
                    handlePointerUp(event);
                },
                style: {
                    visibility: hasMeasuredScrollbar ? undefined : 'hidden',
                    ...orientation === 'vertical' && {
                        height: `var(${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarCssVars"].scrollAreaThumbHeight})`
                    },
                    ...orientation === 'horizontal' && {
                        width: `var(${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarCssVars"].scrollAreaThumbWidth})`
                    }
                }
            },
            elementProps
        ]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) ScrollAreaThumb.displayName = "ScrollAreaThumb";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/corner/ScrollAreaCorner.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaCorner",
    ()=>ScrollAreaCorner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const ScrollAreaCorner = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function ScrollAreaCorner(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const { cornerRef, cornerSize, hiddenState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAreaRootContext"])();
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            cornerRef
        ],
        props: [
            {
                style: {
                    position: 'absolute',
                    bottom: 0,
                    insetInlineEnd: 0,
                    width: cornerSize.width,
                    height: cornerSize.height
                }
            },
            elementProps
        ]
    });
    if (hiddenState.corner) {
        return null;
    }
    return element;
});
if ("TURBOPACK compile-time truthy", 1) ScrollAreaCorner.displayName = "ScrollAreaCorner";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/index.parts.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Content",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$content$2f$ScrollAreaContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaContent"],
    "Corner",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$corner$2f$ScrollAreaCorner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaCorner"],
    "Root",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRoot"],
    "Scrollbar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"],
    "Thumb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$thumb$2f$ScrollAreaThumb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaThumb"],
    "Viewport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewport"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/index.parts.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRoot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$content$2f$ScrollAreaContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/content/ScrollAreaContent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$thumb$2f$ScrollAreaThumb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/thumb/ScrollAreaThumb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$corner$2f$ScrollAreaCorner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/corner/ScrollAreaCorner.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/index.parts.js [app-ssr] (ecmascript) <export * as ScrollArea>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/scroll-area/index.parts.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=6e527_%40base-ui_react_esm_41593f9b._.js.map