module.exports = [
"[project]/Desktop/Hackathon/website/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryObserver",
    ()=>QueryObserver
]);
// src/queryObserver.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$environmentManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/query-core/build/modern/environmentManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/query-core/build/modern/query.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/query-core/build/modern/thenable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var QueryObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(client, options){
        super();
        this.options = options;
        this.#client = client;
        this.#selectError = null;
        this.#currentThenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pendingThenable"])();
        this.bindMethods();
        this.setOptions(options);
    }
    #client;
    #currentQuery = void 0;
    #currentQueryInitialState = void 0;
    #currentResult = void 0;
    #currentResultState;
    #currentResultOptions;
    #currentThenable;
    #selectError;
    #selectFn;
    #selectResult;
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    #lastQueryWithDefinedData;
    #staleTimeoutId;
    #refetchIntervalId;
    #currentRefetchInterval;
    #trackedProps = /* @__PURE__ */ new Set();
    bindMethods() {
        this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
        if (this.listeners.size === 1) {
            this.#currentQuery.addObserver(this);
            if (shouldFetchOnMount(this.#currentQuery, this.options)) {
                this.#executeFetch();
            } else {
                this.updateResult();
            }
            this.#updateTimers();
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.destroy();
        }
    }
    shouldFetchOnReconnect() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
        this.listeners = /* @__PURE__ */ new Set();
        this.#clearStaleTimeout();
        this.#clearRefetchInterval();
        this.#currentQuery.removeObserver(this);
    }
    setOptions(options) {
        const prevOptions = this.options;
        const prevQuery = this.#currentQuery;
        this.options = this.#client.defaultQueryOptions(options);
        if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveQueryBoolean"])(this.options.enabled, this.#currentQuery) !== "boolean") {
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        }
        this.#updateQuery();
        this.#currentQuery.setOptions(this.options);
        if (prevOptions._defaulted && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) {
            this.#client.getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: this.#currentQuery,
                observer: this
            });
        }
        const mounted = this.hasListeners();
        if (mounted && shouldFetchOptionally(this.#currentQuery, prevQuery, this.options, prevOptions)) {
            this.#executeFetch();
        }
        this.updateResult();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveQueryBoolean"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveQueryBoolean"])(prevOptions.enabled, this.#currentQuery) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(prevOptions.staleTime, this.#currentQuery))) {
            this.#updateStaleTimeout();
        }
        const nextRefetchInterval = this.#computeRefetchInterval();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveQueryBoolean"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveQueryBoolean"])(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
            this.#updateRefetchInterval(nextRefetchInterval);
        }
    }
    getOptimisticResult(options) {
        const query = this.#client.getQueryCache().build(this.#client, options);
        const result = this.createResult(query, options);
        if (shouldAssignObserverCurrentProperties(this, result)) {
            this.#currentResult = result;
            this.#currentResultOptions = this.options;
            this.#currentResultState = this.#currentQuery.state;
        }
        return result;
    }
    getCurrentResult() {
        return this.#currentResult;
    }
    trackResult(result, onPropTracked) {
        return new Proxy(result, {
            get: (target, key)=>{
                this.trackProp(key);
                onPropTracked?.(key);
                if (key === "promise") {
                    this.trackProp("data");
                    if (!this.options.experimental_prefetchInRender && this.#currentThenable.status === "pending") {
                        this.#currentThenable.reject(new Error("experimental_prefetchInRender feature flag is not enabled"));
                    }
                }
                return Reflect.get(target, key);
            }
        });
    }
    trackProp(key) {
        this.#trackedProps.add(key);
    }
    getCurrentQuery() {
        return this.#currentQuery;
    }
    refetch({ ...options } = {}) {
        return this.fetch({
            ...options
        });
    }
    fetchOptimistic(options) {
        const defaultedOptions = this.#client.defaultQueryOptions(options);
        const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
        return query.fetch().then(()=>this.createResult(query, defaultedOptions));
    }
    fetch(fetchOptions) {
        return this.#executeFetch({
            ...fetchOptions,
            cancelRefetch: fetchOptions.cancelRefetch ?? true
        }).then(()=>{
            this.updateResult();
            return this.#currentResult;
        });
    }
    #executeFetch(fetchOptions) {
        this.#updateQuery();
        let promise = this.#currentQuery.fetch(this.options, fetchOptions);
        if (!fetchOptions?.throwOnError) {
            promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
        }
        return promise;
    }
    #updateStaleTimeout() {
        this.#clearStaleTimeout();
        const staleTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$environmentManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["environmentManager"].isServer() || this.#currentResult.isStale || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidTimeout"])(staleTime)) {
            return;
        }
        const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.#currentResult.dataUpdatedAt, staleTime);
        const timeout = time + 1;
        this.#staleTimeoutId = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(()=>{
            if (!this.#currentResult.isStale) {
                this.updateResult();
            }
        }, timeout);
    }
    #computeRefetchInterval() {
        return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
    }
    #updateRefetchInterval(nextInterval) {
        this.#clearRefetchInterval();
        this.#currentRefetchInterval = nextInterval;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$environmentManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["environmentManager"].isServer() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveQueryBoolean"])(this.options.enabled, this.#currentQuery) === false || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
            return;
        }
        this.#refetchIntervalId = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].setInterval(()=>{
            if (this.options.refetchIntervalInBackground || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusManager"].isFocused()) {
                this.#executeFetch();
            }
        }, this.#currentRefetchInterval);
    }
    #updateTimers() {
        this.#updateStaleTimeout();
        this.#updateRefetchInterval(this.#computeRefetchInterval());
    }
    #clearStaleTimeout() {
        if (this.#staleTimeoutId !== void 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].clearTimeout(this.#staleTimeoutId);
            this.#staleTimeoutId = void 0;
        }
    }
    #clearRefetchInterval() {
        if (this.#refetchIntervalId !== void 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].clearInterval(this.#refetchIntervalId);
            this.#refetchIntervalId = void 0;
        }
    }
    createResult(query, options) {
        const prevQuery = this.#currentQuery;
        const prevOptions = this.options;
        const prevResult = this.#currentResult;
        const prevResultState = this.#currentResultState;
        const prevResultOptions = this.#currentResultOptions;
        const queryChange = query !== prevQuery;
        const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
        const { state } = query;
        let newState = {
            ...state
        };
        let isPlaceholderData = false;
        let data;
        if (options._optimisticResults) {
            const mounted = this.hasListeners();
            const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
            const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
            if (fetchOnMount || fetchOptionally) {
                newState = {
                    ...newState,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchState"])(state.data, query.options)
                };
            }
            if (options._optimisticResults === "isRestoring") {
                newState.fetchStatus = "idle";
            }
        }
        let { error, errorUpdatedAt, status } = newState;
        data = newState.data;
        let skipSelect = false;
        if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
            let placeholderData;
            if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
                placeholderData = prevResult.data;
                skipSelect = true;
            } else {
                placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(this.#lastQueryWithDefinedData?.state.data, this.#lastQueryWithDefinedData) : options.placeholderData;
            }
            if (placeholderData !== void 0) {
                status = "success";
                data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, placeholderData, options);
                isPlaceholderData = true;
            }
        }
        if (options.select && data !== void 0 && !skipSelect) {
            if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) {
                data = this.#selectResult;
            } else {
                try {
                    this.#selectFn = options.select;
                    data = options.select(data);
                    data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, data, options);
                    this.#selectResult = data;
                    this.#selectError = null;
                } catch (selectError) {
                    this.#selectError = selectError;
                }
            }
        }
        if (this.#selectError) {
            error = this.#selectError;
            data = this.#selectResult;
            errorUpdatedAt = Date.now();
            status = "error";
        }
        const isFetching = newState.fetchStatus === "fetching";
        const isPending = status === "pending";
        const isError = status === "error";
        const isLoading = isPending && isFetching;
        const hasData = data !== void 0;
        const result = {
            status,
            fetchStatus: newState.fetchStatus,
            isPending,
            isSuccess: status === "success",
            isError,
            isInitialLoading: isLoading,
            isLoading,
            data,
            dataUpdatedAt: newState.dataUpdatedAt,
            error,
            errorUpdatedAt,
            failureCount: newState.fetchFailureCount,
            failureReason: newState.fetchFailureReason,
            errorUpdateCount: newState.errorUpdateCount,
            isFetched: query.isFetched(),
            isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
            isFetching,
            isRefetching: isFetching && !isPending,
            isLoadingError: isError && !hasData,
            isPaused: newState.fetchStatus === "paused",
            isPlaceholderData,
            isRefetchError: isError && hasData,
            isStale: isStale(query, options),
            refetch: this.refetch,
            promise: this.#currentThenable,
            isEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveQueryBoolean"])(options.enabled, query) !== false
        };
        const nextResult = result;
        if (this.options.experimental_prefetchInRender) {
            const hasResultData = nextResult.data !== void 0;
            const isErrorWithoutData = nextResult.status === "error" && !hasResultData;
            const finalizeThenableIfPossible = (thenable)=>{
                if (isErrorWithoutData) {
                    thenable.reject(nextResult.error);
                } else if (hasResultData) {
                    thenable.resolve(nextResult.data);
                }
            };
            const recreateThenable = ()=>{
                const pending = this.#currentThenable = nextResult.promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pendingThenable"])();
                finalizeThenableIfPossible(pending);
            };
            const prevThenable = this.#currentThenable;
            switch(prevThenable.status){
                case "pending":
                    if (query.queryHash === prevQuery.queryHash) {
                        finalizeThenableIfPossible(prevThenable);
                    }
                    break;
                case "fulfilled":
                    if (isErrorWithoutData || nextResult.data !== prevThenable.value) {
                        recreateThenable();
                    }
                    break;
                case "rejected":
                    if (!isErrorWithoutData || nextResult.error !== prevThenable.reason) {
                        recreateThenable();
                    }
                    break;
            }
        }
        return nextResult;
    }
    updateResult() {
        const prevResult = this.#currentResult;
        const nextResult = this.createResult(this.#currentQuery, this.options);
        this.#currentResultState = this.#currentQuery.state;
        this.#currentResultOptions = this.options;
        if (this.#currentResultState.data !== void 0) {
            this.#lastQueryWithDefinedData = this.#currentQuery;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(nextResult, prevResult)) {
            return;
        }
        this.#currentResult = nextResult;
        const shouldNotifyListeners = ()=>{
            if (!prevResult) {
                return true;
            }
            const { notifyOnChangeProps } = this.options;
            const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
            if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
                return true;
            }
            const includedProps = new Set(notifyOnChangePropsValue ?? this.#trackedProps);
            if (this.options.throwOnError) {
                includedProps.add("error");
            }
            return Object.keys(this.#currentResult).some((key)=>{
                const typedKey = key;
                const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
                return changed && includedProps.has(typedKey);
            });
        };
        this.#notify({
            listeners: shouldNotifyListeners()
        });
    }
    #updateQuery() {
        const query = this.#client.getQueryCache().build(this.#client, this.options);
        if (query === this.#currentQuery) {
            return;
        }
        const prevQuery = this.#currentQuery;
        this.#currentQuery = query;
        this.#currentQueryInitialState = query.state;
        if (this.hasListeners()) {
            prevQuery?.removeObserver(this);
            query.addObserver(this);
        }
    }
    onQueryUpdate() {
        this.updateResult();
        if (this.hasListeners()) {
            this.#updateTimers();
        }
    }
    #notify(notifyOptions) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            if (notifyOptions.listeners) {
                this.listeners.forEach((listener)=>{
                    listener(this.#currentResult);
                });
            }
            this.#client.getQueryCache().notify({
                query: this.#currentQuery,
                type: "observerResultsUpdated"
            });
        });
    }
};
function shouldLoadOnMount(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveQueryBoolean"])(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveQueryBoolean"])(options.retryOnMount, query) === false);
}
function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveQueryBoolean"])(options.enabled, query) !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query) !== "static") {
        const value = typeof field === "function" ? field(query) : field;
        return value === "always" || value !== false && isStale(query, options);
    }
    return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return (query !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveQueryBoolean"])(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveQueryBoolean"])(options.enabled, query) !== false && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(observer.getCurrentResult(), optimisticResult)) {
        return true;
    }
    return false;
}
;
 //# sourceMappingURL=queryObserver.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryErrorResetBoundary",
    ()=>QueryErrorResetBoundary,
    "useQueryErrorResetBoundary",
    ()=>useQueryErrorResetBoundary
]);
// src/QueryErrorResetBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
function createValue() {
    let isReset = false;
    return {
        clearReset: ()=>{
            isReset = false;
        },
        reset: ()=>{
            isReset = true;
        },
        isReset: ()=>{
            return isReset;
        }
    };
}
var QueryErrorResetBoundaryContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](createValue());
var useQueryErrorResetBoundary = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({ children })=>{
    const [value] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>createValue());
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(QueryErrorResetBoundaryContext.Provider, {
        value,
        children: typeof children === "function" ? children(value) : children
    });
};
;
 //# sourceMappingURL=QueryErrorResetBoundary.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensurePreventErrorBoundaryRetry",
    ()=>ensurePreventErrorBoundaryRetry,
    "getHasError",
    ()=>getHasError,
    "useClearResetErrorBoundary",
    ()=>useClearResetErrorBoundary
]);
// src/errorBoundaryUtils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
"use client";
;
;
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query)=>{
    const throwOnError = query?.state.error && typeof options.throwOnError === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldThrowError"])(options.throwOnError, [
        query.state.error,
        query
    ]) : options.throwOnError;
    if (options.suspense || options.experimental_prefetchInRender || throwOnError) {
        if (!errorResetBoundary.isReset()) {
            options.retryOnMount = false;
        }
    }
};
var useClearResetErrorBoundary = (errorResetBoundary)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        errorResetBoundary.clearReset();
    }, [
        errorResetBoundary
    ]);
};
var getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense })=>{
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldThrowError"])(throwOnError, [
        result.error,
        query
    ]));
};
;
 //# sourceMappingURL=errorBoundaryUtils.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsRestoringProvider",
    ()=>IsRestoringProvider,
    "useIsRestoring",
    ()=>useIsRestoring
]);
// src/IsRestoringProvider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
var IsRestoringContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](false);
var useIsRestoring = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;
;
 //# sourceMappingURL=IsRestoringProvider.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/@tanstack/react-query/build/modern/suspense.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultThrowOnError",
    ()=>defaultThrowOnError,
    "ensureSuspenseTimers",
    ()=>ensureSuspenseTimers,
    "fetchOptimistic",
    ()=>fetchOptimistic,
    "shouldSuspend",
    ()=>shouldSuspend,
    "willFetch",
    ()=>willFetch
]);
// src/suspense.ts
var defaultThrowOnError = (_error, query)=>query.state.data === void 0;
var ensureSuspenseTimers = (defaultedOptions)=>{
    if (defaultedOptions.suspense) {
        const MIN_SUSPENSE_TIME_MS = 1e3;
        const clamp = (value)=>value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
        const originalStaleTime = defaultedOptions.staleTime;
        defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args)=>clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
        if (typeof defaultedOptions.gcTime === "number") {
            defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, MIN_SUSPENSE_TIME_MS);
        }
    }
};
var willFetch = (result, isRestoring)=>result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result)=>defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).catch(()=>{
        errorResetBoundary.clearReset();
    });
;
 //# sourceMappingURL=suspense.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseQuery",
    ()=>useBaseQuery
]);
// src/useBaseQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$environmentManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/query-core/build/modern/environmentManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/react-query/build/modern/suspense.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function useBaseQuery(options, Observer, queryClient) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof options !== "object" || Array.isArray(options)) {
            throw new Error('Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object');
        }
    }
    const isRestoring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsRestoring"])();
    const errorResetBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryErrorResetBoundary"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const defaultedOptions = client.defaultQueryOptions(options);
    client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
    const query = client.getQueryCache().get(defaultedOptions.queryHash);
    if ("TURBOPACK compile-time truthy", 1) {
        if (!defaultedOptions.queryFn) {
            console.error(`[${defaultedOptions.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`);
        }
    }
    const subscribed = options.subscribed !== false;
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : subscribed ? "optimistic" : void 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureSuspenseTimers"])(defaultedOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensurePreventErrorBoundaryRetry"])(defaultedOptions, errorResetBoundary, query);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClearResetErrorBoundary"])(errorResetBoundary);
    const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new Observer(client, defaultedOptions));
    const result = observer.getOptimisticResult(defaultedOptions);
    const shouldSubscribe = !isRestoring && subscribed;
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((onStoreChange)=>{
        const unsubscribe = shouldSubscribe ? observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
        observer.updateResult();
        return unsubscribe;
    }, [
        observer,
        shouldSubscribe
    ]), ()=>observer.getCurrentResult(), ()=>observer.getCurrentResult());
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        observer.setOptions(defaultedOptions);
    }, [
        defaultedOptions,
        observer
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldSuspend"])(defaultedOptions, result)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHasError"])({
        result,
        errorResetBoundary,
        throwOnError: defaultedOptions.throwOnError,
        query,
        suspense: defaultedOptions.suspense
    })) {
        throw result.error;
    }
    ;
    client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions, result);
    if (defaultedOptions.experimental_prefetchInRender && !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$environmentManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["environmentManager"].isServer() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["willFetch"])(result, isRestoring)) {
        const promise = isNewCacheEntry ? // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary) : // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
        query?.promise;
        promise?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).finally(()=>{
            observer.updateResult();
        });
    }
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
;
 //# sourceMappingURL=useBaseQuery.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuery",
    ()=>useQuery
]);
// src/useQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-ssr] (ecmascript)");
"use client";
;
;
function useQuery(options, queryClient) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseQuery"])(options, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryObserver"], queryClient);
}
;
 //# sourceMappingURL=useQuery.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowLeft
]);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
];
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-left", __iconNode);
;
 //# sourceMappingURL=arrow-left.mjs.map
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-ssr] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/ban.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Ban
]);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M4.929 4.929 19.07 19.071",
            key: "196cmz"
        }
    ]
];
const Ban = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ban", __iconNode);
;
 //# sourceMappingURL=ban.mjs.map
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/ban.mjs [app-ssr] (ecmascript) <export default as Ban>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Ban",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/ban.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ShieldCheck
]);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
];
const ShieldCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("shield-check", __iconNode);
;
 //# sourceMappingURL=shield-check.mjs.map
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript) <export default as ShieldCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShieldCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/pencil.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Pencil
]);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
            key: "1a8usu"
        }
    ],
    [
        "path",
        {
            d: "m15 5 4 4",
            key: "1mk7zo"
        }
    ]
];
const Pencil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("pencil", __iconNode);
;
 //# sourceMappingURL=pencil.mjs.map
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/pencil.mjs [app-ssr] (ecmascript) <export default as Pencil>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pencil",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/pencil.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/@tanstack/table-core/build/lib/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColumnFaceting",
    ()=>ColumnFaceting,
    "ColumnFiltering",
    ()=>ColumnFiltering,
    "ColumnGrouping",
    ()=>ColumnGrouping,
    "ColumnOrdering",
    ()=>ColumnOrdering,
    "ColumnPinning",
    ()=>ColumnPinning,
    "ColumnSizing",
    ()=>ColumnSizing,
    "ColumnVisibility",
    ()=>ColumnVisibility,
    "GlobalFaceting",
    ()=>GlobalFaceting,
    "GlobalFiltering",
    ()=>GlobalFiltering,
    "Headers",
    ()=>Headers,
    "RowExpanding",
    ()=>RowExpanding,
    "RowPagination",
    ()=>RowPagination,
    "RowPinning",
    ()=>RowPinning,
    "RowSelection",
    ()=>RowSelection,
    "RowSorting",
    ()=>RowSorting,
    "_getVisibleLeafColumns",
    ()=>_getVisibleLeafColumns,
    "aggregationFns",
    ()=>aggregationFns,
    "buildHeaderGroups",
    ()=>buildHeaderGroups,
    "createCell",
    ()=>createCell,
    "createColumn",
    ()=>createColumn,
    "createColumnHelper",
    ()=>createColumnHelper,
    "createRow",
    ()=>createRow,
    "createTable",
    ()=>createTable,
    "defaultColumnSizing",
    ()=>defaultColumnSizing,
    "expandRows",
    ()=>expandRows,
    "filterFns",
    ()=>filterFns,
    "flattenBy",
    ()=>flattenBy,
    "functionalUpdate",
    ()=>functionalUpdate,
    "getCoreRowModel",
    ()=>getCoreRowModel,
    "getExpandedRowModel",
    ()=>getExpandedRowModel,
    "getFacetedMinMaxValues",
    ()=>getFacetedMinMaxValues,
    "getFacetedRowModel",
    ()=>getFacetedRowModel,
    "getFacetedUniqueValues",
    ()=>getFacetedUniqueValues,
    "getFilteredRowModel",
    ()=>getFilteredRowModel,
    "getGroupedRowModel",
    ()=>getGroupedRowModel,
    "getMemoOptions",
    ()=>getMemoOptions,
    "getPaginationRowModel",
    ()=>getPaginationRowModel,
    "getSortedRowModel",
    ()=>getSortedRowModel,
    "isFunction",
    ()=>isFunction,
    "isNumberArray",
    ()=>isNumberArray,
    "isRowSelected",
    ()=>isRowSelected,
    "isSubRowSelected",
    ()=>isSubRowSelected,
    "makeStateUpdater",
    ()=>makeStateUpdater,
    "memo",
    ()=>memo,
    "noop",
    ()=>noop,
    "orderColumns",
    ()=>orderColumns,
    "passiveEventSupported",
    ()=>passiveEventSupported,
    "reSplitAlphaNumeric",
    ()=>reSplitAlphaNumeric,
    "selectRowsFn",
    ()=>selectRowsFn,
    "shouldAutoRemoveFilter",
    ()=>shouldAutoRemoveFilter,
    "sortingFns",
    ()=>sortingFns
]);
/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ // type Person = {
//   firstName: string
//   lastName: string
//   age: number
//   visits: number
//   status: string
//   progress: number
//   createdAt: Date
//   nested: {
//     foo: [
//       {
//         bar: 'bar'
//       }
//     ]
//     bar: { subBar: boolean }[]
//     baz: {
//       foo: 'foo'
//       bar: {
//         baz: 'baz'
//       }
//     }
//   }
// }
// const test: DeepKeys<Person> = 'nested.foo.0.bar'
// const test2: DeepKeys<Person> = 'nested.bar'
// const helper = createColumnHelper<Person>()
// helper.accessor('nested.foo', {
//   cell: info => info.getValue(),
// })
// helper.accessor('nested.foo.0.bar', {
//   cell: info => info.getValue(),
// })
// helper.accessor('nested.bar', {
//   cell: info => info.getValue(),
// })
function createColumnHelper() {
    return {
        accessor: (accessor, column)=>{
            return typeof accessor === 'function' ? {
                ...column,
                accessorFn: accessor
            } : {
                ...column,
                accessorKey: accessor
            };
        },
        display: (column)=>column,
        group: (column)=>column
    };
}
// Is this type a tuple?
// If this type is a tuple, what indices are allowed?
///
function functionalUpdate(updater, input) {
    return typeof updater === 'function' ? updater(input) : updater;
}
function noop() {
//
}
function makeStateUpdater(key, instance) {
    return (updater)=>{
        instance.setState((old)=>{
            return {
                ...old,
                [key]: functionalUpdate(updater, old[key])
            };
        });
    };
}
function isFunction(d) {
    return d instanceof Function;
}
function isNumberArray(d) {
    return Array.isArray(d) && d.every((val)=>typeof val === 'number');
}
function flattenBy(arr, getChildren) {
    const flat = [];
    const recurse = (subArr)=>{
        subArr.forEach((item)=>{
            flat.push(item);
            const children = getChildren(item);
            if (children != null && children.length) {
                recurse(children);
            }
        });
    };
    recurse(arr);
    return flat;
}
function memo(getDeps, fn, opts) {
    let deps = [];
    let result;
    return (depArgs)=>{
        let depTime;
        if (opts.key && opts.debug) depTime = Date.now();
        const newDeps = getDeps(depArgs);
        const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index)=>deps[index] !== dep);
        if (!depsChanged) {
            return result;
        }
        deps = newDeps;
        let resultTime;
        if (opts.key && opts.debug) resultTime = Date.now();
        result = fn(...newDeps);
        opts == null || opts.onChange == null || opts.onChange(result);
        if (opts.key && opts.debug) {
            if (opts != null && opts.debug()) {
                const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
                const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
                const resultFpsPercentage = resultEndTime / 16;
                const pad = (str, num)=>{
                    str = String(str);
                    while(str.length < num){
                        str = ' ' + str;
                    }
                    return str;
                };
                console.info(`%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120))}deg 100% 31%);`, opts == null ? void 0 : opts.key);
            }
        }
        return result;
    };
}
function getMemoOptions(tableOptions, debugLevel, key, onChange) {
    return {
        debug: ()=>{
            var _tableOptions$debugAl;
            return (_tableOptions$debugAl = tableOptions == null ? void 0 : tableOptions.debugAll) != null ? _tableOptions$debugAl : tableOptions[debugLevel];
        },
        key: ("TURBOPACK compile-time value", "development") === 'development' && key,
        onChange
    };
}
function createCell(table, row, column, columnId) {
    const getRenderValue = ()=>{
        var _cell$getValue;
        return (_cell$getValue = cell.getValue()) != null ? _cell$getValue : table.options.renderFallbackValue;
    };
    const cell = {
        id: `${row.id}_${column.id}`,
        row,
        column,
        getValue: ()=>row.getValue(columnId),
        renderValue: getRenderValue,
        getContext: memo(()=>[
                table,
                column,
                row,
                cell
            ], (table, column, row, cell)=>({
                table,
                column,
                row,
                cell: cell,
                getValue: cell.getValue,
                renderValue: cell.renderValue
            }), getMemoOptions(table.options, 'debugCells', 'cell.getContext'))
    };
    table._features.forEach((feature)=>{
        feature.createCell == null || feature.createCell(cell, column, row, table);
    }, {});
    return cell;
}
function createColumn(table, columnDef, depth, parent) {
    var _ref, _resolvedColumnDef$id;
    const defaultColumn = table._getDefaultColumnDef();
    const resolvedColumnDef = {
        ...defaultColumn,
        ...columnDef
    };
    const accessorKey = resolvedColumnDef.accessorKey;
    let id = (_ref = (_resolvedColumnDef$id = resolvedColumnDef.id) != null ? _resolvedColumnDef$id : accessorKey ? typeof String.prototype.replaceAll === 'function' ? accessorKey.replaceAll('.', '_') : accessorKey.replace(/\./g, '_') : undefined) != null ? _ref : typeof resolvedColumnDef.header === 'string' ? resolvedColumnDef.header : undefined;
    let accessorFn;
    if (resolvedColumnDef.accessorFn) {
        accessorFn = resolvedColumnDef.accessorFn;
    } else if (accessorKey) {
        // Support deep accessor keys
        if (accessorKey.includes('.')) {
            accessorFn = (originalRow)=>{
                let result = originalRow;
                for (const key of accessorKey.split('.')){
                    var _result;
                    result = (_result = result) == null ? void 0 : _result[key];
                    if (("TURBOPACK compile-time value", "development") !== 'production' && result === undefined) {
                        console.warn(`"${key}" in deeply nested key "${accessorKey}" returned undefined.`);
                    }
                }
                return result;
            };
        } else {
            accessorFn = (originalRow)=>originalRow[resolvedColumnDef.accessorKey];
        }
    }
    if (!id) {
        if ("TURBOPACK compile-time truthy", 1) {
            throw new Error(resolvedColumnDef.accessorFn ? `Columns require an id when using an accessorFn` : `Columns require an id when using a non-string header`);
        }
        throw new Error();
    }
    let column = {
        id: `${String(id)}`,
        accessorFn,
        parent: parent,
        depth,
        columnDef: resolvedColumnDef,
        columns: [],
        getFlatColumns: memo(()=>[
                true
            ], ()=>{
            var _column$columns;
            return [
                column,
                ...(_column$columns = column.columns) == null ? void 0 : _column$columns.flatMap((d)=>d.getFlatColumns())
            ];
        }, getMemoOptions(table.options, 'debugColumns', 'column.getFlatColumns')),
        getLeafColumns: memo(()=>[
                table._getOrderColumnsFn()
            ], (orderColumns)=>{
            var _column$columns2;
            if ((_column$columns2 = column.columns) != null && _column$columns2.length) {
                let leafColumns = column.columns.flatMap((column)=>column.getLeafColumns());
                return orderColumns(leafColumns);
            }
            return [
                column
            ];
        }, getMemoOptions(table.options, 'debugColumns', 'column.getLeafColumns'))
    };
    for (const feature of table._features){
        feature.createColumn == null || feature.createColumn(column, table);
    }
    // Yes, we have to convert table to unknown, because we know more than the compiler here.
    return column;
}
const debug = 'debugHeaders';
//
function createHeader(table, column, options) {
    var _options$id;
    const id = (_options$id = options.id) != null ? _options$id : column.id;
    let header = {
        id,
        column,
        index: options.index,
        isPlaceholder: !!options.isPlaceholder,
        placeholderId: options.placeholderId,
        depth: options.depth,
        subHeaders: [],
        colSpan: 0,
        rowSpan: 0,
        headerGroup: null,
        getLeafHeaders: ()=>{
            const leafHeaders = [];
            const recurseHeader = (h)=>{
                if (h.subHeaders && h.subHeaders.length) {
                    h.subHeaders.map(recurseHeader);
                }
                leafHeaders.push(h);
            };
            recurseHeader(header);
            return leafHeaders;
        },
        getContext: ()=>({
                table,
                header: header,
                column
            })
    };
    table._features.forEach((feature)=>{
        feature.createHeader == null || feature.createHeader(header, table);
    });
    return header;
}
const Headers = {
    createTable: (table)=>{
        // Header Groups
        table.getHeaderGroups = memo(()=>[
                table.getAllColumns(),
                table.getVisibleLeafColumns(),
                table.getState().columnPinning.left,
                table.getState().columnPinning.right
            ], (allColumns, leafColumns, left, right)=>{
            var _left$map$filter, _right$map$filter;
            const leftColumns = (_left$map$filter = left == null ? void 0 : left.map((columnId)=>leafColumns.find((d)=>d.id === columnId)).filter(Boolean)) != null ? _left$map$filter : [];
            const rightColumns = (_right$map$filter = right == null ? void 0 : right.map((columnId)=>leafColumns.find((d)=>d.id === columnId)).filter(Boolean)) != null ? _right$map$filter : [];
            const centerColumns = leafColumns.filter((column)=>!(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
            const headerGroups = buildHeaderGroups(allColumns, [
                ...leftColumns,
                ...centerColumns,
                ...rightColumns
            ], table);
            return headerGroups;
        }, getMemoOptions(table.options, debug, 'getHeaderGroups'));
        table.getCenterHeaderGroups = memo(()=>[
                table.getAllColumns(),
                table.getVisibleLeafColumns(),
                table.getState().columnPinning.left,
                table.getState().columnPinning.right
            ], (allColumns, leafColumns, left, right)=>{
            leafColumns = leafColumns.filter((column)=>!(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
            return buildHeaderGroups(allColumns, leafColumns, table, 'center');
        }, getMemoOptions(table.options, debug, 'getCenterHeaderGroups'));
        table.getLeftHeaderGroups = memo(()=>[
                table.getAllColumns(),
                table.getVisibleLeafColumns(),
                table.getState().columnPinning.left
            ], (allColumns, leafColumns, left)=>{
            var _left$map$filter2;
            const orderedLeafColumns = (_left$map$filter2 = left == null ? void 0 : left.map((columnId)=>leafColumns.find((d)=>d.id === columnId)).filter(Boolean)) != null ? _left$map$filter2 : [];
            return buildHeaderGroups(allColumns, orderedLeafColumns, table, 'left');
        }, getMemoOptions(table.options, debug, 'getLeftHeaderGroups'));
        table.getRightHeaderGroups = memo(()=>[
                table.getAllColumns(),
                table.getVisibleLeafColumns(),
                table.getState().columnPinning.right
            ], (allColumns, leafColumns, right)=>{
            var _right$map$filter2;
            const orderedLeafColumns = (_right$map$filter2 = right == null ? void 0 : right.map((columnId)=>leafColumns.find((d)=>d.id === columnId)).filter(Boolean)) != null ? _right$map$filter2 : [];
            return buildHeaderGroups(allColumns, orderedLeafColumns, table, 'right');
        }, getMemoOptions(table.options, debug, 'getRightHeaderGroups'));
        // Footer Groups
        table.getFooterGroups = memo(()=>[
                table.getHeaderGroups()
            ], (headerGroups)=>{
            return [
                ...headerGroups
            ].reverse();
        }, getMemoOptions(table.options, debug, 'getFooterGroups'));
        table.getLeftFooterGroups = memo(()=>[
                table.getLeftHeaderGroups()
            ], (headerGroups)=>{
            return [
                ...headerGroups
            ].reverse();
        }, getMemoOptions(table.options, debug, 'getLeftFooterGroups'));
        table.getCenterFooterGroups = memo(()=>[
                table.getCenterHeaderGroups()
            ], (headerGroups)=>{
            return [
                ...headerGroups
            ].reverse();
        }, getMemoOptions(table.options, debug, 'getCenterFooterGroups'));
        table.getRightFooterGroups = memo(()=>[
                table.getRightHeaderGroups()
            ], (headerGroups)=>{
            return [
                ...headerGroups
            ].reverse();
        }, getMemoOptions(table.options, debug, 'getRightFooterGroups'));
        // Flat Headers
        table.getFlatHeaders = memo(()=>[
                table.getHeaderGroups()
            ], (headerGroups)=>{
            return headerGroups.map((headerGroup)=>{
                return headerGroup.headers;
            }).flat();
        }, getMemoOptions(table.options, debug, 'getFlatHeaders'));
        table.getLeftFlatHeaders = memo(()=>[
                table.getLeftHeaderGroups()
            ], (left)=>{
            return left.map((headerGroup)=>{
                return headerGroup.headers;
            }).flat();
        }, getMemoOptions(table.options, debug, 'getLeftFlatHeaders'));
        table.getCenterFlatHeaders = memo(()=>[
                table.getCenterHeaderGroups()
            ], (left)=>{
            return left.map((headerGroup)=>{
                return headerGroup.headers;
            }).flat();
        }, getMemoOptions(table.options, debug, 'getCenterFlatHeaders'));
        table.getRightFlatHeaders = memo(()=>[
                table.getRightHeaderGroups()
            ], (left)=>{
            return left.map((headerGroup)=>{
                return headerGroup.headers;
            }).flat();
        }, getMemoOptions(table.options, debug, 'getRightFlatHeaders'));
        // Leaf Headers
        table.getCenterLeafHeaders = memo(()=>[
                table.getCenterFlatHeaders()
            ], (flatHeaders)=>{
            return flatHeaders.filter((header)=>{
                var _header$subHeaders;
                return !((_header$subHeaders = header.subHeaders) != null && _header$subHeaders.length);
            });
        }, getMemoOptions(table.options, debug, 'getCenterLeafHeaders'));
        table.getLeftLeafHeaders = memo(()=>[
                table.getLeftFlatHeaders()
            ], (flatHeaders)=>{
            return flatHeaders.filter((header)=>{
                var _header$subHeaders2;
                return !((_header$subHeaders2 = header.subHeaders) != null && _header$subHeaders2.length);
            });
        }, getMemoOptions(table.options, debug, 'getLeftLeafHeaders'));
        table.getRightLeafHeaders = memo(()=>[
                table.getRightFlatHeaders()
            ], (flatHeaders)=>{
            return flatHeaders.filter((header)=>{
                var _header$subHeaders3;
                return !((_header$subHeaders3 = header.subHeaders) != null && _header$subHeaders3.length);
            });
        }, getMemoOptions(table.options, debug, 'getRightLeafHeaders'));
        table.getLeafHeaders = memo(()=>[
                table.getLeftHeaderGroups(),
                table.getCenterHeaderGroups(),
                table.getRightHeaderGroups()
            ], (left, center, right)=>{
            var _left$0$headers, _left$, _center$0$headers, _center$, _right$0$headers, _right$;
            return [
                ...(_left$0$headers = (_left$ = left[0]) == null ? void 0 : _left$.headers) != null ? _left$0$headers : [],
                ...(_center$0$headers = (_center$ = center[0]) == null ? void 0 : _center$.headers) != null ? _center$0$headers : [],
                ...(_right$0$headers = (_right$ = right[0]) == null ? void 0 : _right$.headers) != null ? _right$0$headers : []
            ].map((header)=>{
                return header.getLeafHeaders();
            }).flat();
        }, getMemoOptions(table.options, debug, 'getLeafHeaders'));
    }
};
function buildHeaderGroups(allColumns, columnsToGroup, table, headerFamily) {
    var _headerGroups$0$heade, _headerGroups$;
    // Find the max depth of the columns:
    // build the leaf column row
    // build each buffer row going up
    //    placeholder for non-existent level
    //    real column for existing level
    let maxDepth = 0;
    const findMaxDepth = function(columns, depth) {
        if (depth === void 0) {
            depth = 1;
        }
        maxDepth = Math.max(maxDepth, depth);
        columns.filter((column)=>column.getIsVisible()).forEach((column)=>{
            var _column$columns;
            if ((_column$columns = column.columns) != null && _column$columns.length) {
                findMaxDepth(column.columns, depth + 1);
            }
        }, 0);
    };
    findMaxDepth(allColumns);
    let headerGroups = [];
    const createHeaderGroup = (headersToGroup, depth)=>{
        // The header group we are creating
        const headerGroup = {
            depth,
            id: [
                headerFamily,
                `${depth}`
            ].filter(Boolean).join('_'),
            headers: []
        };
        // The parent columns we're going to scan next
        const pendingParentHeaders = [];
        // Scan each column for parents
        headersToGroup.forEach((headerToGroup)=>{
            // What is the latest (last) parent column?
            const latestPendingParentHeader = [
                ...pendingParentHeaders
            ].reverse()[0];
            const isLeafHeader = headerToGroup.column.depth === headerGroup.depth;
            let column;
            let isPlaceholder = false;
            if (isLeafHeader && headerToGroup.column.parent) {
                // The parent header is new
                column = headerToGroup.column.parent;
            } else {
                // The parent header is repeated
                column = headerToGroup.column;
                isPlaceholder = true;
            }
            if (latestPendingParentHeader && (latestPendingParentHeader == null ? void 0 : latestPendingParentHeader.column) === column) {
                // This column is repeated. Add it as a sub header to the next batch
                latestPendingParentHeader.subHeaders.push(headerToGroup);
            } else {
                // This is a new header. Let's create it
                const header = createHeader(table, column, {
                    id: [
                        headerFamily,
                        depth,
                        column.id,
                        headerToGroup == null ? void 0 : headerToGroup.id
                    ].filter(Boolean).join('_'),
                    isPlaceholder,
                    placeholderId: isPlaceholder ? `${pendingParentHeaders.filter((d)=>d.column === column).length}` : undefined,
                    depth,
                    index: pendingParentHeaders.length
                });
                // Add the headerToGroup as a subHeader of the new header
                header.subHeaders.push(headerToGroup);
                // Add the new header to the pendingParentHeaders to get grouped
                // in the next batch
                pendingParentHeaders.push(header);
            }
            headerGroup.headers.push(headerToGroup);
            headerToGroup.headerGroup = headerGroup;
        });
        headerGroups.push(headerGroup);
        if (depth > 0) {
            createHeaderGroup(pendingParentHeaders, depth - 1);
        }
    };
    const bottomHeaders = columnsToGroup.map((column, index)=>createHeader(table, column, {
            depth: maxDepth,
            index
        }));
    createHeaderGroup(bottomHeaders, maxDepth - 1);
    headerGroups.reverse();
    // headerGroups = headerGroups.filter(headerGroup => {
    //   return !headerGroup.headers.every(header => header.isPlaceholder)
    // })
    const recurseHeadersForSpans = (headers)=>{
        const filteredHeaders = headers.filter((header)=>header.column.getIsVisible());
        return filteredHeaders.map((header)=>{
            let colSpan = 0;
            let rowSpan = 0;
            let childRowSpans = [
                0
            ];
            if (header.subHeaders && header.subHeaders.length) {
                childRowSpans = [];
                recurseHeadersForSpans(header.subHeaders).forEach((_ref)=>{
                    let { colSpan: childColSpan, rowSpan: childRowSpan } = _ref;
                    colSpan += childColSpan;
                    childRowSpans.push(childRowSpan);
                });
            } else {
                colSpan = 1;
            }
            const minChildRowSpan = Math.min(...childRowSpans);
            rowSpan = rowSpan + minChildRowSpan;
            header.colSpan = colSpan;
            header.rowSpan = rowSpan;
            return {
                colSpan,
                rowSpan
            };
        });
    };
    recurseHeadersForSpans((_headerGroups$0$heade = (_headerGroups$ = headerGroups[0]) == null ? void 0 : _headerGroups$.headers) != null ? _headerGroups$0$heade : []);
    return headerGroups;
}
const createRow = (table, id, original, rowIndex, depth, subRows, parentId)=>{
    let row = {
        id,
        index: rowIndex,
        original,
        depth,
        parentId,
        _valuesCache: {},
        _uniqueValuesCache: {},
        getValue: (columnId)=>{
            if (row._valuesCache.hasOwnProperty(columnId)) {
                return row._valuesCache[columnId];
            }
            const column = table.getColumn(columnId);
            if (!(column != null && column.accessorFn)) {
                return undefined;
            }
            row._valuesCache[columnId] = column.accessorFn(row.original, rowIndex);
            return row._valuesCache[columnId];
        },
        getUniqueValues: (columnId)=>{
            if (row._uniqueValuesCache.hasOwnProperty(columnId)) {
                return row._uniqueValuesCache[columnId];
            }
            const column = table.getColumn(columnId);
            if (!(column != null && column.accessorFn)) {
                return undefined;
            }
            if (!column.columnDef.getUniqueValues) {
                row._uniqueValuesCache[columnId] = [
                    row.getValue(columnId)
                ];
                return row._uniqueValuesCache[columnId];
            }
            row._uniqueValuesCache[columnId] = column.columnDef.getUniqueValues(row.original, rowIndex);
            return row._uniqueValuesCache[columnId];
        },
        renderValue: (columnId)=>{
            var _row$getValue;
            return (_row$getValue = row.getValue(columnId)) != null ? _row$getValue : table.options.renderFallbackValue;
        },
        subRows: subRows != null ? subRows : [],
        getLeafRows: ()=>flattenBy(row.subRows, (d)=>d.subRows),
        getParentRow: ()=>row.parentId ? table.getRow(row.parentId, true) : undefined,
        getParentRows: ()=>{
            let parentRows = [];
            let currentRow = row;
            while(true){
                const parentRow = currentRow.getParentRow();
                if (!parentRow) break;
                parentRows.push(parentRow);
                currentRow = parentRow;
            }
            return parentRows.reverse();
        },
        getAllCells: memo(()=>[
                table.getAllLeafColumns()
            ], (leafColumns)=>{
            return leafColumns.map((column)=>{
                return createCell(table, row, column, column.id);
            });
        }, getMemoOptions(table.options, 'debugRows', 'getAllCells')),
        _getAllCellsByColumnId: memo(()=>[
                row.getAllCells()
            ], (allCells)=>{
            return allCells.reduce((acc, cell)=>{
                acc[cell.column.id] = cell;
                return acc;
            }, {});
        }, getMemoOptions(table.options, 'debugRows', 'getAllCellsByColumnId'))
    };
    for(let i = 0; i < table._features.length; i++){
        const feature = table._features[i];
        feature == null || feature.createRow == null || feature.createRow(row, table);
    }
    return row;
};
//
const ColumnFaceting = {
    createColumn: (column, table)=>{
        column._getFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, column.id);
        column.getFacetedRowModel = ()=>{
            if (!column._getFacetedRowModel) {
                return table.getPreFilteredRowModel();
            }
            return column._getFacetedRowModel();
        };
        column._getFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, column.id);
        column.getFacetedUniqueValues = ()=>{
            if (!column._getFacetedUniqueValues) {
                return new Map();
            }
            return column._getFacetedUniqueValues();
        };
        column._getFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, column.id);
        column.getFacetedMinMaxValues = ()=>{
            if (!column._getFacetedMinMaxValues) {
                return undefined;
            }
            return column._getFacetedMinMaxValues();
        };
    }
};
const includesString = (row, columnId, filterValue)=>{
    var _filterValue$toString, _row$getValue;
    const search = filterValue == null || (_filterValue$toString = filterValue.toString()) == null ? void 0 : _filterValue$toString.toLowerCase();
    return Boolean((_row$getValue = row.getValue(columnId)) == null || (_row$getValue = _row$getValue.toString()) == null || (_row$getValue = _row$getValue.toLowerCase()) == null ? void 0 : _row$getValue.includes(search));
};
includesString.autoRemove = (val)=>testFalsey(val);
const includesStringSensitive = (row, columnId, filterValue)=>{
    var _row$getValue2;
    return Boolean((_row$getValue2 = row.getValue(columnId)) == null || (_row$getValue2 = _row$getValue2.toString()) == null ? void 0 : _row$getValue2.includes(filterValue));
};
includesStringSensitive.autoRemove = (val)=>testFalsey(val);
const equalsString = (row, columnId, filterValue)=>{
    var _row$getValue3;
    return ((_row$getValue3 = row.getValue(columnId)) == null || (_row$getValue3 = _row$getValue3.toString()) == null ? void 0 : _row$getValue3.toLowerCase()) === (filterValue == null ? void 0 : filterValue.toLowerCase());
};
equalsString.autoRemove = (val)=>testFalsey(val);
const arrIncludes = (row, columnId, filterValue)=>{
    var _row$getValue4;
    return (_row$getValue4 = row.getValue(columnId)) == null ? void 0 : _row$getValue4.includes(filterValue);
};
arrIncludes.autoRemove = (val)=>testFalsey(val);
const arrIncludesAll = (row, columnId, filterValue)=>{
    return !filterValue.some((val)=>{
        var _row$getValue5;
        return !((_row$getValue5 = row.getValue(columnId)) != null && _row$getValue5.includes(val));
    });
};
arrIncludesAll.autoRemove = (val)=>testFalsey(val) || !(val != null && val.length);
const arrIncludesSome = (row, columnId, filterValue)=>{
    return filterValue.some((val)=>{
        var _row$getValue6;
        return (_row$getValue6 = row.getValue(columnId)) == null ? void 0 : _row$getValue6.includes(val);
    });
};
arrIncludesSome.autoRemove = (val)=>testFalsey(val) || !(val != null && val.length);
const equals = (row, columnId, filterValue)=>{
    return row.getValue(columnId) === filterValue;
};
equals.autoRemove = (val)=>testFalsey(val);
const weakEquals = (row, columnId, filterValue)=>{
    return row.getValue(columnId) == filterValue;
};
weakEquals.autoRemove = (val)=>testFalsey(val);
const inNumberRange = (row, columnId, filterValue)=>{
    let [min, max] = filterValue;
    const rowValue = row.getValue(columnId);
    return rowValue >= min && rowValue <= max;
};
inNumberRange.resolveFilterValue = (val)=>{
    let [unsafeMin, unsafeMax] = val;
    let parsedMin = typeof unsafeMin !== 'number' ? parseFloat(unsafeMin) : unsafeMin;
    let parsedMax = typeof unsafeMax !== 'number' ? parseFloat(unsafeMax) : unsafeMax;
    let min = unsafeMin === null || Number.isNaN(parsedMin) ? -Infinity : parsedMin;
    let max = unsafeMax === null || Number.isNaN(parsedMax) ? Infinity : parsedMax;
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    return [
        min,
        max
    ];
};
inNumberRange.autoRemove = (val)=>testFalsey(val) || testFalsey(val[0]) && testFalsey(val[1]);
// Export
const filterFns = {
    includesString,
    includesStringSensitive,
    equalsString,
    arrIncludes,
    arrIncludesAll,
    arrIncludesSome,
    equals,
    weakEquals,
    inNumberRange
};
// Utils
function testFalsey(val) {
    return val === undefined || val === null || val === '';
}
//
const ColumnFiltering = {
    getDefaultColumnDef: ()=>{
        return {
            filterFn: 'auto'
        };
    },
    getInitialState: (state)=>{
        return {
            columnFilters: [],
            ...state
        };
    },
    getDefaultOptions: (table)=>{
        return {
            onColumnFiltersChange: makeStateUpdater('columnFilters', table),
            filterFromLeafRows: false,
            maxLeafRowFilterDepth: 100
        };
    },
    createColumn: (column, table)=>{
        column.getAutoFilterFn = ()=>{
            const firstRow = table.getCoreRowModel().flatRows[0];
            const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
            if (typeof value === 'string') {
                return filterFns.includesString;
            }
            if (typeof value === 'number') {
                return filterFns.inNumberRange;
            }
            if (typeof value === 'boolean') {
                return filterFns.equals;
            }
            if (value !== null && typeof value === 'object') {
                return filterFns.equals;
            }
            if (Array.isArray(value)) {
                return filterFns.arrIncludes;
            }
            return filterFns.weakEquals;
        };
        column.getFilterFn = ()=>{
            var _table$options$filter, _table$options$filter2;
            return isFunction(column.columnDef.filterFn) ? column.columnDef.filterFn : column.columnDef.filterFn === 'auto' ? column.getAutoFilterFn() : (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[column.columnDef.filterFn]) != null ? _table$options$filter : filterFns[column.columnDef.filterFn];
        };
        column.getCanFilter = ()=>{
            var _column$columnDef$ena, _table$options$enable, _table$options$enable2;
            return ((_column$columnDef$ena = column.columnDef.enableColumnFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnFilters) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && !!column.accessorFn;
        };
        column.getIsFiltered = ()=>column.getFilterIndex() > -1;
        column.getFilterValue = ()=>{
            var _table$getState$colum;
            return (_table$getState$colum = table.getState().columnFilters) == null || (_table$getState$colum = _table$getState$colum.find((d)=>d.id === column.id)) == null ? void 0 : _table$getState$colum.value;
        };
        column.getFilterIndex = ()=>{
            var _table$getState$colum2, _table$getState$colum3;
            return (_table$getState$colum2 = (_table$getState$colum3 = table.getState().columnFilters) == null ? void 0 : _table$getState$colum3.findIndex((d)=>d.id === column.id)) != null ? _table$getState$colum2 : -1;
        };
        column.setFilterValue = (value)=>{
            table.setColumnFilters((old)=>{
                const filterFn = column.getFilterFn();
                const previousFilter = old == null ? void 0 : old.find((d)=>d.id === column.id);
                const newFilter = functionalUpdate(value, previousFilter ? previousFilter.value : undefined);
                //
                if (shouldAutoRemoveFilter(filterFn, newFilter, column)) {
                    var _old$filter;
                    return (_old$filter = old == null ? void 0 : old.filter((d)=>d.id !== column.id)) != null ? _old$filter : [];
                }
                const newFilterObj = {
                    id: column.id,
                    value: newFilter
                };
                if (previousFilter) {
                    var _old$map;
                    return (_old$map = old == null ? void 0 : old.map((d)=>{
                        if (d.id === column.id) {
                            return newFilterObj;
                        }
                        return d;
                    })) != null ? _old$map : [];
                }
                if (old != null && old.length) {
                    return [
                        ...old,
                        newFilterObj
                    ];
                }
                return [
                    newFilterObj
                ];
            });
        };
    },
    createRow: (row, _table)=>{
        row.columnFilters = {};
        row.columnFiltersMeta = {};
    },
    createTable: (table)=>{
        table.setColumnFilters = (updater)=>{
            const leafColumns = table.getAllLeafColumns();
            const updateFn = (old)=>{
                var _functionalUpdate;
                return (_functionalUpdate = functionalUpdate(updater, old)) == null ? void 0 : _functionalUpdate.filter((filter)=>{
                    const column = leafColumns.find((d)=>d.id === filter.id);
                    if (column) {
                        const filterFn = column.getFilterFn();
                        if (shouldAutoRemoveFilter(filterFn, filter.value, column)) {
                            return false;
                        }
                    }
                    return true;
                });
            };
            table.options.onColumnFiltersChange == null || table.options.onColumnFiltersChange(updateFn);
        };
        table.resetColumnFilters = (defaultState)=>{
            var _table$initialState$c, _table$initialState;
            table.setColumnFilters(defaultState ? [] : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnFilters) != null ? _table$initialState$c : []);
        };
        table.getPreFilteredRowModel = ()=>table.getCoreRowModel();
        table.getFilteredRowModel = ()=>{
            if (!table._getFilteredRowModel && table.options.getFilteredRowModel) {
                table._getFilteredRowModel = table.options.getFilteredRowModel(table);
            }
            if (table.options.manualFiltering || !table._getFilteredRowModel) {
                return table.getPreFilteredRowModel();
            }
            return table._getFilteredRowModel();
        };
    }
};
function shouldAutoRemoveFilter(filterFn, value, column) {
    return (filterFn && filterFn.autoRemove ? filterFn.autoRemove(value, column) : false) || typeof value === 'undefined' || typeof value === 'string' && !value;
}
const sum = (columnId, _leafRows, childRows)=>{
    // It's faster to just add the aggregations together instead of
    // process leaf nodes individually
    return childRows.reduce((sum, next)=>{
        const nextValue = next.getValue(columnId);
        return sum + (typeof nextValue === 'number' ? nextValue : 0);
    }, 0);
};
const min = (columnId, _leafRows, childRows)=>{
    let min;
    childRows.forEach((row)=>{
        const value = row.getValue(columnId);
        if (value != null && (min > value || min === undefined && value >= value)) {
            min = value;
        }
    });
    return min;
};
const max = (columnId, _leafRows, childRows)=>{
    let max;
    childRows.forEach((row)=>{
        const value = row.getValue(columnId);
        if (value != null && (max < value || max === undefined && value >= value)) {
            max = value;
        }
    });
    return max;
};
const extent = (columnId, _leafRows, childRows)=>{
    let min;
    let max;
    childRows.forEach((row)=>{
        const value = row.getValue(columnId);
        if (value != null) {
            if (min === undefined) {
                if (value >= value) min = max = value;
            } else {
                if (min > value) min = value;
                if (max < value) max = value;
            }
        }
    });
    return [
        min,
        max
    ];
};
const mean = (columnId, leafRows)=>{
    let count = 0;
    let sum = 0;
    leafRows.forEach((row)=>{
        let value = row.getValue(columnId);
        if (value != null && (value = +value) >= value) {
            ++count, sum += value;
        }
    });
    if (count) return sum / count;
    return;
};
const median = (columnId, leafRows)=>{
    if (!leafRows.length) {
        return;
    }
    const values = leafRows.map((row)=>row.getValue(columnId));
    if (!isNumberArray(values)) {
        return;
    }
    if (values.length === 1) {
        return values[0];
    }
    const mid = Math.floor(values.length / 2);
    const nums = values.sort((a, b)=>a - b);
    return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
const unique = (columnId, leafRows)=>{
    return Array.from(new Set(leafRows.map((d)=>d.getValue(columnId))).values());
};
const uniqueCount = (columnId, leafRows)=>{
    return new Set(leafRows.map((d)=>d.getValue(columnId))).size;
};
const count = (_columnId, leafRows)=>{
    return leafRows.length;
};
const aggregationFns = {
    sum,
    min,
    max,
    extent,
    mean,
    median,
    unique,
    uniqueCount,
    count
};
//
const ColumnGrouping = {
    getDefaultColumnDef: ()=>{
        return {
            aggregatedCell: (props)=>{
                var _toString, _props$getValue;
                return (_toString = (_props$getValue = props.getValue()) == null || _props$getValue.toString == null ? void 0 : _props$getValue.toString()) != null ? _toString : null;
            },
            aggregationFn: 'auto'
        };
    },
    getInitialState: (state)=>{
        return {
            grouping: [],
            ...state
        };
    },
    getDefaultOptions: (table)=>{
        return {
            onGroupingChange: makeStateUpdater('grouping', table),
            groupedColumnMode: 'reorder'
        };
    },
    createColumn: (column, table)=>{
        column.toggleGrouping = ()=>{
            table.setGrouping((old)=>{
                // Find any existing grouping for this column
                if (old != null && old.includes(column.id)) {
                    return old.filter((d)=>d !== column.id);
                }
                return [
                    ...old != null ? old : [],
                    column.id
                ];
            });
        };
        column.getCanGroup = ()=>{
            var _column$columnDef$ena, _table$options$enable;
            return ((_column$columnDef$ena = column.columnDef.enableGrouping) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableGrouping) != null ? _table$options$enable : true) && (!!column.accessorFn || !!column.columnDef.getGroupingValue);
        };
        column.getIsGrouped = ()=>{
            var _table$getState$group;
            return (_table$getState$group = table.getState().grouping) == null ? void 0 : _table$getState$group.includes(column.id);
        };
        column.getGroupedIndex = ()=>{
            var _table$getState$group2;
            return (_table$getState$group2 = table.getState().grouping) == null ? void 0 : _table$getState$group2.indexOf(column.id);
        };
        column.getToggleGroupingHandler = ()=>{
            const canGroup = column.getCanGroup();
            return ()=>{
                if (!canGroup) return;
                column.toggleGrouping();
            };
        };
        column.getAutoAggregationFn = ()=>{
            const firstRow = table.getCoreRowModel().flatRows[0];
            const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
            if (typeof value === 'number') {
                return aggregationFns.sum;
            }
            if (Object.prototype.toString.call(value) === '[object Date]') {
                return aggregationFns.extent;
            }
        };
        column.getAggregationFn = ()=>{
            var _table$options$aggreg, _table$options$aggreg2;
            if (!column) {
                throw new Error();
            }
            return isFunction(column.columnDef.aggregationFn) ? column.columnDef.aggregationFn : column.columnDef.aggregationFn === 'auto' ? column.getAutoAggregationFn() : (_table$options$aggreg = (_table$options$aggreg2 = table.options.aggregationFns) == null ? void 0 : _table$options$aggreg2[column.columnDef.aggregationFn]) != null ? _table$options$aggreg : aggregationFns[column.columnDef.aggregationFn];
        };
    },
    createTable: (table)=>{
        table.setGrouping = (updater)=>table.options.onGroupingChange == null ? void 0 : table.options.onGroupingChange(updater);
        table.resetGrouping = (defaultState)=>{
            var _table$initialState$g, _table$initialState;
            table.setGrouping(defaultState ? [] : (_table$initialState$g = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.grouping) != null ? _table$initialState$g : []);
        };
        table.getPreGroupedRowModel = ()=>table.getFilteredRowModel();
        table.getGroupedRowModel = ()=>{
            if (!table._getGroupedRowModel && table.options.getGroupedRowModel) {
                table._getGroupedRowModel = table.options.getGroupedRowModel(table);
            }
            if (table.options.manualGrouping || !table._getGroupedRowModel) {
                return table.getPreGroupedRowModel();
            }
            return table._getGroupedRowModel();
        };
    },
    createRow: (row, table)=>{
        row.getIsGrouped = ()=>!!row.groupingColumnId;
        row.getGroupingValue = (columnId)=>{
            if (row._groupingValuesCache.hasOwnProperty(columnId)) {
                return row._groupingValuesCache[columnId];
            }
            const column = table.getColumn(columnId);
            if (!(column != null && column.columnDef.getGroupingValue)) {
                return row.getValue(columnId);
            }
            row._groupingValuesCache[columnId] = column.columnDef.getGroupingValue(row.original);
            return row._groupingValuesCache[columnId];
        };
        row._groupingValuesCache = {};
    },
    createCell: (cell, column, row, table)=>{
        cell.getIsGrouped = ()=>column.getIsGrouped() && column.id === row.groupingColumnId;
        cell.getIsPlaceholder = ()=>!cell.getIsGrouped() && column.getIsGrouped();
        cell.getIsAggregated = ()=>{
            var _row$subRows;
            return !cell.getIsGrouped() && !cell.getIsPlaceholder() && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
        };
    }
};
function orderColumns(leafColumns, grouping, groupedColumnMode) {
    if (!(grouping != null && grouping.length) || !groupedColumnMode) {
        return leafColumns;
    }
    const nonGroupingColumns = leafColumns.filter((col)=>!grouping.includes(col.id));
    if (groupedColumnMode === 'remove') {
        return nonGroupingColumns;
    }
    const groupingColumns = grouping.map((g)=>leafColumns.find((col)=>col.id === g)).filter(Boolean);
    return [
        ...groupingColumns,
        ...nonGroupingColumns
    ];
}
//
const ColumnOrdering = {
    getInitialState: (state)=>{
        return {
            columnOrder: [],
            ...state
        };
    },
    getDefaultOptions: (table)=>{
        return {
            onColumnOrderChange: makeStateUpdater('columnOrder', table)
        };
    },
    createColumn: (column, table)=>{
        column.getIndex = memo((position)=>[
                _getVisibleLeafColumns(table, position)
            ], (columns)=>columns.findIndex((d)=>d.id === column.id), getMemoOptions(table.options, 'debugColumns', 'getIndex'));
        column.getIsFirstColumn = (position)=>{
            var _columns$;
            const columns = _getVisibleLeafColumns(table, position);
            return ((_columns$ = columns[0]) == null ? void 0 : _columns$.id) === column.id;
        };
        column.getIsLastColumn = (position)=>{
            var _columns;
            const columns = _getVisibleLeafColumns(table, position);
            return ((_columns = columns[columns.length - 1]) == null ? void 0 : _columns.id) === column.id;
        };
    },
    createTable: (table)=>{
        table.setColumnOrder = (updater)=>table.options.onColumnOrderChange == null ? void 0 : table.options.onColumnOrderChange(updater);
        table.resetColumnOrder = (defaultState)=>{
            var _table$initialState$c;
            table.setColumnOrder(defaultState ? [] : (_table$initialState$c = table.initialState.columnOrder) != null ? _table$initialState$c : []);
        };
        table._getOrderColumnsFn = memo(()=>[
                table.getState().columnOrder,
                table.getState().grouping,
                table.options.groupedColumnMode
            ], (columnOrder, grouping, groupedColumnMode)=>(columns)=>{
                // Sort grouped columns to the start of the column list
                // before the headers are built
                let orderedColumns = [];
                // If there is no order, return the normal columns
                if (!(columnOrder != null && columnOrder.length)) {
                    orderedColumns = columns;
                } else {
                    const columnOrderCopy = [
                        ...columnOrder
                    ];
                    // If there is an order, make a copy of the columns
                    const columnsCopy = [
                        ...columns
                    ];
                    // And make a new ordered array of the columns
                    // Loop over the columns and place them in order into the new array
                    while(columnsCopy.length && columnOrderCopy.length){
                        const targetColumnId = columnOrderCopy.shift();
                        const foundIndex = columnsCopy.findIndex((d)=>d.id === targetColumnId);
                        if (foundIndex > -1) {
                            orderedColumns.push(columnsCopy.splice(foundIndex, 1)[0]);
                        }
                    }
                    // If there are any columns left, add them to the end
                    orderedColumns = [
                        ...orderedColumns,
                        ...columnsCopy
                    ];
                }
                return orderColumns(orderedColumns, grouping, groupedColumnMode);
            }, getMemoOptions(table.options, 'debugTable', '_getOrderColumnsFn'));
    }
};
//
const getDefaultColumnPinningState = ()=>({
        left: [],
        right: []
    });
const ColumnPinning = {
    getInitialState: (state)=>{
        return {
            columnPinning: getDefaultColumnPinningState(),
            ...state
        };
    },
    getDefaultOptions: (table)=>{
        return {
            onColumnPinningChange: makeStateUpdater('columnPinning', table)
        };
    },
    createColumn: (column, table)=>{
        column.pin = (position)=>{
            const columnIds = column.getLeafColumns().map((d)=>d.id).filter(Boolean);
            table.setColumnPinning((old)=>{
                var _old$left3, _old$right3;
                if (position === 'right') {
                    var _old$left, _old$right;
                    return {
                        left: ((_old$left = old == null ? void 0 : old.left) != null ? _old$left : []).filter((d)=>!(columnIds != null && columnIds.includes(d))),
                        right: [
                            ...((_old$right = old == null ? void 0 : old.right) != null ? _old$right : []).filter((d)=>!(columnIds != null && columnIds.includes(d))),
                            ...columnIds
                        ]
                    };
                }
                if (position === 'left') {
                    var _old$left2, _old$right2;
                    return {
                        left: [
                            ...((_old$left2 = old == null ? void 0 : old.left) != null ? _old$left2 : []).filter((d)=>!(columnIds != null && columnIds.includes(d))),
                            ...columnIds
                        ],
                        right: ((_old$right2 = old == null ? void 0 : old.right) != null ? _old$right2 : []).filter((d)=>!(columnIds != null && columnIds.includes(d)))
                    };
                }
                return {
                    left: ((_old$left3 = old == null ? void 0 : old.left) != null ? _old$left3 : []).filter((d)=>!(columnIds != null && columnIds.includes(d))),
                    right: ((_old$right3 = old == null ? void 0 : old.right) != null ? _old$right3 : []).filter((d)=>!(columnIds != null && columnIds.includes(d)))
                };
            });
        };
        column.getCanPin = ()=>{
            const leafColumns = column.getLeafColumns();
            return leafColumns.some((d)=>{
                var _d$columnDef$enablePi, _ref, _table$options$enable;
                return ((_d$columnDef$enablePi = d.columnDef.enablePinning) != null ? _d$columnDef$enablePi : true) && ((_ref = (_table$options$enable = table.options.enableColumnPinning) != null ? _table$options$enable : table.options.enablePinning) != null ? _ref : true);
            });
        };
        column.getIsPinned = ()=>{
            const leafColumnIds = column.getLeafColumns().map((d)=>d.id);
            const { left, right } = table.getState().columnPinning;
            const isLeft = leafColumnIds.some((d)=>left == null ? void 0 : left.includes(d));
            const isRight = leafColumnIds.some((d)=>right == null ? void 0 : right.includes(d));
            return isLeft ? 'left' : isRight ? 'right' : false;
        };
        column.getPinnedIndex = ()=>{
            var _table$getState$colum, _table$getState$colum2;
            const position = column.getIsPinned();
            return position ? (_table$getState$colum = (_table$getState$colum2 = table.getState().columnPinning) == null || (_table$getState$colum2 = _table$getState$colum2[position]) == null ? void 0 : _table$getState$colum2.indexOf(column.id)) != null ? _table$getState$colum : -1 : 0;
        };
    },
    createRow: (row, table)=>{
        row.getCenterVisibleCells = memo(()=>[
                row._getAllVisibleCells(),
                table.getState().columnPinning.left,
                table.getState().columnPinning.right
            ], (allCells, left, right)=>{
            const leftAndRight = [
                ...left != null ? left : [],
                ...right != null ? right : []
            ];
            return allCells.filter((d)=>!leftAndRight.includes(d.column.id));
        }, getMemoOptions(table.options, 'debugRows', 'getCenterVisibleCells'));
        row.getLeftVisibleCells = memo(()=>[
                row._getAllVisibleCells(),
                table.getState().columnPinning.left
            ], (allCells, left)=>{
            const cells = (left != null ? left : []).map((columnId)=>allCells.find((cell)=>cell.column.id === columnId)).filter(Boolean).map((d)=>({
                    ...d,
                    position: 'left'
                }));
            return cells;
        }, getMemoOptions(table.options, 'debugRows', 'getLeftVisibleCells'));
        row.getRightVisibleCells = memo(()=>[
                row._getAllVisibleCells(),
                table.getState().columnPinning.right
            ], (allCells, right)=>{
            const cells = (right != null ? right : []).map((columnId)=>allCells.find((cell)=>cell.column.id === columnId)).filter(Boolean).map((d)=>({
                    ...d,
                    position: 'right'
                }));
            return cells;
        }, getMemoOptions(table.options, 'debugRows', 'getRightVisibleCells'));
    },
    createTable: (table)=>{
        table.setColumnPinning = (updater)=>table.options.onColumnPinningChange == null ? void 0 : table.options.onColumnPinningChange(updater);
        table.resetColumnPinning = (defaultState)=>{
            var _table$initialState$c, _table$initialState;
            return table.setColumnPinning(defaultState ? getDefaultColumnPinningState() : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnPinning) != null ? _table$initialState$c : getDefaultColumnPinningState());
        };
        table.getIsSomeColumnsPinned = (position)=>{
            var _pinningState$positio;
            const pinningState = table.getState().columnPinning;
            if (!position) {
                var _pinningState$left, _pinningState$right;
                return Boolean(((_pinningState$left = pinningState.left) == null ? void 0 : _pinningState$left.length) || ((_pinningState$right = pinningState.right) == null ? void 0 : _pinningState$right.length));
            }
            return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
        };
        table.getLeftLeafColumns = memo(()=>[
                table.getAllLeafColumns(),
                table.getState().columnPinning.left
            ], (allColumns, left)=>{
            return (left != null ? left : []).map((columnId)=>allColumns.find((column)=>column.id === columnId)).filter(Boolean);
        }, getMemoOptions(table.options, 'debugColumns', 'getLeftLeafColumns'));
        table.getRightLeafColumns = memo(()=>[
                table.getAllLeafColumns(),
                table.getState().columnPinning.right
            ], (allColumns, right)=>{
            return (right != null ? right : []).map((columnId)=>allColumns.find((column)=>column.id === columnId)).filter(Boolean);
        }, getMemoOptions(table.options, 'debugColumns', 'getRightLeafColumns'));
        table.getCenterLeafColumns = memo(()=>[
                table.getAllLeafColumns(),
                table.getState().columnPinning.left,
                table.getState().columnPinning.right
            ], (allColumns, left, right)=>{
            const leftAndRight = [
                ...left != null ? left : [],
                ...right != null ? right : []
            ];
            return allColumns.filter((d)=>!leftAndRight.includes(d.id));
        }, getMemoOptions(table.options, 'debugColumns', 'getCenterLeafColumns'));
    }
};
function safelyAccessDocument(_document) {
    return _document || (typeof document !== 'undefined' ? document : null);
}
//
//
const defaultColumnSizing = {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
};
const getDefaultColumnSizingInfoState = ()=>({
        startOffset: null,
        startSize: null,
        deltaOffset: null,
        deltaPercentage: null,
        isResizingColumn: false,
        columnSizingStart: []
    });
const ColumnSizing = {
    getDefaultColumnDef: ()=>{
        return defaultColumnSizing;
    },
    getInitialState: (state)=>{
        return {
            columnSizing: {},
            columnSizingInfo: getDefaultColumnSizingInfoState(),
            ...state
        };
    },
    getDefaultOptions: (table)=>{
        return {
            columnResizeMode: 'onEnd',
            columnResizeDirection: 'ltr',
            onColumnSizingChange: makeStateUpdater('columnSizing', table),
            onColumnSizingInfoChange: makeStateUpdater('columnSizingInfo', table)
        };
    },
    createColumn: (column, table)=>{
        column.getSize = ()=>{
            var _column$columnDef$min, _ref, _column$columnDef$max;
            const columnSize = table.getState().columnSizing[column.id];
            return Math.min(Math.max((_column$columnDef$min = column.columnDef.minSize) != null ? _column$columnDef$min : defaultColumnSizing.minSize, (_ref = columnSize != null ? columnSize : column.columnDef.size) != null ? _ref : defaultColumnSizing.size), (_column$columnDef$max = column.columnDef.maxSize) != null ? _column$columnDef$max : defaultColumnSizing.maxSize);
        };
        column.getStart = memo((position)=>[
                position,
                _getVisibleLeafColumns(table, position),
                table.getState().columnSizing
            ], (position, columns)=>columns.slice(0, column.getIndex(position)).reduce((sum, column)=>sum + column.getSize(), 0), getMemoOptions(table.options, 'debugColumns', 'getStart'));
        column.getAfter = memo((position)=>[
                position,
                _getVisibleLeafColumns(table, position),
                table.getState().columnSizing
            ], (position, columns)=>columns.slice(column.getIndex(position) + 1).reduce((sum, column)=>sum + column.getSize(), 0), getMemoOptions(table.options, 'debugColumns', 'getAfter'));
        column.resetSize = ()=>{
            table.setColumnSizing((_ref2)=>{
                let { [column.id]: _, ...rest } = _ref2;
                return rest;
            });
        };
        column.getCanResize = ()=>{
            var _column$columnDef$ena, _table$options$enable;
            return ((_column$columnDef$ena = column.columnDef.enableResizing) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnResizing) != null ? _table$options$enable : true);
        };
        column.getIsResizing = ()=>{
            return table.getState().columnSizingInfo.isResizingColumn === column.id;
        };
    },
    createHeader: (header, table)=>{
        header.getSize = ()=>{
            let sum = 0;
            const recurse = (header)=>{
                if (header.subHeaders.length) {
                    header.subHeaders.forEach(recurse);
                } else {
                    var _header$column$getSiz;
                    sum += (_header$column$getSiz = header.column.getSize()) != null ? _header$column$getSiz : 0;
                }
            };
            recurse(header);
            return sum;
        };
        header.getStart = ()=>{
            if (header.index > 0) {
                const prevSiblingHeader = header.headerGroup.headers[header.index - 1];
                return prevSiblingHeader.getStart() + prevSiblingHeader.getSize();
            }
            return 0;
        };
        header.getResizeHandler = (_contextDocument)=>{
            const column = table.getColumn(header.column.id);
            const canResize = column == null ? void 0 : column.getCanResize();
            return (e)=>{
                if (!column || !canResize) {
                    return;
                }
                e.persist == null || e.persist();
                if (isTouchStartEvent(e)) {
                    // lets not respond to multiple touches (e.g. 2 or 3 fingers)
                    if (e.touches && e.touches.length > 1) {
                        return;
                    }
                }
                const startSize = header.getSize();
                const columnSizingStart = header ? header.getLeafHeaders().map((d)=>[
                        d.column.id,
                        d.column.getSize()
                    ]) : [
                    [
                        column.id,
                        column.getSize()
                    ]
                ];
                const clientX = isTouchStartEvent(e) ? Math.round(e.touches[0].clientX) : e.clientX;
                const newColumnSizing = {};
                const updateOffset = (eventType, clientXPos)=>{
                    if (typeof clientXPos !== 'number') {
                        return;
                    }
                    table.setColumnSizingInfo((old)=>{
                        var _old$startOffset, _old$startSize;
                        const deltaDirection = table.options.columnResizeDirection === 'rtl' ? -1 : 1;
                        const deltaOffset = (clientXPos - ((_old$startOffset = old == null ? void 0 : old.startOffset) != null ? _old$startOffset : 0)) * deltaDirection;
                        const deltaPercentage = Math.max(deltaOffset / ((_old$startSize = old == null ? void 0 : old.startSize) != null ? _old$startSize : 0), -0.999999);
                        old.columnSizingStart.forEach((_ref3)=>{
                            let [columnId, headerSize] = _ref3;
                            newColumnSizing[columnId] = Math.round(Math.max(headerSize + headerSize * deltaPercentage, 0) * 100) / 100;
                        });
                        return {
                            ...old,
                            deltaOffset,
                            deltaPercentage
                        };
                    });
                    if (table.options.columnResizeMode === 'onChange' || eventType === 'end') {
                        table.setColumnSizing((old)=>({
                                ...old,
                                ...newColumnSizing
                            }));
                    }
                };
                const onMove = (clientXPos)=>updateOffset('move', clientXPos);
                const onEnd = (clientXPos)=>{
                    updateOffset('end', clientXPos);
                    table.setColumnSizingInfo((old)=>({
                            ...old,
                            isResizingColumn: false,
                            startOffset: null,
                            startSize: null,
                            deltaOffset: null,
                            deltaPercentage: null,
                            columnSizingStart: []
                        }));
                };
                const contextDocument = safelyAccessDocument(_contextDocument);
                const mouseEvents = {
                    moveHandler: (e)=>onMove(e.clientX),
                    upHandler: (e)=>{
                        contextDocument == null || contextDocument.removeEventListener('mousemove', mouseEvents.moveHandler);
                        contextDocument == null || contextDocument.removeEventListener('mouseup', mouseEvents.upHandler);
                        onEnd(e.clientX);
                    }
                };
                const touchEvents = {
                    moveHandler: (e)=>{
                        if (e.cancelable) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        onMove(e.touches[0].clientX);
                        return false;
                    },
                    upHandler: (e)=>{
                        var _e$touches$;
                        contextDocument == null || contextDocument.removeEventListener('touchmove', touchEvents.moveHandler);
                        contextDocument == null || contextDocument.removeEventListener('touchend', touchEvents.upHandler);
                        if (e.cancelable) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        onEnd((_e$touches$ = e.touches[0]) == null ? void 0 : _e$touches$.clientX);
                    }
                };
                const passiveIfSupported = passiveEventSupported() ? {
                    passive: false
                } : false;
                if (isTouchStartEvent(e)) {
                    contextDocument == null || contextDocument.addEventListener('touchmove', touchEvents.moveHandler, passiveIfSupported);
                    contextDocument == null || contextDocument.addEventListener('touchend', touchEvents.upHandler, passiveIfSupported);
                } else {
                    contextDocument == null || contextDocument.addEventListener('mousemove', mouseEvents.moveHandler, passiveIfSupported);
                    contextDocument == null || contextDocument.addEventListener('mouseup', mouseEvents.upHandler, passiveIfSupported);
                }
                table.setColumnSizingInfo((old)=>({
                        ...old,
                        startOffset: clientX,
                        startSize,
                        deltaOffset: 0,
                        deltaPercentage: 0,
                        columnSizingStart,
                        isResizingColumn: column.id
                    }));
            };
        };
    },
    createTable: (table)=>{
        table.setColumnSizing = (updater)=>table.options.onColumnSizingChange == null ? void 0 : table.options.onColumnSizingChange(updater);
        table.setColumnSizingInfo = (updater)=>table.options.onColumnSizingInfoChange == null ? void 0 : table.options.onColumnSizingInfoChange(updater);
        table.resetColumnSizing = (defaultState)=>{
            var _table$initialState$c;
            table.setColumnSizing(defaultState ? {} : (_table$initialState$c = table.initialState.columnSizing) != null ? _table$initialState$c : {});
        };
        table.resetHeaderSizeInfo = (defaultState)=>{
            var _table$initialState$c2;
            table.setColumnSizingInfo(defaultState ? getDefaultColumnSizingInfoState() : (_table$initialState$c2 = table.initialState.columnSizingInfo) != null ? _table$initialState$c2 : getDefaultColumnSizingInfoState());
        };
        table.getTotalSize = ()=>{
            var _table$getHeaderGroup, _table$getHeaderGroup2;
            return (_table$getHeaderGroup = (_table$getHeaderGroup2 = table.getHeaderGroups()[0]) == null ? void 0 : _table$getHeaderGroup2.headers.reduce((sum, header)=>{
                return sum + header.getSize();
            }, 0)) != null ? _table$getHeaderGroup : 0;
        };
        table.getLeftTotalSize = ()=>{
            var _table$getLeftHeaderG, _table$getLeftHeaderG2;
            return (_table$getLeftHeaderG = (_table$getLeftHeaderG2 = table.getLeftHeaderGroups()[0]) == null ? void 0 : _table$getLeftHeaderG2.headers.reduce((sum, header)=>{
                return sum + header.getSize();
            }, 0)) != null ? _table$getLeftHeaderG : 0;
        };
        table.getCenterTotalSize = ()=>{
            var _table$getCenterHeade, _table$getCenterHeade2;
            return (_table$getCenterHeade = (_table$getCenterHeade2 = table.getCenterHeaderGroups()[0]) == null ? void 0 : _table$getCenterHeade2.headers.reduce((sum, header)=>{
                return sum + header.getSize();
            }, 0)) != null ? _table$getCenterHeade : 0;
        };
        table.getRightTotalSize = ()=>{
            var _table$getRightHeader, _table$getRightHeader2;
            return (_table$getRightHeader = (_table$getRightHeader2 = table.getRightHeaderGroups()[0]) == null ? void 0 : _table$getRightHeader2.headers.reduce((sum, header)=>{
                return sum + header.getSize();
            }, 0)) != null ? _table$getRightHeader : 0;
        };
    }
};
let passiveSupported = null;
function passiveEventSupported() {
    if (typeof passiveSupported === 'boolean') return passiveSupported;
    let supported = false;
    try {
        const options = {
            get passive () {
                supported = true;
                return false;
            }
        };
        const noop = ()=>{};
        window.addEventListener('test', noop, options);
        window.removeEventListener('test', noop);
    } catch (err) {
        supported = false;
    }
    passiveSupported = supported;
    return passiveSupported;
}
function isTouchStartEvent(e) {
    return e.type === 'touchstart';
}
//
const ColumnVisibility = {
    getInitialState: (state)=>{
        return {
            columnVisibility: {},
            ...state
        };
    },
    getDefaultOptions: (table)=>{
        return {
            onColumnVisibilityChange: makeStateUpdater('columnVisibility', table)
        };
    },
    createColumn: (column, table)=>{
        column.toggleVisibility = (value)=>{
            if (column.getCanHide()) {
                table.setColumnVisibility((old)=>({
                        ...old,
                        [column.id]: value != null ? value : !column.getIsVisible()
                    }));
            }
        };
        column.getIsVisible = ()=>{
            var _ref, _table$getState$colum;
            const childColumns = column.columns;
            return (_ref = childColumns.length ? childColumns.some((c)=>c.getIsVisible()) : (_table$getState$colum = table.getState().columnVisibility) == null ? void 0 : _table$getState$colum[column.id]) != null ? _ref : true;
        };
        column.getCanHide = ()=>{
            var _column$columnDef$ena, _table$options$enable;
            return ((_column$columnDef$ena = column.columnDef.enableHiding) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableHiding) != null ? _table$options$enable : true);
        };
        column.getToggleVisibilityHandler = ()=>{
            return (e)=>{
                column.toggleVisibility == null || column.toggleVisibility(e.target.checked);
            };
        };
    },
    createRow: (row, table)=>{
        row._getAllVisibleCells = memo(()=>[
                row.getAllCells(),
                table.getState().columnVisibility
            ], (cells)=>{
            return cells.filter((cell)=>cell.column.getIsVisible());
        }, getMemoOptions(table.options, 'debugRows', '_getAllVisibleCells'));
        row.getVisibleCells = memo(()=>[
                row.getLeftVisibleCells(),
                row.getCenterVisibleCells(),
                row.getRightVisibleCells()
            ], (left, center, right)=>[
                ...left,
                ...center,
                ...right
            ], getMemoOptions(table.options, 'debugRows', 'getVisibleCells'));
    },
    createTable: (table)=>{
        const makeVisibleColumnsMethod = (key, getColumns)=>{
            return memo(()=>[
                    getColumns(),
                    getColumns().filter((d)=>d.getIsVisible()).map((d)=>d.id).join('_')
                ], (columns)=>{
                return columns.filter((d)=>d.getIsVisible == null ? void 0 : d.getIsVisible());
            }, getMemoOptions(table.options, 'debugColumns', key));
        };
        table.getVisibleFlatColumns = makeVisibleColumnsMethod('getVisibleFlatColumns', ()=>table.getAllFlatColumns());
        table.getVisibleLeafColumns = makeVisibleColumnsMethod('getVisibleLeafColumns', ()=>table.getAllLeafColumns());
        table.getLeftVisibleLeafColumns = makeVisibleColumnsMethod('getLeftVisibleLeafColumns', ()=>table.getLeftLeafColumns());
        table.getRightVisibleLeafColumns = makeVisibleColumnsMethod('getRightVisibleLeafColumns', ()=>table.getRightLeafColumns());
        table.getCenterVisibleLeafColumns = makeVisibleColumnsMethod('getCenterVisibleLeafColumns', ()=>table.getCenterLeafColumns());
        table.setColumnVisibility = (updater)=>table.options.onColumnVisibilityChange == null ? void 0 : table.options.onColumnVisibilityChange(updater);
        table.resetColumnVisibility = (defaultState)=>{
            var _table$initialState$c;
            table.setColumnVisibility(defaultState ? {} : (_table$initialState$c = table.initialState.columnVisibility) != null ? _table$initialState$c : {});
        };
        table.toggleAllColumnsVisible = (value)=>{
            var _value;
            value = (_value = value) != null ? _value : !table.getIsAllColumnsVisible();
            table.setColumnVisibility(table.getAllLeafColumns().reduce((obj, column)=>({
                    ...obj,
                    [column.id]: !value ? !(column.getCanHide != null && column.getCanHide()) : value
                }), {}));
        };
        table.getIsAllColumnsVisible = ()=>!table.getAllLeafColumns().some((column)=>!(column.getIsVisible != null && column.getIsVisible()));
        table.getIsSomeColumnsVisible = ()=>table.getAllLeafColumns().some((column)=>column.getIsVisible == null ? void 0 : column.getIsVisible());
        table.getToggleAllColumnsVisibilityHandler = ()=>{
            return (e)=>{
                var _target;
                table.toggleAllColumnsVisible((_target = e.target) == null ? void 0 : _target.checked);
            };
        };
    }
};
function _getVisibleLeafColumns(table, position) {
    return !position ? table.getVisibleLeafColumns() : position === 'center' ? table.getCenterVisibleLeafColumns() : position === 'left' ? table.getLeftVisibleLeafColumns() : table.getRightVisibleLeafColumns();
}
//
const GlobalFaceting = {
    createTable: (table)=>{
        table._getGlobalFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, '__global__');
        table.getGlobalFacetedRowModel = ()=>{
            if (table.options.manualFiltering || !table._getGlobalFacetedRowModel) {
                return table.getPreFilteredRowModel();
            }
            return table._getGlobalFacetedRowModel();
        };
        table._getGlobalFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, '__global__');
        table.getGlobalFacetedUniqueValues = ()=>{
            if (!table._getGlobalFacetedUniqueValues) {
                return new Map();
            }
            return table._getGlobalFacetedUniqueValues();
        };
        table._getGlobalFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, '__global__');
        table.getGlobalFacetedMinMaxValues = ()=>{
            if (!table._getGlobalFacetedMinMaxValues) {
                return;
            }
            return table._getGlobalFacetedMinMaxValues();
        };
    }
};
//
const GlobalFiltering = {
    getInitialState: (state)=>{
        return {
            globalFilter: undefined,
            ...state
        };
    },
    getDefaultOptions: (table)=>{
        return {
            onGlobalFilterChange: makeStateUpdater('globalFilter', table),
            globalFilterFn: 'auto',
            getColumnCanGlobalFilter: (column)=>{
                var _table$getCoreRowMode;
                const value = (_table$getCoreRowMode = table.getCoreRowModel().flatRows[0]) == null || (_table$getCoreRowMode = _table$getCoreRowMode._getAllCellsByColumnId()[column.id]) == null ? void 0 : _table$getCoreRowMode.getValue();
                return typeof value === 'string' || typeof value === 'number';
            }
        };
    },
    createColumn: (column, table)=>{
        column.getCanGlobalFilter = ()=>{
            var _column$columnDef$ena, _table$options$enable, _table$options$enable2, _table$options$getCol;
            return ((_column$columnDef$ena = column.columnDef.enableGlobalFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableGlobalFilter) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && ((_table$options$getCol = table.options.getColumnCanGlobalFilter == null ? void 0 : table.options.getColumnCanGlobalFilter(column)) != null ? _table$options$getCol : true) && !!column.accessorFn;
        };
    },
    createTable: (table)=>{
        table.getGlobalAutoFilterFn = ()=>{
            return filterFns.includesString;
        };
        table.getGlobalFilterFn = ()=>{
            var _table$options$filter, _table$options$filter2;
            const { globalFilterFn: globalFilterFn } = table.options;
            return isFunction(globalFilterFn) ? globalFilterFn : globalFilterFn === 'auto' ? table.getGlobalAutoFilterFn() : (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[globalFilterFn]) != null ? _table$options$filter : filterFns[globalFilterFn];
        };
        table.setGlobalFilter = (updater)=>{
            table.options.onGlobalFilterChange == null || table.options.onGlobalFilterChange(updater);
        };
        table.resetGlobalFilter = (defaultState)=>{
            table.setGlobalFilter(defaultState ? undefined : table.initialState.globalFilter);
        };
    }
};
//
const RowExpanding = {
    getInitialState: (state)=>{
        return {
            expanded: {},
            ...state
        };
    },
    getDefaultOptions: (table)=>{
        return {
            onExpandedChange: makeStateUpdater('expanded', table),
            paginateExpandedRows: true
        };
    },
    createTable: (table)=>{
        let registered = false;
        let queued = false;
        table._autoResetExpanded = ()=>{
            var _ref, _table$options$autoRe;
            if (!registered) {
                table._queue(()=>{
                    registered = true;
                });
                return;
            }
            if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetExpanded) != null ? _ref : !table.options.manualExpanding) {
                if (queued) return;
                queued = true;
                table._queue(()=>{
                    table.resetExpanded();
                    queued = false;
                });
            }
        };
        table.setExpanded = (updater)=>table.options.onExpandedChange == null ? void 0 : table.options.onExpandedChange(updater);
        table.toggleAllRowsExpanded = (expanded)=>{
            if (expanded != null ? expanded : !table.getIsAllRowsExpanded()) {
                table.setExpanded(true);
            } else {
                table.setExpanded({});
            }
        };
        table.resetExpanded = (defaultState)=>{
            var _table$initialState$e, _table$initialState;
            table.setExpanded(defaultState ? {} : (_table$initialState$e = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.expanded) != null ? _table$initialState$e : {});
        };
        table.getCanSomeRowsExpand = ()=>{
            return table.getPrePaginationRowModel().flatRows.some((row)=>row.getCanExpand());
        };
        table.getToggleAllRowsExpandedHandler = ()=>{
            return (e)=>{
                e.persist == null || e.persist();
                table.toggleAllRowsExpanded();
            };
        };
        table.getIsSomeRowsExpanded = ()=>{
            const expanded = table.getState().expanded;
            return expanded === true || Object.values(expanded).some(Boolean);
        };
        table.getIsAllRowsExpanded = ()=>{
            const expanded = table.getState().expanded;
            // If expanded is true, save some cycles and return true
            if (typeof expanded === 'boolean') {
                return expanded === true;
            }
            if (!Object.keys(expanded).length) {
                return false;
            }
            // If any row is not expanded, return false
            if (table.getRowModel().flatRows.some((row)=>!row.getIsExpanded())) {
                return false;
            }
            // They must all be expanded :shrug:
            return true;
        };
        table.getExpandedDepth = ()=>{
            let maxDepth = 0;
            const rowIds = table.getState().expanded === true ? Object.keys(table.getRowModel().rowsById) : Object.keys(table.getState().expanded);
            rowIds.forEach((id)=>{
                const splitId = id.split('.');
                maxDepth = Math.max(maxDepth, splitId.length);
            });
            return maxDepth;
        };
        table.getPreExpandedRowModel = ()=>table.getSortedRowModel();
        table.getExpandedRowModel = ()=>{
            if (!table._getExpandedRowModel && table.options.getExpandedRowModel) {
                table._getExpandedRowModel = table.options.getExpandedRowModel(table);
            }
            if (table.options.manualExpanding || !table._getExpandedRowModel) {
                return table.getPreExpandedRowModel();
            }
            return table._getExpandedRowModel();
        };
    },
    createRow: (row, table)=>{
        row.toggleExpanded = (expanded)=>{
            table.setExpanded((old)=>{
                var _expanded;
                const exists = old === true ? true : !!(old != null && old[row.id]);
                let oldExpanded = {};
                if (old === true) {
                    Object.keys(table.getRowModel().rowsById).forEach((rowId)=>{
                        oldExpanded[rowId] = true;
                    });
                } else {
                    oldExpanded = old;
                }
                expanded = (_expanded = expanded) != null ? _expanded : !exists;
                if (!exists && expanded) {
                    return {
                        ...oldExpanded,
                        [row.id]: true
                    };
                }
                if (exists && !expanded) {
                    const { [row.id]: _, ...rest } = oldExpanded;
                    return rest;
                }
                return old;
            });
        };
        row.getIsExpanded = ()=>{
            var _table$options$getIsR;
            const expanded = table.getState().expanded;
            return !!((_table$options$getIsR = table.options.getIsRowExpanded == null ? void 0 : table.options.getIsRowExpanded(row)) != null ? _table$options$getIsR : expanded === true || (expanded == null ? void 0 : expanded[row.id]));
        };
        row.getCanExpand = ()=>{
            var _table$options$getRow, _table$options$enable, _row$subRows;
            return (_table$options$getRow = table.options.getRowCanExpand == null ? void 0 : table.options.getRowCanExpand(row)) != null ? _table$options$getRow : ((_table$options$enable = table.options.enableExpanding) != null ? _table$options$enable : true) && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
        };
        row.getIsAllParentsExpanded = ()=>{
            let isFullyExpanded = true;
            let currentRow = row;
            while(isFullyExpanded && currentRow.parentId){
                currentRow = table.getRow(currentRow.parentId, true);
                isFullyExpanded = currentRow.getIsExpanded();
            }
            return isFullyExpanded;
        };
        row.getToggleExpandedHandler = ()=>{
            const canExpand = row.getCanExpand();
            return ()=>{
                if (!canExpand) return;
                row.toggleExpanded();
            };
        };
    }
};
//
const defaultPageIndex = 0;
const defaultPageSize = 10;
const getDefaultPaginationState = ()=>({
        pageIndex: defaultPageIndex,
        pageSize: defaultPageSize
    });
const RowPagination = {
    getInitialState: (state)=>{
        return {
            ...state,
            pagination: {
                ...getDefaultPaginationState(),
                ...state == null ? void 0 : state.pagination
            }
        };
    },
    getDefaultOptions: (table)=>{
        return {
            onPaginationChange: makeStateUpdater('pagination', table)
        };
    },
    createTable: (table)=>{
        let registered = false;
        let queued = false;
        table._autoResetPageIndex = ()=>{
            var _ref, _table$options$autoRe;
            if (!registered) {
                table._queue(()=>{
                    registered = true;
                });
                return;
            }
            if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetPageIndex) != null ? _ref : !table.options.manualPagination) {
                if (queued) return;
                queued = true;
                table._queue(()=>{
                    table.resetPageIndex();
                    queued = false;
                });
            }
        };
        table.setPagination = (updater)=>{
            const safeUpdater = (old)=>{
                let newState = functionalUpdate(updater, old);
                return newState;
            };
            return table.options.onPaginationChange == null ? void 0 : table.options.onPaginationChange(safeUpdater);
        };
        table.resetPagination = (defaultState)=>{
            var _table$initialState$p;
            table.setPagination(defaultState ? getDefaultPaginationState() : (_table$initialState$p = table.initialState.pagination) != null ? _table$initialState$p : getDefaultPaginationState());
        };
        table.setPageIndex = (updater)=>{
            table.setPagination((old)=>{
                let pageIndex = functionalUpdate(updater, old.pageIndex);
                const maxPageIndex = typeof table.options.pageCount === 'undefined' || table.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : table.options.pageCount - 1;
                pageIndex = Math.max(0, Math.min(pageIndex, maxPageIndex));
                return {
                    ...old,
                    pageIndex
                };
            });
        };
        table.resetPageIndex = (defaultState)=>{
            var _table$initialState$p2, _table$initialState;
            table.setPageIndex(defaultState ? defaultPageIndex : (_table$initialState$p2 = (_table$initialState = table.initialState) == null || (_table$initialState = _table$initialState.pagination) == null ? void 0 : _table$initialState.pageIndex) != null ? _table$initialState$p2 : defaultPageIndex);
        };
        table.resetPageSize = (defaultState)=>{
            var _table$initialState$p3, _table$initialState2;
            table.setPageSize(defaultState ? defaultPageSize : (_table$initialState$p3 = (_table$initialState2 = table.initialState) == null || (_table$initialState2 = _table$initialState2.pagination) == null ? void 0 : _table$initialState2.pageSize) != null ? _table$initialState$p3 : defaultPageSize);
        };
        table.setPageSize = (updater)=>{
            table.setPagination((old)=>{
                const pageSize = Math.max(1, functionalUpdate(updater, old.pageSize));
                const topRowIndex = old.pageSize * old.pageIndex;
                const pageIndex = Math.floor(topRowIndex / pageSize);
                return {
                    ...old,
                    pageIndex,
                    pageSize
                };
            });
        };
        //deprecated
        table.setPageCount = (updater)=>table.setPagination((old)=>{
                var _table$options$pageCo;
                let newPageCount = functionalUpdate(updater, (_table$options$pageCo = table.options.pageCount) != null ? _table$options$pageCo : -1);
                if (typeof newPageCount === 'number') {
                    newPageCount = Math.max(-1, newPageCount);
                }
                return {
                    ...old,
                    pageCount: newPageCount
                };
            });
        table.getPageOptions = memo(()=>[
                table.getPageCount()
            ], (pageCount)=>{
            let pageOptions = [];
            if (pageCount && pageCount > 0) {
                pageOptions = [
                    ...new Array(pageCount)
                ].fill(null).map((_, i)=>i);
            }
            return pageOptions;
        }, getMemoOptions(table.options, 'debugTable', 'getPageOptions'));
        table.getCanPreviousPage = ()=>table.getState().pagination.pageIndex > 0;
        table.getCanNextPage = ()=>{
            const { pageIndex } = table.getState().pagination;
            const pageCount = table.getPageCount();
            if (pageCount === -1) {
                return true;
            }
            if (pageCount === 0) {
                return false;
            }
            return pageIndex < pageCount - 1;
        };
        table.previousPage = ()=>{
            return table.setPageIndex((old)=>old - 1);
        };
        table.nextPage = ()=>{
            return table.setPageIndex((old)=>{
                return old + 1;
            });
        };
        table.firstPage = ()=>{
            return table.setPageIndex(0);
        };
        table.lastPage = ()=>{
            return table.setPageIndex(table.getPageCount() - 1);
        };
        table.getPrePaginationRowModel = ()=>table.getExpandedRowModel();
        table.getPaginationRowModel = ()=>{
            if (!table._getPaginationRowModel && table.options.getPaginationRowModel) {
                table._getPaginationRowModel = table.options.getPaginationRowModel(table);
            }
            if (table.options.manualPagination || !table._getPaginationRowModel) {
                return table.getPrePaginationRowModel();
            }
            return table._getPaginationRowModel();
        };
        table.getPageCount = ()=>{
            var _table$options$pageCo2;
            return (_table$options$pageCo2 = table.options.pageCount) != null ? _table$options$pageCo2 : Math.ceil(table.getRowCount() / table.getState().pagination.pageSize);
        };
        table.getRowCount = ()=>{
            var _table$options$rowCou;
            return (_table$options$rowCou = table.options.rowCount) != null ? _table$options$rowCou : table.getPrePaginationRowModel().rows.length;
        };
    }
};
//
const getDefaultRowPinningState = ()=>({
        top: [],
        bottom: []
    });
const RowPinning = {
    getInitialState: (state)=>{
        return {
            rowPinning: getDefaultRowPinningState(),
            ...state
        };
    },
    getDefaultOptions: (table)=>{
        return {
            onRowPinningChange: makeStateUpdater('rowPinning', table)
        };
    },
    createRow: (row, table)=>{
        row.pin = (position, includeLeafRows, includeParentRows)=>{
            const leafRowIds = includeLeafRows ? row.getLeafRows().map((_ref)=>{
                let { id } = _ref;
                return id;
            }) : [];
            const parentRowIds = includeParentRows ? row.getParentRows().map((_ref2)=>{
                let { id } = _ref2;
                return id;
            }) : [];
            const rowIds = new Set([
                ...parentRowIds,
                row.id,
                ...leafRowIds
            ]);
            table.setRowPinning((old)=>{
                var _old$top3, _old$bottom3;
                if (position === 'bottom') {
                    var _old$top, _old$bottom;
                    return {
                        top: ((_old$top = old == null ? void 0 : old.top) != null ? _old$top : []).filter((d)=>!(rowIds != null && rowIds.has(d))),
                        bottom: [
                            ...((_old$bottom = old == null ? void 0 : old.bottom) != null ? _old$bottom : []).filter((d)=>!(rowIds != null && rowIds.has(d))),
                            ...Array.from(rowIds)
                        ]
                    };
                }
                if (position === 'top') {
                    var _old$top2, _old$bottom2;
                    return {
                        top: [
                            ...((_old$top2 = old == null ? void 0 : old.top) != null ? _old$top2 : []).filter((d)=>!(rowIds != null && rowIds.has(d))),
                            ...Array.from(rowIds)
                        ],
                        bottom: ((_old$bottom2 = old == null ? void 0 : old.bottom) != null ? _old$bottom2 : []).filter((d)=>!(rowIds != null && rowIds.has(d)))
                    };
                }
                return {
                    top: ((_old$top3 = old == null ? void 0 : old.top) != null ? _old$top3 : []).filter((d)=>!(rowIds != null && rowIds.has(d))),
                    bottom: ((_old$bottom3 = old == null ? void 0 : old.bottom) != null ? _old$bottom3 : []).filter((d)=>!(rowIds != null && rowIds.has(d)))
                };
            });
        };
        row.getCanPin = ()=>{
            var _ref3;
            const { enableRowPinning, enablePinning } = table.options;
            if (typeof enableRowPinning === 'function') {
                return enableRowPinning(row);
            }
            return (_ref3 = enableRowPinning != null ? enableRowPinning : enablePinning) != null ? _ref3 : true;
        };
        row.getIsPinned = ()=>{
            const rowIds = [
                row.id
            ];
            const { top, bottom } = table.getState().rowPinning;
            const isTop = rowIds.some((d)=>top == null ? void 0 : top.includes(d));
            const isBottom = rowIds.some((d)=>bottom == null ? void 0 : bottom.includes(d));
            return isTop ? 'top' : isBottom ? 'bottom' : false;
        };
        row.getPinnedIndex = ()=>{
            var _ref4, _visiblePinnedRowIds$;
            const position = row.getIsPinned();
            if (!position) return -1;
            const visiblePinnedRowIds = (_ref4 = position === 'top' ? table.getTopRows() : table.getBottomRows()) == null ? void 0 : _ref4.map((_ref5)=>{
                let { id } = _ref5;
                return id;
            });
            return (_visiblePinnedRowIds$ = visiblePinnedRowIds == null ? void 0 : visiblePinnedRowIds.indexOf(row.id)) != null ? _visiblePinnedRowIds$ : -1;
        };
    },
    createTable: (table)=>{
        table.setRowPinning = (updater)=>table.options.onRowPinningChange == null ? void 0 : table.options.onRowPinningChange(updater);
        table.resetRowPinning = (defaultState)=>{
            var _table$initialState$r, _table$initialState;
            return table.setRowPinning(defaultState ? getDefaultRowPinningState() : (_table$initialState$r = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.rowPinning) != null ? _table$initialState$r : getDefaultRowPinningState());
        };
        table.getIsSomeRowsPinned = (position)=>{
            var _pinningState$positio;
            const pinningState = table.getState().rowPinning;
            if (!position) {
                var _pinningState$top, _pinningState$bottom;
                return Boolean(((_pinningState$top = pinningState.top) == null ? void 0 : _pinningState$top.length) || ((_pinningState$bottom = pinningState.bottom) == null ? void 0 : _pinningState$bottom.length));
            }
            return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
        };
        table._getPinnedRows = (visibleRows, pinnedRowIds, position)=>{
            var _table$options$keepPi;
            const rows = ((_table$options$keepPi = table.options.keepPinnedRows) != null ? _table$options$keepPi : true) ? //get all rows that are pinned even if they would not be otherwise visible
            //account for expanded parent rows, but not pagination or filtering
            (pinnedRowIds != null ? pinnedRowIds : []).map((rowId)=>{
                const row = table.getRow(rowId, true);
                return row.getIsAllParentsExpanded() ? row : null;
            }) : //else get only visible rows that are pinned
            (pinnedRowIds != null ? pinnedRowIds : []).map((rowId)=>visibleRows.find((row)=>row.id === rowId));
            return rows.filter(Boolean).map((d)=>({
                    ...d,
                    position
                }));
        };
        table.getTopRows = memo(()=>[
                table.getRowModel().rows,
                table.getState().rowPinning.top
            ], (allRows, topPinnedRowIds)=>table._getPinnedRows(allRows, topPinnedRowIds, 'top'), getMemoOptions(table.options, 'debugRows', 'getTopRows'));
        table.getBottomRows = memo(()=>[
                table.getRowModel().rows,
                table.getState().rowPinning.bottom
            ], (allRows, bottomPinnedRowIds)=>table._getPinnedRows(allRows, bottomPinnedRowIds, 'bottom'), getMemoOptions(table.options, 'debugRows', 'getBottomRows'));
        table.getCenterRows = memo(()=>[
                table.getRowModel().rows,
                table.getState().rowPinning.top,
                table.getState().rowPinning.bottom
            ], (allRows, top, bottom)=>{
            const topAndBottom = new Set([
                ...top != null ? top : [],
                ...bottom != null ? bottom : []
            ]);
            return allRows.filter((d)=>!topAndBottom.has(d.id));
        }, getMemoOptions(table.options, 'debugRows', 'getCenterRows'));
    }
};
//
const RowSelection = {
    getInitialState: (state)=>{
        return {
            rowSelection: {},
            ...state
        };
    },
    getDefaultOptions: (table)=>{
        return {
            onRowSelectionChange: makeStateUpdater('rowSelection', table),
            enableRowSelection: true,
            enableMultiRowSelection: true,
            enableSubRowSelection: true
        };
    },
    createTable: (table)=>{
        table.setRowSelection = (updater)=>table.options.onRowSelectionChange == null ? void 0 : table.options.onRowSelectionChange(updater);
        table.resetRowSelection = (defaultState)=>{
            var _table$initialState$r;
            return table.setRowSelection(defaultState ? {} : (_table$initialState$r = table.initialState.rowSelection) != null ? _table$initialState$r : {});
        };
        table.toggleAllRowsSelected = (value)=>{
            table.setRowSelection((old)=>{
                value = typeof value !== 'undefined' ? value : !table.getIsAllRowsSelected();
                const rowSelection = {
                    ...old
                };
                const preGroupedFlatRows = table.getPreGroupedRowModel().flatRows;
                // We don't use `mutateRowIsSelected` here for performance reasons.
                // All of the rows are flat already, so it wouldn't be worth it
                if (value) {
                    preGroupedFlatRows.forEach((row)=>{
                        if (!row.getCanSelect()) {
                            return;
                        }
                        rowSelection[row.id] = true;
                    });
                } else {
                    preGroupedFlatRows.forEach((row)=>{
                        delete rowSelection[row.id];
                    });
                }
                return rowSelection;
            });
        };
        table.toggleAllPageRowsSelected = (value)=>table.setRowSelection((old)=>{
                const resolvedValue = typeof value !== 'undefined' ? value : !table.getIsAllPageRowsSelected();
                const rowSelection = {
                    ...old
                };
                table.getRowModel().rows.forEach((row)=>{
                    mutateRowIsSelected(rowSelection, row.id, resolvedValue, true, table);
                });
                return rowSelection;
            });
        // addRowSelectionRange: rowId => {
        //   const {
        //     rows,
        //     rowsById,
        //     options: { selectGroupingRows, selectSubRows },
        //   } = table
        //   const findSelectedRow = (rows: Row[]) => {
        //     let found
        //     rows.find(d => {
        //       if (d.getIsSelected()) {
        //         found = d
        //         return true
        //       }
        //       const subFound = findSelectedRow(d.subRows || [])
        //       if (subFound) {
        //         found = subFound
        //         return true
        //       }
        //       return false
        //     })
        //     return found
        //   }
        //   const firstRow = findSelectedRow(rows) || rows[0]
        //   const lastRow = rowsById[rowId]
        //   let include = false
        //   const selectedRowIds = {}
        //   const addRow = (row: Row) => {
        //     mutateRowIsSelected(selectedRowIds, row.id, true, {
        //       rowsById,
        //       selectGroupingRows: selectGroupingRows!,
        //       selectSubRows: selectSubRows!,
        //     })
        //   }
        //   table.rows.forEach(row => {
        //     const isFirstRow = row.id === firstRow.id
        //     const isLastRow = row.id === lastRow.id
        //     if (isFirstRow || isLastRow) {
        //       if (!include) {
        //         include = true
        //       } else if (include) {
        //         addRow(row)
        //         include = false
        //       }
        //     }
        //     if (include) {
        //       addRow(row)
        //     }
        //   })
        //   table.setRowSelection(selectedRowIds)
        // },
        table.getPreSelectedRowModel = ()=>table.getCoreRowModel();
        table.getSelectedRowModel = memo(()=>[
                table.getState().rowSelection,
                table.getCoreRowModel()
            ], (rowSelection, rowModel)=>{
            if (!Object.keys(rowSelection).length) {
                return {
                    rows: [],
                    flatRows: [],
                    rowsById: {}
                };
            }
            return selectRowsFn(table, rowModel);
        }, getMemoOptions(table.options, 'debugTable', 'getSelectedRowModel'));
        table.getFilteredSelectedRowModel = memo(()=>[
                table.getState().rowSelection,
                table.getFilteredRowModel()
            ], (rowSelection, rowModel)=>{
            if (!Object.keys(rowSelection).length) {
                return {
                    rows: [],
                    flatRows: [],
                    rowsById: {}
                };
            }
            return selectRowsFn(table, rowModel);
        }, getMemoOptions(table.options, 'debugTable', 'getFilteredSelectedRowModel'));
        table.getGroupedSelectedRowModel = memo(()=>[
                table.getState().rowSelection,
                table.getSortedRowModel()
            ], (rowSelection, rowModel)=>{
            if (!Object.keys(rowSelection).length) {
                return {
                    rows: [],
                    flatRows: [],
                    rowsById: {}
                };
            }
            return selectRowsFn(table, rowModel);
        }, getMemoOptions(table.options, 'debugTable', 'getGroupedSelectedRowModel'));
        ///
        // getGroupingRowCanSelect: rowId => {
        //   const row = table.getRow(rowId)
        //   if (!row) {
        //     throw new Error()
        //   }
        //   if (typeof table.options.enableGroupingRowSelection === 'function') {
        //     return table.options.enableGroupingRowSelection(row)
        //   }
        //   return table.options.enableGroupingRowSelection ?? false
        // },
        table.getIsAllRowsSelected = ()=>{
            const preGroupedFlatRows = table.getFilteredRowModel().flatRows;
            const { rowSelection } = table.getState();
            let isAllRowsSelected = Boolean(preGroupedFlatRows.length && Object.keys(rowSelection).length);
            if (isAllRowsSelected) {
                if (preGroupedFlatRows.some((row)=>row.getCanSelect() && !rowSelection[row.id])) {
                    isAllRowsSelected = false;
                }
            }
            return isAllRowsSelected;
        };
        table.getIsAllPageRowsSelected = ()=>{
            const paginationFlatRows = table.getPaginationRowModel().flatRows.filter((row)=>row.getCanSelect());
            const { rowSelection } = table.getState();
            let isAllPageRowsSelected = !!paginationFlatRows.length;
            if (isAllPageRowsSelected && paginationFlatRows.some((row)=>!rowSelection[row.id])) {
                isAllPageRowsSelected = false;
            }
            return isAllPageRowsSelected;
        };
        table.getIsSomeRowsSelected = ()=>{
            var _table$getState$rowSe;
            const totalSelected = Object.keys((_table$getState$rowSe = table.getState().rowSelection) != null ? _table$getState$rowSe : {}).length;
            return totalSelected > 0 && totalSelected < table.getFilteredRowModel().flatRows.length;
        };
        table.getIsSomePageRowsSelected = ()=>{
            const paginationFlatRows = table.getPaginationRowModel().flatRows;
            return table.getIsAllPageRowsSelected() ? false : paginationFlatRows.filter((row)=>row.getCanSelect()).some((d)=>d.getIsSelected() || d.getIsSomeSelected());
        };
        table.getToggleAllRowsSelectedHandler = ()=>{
            return (e)=>{
                table.toggleAllRowsSelected(e.target.checked);
            };
        };
        table.getToggleAllPageRowsSelectedHandler = ()=>{
            return (e)=>{
                table.toggleAllPageRowsSelected(e.target.checked);
            };
        };
    },
    createRow: (row, table)=>{
        row.toggleSelected = (value, opts)=>{
            const isSelected = row.getIsSelected();
            table.setRowSelection((old)=>{
                var _opts$selectChildren;
                value = typeof value !== 'undefined' ? value : !isSelected;
                if (row.getCanSelect() && isSelected === value) {
                    return old;
                }
                const selectedRowIds = {
                    ...old
                };
                mutateRowIsSelected(selectedRowIds, row.id, value, (_opts$selectChildren = opts == null ? void 0 : opts.selectChildren) != null ? _opts$selectChildren : true, table);
                return selectedRowIds;
            });
        };
        row.getIsSelected = ()=>{
            const { rowSelection } = table.getState();
            return isRowSelected(row, rowSelection);
        };
        row.getIsSomeSelected = ()=>{
            const { rowSelection } = table.getState();
            return isSubRowSelected(row, rowSelection) === 'some';
        };
        row.getIsAllSubRowsSelected = ()=>{
            const { rowSelection } = table.getState();
            return isSubRowSelected(row, rowSelection) === 'all';
        };
        row.getCanSelect = ()=>{
            var _table$options$enable;
            if (typeof table.options.enableRowSelection === 'function') {
                return table.options.enableRowSelection(row);
            }
            return (_table$options$enable = table.options.enableRowSelection) != null ? _table$options$enable : true;
        };
        row.getCanSelectSubRows = ()=>{
            var _table$options$enable2;
            if (typeof table.options.enableSubRowSelection === 'function') {
                return table.options.enableSubRowSelection(row);
            }
            return (_table$options$enable2 = table.options.enableSubRowSelection) != null ? _table$options$enable2 : true;
        };
        row.getCanMultiSelect = ()=>{
            var _table$options$enable3;
            if (typeof table.options.enableMultiRowSelection === 'function') {
                return table.options.enableMultiRowSelection(row);
            }
            return (_table$options$enable3 = table.options.enableMultiRowSelection) != null ? _table$options$enable3 : true;
        };
        row.getToggleSelectedHandler = ()=>{
            const canSelect = row.getCanSelect();
            return (e)=>{
                var _target;
                if (!canSelect) return;
                row.toggleSelected((_target = e.target) == null ? void 0 : _target.checked);
            };
        };
    }
};
const mutateRowIsSelected = (selectedRowIds, id, value, includeChildren, table)=>{
    var _row$subRows;
    const row = table.getRow(id, true);
    // const isGrouped = row.getIsGrouped()
    // if ( // TODO: enforce grouping row selection rules
    //   !isGrouped ||
    //   (isGrouped && table.options.enableGroupingRowSelection)
    // ) {
    if (value) {
        if (!row.getCanMultiSelect()) {
            Object.keys(selectedRowIds).forEach((key)=>delete selectedRowIds[key]);
        }
        if (row.getCanSelect()) {
            selectedRowIds[id] = true;
        }
    } else {
        delete selectedRowIds[id];
    }
    // }
    if (includeChildren && (_row$subRows = row.subRows) != null && _row$subRows.length && row.getCanSelectSubRows()) {
        row.subRows.forEach((row)=>mutateRowIsSelected(selectedRowIds, row.id, value, includeChildren, table));
    }
};
function selectRowsFn(table, rowModel) {
    const rowSelection = table.getState().rowSelection;
    const newSelectedFlatRows = [];
    const newSelectedRowsById = {};
    // Filters top level and nested rows
    const recurseRows = function(rows, depth) {
        return rows.map((row)=>{
            var _row$subRows2;
            const isSelected = isRowSelected(row, rowSelection);
            if (isSelected) {
                newSelectedFlatRows.push(row);
                newSelectedRowsById[row.id] = row;
            }
            if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length) {
                row = {
                    ...row,
                    subRows: recurseRows(row.subRows)
                };
            }
            if (isSelected) {
                return row;
            }
        }).filter(Boolean);
    };
    return {
        rows: recurseRows(rowModel.rows),
        flatRows: newSelectedFlatRows,
        rowsById: newSelectedRowsById
    };
}
function isRowSelected(row, selection) {
    var _selection$row$id;
    return (_selection$row$id = selection[row.id]) != null ? _selection$row$id : false;
}
function isSubRowSelected(row, selection, table) {
    var _row$subRows3;
    if (!((_row$subRows3 = row.subRows) != null && _row$subRows3.length)) return false;
    let allChildrenSelected = true;
    let someSelected = false;
    row.subRows.forEach((subRow)=>{
        // Bail out early if we know both of these
        if (someSelected && !allChildrenSelected) {
            return;
        }
        if (subRow.getCanSelect()) {
            if (isRowSelected(subRow, selection)) {
                someSelected = true;
            } else {
                allChildrenSelected = false;
            }
        }
        // Check row selection of nested subrows
        if (subRow.subRows && subRow.subRows.length) {
            const subRowChildrenSelected = isSubRowSelected(subRow, selection);
            if (subRowChildrenSelected === 'all') {
                someSelected = true;
            } else if (subRowChildrenSelected === 'some') {
                someSelected = true;
                allChildrenSelected = false;
            } else {
                allChildrenSelected = false;
            }
        }
    });
    return allChildrenSelected ? 'all' : someSelected ? 'some' : false;
}
const reSplitAlphaNumeric = /([0-9]+)/gm;
const alphanumeric = (rowA, rowB, columnId)=>{
    return compareAlphanumeric(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};
const alphanumericCaseSensitive = (rowA, rowB, columnId)=>{
    return compareAlphanumeric(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};
// The text filter is more basic (less numeric support)
// but is much faster
const text = (rowA, rowB, columnId)=>{
    return compareBasic(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};
// The text filter is more basic (less numeric support)
// but is much faster
const textCaseSensitive = (rowA, rowB, columnId)=>{
    return compareBasic(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};
const datetime = (rowA, rowB, columnId)=>{
    const a = rowA.getValue(columnId);
    const b = rowB.getValue(columnId);
    // Can handle nullish values
    // Use > and < because == (and ===) doesn't work with
    // Date objects (would require calling getTime()).
    return a > b ? 1 : a < b ? -1 : 0;
};
const basic = (rowA, rowB, columnId)=>{
    return compareBasic(rowA.getValue(columnId), rowB.getValue(columnId));
};
// Utils
function compareBasic(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function toString(a) {
    if (typeof a === 'number') {
        if (isNaN(a) || a === Infinity || a === -Infinity) {
            return '';
        }
        return String(a);
    }
    if (typeof a === 'string') {
        return a;
    }
    return '';
}
// Mixed sorting is slow, but very inclusive of many edge cases.
// It handles numbers, mixed alphanumeric combinations, and even
// null, undefined, and Infinity
function compareAlphanumeric(aStr, bStr) {
    // Split on number groups, but keep the delimiter
    // Then remove falsey split values
    const a = aStr.split(reSplitAlphaNumeric).filter(Boolean);
    const b = bStr.split(reSplitAlphaNumeric).filter(Boolean);
    // While
    while(a.length && b.length){
        const aa = a.shift();
        const bb = b.shift();
        const an = parseInt(aa, 10);
        const bn = parseInt(bb, 10);
        const combo = [
            an,
            bn
        ].sort();
        // Both are string
        if (isNaN(combo[0])) {
            if (aa > bb) {
                return 1;
            }
            if (bb > aa) {
                return -1;
            }
            continue;
        }
        // One is a string, one is a number
        if (isNaN(combo[1])) {
            return isNaN(an) ? -1 : 1;
        }
        // Both are numbers
        if (an > bn) {
            return 1;
        }
        if (bn > an) {
            return -1;
        }
    }
    return a.length - b.length;
}
// Exports
const sortingFns = {
    alphanumeric,
    alphanumericCaseSensitive,
    text,
    textCaseSensitive,
    datetime,
    basic
};
//
const RowSorting = {
    getInitialState: (state)=>{
        return {
            sorting: [],
            ...state
        };
    },
    getDefaultColumnDef: ()=>{
        return {
            sortingFn: 'auto',
            sortUndefined: 1
        };
    },
    getDefaultOptions: (table)=>{
        return {
            onSortingChange: makeStateUpdater('sorting', table),
            isMultiSortEvent: (e)=>{
                return e.shiftKey;
            }
        };
    },
    createColumn: (column, table)=>{
        column.getAutoSortingFn = ()=>{
            const firstRows = table.getFilteredRowModel().flatRows.slice(10);
            let isString = false;
            for (const row of firstRows){
                const value = row == null ? void 0 : row.getValue(column.id);
                if (Object.prototype.toString.call(value) === '[object Date]') {
                    return sortingFns.datetime;
                }
                if (typeof value === 'string') {
                    isString = true;
                    if (value.split(reSplitAlphaNumeric).length > 1) {
                        return sortingFns.alphanumeric;
                    }
                }
            }
            if (isString) {
                return sortingFns.text;
            }
            return sortingFns.basic;
        };
        column.getAutoSortDir = ()=>{
            const firstRow = table.getFilteredRowModel().flatRows[0];
            const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
            if (typeof value === 'string') {
                return 'asc';
            }
            return 'desc';
        };
        column.getSortingFn = ()=>{
            var _table$options$sortin, _table$options$sortin2;
            if (!column) {
                throw new Error();
            }
            return isFunction(column.columnDef.sortingFn) ? column.columnDef.sortingFn : column.columnDef.sortingFn === 'auto' ? column.getAutoSortingFn() : (_table$options$sortin = (_table$options$sortin2 = table.options.sortingFns) == null ? void 0 : _table$options$sortin2[column.columnDef.sortingFn]) != null ? _table$options$sortin : sortingFns[column.columnDef.sortingFn];
        };
        column.toggleSorting = (desc, multi)=>{
            // if (column.columns.length) {
            //   column.columns.forEach((c, i) => {
            //     if (c.id) {
            //       table.toggleColumnSorting(c.id, undefined, multi || !!i)
            //     }
            //   })
            //   return
            // }
            // this needs to be outside of table.setSorting to be in sync with rerender
            const nextSortingOrder = column.getNextSortingOrder();
            const hasManualValue = typeof desc !== 'undefined' && desc !== null;
            table.setSorting((old)=>{
                // Find any existing sorting for this column
                const existingSorting = old == null ? void 0 : old.find((d)=>d.id === column.id);
                const existingIndex = old == null ? void 0 : old.findIndex((d)=>d.id === column.id);
                let newSorting = [];
                // What should we do with this sort action?
                let sortAction;
                let nextDesc = hasManualValue ? desc : nextSortingOrder === 'desc';
                // Multi-mode
                if (old != null && old.length && column.getCanMultiSort() && multi) {
                    if (existingSorting) {
                        sortAction = 'toggle';
                    } else {
                        sortAction = 'add';
                    }
                } else {
                    // Normal mode
                    if (old != null && old.length && existingIndex !== old.length - 1) {
                        sortAction = 'replace';
                    } else if (existingSorting) {
                        sortAction = 'toggle';
                    } else {
                        sortAction = 'replace';
                    }
                }
                // Handle toggle states that will remove the sorting
                if (sortAction === 'toggle') {
                    // If we are "actually" toggling (not a manual set value), should we remove the sorting?
                    if (!hasManualValue) {
                        // Is our intention to remove?
                        if (!nextSortingOrder) {
                            sortAction = 'remove';
                        }
                    }
                }
                if (sortAction === 'add') {
                    var _table$options$maxMul;
                    newSorting = [
                        ...old,
                        {
                            id: column.id,
                            desc: nextDesc
                        }
                    ];
                    // Take latest n columns
                    newSorting.splice(0, newSorting.length - ((_table$options$maxMul = table.options.maxMultiSortColCount) != null ? _table$options$maxMul : Number.MAX_SAFE_INTEGER));
                } else if (sortAction === 'toggle') {
                    // This flips (or sets) the
                    newSorting = old.map((d)=>{
                        if (d.id === column.id) {
                            return {
                                ...d,
                                desc: nextDesc
                            };
                        }
                        return d;
                    });
                } else if (sortAction === 'remove') {
                    newSorting = old.filter((d)=>d.id !== column.id);
                } else {
                    newSorting = [
                        {
                            id: column.id,
                            desc: nextDesc
                        }
                    ];
                }
                return newSorting;
            });
        };
        column.getFirstSortDir = ()=>{
            var _ref, _column$columnDef$sor;
            const sortDescFirst = (_ref = (_column$columnDef$sor = column.columnDef.sortDescFirst) != null ? _column$columnDef$sor : table.options.sortDescFirst) != null ? _ref : column.getAutoSortDir() === 'desc';
            return sortDescFirst ? 'desc' : 'asc';
        };
        column.getNextSortingOrder = (multi)=>{
            var _table$options$enable, _table$options$enable2;
            const firstSortDirection = column.getFirstSortDir();
            const isSorted = column.getIsSorted();
            if (!isSorted) {
                return firstSortDirection;
            }
            if (isSorted !== firstSortDirection && ((_table$options$enable = table.options.enableSortingRemoval) != null ? _table$options$enable : true) && (// If enableSortRemove, enable in general
            multi ? (_table$options$enable2 = table.options.enableMultiRemove) != null ? _table$options$enable2 : true : true) // If multi, don't allow if enableMultiRemove))
            ) {
                return false;
            }
            return isSorted === 'desc' ? 'asc' : 'desc';
        };
        column.getCanSort = ()=>{
            var _column$columnDef$ena, _table$options$enable3;
            return ((_column$columnDef$ena = column.columnDef.enableSorting) != null ? _column$columnDef$ena : true) && ((_table$options$enable3 = table.options.enableSorting) != null ? _table$options$enable3 : true) && !!column.accessorFn;
        };
        column.getCanMultiSort = ()=>{
            var _ref2, _column$columnDef$ena2;
            return (_ref2 = (_column$columnDef$ena2 = column.columnDef.enableMultiSort) != null ? _column$columnDef$ena2 : table.options.enableMultiSort) != null ? _ref2 : !!column.accessorFn;
        };
        column.getIsSorted = ()=>{
            var _table$getState$sorti;
            const columnSort = (_table$getState$sorti = table.getState().sorting) == null ? void 0 : _table$getState$sorti.find((d)=>d.id === column.id);
            return !columnSort ? false : columnSort.desc ? 'desc' : 'asc';
        };
        column.getSortIndex = ()=>{
            var _table$getState$sorti2, _table$getState$sorti3;
            return (_table$getState$sorti2 = (_table$getState$sorti3 = table.getState().sorting) == null ? void 0 : _table$getState$sorti3.findIndex((d)=>d.id === column.id)) != null ? _table$getState$sorti2 : -1;
        };
        column.clearSorting = ()=>{
            //clear sorting for just 1 column
            table.setSorting((old)=>old != null && old.length ? old.filter((d)=>d.id !== column.id) : []);
        };
        column.getToggleSortingHandler = ()=>{
            const canSort = column.getCanSort();
            return (e)=>{
                if (!canSort) return;
                e.persist == null || e.persist();
                column.toggleSorting == null || column.toggleSorting(undefined, column.getCanMultiSort() ? table.options.isMultiSortEvent == null ? void 0 : table.options.isMultiSortEvent(e) : false);
            };
        };
    },
    createTable: (table)=>{
        table.setSorting = (updater)=>table.options.onSortingChange == null ? void 0 : table.options.onSortingChange(updater);
        table.resetSorting = (defaultState)=>{
            var _table$initialState$s, _table$initialState;
            table.setSorting(defaultState ? [] : (_table$initialState$s = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.sorting) != null ? _table$initialState$s : []);
        };
        table.getPreSortedRowModel = ()=>table.getGroupedRowModel();
        table.getSortedRowModel = ()=>{
            if (!table._getSortedRowModel && table.options.getSortedRowModel) {
                table._getSortedRowModel = table.options.getSortedRowModel(table);
            }
            if (table.options.manualSorting || !table._getSortedRowModel) {
                return table.getPreSortedRowModel();
            }
            return table._getSortedRowModel();
        };
    }
};
const builtInFeatures = [
    Headers,
    ColumnVisibility,
    ColumnOrdering,
    ColumnPinning,
    ColumnFaceting,
    ColumnFiltering,
    GlobalFaceting,
    //depends on ColumnFaceting
    GlobalFiltering,
    //depends on ColumnFiltering
    RowSorting,
    ColumnGrouping,
    //depends on RowSorting
    RowExpanding,
    RowPagination,
    RowPinning,
    RowSelection,
    ColumnSizing
];
//
function createTable(options) {
    var _options$_features, _options$initialState;
    if (("TURBOPACK compile-time value", "development") !== 'production' && (options.debugAll || options.debugTable)) {
        console.info('Creating Table Instance...');
    }
    const _features = [
        ...builtInFeatures,
        ...(_options$_features = options._features) != null ? _options$_features : []
    ];
    let table = {
        _features
    };
    const defaultOptions = table._features.reduce((obj, feature)=>{
        return Object.assign(obj, feature.getDefaultOptions == null ? void 0 : feature.getDefaultOptions(table));
    }, {});
    const mergeOptions = (options)=>{
        if (table.options.mergeOptions) {
            return table.options.mergeOptions(defaultOptions, options);
        }
        return {
            ...defaultOptions,
            ...options
        };
    };
    const coreInitialState = {};
    let initialState = {
        ...coreInitialState,
        ...(_options$initialState = options.initialState) != null ? _options$initialState : {}
    };
    table._features.forEach((feature)=>{
        var _feature$getInitialSt;
        initialState = (_feature$getInitialSt = feature.getInitialState == null ? void 0 : feature.getInitialState(initialState)) != null ? _feature$getInitialSt : initialState;
    });
    const queued = [];
    let queuedTimeout = false;
    const coreInstance = {
        _features,
        options: {
            ...defaultOptions,
            ...options
        },
        initialState,
        _queue: (cb)=>{
            queued.push(cb);
            if (!queuedTimeout) {
                queuedTimeout = true;
                // Schedule a microtask to run the queued callbacks after
                // the current call stack (render, etc) has finished.
                Promise.resolve().then(()=>{
                    while(queued.length){
                        queued.shift()();
                    }
                    queuedTimeout = false;
                }).catch((error)=>setTimeout(()=>{
                        throw error;
                    }));
            }
        },
        reset: ()=>{
            table.setState(table.initialState);
        },
        setOptions: (updater)=>{
            const newOptions = functionalUpdate(updater, table.options);
            table.options = mergeOptions(newOptions);
        },
        getState: ()=>{
            return table.options.state;
        },
        setState: (updater)=>{
            table.options.onStateChange == null || table.options.onStateChange(updater);
        },
        _getRowId: (row, index, parent)=>{
            var _table$options$getRow;
            return (_table$options$getRow = table.options.getRowId == null ? void 0 : table.options.getRowId(row, index, parent)) != null ? _table$options$getRow : `${parent ? [
                parent.id,
                index
            ].join('.') : index}`;
        },
        getCoreRowModel: ()=>{
            if (!table._getCoreRowModel) {
                table._getCoreRowModel = table.options.getCoreRowModel(table);
            }
            return table._getCoreRowModel();
        },
        // The final calls start at the bottom of the model,
        // expanded rows, which then work their way up
        getRowModel: ()=>{
            return table.getPaginationRowModel();
        },
        //in next version, we should just pass in the row model as the optional 2nd arg
        getRow: (id, searchAll)=>{
            let row = (searchAll ? table.getPrePaginationRowModel() : table.getRowModel()).rowsById[id];
            if (!row) {
                row = table.getCoreRowModel().rowsById[id];
                if (!row) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        throw new Error(`getRow could not find row with ID: ${id}`);
                    }
                    throw new Error();
                }
            }
            return row;
        },
        _getDefaultColumnDef: memo(()=>[
                table.options.defaultColumn
            ], (defaultColumn)=>{
            var _defaultColumn;
            defaultColumn = (_defaultColumn = defaultColumn) != null ? _defaultColumn : {};
            return {
                header: (props)=>{
                    const resolvedColumnDef = props.header.column.columnDef;
                    if (resolvedColumnDef.accessorKey) {
                        return resolvedColumnDef.accessorKey;
                    }
                    if (resolvedColumnDef.accessorFn) {
                        return resolvedColumnDef.id;
                    }
                    return null;
                },
                // footer: props => props.header.column.id,
                cell: (props)=>{
                    var _props$renderValue$to, _props$renderValue;
                    return (_props$renderValue$to = (_props$renderValue = props.renderValue()) == null || _props$renderValue.toString == null ? void 0 : _props$renderValue.toString()) != null ? _props$renderValue$to : null;
                },
                ...table._features.reduce((obj, feature)=>{
                    return Object.assign(obj, feature.getDefaultColumnDef == null ? void 0 : feature.getDefaultColumnDef());
                }, {}),
                ...defaultColumn
            };
        }, getMemoOptions(options, 'debugColumns', '_getDefaultColumnDef')),
        _getColumnDefs: ()=>table.options.columns,
        getAllColumns: memo(()=>[
                table._getColumnDefs()
            ], (columnDefs)=>{
            const recurseColumns = function(columnDefs, parent, depth) {
                if (depth === void 0) {
                    depth = 0;
                }
                return columnDefs.map((columnDef)=>{
                    const column = createColumn(table, columnDef, depth, parent);
                    const groupingColumnDef = columnDef;
                    column.columns = groupingColumnDef.columns ? recurseColumns(groupingColumnDef.columns, column, depth + 1) : [];
                    return column;
                });
            };
            return recurseColumns(columnDefs);
        }, getMemoOptions(options, 'debugColumns', 'getAllColumns')),
        getAllFlatColumns: memo(()=>[
                table.getAllColumns()
            ], (allColumns)=>{
            return allColumns.flatMap((column)=>{
                return column.getFlatColumns();
            });
        }, getMemoOptions(options, 'debugColumns', 'getAllFlatColumns')),
        _getAllFlatColumnsById: memo(()=>[
                table.getAllFlatColumns()
            ], (flatColumns)=>{
            return flatColumns.reduce((acc, column)=>{
                acc[column.id] = column;
                return acc;
            }, {});
        }, getMemoOptions(options, 'debugColumns', 'getAllFlatColumnsById')),
        getAllLeafColumns: memo(()=>[
                table.getAllColumns(),
                table._getOrderColumnsFn()
            ], (allColumns, orderColumns)=>{
            let leafColumns = allColumns.flatMap((column)=>column.getLeafColumns());
            return orderColumns(leafColumns);
        }, getMemoOptions(options, 'debugColumns', 'getAllLeafColumns')),
        getColumn: (columnId)=>{
            const column = table._getAllFlatColumnsById()[columnId];
            if (("TURBOPACK compile-time value", "development") !== 'production' && !column) {
                console.error(`[Table] Column with id '${columnId}' does not exist.`);
            }
            return column;
        }
    };
    Object.assign(table, coreInstance);
    for(let index = 0; index < table._features.length; index++){
        const feature = table._features[index];
        feature == null || feature.createTable == null || feature.createTable(table);
    }
    return table;
}
function getCoreRowModel() {
    return (table)=>memo(()=>[
                table.options.data
            ], (data)=>{
            const rowModel = {
                rows: [],
                flatRows: [],
                rowsById: {}
            };
            const accessRows = function(originalRows, depth, parentRow) {
                if (depth === void 0) {
                    depth = 0;
                }
                const rows = [];
                for(let i = 0; i < originalRows.length; i++){
                    // This could be an expensive check at scale, so we should move it somewhere else, but where?
                    // if (!id) {
                    //   if (process.env.NODE_ENV !== 'production') {
                    //     throw new Error(`getRowId expected an ID, but got ${id}`)
                    //   }
                    // }
                    // Make the row
                    const row = createRow(table, table._getRowId(originalRows[i], i, parentRow), originalRows[i], i, depth, undefined, parentRow == null ? void 0 : parentRow.id);
                    // Keep track of every row in a flat array
                    rowModel.flatRows.push(row);
                    // Also keep track of every row by its ID
                    rowModel.rowsById[row.id] = row;
                    // Push table row into parent
                    rows.push(row);
                    // Get the original subrows
                    if (table.options.getSubRows) {
                        var _row$originalSubRows;
                        row.originalSubRows = table.options.getSubRows(originalRows[i], i);
                        // Then recursively access them
                        if ((_row$originalSubRows = row.originalSubRows) != null && _row$originalSubRows.length) {
                            row.subRows = accessRows(row.originalSubRows, depth + 1, row);
                        }
                    }
                }
                return rows;
            };
            rowModel.rows = accessRows(data);
            return rowModel;
        }, getMemoOptions(table.options, 'debugTable', 'getRowModel', ()=>table._autoResetPageIndex()));
}
function getExpandedRowModel() {
    return (table)=>memo(()=>[
                table.getState().expanded,
                table.getPreExpandedRowModel(),
                table.options.paginateExpandedRows
            ], (expanded, rowModel, paginateExpandedRows)=>{
            if (!rowModel.rows.length || expanded !== true && !Object.keys(expanded != null ? expanded : {}).length) {
                return rowModel;
            }
            if (!paginateExpandedRows) {
                // Only expand rows at this point if they are being paginated
                return rowModel;
            }
            return expandRows(rowModel);
        }, getMemoOptions(table.options, 'debugTable', 'getExpandedRowModel'));
}
function expandRows(rowModel) {
    const expandedRows = [];
    const handleRow = (row)=>{
        var _row$subRows;
        expandedRows.push(row);
        if ((_row$subRows = row.subRows) != null && _row$subRows.length && row.getIsExpanded()) {
            row.subRows.forEach(handleRow);
        }
    };
    rowModel.rows.forEach(handleRow);
    return {
        rows: expandedRows,
        flatRows: rowModel.flatRows,
        rowsById: rowModel.rowsById
    };
}
function getFacetedMinMaxValues() {
    return (table, columnId)=>memo(()=>{
            var _table$getColumn;
            return [
                (_table$getColumn = table.getColumn(columnId)) == null ? void 0 : _table$getColumn.getFacetedRowModel()
            ];
        }, (facetedRowModel)=>{
            if (!facetedRowModel) return undefined;
            const uniqueValues = facetedRowModel.flatRows.flatMap((flatRow)=>{
                var _flatRow$getUniqueVal;
                return (_flatRow$getUniqueVal = flatRow.getUniqueValues(columnId)) != null ? _flatRow$getUniqueVal : [];
            }).map(Number).filter((value)=>!Number.isNaN(value));
            if (!uniqueValues.length) return;
            let facetedMinValue = uniqueValues[0];
            let facetedMaxValue = uniqueValues[uniqueValues.length - 1];
            for (const value of uniqueValues){
                if (value < facetedMinValue) facetedMinValue = value;
                else if (value > facetedMaxValue) facetedMaxValue = value;
            }
            return [
                facetedMinValue,
                facetedMaxValue
            ];
        }, getMemoOptions(table.options, 'debugTable', 'getFacetedMinMaxValues'));
}
function filterRows(rows, filterRowImpl, table) {
    if (table.options.filterFromLeafRows) {
        return filterRowModelFromLeafs(rows, filterRowImpl, table);
    }
    return filterRowModelFromRoot(rows, filterRowImpl, table);
}
function filterRowModelFromLeafs(rowsToFilter, filterRow, table) {
    var _table$options$maxLea;
    const newFilteredFlatRows = [];
    const newFilteredRowsById = {};
    const maxDepth = (_table$options$maxLea = table.options.maxLeafRowFilterDepth) != null ? _table$options$maxLea : 100;
    const recurseFilterRows = function(rowsToFilter, depth) {
        if (depth === void 0) {
            depth = 0;
        }
        const rows = [];
        // Filter from children up first
        for(let i = 0; i < rowsToFilter.length; i++){
            var _row$subRows;
            let row = rowsToFilter[i];
            const newRow = createRow(table, row.id, row.original, row.index, row.depth, undefined, row.parentId);
            newRow.columnFilters = row.columnFilters;
            if ((_row$subRows = row.subRows) != null && _row$subRows.length && depth < maxDepth) {
                newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
                row = newRow;
                if (filterRow(row) && !newRow.subRows.length) {
                    rows.push(row);
                    newFilteredRowsById[row.id] = row;
                    newFilteredFlatRows.push(row);
                    continue;
                }
                if (filterRow(row) || newRow.subRows.length) {
                    rows.push(row);
                    newFilteredRowsById[row.id] = row;
                    newFilteredFlatRows.push(row);
                    continue;
                }
            } else {
                row = newRow;
                if (filterRow(row)) {
                    rows.push(row);
                    newFilteredRowsById[row.id] = row;
                    newFilteredFlatRows.push(row);
                }
            }
        }
        return rows;
    };
    return {
        rows: recurseFilterRows(rowsToFilter),
        flatRows: newFilteredFlatRows,
        rowsById: newFilteredRowsById
    };
}
function filterRowModelFromRoot(rowsToFilter, filterRow, table) {
    var _table$options$maxLea2;
    const newFilteredFlatRows = [];
    const newFilteredRowsById = {};
    const maxDepth = (_table$options$maxLea2 = table.options.maxLeafRowFilterDepth) != null ? _table$options$maxLea2 : 100;
    // Filters top level and nested rows
    const recurseFilterRows = function(rowsToFilter, depth) {
        if (depth === void 0) {
            depth = 0;
        }
        // Filter from parents downward first
        const rows = [];
        // Apply the filter to any subRows
        for(let i = 0; i < rowsToFilter.length; i++){
            let row = rowsToFilter[i];
            const pass = filterRow(row);
            if (pass) {
                var _row$subRows2;
                if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length && depth < maxDepth) {
                    const newRow = createRow(table, row.id, row.original, row.index, row.depth, undefined, row.parentId);
                    newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
                    row = newRow;
                }
                rows.push(row);
                newFilteredFlatRows.push(row);
                newFilteredRowsById[row.id] = row;
            }
        }
        return rows;
    };
    return {
        rows: recurseFilterRows(rowsToFilter),
        flatRows: newFilteredFlatRows,
        rowsById: newFilteredRowsById
    };
}
function getFacetedRowModel() {
    return (table, columnId)=>memo(()=>[
                table.getPreFilteredRowModel(),
                table.getState().columnFilters,
                table.getState().globalFilter,
                table.getFilteredRowModel()
            ], (preRowModel, columnFilters, globalFilter)=>{
            if (!preRowModel.rows.length || !(columnFilters != null && columnFilters.length) && !globalFilter) {
                return preRowModel;
            }
            const filterableIds = [
                ...columnFilters.map((d)=>d.id).filter((d)=>d !== columnId),
                globalFilter ? '__global__' : undefined
            ].filter(Boolean);
            const filterRowsImpl = (row)=>{
                // Horizontally filter rows through each column
                for(let i = 0; i < filterableIds.length; i++){
                    if (row.columnFilters[filterableIds[i]] === false) {
                        return false;
                    }
                }
                return true;
            };
            return filterRows(preRowModel.rows, filterRowsImpl, table);
        }, getMemoOptions(table.options, 'debugTable', 'getFacetedRowModel'));
}
function getFacetedUniqueValues() {
    return (table, columnId)=>memo(()=>{
            var _table$getColumn;
            return [
                (_table$getColumn = table.getColumn(columnId)) == null ? void 0 : _table$getColumn.getFacetedRowModel()
            ];
        }, (facetedRowModel)=>{
            if (!facetedRowModel) return new Map();
            let facetedUniqueValues = new Map();
            for(let i = 0; i < facetedRowModel.flatRows.length; i++){
                const values = facetedRowModel.flatRows[i].getUniqueValues(columnId);
                for(let j = 0; j < values.length; j++){
                    const value = values[j];
                    if (facetedUniqueValues.has(value)) {
                        var _facetedUniqueValues$;
                        facetedUniqueValues.set(value, ((_facetedUniqueValues$ = facetedUniqueValues.get(value)) != null ? _facetedUniqueValues$ : 0) + 1);
                    } else {
                        facetedUniqueValues.set(value, 1);
                    }
                }
            }
            return facetedUniqueValues;
        }, getMemoOptions(table.options, 'debugTable', `getFacetedUniqueValues_${columnId}`));
}
function getFilteredRowModel() {
    return (table)=>memo(()=>[
                table.getPreFilteredRowModel(),
                table.getState().columnFilters,
                table.getState().globalFilter
            ], (rowModel, columnFilters, globalFilter)=>{
            if (!rowModel.rows.length || !(columnFilters != null && columnFilters.length) && !globalFilter) {
                for(let i = 0; i < rowModel.flatRows.length; i++){
                    rowModel.flatRows[i].columnFilters = {};
                    rowModel.flatRows[i].columnFiltersMeta = {};
                }
                return rowModel;
            }
            const resolvedColumnFilters = [];
            const resolvedGlobalFilters = [];
            (columnFilters != null ? columnFilters : []).forEach((d)=>{
                var _filterFn$resolveFilt;
                const column = table.getColumn(d.id);
                if (!column) {
                    return;
                }
                const filterFn = column.getFilterFn();
                if (!filterFn) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${column.id}.`);
                    }
                    return;
                }
                resolvedColumnFilters.push({
                    id: d.id,
                    filterFn,
                    resolvedValue: (_filterFn$resolveFilt = filterFn.resolveFilterValue == null ? void 0 : filterFn.resolveFilterValue(d.value)) != null ? _filterFn$resolveFilt : d.value
                });
            });
            const filterableIds = (columnFilters != null ? columnFilters : []).map((d)=>d.id);
            const globalFilterFn = table.getGlobalFilterFn();
            const globallyFilterableColumns = table.getAllLeafColumns().filter((column)=>column.getCanGlobalFilter());
            if (globalFilter && globalFilterFn && globallyFilterableColumns.length) {
                filterableIds.push('__global__');
                globallyFilterableColumns.forEach((column)=>{
                    var _globalFilterFn$resol;
                    resolvedGlobalFilters.push({
                        id: column.id,
                        filterFn: globalFilterFn,
                        resolvedValue: (_globalFilterFn$resol = globalFilterFn.resolveFilterValue == null ? void 0 : globalFilterFn.resolveFilterValue(globalFilter)) != null ? _globalFilterFn$resol : globalFilter
                    });
                });
            }
            let currentColumnFilter;
            let currentGlobalFilter;
            // Flag the prefiltered row model with each filter state
            for(let j = 0; j < rowModel.flatRows.length; j++){
                const row = rowModel.flatRows[j];
                row.columnFilters = {};
                if (resolvedColumnFilters.length) {
                    for(let i = 0; i < resolvedColumnFilters.length; i++){
                        currentColumnFilter = resolvedColumnFilters[i];
                        const id = currentColumnFilter.id;
                        // Tag the row with the column filter state
                        row.columnFilters[id] = currentColumnFilter.filterFn(row, id, currentColumnFilter.resolvedValue, (filterMeta)=>{
                            row.columnFiltersMeta[id] = filterMeta;
                        });
                    }
                }
                if (resolvedGlobalFilters.length) {
                    for(let i = 0; i < resolvedGlobalFilters.length; i++){
                        currentGlobalFilter = resolvedGlobalFilters[i];
                        const id = currentGlobalFilter.id;
                        // Tag the row with the first truthy global filter state
                        if (currentGlobalFilter.filterFn(row, id, currentGlobalFilter.resolvedValue, (filterMeta)=>{
                            row.columnFiltersMeta[id] = filterMeta;
                        })) {
                            row.columnFilters.__global__ = true;
                            break;
                        }
                    }
                    if (row.columnFilters.__global__ !== true) {
                        row.columnFilters.__global__ = false;
                    }
                }
            }
            const filterRowsImpl = (row)=>{
                // Horizontally filter rows through each column
                for(let i = 0; i < filterableIds.length; i++){
                    if (row.columnFilters[filterableIds[i]] === false) {
                        return false;
                    }
                }
                return true;
            };
            // Filter final rows using all of the active filters
            return filterRows(rowModel.rows, filterRowsImpl, table);
        }, getMemoOptions(table.options, 'debugTable', 'getFilteredRowModel', ()=>table._autoResetPageIndex()));
}
function getGroupedRowModel() {
    return (table)=>memo(()=>[
                table.getState().grouping,
                table.getPreGroupedRowModel()
            ], (grouping, rowModel)=>{
            if (!rowModel.rows.length || !grouping.length) {
                rowModel.rows.forEach((row)=>{
                    row.depth = 0;
                    row.parentId = undefined;
                });
                return rowModel;
            }
            // Filter the grouping list down to columns that exist
            const existingGrouping = grouping.filter((columnId)=>table.getColumn(columnId));
            const groupedFlatRows = [];
            const groupedRowsById = {};
            // const onlyGroupedFlatRows: Row[] = [];
            // const onlyGroupedRowsById: Record<RowId, Row> = {};
            // const nonGroupedFlatRows: Row[] = [];
            // const nonGroupedRowsById: Record<RowId, Row> = {};
            // Recursively group the data
            const groupUpRecursively = function(rows, depth, parentId) {
                if (depth === void 0) {
                    depth = 0;
                }
                // Grouping depth has been been met
                // Stop grouping and simply rewrite thd depth and row relationships
                if (depth >= existingGrouping.length) {
                    return rows.map((row)=>{
                        row.depth = depth;
                        groupedFlatRows.push(row);
                        groupedRowsById[row.id] = row;
                        if (row.subRows) {
                            row.subRows = groupUpRecursively(row.subRows, depth + 1, row.id);
                        }
                        return row;
                    });
                }
                const columnId = existingGrouping[depth];
                // Group the rows together for this level
                const rowGroupsMap = groupBy(rows, columnId);
                // Perform aggregations for each group
                const aggregatedGroupedRows = Array.from(rowGroupsMap.entries()).map((_ref, index)=>{
                    let [groupingValue, groupedRows] = _ref;
                    let id = `${columnId}:${groupingValue}`;
                    id = parentId ? `${parentId}>${id}` : id;
                    // First, Recurse to group sub rows before aggregation
                    const subRows = groupUpRecursively(groupedRows, depth + 1, id);
                    subRows.forEach((subRow)=>{
                        subRow.parentId = id;
                    });
                    // Flatten the leaf rows of the rows in this group
                    const leafRows = depth ? flattenBy(groupedRows, (row)=>row.subRows) : groupedRows;
                    const row = createRow(table, id, leafRows[0].original, index, depth, undefined, parentId);
                    Object.assign(row, {
                        groupingColumnId: columnId,
                        groupingValue,
                        subRows,
                        leafRows,
                        getValue: (columnId)=>{
                            // Don't aggregate columns that are in the grouping
                            if (existingGrouping.includes(columnId)) {
                                if (row._valuesCache.hasOwnProperty(columnId)) {
                                    return row._valuesCache[columnId];
                                }
                                if (groupedRows[0]) {
                                    var _groupedRows$0$getVal;
                                    row._valuesCache[columnId] = (_groupedRows$0$getVal = groupedRows[0].getValue(columnId)) != null ? _groupedRows$0$getVal : undefined;
                                }
                                return row._valuesCache[columnId];
                            }
                            if (row._groupingValuesCache.hasOwnProperty(columnId)) {
                                return row._groupingValuesCache[columnId];
                            }
                            // Aggregate the values
                            const column = table.getColumn(columnId);
                            const aggregateFn = column == null ? void 0 : column.getAggregationFn();
                            if (aggregateFn) {
                                row._groupingValuesCache[columnId] = aggregateFn(columnId, leafRows, groupedRows);
                                return row._groupingValuesCache[columnId];
                            }
                        }
                    });
                    subRows.forEach((subRow)=>{
                        groupedFlatRows.push(subRow);
                        groupedRowsById[subRow.id] = subRow;
                    // if (subRow.getIsGrouped?.()) {
                    //   onlyGroupedFlatRows.push(subRow);
                    //   onlyGroupedRowsById[subRow.id] = subRow;
                    // } else {
                    //   nonGroupedFlatRows.push(subRow);
                    //   nonGroupedRowsById[subRow.id] = subRow;
                    // }
                    });
                    return row;
                });
                return aggregatedGroupedRows;
            };
            const groupedRows = groupUpRecursively(rowModel.rows, 0);
            groupedRows.forEach((subRow)=>{
                groupedFlatRows.push(subRow);
                groupedRowsById[subRow.id] = subRow;
            // if (subRow.getIsGrouped?.()) {
            //   onlyGroupedFlatRows.push(subRow);
            //   onlyGroupedRowsById[subRow.id] = subRow;
            // } else {
            //   nonGroupedFlatRows.push(subRow);
            //   nonGroupedRowsById[subRow.id] = subRow;
            // }
            });
            return {
                rows: groupedRows,
                flatRows: groupedFlatRows,
                rowsById: groupedRowsById
            };
        }, getMemoOptions(table.options, 'debugTable', 'getGroupedRowModel', ()=>{
            table._queue(()=>{
                table._autoResetExpanded();
                table._autoResetPageIndex();
            });
        }));
}
function groupBy(rows, columnId) {
    const groupMap = new Map();
    return rows.reduce((map, row)=>{
        const resKey = `${row.getGroupingValue(columnId)}`;
        const previous = map.get(resKey);
        if (!previous) {
            map.set(resKey, [
                row
            ]);
        } else {
            previous.push(row);
        }
        return map;
    }, groupMap);
}
function getPaginationRowModel(opts) {
    return (table)=>memo(()=>[
                table.getState().pagination,
                table.getPrePaginationRowModel(),
                table.options.paginateExpandedRows ? undefined : table.getState().expanded
            ], (pagination, rowModel)=>{
            if (!rowModel.rows.length) {
                return rowModel;
            }
            const { pageSize, pageIndex } = pagination;
            let { rows, flatRows, rowsById } = rowModel;
            const pageStart = pageSize * pageIndex;
            const pageEnd = pageStart + pageSize;
            rows = rows.slice(pageStart, pageEnd);
            let paginatedRowModel;
            if (!table.options.paginateExpandedRows) {
                paginatedRowModel = expandRows({
                    rows,
                    flatRows,
                    rowsById
                });
            } else {
                paginatedRowModel = {
                    rows,
                    flatRows,
                    rowsById
                };
            }
            paginatedRowModel.flatRows = [];
            const handleRow = (row)=>{
                paginatedRowModel.flatRows.push(row);
                if (row.subRows.length) {
                    row.subRows.forEach(handleRow);
                }
            };
            paginatedRowModel.rows.forEach(handleRow);
            return paginatedRowModel;
        }, getMemoOptions(table.options, 'debugTable', 'getPaginationRowModel'));
}
function getSortedRowModel() {
    return (table)=>memo(()=>[
                table.getState().sorting,
                table.getPreSortedRowModel()
            ], (sorting, rowModel)=>{
            if (!rowModel.rows.length || !(sorting != null && sorting.length)) {
                return rowModel;
            }
            const sortingState = table.getState().sorting;
            const sortedFlatRows = [];
            // Filter out sortings that correspond to non existing columns
            const availableSorting = sortingState.filter((sort)=>{
                var _table$getColumn;
                return (_table$getColumn = table.getColumn(sort.id)) == null ? void 0 : _table$getColumn.getCanSort();
            });
            const columnInfoById = {};
            availableSorting.forEach((sortEntry)=>{
                const column = table.getColumn(sortEntry.id);
                if (!column) return;
                columnInfoById[sortEntry.id] = {
                    sortUndefined: column.columnDef.sortUndefined,
                    invertSorting: column.columnDef.invertSorting,
                    sortingFn: column.getSortingFn()
                };
            });
            const sortData = (rows)=>{
                // This will also perform a stable sorting using the row index
                // if needed.
                const sortedData = rows.map((row)=>({
                        ...row
                    }));
                sortedData.sort((rowA, rowB)=>{
                    for(let i = 0; i < availableSorting.length; i += 1){
                        var _sortEntry$desc;
                        const sortEntry = availableSorting[i];
                        const columnInfo = columnInfoById[sortEntry.id];
                        const sortUndefined = columnInfo.sortUndefined;
                        const isDesc = (_sortEntry$desc = sortEntry == null ? void 0 : sortEntry.desc) != null ? _sortEntry$desc : false;
                        let sortInt = 0;
                        // All sorting ints should always return in ascending order
                        if (sortUndefined) {
                            const aValue = rowA.getValue(sortEntry.id);
                            const bValue = rowB.getValue(sortEntry.id);
                            const aUndefined = aValue === undefined;
                            const bUndefined = bValue === undefined;
                            if (aUndefined || bUndefined) {
                                if (sortUndefined === 'first') return aUndefined ? -1 : 1;
                                if (sortUndefined === 'last') return aUndefined ? 1 : -1;
                                sortInt = aUndefined && bUndefined ? 0 : aUndefined ? sortUndefined : -sortUndefined;
                            }
                        }
                        if (sortInt === 0) {
                            sortInt = columnInfo.sortingFn(rowA, rowB, sortEntry.id);
                        }
                        // If sorting is non-zero, take care of desc and inversion
                        if (sortInt !== 0) {
                            if (isDesc) {
                                sortInt *= -1;
                            }
                            if (columnInfo.invertSorting) {
                                sortInt *= -1;
                            }
                            return sortInt;
                        }
                    }
                    return rowA.index - rowB.index;
                });
                // If there are sub-rows, sort them
                sortedData.forEach((row)=>{
                    var _row$subRows;
                    sortedFlatRows.push(row);
                    if ((_row$subRows = row.subRows) != null && _row$subRows.length) {
                        row.subRows = sortData(row.subRows);
                    }
                });
                return sortedData;
            };
            return {
                rows: sortData(rowModel.rows),
                flatRows: sortedFlatRows,
                rowsById: rowModel.rowsById
            };
        }, getMemoOptions(table.options, 'debugTable', 'getSortedRowModel', ()=>table._autoResetPageIndex()));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Hackathon/website/node_modules/@tanstack/react-table/build/lib/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "flexRender",
    ()=>flexRender,
    "useReactTable",
    ()=>useReactTable
]);
/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/table-core/build/lib/index.mjs [app-ssr] (ecmascript)");
;
;
;
//
/**
 * If rendering headers, cells, or footers with custom markup, use flexRender instead of `cell.getValue()` or `cell.renderValue()`.
 */ function flexRender(Comp, props) {
    return !Comp ? null : isReactComponent(Comp) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Comp, props) : Comp;
}
function isReactComponent(component) {
    return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
}
function isClassComponent(component) {
    return typeof component === 'function' && (()=>{
        const proto = Object.getPrototypeOf(component);
        return proto.prototype && proto.prototype.isReactComponent;
    })();
}
function isExoticComponent(component) {
    return typeof component === 'object' && typeof component.$$typeof === 'symbol' && [
        'react.memo',
        'react.forward_ref'
    ].includes(component.$$typeof.description);
}
function useReactTable(options) {
    // Compose in the generic options to the user options
    const resolvedOptions = {
        state: {},
        // Dummy state
        onStateChange: ()=>{},
        // noop
        renderFallbackValue: null,
        ...options
    };
    // Create a new table and store it in state
    const [tableRef] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>({
            current: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTable"])(resolvedOptions)
        }));
    // By default, manage table state here using the table's initial state
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>tableRef.current.initialState);
    // Compose the default state above with any user state. This will allow the user
    // to only control a subset of the state if desired.
    tableRef.current.setOptions((prev)=>({
            ...prev,
            ...options,
            state: {
                ...state,
                ...options.state
            },
            // Similarly, we'll maintain both our internal state and any user-provided
            // state.
            onStateChange: (updater)=>{
                setState(updater);
                options.onStateChange == null || options.onStateChange(updater);
            }
        }));
    return tableRef.current;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Hackathon/website/node_modules/use-debounce/dist/index.module.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebounce",
    ()=>l,
    "useDebouncedCallback",
    ()=>c,
    "useThrottledCallback",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function c(e, u, c, i) {
    var l = this, a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(e), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(!0), x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    h.current = e;
    var b = "undefined" != ("TURBOPACK compile-time value", "undefined"), p = !u && 0 !== u && b;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    u = +u || 0;
    var y = !!(c = c || {}).leading, w = !("trailing" in c) || !!c.trailing, T = !!c.flushOnExit && w, O = "maxWait" in c, F = "debounceOnServer" in c && !!c.debounceOnServer, L = O ? Math.max(+c.maxWait || 0, u) : null, A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        var r = function(r) {
            var n = d.current, t = s.current;
            return d.current = s.current = null, o.current = r, f.current = f.current || r, m.current = h.current.apply(t, n);
        }, n = function(r, n) {
            p && cancelAnimationFrame(v.current), v.current = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : setTimeout(r, n);
        }, t = function(r) {
            if (!g.current) return !1;
            var n = r - a.current;
            return !a.current || n >= u || n < 0 || O && r - o.current >= L;
        }, e = function(n) {
            return v.current = null, w && d.current ? r(n) : (d.current = s.current = null, m.current);
        }, c = function r() {
            var c = Date.now();
            if (y && f.current === o.current && A(), t(c)) return e(c);
            if (g.current) {
                var i = u - (c - a.current), l = O ? Math.min(i, L - (c - o.current)) : i;
                n(r, l);
            }
        }, A = function() {
            i && i({});
        }, D = function() {
            if (b || F) {
                var e, i = Date.now(), f = t(i);
                if (d.current = [].slice.call(arguments), s.current = l, a.current = i, T && !x.current && (x.current = function() {
                    var r;
                    "hidden" === (null == (r = globalThis.document) ? void 0 : r.visibilityState) && E.current.flush();
                }, null == (e = globalThis.document) || null == e.addEventListener || e.addEventListener("visibilitychange", x.current)), f) {
                    if (!v.current && g.current) return o.current = a.current, n(c, u), y ? r(a.current) : m.current;
                    if (O) return n(c, u), r(a.current);
                }
                return v.current || n(c, u), m.current;
            }
        };
        return D.cancel = function() {
            var r = v.current;
            r && (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : clearTimeout(v.current)), o.current = 0, d.current = a.current = s.current = v.current = null, r && i && i({});
        }, D.isPending = function() {
            return !!v.current;
        }, D.flush = function() {
            return v.current ? e(Date.now()) : m.current;
        }, D;
    }, [
        y,
        O,
        u,
        L,
        w,
        T,
        p,
        b,
        F,
        i
    ]);
    return E.current = A, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        return g.current = !0, function() {
            var r;
            T && E.current.flush(), x.current && (null == (r = globalThis.document) || null == r.removeEventListener || r.removeEventListener("visibilitychange", x.current), x.current = null), g.current = !1;
        };
    }, [
        T
    ]), A;
}
function i(r, n) {
    return r === n;
}
function l(n, t, l) {
    var a = l && l.equalityFn || i, o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(n), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({})[1], v = c((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(r) {
        o.current = r, f({});
    }, [
        f
    ]), t, l, f), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(n);
    return a(d.current, n) || (v(n), d.current = n), [
        o.current,
        v
    ];
}
function a(r, n, t) {
    var e = void 0 === t ? {} : t, u = e.leading, i = e.trailing, l = e.flushOnExit;
    return c(r, n, {
        maxWait: n,
        leading: void 0 === u || u,
        trailing: void 0 === i || i,
        flushOnExit: void 0 !== l && l
    });
}
;
 //# sourceMappingURL=index.module.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronLeft
]);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
];
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-left", __iconNode);
;
 //# sourceMappingURL=chevron-left.mjs.map
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-ssr] (ecmascript) <export default as ChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
]);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.mjs.map
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/index.parts.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectFloatingContext",
    ()=>SelectFloatingContext,
    "SelectRootContext",
    ()=>SelectRootContext,
    "useSelectFloatingContext",
    ()=>useSelectFloatingContext,
    "useSelectRootContext",
    ()=>useSelectRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const SelectRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
if ("TURBOPACK compile-time truthy", 1) SelectRootContext.displayName = "SelectRootContext";
const SelectFloatingContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
if ("TURBOPACK compile-time truthy", 1) SelectFloatingContext.displayName = "SelectFloatingContext";
function useSelectRootContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](SelectRootContext);
    if (context === null) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: SelectRootContext is missing. Select parts must be placed within <Select.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
function useSelectFloatingContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](SelectFloatingContext);
    if (context === null) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: SelectFloatingContext is missing. Select parts must be placed within <Select.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/itemEquality.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareItemEquality",
    ()=>compareItemEquality,
    "defaultItemEquality",
    ()=>defaultItemEquality,
    "findItemIndex",
    ()=>findItemIndex,
    "removeItem",
    ()=>removeItem,
    "selectedValueIncludes",
    ()=>selectedValueIncludes
]);
const defaultItemEquality = (itemValue, selectedValue)=>Object.is(itemValue, selectedValue);
function compareItemEquality(itemValue, selectedValue, comparer) {
    if (itemValue == null || selectedValue == null) {
        return Object.is(itemValue, selectedValue);
    }
    return comparer(itemValue, selectedValue);
}
function selectedValueIncludes(selectedValues, itemValue, comparer) {
    if (!selectedValues || selectedValues.length === 0) {
        return false;
    }
    return selectedValues.some((selectedValue)=>{
        if (selectedValue === undefined) {
            return false;
        }
        return compareItemEquality(itemValue, selectedValue, comparer);
    });
}
function findItemIndex(itemValues, selectedValue, comparer) {
    if (!itemValues || itemValues.length === 0) {
        return -1;
    }
    return itemValues.findIndex((itemValue)=>{
        if (itemValue === undefined) {
            return false;
        }
        return compareItemEquality(itemValue, selectedValue, comparer);
    });
}
function removeItem(selectedValues, itemValue, comparer) {
    return selectedValues.filter((selectedValue)=>!compareItemEquality(itemValue, selectedValue, comparer));
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/serializeValue.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serializeValue",
    ()=>serializeValue
]);
function serializeValue(value) {
    if (value == null) {
        return '';
    }
    if (typeof value === 'string') {
        return value;
    }
    try {
        return JSON.stringify(value);
    } catch  {
        return String(value);
    }
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/resolveValueLabel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasNullItemLabel",
    ()=>hasNullItemLabel,
    "isGroupedItems",
    ()=>isGroupedItems,
    "resolveMultipleLabels",
    ()=>resolveMultipleLabels,
    "resolveSelectedLabel",
    ()=>resolveSelectedLabel,
    "stringifyAsLabel",
    ()=>stringifyAsLabel,
    "stringifyAsValue",
    ()=>stringifyAsValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$serializeValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/serializeValue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function isGroupedItems(items) {
    return items != null && items.length > 0 && typeof items[0] === 'object' && items[0] != null && 'items' in items[0];
}
function hasNullItemLabel(items) {
    if (!Array.isArray(items)) {
        return items != null && 'null' in items;
    }
    const arrayItems = items;
    if (isGroupedItems(arrayItems)) {
        for (const group of arrayItems){
            for (const item of group.items){
                if (item && item.value == null && item.label != null) {
                    return true;
                }
            }
        }
        return false;
    }
    for (const item of arrayItems){
        if (item && item.value == null && item.label != null) {
            return true;
        }
    }
    return false;
}
function stringifyAsLabel(item, itemToStringLabel) {
    if (itemToStringLabel && item != null) {
        return itemToStringLabel(item) ?? '';
    }
    if (item && typeof item === 'object') {
        if ('label' in item && item.label != null) {
            return String(item.label);
        }
        if ('value' in item) {
            return String(item.value);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$serializeValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeValue"])(item);
}
function stringifyAsValue(item, itemToStringValue) {
    if (itemToStringValue && item != null) {
        return itemToStringValue(item) ?? '';
    }
    if (item && typeof item === 'object' && 'value' in item && 'label' in item) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$serializeValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeValue"])(item.value);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$serializeValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeValue"])(item);
}
function resolveSelectedLabel(value, items, itemToStringLabel) {
    function fallback() {
        return stringifyAsLabel(value, itemToStringLabel);
    }
    if (itemToStringLabel && value != null) {
        return itemToStringLabel(value);
    }
    // Custom object with explicit label takes precedence
    if (value && typeof value === 'object' && 'label' in value && value.label != null) {
        return value.label;
    }
    // Items provided as plain record map
    if (items && !Array.isArray(items)) {
        return items[value] ?? fallback();
    }
    // Items provided as array (flat or grouped)
    if (Array.isArray(items)) {
        const arrayItems = items;
        const flatItems = isGroupedItems(arrayItems) ? arrayItems.flatMap((group)=>group.items) : arrayItems;
        if (value == null || typeof value !== 'object') {
            const match = flatItems.find((item)=>item.value === value);
            if (match && match.label != null) {
                return match.label;
            }
            return fallback();
        }
        // Object without explicit label: try matching by its `value` property
        if ('value' in value) {
            const match = flatItems.find((item)=>item && item.value === value.value);
            if (match && match.label != null) {
                return match.label;
            }
        }
    }
    return fallback();
}
function resolveMultipleLabels(values, items, itemToStringLabel) {
    return values.reduce((acc, value, index)=>{
        if (index > 0) {
            acc.push(', ');
        }
        acc.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: resolveSelectedLabel(value, items, itemToStringLabel)
        }, index));
        return acc;
    }, []);
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/store.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectors",
    ()=>selectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/createSelector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$itemEquality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/itemEquality.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$resolveValueLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/resolveValueLabel.js [app-ssr] (ecmascript)");
;
;
;
const selectors = {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.id),
    labelId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.labelId),
    modal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.modal),
    multiple: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.multiple),
    items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.items),
    itemToStringLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.itemToStringLabel),
    itemToStringValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.itemToStringValue),
    isItemEqualToValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.isItemEqualToValue),
    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.value),
    hasSelectedValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>{
        const { value, multiple, itemToStringValue } = state;
        if (value == null) {
            return false;
        }
        if (multiple && Array.isArray(value)) {
            return value.length > 0;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$resolveValueLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyAsValue"])(value, itemToStringValue) !== '';
    }),
    hasNullItemLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state, enabled)=>{
        return enabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$resolveValueLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasNullItemLabel"])(state.items) : false;
    }),
    open: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.open),
    mounted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.mounted),
    forceMount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.forceMount),
    transitionStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.transitionStatus),
    openMethod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.openMethod),
    activeIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.activeIndex),
    selectedIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.selectedIndex),
    isActive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state, index)=>state.activeIndex === index),
    isSelected: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state, index, itemValue)=>{
        const comparer = state.isItemEqualToValue;
        const storeValue = state.value;
        if (state.multiple) {
            return Array.isArray(storeValue) && storeValue.some((selectedItem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$itemEquality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareItemEquality"])(itemValue, selectedItem, comparer));
        }
        // `selectedIndex` is only updated after the items mount for the first time,
        // the value check avoids a re-render for the initially selected item.
        if (state.selectedIndex === index && state.selectedIndex !== null) {
            return true;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$itemEquality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareItemEquality"])(itemValue, storeValue, comparer);
    }),
    isSelectedByFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state, index)=>{
        return state.selectedIndex === index;
    }),
    popupProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.popupProps),
    triggerProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.triggerProps),
    triggerElement: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.triggerElement),
    positionerElement: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.positionerElement),
    listElement: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.listElement),
    popupSide: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.popupSide),
    scrollUpArrowVisible: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.scrollUpArrowVisible),
    scrollDownArrowVisible: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.scrollDownArrowVisible),
    hasScrollArrows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$createSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSelector"])((state)=>state.hasScrollArrows)
};
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/root/SelectRoot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectRoot",
    ()=>SelectRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$visuallyHidden$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/visuallyHidden.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useMergedRefs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnFirstRender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useOnFirstRender.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$usePreviousValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/usePreviousValue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useControlled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useControlled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useValueAsRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$Store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/Store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/empty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useClick$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useClick.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useDismiss$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useDismiss.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useFloatingRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useFloatingRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useListNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useListNavigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useTypeahead$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useTypeahead.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-root-context/FieldRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$register$2d$control$2f$useRegisterFieldControl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-register-control/useRegisterFieldControl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$useLabelableId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/labelable-provider/useLabelableId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useTransitionStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useTransitionStatus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/reason-parts.js [app-ssr] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useOpenChangeComplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useOpenChangeComplete.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$form$2d$context$2f$FormContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/form-context/FormContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$resolveValueLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/resolveValueLabel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$itemEquality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/itemEquality.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useValueChanged$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useValueChanged.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenInteractionType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/useOpenInteractionType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/scrollEdges.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popups/popupStoreUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-ssr] (ecmascript)");
/**
 * Groups all parts of the select.
 * Doesn't render its own HTML element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
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
function SelectRoot(props) {
    const { id, value: valueProp, defaultValue = null, onValueChange, open: openProp, defaultOpen = false, onOpenChange, name: nameProp, form, autoComplete, disabled: disabledProp = false, readOnly = false, required = false, modal = true, actionsRef, inputRef, onOpenChangeComplete, items, multiple = false, itemToStringLabel, itemToStringValue, isItemEqualToValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$itemEquality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultItemEquality"], highlightItemOnHover = true, children } = props;
    const { clearErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$form$2d$context$2f$FormContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { setDirty, setTouched, setFocused, shouldValidateOnChange, validityData, setFilled, name: fieldName, disabled: fieldDisabled, validation, validationMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFieldRootContext"])();
    const generatedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$useLabelableId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLabelableId"])({
        id
    });
    const disabled = fieldDisabled || disabledProp;
    const name = fieldName ?? nameProp;
    const [value, setValueUnwrapped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useControlled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControlled"])({
        controlled: valueProp,
        default: multiple ? defaultValue ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_ARRAY"] : defaultValue,
        name: 'Select',
        state: 'value'
    });
    const [open, setOpenUnwrapped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useControlled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControlled"])({
        controlled: openProp,
        default: defaultOpen,
        name: 'Select',
        state: 'open'
    });
    const listRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([]);
    const labelsRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([]);
    const popupRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const scrollHandlerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const scrollArrowsMountedCountRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const valueRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const valuesRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([]);
    const typingRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const keyboardActiveRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const firstItemTextRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const selectedItemTextRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const selectionRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]({
        allowSelectedMouseUp: false,
        allowUnselectedMouseUp: false,
        dragY: 0
    });
    const alignItemWithTriggerActiveRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const { mounted, setMounted, transitionStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useTransitionStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransitionStatus"])(open);
    const { openMethod, triggerProps: interactionTypeProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenInteractionType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenInteractionType"])(open);
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRefWithInit"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$Store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Store"]({
            id: generatedId,
            labelId: undefined,
            modal,
            multiple,
            itemToStringLabel,
            itemToStringValue,
            isItemEqualToValue,
            value,
            open,
            mounted,
            transitionStatus,
            items,
            forceMount: false,
            openMethod: null,
            activeIndex: null,
            selectedIndex: null,
            popupProps: {},
            triggerProps: {},
            triggerElement: null,
            positionerElement: null,
            listElement: null,
            popupSide: null,
            scrollUpArrowVisible: false,
            scrollDownArrowVisible: false,
            hasScrollArrows: false
        })).current;
    const activeIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].activeIndex);
    const selectedIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].selectedIndex);
    const triggerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].triggerElement);
    const positionerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].positionerElement);
    const previousOpenMethod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$usePreviousValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePreviousValue"])(openMethod);
    const renderedOpenMethod = openMethod ?? previousOpenMethod;
    const serializedValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (multiple && Array.isArray(value) && value.length === 0) {
            return '';
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$resolveValueLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyAsValue"])(value, itemToStringValue);
    }, [
        multiple,
        value,
        itemToStringValue
    ]);
    const fieldStringValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (multiple && Array.isArray(value)) {
            return value.map((currentValue)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$resolveValueLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyAsValue"])(currentValue, itemToStringValue));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$resolveValueLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyAsValue"])(value, itemToStringValue);
    }, [
        multiple,
        value,
        itemToStringValue
    ]);
    const controlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useValueAsRef"])(store.state.triggerElement);
    const getStringifiedValueForForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])(()=>fieldStringValue);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$register$2d$control$2f$useRegisterFieldControl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRegisterFieldControl"])(controlRef, generatedId, value, getStringifiedValueForForm);
    const initialValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](value);
    const hasSelectedValue = multiple ? Array.isArray(value) && value.length > 0 : value != null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        // Ensure the values and labels are registered for programmatic value changes.
        if (value !== initialValueRef.current) {
            store.set('forceMount', true);
        }
    }, [
        store,
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        setFilled(hasSelectedValue);
    }, [
        hasSelectedValue,
        setFilled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(function syncSelectedIndex() {
        const registry = valuesRef.current;
        let nextIndex;
        if (multiple) {
            const currentValue = Array.isArray(value) ? value : [];
            if (currentValue.length === 0) {
                nextIndex = null;
            } else {
                const lastValue = currentValue[currentValue.length - 1];
                const lastIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$itemEquality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findItemIndex"])(registry, lastValue, isItemEqualToValue);
                nextIndex = lastIndex === -1 ? null : lastIndex;
            }
        } else {
            const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$itemEquality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findItemIndex"])(registry, value, isItemEqualToValue);
            nextIndex = index === -1 ? null : index;
        }
        if (nextIndex === null) {
            selectedItemTextRef.current = null;
        }
        if (open) {
            return;
        }
        store.set('selectedIndex', nextIndex);
    }, [
        hasSelectedValue,
        multiple,
        open,
        value,
        valuesRef,
        isItemEqualToValue,
        store,
        selectedItemTextRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useValueChanged$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useValueChanged"])(value, ()=>{
        clearErrors(name);
        setDirty(value !== validityData.initialValue);
        if (shouldValidateOnChange()) {
            validation.commit(value);
        } else {
            validation.commit(value, true);
        }
    });
    const setOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((nextOpen, eventDetails)=>{
        onOpenChange?.(nextOpen, eventDetails);
        if (eventDetails.isCanceled) {
            return;
        }
        setOpenUnwrapped(nextOpen);
        if (!nextOpen && (eventDetails.reason === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].focusOut || eventDetails.reason === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].outsidePress)) {
            setTouched(true);
            setFocused(false);
            if (validationMode === 'onBlur') {
                validation.commit(value);
            }
        }
        // The active index will sync to the last selected index on the next open.
        // Workaround `enableFocusInside` in Floating UI setting `tabindex=0` of a non-highlighted
        // option upon close when tabbing out due to `keepMounted=true`:
        // https://github.com/floating-ui/floating-ui/pull/3004/files#diff-962a7439cdeb09ea98d4b622a45d517bce07ad8c3f866e089bda05f4b0bbd875R194-R199
        // This otherwise causes options to retain `tabindex=0` incorrectly when the popup is closed
        // when tabbing outside.
        if (!nextOpen && store.state.activeIndex !== null) {
            const activeOption = listRef.current[store.state.activeIndex];
            // Wait for Floating UI's focus effect to have fired
            queueMicrotask(()=>{
                activeOption?.setAttribute('tabindex', '-1');
            });
        }
    });
    const handleUnmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])(()=>{
        setMounted(false);
        store.update({
            activeIndex: null,
            openMethod: null
        });
        onOpenChangeComplete?.(false);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useOpenChangeComplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenChangeComplete"])({
        enabled: !actionsRef,
        open,
        ref: popupRef,
        onComplete () {
            if (!open) {
                handleUnmount();
            }
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](actionsRef, ()=>({
            unmount: handleUnmount
        }), [
        handleUnmount
    ]);
    const setValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((nextValue, eventDetails)=>{
        onValueChange?.(nextValue, eventDetails);
        if (eventDetails.isCanceled) {
            return;
        }
        setValueUnwrapped(nextValue);
    });
    const handleScrollArrowVisibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])(()=>{
        const scroller = store.state.listElement || popupRef.current;
        if (!scroller) {
            return;
        }
        const maxScrollTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaxScrollOffset"])(scroller.scrollHeight, scroller.clientHeight);
        const scrollTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeScrollOffset"])(scroller.scrollTop, maxScrollTop);
        const shouldShowUp = scrollTop > 0;
        const shouldShowDown = scrollTop < maxScrollTop;
        if (store.state.scrollUpArrowVisible !== shouldShowUp) {
            store.set('scrollUpArrowVisible', shouldShowUp);
        }
        if (store.state.scrollDownArrowVisible !== shouldShowDown) {
            store.set('scrollDownArrowVisible', shouldShowDown);
        }
    });
    const floatingContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useFloatingRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFloatingRootContext"])({
        open,
        onOpenChange: setOpen,
        elements: {
            reference: triggerElement,
            floating: positionerElement
        }
    });
    const click = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useClick$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClick"])(floatingContext, {
        enabled: !readOnly && !disabled,
        event: 'mousedown'
    });
    const dismiss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useDismiss$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDismiss"])(floatingContext);
    const listNavigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useListNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useListNavigation"])(floatingContext, {
        enabled: !readOnly && !disabled,
        listRef,
        activeIndex,
        selectedIndex,
        disabledIndices: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_ARRAY"],
        onNavigate (nextActiveIndex) {
            // Retain the highlight while transitioning out.
            if (nextActiveIndex === null && !open) {
                return;
            }
            store.set('activeIndex', nextActiveIndex);
        },
        focusItemOnHover: highlightItemOnHover
    });
    const typeahead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$hooks$2f$useTypeahead$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTypeahead"])(floatingContext, {
        enabled: !readOnly && !disabled && (open || !multiple),
        listRef: labelsRef,
        activeIndex,
        selectedIndex,
        onMatch (index) {
            if (open) {
                store.set('activeIndex', index);
            } else {
                setValue(valuesRef.current[index], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChangeEventDetails"])('none'));
            }
        },
        onTyping (typing) {
            typingRef.current = typing;
        }
    });
    const mergedTriggerProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const triggerInteractionProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])(typeahead.reference, listNavigation.reference, dismiss.reference, click.reference, interactionTypeProps);
        if (generatedId) {
            triggerInteractionProps.id = generatedId;
        }
        return triggerInteractionProps;
    }, [
        click.reference,
        typeahead.reference,
        listNavigation.reference,
        dismiss.reference,
        interactionTypeProps,
        generatedId
    ]);
    const popupProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popups$2f$popupStoreUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FOCUSABLE_POPUP_PROPS"], typeahead.floating, listNavigation.floating, dismiss.floating), [
        typeahead.floating,
        listNavigation.floating,
        dismiss.floating
    ]);
    const itemProps = listNavigation.item ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnFirstRender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOnFirstRender"])(()=>{
        store.update({
            popupProps,
            triggerProps: mergedTriggerProps
        });
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        store.update({
            id: generatedId,
            modal,
            multiple,
            value,
            open,
            mounted,
            transitionStatus,
            popupProps,
            triggerProps: mergedTriggerProps,
            items,
            itemToStringLabel,
            itemToStringValue,
            isItemEqualToValue,
            openMethod: renderedOpenMethod
        });
    }, [
        store,
        generatedId,
        modal,
        multiple,
        value,
        open,
        mounted,
        transitionStatus,
        popupProps,
        mergedTriggerProps,
        items,
        itemToStringLabel,
        itemToStringValue,
        isItemEqualToValue,
        renderedOpenMethod
    ]);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            store,
            name,
            required,
            disabled,
            readOnly,
            multiple,
            highlightItemOnHover,
            setValue,
            setOpen,
            listRef,
            popupRef,
            scrollHandlerRef,
            handleScrollArrowVisibility,
            scrollArrowsMountedCountRef,
            itemProps,
            events: floatingContext.context.events,
            valueRef,
            valuesRef,
            labelsRef,
            typingRef,
            selectionRef,
            firstItemTextRef,
            selectedItemTextRef,
            validation,
            onOpenChangeComplete,
            keyboardActiveRef,
            alignItemWithTriggerActiveRef,
            initialValueRef
        }), [
        store,
        name,
        required,
        disabled,
        readOnly,
        multiple,
        highlightItemOnHover,
        setValue,
        setOpen,
        itemProps,
        floatingContext.context.events,
        validation,
        onOpenChangeComplete,
        handleScrollArrowVisibility
    ]);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRefs"])(inputRef, validation.inputRef);
    const hasMultipleSelection = multiple && Array.isArray(value) && value.length > 0;
    const hiddenInputName = multiple ? undefined : name;
    const hiddenInputs = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (!multiple || !Array.isArray(value) || !name) {
            return null;
        }
        return value.map((v)=>{
            const currentSerializedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$resolveValueLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyAsValue"])(v, itemToStringValue);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
                type: "hidden",
                form: form,
                name: name,
                value: currentSerializedValue
            }, currentSerializedValue);
        });
    }, [
        multiple,
        value,
        form,
        name,
        itemToStringValue
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectRootContext"].Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectFloatingContext"].Provider, {
            value: floatingContext,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
                    ...validation.getInputValidationProps({
                        onFocus () {
                            // Move focus to the trigger element when the hidden input is focused.
                            store.state.triggerElement?.focus({
                                // Supported in Chrome from 144 (January 2026)
                                focusVisible: true
                            });
                        },
                        // Handle browser autofill.
                        onChange (event) {
                            // Workaround for https://github.com/facebook/react/issues/9023
                            if (event.nativeEvent.defaultPrevented || disabled || readOnly) {
                                // Outside Field.Root, the event is not wrapped by mergeProps.
                                event.preventBaseUIHandler?.();
                                return;
                            }
                            const nextValue = event.currentTarget.value;
                            const details = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].none, event.nativeEvent);
                            function handleChange() {
                                if (multiple) {
                                    // Browser autofill only writes a single scalar value.
                                    return;
                                }
                                // Handle single selection: match against registered values using serialization
                                const matchingValue = valuesRef.current.find((v)=>{
                                    // Try matching by value first (e.g., "US" for country code)
                                    const candidateValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$resolveValueLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyAsValue"])(v, itemToStringValue);
                                    if (candidateValue.toLowerCase() === nextValue.toLowerCase()) {
                                        return true;
                                    }
                                    // Also try matching by label for browser autofill compatibility
                                    // (browsers autofill with displayed text like "United States", not the underlying value)
                                    const candidateLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$resolveValueLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyAsLabel"])(v, itemToStringLabel);
                                    if (candidateLabel.toLowerCase() === nextValue.toLowerCase()) {
                                        return true;
                                    }
                                    return false;
                                });
                                if (matchingValue != null) {
                                    setDirty(matchingValue !== validityData.initialValue);
                                    setValue(matchingValue, details);
                                    if (shouldValidateOnChange()) {
                                        validation.commit(matchingValue);
                                    }
                                }
                            }
                            store.set('forceMount', true);
                            queueMicrotask(handleChange);
                        }
                    }),
                    id: generatedId && hiddenInputName == null ? `${generatedId}-hidden-input` : undefined,
                    form: form,
                    name: hiddenInputName,
                    autoComplete: autoComplete,
                    value: serializedValue,
                    disabled: disabled,
                    required: required && !hasMultipleSelection,
                    readOnly: readOnly,
                    ref: ref,
                    style: name ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$visuallyHidden$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visuallyHiddenInput"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$visuallyHidden$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visuallyHidden"],
                    tabIndex: -1,
                    "aria-hidden": true,
                    suppressHydrationWarning: true
                }),
                hiddenInputs
            ]
        })
    });
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/resolveAriaLabelledBy.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultLabelId",
    ()=>getDefaultLabelId,
    "resolveAriaLabelledBy",
    ()=>resolveAriaLabelledBy
]);
'use client';
function getDefaultLabelId(id) {
    return id == null ? undefined : `${id}-label`;
}
function resolveAriaLabelledBy(fieldLabelId, localLabelId) {
    return fieldLabelId ?? localLabelId;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/label/SelectLabel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectLabel",
    ()=>SelectLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-root-context/FieldRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$useLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/labelable-provider/useLabel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveAriaLabelledBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/resolveAriaLabelledBy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/store.js [app-ssr] (ecmascript)");
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
const SelectLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectLabel(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    // Keep label id derived from the root and ignore runtime `id` overrides from untyped consumers.
    const elementPropsWithoutId = elementProps;
    delete elementPropsWithoutId.id;
    const fieldRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFieldRootContext"])();
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const triggerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].triggerElement);
    const rootId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].id);
    const defaultLabelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveAriaLabelledBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultLabelId"])(rootId);
    const labelProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$useLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLabel"])({
        id: defaultLabelId,
        fallbackControlId: triggerElement?.id ?? rootId,
        setLabelId (nextLabelId) {
            store.set('labelId', nextLabelId);
        }
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        state: fieldRootContext.state,
        props: [
            labelProps,
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectLabel.displayName = "SelectLabel";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/trigger/SelectTrigger.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectTrigger",
    ()=>SelectTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/owner.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useTimeout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useMergedRefs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useValueAsRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-root-context/FieldRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/labelable-provider/LabelableContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/field-constants/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getPseudoElementBounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/getPseudoElementBounds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$shadowDom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/shadowDom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/use-button/useButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/reason-parts.js [app-ssr] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$useLabelableId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/labelable-provider/useLabelableId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveAriaLabelledBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/resolveAriaLabelledBy.js [app-ssr] (ecmascript)");
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
;
;
const BOUNDARY_OFFSET = 2;
const SELECTED_DELAY = 400;
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pressableTriggerOpenStateMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$constants$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldValidityMapping"],
    popupSide: (side)=>side ? {
            'data-popup-side': side
        } : null,
    value: ()=>null
};
const SelectTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectTrigger(componentProps, forwardedRef) {
    const { render, className, id: idProp, disabled: disabledProp = false, nativeButton = true, style, ...elementProps } = componentProps;
    const { setTouched, setFocused, validationMode, state: fieldState, disabled: fieldDisabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$field$2d$root$2d$context$2f$FieldRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFieldRootContext"])();
    const { labelId: fieldLabelId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const { store, setOpen, selectionRef, validation, readOnly, required, alignItemWithTriggerActiveRef, disabled: selectDisabled, keyboardActiveRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const disabled = fieldDisabled || selectDisabled || disabledProp;
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].open);
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].mounted);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].value);
    const triggerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].triggerProps);
    const positionerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].positionerElement);
    const listElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].listElement);
    const popupSideValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].popupSide);
    const rootId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].id);
    const selectLabelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].labelId);
    const hasSelectedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].hasSelectedValue);
    const popupSide = mounted && positionerElement ? popupSideValue : null;
    const id = idProp ?? rootId;
    const ariaLabelledBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveAriaLabelledBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveAriaLabelledBy"])(fieldLabelId, selectLabelId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$labelable$2d$provider$2f$useLabelableId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLabelableId"])({
        id
    });
    const positionerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useValueAsRef"])(positionerElement);
    const triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        native: nativeButton
    });
    const setTriggerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((element)=>{
        store.set('triggerElement', element);
    });
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRefs"])(forwardedRef, triggerRef, buttonRef, setTriggerElement);
    const timeoutFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimeout"])();
    const timeoutMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimeout"])();
    const selectedDelayTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimeout"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (open) {
            // A mousedown on the trigger can open the popup under the cursor. Keep mouseup selection
            // disabled briefly so releasing over either the selected item or a neighboring item doesn't
            // commit an accidental selection. SelectItem can still opt into unselected mouseup sooner
            // after a real drag over the item.
            selectedDelayTimeout.start(SELECTED_DELAY, ()=>{
                selectionRef.current.allowUnselectedMouseUp = true;
                selectionRef.current.allowSelectedMouseUp = true;
            });
            return ()=>{
                selectedDelayTimeout.clear();
            };
        }
        selectionRef.current = {
            allowSelectedMouseUp: false,
            allowUnselectedMouseUp: false,
            dragY: 0
        };
        timeoutMouseDown.clear();
        return undefined;
    }, [
        open,
        selectionRef,
        timeoutMouseDown,
        selectedDelayTimeout
    ]);
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])(triggerProps, {
        id,
        role: 'combobox',
        'aria-expanded': open ? 'true' : 'false',
        'aria-haspopup': 'listbox',
        'aria-controls': open ? listElement?.id ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFloatingFocusElement"])(positionerElement)?.id : undefined,
        'aria-labelledby': ariaLabelledBy,
        'aria-readonly': readOnly || undefined,
        'aria-required': required || undefined,
        tabIndex: disabled ? -1 : 0,
        ref: mergedRef,
        onFocus (event) {
            setFocused(true);
            // The popup element shouldn't obscure the focused trigger.
            if (open && alignItemWithTriggerActiveRef.current) {
                setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].none, event.nativeEvent));
            }
            // Saves a re-render on initial click: `forceMount === true` mounts
            // the items before `open === true`. We could sync those cycles better
            // without a timeout, but this is enough for now.
            //
            // XXX: might be causing `act()` warnings.
            timeoutFocus.start(0, ()=>{
                store.set('forceMount', true);
            });
        },
        onBlur (event) {
            // If focus is moving into the popup, don't count it as a blur.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$shadowDom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contains"])(positionerElement, event.relatedTarget)) {
                return;
            }
            setTouched(true);
            setFocused(false);
            if (validationMode === 'onBlur') {
                validation.commit(value);
            }
        },
        onPointerMove () {
            keyboardActiveRef.current = false;
        },
        onKeyDown () {
            keyboardActiveRef.current = true;
        },
        onMouseDown (event) {
            if (open) {
                return;
            }
            const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(event.currentTarget);
            function handleMouseUp(mouseEvent) {
                if (!triggerRef.current) {
                    return;
                }
                const mouseUpTarget = mouseEvent.target;
                // Early return if clicked on trigger element or its children
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$shadowDom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contains"])(triggerRef.current, mouseUpTarget) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$shadowDom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contains"])(positionerRef.current, mouseUpTarget) || mouseUpTarget === triggerRef.current) {
                    return;
                }
                const bounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getPseudoElementBounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPseudoElementBounds"])(triggerRef.current);
                if (mouseEvent.clientX >= bounds.left - BOUNDARY_OFFSET && mouseEvent.clientX <= bounds.right + BOUNDARY_OFFSET && mouseEvent.clientY >= bounds.top - BOUNDARY_OFFSET && mouseEvent.clientY <= bounds.bottom + BOUNDARY_OFFSET) {
                    return;
                }
                setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].cancelOpen, mouseEvent));
            }
            // Firefox can fire this upon mousedown
            timeoutMouseDown.start(0, ()=>{
                doc.addEventListener('mouseup', handleMouseUp, {
                    once: true
                });
            });
        }
    }, validation.getValidationProps, elementProps, getButtonProps);
    // ensure nested useButton does not overwrite the combobox role:
    // <Toolbar.Button render={<Select.Trigger />} />
    props.role = 'combobox';
    const state = {
        ...fieldState,
        open,
        disabled,
        value,
        readOnly,
        popupSide,
        placeholder: !hasSelectedValue
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        ref: [
            forwardedRef,
            triggerRef
        ],
        state,
        stateAttributesMapping,
        props
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectTrigger.displayName = "SelectTrigger";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/value/SelectValue.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$resolveValueLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/resolveValueLabel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/store.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const stateAttributesMapping = {
    value: ()=>null
};
const SelectValue = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectValue(componentProps, forwardedRef) {
    const { className, render, children: childrenProp, placeholder, style, ...elementProps } = componentProps;
    const { store, valueRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].value);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].items);
    const itemToStringLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].itemToStringLabel);
    const hasSelectedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].hasSelectedValue);
    const shouldCheckNullItemLabel = !hasSelectedValue && placeholder != null && childrenProp == null;
    const hasNullLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].hasNullItemLabel, shouldCheckNullItemLabel);
    const state = {
        value,
        placeholder: !hasSelectedValue
    };
    let children = null;
    if (typeof childrenProp === 'function') {
        children = childrenProp(value);
    } else if (childrenProp != null) {
        children = childrenProp;
    } else if (!hasSelectedValue && placeholder != null && !hasNullLabel) {
        children = placeholder;
    } else if (Array.isArray(value)) {
        children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$resolveValueLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveMultipleLabels"])(value, items, itemToStringLabel);
    } else {
        children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$resolveValueLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveSelectedLabel"])(value, items, itemToStringLabel);
    }
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('span', componentProps, {
        state,
        ref: [
            forwardedRef,
            valueRef
        ],
        props: [
            {
                children
            },
            elementProps
        ],
        stateAttributesMapping
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) SelectValue.displayName = "SelectValue";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/icon/SelectIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectIcon",
    ()=>SelectIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/store.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const SelectIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectIcon(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].open);
    const state = {
        open
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('span', componentProps, {
        state,
        ref: forwardedRef,
        props: [
            {
                'aria-hidden': true,
                children: '▼'
            },
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["triggerOpenStateMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) SelectIcon.displayName = "SelectIcon";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/portal/SelectPortalContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectPortalContext",
    ()=>SelectPortalContext,
    "useSelectPortalContext",
    ()=>useSelectPortalContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const SelectPortalContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) SelectPortalContext.displayName = "SelectPortalContext";
function useSelectPortalContext() {
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](SelectPortalContext);
    if (value === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: <Select.Portal> is missing.' : "TURBOPACK unreachable");
    }
    return value;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/portal/SelectPortal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectPortal",
    ()=>SelectPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingPortal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingPortal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$portal$2f$SelectPortalContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/portal/SelectPortalContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/store.js [app-ssr] (ecmascript)");
/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const SelectPortal = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectPortal(portalProps, forwardedRef) {
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].mounted);
    const forceMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].forceMount);
    const shouldRender = mounted || forceMount;
    if (!shouldRender) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$portal$2f$SelectPortalContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectPortalContext"].Provider, {
        value: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingPortal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingPortal"], {
            ref: forwardedRef,
            ...portalProps
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectPortal.displayName = "SelectPortal";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/backdrop/SelectBackdrop.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectBackdrop",
    ()=>SelectBackdrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/stateAttributesMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/store.js [app-ssr] (ecmascript)");
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
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
};
const SelectBackdrop = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectBackdrop(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].open);
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].mounted);
    const transitionStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].transitionStatus);
    const state = {
        open,
        transitionStatus
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: forwardedRef,
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
        stateAttributesMapping
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) SelectBackdrop.displayName = "SelectBackdrop";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/positioner/SelectPositionerContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectPositionerContext",
    ()=>SelectPositionerContext,
    "useSelectPositionerContext",
    ()=>useSelectPositionerContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const SelectPositionerContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) SelectPositionerContext.displayName = "SelectPositionerContext";
function useSelectPositionerContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](SelectPositionerContext);
    if (!context) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: SelectPositionerContext is missing. SelectPositioner parts must be placed within <Select.Positioner>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/popup/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LIST_FUNCTIONAL_STYLES",
    ()=>LIST_FUNCTIONAL_STYLES,
    "clearStyles",
    ()=>clearStyles
]);
function clearStyles(element, originalStyles) {
    if (element) {
        Object.assign(element.style, originalStyles);
    }
}
const LIST_FUNCTIONAL_STYLES = {
    position: 'relative',
    maxHeight: '100%',
    overflowX: 'hidden',
    overflowY: 'auto'
};
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/positioner/SelectPositioner.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectPositioner",
    ()=>SelectPositioner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$inertValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/inertValue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$composite$2f$list$2f$CompositeList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/composite/list/CompositeList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useAnchorPositioning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/useAnchorPositioning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/positioner/SelectPositionerContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$InternalBackdrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/InternalBackdrop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/popup/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/reason-parts.js [app-ssr] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$itemEquality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/itemEquality.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$usePositioner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/usePositioner.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useAnchoredPopupScrollLock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/useAnchoredPopupScrollLock.js [app-ssr] (ecmascript)");
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
;
;
const FIXED = {
    position: 'fixed'
};
const SelectPositioner = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectPositioner(componentProps, forwardedRef) {
    const { anchor, positionMethod = 'absolute', className, render, side = 'bottom', align = 'center', sideOffset = 0, alignOffset = 0, collisionBoundary = 'clipping-ancestors', collisionPadding, arrowPadding = 5, sticky = false, disableAnchorTracking, alignItemWithTrigger = true, collisionAvoidance = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DROPDOWN_COLLISION_AVOIDANCE"], style, ...elementProps } = componentProps;
    const { store, listRef, labelsRef, alignItemWithTriggerActiveRef, selectedItemTextRef, valuesRef, initialValueRef, popupRef, setValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const floatingRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectFloatingContext"])();
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].open);
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].mounted);
    const modal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].modal);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].value);
    const openMethod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].openMethod);
    const positionerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].positionerElement);
    const triggerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].triggerElement);
    const isItemEqualToValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].isItemEqualToValue);
    const transitionStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].transitionStatus);
    const scrollUpArrowRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const scrollDownArrowRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const [controlledAlignItemWithTrigger, setControlledAlignItemWithTrigger] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](alignItemWithTrigger);
    const alignItemWithTriggerActive = mounted && controlledAlignItemWithTrigger && openMethod !== 'touch';
    if (!mounted && controlledAlignItemWithTrigger !== alignItemWithTrigger) {
        setControlledAlignItemWithTrigger(alignItemWithTrigger);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (!mounted) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].scrollUpArrowVisible(store.state)) {
                store.set('scrollUpArrowVisible', false);
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].scrollDownArrowVisible(store.state)) {
                store.set('scrollDownArrowVisible', false);
            }
        }
    }, [
        store,
        mounted
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](alignItemWithTriggerActiveRef, ()=>alignItemWithTriggerActive);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useAnchoredPopupScrollLock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnchoredPopupScrollLock"])((alignItemWithTriggerActive || modal) && open, openMethod === 'touch', positionerElement, triggerElement);
    const positioning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useAnchorPositioning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnchorPositioning"])({
        anchor,
        floatingRootContext,
        positionMethod,
        mounted,
        side,
        sideOffset,
        align,
        alignOffset,
        arrowPadding,
        collisionBoundary,
        collisionPadding,
        sticky,
        disableAnchorTracking: disableAnchorTracking ?? alignItemWithTriggerActive,
        collisionAvoidance,
        keepMounted: true
    });
    const renderedSide = alignItemWithTriggerActive ? 'none' : positioning.side;
    const positionerStyles = alignItemWithTriggerActive ? FIXED : positioning.positionerStyles;
    const state = {
        open,
        side: renderedSide,
        align: positioning.align,
        anchorHidden: positioning.anchorHidden
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        store.set('popupSide', positioning.side);
    }, [
        store,
        positioning.side
    ]);
    const setPositionerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((element)=>{
        store.set('positionerElement', element);
    });
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$usePositioner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePositioner"])(componentProps, state, {
        styles: positionerStyles,
        transitionStatus,
        props: elementProps,
        refs: [
            forwardedRef,
            setPositionerElement
        ],
        hidden: !mounted,
        inert: !open
    });
    const prevMapSizeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const onMapChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((map)=>{
        if (map.size === 0 && prevMapSizeRef.current === 0) {
            return;
        }
        if (valuesRef.current.length === 0) {
            return;
        }
        const prevSize = prevMapSizeRef.current;
        prevMapSizeRef.current = map.size;
        if (map.size === prevSize) {
            return;
        }
        const eventDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].none);
        if (prevSize !== 0 && !store.state.multiple && value !== null) {
            const selectedValueIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$itemEquality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findItemIndex"])(valuesRef.current, value, isItemEqualToValue);
            if (selectedValueIndex === -1) {
                const initialSelectedValue = initialValueRef.current;
                const hasInitial = initialSelectedValue != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$itemEquality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findItemIndex"])(valuesRef.current, initialSelectedValue, isItemEqualToValue) !== -1;
                const nextValue = hasInitial ? initialSelectedValue : null;
                setValue(nextValue, eventDetails);
                if (nextValue === null) {
                    store.set('selectedIndex', null);
                    selectedItemTextRef.current = null;
                }
            }
        }
        if (prevSize !== 0 && store.state.multiple && Array.isArray(value)) {
            const hasVisibleItem = (selectedItemValue)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$itemEquality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findItemIndex"])(valuesRef.current, selectedItemValue, isItemEqualToValue) !== -1;
            const nextValue = value.filter((selectedItemValue)=>hasVisibleItem(selectedItemValue));
            if (nextValue.length !== value.length || nextValue.some((selectedItemValue)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$itemEquality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectedValueIncludes"])(value, selectedItemValue, isItemEqualToValue))) {
                setValue(nextValue, eventDetails);
                if (nextValue.length === 0) {
                    store.set('selectedIndex', null);
                    selectedItemTextRef.current = null;
                }
            }
        }
        if (open && alignItemWithTriggerActive) {
            store.update({
                scrollUpArrowVisible: false,
                scrollDownArrowVisible: false
            });
            const stylesToClear = {
                height: ''
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearStyles"])(positionerElement, stylesToClear);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearStyles"])(popupRef.current, stylesToClear);
        }
    });
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            ...positioning,
            side: renderedSide,
            alignItemWithTriggerActive,
            setControlledAlignItemWithTrigger,
            scrollUpArrowRef,
            scrollDownArrowRef
        }), [
        positioning,
        renderedSide,
        alignItemWithTriggerActive,
        setControlledAlignItemWithTrigger
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$composite$2f$list$2f$CompositeList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompositeList"], {
        elementsRef: listRef,
        labelsRef: labelsRef,
        onMapChange: onMapChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectPositionerContext"].Provider, {
            value: contextValue,
            children: [
                mounted && modal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$InternalBackdrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalBackdrop"], {
                    inert: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$inertValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inertValue"])(!open),
                    cutout: triggerElement
                }),
                element
            ]
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectPositioner.displayName = "SelectPositioner";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/popup/SelectPopup.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectPopup",
    ()=>SelectPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$addEventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/addEventListener.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$detectBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/detectBrowser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/owner.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__getWindow__as__ownerWindow$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-ssr] (ecmascript) <export getWindow as ownerWindow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useAnimationFrame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useAnimationFrame.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingFocusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingFocusManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/positioner/SelectPositionerContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/styles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/stateAttributesMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useOpenChangeComplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useOpenChangeComplete.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/popup/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/reason-parts.js [app-ssr] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$toolbar$2f$root$2f$ToolbarRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/toolbar/root/ToolbarRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/composite/composite.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getDisabledMountTransitionStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/getDisabledMountTransitionStyles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/clamp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/scrollEdges.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$csp$2d$context$2f$CSPContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/csp-context/CSPContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$direction$2d$context$2f$DirectionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/direction-context/DirectionContext.js [app-ssr] (ecmascript)");
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
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
};
const SelectPopup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectPopup(componentProps, forwardedRef) {
    const { render, className, style, finalFocus, ...elementProps } = componentProps;
    const { store, popupRef, onOpenChangeComplete, setOpen, valueRef, firstItemTextRef, selectedItemTextRef, keyboardActiveRef, multiple, handleScrollArrowVisibility, scrollHandlerRef, listRef, highlightItemOnHover } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const { side, align, alignItemWithTriggerActive, isPositioned, setControlledAlignItemWithTrigger, scrollDownArrowRef, scrollUpArrowRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectPositionerContext"])();
    const insideToolbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$toolbar$2f$root$2f$ToolbarRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToolbarRootContext"])(true) != null;
    const floatingRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectFloatingContext"])();
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$direction$2d$context$2f$DirectionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])();
    const { nonce, disableStyleElements } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$csp$2d$context$2f$CSPContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCSPContext"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].id);
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].open);
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].mounted);
    const popupProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].popupProps);
    const transitionStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].transitionStatus);
    const triggerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].triggerElement);
    const positionerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].positionerElement);
    const listElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].listElement);
    const reachedMaxHeightRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const initialPlacedRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const originalPositionerStylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]({});
    const scrollArrowFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useAnimationFrame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimationFrame"])();
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((scroller)=>{
        if (!positionerElement || !popupRef.current || !initialPlacedRef.current) {
            return;
        }
        if (reachedMaxHeightRef.current || !alignItemWithTriggerActive) {
            handleScrollArrowVisibility();
            return;
        }
        const isTopPositioned = positionerElement.style.top === '0px';
        const isBottomPositioned = positionerElement.style.bottom === '0px';
        if (!isTopPositioned && !isBottomPositioned) {
            handleScrollArrowVisibility();
            return;
        }
        const scale = getScale(positionerElement);
        const currentHeight = normalizeSize(positionerElement.getBoundingClientRect().height, 'y', scale);
        const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(positionerElement);
        const positionerStyles = getComputedStyle(positionerElement);
        const marginTop = parseFloat(positionerStyles.marginTop);
        const marginBottom = parseFloat(positionerStyles.marginBottom);
        const maxPopupHeight = getMaxPopupHeight(getComputedStyle(popupRef.current));
        const maxAvailableHeight = Math.min(doc.documentElement.clientHeight - marginTop - marginBottom, maxPopupHeight);
        const scrollTop = scroller.scrollTop;
        const maxScrollTop = getMaxScrollTop(scroller);
        let nextPositionerHeight = 0;
        let nextScrollTop = null;
        let setReachedMax = false;
        let scrollToMax = false;
        const setHeight = (height)=>{
            positionerElement.style.height = `${height}px`;
        };
        const handleSmallDiff = (diff, targetScrollTop)=>{
            const heightDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(diff, 0, maxAvailableHeight - currentHeight);
            if (heightDelta > 0) {
                // Consume the remaining scroll in height.
                setHeight(currentHeight + heightDelta);
            }
            scroller.scrollTop = targetScrollTop;
            if (maxAvailableHeight - (currentHeight + heightDelta) <= __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_EDGE_TOLERANCE_PX"]) {
                reachedMaxHeightRef.current = true;
            }
            handleScrollArrowVisibility();
        };
        const diff = isTopPositioned ? maxScrollTop - scrollTop : scrollTop;
        const nextHeight = Math.min(currentHeight + diff, maxAvailableHeight);
        nextPositionerHeight = nextHeight;
        if (diff <= __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_EDGE_TOLERANCE_PX"]) {
            handleSmallDiff(diff, isTopPositioned ? maxScrollTop : 0);
            return;
        }
        if (maxAvailableHeight - nextHeight > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_EDGE_TOLERANCE_PX"]) {
            if (isTopPositioned) {
                scrollToMax = true;
            } else {
                nextScrollTop = 0;
            }
        } else {
            setReachedMax = true;
            if (isBottomPositioned && scrollTop < maxScrollTop) {
                const overshoot = currentHeight + diff - maxAvailableHeight;
                nextScrollTop = scrollTop - (diff - overshoot);
            }
        }
        nextPositionerHeight = Math.ceil(nextPositionerHeight);
        if (nextPositionerHeight !== 0) {
            setHeight(nextPositionerHeight);
        }
        if (scrollToMax || nextScrollTop != null) {
            // Recompute bounds after resizing (clientHeight likely changed).
            const nextMaxScrollTop = getMaxScrollTop(scroller);
            const target = scrollToMax ? nextMaxScrollTop : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(nextScrollTop, 0, nextMaxScrollTop);
            // Avoid adjustments that re-trigger scroll events forever.
            if (Math.abs(scroller.scrollTop - target) > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_EDGE_TOLERANCE_PX"]) {
                scroller.scrollTop = target;
            }
        }
        if (setReachedMax || nextPositionerHeight >= maxAvailableHeight - __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_EDGE_TOLERANCE_PX"]) {
            reachedMaxHeightRef.current = true;
        }
        handleScrollArrowVisibility();
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](scrollHandlerRef, ()=>handleScroll, [
        handleScroll
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useOpenChangeComplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenChangeComplete"])({
        open,
        ref: popupRef,
        onComplete () {
            if (open) {
                onOpenChangeComplete?.(true);
            }
        }
    });
    const state = {
        open,
        transitionStatus,
        side,
        align
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (!positionerElement || !popupRef.current || Object.keys(originalPositionerStylesRef.current).length) {
            return;
        }
        originalPositionerStylesRef.current = {
            top: positionerElement.style.top || '0',
            left: positionerElement.style.left || '0',
            right: positionerElement.style.right,
            height: positionerElement.style.height,
            bottom: positionerElement.style.bottom,
            minHeight: positionerElement.style.minHeight,
            maxHeight: positionerElement.style.maxHeight,
            marginTop: positionerElement.style.marginTop,
            marginBottom: positionerElement.style.marginBottom
        };
    }, [
        popupRef,
        positionerElement
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (open || alignItemWithTriggerActive) {
            return;
        }
        initialPlacedRef.current = false;
        reachedMaxHeightRef.current = false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearStyles"])(positionerElement, originalPositionerStylesRef.current);
    }, [
        open,
        alignItemWithTriggerActive,
        positionerElement,
        popupRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        const popupElement = popupRef.current;
        // Wait for Floating UI's first positioning pass before reading DOM geometry.
        // We replace the final coordinates for aligned selects, but still need middleware
        // like `size()` to set CSS variables such as `--anchor-width`.
        if (!open || !triggerElement || !positionerElement || !popupElement || alignItemWithTriggerActive && !isPositioned || store.state.transitionStatus === 'ending') {
            return;
        }
        if (!alignItemWithTriggerActive) {
            initialPlacedRef.current = true;
            scrollArrowFrame.request(handleScrollArrowVisibility);
            popupElement.style.removeProperty('--transform-origin');
            return;
        }
        // Ensure we remove any transforms that can affect the location of the popup
        // and therefore the calculations.
        const restoreTransformStyles = unsetTransformStyles(popupElement);
        popupElement.style.removeProperty('--transform-origin');
        try {
            let textElement = selectedItemTextRef.current;
            if (!textElement?.isConnected) {
                const hasSelectedValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].hasSelectedValue(store.state);
                textElement = !hasSelectedValue && firstItemTextRef.current?.isConnected ? firstItemTextRef.current : null;
            }
            const valueElement = valueRef.current;
            const positionerStyles = getComputedStyle(positionerElement);
            const popupStyles = getComputedStyle(popupElement);
            const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(triggerElement);
            const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__getWindow__as__ownerWindow$3e$__["ownerWindow"])(positionerElement);
            const scale = getScale(triggerElement);
            const triggerRect = normalizeRect(triggerElement.getBoundingClientRect(), scale);
            const positionerRect = normalizeRect(positionerElement.getBoundingClientRect(), scale);
            const triggerHeight = triggerRect.height;
            const scroller = listElement || popupElement;
            const scrollHeight = scroller.scrollHeight;
            const borderBottom = parseFloat(popupStyles.borderBottomWidth);
            const marginTop = parseFloat(positionerStyles.marginTop) || 10;
            const marginBottom = parseFloat(positionerStyles.marginBottom) || 10;
            const minHeight = parseFloat(positionerStyles.minHeight) || 100;
            const maxPopupHeight = getMaxPopupHeight(popupStyles);
            const paddingLeft = 5;
            const paddingRight = 5;
            const triggerCollisionThreshold = 20;
            const viewportHeight = doc.documentElement.clientHeight - marginTop - marginBottom;
            const viewportWidth = doc.documentElement.clientWidth;
            const availableSpaceBeneathTrigger = viewportHeight - triggerRect.bottom + triggerHeight;
            let textRect;
            let alignedLeft = direction === 'rtl' ? triggerRect.right - positionerRect.width : triggerRect.left;
            let offsetY = 0;
            if (textElement && valueElement) {
                const valueRect = normalizeRect(valueElement.getBoundingClientRect(), scale);
                textRect = normalizeRect(textElement.getBoundingClientRect(), scale);
                alignedLeft = positionerRect.left + (direction === 'rtl' ? valueRect.right - textRect.right : valueRect.left - textRect.left);
                const valueCenterFromTriggerTop = valueRect.top - triggerRect.top + valueRect.height / 2;
                const textCenterFromPositionerTop = textRect.top - positionerRect.top + textRect.height / 2;
                offsetY = textCenterFromPositionerTop - valueCenterFromTriggerTop;
            }
            const idealHeight = availableSpaceBeneathTrigger + offsetY + marginBottom + borderBottom;
            let height = Math.min(viewportHeight, idealHeight);
            const maxHeight = viewportHeight - marginTop - marginBottom;
            const scrollTop = idealHeight - height;
            const maxRight = viewportWidth - paddingRight;
            positionerElement.style.left = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(alignedLeft, paddingLeft, maxRight - positionerRect.width)}px`;
            positionerElement.style.height = `${height}px`;
            positionerElement.style.maxHeight = 'auto';
            positionerElement.style.marginTop = `${marginTop}px`;
            positionerElement.style.marginBottom = `${marginBottom}px`;
            popupElement.style.height = '100%';
            const maxScrollTop = getMaxScrollTop(scroller);
            const isTopPositioned = scrollTop >= maxScrollTop - __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_EDGE_TOLERANCE_PX"];
            if (isTopPositioned) {
                height = Math.min(viewportHeight, positionerRect.height) - (scrollTop - maxScrollTop);
            }
            // When the trigger is too close to the top or bottom of the viewport, or the minHeight is
            // reached, we fallback to aligning the popup to the trigger as the UX is poor otherwise.
            const fallbackToAlignPopupToTrigger = triggerRect.top < triggerCollisionThreshold || triggerRect.bottom > viewportHeight - triggerCollisionThreshold || Math.ceil(height) + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_EDGE_TOLERANCE_PX"] < Math.min(scrollHeight, minHeight);
            // Safari doesn't position the popup correctly when pinch-zoomed.
            const isPinchZoomed = (win.visualViewport?.scale ?? 1) !== 1 && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$detectBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWebKit"];
            if (fallbackToAlignPopupToTrigger || isPinchZoomed) {
                initialPlacedRef.current = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearStyles"])(positionerElement, originalPositionerStylesRef.current);
                setControlledAlignItemWithTrigger(false);
                return;
            }
            const initialHeight = Math.max(minHeight, height);
            if (isTopPositioned) {
                const topOffset = Math.max(0, viewportHeight - idealHeight);
                positionerElement.style.top = positionerRect.height >= maxHeight ? '0' : `${topOffset}px`;
                positionerElement.style.height = `${height}px`;
                scroller.scrollTop = getMaxScrollTop(scroller);
            } else {
                positionerElement.style.bottom = '0';
                scroller.scrollTop = scrollTop;
            }
            if (textRect) {
                const popupTop = positionerRect.top;
                const popupHeight = positionerRect.height;
                const textCenterY = textRect.top + textRect.height / 2;
                const transformOriginY = popupHeight > 0 ? (textCenterY - popupTop) / popupHeight * 100 : 50;
                const clampedY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(transformOriginY, 0, 100);
                popupElement.style.setProperty('--transform-origin', `50% ${clampedY}%`);
            }
            if (initialHeight === viewportHeight || height >= maxPopupHeight) {
                reachedMaxHeightRef.current = true;
            }
            handleScrollArrowVisibility();
            if (highlightItemOnHover && store.state.selectedIndex === null && store.state.activeIndex === null && listRef.current[0] != null) {
                store.set('activeIndex', 0);
            }
            initialPlacedRef.current = true;
        } finally{
            restoreTransformStyles();
        }
    }, [
        store,
        open,
        positionerElement,
        triggerElement,
        valueRef,
        firstItemTextRef,
        selectedItemTextRef,
        popupRef,
        handleScrollArrowVisibility,
        alignItemWithTriggerActive,
        setControlledAlignItemWithTrigger,
        scrollArrowFrame,
        scrollDownArrowRef,
        scrollUpArrowRef,
        listElement,
        listRef,
        highlightItemOnHover,
        direction,
        isPositioned
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!alignItemWithTriggerActive || !positionerElement || !open) {
            return undefined;
        }
        const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__getWindow__as__ownerWindow$3e$__["ownerWindow"])(positionerElement);
        function handleResize(event) {
            setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].windowResize, event));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$addEventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addEventListener"])(win, 'resize', handleResize);
    }, [
        setOpen,
        alignItemWithTriggerActive,
        positionerElement,
        open
    ]);
    const defaultProps = {
        ...listElement ? {
            role: 'presentation',
            'aria-orientation': undefined
        } : {
            role: 'listbox',
            'aria-multiselectable': multiple || undefined,
            id: `${id}-list`
        },
        onKeyDown (event) {
            keyboardActiveRef.current = true;
            if (insideToolbar && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["COMPOSITE_KEYS"].has(event.key)) {
                event.stopPropagation();
            }
        },
        onMouseMove () {
            keyboardActiveRef.current = false;
        },
        onScroll (event) {
            if (listElement) {
                return;
            }
            handleScroll(event.currentTarget);
        },
        ...alignItemWithTriggerActive && {
            style: listElement ? {
                height: '100%'
            } : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LIST_FUNCTIONAL_STYLES"]
        }
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            popupRef
        ],
        state,
        stateAttributesMapping,
        props: [
            popupProps,
            defaultProps,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getDisabledMountTransitionStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDisabledMountTransitionStyles"])(transitionStatus),
            {
                className: !listElement && alignItemWithTriggerActive ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleDisableScrollbar"].className : undefined
            },
            elementProps
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !disableStyleElements && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleDisableScrollbar"].getElement(nonce),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$components$2f$FloatingFocusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingFocusManager"], {
                context: floatingRootContext,
                modal: false,
                disabled: !mounted,
                returnFocus: finalFocus,
                restoreFocus: true,
                children: element
            })
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectPopup.displayName = "SelectPopup";
function getMaxPopupHeight(popupStyles) {
    const maxHeightStyle = popupStyles.maxHeight || '';
    return maxHeightStyle.endsWith('px') ? parseFloat(maxHeightStyle) || Infinity : Infinity;
}
function getMaxScrollTop(scroller) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaxScrollOffset"])(scroller.scrollHeight, scroller.clientHeight);
}
function getScale(element) {
    // The platform API is async-capable, but the DOM platform returns a plain scale object.
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["platform"].getScale(element);
}
function normalizeSize(size, axis, scale) {
    return size / scale[axis];
}
function normalizeRect(rect, scale) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rectToClientRect"])({
        x: normalizeSize(rect.x, 'x', scale),
        y: normalizeSize(rect.y, 'y', scale),
        width: normalizeSize(rect.width, 'x', scale),
        height: normalizeSize(rect.height, 'y', scale)
    });
}
const TRANSFORM_STYLE_RESETS = [
    [
        'transform',
        'none'
    ],
    [
        'scale',
        '1'
    ],
    [
        'translate',
        '0 0'
    ]
];
function unsetTransformStyles(popupElement) {
    const { style } = popupElement;
    const originalStyles = {};
    for (const [property, value] of TRANSFORM_STYLE_RESETS){
        originalStyles[property] = style.getPropertyValue(property);
        style.setProperty(property, value, 'important');
    }
    return ()=>{
        for (const [property] of TRANSFORM_STYLE_RESETS){
            const originalValue = originalStyles[property];
            if (originalValue) {
                style.setProperty(property, originalValue);
            } else {
                style.removeProperty(property);
            }
        }
    };
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/list/SelectList.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectList",
    ()=>SelectList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/positioner/SelectPositionerContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/styles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/popup/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/store.js [app-ssr] (ecmascript)");
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
const SelectList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectList(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const { store, scrollHandlerRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const { alignItemWithTriggerActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectPositionerContext"])();
    const hasScrollArrows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].hasScrollArrows);
    const openMethod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].openMethod);
    const multiple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].multiple);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].id);
    const defaultProps = {
        id: `${id}-list`,
        role: 'listbox',
        'aria-multiselectable': multiple || undefined,
        onScroll (event) {
            scrollHandlerRef.current?.(event.currentTarget);
        },
        ...alignItemWithTriggerActive && {
            style: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LIST_FUNCTIONAL_STYLES"]
        },
        className: hasScrollArrows && openMethod !== 'touch' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleDisableScrollbar"].className : undefined
    };
    const setListElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((element)=>{
        store.set('listElement', element);
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            setListElement
        ],
        props: [
            defaultProps,
            elementProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectList.displayName = "SelectList";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/item/SelectItemContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectItemContext",
    ()=>SelectItemContext,
    "useSelectItemContext",
    ()=>useSelectItemContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const SelectItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) SelectItemContext.displayName = "SelectItemContext";
function useSelectItemContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](SelectItemContext);
    if (!context) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: SelectItemContext is missing. SelectItem parts must be placed within <Select.Item>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/item/SelectItem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectItem",
    ()=>SelectItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$composite$2f$list$2f$useCompositeListItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/composite/list/useCompositeListItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItemContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/item/SelectItemContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/use-button/useButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/reason-parts.js [app-ssr] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$itemEquality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/itemEquality.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/floating-ui-react/utils/event.js [app-ssr] (ecmascript)");
/**
 * An individual option in the select popup.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
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
;
;
;
const SelectItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectItem(componentProps, forwardedRef) {
    const { render, className, style, value: itemValue = null, label, disabled = false, nativeButton = false, ...elementProps } = componentProps;
    const textRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const listItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$composite$2f$list$2f$useCompositeListItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompositeListItem"])({
        label,
        textRef,
        indexGuessBehavior: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$composite$2f$list$2f$useCompositeListItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndexGuessBehavior"].GuessFromOrder
    });
    const { store, itemProps, setOpen, setValue, selectionRef, typingRef, valuesRef, multiple, selectedItemTextRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const highlighted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].isActive, listItem.index);
    const selected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].isSelected, listItem.index, itemValue);
    const selectedByFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].isSelectedByFocus, listItem.index);
    const isItemEqualToValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].isItemEqualToValue);
    const index = listItem.index;
    const hasRegistered = index !== -1;
    const itemRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (!hasRegistered) {
            return undefined;
        }
        const values = valuesRef.current;
        values[index] = itemValue;
        return ()=>{
            delete values[index];
        };
    }, [
        hasRegistered,
        index,
        itemValue,
        valuesRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (!hasRegistered) {
            return;
        }
        const selectedValue = store.state.value;
        let selectedCandidate = selectedValue;
        if (multiple && Array.isArray(selectedValue) && selectedValue.length > 0) {
            selectedCandidate = selectedValue[selectedValue.length - 1];
        }
        if (selectedCandidate !== undefined && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$itemEquality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareItemEquality"])(itemValue, selectedCandidate, isItemEqualToValue)) {
            store.set('selectedIndex', index);
            // Make sure SelectPopup can measure the selected item on first open.
            // SelectItemText can still update this ref later when focus moves.
            if (textRef.current) {
                selectedItemTextRef.current = textRef.current;
            }
        }
    }, [
        hasRegistered,
        index,
        multiple,
        isItemEqualToValue,
        store,
        itemValue,
        selectedItemTextRef
    ]);
    const lastKeyRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const pointerTypeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]('mouse');
    const allowMouseSelectionRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        focusableWhenDisabled: true,
        native: nativeButton,
        composite: true
    });
    const state = {
        disabled,
        selected,
        highlighted
    };
    function commitSelection(event) {
        const selectedValue = store.state.value;
        if (multiple) {
            const currentValue = Array.isArray(selectedValue) ? selectedValue : [];
            const nextValue = selected ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$itemEquality$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeItem"])(currentValue, itemValue, isItemEqualToValue) : [
                ...currentValue,
                itemValue
            ];
            setValue(nextValue, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].itemPress, event));
        } else {
            setValue(itemValue, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].itemPress, event));
            setOpen(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].itemPress, event));
        }
    }
    function resetDragMovement() {
        selectionRef.current.dragY = 0;
    }
    const defaultProps = {
        role: 'option',
        'aria-selected': selected,
        tabIndex: highlighted ? 0 : -1,
        onKeyDown (event) {
            lastKeyRef.current = event.key;
            store.set('activeIndex', index);
            if (event.key === ' ' && typingRef.current) {
                event.preventDefault();
            }
        },
        onClick (event) {
            const isMouseClick = event.type === 'click' && pointerTypeRef.current !== 'touch';
            const clickPointerType = event.nativeEvent.pointerType;
            const isVirtualMouseClick = isMouseClick && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isVirtualClick"])(event.nativeEvent) && (// Generic no-pointer `detail === 0` clicks stay tied to highlight state. Virtual
            // clicks that carry browser pointer data, including an empty string from assistive
            // technology, can activate unhighlighted items.
            clickPointerType !== undefined || highlighted);
            // With alignItemWithTrigger, opening can place an item under the cursor. Real mouse
            // clicks must start on the item, while virtual clicks represent explicit keyboard or
            // assistive technology activation.
            const isInvalidMouseClick = isMouseClick && !isVirtualMouseClick && !allowMouseSelectionRef.current;
            allowMouseSelectionRef.current = false;
            // Prevent double commit on {Enter}
            if (event.type === 'keydown' && lastKeyRef.current === null) {
                return;
            }
            if (disabled || event.type === 'keydown' && lastKeyRef.current === ' ' && typingRef.current || isInvalidMouseClick) {
                return;
            }
            lastKeyRef.current = null;
            commitSelection(event.nativeEvent);
        },
        onPointerEnter (event) {
            pointerTypeRef.current = event.pointerType;
        },
        onPointerMove (event) {
            if (event.pointerType === 'mouse' && event.buttons === 1) {
                const selection = selectionRef.current;
                selection.dragY += event.movementY;
                if (selection.dragY ** 2 >= 64) {
                    selection.allowUnselectedMouseUp = true;
                }
            }
        },
        onPointerDown (event) {
            pointerTypeRef.current = event.pointerType;
            allowMouseSelectionRef.current = true;
            resetDragMovement();
        },
        onMouseUp () {
            resetDragMovement();
            if (disabled || pointerTypeRef.current === 'touch') {
                return;
            }
            // Regular clicks are committed by the click event.
            if (allowMouseSelectionRef.current) {
                return;
            }
            const disallowSelectedMouseUp = !selectionRef.current.allowSelectedMouseUp && selected;
            const disallowUnselectedMouseUp = !selectionRef.current.allowUnselectedMouseUp && !selected;
            if (disallowSelectedMouseUp || disallowUnselectedMouseUp) {
                return;
            }
            allowMouseSelectionRef.current = true;
            itemRef.current?.click();
            allowMouseSelectionRef.current = false;
        }
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            buttonRef,
            forwardedRef,
            listItem.ref,
            itemRef
        ],
        state,
        props: [
            itemProps,
            defaultProps,
            elementProps,
            getButtonProps
        ]
    });
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            selected,
            index,
            textRef,
            selectedByFocus,
            hasRegistered
        }), [
        selected,
        index,
        textRef,
        selectedByFocus,
        hasRegistered
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItemContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItemContext"].Provider, {
        value: contextValue,
        children: element
    });
}));
if ("TURBOPACK compile-time truthy", 1) SelectItem.displayName = "SelectItem";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/item-indicator/SelectItemIndicator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectItemIndicator",
    ()=>SelectItemIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItemContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/item/SelectItemContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useTransitionStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useTransitionStatus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useOpenChangeComplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useOpenChangeComplete.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/stateAttributesMapping.js [app-ssr] (ecmascript)");
/**
 * Indicates whether the select item is selected.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const SelectItemIndicator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectItemIndicator(componentProps, forwardedRef) {
    const keepMounted = componentProps.keepMounted ?? false;
    const { selected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItemContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectItemContext"])();
    const shouldRender = keepMounted || selected;
    if (!shouldRender) {
        return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Inner, {
        ...componentProps,
        ref: forwardedRef
    });
});
// Split the core implementation to avoid paying the hook costs unless the element needs to mount.
if ("TURBOPACK compile-time truthy", 1) SelectItemIndicator.displayName = "SelectItemIndicator";
const Inner = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((componentProps, forwardedRef)=>{
    const { render, className, style, keepMounted, ...elementProps } = componentProps;
    const { selected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItemContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectItemContext"])();
    const indicatorRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const { transitionStatus, setMounted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useTransitionStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransitionStatus"])(selected);
    const state = {
        selected,
        transitionStatus
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('span', componentProps, {
        ref: [
            forwardedRef,
            indicatorRef
        ],
        state,
        props: [
            {
                'aria-hidden': true,
                children: '✔️'
            },
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useOpenChangeComplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenChangeComplete"])({
        open: selected,
        ref: indicatorRef,
        onComplete () {
            if (!selected) {
                setMounted(false);
            }
        }
    });
    return element;
}));
if ("TURBOPACK compile-time truthy", 1) Inner.displayName = "Inner";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/item-text/SelectItemText.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectItemText",
    ()=>SelectItemText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItemContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/item/SelectItemContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const SelectItemText = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectItemText(componentProps, forwardedRef) {
    const { index, textRef, selectedByFocus, hasRegistered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItemContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectItemContext"])();
    const { firstItemTextRef, selectedItemTextRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const { render, className, style, ...elementProps } = componentProps;
    const localRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node)=>{
        if (!node) {
            return;
        }
        if (hasRegistered && index === 0) {
            firstItemTextRef.current = node;
        }
        if (hasRegistered && selectedByFocus) {
            selectedItemTextRef.current = node;
        }
    }, [
        firstItemTextRef,
        selectedItemTextRef,
        index,
        selectedByFocus,
        hasRegistered
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            localRef,
            forwardedRef,
            textRef
        ],
        props: elementProps
    });
    return element;
}));
if ("TURBOPACK compile-time truthy", 1) SelectItemText.displayName = "SelectItemText";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/arrow/SelectArrow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectArrow",
    ()=>SelectArrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/positioner/SelectPositionerContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$popupStateMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/stateAttributesMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/store.js [app-ssr] (ecmascript)");
'use client';
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
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
};
const SelectArrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectArrow(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const { side, align, arrowRef, arrowStyles, arrowUncentered, alignItemWithTriggerActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectPositionerContext"])();
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].open, true);
    const state = {
        open,
        side,
        align,
        uncentered: arrowUncentered
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: [
            arrowRef,
            forwardedRef
        ],
        props: [
            {
                style: arrowStyles,
                'aria-hidden': true
            },
            elementProps
        ],
        stateAttributesMapping
    });
    if (alignItemWithTriggerActive) {
        return null;
    }
    return element;
});
if ("TURBOPACK compile-time truthy", 1) SelectArrow.displayName = "SelectArrow";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/scroll-arrow/SelectScrollArrow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectScrollArrow",
    ()=>SelectScrollArrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useTimeout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/root/SelectRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/positioner/SelectPositionerContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useTransitionStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useTransitionStatus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useOpenChangeComplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useOpenChangeComplete.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/utils/scrollEdges.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/store.js [app-ssr] (ecmascript)");
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
const SelectScrollArrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectScrollArrow(componentProps, forwardedRef) {
    const { render, className, style, direction, keepMounted = false, ...elementProps } = componentProps;
    const isUp = direction === 'up';
    const { store, popupRef, listRef, handleScrollArrowVisibility, scrollArrowsMountedCountRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectRootContext"])();
    const { side, scrollDownArrowRef, scrollUpArrowRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositionerContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectPositionerContext"])();
    const visibleSelector = isUp ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].scrollUpArrowVisible : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].scrollDownArrowVisible;
    const stateVisible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, visibleSelector);
    const openMethod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectors"].openMethod);
    // Scroll arrows are disabled for touch modality as they are a hover-only element.
    const visible = stateVisible && openMethod !== 'touch';
    const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimeout"])();
    const scrollArrowRef = isUp ? scrollUpArrowRef : scrollDownArrowRef;
    const { transitionStatus, setMounted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useTransitionStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransitionStatus"])(visible);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        scrollArrowsMountedCountRef.current += 1;
        if (!store.state.hasScrollArrows) {
            store.set('hasScrollArrows', true);
        }
        return ()=>{
            scrollArrowsMountedCountRef.current = Math.max(0, scrollArrowsMountedCountRef.current - 1);
            if (scrollArrowsMountedCountRef.current === 0 && store.state.hasScrollArrows) {
                store.set('hasScrollArrows', false);
            }
        };
    }, [
        store,
        scrollArrowsMountedCountRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useOpenChangeComplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenChangeComplete"])({
        open: visible,
        ref: scrollArrowRef,
        onComplete () {
            if (!visible) {
                setMounted(false);
            }
        }
    });
    const state = {
        direction,
        visible,
        side,
        transitionStatus
    };
    const defaultProps = {
        'aria-hidden': true,
        children: isUp ? '▲' : '▼',
        style: {
            position: 'absolute'
        },
        onMouseMove (event) {
            if (event.movementX === 0 && event.movementY === 0 || timeout.isStarted()) {
                return;
            }
            store.set('activeIndex', null);
            function scrollNextItem() {
                const scroller = store.state.listElement ?? popupRef.current;
                if (!scroller) {
                    return;
                }
                store.set('activeIndex', null);
                handleScrollArrowVisibility();
                const maxScrollTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaxScrollOffset"])(scroller.scrollHeight, scroller.clientHeight);
                const scrollTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeScrollOffset"])(scroller.scrollTop, maxScrollTop);
                const isScrolledToEdge = scrollTop === (isUp ? 0 : maxScrollTop);
                const items = listRef.current;
                if (scrollTop !== scroller.scrollTop) {
                    scroller.scrollTop = scrollTop;
                }
                // Fallback when there are no items registered yet.
                if (items.length === 0) {
                    store.set(isUp ? 'scrollUpArrowVisible' : 'scrollDownArrowVisible', !isScrolledToEdge);
                }
                if (isScrolledToEdge) {
                    timeout.clear();
                    return;
                }
                if (items.length > 0) {
                    const scrollArrowHeight = scrollArrowRef.current?.offsetHeight || 0;
                    scroller.scrollTop = getTargetScrollTop(items, isUp, scrollTop, scroller.clientHeight, scrollArrowHeight, maxScrollTop);
                }
                timeout.start(40, scrollNextItem);
            }
            timeout.start(40, scrollNextItem);
        },
        onMouseLeave () {
            timeout.clear();
        }
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            scrollArrowRef
        ],
        state,
        props: [
            defaultProps,
            elementProps
        ]
    });
    const shouldRender = visible || keepMounted;
    if (!shouldRender) {
        return null;
    }
    return element;
});
if ("TURBOPACK compile-time truthy", 1) SelectScrollArrow.displayName = "SelectScrollArrow";
function getTargetScrollTop(items, isUp, scrollTop, clientHeight, scrollArrowHeight, maxScrollTop) {
    if (isUp) {
        let firstVisibleIndex = 0;
        const visibleTop = scrollTop + scrollArrowHeight - __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_EDGE_TOLERANCE_PX"];
        for(let i = 0; i < items.length; i += 1){
            const item = items[i];
            if (item && item.offsetTop >= visibleTop) {
                firstVisibleIndex = i;
                break;
            }
        }
        const targetIndex = Math.max(0, firstVisibleIndex - 1);
        const targetItem = items[targetIndex];
        return targetIndex < firstVisibleIndex && targetItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeScrollOffset"])(targetItem.offsetTop - scrollArrowHeight, maxScrollTop) : 0;
    }
    let lastVisibleIndex = items.length - 1;
    const visibleBottom = scrollTop + clientHeight - scrollArrowHeight + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_EDGE_TOLERANCE_PX"];
    for(let i = 0; i < items.length; i += 1){
        const item = items[i];
        if (item && item.offsetTop + item.offsetHeight > visibleBottom) {
            lastVisibleIndex = Math.max(0, i - 1);
            break;
        }
    }
    const targetIndex = Math.min(items.length - 1, lastVisibleIndex + 1);
    const targetItem = items[targetIndex];
    return targetIndex > lastVisibleIndex && targetItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeScrollOffset"])(targetItem.offsetTop + targetItem.offsetHeight - clientHeight + scrollArrowHeight, maxScrollTop) : maxScrollTop;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/scroll-down-arrow/SelectScrollDownArrow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectScrollDownArrow",
    ()=>SelectScrollDownArrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$scroll$2d$arrow$2f$SelectScrollArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/scroll-arrow/SelectScrollArrow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const SelectScrollDownArrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectScrollDownArrow(props, forwardedRef) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$scroll$2d$arrow$2f$SelectScrollArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectScrollArrow"], {
        ...props,
        ref: forwardedRef,
        direction: "down"
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectScrollDownArrow.displayName = "SelectScrollDownArrow";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/scroll-up-arrow/SelectScrollUpArrow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectScrollUpArrow",
    ()=>SelectScrollUpArrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$scroll$2d$arrow$2f$SelectScrollArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/scroll-arrow/SelectScrollArrow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const SelectScrollUpArrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectScrollUpArrow(props, forwardedRef) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$scroll$2d$arrow$2f$SelectScrollArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectScrollArrow"], {
        ...props,
        ref: forwardedRef,
        direction: "up"
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectScrollUpArrow.displayName = "SelectScrollUpArrow";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/group/SelectGroupContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectGroupContext",
    ()=>SelectGroupContext,
    "useSelectGroupContext",
    ()=>useSelectGroupContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const SelectGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) SelectGroupContext.displayName = "SelectGroupContext";
function useSelectGroupContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](SelectGroupContext);
    if (context === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: SelectGroupContext is missing. SelectGroup parts must be placed within <Select.Group>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/group/SelectGroup.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectGroup",
    ()=>SelectGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$group$2f$SelectGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/group/SelectGroupContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
/**
 * Groups related select items with the corresponding label.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const SelectGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectGroup(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const [labelId, setLabelId] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            labelId,
            setLabelId
        }), [
        labelId,
        setLabelId
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        props: [
            {
                role: 'group',
                'aria-labelledby': labelId
            },
            elementProps
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$group$2f$SelectGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectGroupContext"].Provider, {
        value: contextValue,
        children: element
    });
});
if ("TURBOPACK compile-time truthy", 1) SelectGroup.displayName = "SelectGroup";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/group-label/SelectGroupLabel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectGroupLabel",
    ()=>SelectGroupLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useBaseUiId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$group$2f$SelectGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/group/SelectGroupContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const SelectGroupLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SelectGroupLabel(componentProps, forwardedRef) {
    const { render, className, style, id: idProp, ...elementProps } = componentProps;
    const { setLabelId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$group$2f$SelectGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectGroupContext"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        setLabelId(id);
    }, [
        id,
        setLabelId
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$internals$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        props: [
            {
                id
            },
            elementProps
        ]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) SelectGroupLabel.displayName = "SelectGroupLabel";
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/index.parts.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$arrow$2f$SelectArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectArrow"],
    "Backdrop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$backdrop$2f$SelectBackdrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectBackdrop"],
    "Group",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$group$2f$SelectGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectGroup"],
    "GroupLabel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$group$2d$label$2f$SelectGroupLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectGroupLabel"],
    "Icon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$icon$2f$SelectIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectIcon"],
    "Item",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"],
    "ItemIndicator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2d$indicator$2f$SelectItemIndicator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItemIndicator"],
    "ItemText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2d$text$2f$SelectItemText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItemText"],
    "Label",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$label$2f$SelectLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectLabel"],
    "List",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$list$2f$SelectList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectList"],
    "Popup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$SelectPopup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectPopup"],
    "Portal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$portal$2f$SelectPortal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectPortal"],
    "Positioner",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositioner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectPositioner"],
    "Root",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectRoot"],
    "ScrollDownArrow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$scroll$2d$down$2d$arrow$2f$SelectScrollDownArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectScrollDownArrow"],
    "ScrollUpArrow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$scroll$2d$up$2d$arrow$2f$SelectScrollUpArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectScrollUpArrow"],
    "Separator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$separator$2f$Separator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"],
    "Trigger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$trigger$2f$SelectTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"],
    "Value",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$value$2f$SelectValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/index.parts.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$root$2f$SelectRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/root/SelectRoot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$label$2f$SelectLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/label/SelectLabel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$trigger$2f$SelectTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/trigger/SelectTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$value$2f$SelectValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/value/SelectValue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$icon$2f$SelectIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/icon/SelectIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$portal$2f$SelectPortal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/portal/SelectPortal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$backdrop$2f$SelectBackdrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/backdrop/SelectBackdrop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$positioner$2f$SelectPositioner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/positioner/SelectPositioner.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$popup$2f$SelectPopup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/popup/SelectPopup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$list$2f$SelectList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/list/SelectList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2f$SelectItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/item/SelectItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2d$indicator$2f$SelectItemIndicator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/item-indicator/SelectItemIndicator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$item$2d$text$2f$SelectItemText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/item-text/SelectItemText.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$arrow$2f$SelectArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/arrow/SelectArrow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$scroll$2d$down$2d$arrow$2f$SelectScrollDownArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/scroll-down-arrow/SelectScrollDownArrow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$scroll$2d$up$2d$arrow$2f$SelectScrollUpArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/scroll-up-arrow/SelectScrollUpArrow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$group$2f$SelectGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/group/SelectGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$group$2d$label$2f$SelectGroupLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/group-label/SelectGroupLabel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$separator$2f$Separator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/separator/Separator.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/index.parts.js [app-ssr] (ecmascript) <export * as Select>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$select$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@base-ui/react/esm/select/index.parts.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronDown
]);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
 //# sourceMappingURL=chevron-down.mjs.map
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-ssr] (ecmascript) <export default as ChevronDownIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDownIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronUp
]);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m18 15-6-6-6 6",
            key: "153udz"
        }
    ]
];
const ChevronUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-up", __iconNode);
;
 //# sourceMappingURL=chevron-up.mjs.map
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-ssr] (ecmascript) <export default as ChevronUpIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronUpIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Plus
]);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("plus", __iconNode);
;
 //# sourceMappingURL=plus.mjs.map
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDistance",
    ()=>formatDistance
]);
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "in " + result;
        } else {
            return result + " ago";
        }
    }
    return result;
};
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildFormatLongFn",
    ()=>buildFormatLongFn
]);
function buildFormatLongFn(args) {
    return (options = {})=>{
        // TODO: Remove String()
        const width = options.width ? String(options.width) : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLong",
    ()=>formatLong
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-ssr] (ecmascript)");
;
const dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
const timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
const dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatRelative",
    ()=>formatRelative
]);
const formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */ /**
 * The map of localized values for each width.
 */ /**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */ /**
 * Converts the unit value to the tuple of values.
 */ /**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */ /**
 * The tuple of localized quarter values. The first element represents Q1.
 */ /**
 * The tuple of localized day values. The first element represents Sunday.
 */ /**
 * The tuple of localized month values. The first element represents January.
 */ __turbopack_context__.s([
    "buildLocalizeFn",
    ()=>buildLocalizeFn
]);
function buildLocalizeFn(args) {
    return (value, options)=>{
        const context = options?.context ? String(options.context) : "standalone";
        let valuesArray;
        if (context === "formatting" && args.formattingValues) {
            const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            const width = options?.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            const defaultWidth = args.defaultWidth;
            const width = options?.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[width] || args.values[defaultWidth];
        }
        const index = args.argumentCallback ? args.argumentCallback(value) : value;
        // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/en-US/_lib/localize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localize",
    ()=>localize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-ssr] (ecmascript)");
;
const eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
const dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    const rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch(rem100 % 10){
            case 1:
                return number + "st";
            case 2:
                return number + "nd";
            case 3:
                return number + "rd";
        }
    }
    return number + "th";
};
const localize = {
    ordinalNumber,
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchFn",
    ()=>buildMatchFn
]);
function buildMatchFn(args) {
    return (string, options = {})=>{
        const width = options.width;
        const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        const matchResult = string.match(matchPattern);
        if (!matchResult) {
            return null;
        }
        const matchedString = matchResult[0];
        const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern)=>pattern.test(matchedString)) : findKey(parsePatterns, (pattern)=>pattern.test(matchedString));
        let value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
function findKey(object, predicate) {
    for(const key in object){
        if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
            return key;
        }
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(let key = 0; key < array.length; key++){
        if (predicate(array[key])) {
            return key;
        }
    }
    return undefined;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchPatternFn",
    ()=>buildMatchPatternFn
]);
function buildMatchPatternFn(args) {
    return (string, options = {})=>{
        const matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        // [TODO] I challenge you to fix the type
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/en-US/_lib/match.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "match",
    ()=>match
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-ssr] (ecmascript)");
;
;
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
const match = {
    ordinalNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchPatternFn"])({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "enUS",
    ()=>enUS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/en-US/_lib/localize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/en-US/_lib/match.js [app-ssr] (ecmascript)");
;
;
;
;
;
const enUS = {
    code: "en-US",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
const __TURBOPACK__default__export__ = enUS;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript) <export enUS as defaultLocale>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enUS"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultOptions",
    ()=>getDefaultOptions,
    "setDefaultOptions",
    ()=>setDefaultOptions
]);
let defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ /**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ __turbopack_context__.s([
    "constructFromSymbol",
    ()=>constructFromSymbol,
    "daysInWeek",
    ()=>daysInWeek,
    "daysInYear",
    ()=>daysInYear,
    "maxTime",
    ()=>maxTime,
    "millisecondsInDay",
    ()=>millisecondsInDay,
    "millisecondsInHour",
    ()=>millisecondsInHour,
    "millisecondsInMinute",
    ()=>millisecondsInMinute,
    "millisecondsInSecond",
    ()=>millisecondsInSecond,
    "millisecondsInWeek",
    ()=>millisecondsInWeek,
    "minTime",
    ()=>minTime,
    "minutesInDay",
    ()=>minutesInDay,
    "minutesInHour",
    ()=>minutesInHour,
    "minutesInMonth",
    ()=>minutesInMonth,
    "minutesInYear",
    ()=>minutesInYear,
    "monthsInQuarter",
    ()=>monthsInQuarter,
    "monthsInYear",
    ()=>monthsInYear,
    "quartersInYear",
    ()=>quartersInYear,
    "secondsInDay",
    ()=>secondsInDay,
    "secondsInHour",
    ()=>secondsInHour,
    "secondsInMinute",
    ()=>secondsInMinute,
    "secondsInMonth",
    ()=>secondsInMonth,
    "secondsInQuarter",
    ()=>secondsInQuarter,
    "secondsInWeek",
    ()=>secondsInWeek,
    "secondsInYear",
    ()=>secondsInYear
]);
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
const minTime = -maxTime;
const millisecondsInWeek = 604800000;
const millisecondsInDay = 86400000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInSecond = 1000;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;
const constructFromSymbol = Symbol.for("constructDateFrom");
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constructFrom",
    ()=>constructFrom,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
;
function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && typeof date === "object" && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFromSymbol"] in date) return date[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFromSymbol"]](value);
    if (date instanceof Date) return new date.constructor(value);
    return new Date(value);
}
const __TURBOPACK__default__export__ = constructFrom;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "toDate",
    ()=>toDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
;
function toDate(argument, context) {
    // [TODO] Get rid of `toDate` or `constructFrom`?
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(context || argument, argument);
}
const __TURBOPACK__default__export__ = toDate;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimezoneOffsetInMilliseconds",
    ()=>getTimezoneOffsetInMilliseconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
function getTimezoneOffsetInMilliseconds(date) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date);
    const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/normalizeDates.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeDates",
    ()=>normalizeDates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
;
function normalizeDates(context, ...dates) {
    const normalize = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"].bind(null, context || dates.find((date)=>typeof date === "object"));
    return dates.map(normalize);
}
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/startOfDay.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfDay",
    ()=>startOfDay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
function startOfDay(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfDay;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/differenceInCalendarDays.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarDays",
    ()=>differenceInCalendarDays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/normalizeDates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/startOfDay.js [app-ssr] (ecmascript)");
;
;
;
;
function differenceInCalendarDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    const laterStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(laterDate_);
    const earlierStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(earlierDate_);
    const laterTimestamp = +laterStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(laterStartOfDay);
    const earlierTimestamp = +earlierStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(earlierStartOfDay);
    // Round the number of days to the nearest integer because the number of
    // milliseconds in a day is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((laterTimestamp - earlierTimestamp) / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInDay"]);
}
const __TURBOPACK__default__export__ = differenceInCalendarDays;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/startOfYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfYear",
    ()=>startOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
function startOfYear(date, options) {
    const date_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    date_.setFullYear(date_.getFullYear(), 0, 1);
    date_.setHours(0, 0, 0, 0);
    return date_;
}
const __TURBOPACK__default__export__ = startOfYear;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/getDayOfYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDayOfYear",
    ()=>getDayOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/differenceInCalendarDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/startOfYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
function getDayOfYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(_date, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfYear"])(_date));
    const dayOfYear = diff + 1;
    return dayOfYear;
}
const __TURBOPACK__default__export__ = getDayOfYear;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfWeek",
    ()=>startOfWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
function startOfWeek(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    _date.setDate(_date.getDate() - diff);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfWeek;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/startOfISOWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfISOWeek",
    ()=>startOfISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
;
function startOfISOWeek(date, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(date, {
        ...options,
        weekStartsOn: 1
    });
}
const __TURBOPACK__default__export__ = startOfISOWeek;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/getISOWeekYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeekYear",
    ()=>getISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/startOfISOWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
function getISOWeekYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const fourthOfJanuaryOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuaryOfNextYear);
    const fourthOfJanuaryOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuaryOfThisYear);
    if (_date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (_date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}
const __TURBOPACK__default__export__ = getISOWeekYear;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/startOfISOWeekYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfISOWeekYear",
    ()=>startOfISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/getISOWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/startOfISOWeek.js [app-ssr] (ecmascript)");
;
;
;
function startOfISOWeekYear(date, options) {
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date, options);
    const fourthOfJanuary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuary);
}
const __TURBOPACK__default__export__ = startOfISOWeekYear;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/getISOWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeek",
    ()=>getISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/startOfISOWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/startOfISOWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
;
function getISOWeek(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfISOWeek"])(_date) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfISOWeekYear"])(_date);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getISOWeek;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/getWeekYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeekYear",
    ()=>getWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
;
function getWeekYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const firstWeekOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeekOfNextYear, options);
    const firstWeekOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeekOfThisYear, options);
    if (+_date >= +startOfNextYear) {
        return year + 1;
    } else if (+_date >= +startOfThisYear) {
        return year;
    } else {
        return year - 1;
    }
}
const __TURBOPACK__default__export__ = getWeekYear;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/startOfWeekYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfWeekYear",
    ()=>startOfWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/getWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
;
;
;
;
function startOfWeekYear(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeekYear"])(date, options);
    const firstWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeek, options);
    return _date;
}
const __TURBOPACK__default__export__ = startOfWeekYear;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/getWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeek",
    ()=>getWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/startOfWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
;
function getWeek(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(_date, options) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$startOfWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeekYear"])(_date, options);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getWeek;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/addLeadingZeros.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addLeadingZeros",
    ()=>addLeadingZeros
]);
function addLeadingZeros(number, targetLength) {
    const sign = number < 0 ? "-" : "";
    const output = Math.abs(number).toString().padStart(targetLength, "0");
    return sign + output;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/format/lightFormatters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lightFormatters",
    ()=>lightFormatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/addLeadingZeros.js [app-ssr] (ecmascript)");
;
const lightFormatters = {
    // Year
    y (date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        const signedYear = date.getFullYear();
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M (date, token) {
        const month = date.getMonth();
        return token === "M" ? String(month + 1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(month + 1, 2);
    },
    // Day of the month
    d (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getDate(), token.length);
    },
    // AM or PM
    a (date, token) {
        const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return dayPeriodEnumValue.toUpperCase();
            case "aaa":
                return dayPeriodEnumValue;
            case "aaaaa":
                return dayPeriodEnumValue[0];
            case "aaaa":
            default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
    },
    // Hour [1-12]
    h (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getHours(), token.length);
    },
    // Minute
    m (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getMinutes(), token.length);
    },
    // Second
    s (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getSeconds(), token.length);
    },
    // Fraction of second
    S (date, token) {
        const numberOfDigits = token.length;
        const milliseconds = date.getMilliseconds();
        const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(fractionalSeconds, token.length);
    }
};
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/format/formatters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatters",
    ()=>formatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/getDayOfYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/getISOWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/getISOWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/getWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/getWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/addLeadingZeros.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/format/lightFormatters.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
};
const formatters = {
    // Era
    G: function(date, token, localize) {
        const era = date.getFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return localize.era(era, {
                    width: "abbreviated"
                });
            // A, B
            case "GGGGG":
                return localize.era(era, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return localize.era(era, {
                    width: "wide"
                });
        }
    },
    // Year
    y: function(date, token, localize) {
        // Ordinal number
        if (token === "yo") {
            const signedYear = date.getFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            const year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: "year"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
        const signedWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeekYear"])(date, options);
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        // Two digit year
        if (token === "YY") {
            const twoDigitYear = weekYear % 100;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(twoDigitYear, 2);
        }
        // Ordinal number
        if (token === "Yo") {
            return localize.ordinalNumber(weekYear, {
                unit: "year"
            });
        }
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
        const isoWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date);
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(date, token) {
        const year = date.getFullYear();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(year, token.length);
    },
    // Quarter
    Q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "Q":
                return String(quarter);
            // 01, 02, 03, 04
            case "QQ":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone quarter
    q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "q":
                return String(quarter);
            // 01, 02, 03, 04
            case "qq":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Month
    M: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            case "M":
            case "MM":
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].M(date, token);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "MMM":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return localize.month(month, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone month
    L: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return String(month + 1);
            // 01, 02, ..., 12
            case "LL":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "LLL":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return localize.month(month, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Local week of year
    w: function(date, token, localize, options) {
        const week = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeek"])(date, options);
        if (token === "wo") {
            return localize.ordinalNumber(week, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
        const isoWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeek"])(date);
        if (token === "Io") {
            return localize.ordinalNumber(isoWeek, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
        if (token === "do") {
            return localize.ordinalNumber(date.getDate(), {
                unit: "date"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
        const dayOfYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayOfYear"])(date);
        if (token === "Do") {
            return localize.ordinalNumber(dayOfYear, {
                unit: "dayOfYear"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(dayOfYear, token.length);
    },
    // Day of week
    E: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Local day of week
    e: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case "e":
                return String(localDayOfWeek);
            // Padded numerical value
            case "ee":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "eee":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone local day of week
    c: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case "c":
                return String(localDayOfWeek);
            // Padded numerical value
            case "cc":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "ccc":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // ISO day of week
    i: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case "i":
                return String(isoDayOfWeek);
            // 02
            case "ii":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoDayOfWeek, token.length);
            // 2nd
            case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "iiiii":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "iiiiii":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "iiii":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM or PM
    a: function(date, token, localize) {
        const hours = date.getHours();
        const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM, PM, midnight, noon
    b: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours === 12) {
            dayPeriodEnumValue = dayPeriodEnum.noon;
        } else if (hours === 0) {
            dayPeriodEnumValue = dayPeriodEnum.midnight;
        } else {
            dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        }
        switch(token){
            case "b":
            case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours >= 17) {
            dayPeriodEnumValue = dayPeriodEnum.evening;
        } else if (hours >= 12) {
            dayPeriodEnumValue = dayPeriodEnum.afternoon;
        } else if (hours >= 4) {
            dayPeriodEnumValue = dayPeriodEnum.morning;
        } else {
            dayPeriodEnumValue = dayPeriodEnum.night;
        }
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Hour [1-12]
    h: function(date, token, localize) {
        if (token === "ho") {
            let hours = date.getHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
        if (token === "Ho") {
            return localize.ordinalNumber(date.getHours(), {
                unit: "hour"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
        const hours = date.getHours() % 12;
        if (token === "Ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
    },
    // Hour [1-24]
    k: function(date, token, localize) {
        let hours = date.getHours();
        if (hours === 0) hours = 24;
        if (token === "ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
        if (token === "mo") {
            return localize.ordinalNumber(date.getMinutes(), {
                unit: "minute"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].m(date, token);
    },
    // Second
    s: function(date, token, localize) {
        if (token === "so") {
            return localize.ordinalNumber(date.getSeconds(), {
                unit: "second"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        if (timezoneOffset === 0) {
            return "Z";
        }
        switch(token){
            // Hours and optional minutes
            case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "zzzz":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Seconds timestamp
    t: function(date, token, _localize) {
        const timestamp = Math.trunc(+date / 1000);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(+date, token.length);
    }
};
function formatTimezoneShort(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = Math.trunc(absOffset / 60);
    const minutes = absOffset % 60;
    if (minutes === 0) {
        return sign + String(hours);
    }
    return sign + String(hours) + delimiter + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
    if (offset % 60 === 0) {
        const sign = offset > 0 ? "-" : "+";
        return sign + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.trunc(absOffset / 60), 2);
    const minutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/format/longFormatters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "longFormatters",
    ()=>longFormatters
]);
const dateLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "P":
            return formatLong.date({
                width: "short"
            });
        case "PP":
            return formatLong.date({
                width: "medium"
            });
        case "PPP":
            return formatLong.date({
                width: "long"
            });
        case "PPPP":
        default:
            return formatLong.date({
                width: "full"
            });
    }
};
const timeLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "p":
            return formatLong.time({
                width: "short"
            });
        case "pp":
            return formatLong.time({
                width: "medium"
            });
        case "ppp":
            return formatLong.time({
                width: "long"
            });
        case "pppp":
        default:
            return formatLong.time({
                width: "full"
            });
    }
};
const dateTimeLongFormatter = (pattern, formatLong)=>{
    const matchResult = pattern.match(/(P+)(p+)?/) || [];
    const datePattern = matchResult[1];
    const timePattern = matchResult[2];
    if (!timePattern) {
        return dateLongFormatter(pattern, formatLong);
    }
    let dateTimeFormat;
    switch(datePattern){
        case "P":
            dateTimeFormat = formatLong.dateTime({
                width: "short"
            });
            break;
        case "PP":
            dateTimeFormat = formatLong.dateTime({
                width: "medium"
            });
            break;
        case "PPP":
            dateTimeFormat = formatLong.dateTime({
                width: "long"
            });
            break;
        case "PPPP":
        default:
            dateTimeFormat = formatLong.dateTime({
                width: "full"
            });
            break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
const longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/protectedTokens.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isProtectedDayOfYearToken",
    ()=>isProtectedDayOfYearToken,
    "isProtectedWeekYearToken",
    ()=>isProtectedWeekYearToken,
    "warnOrThrowProtectedError",
    ()=>warnOrThrowProtectedError
]);
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = [
    "D",
    "DD",
    "YY",
    "YYYY"
];
function isProtectedDayOfYearToken(token) {
    return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
    return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
    const _message = message(token, format, input);
    console.warn(_message);
    if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format, input) {
    const subject = token[0] === "Y" ? "years" : "days of the month";
    return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/isDate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isDate",
    ()=>isDate
]);
function isDate(value) {
    return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
const __TURBOPACK__default__export__ = isDate;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/isValid.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isValid",
    ()=>isValid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/isDate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
function isValid(date) {
    return !(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDate"])(date) && typeof date !== "number" || isNaN(+(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date)));
}
const __TURBOPACK__default__export__ = isValid;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "format",
    ()=>format,
    "formatDate",
    ()=>format
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript) <export enUS as defaultLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/format/formatters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$longFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/format/longFormatters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/_lib/protectedTokens.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/isValid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
;
function format(date, formatStr, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const locale = options?.locale ?? defaultOptions.locale ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__["defaultLocale"];
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const originalDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValid"])(originalDate)) {
        throw new RangeError("Invalid time value");
    }
    let parts = formatStr.match(longFormattingTokensRegExp).map((substring)=>{
        const firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            const longFormatter = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$longFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["longFormatters"][firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp).map((substring)=>{
        // Replace two single quote characters with one single quote character
        if (substring === "''") {
            return {
                isToken: false,
                value: "'"
            };
        }
        const firstCharacter = substring[0];
        if (firstCharacter === "'") {
            return {
                isToken: false,
                value: cleanEscapedString(substring)
            };
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatters"][firstCharacter]) {
            return {
                isToken: true,
                value: substring
            };
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        return {
            isToken: false,
            value: substring
        };
    });
    // invoke localize preprocessor (only for french locales at the moment)
    if (locale.localize.preprocessor) {
        parts = locale.localize.preprocessor(originalDate, parts);
    }
    const formatterOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale
    };
    return parts.map((part)=>{
        if (!part.isToken) return part.value;
        const token = part.value;
        if (!options?.useAdditionalWeekYearTokens && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProtectedWeekYearToken"])(token) || !options?.useAdditionalDayOfYearTokens && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProtectedDayOfYearToken"])(token)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warnOrThrowProtectedError"])(token, formatStr, String(date));
        }
        const formatter = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatters"][token[0]];
        return formatter(originalDate, token, locale.localize, formatterOptions);
    }).join("");
}
function cleanEscapedString(input) {
    const matched = input.match(escapedStringRegExp);
    if (!matched) {
        return input;
    }
    return matched[1].replace(doubleQuoteRegExp, "'");
}
const __TURBOPACK__default__export__ = format;
}),
"[project]/Desktop/Hackathon/website/node_modules/date-fns/parseISO.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "parseISO",
    ()=>parseISO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
function parseISO(argument, options) {
    const invalidDate = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in, NaN);
    const additionalDigits = options?.additionalDigits ?? 2;
    const dateStrings = splitDateString(argument);
    let date;
    if (dateStrings.date) {
        const parseYearResult = parseYear(dateStrings.date, additionalDigits);
        date = parseDate(parseYearResult.restDateString, parseYearResult.year);
    }
    if (!date || isNaN(+date)) return invalidDate();
    const timestamp = +date;
    let time = 0;
    let offset;
    if (dateStrings.time) {
        time = parseTime(dateStrings.time);
        if (isNaN(time)) return invalidDate();
    }
    if (dateStrings.timezone) {
        offset = parseTimezone(dateStrings.timezone);
        if (isNaN(offset)) return invalidDate();
    } else {
        const tmpDate = new Date(timestamp + time);
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(0, options?.in);
        result.setFullYear(tmpDate.getUTCFullYear(), tmpDate.getUTCMonth(), tmpDate.getUTCDate());
        result.setHours(tmpDate.getUTCHours(), tmpDate.getUTCMinutes(), tmpDate.getUTCSeconds(), tmpDate.getUTCMilliseconds());
        return result;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(timestamp + time + offset, options?.in);
}
const patterns = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/
};
const dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
    const dateStrings = {};
    const array = dateString.split(patterns.dateTimeDelimiter);
    let timeString;
    // The regex match should only return at maximum two array elements.
    // [date], [time], or [date, time].
    if (array.length > 2) {
        return dateStrings;
    }
    if (/:/.test(array[0])) {
        timeString = array[0];
    } else {
        dateStrings.date = array[0];
        timeString = array[1];
        if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
            dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
            timeString = dateString.substr(dateStrings.date.length, dateString.length);
        }
    }
    if (timeString) {
        const token = patterns.timezone.exec(timeString);
        if (token) {
            dateStrings.time = timeString.replace(token[1], "");
            dateStrings.timezone = token[1];
        } else {
            dateStrings.time = timeString;
        }
    }
    return dateStrings;
}
function parseYear(dateString, additionalDigits) {
    const regex = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)");
    const captures = dateString.match(regex);
    // Invalid ISO-formatted year
    if (!captures) return {
        year: NaN,
        restDateString: ""
    };
    const year = captures[1] ? parseInt(captures[1]) : null;
    const century = captures[2] ? parseInt(captures[2]) : null;
    // either year or century is null, not both
    return {
        year: century === null ? year : century * 100,
        restDateString: dateString.slice((captures[1] || captures[2]).length)
    };
}
function parseDate(dateString, year) {
    // Invalid ISO-formatted year
    if (year === null) return new Date(NaN);
    const captures = dateString.match(dateRegex);
    // Invalid ISO-formatted string
    if (!captures) return new Date(NaN);
    const isWeekDate = !!captures[4];
    const dayOfYear = parseDateUnit(captures[1]);
    const month = parseDateUnit(captures[2]) - 1;
    const day = parseDateUnit(captures[3]);
    const week = parseDateUnit(captures[4]);
    const dayOfWeek = parseDateUnit(captures[5]) - 1;
    if (isWeekDate) {
        if (!validateWeekDate(year, week, dayOfWeek)) {
            return new Date(NaN);
        }
        return dayOfISOWeekYear(year, week, dayOfWeek);
    } else {
        const date = new Date(0);
        if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
            return new Date(NaN);
        }
        date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
        return date;
    }
}
function parseDateUnit(value) {
    return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
    const captures = timeString.match(timeRegex);
    if (!captures) return NaN; // Invalid ISO-formatted time
    const hours = parseTimeUnit(captures[1]);
    const minutes = parseTimeUnit(captures[2]);
    const seconds = parseTimeUnit(captures[3]);
    if (!validateTime(hours, minutes, seconds)) {
        return NaN;
    }
    return hours * __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInHour"] + minutes * __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInMinute"] + seconds * 1000;
}
function parseTimeUnit(value) {
    return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
    if (timezoneString === "Z") return 0;
    const captures = timezoneString.match(timezoneRegex);
    if (!captures) return 0;
    const sign = captures[1] === "+" ? -1 : 1;
    const hours = parseInt(captures[2]);
    const minutes = captures[3] && parseInt(captures[3]) || 0;
    if (!validateTimezone(hours, minutes)) {
        return NaN;
    }
    return sign * (hours * __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInHour"] + minutes * __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInMinute"]);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
    const date = new Date(0);
    date.setUTCFullYear(isoWeekYear, 0, 4);
    const fourthOfJanuaryDay = date.getUTCDay() || 7;
    const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
// Validation functions
// February is null to handle the leap year (using ||)
const daysInMonths = [
    31,
    null,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
    return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
    return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
    return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
    if (hours === 24) {
        return minutes === 0 && seconds === 0;
    }
    return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
    return minutes >= 0 && minutes <= 59;
}
const __TURBOPACK__default__export__ = parseISO;
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Eye
]);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
];
const Eye = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("eye", __iconNode);
;
 //# sourceMappingURL=eye.mjs.map
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Eye",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Trash2
]);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 11v6",
            key: "nco0om"
        }
    ],
    [
        "path",
        {
            d: "M14 11v6",
            key: "outv1u"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
            key: "miytrc"
        }
    ],
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
            key: "e791ji"
        }
    ]
];
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("trash-2", __iconNode);
;
 //# sourceMappingURL=trash-2.mjs.map
}),
"[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-ssr] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Hackathon/website/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/image-blur-svg.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImageBlurSvg", {
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
});
function getImageBlurSvg({ widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit }) {
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? `viewBox='0 0 ${svgWidth} ${svgHeight}'` : '';
    const preserveAspectRatio = viewBox ? 'none' : objectFit === 'contain' ? 'xMidYMid' : objectFit === 'cover' ? 'xMidYMid slice' : 'none';
    return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${viewBox}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${preserveAspectRatio}' style='filter: url(%23b);' href='${blurDataURL}'/%3E%3C/svg%3E`;
} //# sourceMappingURL=image-blur-svg.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/image-config.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VALID_LOADERS: null,
    imageConfigDefault: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    'default',
    'imgix',
    'cloudinary',
    'akamai',
    'custom'
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: '/_next/image',
    loader: 'default',
    loaderFile: '',
    /**
   * @deprecated Use `remotePatterns` instead to protect your application from malicious users.
   */ domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 14400,
    formats: [
        'image/webp'
    ],
    maximumRedirects: 3,
    maximumResponseBody: 50000000,
    dangerouslyAllowLocalIP: false,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: `script-src 'none'; frame-src 'none'; sandbox;`,
    contentDispositionType: 'attachment',
    localPatterns: undefined,
    remotePatterns: [],
    qualities: [
        75
    ],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/get-img-props.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImgProps", {
    enumerable: true,
    get: function() {
        return getImgProps;
    }
});
const _warnonce = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/utils/warn-once.js [app-ssr] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/deployment-id.js [app-ssr] (ecmascript)");
const _imageblursvg = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/image-blur-svg.js [app-ssr] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/image-config.js [app-ssr] (ecmascript)");
const VALID_LOADING_VALUES = [
    'lazy',
    'eager',
    undefined
];
// Object-fit values that are not valid background-size values
const INVALID_BACKGROUND_SIZE_VALUES = [
    '-moz-initial',
    'fill',
    'none',
    'scale-down',
    undefined
];
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return !!src && typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === 'undefined') {
        return x;
    }
    if (typeof x === 'number') {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === 'string' && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths({ deviceSizes, allSizes }, width, sizes) {
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: 'w'
            };
        }
        return {
            widths: allSizes,
            kind: 'w'
        };
    }
    if (typeof width !== 'number') {
        return {
            widths: deviceSizes,
            kind: 'w'
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: 'x'
    };
}
function generateImgAttrs({ config, src, unoptimized, width, quality, sizes, loader }) {
    if (unoptimized) {
        const deploymentId = (0, _deploymentid.getDeploymentId)();
        if (src.startsWith('/') && !src.startsWith('//') && deploymentId) {
            const sep = src.includes('?') ? '&' : '?';
            src = `${src}${sep}dpl=${deploymentId}`;
        }
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === 'w' ? '100vw' : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps({ src, sizes, unoptimized = false, priority = false, preload = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = 'empty', blurDataURL, fetchPriority, decoding = 'async', layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest }, _state) {
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ('allSizes' in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes,
            qualities
        };
    }
    if (typeof defaultLoader === 'undefined') {
        throw Object.defineProperty(new Error('images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: false,
            configurable: true
        });
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = '__next_img_default' in loader;
    if (isDefaultLoader) {
        if (config.loader === 'custom') {
            throw Object.defineProperty(new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: false,
                configurable: true
            });
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === 'fill') {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: '100%',
                height: 'auto'
            },
            responsive: {
                width: '100%',
                height: 'auto'
            }
        };
        const layoutToSizes = {
            responsive: '100vw',
            fill: '100vw'
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = '';
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: false,
                configurable: true
            });
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: false,
                configurable: true
            });
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === 'string' ? src : staticSrc;
    let isLazy = !priority && !preload && (loading === 'lazy' || typeof loading === 'undefined');
    if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && !config.dangerouslyAllowSVG && src.split('?', 1)[0].endsWith('.svg')) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    const qualityInt = getInt(quality);
    if ("TURBOPACK compile-time truthy", 1) {
        if (config.output === 'export' && isDefaultLoader && !unoptimized) {
            throw Object.defineProperty(new Error(`Image Optimization using the default loader is not compatible with \`{ output: 'export' }\`.
  Possible solutions:
    - Remove \`{ output: 'export' }\` and run "next start" to run server mode including the Image Optimization API.
    - Configure \`{ images: { unoptimized: true } }\` in \`next.config.js\` to disable the Image Optimization API.
  Read more: https://nextjs.org/docs/messages/export-image-api`), "__NEXT_ERROR_CODE", {
                value: "E500",
                enumerable: false,
                configurable: true
            });
        }
        if (!src) {
            // React doesn't show the stack trace and there's
            // no `src` to help identify which image, so we
            // instead console.error(ref) during mount.
            unoptimized = true;
        } else {
            if (fill) {
                if (width) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "width" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E96",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (height) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "height" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E115",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.position && style.position !== 'absolute') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E216",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.width && style.width !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E73",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.height && style.height !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E404",
                        enumerable: false,
                        configurable: true
                    });
                }
            } else {
                if (typeof widthInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "width" property.`), "__NEXT_ERROR_CODE", {
                        value: "E451",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(widthInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "width" property. Expected a numeric value in pixels but received "${width}".`), "__NEXT_ERROR_CODE", {
                        value: "E66",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (typeof heightInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "height" property.`), "__NEXT_ERROR_CODE", {
                        value: "E397",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(heightInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "height" property. Expected a numeric value in pixels but received "${height}".`), "__NEXT_ERROR_CODE", {
                        value: "E444",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/^[\x00-\x20]/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot start with a space or control character. Use src.trimStart() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E176",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/[\x00-\x20]$/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot end with a space or control character. Use src.trimEnd() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E21",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!VALID_LOADING_VALUES.includes(loading)) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`), "__NEXT_ERROR_CODE", {
                value: "E357",
                enumerable: false,
                configurable: true
            });
        }
        if (priority && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E218",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E803",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && priority) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "priority" properties. Only "preload" should be used.`), "__NEXT_ERROR_CODE", {
                value: "E802",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty' && placeholder !== 'blur' && !placeholder.startsWith('data:image/')) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "placeholder" property "${placeholder}".`), "__NEXT_ERROR_CODE", {
                value: "E431",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty') {
            if (widthInt && heightInt && widthInt * heightInt < 1600) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.`);
            }
        }
        if (qualityInt && config.qualities && !config.qualities.includes(qualityInt)) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using quality "${qualityInt}" which is not configured in images.qualities [${config.qualities.join(', ')}]. Please update your config to [${[
                ...config.qualities,
                qualityInt
            ].sort().join(', ')}].` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-qualities`);
        }
        if (placeholder === 'blur' && !blurDataURL) {
            const VALID_BLUR_EXT = [
                'jpeg',
                'png',
                'webp',
                'avif'
            ] // should match next-image-loader
            ;
            throw Object.defineProperty(new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')} (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`), "__NEXT_ERROR_CODE", {
                value: "E371",
                enumerable: false,
                configurable: true
            });
        }
        if ('ref' in rest) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoad" property instead.`);
        }
        if (!unoptimized && !isDefaultLoader) {
            const urlStr = loader({
                config,
                src,
                width: widthInt || 400,
                quality: qualityInt || 75
            });
            let url;
            try {
                url = new URL(urlStr);
            } catch (err) {}
            if (urlStr === src || url && url.pathname === src && !url.search) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
            }
        }
        if (onLoadingComplete) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.`);
        }
        for (const [legacyKey, legacyValue] of Object.entries({
            layout,
            objectFit,
            objectPosition,
            lazyBoundary,
            lazyRoot
        })){
            if (legacyValue) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has legacy prop "${legacyKey}". Did you forget to run the codemod?` + `\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13`);
            }
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    const imgStyle = Object.assign(fill ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: 'transparent'
    }, style);
    const backgroundImage = !blurComplete && placeholder !== 'empty' ? placeholder === 'blur' ? `url("data:image/svg+xml;charset=utf-8,${(0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || '',
        objectFit: imgStyle.objectFit
    })}")` : `url("${placeholder}")` // assume `data:image/`
     : null;
    const backgroundSize = !INVALID_BACKGROUND_SIZE_VALUES.includes(imgStyle.objectFit) ? imgStyle.objectFit : imgStyle.objectFit === 'fill' ? '100% 100%' // the background-size equivalent of `fill`
     : 'cover';
    let placeholderStyle = backgroundImage ? {
        backgroundSize,
        backgroundPosition: imgStyle.objectPosition || '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundImage
    } : {};
    if ("TURBOPACK compile-time truthy", 1) {
        if (placeholderStyle.backgroundImage && placeholder === 'blur' && blurDataURL?.startsWith('/')) {
            // During `next dev`, we don't want to generate blur placeholders with webpack
            // because it can delay starting the dev server. Instead, `next-image-loader.js`
            // will inline a special url to lazily generate the blur placeholder at request time.
            placeholderStyle.backgroundImage = `url("${blurDataURL}")`;
        }
    }
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    const loadingFinal = isLazy ? 'lazy' : loading;
    if ("TURBOPACK compile-time truthy", 1) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    const props = {
        ...rest,
        loading: loadingFinal,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding,
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
    };
    const meta = {
        unoptimized,
        preload: preload || priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/side-effect.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SideEffect;
    }
});
const _react = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const isServer = ("TURBOPACK compile-time value", "undefined") === 'undefined';
const useClientOnlyLayoutEffect = ("TURBOPACK compile-time truthy", 1) ? ()=>{} : "TURBOPACK unreachable";
const useClientOnlyEffect = ("TURBOPACK compile-time truthy", 1) ? ()=>{} : "TURBOPACK unreachable";
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements));
        }
    }
    if ("TURBOPACK compile-time truthy", 1) {
        headManager?.mountedInstances?.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect(()=>{
        headManager?.mountedInstances?.add(props.children);
        return ()=>{
            headManager?.mountedInstances?.delete(props.children);
        };
    });
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect(()=>{
        if (headManager) {
            headManager._pendingUpdate = emitChange;
        }
        return ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
        };
    });
    useClientOnlyEffect(()=>{
        if (headManager && headManager._pendingUpdate) {
            headManager._pendingUpdate();
            headManager._pendingUpdate = null;
        }
        return ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
        };
    });
    return null;
} //# sourceMappingURL=side-effect.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/head-manager-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].HeadManagerContext; //# sourceMappingURL=head-manager-context.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/head.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    defaultHead: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    defaultHead: function() {
        return defaultHead;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/side-effect.js [app-ssr] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/head-manager-context.js [app-ssr] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/utils/warn-once.js [app-ssr] (ecmascript)");
function defaultHead() {
    const head = [
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"),
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")
    ];
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === 'string' || typeof child === 'number') {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    'name',
    'httpEquiv',
    'charSet',
    'itemProp'
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf('$') + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case 'title':
            case 'base':
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case 'meta':
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === 'charSet') {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements) {
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead().reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ("TURBOPACK compile-time truthy", 1) {
            // omit JSON-LD structured data snippets from the warning
            if (c.type === 'script' && c.props['type'] !== 'application/ld+json') {
                const srcMessage = c.props['src'] ? `<script> tag with src="${c.props['src']}"` : `inline <script>`;
                (0, _warnonce.warnOnce)(`Do not add <script> tags using next/head (see ${srcMessage}). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
            } else if (c.type === 'link' && c.props['rel'] === 'stylesheet') {
                (0, _warnonce.warnOnce)(`Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="${c.props['href']}"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
            }
        }
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head({ children }) {
    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        children: children
    });
}
const _default = Head;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/image-config-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].ImageConfigContext; //# sourceMappingURL=image-config-context.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/router-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].RouterContext; //# sourceMappingURL=router-context.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/find-closest-quality.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findClosestQuality", {
    enumerable: true,
    get: function() {
        return findClosestQuality;
    }
});
function findClosestQuality(quality, config) {
    const q = quality || 75;
    if (!config?.qualities?.length) {
        return q;
    }
    return config.qualities.reduce((prev, cur)=>Math.abs(cur - q) < Math.abs(prev - q) ? cur : prev, 0);
} //# sourceMappingURL=find-closest-quality.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/picomatch/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var t = {
        170: (t, e, u)=>{
            const n = u(510);
            const isWindows = ()=>{
                if (typeof navigator !== "undefined" && navigator.platform) {
                    const t = navigator.platform.toLowerCase();
                    return t === "win32" || t === "windows";
                }
                if (typeof process !== "undefined" && process.platform) {
                    return process.platform === "win32";
                }
                return false;
            };
            function picomatch(t, e, u = false) {
                if (e && (e.windows === null || e.windows === undefined)) {
                    e = {
                        ...e,
                        windows: isWindows()
                    };
                }
                return n(t, e, u);
            }
            Object.assign(picomatch, n);
            t.exports = picomatch;
        },
        154: (t)=>{
            const e = "\\\\/";
            const u = `[^${e}]`;
            const n = "\\.";
            const o = "\\+";
            const s = "\\?";
            const r = "\\/";
            const a = "(?=.)";
            const i = "[^/]";
            const c = `(?:${r}|$)`;
            const p = `(?:^|${r})`;
            const l = `${n}{1,2}${c}`;
            const f = `(?!${n})`;
            const A = `(?!${p}${l})`;
            const _ = `(?!${n}{0,1}${c})`;
            const R = `(?!${l})`;
            const E = `[^.${r}]`;
            const h = `${i}*?`;
            const g = "/";
            const b = {
                DOT_LITERAL: n,
                PLUS_LITERAL: o,
                QMARK_LITERAL: s,
                SLASH_LITERAL: r,
                ONE_CHAR: a,
                QMARK: i,
                END_ANCHOR: c,
                DOTS_SLASH: l,
                NO_DOT: f,
                NO_DOTS: A,
                NO_DOT_SLASH: _,
                NO_DOTS_SLASH: R,
                QMARK_NO_DOT: E,
                STAR: h,
                START_ANCHOR: p,
                SEP: g
            };
            const C = {
                ...b,
                SLASH_LITERAL: `[${e}]`,
                QMARK: u,
                STAR: `${u}*?`,
                DOTS_SLASH: `${n}{1,2}(?:[${e}]|$)`,
                NO_DOT: `(?!${n})`,
                NO_DOTS: `(?!(?:^|[${e}])${n}{1,2}(?:[${e}]|$))`,
                NO_DOT_SLASH: `(?!${n}{0,1}(?:[${e}]|$))`,
                NO_DOTS_SLASH: `(?!${n}{1,2}(?:[${e}]|$))`,
                QMARK_NO_DOT: `[^.${e}]`,
                START_ANCHOR: `(?:^|[${e}])`,
                END_ANCHOR: `(?:[${e}]|$)`,
                SEP: "\\"
            };
            const y = {
                alnum: "a-zA-Z0-9",
                alpha: "a-zA-Z",
                ascii: "\\x00-\\x7F",
                blank: " \\t",
                cntrl: "\\x00-\\x1F\\x7F",
                digit: "0-9",
                graph: "\\x21-\\x7E",
                lower: "a-z",
                print: "\\x20-\\x7E ",
                punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
                space: " \\t\\r\\n\\v\\f",
                upper: "A-Z",
                word: "A-Za-z0-9_",
                xdigit: "A-Fa-f0-9"
            };
            t.exports = {
                MAX_LENGTH: 1024 * 64,
                POSIX_REGEX_SOURCE: y,
                REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
                REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
                REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
                REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
                REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
                REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
                REPLACEMENTS: {
                    "***": "*",
                    "**/**": "**",
                    "**/**/**": "**"
                },
                CHAR_0: 48,
                CHAR_9: 57,
                CHAR_UPPERCASE_A: 65,
                CHAR_LOWERCASE_A: 97,
                CHAR_UPPERCASE_Z: 90,
                CHAR_LOWERCASE_Z: 122,
                CHAR_LEFT_PARENTHESES: 40,
                CHAR_RIGHT_PARENTHESES: 41,
                CHAR_ASTERISK: 42,
                CHAR_AMPERSAND: 38,
                CHAR_AT: 64,
                CHAR_BACKWARD_SLASH: 92,
                CHAR_CARRIAGE_RETURN: 13,
                CHAR_CIRCUMFLEX_ACCENT: 94,
                CHAR_COLON: 58,
                CHAR_COMMA: 44,
                CHAR_DOT: 46,
                CHAR_DOUBLE_QUOTE: 34,
                CHAR_EQUAL: 61,
                CHAR_EXCLAMATION_MARK: 33,
                CHAR_FORM_FEED: 12,
                CHAR_FORWARD_SLASH: 47,
                CHAR_GRAVE_ACCENT: 96,
                CHAR_HASH: 35,
                CHAR_HYPHEN_MINUS: 45,
                CHAR_LEFT_ANGLE_BRACKET: 60,
                CHAR_LEFT_CURLY_BRACE: 123,
                CHAR_LEFT_SQUARE_BRACKET: 91,
                CHAR_LINE_FEED: 10,
                CHAR_NO_BREAK_SPACE: 160,
                CHAR_PERCENT: 37,
                CHAR_PLUS: 43,
                CHAR_QUESTION_MARK: 63,
                CHAR_RIGHT_ANGLE_BRACKET: 62,
                CHAR_RIGHT_CURLY_BRACE: 125,
                CHAR_RIGHT_SQUARE_BRACKET: 93,
                CHAR_SEMICOLON: 59,
                CHAR_SINGLE_QUOTE: 39,
                CHAR_SPACE: 32,
                CHAR_TAB: 9,
                CHAR_UNDERSCORE: 95,
                CHAR_VERTICAL_LINE: 124,
                CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
                extglobChars (t) {
                    return {
                        "!": {
                            type: "negate",
                            open: "(?:(?!(?:",
                            close: `))${t.STAR})`
                        },
                        "?": {
                            type: "qmark",
                            open: "(?:",
                            close: ")?"
                        },
                        "+": {
                            type: "plus",
                            open: "(?:",
                            close: ")+"
                        },
                        "*": {
                            type: "star",
                            open: "(?:",
                            close: ")*"
                        },
                        "@": {
                            type: "at",
                            open: "(?:",
                            close: ")"
                        }
                    };
                },
                globChars (t) {
                    return t === true ? C : b;
                }
            };
        },
        697: (t, e, u)=>{
            const n = u(154);
            const o = u(96);
            const { MAX_LENGTH: s, POSIX_REGEX_SOURCE: r, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: i, REPLACEMENTS: c } = n;
            const expandRange = (t, e)=>{
                if (typeof e.expandRange === "function") {
                    return e.expandRange(...t, e);
                }
                t.sort();
                const u = `[${t.join("-")}]`;
                try {
                    new RegExp(u);
                } catch (e) {
                    return t.map((t)=>o.escapeRegex(t)).join("..");
                }
                return u;
            };
            const syntaxError = (t, e)=>`Missing ${t}: "${e}" - use "\\\\${e}" to match literal characters`;
            const parse = (t, e)=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected a string");
                }
                t = c[t] || t;
                const u = {
                    ...e
                };
                const p = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                let l = t.length;
                if (l > p) {
                    throw new SyntaxError(`Input length: ${l}, exceeds maximum allowed length: ${p}`);
                }
                const f = {
                    type: "bos",
                    value: "",
                    output: u.prepend || ""
                };
                const A = [
                    f
                ];
                const _ = u.capture ? "" : "?:";
                const R = n.globChars(u.windows);
                const E = n.extglobChars(R);
                const { DOT_LITERAL: h, PLUS_LITERAL: g, SLASH_LITERAL: b, ONE_CHAR: C, DOTS_SLASH: y, NO_DOT: $, NO_DOT_SLASH: x, NO_DOTS_SLASH: S, QMARK: H, QMARK_NO_DOT: v, STAR: d, START_ANCHOR: L } = R;
                const globstar = (t)=>`(${_}(?:(?!${L}${t.dot ? y : h}).)*?)`;
                const T = u.dot ? "" : $;
                const O = u.dot ? H : v;
                let k = u.bash === true ? globstar(u) : d;
                if (u.capture) {
                    k = `(${k})`;
                }
                if (typeof u.noext === "boolean") {
                    u.noextglob = u.noext;
                }
                const m = {
                    input: t,
                    index: -1,
                    start: 0,
                    dot: u.dot === true,
                    consumed: "",
                    output: "",
                    prefix: "",
                    backtrack: false,
                    negated: false,
                    brackets: 0,
                    braces: 0,
                    parens: 0,
                    quotes: 0,
                    globstar: false,
                    tokens: A
                };
                t = o.removePrefix(t, m);
                l = t.length;
                const w = [];
                const N = [];
                const I = [];
                let B = f;
                let G;
                const eos = ()=>m.index === l - 1;
                const D = m.peek = (e = 1)=>t[m.index + e];
                const M = m.advance = ()=>t[++m.index] || "";
                const remaining = ()=>t.slice(m.index + 1);
                const consume = (t = "", e = 0)=>{
                    m.consumed += t;
                    m.index += e;
                };
                const append = (t)=>{
                    m.output += t.output != null ? t.output : t.value;
                    consume(t.value);
                };
                const negate = ()=>{
                    let t = 1;
                    while(D() === "!" && (D(2) !== "(" || D(3) === "?")){
                        M();
                        m.start++;
                        t++;
                    }
                    if (t % 2 === 0) {
                        return false;
                    }
                    m.negated = true;
                    m.start++;
                    return true;
                };
                const increment = (t)=>{
                    m[t]++;
                    I.push(t);
                };
                const decrement = (t)=>{
                    m[t]--;
                    I.pop();
                };
                const push = (t)=>{
                    if (B.type === "globstar") {
                        const e = m.braces > 0 && (t.type === "comma" || t.type === "brace");
                        const u = t.extglob === true || w.length && (t.type === "pipe" || t.type === "paren");
                        if (t.type !== "slash" && t.type !== "paren" && !e && !u) {
                            m.output = m.output.slice(0, -B.output.length);
                            B.type = "star";
                            B.value = "*";
                            B.output = k;
                            m.output += B.output;
                        }
                    }
                    if (w.length && t.type !== "paren") {
                        w[w.length - 1].inner += t.value;
                    }
                    if (t.value || t.output) append(t);
                    if (B && B.type === "text" && t.type === "text") {
                        B.output = (B.output || B.value) + t.value;
                        B.value += t.value;
                        return;
                    }
                    t.prev = B;
                    A.push(t);
                    B = t;
                };
                const extglobOpen = (t, e)=>{
                    const n = {
                        ...E[e],
                        conditions: 1,
                        inner: ""
                    };
                    n.prev = B;
                    n.parens = m.parens;
                    n.output = m.output;
                    const o = (u.capture ? "(" : "") + n.open;
                    increment("parens");
                    push({
                        type: t,
                        value: e,
                        output: m.output ? "" : C
                    });
                    push({
                        type: "paren",
                        extglob: true,
                        value: M(),
                        output: o
                    });
                    w.push(n);
                };
                const extglobClose = (t)=>{
                    let n = t.close + (u.capture ? ")" : "");
                    let o;
                    if (t.type === "negate") {
                        let s = k;
                        if (t.inner && t.inner.length > 1 && t.inner.includes("/")) {
                            s = globstar(u);
                        }
                        if (s !== k || eos() || /^\)+$/.test(remaining())) {
                            n = t.close = `)$))${s}`;
                        }
                        if (t.inner.includes("*") && (o = remaining()) && /^\.[^\\/.]+$/.test(o)) {
                            const u = parse(o, {
                                ...e,
                                fastpaths: false
                            }).output;
                            n = t.close = `)${u})${s})`;
                        }
                        if (t.prev.type === "bos") {
                            m.negatedExtglob = true;
                        }
                    }
                    push({
                        type: "paren",
                        extglob: true,
                        value: G,
                        output: n
                    });
                    decrement("parens");
                };
                if (u.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(t)) {
                    let n = false;
                    let s = t.replace(i, (t, e, u, o, s, r)=>{
                        if (o === "\\") {
                            n = true;
                            return t;
                        }
                        if (o === "?") {
                            if (e) {
                                return e + o + (s ? H.repeat(s.length) : "");
                            }
                            if (r === 0) {
                                return O + (s ? H.repeat(s.length) : "");
                            }
                            return H.repeat(u.length);
                        }
                        if (o === ".") {
                            return h.repeat(u.length);
                        }
                        if (o === "*") {
                            if (e) {
                                return e + o + (s ? k : "");
                            }
                            return k;
                        }
                        return e ? t : `\\${t}`;
                    });
                    if (n === true) {
                        if (u.unescape === true) {
                            s = s.replace(/\\/g, "");
                        } else {
                            s = s.replace(/\\+/g, (t)=>t.length % 2 === 0 ? "\\\\" : t ? "\\" : "");
                        }
                    }
                    if (s === t && u.contains === true) {
                        m.output = t;
                        return m;
                    }
                    m.output = o.wrapOutput(s, m, e);
                    return m;
                }
                while(!eos()){
                    G = M();
                    if (G === "\0") {
                        continue;
                    }
                    if (G === "\\") {
                        const t = D();
                        if (t === "/" && u.bash !== true) {
                            continue;
                        }
                        if (t === "." || t === ";") {
                            continue;
                        }
                        if (!t) {
                            G += "\\";
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                        const e = /^\\+/.exec(remaining());
                        let n = 0;
                        if (e && e[0].length > 2) {
                            n = e[0].length;
                            m.index += n;
                            if (n % 2 !== 0) {
                                G += "\\";
                            }
                        }
                        if (u.unescape === true) {
                            G = M();
                        } else {
                            G += M();
                        }
                        if (m.brackets === 0) {
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                    }
                    if (m.brackets > 0 && (G !== "]" || B.value === "[" || B.value === "[^")) {
                        if (u.posix !== false && G === ":") {
                            const t = B.value.slice(1);
                            if (t.includes("[")) {
                                B.posix = true;
                                if (t.includes(":")) {
                                    const t = B.value.lastIndexOf("[");
                                    const e = B.value.slice(0, t);
                                    const u = B.value.slice(t + 2);
                                    const n = r[u];
                                    if (n) {
                                        B.value = e + n;
                                        m.backtrack = true;
                                        M();
                                        if (!f.output && A.indexOf(B) === 1) {
                                            f.output = C;
                                        }
                                        continue;
                                    }
                                }
                            }
                        }
                        if (G === "[" && D() !== ":" || G === "-" && D() === "]") {
                            G = `\\${G}`;
                        }
                        if (G === "]" && (B.value === "[" || B.value === "[^")) {
                            G = `\\${G}`;
                        }
                        if (u.posix === true && G === "!" && B.value === "[") {
                            G = "^";
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (m.quotes === 1 && G !== '"') {
                        G = o.escapeRegex(G);
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (G === '"') {
                        m.quotes = m.quotes === 1 ? 0 : 1;
                        if (u.keepQuotes === true) {
                            push({
                                type: "text",
                                value: G
                            });
                        }
                        continue;
                    }
                    if (G === "(") {
                        increment("parens");
                        push({
                            type: "paren",
                            value: G
                        });
                        continue;
                    }
                    if (G === ")") {
                        if (m.parens === 0 && u.strictBrackets === true) {
                            throw new SyntaxError(syntaxError("opening", "("));
                        }
                        const t = w[w.length - 1];
                        if (t && m.parens === t.parens + 1) {
                            extglobClose(w.pop());
                            continue;
                        }
                        push({
                            type: "paren",
                            value: G,
                            output: m.parens ? ")" : "\\)"
                        });
                        decrement("parens");
                        continue;
                    }
                    if (G === "[") {
                        if (u.nobracket === true || !remaining().includes("]")) {
                            if (u.nobracket !== true && u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("closing", "]"));
                            }
                            G = `\\${G}`;
                        } else {
                            increment("brackets");
                        }
                        push({
                            type: "bracket",
                            value: G
                        });
                        continue;
                    }
                    if (G === "]") {
                        if (u.nobracket === true || B && B.type === "bracket" && B.value.length === 1) {
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        if (m.brackets === 0) {
                            if (u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("opening", "["));
                            }
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        decrement("brackets");
                        const t = B.value.slice(1);
                        if (B.posix !== true && t[0] === "^" && !t.includes("/")) {
                            G = `/${G}`;
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        if (u.literalBrackets === false || o.hasRegexChars(t)) {
                            continue;
                        }
                        const e = o.escapeRegex(B.value);
                        m.output = m.output.slice(0, -B.value.length);
                        if (u.literalBrackets === true) {
                            m.output += e;
                            B.value = e;
                            continue;
                        }
                        B.value = `(${_}${e}|${B.value})`;
                        m.output += B.value;
                        continue;
                    }
                    if (G === "{" && u.nobrace !== true) {
                        increment("braces");
                        const t = {
                            type: "brace",
                            value: G,
                            output: "(",
                            outputIndex: m.output.length,
                            tokensIndex: m.tokens.length
                        };
                        N.push(t);
                        push(t);
                        continue;
                    }
                    if (G === "}") {
                        const t = N[N.length - 1];
                        if (u.nobrace === true || !t) {
                            push({
                                type: "text",
                                value: G,
                                output: G
                            });
                            continue;
                        }
                        let e = ")";
                        if (t.dots === true) {
                            const t = A.slice();
                            const n = [];
                            for(let e = t.length - 1; e >= 0; e--){
                                A.pop();
                                if (t[e].type === "brace") {
                                    break;
                                }
                                if (t[e].type !== "dots") {
                                    n.unshift(t[e].value);
                                }
                            }
                            e = expandRange(n, u);
                            m.backtrack = true;
                        }
                        if (t.comma !== true && t.dots !== true) {
                            const u = m.output.slice(0, t.outputIndex);
                            const n = m.tokens.slice(t.tokensIndex);
                            t.value = t.output = "\\{";
                            G = e = "\\}";
                            m.output = u;
                            for (const t of n){
                                m.output += t.output || t.value;
                            }
                        }
                        push({
                            type: "brace",
                            value: G,
                            output: e
                        });
                        decrement("braces");
                        N.pop();
                        continue;
                    }
                    if (G === "|") {
                        if (w.length > 0) {
                            w[w.length - 1].conditions++;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G === ",") {
                        let t = G;
                        const e = N[N.length - 1];
                        if (e && I[I.length - 1] === "braces") {
                            e.comma = true;
                            t = "|";
                        }
                        push({
                            type: "comma",
                            value: G,
                            output: t
                        });
                        continue;
                    }
                    if (G === "/") {
                        if (B.type === "dot" && m.index === m.start + 1) {
                            m.start = m.index + 1;
                            m.consumed = "";
                            m.output = "";
                            A.pop();
                            B = f;
                            continue;
                        }
                        push({
                            type: "slash",
                            value: G,
                            output: b
                        });
                        continue;
                    }
                    if (G === ".") {
                        if (m.braces > 0 && B.type === "dot") {
                            if (B.value === ".") B.output = h;
                            const t = N[N.length - 1];
                            B.type = "dots";
                            B.output += G;
                            B.value += G;
                            t.dots = true;
                            continue;
                        }
                        if (m.braces + m.parens === 0 && B.type !== "bos" && B.type !== "slash") {
                            push({
                                type: "text",
                                value: G,
                                output: h
                            });
                            continue;
                        }
                        push({
                            type: "dot",
                            value: G,
                            output: h
                        });
                        continue;
                    }
                    if (G === "?") {
                        const t = B && B.value === "(";
                        if (!t && u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("qmark", G);
                            continue;
                        }
                        if (B && B.type === "paren") {
                            const t = D();
                            let e = G;
                            if (B.value === "(" && !/[!=<:]/.test(t) || t === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                                e = `\\${G}`;
                            }
                            push({
                                type: "text",
                                value: G,
                                output: e
                            });
                            continue;
                        }
                        if (u.dot !== true && (B.type === "slash" || B.type === "bos")) {
                            push({
                                type: "qmark",
                                value: G,
                                output: v
                            });
                            continue;
                        }
                        push({
                            type: "qmark",
                            value: G,
                            output: H
                        });
                        continue;
                    }
                    if (G === "!") {
                        if (u.noextglob !== true && D() === "(") {
                            if (D(2) !== "?" || !/[!=<:]/.test(D(3))) {
                                extglobOpen("negate", G);
                                continue;
                            }
                        }
                        if (u.nonegate !== true && m.index === 0) {
                            negate();
                            continue;
                        }
                    }
                    if (G === "+") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("plus", G);
                            continue;
                        }
                        if (B && B.value === "(" || u.regex === false) {
                            push({
                                type: "plus",
                                value: G,
                                output: g
                            });
                            continue;
                        }
                        if (B && (B.type === "bracket" || B.type === "paren" || B.type === "brace") || m.parens > 0) {
                            push({
                                type: "plus",
                                value: G
                            });
                            continue;
                        }
                        push({
                            type: "plus",
                            value: g
                        });
                        continue;
                    }
                    if (G === "@") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            push({
                                type: "at",
                                extglob: true,
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G !== "*") {
                        if (G === "$" || G === "^") {
                            G = `\\${G}`;
                        }
                        const t = a.exec(remaining());
                        if (t) {
                            G += t[0];
                            m.index += t[0].length;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (B && (B.type === "globstar" || B.star === true)) {
                        B.type = "star";
                        B.star = true;
                        B.value += G;
                        B.output = k;
                        m.backtrack = true;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    let e = remaining();
                    if (u.noextglob !== true && /^\([^?]/.test(e)) {
                        extglobOpen("star", G);
                        continue;
                    }
                    if (B.type === "star") {
                        if (u.noglobstar === true) {
                            consume(G);
                            continue;
                        }
                        const n = B.prev;
                        const o = n.prev;
                        const s = n.type === "slash" || n.type === "bos";
                        const r = o && (o.type === "star" || o.type === "globstar");
                        if (u.bash === true && (!s || e[0] && e[0] !== "/")) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        const a = m.braces > 0 && (n.type === "comma" || n.type === "brace");
                        const i = w.length && (n.type === "pipe" || n.type === "paren");
                        if (!s && n.type !== "paren" && !a && !i) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        while(e.slice(0, 3) === "/**"){
                            const u = t[m.index + 4];
                            if (u && u !== "/") {
                                break;
                            }
                            e = e.slice(3);
                            consume("/**", 3);
                        }
                        if (n.type === "bos" && eos()) {
                            B.type = "globstar";
                            B.value += G;
                            B.output = globstar(u);
                            m.output = B.output;
                            m.globstar = true;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && !r && eos()) {
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = globstar(u) + (u.strictSlashes ? ")" : "|$)");
                            B.value += G;
                            m.globstar = true;
                            m.output += n.output + B.output;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && e[0] === "/") {
                            const t = e[1] !== void 0 ? "|$" : "";
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = `${globstar(u)}${b}|${b}${t})`;
                            B.value += G;
                            m.output += n.output + B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        if (n.type === "bos" && e[0] === "/") {
                            B.type = "globstar";
                            B.value += G;
                            B.output = `(?:^|${b}|${globstar(u)}${b})`;
                            m.output = B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        m.output = m.output.slice(0, -B.output.length);
                        B.type = "globstar";
                        B.output = globstar(u);
                        B.value += G;
                        m.output += B.output;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    const n = {
                        type: "star",
                        value: G,
                        output: k
                    };
                    if (u.bash === true) {
                        n.output = ".*?";
                        if (B.type === "bos" || B.type === "slash") {
                            n.output = T + n.output;
                        }
                        push(n);
                        continue;
                    }
                    if (B && (B.type === "bracket" || B.type === "paren") && u.regex === true) {
                        n.output = G;
                        push(n);
                        continue;
                    }
                    if (m.index === m.start || B.type === "slash" || B.type === "dot") {
                        if (B.type === "dot") {
                            m.output += x;
                            B.output += x;
                        } else if (u.dot === true) {
                            m.output += S;
                            B.output += S;
                        } else {
                            m.output += T;
                            B.output += T;
                        }
                        if (D() !== "*") {
                            m.output += C;
                            B.output += C;
                        }
                    }
                    push(n);
                }
                while(m.brackets > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
                    m.output = o.escapeLast(m.output, "[");
                    decrement("brackets");
                }
                while(m.parens > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
                    m.output = o.escapeLast(m.output, "(");
                    decrement("parens");
                }
                while(m.braces > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
                    m.output = o.escapeLast(m.output, "{");
                    decrement("braces");
                }
                if (u.strictSlashes !== true && (B.type === "star" || B.type === "bracket")) {
                    push({
                        type: "maybe_slash",
                        value: "",
                        output: `${b}?`
                    });
                }
                if (m.backtrack === true) {
                    m.output = "";
                    for (const t of m.tokens){
                        m.output += t.output != null ? t.output : t.value;
                        if (t.suffix) {
                            m.output += t.suffix;
                        }
                    }
                }
                return m;
            };
            parse.fastpaths = (t, e)=>{
                const u = {
                    ...e
                };
                const r = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                const a = t.length;
                if (a > r) {
                    throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${r}`);
                }
                t = c[t] || t;
                const { DOT_LITERAL: i, SLASH_LITERAL: p, ONE_CHAR: l, DOTS_SLASH: f, NO_DOT: A, NO_DOTS: _, NO_DOTS_SLASH: R, STAR: E, START_ANCHOR: h } = n.globChars(u.windows);
                const g = u.dot ? _ : A;
                const b = u.dot ? R : A;
                const C = u.capture ? "" : "?:";
                const y = {
                    negated: false,
                    prefix: ""
                };
                let $ = u.bash === true ? ".*?" : E;
                if (u.capture) {
                    $ = `(${$})`;
                }
                const globstar = (t)=>{
                    if (t.noglobstar === true) return $;
                    return `(${C}(?:(?!${h}${t.dot ? f : i}).)*?)`;
                };
                const create = (t)=>{
                    switch(t){
                        case "*":
                            return `${g}${l}${$}`;
                        case ".*":
                            return `${i}${l}${$}`;
                        case "*.*":
                            return `${g}${$}${i}${l}${$}`;
                        case "*/*":
                            return `${g}${$}${p}${l}${b}${$}`;
                        case "**":
                            return g + globstar(u);
                        case "**/*":
                            return `(?:${g}${globstar(u)}${p})?${b}${l}${$}`;
                        case "**/*.*":
                            return `(?:${g}${globstar(u)}${p})?${b}${$}${i}${l}${$}`;
                        case "**/.*":
                            return `(?:${g}${globstar(u)}${p})?${i}${l}${$}`;
                        default:
                            {
                                const e = /^(.*?)\.(\w+)$/.exec(t);
                                if (!e) return;
                                const u = create(e[1]);
                                if (!u) return;
                                return u + i + e[2];
                            }
                    }
                };
                const x = o.removePrefix(t, y);
                let S = create(x);
                if (S && u.strictSlashes !== true) {
                    S += `${p}?`;
                }
                return S;
            };
            t.exports = parse;
        },
        510: (t, e, u)=>{
            const n = u(716);
            const o = u(697);
            const s = u(96);
            const r = u(154);
            const isObject = (t)=>t && typeof t === "object" && !Array.isArray(t);
            const picomatch = (t, e, u = false)=>{
                if (Array.isArray(t)) {
                    const n = t.map((t)=>picomatch(t, e, u));
                    const arrayMatcher = (t)=>{
                        for (const e of n){
                            const u = e(t);
                            if (u) return u;
                        }
                        return false;
                    };
                    return arrayMatcher;
                }
                const n = isObject(t) && t.tokens && t.input;
                if (t === "" || typeof t !== "string" && !n) {
                    throw new TypeError("Expected pattern to be a non-empty string");
                }
                const o = e || {};
                const s = o.windows;
                const r = n ? picomatch.compileRe(t, e) : picomatch.makeRe(t, e, false, true);
                const a = r.state;
                delete r.state;
                let isIgnored = ()=>false;
                if (o.ignore) {
                    const t = {
                        ...e,
                        ignore: null,
                        onMatch: null,
                        onResult: null
                    };
                    isIgnored = picomatch(o.ignore, t, u);
                }
                const matcher = (u, n = false)=>{
                    const { isMatch: i, match: c, output: p } = picomatch.test(u, r, e, {
                        glob: t,
                        posix: s
                    });
                    const l = {
                        glob: t,
                        state: a,
                        regex: r,
                        posix: s,
                        input: u,
                        output: p,
                        match: c,
                        isMatch: i
                    };
                    if (typeof o.onResult === "function") {
                        o.onResult(l);
                    }
                    if (i === false) {
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (isIgnored(u)) {
                        if (typeof o.onIgnore === "function") {
                            o.onIgnore(l);
                        }
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (typeof o.onMatch === "function") {
                        o.onMatch(l);
                    }
                    return n ? l : true;
                };
                if (u) {
                    matcher.state = a;
                }
                return matcher;
            };
            picomatch.test = (t, e, u, { glob: n, posix: o } = {})=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected input to be a string");
                }
                if (t === "") {
                    return {
                        isMatch: false,
                        output: ""
                    };
                }
                const r = u || {};
                const a = r.format || (o ? s.toPosixSlashes : null);
                let i = t === n;
                let c = i && a ? a(t) : t;
                if (i === false) {
                    c = a ? a(t) : t;
                    i = c === n;
                }
                if (i === false || r.capture === true) {
                    if (r.matchBase === true || r.basename === true) {
                        i = picomatch.matchBase(t, e, u, o);
                    } else {
                        i = e.exec(c);
                    }
                }
                return {
                    isMatch: Boolean(i),
                    match: i,
                    output: c
                };
            };
            picomatch.matchBase = (t, e, u)=>{
                const n = e instanceof RegExp ? e : picomatch.makeRe(e, u);
                return n.test(s.basename(t));
            };
            picomatch.isMatch = (t, e, u)=>picomatch(e, u)(t);
            picomatch.parse = (t, e)=>{
                if (Array.isArray(t)) return t.map((t)=>picomatch.parse(t, e));
                return o(t, {
                    ...e,
                    fastpaths: false
                });
            };
            picomatch.scan = (t, e)=>n(t, e);
            picomatch.compileRe = (t, e, u = false, n = false)=>{
                if (u === true) {
                    return t.output;
                }
                const o = e || {};
                const s = o.contains ? "" : "^";
                const r = o.contains ? "" : "$";
                let a = `${s}(?:${t.output})${r}`;
                if (t && t.negated === true) {
                    a = `^(?!${a}).*$`;
                }
                const i = picomatch.toRegex(a, e);
                if (n === true) {
                    i.state = t;
                }
                return i;
            };
            picomatch.makeRe = (t, e = {}, u = false, n = false)=>{
                if (!t || typeof t !== "string") {
                    throw new TypeError("Expected a non-empty string");
                }
                let s = {
                    negated: false,
                    fastpaths: true
                };
                if (e.fastpaths !== false && (t[0] === "." || t[0] === "*")) {
                    s.output = o.fastpaths(t, e);
                }
                if (!s.output) {
                    s = o(t, e);
                }
                return picomatch.compileRe(s, e, u, n);
            };
            picomatch.toRegex = (t, e)=>{
                try {
                    const u = e || {};
                    return new RegExp(t, u.flags || (u.nocase ? "i" : ""));
                } catch (t) {
                    if (e && e.debug === true) throw t;
                    return /$^/;
                }
            };
            picomatch.constants = r;
            t.exports = picomatch;
        },
        716: (t, e, u)=>{
            const n = u(96);
            const { CHAR_ASTERISK: o, CHAR_AT: s, CHAR_BACKWARD_SLASH: r, CHAR_COMMA: a, CHAR_DOT: i, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: p, CHAR_LEFT_CURLY_BRACE: l, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_PLUS: _, CHAR_QUESTION_MARK: R, CHAR_RIGHT_CURLY_BRACE: E, CHAR_RIGHT_PARENTHESES: h, CHAR_RIGHT_SQUARE_BRACKET: g } = u(154);
            const isPathSeparator = (t)=>t === p || t === r;
            const depth = (t)=>{
                if (t.isPrefix !== true) {
                    t.depth = t.isGlobstar ? Infinity : 1;
                }
            };
            const scan = (t, e)=>{
                const u = e || {};
                const b = t.length - 1;
                const C = u.parts === true || u.scanToEnd === true;
                const y = [];
                const $ = [];
                const x = [];
                let S = t;
                let H = -1;
                let v = 0;
                let d = 0;
                let L = false;
                let T = false;
                let O = false;
                let k = false;
                let m = false;
                let w = false;
                let N = false;
                let I = false;
                let B = false;
                let G = false;
                let D = 0;
                let M;
                let P;
                let K = {
                    value: "",
                    depth: 0,
                    isGlob: false
                };
                const eos = ()=>H >= b;
                const peek = ()=>S.charCodeAt(H + 1);
                const advance = ()=>{
                    M = P;
                    return S.charCodeAt(++H);
                };
                while(H < b){
                    P = advance();
                    let t;
                    if (P === r) {
                        N = K.backslashes = true;
                        P = advance();
                        if (P === l) {
                            w = true;
                        }
                        continue;
                    }
                    if (w === true || P === l) {
                        D++;
                        while(eos() !== true && (P = advance())){
                            if (P === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (P === l) {
                                D++;
                                continue;
                            }
                            if (w !== true && P === i && (P = advance()) === i) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (w !== true && P === a) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (P === E) {
                                D--;
                                if (D === 0) {
                                    w = false;
                                    L = K.isBrace = true;
                                    G = true;
                                    break;
                                }
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === p) {
                        y.push(H);
                        $.push(K);
                        K = {
                            value: "",
                            depth: 0,
                            isGlob: false
                        };
                        if (G === true) continue;
                        if (M === i && H === v + 1) {
                            v += 2;
                            continue;
                        }
                        d = H + 1;
                        continue;
                    }
                    if (u.noext !== true) {
                        const t = P === _ || P === s || P === o || P === R || P === c;
                        if (t === true && peek() === f) {
                            O = K.isGlob = true;
                            k = K.isExtglob = true;
                            G = true;
                            if (P === c && H === v) {
                                B = true;
                            }
                            if (C === true) {
                                while(eos() !== true && (P = advance())){
                                    if (P === r) {
                                        N = K.backslashes = true;
                                        P = advance();
                                        continue;
                                    }
                                    if (P === h) {
                                        O = K.isGlob = true;
                                        G = true;
                                        break;
                                    }
                                }
                                continue;
                            }
                            break;
                        }
                    }
                    if (P === o) {
                        if (M === o) m = K.isGlobstar = true;
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === R) {
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === A) {
                        while(eos() !== true && (t = advance())){
                            if (t === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (t === g) {
                                T = K.isBracket = true;
                                O = K.isGlob = true;
                                G = true;
                                break;
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (u.nonegate !== true && P === c && H === v) {
                        I = K.negated = true;
                        v++;
                        continue;
                    }
                    if (u.noparen !== true && P === f) {
                        O = K.isGlob = true;
                        if (C === true) {
                            while(eos() !== true && (P = advance())){
                                if (P === f) {
                                    N = K.backslashes = true;
                                    P = advance();
                                    continue;
                                }
                                if (P === h) {
                                    G = true;
                                    break;
                                }
                            }
                            continue;
                        }
                        break;
                    }
                    if (O === true) {
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                }
                if (u.noext === true) {
                    k = false;
                    O = false;
                }
                let U = S;
                let X = "";
                let F = "";
                if (v > 0) {
                    X = S.slice(0, v);
                    S = S.slice(v);
                    d -= v;
                }
                if (U && O === true && d > 0) {
                    U = S.slice(0, d);
                    F = S.slice(d);
                } else if (O === true) {
                    U = "";
                    F = S;
                } else {
                    U = S;
                }
                if (U && U !== "" && U !== "/" && U !== S) {
                    if (isPathSeparator(U.charCodeAt(U.length - 1))) {
                        U = U.slice(0, -1);
                    }
                }
                if (u.unescape === true) {
                    if (F) F = n.removeBackslashes(F);
                    if (U && N === true) {
                        U = n.removeBackslashes(U);
                    }
                }
                const Q = {
                    prefix: X,
                    input: t,
                    start: v,
                    base: U,
                    glob: F,
                    isBrace: L,
                    isBracket: T,
                    isGlob: O,
                    isExtglob: k,
                    isGlobstar: m,
                    negated: I,
                    negatedExtglob: B
                };
                if (u.tokens === true) {
                    Q.maxDepth = 0;
                    if (!isPathSeparator(P)) {
                        $.push(K);
                    }
                    Q.tokens = $;
                }
                if (u.parts === true || u.tokens === true) {
                    let e;
                    for(let n = 0; n < y.length; n++){
                        const o = e ? e + 1 : v;
                        const s = y[n];
                        const r = t.slice(o, s);
                        if (u.tokens) {
                            if (n === 0 && v !== 0) {
                                $[n].isPrefix = true;
                                $[n].value = X;
                            } else {
                                $[n].value = r;
                            }
                            depth($[n]);
                            Q.maxDepth += $[n].depth;
                        }
                        if (n !== 0 || r !== "") {
                            x.push(r);
                        }
                        e = s;
                    }
                    if (e && e + 1 < t.length) {
                        const n = t.slice(e + 1);
                        x.push(n);
                        if (u.tokens) {
                            $[$.length - 1].value = n;
                            depth($[$.length - 1]);
                            Q.maxDepth += $[$.length - 1].depth;
                        }
                    }
                    Q.slashes = y;
                    Q.parts = x;
                }
                return Q;
            };
            t.exports = scan;
        },
        96: (t, e, u)=>{
            const { REGEX_BACKSLASH: n, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_GLOBAL: r } = u(154);
            e.isObject = (t)=>t !== null && typeof t === "object" && !Array.isArray(t);
            e.hasRegexChars = (t)=>s.test(t);
            e.isRegexChar = (t)=>t.length === 1 && e.hasRegexChars(t);
            e.escapeRegex = (t)=>t.replace(r, "\\$1");
            e.toPosixSlashes = (t)=>t.replace(n, "/");
            e.removeBackslashes = (t)=>t.replace(o, (t)=>t === "\\" ? "" : t);
            e.escapeLast = (t, u, n)=>{
                const o = t.lastIndexOf(u, n);
                if (o === -1) return t;
                if (t[o - 1] === "\\") return e.escapeLast(t, u, o - 1);
                return `${t.slice(0, o)}\\${t.slice(o)}`;
            };
            e.removePrefix = (t, e = {})=>{
                let u = t;
                if (u.startsWith("./")) {
                    u = u.slice(2);
                    e.prefix = "./";
                }
                return u;
            };
            e.wrapOutput = (t, e = {}, u = {})=>{
                const n = u.contains ? "" : "^";
                const o = u.contains ? "" : "$";
                let s = `${n}(?:${t})${o}`;
                if (e.negated === true) {
                    s = `(?:^(?!${s}).*$)`;
                }
                return s;
            };
            e.basename = (t, { windows: e } = {})=>{
                const u = t.split(e ? /[\\/]/ : "/");
                const n = u[u.length - 1];
                if (n === "") {
                    return u[u.length - 2];
                }
                return n;
            };
        }
    };
    var e = {};
    function __nccwpck_require__(u) {
        var n = e[u];
        if (n !== undefined) {
            return n.exports;
        }
        var o = e[u] = {
            exports: {}
        };
        var s = true;
        try {
            t[u](o, o.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete e[u];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Desktop/Hackathon/website/node_modules/next/dist/compiled/picomatch") + "/";
    var u = __nccwpck_require__(170);
    module.exports = u;
})();
}),
"[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/match-local-pattern.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasLocalMatch: null,
    matchLocalPattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasLocalMatch: function() {
        return hasLocalMatch;
    },
    matchLocalPattern: function() {
        return matchLocalPattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/picomatch/index.js [app-ssr] (ecmascript)");
function matchLocalPattern(pattern, url) {
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasLocalMatch(localPatterns, urlPathAndQuery) {
    if (!localPatterns) {
        // if the user didn't define "localPatterns", we allow all local images
        return true;
    }
    const url = new URL(urlPathAndQuery, 'http://n');
    return localPatterns.some((p)=>matchLocalPattern(p, url));
} //# sourceMappingURL=match-local-pattern.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasRemoteMatch: null,
    matchRemotePattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasRemoteMatch: function() {
        return hasRemoteMatch;
    },
    matchRemotePattern: function() {
        return matchRemotePattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/compiled/picomatch/index.js [app-ssr] (ecmascript)");
function matchRemotePattern(pattern, url) {
    if (pattern.protocol !== undefined) {
        if (pattern.protocol.replace(/:$/, '') !== url.protocol.replace(/:$/, '')) {
            return false;
        }
    }
    if (pattern.port !== undefined) {
        if (pattern.port !== url.port) {
            return false;
        }
    }
    if (pattern.hostname === undefined) {
        throw Object.defineProperty(new Error(`Pattern should define hostname but found\n${JSON.stringify(pattern)}`), "__NEXT_ERROR_CODE", {
            value: "E410",
            enumerable: false,
            configurable: true
        });
    } else {
        if (!(0, _picomatch.makeRe)(pattern.hostname).test(url.hostname)) {
            return false;
        }
    }
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    // Should be the same as writeImagesManifest()
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasRemoteMatch(domains, remotePatterns, url) {
    return domains.some((domain)=>url.hostname === domain) || remotePatterns.some((p)=>matchRemotePattern(p, url));
} //# sourceMappingURL=match-remote-pattern.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/image-loader.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _findclosestquality = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/find-closest-quality.js [app-ssr] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/deployment-id.js [app-ssr] (ecmascript)");
function defaultLoader({ config, src, width, quality }) {
    if (src.startsWith('/') && src.includes('?') && config.localPatterns?.length === 1 && config.localPatterns[0].pathname === '**' && config.localPatterns[0].search === '') {
        throw Object.defineProperty(new Error(`Image with src "${src}" is using a query string which is not configured in images.localPatterns.` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const missingValues = [];
        // these should always be provided but make sure they are
        if (!src) missingValues.push('src');
        if (!width) missingValues.push('width');
        if (missingValues.length > 0) {
            throw Object.defineProperty(new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
                src,
                width,
                quality
            })}`), "__NEXT_ERROR_CODE", {
                value: "E188",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('//')) {
            throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                value: "E360",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('/') && config.localPatterns) {
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasLocalMatch } = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/match-local-pattern.js [app-ssr] (ecmascript)");
                if (!hasLocalMatch(config.localPatterns, src)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\` does not match \`images.localPatterns\` configured in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                        value: "E426",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!src.startsWith('/') && (config.domains || config.remotePatterns)) {
            let parsedSrc;
            try {
                parsedSrc = new URL(src);
            } catch (err) {
                console.error(err);
                throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                    value: "E63",
                    enumerable: false,
                    configurable: true
                });
            }
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasRemoteMatch } = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-ssr] (ecmascript)");
                if (!hasRemoteMatch(config.domains, config.remotePatterns, parsedSrc)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`), "__NEXT_ERROR_CODE", {
                        value: "E231",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const q = (0, _findclosestquality.findClosestQuality)(quality, config);
    let deploymentId = (0, _deploymentid.getDeploymentId)();
    return `${config.path}?url=${encodeURIComponent(src)}&w=${width}&q=${q}${src.startsWith('/') && deploymentId ? `&dpl=${deploymentId}` : ''}`;
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Image", {
    enumerable: true,
    get: function() {
        return Image;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)"));
const _head = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/head.js [app-ssr] (ecmascript)"));
const _getimgprops = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/get-img-props.js [app-ssr] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/image-config.js [app-ssr] (ecmascript)");
const _imageconfigcontextsharedruntime = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/image-config-context.js [app-ssr] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/utils/warn-once.js [app-ssr] (ecmascript)");
const _routercontextsharedruntime = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/router-context.js [app-ssr] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/image-loader.js [app-ssr] (ecmascript)"));
const _usemergedref = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/client/use-merged-ref.js [app-ssr] (ecmascript)");
// This is replaced by webpack define plugin
const configEnv = ("TURBOPACK compile-time value", {
    "deviceSizes": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 640),
        ("TURBOPACK compile-time value", 750),
        ("TURBOPACK compile-time value", 828),
        ("TURBOPACK compile-time value", 1080),
        ("TURBOPACK compile-time value", 1200),
        ("TURBOPACK compile-time value", 1920),
        ("TURBOPACK compile-time value", 2048),
        ("TURBOPACK compile-time value", 3840)
    ]),
    "imageSizes": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 32),
        ("TURBOPACK compile-time value", 48),
        ("TURBOPACK compile-time value", 64),
        ("TURBOPACK compile-time value", 96),
        ("TURBOPACK compile-time value", 128),
        ("TURBOPACK compile-time value", 256),
        ("TURBOPACK compile-time value", 384)
    ]),
    "qualities": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 75)
    ]),
    "path": ("TURBOPACK compile-time value", "/_next/image"),
    "loader": ("TURBOPACK compile-time value", "default"),
    "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
    "unoptimized": ("TURBOPACK compile-time value", true),
    "domains": ("TURBOPACK compile-time value", []),
    "remotePatterns": ("TURBOPACK compile-time value", []),
    "localPatterns": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", {
            "pathname": ("TURBOPACK compile-time value", "**"),
            "search": ("TURBOPACK compile-time value", "")
        })
    ]),
    "output": ("TURBOPACK compile-time value", "standalone")
});
if ("TURBOPACK compile-time truthy", 1) {
    ;
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
    const src = img?.src;
    if (!img || img['data-loaded-src'] === src) {
        return;
    }
    img['data-loaded-src'] = src;
    const p = 'decode' in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== 'empty') {
            setBlurComplete(true);
        }
        if (onLoadRef?.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event('load');
            Object.defineProperty(event, 'target', {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef?.current) {
            onLoadingCompleteRef.current(img);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            const origSrc = new URL(src, 'http://n').searchParams.get('url') || src;
            if (img.getAttribute('data-nimg') === 'fill') {
                if (!unoptimized && (!sizesInput || sizesInput === '100vw')) {
                    let widthViewportRatio = img.getBoundingClientRect().width / window.innerWidth;
                    if (widthViewportRatio < 0.6) {
                        if (sizesInput === '100vw') {
                            (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" prop and "sizes" prop of "100vw", but image is not rendered at full viewport width. Please adjust "sizes" to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`);
                        } else {
                            (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`);
                        }
                    }
                }
                if (img.parentElement) {
                    const { position } = window.getComputedStyle(img.parentElement);
                    const valid = [
                        'absolute',
                        'fixed',
                        'relative'
                    ];
                    if (!valid.includes(position)) {
                        (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" and parent element with invalid "position". Provided "${position}" should be one of ${valid.map(String).join(',')}.`);
                    }
                }
                if (img.height === 0) {
                    (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.`);
                }
            }
            const heightModified = img.height.toString() !== img.getAttribute('height');
            const widthModified = img.width.toString() !== img.getAttribute('width');
            if (heightModified && !widthModified || !heightModified && widthModified) {
                (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
            }
        }
    });
}
function getDynamicProps(fetchPriority) {
    if (Boolean(_react.use)) {
        // In React 19.0.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)(({ src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest }, forwardedRef)=>{
    const ownRef = (0, _react.useCallback)((img)=>{
        if (!img) {
            return;
        }
        if (onError) {
            // If the image has an error before react hydrates, then the error is lost.
            // The workaround is to wait until the image is mounted which is after hydration,
            // then we set the src again to trigger the error handler (if there was an error).
            // eslint-disable-next-line no-self-assign
            img.src = img.src;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!src) {
                console.error(`Image is missing required "src" property:`, img);
            }
            if (img.getAttribute('alt') === null) {
                console.error(`Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.`);
            }
        }
        if (img.complete) {
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        }
    }, [
        src,
        placeholder,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        onError,
        unoptimized,
        sizesInput
    ]);
    const ref = (0, _usemergedref.useMergedRef)(forwardedRef, ownRef);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? 'fill' : '1',
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: ref,
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== 'empty') {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload({ isAppRouter, imgAttributes }) {
    const opts = {
        as: 'image',
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.default.preload) {
        _reactdom.default.preload(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_head.default, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "preload",
            // Note how we omit the `href` attribute, as it would only be relevant
            // for browsers that do not support `imagesrcset`, and in those cases
            // it would cause the incorrect image to be preloaded.
            //
            // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
            href: imgAttributes.srcSet ? undefined : imgAttributes.src,
            ...opts
        }, '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
    });
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes,
            qualities,
            // During the SSR, configEnv (__NEXT_IMAGE_OPTS) does not include
            // security sensitive configs like `localPatterns`, which is needed
            // during the server render to ensure it's validated. Therefore use
            // configContext, which holds the config from the server for validation.
            localPatterns: ("TURBOPACK compile-time truthy", 1) ? configContext?.localPatterns : "TURBOPACK unreachable"
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(ImageElement, {
                ...imgAttributes,
                unoptimized: imgMeta.unoptimized,
                placeholder: imgMeta.placeholder,
                fill: imgMeta.fill,
                onLoadRef: onLoadRef,
                onLoadingCompleteRef: onLoadingCompleteRef,
                setBlurComplete: setBlurComplete,
                setShowAltText: setShowAltText,
                sizesInput: props.sizes,
                ref: forwardedRef
            }),
            imgMeta.preload ? /*#__PURE__*/ (0, _jsxruntime.jsx)(ImagePreload, {
                isAppRouter: isAppRouter,
                imgAttributes: imgAttributes
            }) : null
        ]
    });
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/image-external.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/get-img-props.js [app-ssr] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/image-loader.js [app-ssr] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", {
            "deviceSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 640),
                ("TURBOPACK compile-time value", 750),
                ("TURBOPACK compile-time value", 828),
                ("TURBOPACK compile-time value", 1080),
                ("TURBOPACK compile-time value", 1200),
                ("TURBOPACK compile-time value", 1920),
                ("TURBOPACK compile-time value", 2048),
                ("TURBOPACK compile-time value", 3840)
            ]),
            "imageSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 32),
                ("TURBOPACK compile-time value", 48),
                ("TURBOPACK compile-time value", 64),
                ("TURBOPACK compile-time value", 96),
                ("TURBOPACK compile-time value", 128),
                ("TURBOPACK compile-time value", 256),
                ("TURBOPACK compile-time value", 384)
            ]),
            "qualities": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 75)
            ]),
            "path": ("TURBOPACK compile-time value", "/_next/image"),
            "loader": ("TURBOPACK compile-time value", "default"),
            "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
            "unoptimized": ("TURBOPACK compile-time value", true),
            "domains": ("TURBOPACK compile-time value", []),
            "remotePatterns": ("TURBOPACK compile-time value", []),
            "localPatterns": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", {
                    "pathname": ("TURBOPACK compile-time value", "**"),
                    "search": ("TURBOPACK compile-time value", "")
                })
            ]),
            "output": ("TURBOPACK compile-time value", "standalone")
        })
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}),
"[project]/Desktop/Hackathon/website/node_modules/next/image.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/Hackathon/website/node_modules/next/dist/shared/lib/image-external.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=6e527_d53fc1b4._.js.map