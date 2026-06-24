module.exports = [
"[project]/Desktop/Hackathon/website/lib/chart-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHART_COLORS",
    ()=>CHART_COLORS,
    "fillUserGrowthSeries",
    ()=>fillUserGrowthSeries,
    "formatChartDate",
    ()=>formatChartDate,
    "statusChartData",
    ()=>statusChartData
]);
const CHART_COLORS = [
    "var(--chart-1)",
    "var(--chart-2)",
    "var(--chart-3)",
    "var(--chart-4)",
    "var(--chart-5)"
];
function fillUserGrowthSeries(points, days = 30) {
    const map = new Map(points.map((point)=>[
            point.date.slice(0, 10),
            point.count
        ]));
    const series = [];
    for(let i = days - 1; i >= 0; i--){
        const date = new Date();
        date.setDate(date.getDate() - i);
        const key = date.toISOString().slice(0, 10);
        series.push({
            date: key,
            count: map.get(key) ?? 0
        });
    }
    return series;
}
function formatChartDate(date) {
    const parsed = new Date(`${date}T00:00:00`);
    return parsed.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric"
    });
}
function statusChartData(points, labelForStatus) {
    return points.map((point, index)=>({
            name: labelForStatus(point.status),
            value: point.count,
            fill: CHART_COLORS[index % CHART_COLORS.length]
        }));
}
}),
"[project]/Desktop/Hackathon/website/components/charts/AreaTrendChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AreaTrendChart",
    ()=>AreaTrendChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/cartesian/Area.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/chart/AreaChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$chart$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/lib/chart-utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function AreaTrendChart({ data, emptyLabel }) {
    const hasData = data.some((point)=>point.count > 0);
    if (!hasData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-muted-foreground flex h-[240px] items-center justify-center text-sm",
            children: emptyLabel
        }, void 0, false, {
            fileName: "[project]/Desktop/Hackathon/website/components/charts/AreaTrendChart.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[240px] w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
                data: data,
                margin: {
                    top: 8,
                    right: 8,
                    left: 0,
                    bottom: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "trendFill",
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "5%",
                                    stopColor: "var(--chart-1)",
                                    stopOpacity: 0.35
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/charts/AreaTrendChart.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "95%",
                                    stopColor: "var(--chart-1)",
                                    stopOpacity: 0.02
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/charts/AreaTrendChart.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Hackathon/website/components/charts/AreaTrendChart.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/charts/AreaTrendChart.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        strokeDasharray: "3 3",
                        className: "stroke-border/60"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/charts/AreaTrendChart.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                        dataKey: "date",
                        tickFormatter: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$chart$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatChartDate"],
                        tick: {
                            fontSize: 12
                        },
                        tickLine: false,
                        axisLine: false,
                        minTickGap: 24
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/charts/AreaTrendChart.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                        allowDecimals: false,
                        tick: {
                            fontSize: 12
                        },
                        tickLine: false,
                        axisLine: false,
                        width: 32
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/charts/AreaTrendChart.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                        labelFormatter: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$chart$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatChartDate"])(String(value)),
                        formatter: (value)=>[
                                value,
                                ""
                            ],
                        contentStyle: {
                            borderRadius: "8px",
                            border: "1px solid hsl(var(--border))",
                            background: "hsl(var(--popover))"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/charts/AreaTrendChart.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
                        type: "monotone",
                        dataKey: "count",
                        stroke: "var(--chart-1)",
                        fill: "url(#trendFill)",
                        strokeWidth: 2
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/charts/AreaTrendChart.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Hackathon/website/components/charts/AreaTrendChart.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Hackathon/website/components/charts/AreaTrendChart.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/charts/AreaTrendChart.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Hackathon/website/components/charts/BarComparisonChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarComparisonChart",
    ()=>BarComparisonChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
"use client";
;
;
function BarComparisonChart({ data, emptyLabel }) {
    const hasData = data.some((item)=>item.value > 0);
    if (!hasData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-muted-foreground flex h-[240px] items-center justify-center text-sm",
            children: emptyLabel
        }, void 0, false, {
            fileName: "[project]/Desktop/Hackathon/website/components/charts/BarComparisonChart.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[240px] w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                data: data,
                margin: {
                    top: 8,
                    right: 8,
                    left: 0,
                    bottom: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        strokeDasharray: "3 3",
                        className: "stroke-border/60",
                        vertical: false
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/charts/BarComparisonChart.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                        dataKey: "name",
                        tick: {
                            fontSize: 12
                        },
                        tickLine: false,
                        axisLine: false
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/charts/BarComparisonChart.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                        allowDecimals: false,
                        tick: {
                            fontSize: 12
                        },
                        tickLine: false,
                        axisLine: false,
                        width: 32
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/charts/BarComparisonChart.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                        contentStyle: {
                            borderRadius: "8px",
                            border: "1px solid hsl(var(--border))",
                            background: "hsl(var(--popover))"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/charts/BarComparisonChart.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "value",
                        fill: "var(--chart-2)",
                        radius: [
                            6,
                            6,
                            0,
                            0
                        ]
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/charts/BarComparisonChart.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Hackathon/website/components/charts/BarComparisonChart.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Hackathon/website/components/charts/BarComparisonChart.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/charts/BarComparisonChart.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Hackathon/website/components/charts/StatusPieChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusPieChart",
    ()=>StatusPieChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/component/Cell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/polar/Pie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/chart/PieChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
"use client";
;
;
function StatusPieChart({ data, emptyLabel }) {
    const filtered = data.filter((item)=>item.value > 0);
    if (filtered.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-muted-foreground flex h-[240px] items-center justify-center text-sm",
            children: emptyLabel
        }, void 0, false, {
            fileName: "[project]/Desktop/Hackathon/website/components/charts/StatusPieChart.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[240px] w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: "100%",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PieChart"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
                            data: filtered,
                            dataKey: "value",
                            nameKey: "name",
                            cx: "50%",
                            cy: "50%",
                            innerRadius: 52,
                            outerRadius: 84,
                            paddingAngle: 3,
                            children: filtered.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                                    fill: entry.fill ?? `var(--chart-${index % 5 + 1})`
                                }, entry.name, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/charts/StatusPieChart.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon/website/components/charts/StatusPieChart.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                            contentStyle: {
                                borderRadius: "8px",
                                border: "1px solid hsl(var(--border))",
                                background: "hsl(var(--popover))"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon/website/components/charts/StatusPieChart.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Hackathon/website/components/charts/StatusPieChart.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon/website/components/charts/StatusPieChart.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex flex-wrap justify-center gap-3 text-xs",
                children: filtered.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block size-2.5 rounded-full",
                                style: {
                                    background: entry.fill ?? `var(--chart-${index % 5 + 1})`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon/website/components/charts/StatusPieChart.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: entry.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon/website/components/charts/StatusPieChart.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: [
                                    "(",
                                    entry.value,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Hackathon/website/components/charts/StatusPieChart.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        ]
                    }, entry.name, true, {
                        fileName: "[project]/Desktop/Hackathon/website/components/charts/StatusPieChart.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon/website/components/charts/StatusPieChart.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Hackathon/website/components/charts/StatusPieChart.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Hackathon/website/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/ui/card.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/ui/card.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/ui/card.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/ui/card.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-(--card-spacing)", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/ui/card.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon/website/components/ui/card.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/Hackathon/website/components/dashboard/DashboardShortcuts.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardShortcuts",
    ()=>DashboardShortcuts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
function DashboardShortcuts({ title, items, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-base",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardShortcuts.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardShortcuts.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
                children: items.map((item)=>{
                    const Icon = item.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hover:bg-muted/60 flex items-start gap-3 rounded-xl border p-4 transition-colors"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "size-5"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardShortcuts.tsx",
                                    lineNumber: 37,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardShortcuts.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardShortcuts.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this),
                                    item.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground mt-1 text-sm",
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardShortcuts.tsx",
                                        lineNumber: 42,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardShortcuts.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.href, true, {
                        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardShortcuts.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardShortcuts.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardShortcuts.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Hackathon/website/components/dashboard/StatCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatCard",
    ()=>StatCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
;
;
;
function StatCard({ title, value, loading, hint }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-sm font-medium text-muted-foreground",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Desktop/Hackathon/website/components/dashboard/StatCard.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/StatCard.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-8 w-20"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Hackathon/website/components/dashboard/StatCard.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl font-bold",
                            children: value ?? 0
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon/website/components/dashboard/StatCard.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this),
                        hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mt-1 text-xs",
                            children: hint
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon/website/components/dashboard/StatCard.tsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this) : null
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/StatCard.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/StatCard.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Hackathon/website/lib/api-response.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unwrapApiData",
    ()=>unwrapApiData
]);
function unwrapApiData(response) {
    if (response && typeof response === "object" && "data" in response && response.data !== undefined && response.data !== null) {
        return response.data;
    }
    return response;
}
}),
"[project]/Desktop/Hackathon/website/api/company-auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/api/company-api.ts [app-ssr] (ecmascript)");
;
async function companyLoginApi(credentials) {
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["companyApi"].post("/auth/login", credentials);
    const body = result;
    return body.data;
}
async function companyRegisterApi(payload) {
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["companyApi"].post("/auth/register", payload);
    const body = result;
    return body.data;
}
async function companyLogoutApi() {
    await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["companyApi"].post("/auth/logout");
}
async function getCompanyMeApi() {
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["companyApi"].get("/auth/me");
    const body = result;
    return body.data;
}
}),
"[project]/Desktop/Hackathon/website/store/company-auth-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCompanyAuthStore",
    ()=>useCompanyAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/api/company-auth.ts [app-ssr] (ecmascript)");
;
;
;
const useCompanyAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
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
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCompanyMeApi"])();
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
}),
"[project]/Desktop/Hackathon/website/api/company-api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "companyApi",
    ()=>companyApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$company$2d$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/store/company-auth-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$loading$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/store/loading-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$i18n$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/i18n/config.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const companyApiBaseUrl = ("TURBOPACK compile-time value", "http://127.0.0.1:8000/api/v1/company") || "http://localhost:8000/api/v1/company";
const companyApi = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: companyApiBaseUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});
companyApi.interceptors.request.use((config)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (config.data instanceof FormData) {
        delete config.headers["Content-Type"];
    }
    return config;
});
companyApi.interceptors.response.use((response)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (response.status === 200 || response.status === 201) {
        return response.data;
    }
    return response;
}, (error)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return Promise.reject(error);
});
}),
"[project]/Desktop/Hackathon/website/api/dashboard.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCompanyDashboardStatsApi",
    ()=>getCompanyDashboardStatsApi,
    "getDashboardActivityApi",
    ()=>getDashboardActivityApi,
    "getDashboardChartsApi",
    ()=>getDashboardChartsApi,
    "getDashboardStatsApi",
    ()=>getDashboardStatsApi,
    "getUserGrowthApi",
    ()=>getUserGrowthApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$api$2d$response$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/lib/api-response.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/api/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/api/company-api.ts [app-ssr] (ecmascript)");
;
;
;
async function getDashboardStatsApi() {
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/dashboard/stats");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$api$2d$response$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unwrapApiData"])(result);
}
async function getDashboardActivityApi() {
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/dashboard/activity");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$api$2d$response$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unwrapApiData"])(result);
}
async function getUserGrowthApi() {
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/dashboard/user-growth");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$api$2d$response$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unwrapApiData"])(result);
}
async function getDashboardChartsApi() {
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/dashboard/charts");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$api$2d$response$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unwrapApiData"])(result);
}
async function getCompanyDashboardStatsApi() {
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$company$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["companyApi"].get("/dashboard/stats");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$api$2d$response$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unwrapApiData"])(result);
}
}),
"[project]/Desktop/Hackathon/website/hooks/useAuthReady.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthReady",
    ()=>useAuthReady
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/store/auth-store.ts [app-ssr] (ecmascript)");
"use client";
;
function useAuthReady() {
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])((state)=>state.token);
    return Boolean(token);
}
}),
"[project]/Desktop/Hackathon/website/hooks/useDashboard.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDashboardActivity",
    ()=>useDashboardActivity,
    "useDashboardCharts",
    ()=>useDashboardCharts,
    "useDashboardStats",
    ()=>useDashboardStats,
    "useUserGrowth",
    ()=>useUserGrowth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$dashboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/api/dashboard.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useAuthReady$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/hooks/useAuthReady.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/store/auth-store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function useDashboardStats() {
    const authReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useAuthReady$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthReady"])();
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])((state)=>state.token);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "dashboard",
            "stats",
            token
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$dashboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDashboardStatsApi"],
        enabled: authReady,
        retry: (failureCount, error)=>{
            const status = error?.response?.status;
            return status !== 401 && failureCount < 1;
        }
    });
}
function useDashboardActivity() {
    const authReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useAuthReady$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthReady"])();
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])((state)=>state.token);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "dashboard",
            "activity",
            token
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$dashboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDashboardActivityApi"],
        enabled: authReady,
        retry: (failureCount, error)=>{
            const status = error?.response?.status;
            return status !== 401 && failureCount < 1;
        }
    });
}
function useUserGrowth() {
    const authReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useAuthReady$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthReady"])();
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])((state)=>state.token);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "dashboard",
            "user-growth",
            token
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$dashboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserGrowthApi"],
        enabled: authReady,
        retry: (failureCount, error)=>{
            const status = error?.response?.status;
            return status !== 401 && failureCount < 1;
        }
    });
}
function useDashboardCharts() {
    const authReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useAuthReady$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthReady"])();
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])((state)=>state.token);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "dashboard",
            "charts",
            token
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$api$2f$dashboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDashboardChartsApi"],
        enabled: authReady,
        retry: (failureCount, error)=>{
            const status = error?.response?.status;
            return status !== 401 && failureCount < 1;
        }
    });
}
}),
"[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardStats",
    ()=>DashboardStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/briefcase.mjs [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/building-2.mjs [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/clipboard-list.mjs [app-ssr] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/flag.mjs [app-ssr] (ecmascript) <export default as Flag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/send.mjs [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2d$round$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/circle-user-round.mjs [app-ssr] (ecmascript) <export default as UserCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/lucide-react/dist/esm/icons/users.mjs [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$charts$2f$AreaTrendChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/components/charts/AreaTrendChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$charts$2f$BarComparisonChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/components/charts/BarComparisonChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$charts$2f$StatusPieChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/components/charts/StatusPieChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$dashboard$2f$DashboardShortcuts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/components/dashboard/DashboardShortcuts.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$dashboard$2f$StatCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/components/dashboard/StatCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useDashboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/hooks/useDashboard.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useTranslation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/hooks/useTranslation.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$chart$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/lib/chart-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon/website/store/auth-store.ts [app-ssr] (ecmascript)");
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
function DashboardStats() {
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])((state)=>state.token);
    const prefix = `/${locale}`;
    const { data: stats, isLoading: statsLoading, isError: statsError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useDashboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDashboardStats"])();
    const { data: activity, isLoading: activityLoading, isError: activityError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useDashboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDashboardActivity"])();
    const { data: growth, isLoading: growthLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useDashboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserGrowth"])();
    const { data: charts, isLoading: chartsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$hooks$2f$useDashboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDashboardCharts"])();
    const statusLabel = (status)=>t(`status.${status}`, {
            defaultValue: status.replace(/_/g, " ")
        });
    const growthSeries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$chart$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fillUserGrowthSeries"])((growth ?? []).map((point)=>({
            date: String(point.date).slice(0, 10),
            count: Number(point.count)
        })));
    const activityBars = [
        {
            name: t("dashboard.newUsers"),
            value: activity?.new_users_7d ?? 0
        },
        {
            name: t("dashboard.newConnections"),
            value: activity?.new_connections_7d ?? 0
        },
        {
            name: t("dashboard.newEvents"),
            value: activity?.new_events_7d ?? 0
        }
    ];
    const shortcuts = [
        {
            title: t("dashboard.shortcutsUsers"),
            description: t("dashboard.shortcutsUsersDesc"),
            href: `${prefix}/users`,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        },
        {
            title: t("dashboard.shortcutsJobs"),
            description: t("dashboard.shortcutsJobsDesc"),
            href: `${prefix}/jobs`,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
        },
        {
            title: t("dashboard.shortcutsApplications"),
            description: t("dashboard.shortcutsApplicationsDesc"),
            href: `${prefix}/job-applications`,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"]
        },
        {
            title: t("dashboard.shortcutsReports"),
            description: t("dashboard.shortcutsReportsDesc"),
            href: `${prefix}/reports`,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"]
        },
        {
            title: t("dashboard.shortcutsTelegram"),
            description: t("dashboard.shortcutsTelegramDesc"),
            href: `${prefix}/telegram`,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"]
        },
        {
            title: t("dashboard.shortcutsCompanies"),
            description: t("dashboard.shortcutsCompaniesDesc"),
            href: `${prefix}/companies`,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
        },
        {
            title: t("dashboard.shortcutsProfiles"),
            description: t("dashboard.shortcutsProfilesDesc"),
            href: `${prefix}/profiles`,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2d$round$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle2$3e$__["UserCircle2"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold tracking-tight",
                    children: t("dashboard.title")
                }, void 0, false, {
                    fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            token && (statsError || activityError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-destructive text-sm",
                children: t("dashboard.loadError")
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$dashboard$2f$StatCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatCard"], {
                        title: t("dashboard.totalUsers"),
                        value: stats?.total_users,
                        loading: statsLoading
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$dashboard$2f$StatCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatCard"], {
                        title: t("dashboard.activeUsers"),
                        value: stats?.active_users,
                        loading: statsLoading
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$dashboard$2f$StatCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatCard"], {
                        title: t("dashboard.totalJobs"),
                        value: stats?.total_jobs,
                        loading: statsLoading
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$dashboard$2f$StatCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatCard"], {
                        title: t("dashboard.openJobs"),
                        value: stats?.open_jobs,
                        loading: statsLoading
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$dashboard$2f$StatCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatCard"], {
                        title: t("dashboard.totalApplications"),
                        value: stats?.total_applications,
                        loading: statsLoading
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$dashboard$2f$StatCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatCard"], {
                        title: t("dashboard.pendingApplications"),
                        value: stats?.pending_applications,
                        loading: statsLoading
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$dashboard$2f$StatCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatCard"], {
                        title: t("dashboard.connections"),
                        value: stats?.total_connections,
                        loading: statsLoading
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$dashboard$2f$StatCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatCard"], {
                        title: t("dashboard.telegramLinked"),
                        value: stats?.telegram_connected_users,
                        loading: statsLoading
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 xl:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base",
                                    children: t("dashboard.userGrowth")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: growthLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-muted-foreground flex h-[240px] items-center justify-center text-sm",
                                    children: t("common.loading")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$charts$2f$AreaTrendChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaTrendChart"], {
                                    data: growthSeries,
                                    emptyLabel: t("dashboard.noChartData")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base",
                                    children: t("dashboard.activityChart")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: activityLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-muted-foreground flex h-[240px] items-center justify-center text-sm",
                                    children: t("common.loading")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$charts$2f$BarComparisonChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarComparisonChart"], {
                                    data: activityBars,
                                    emptyLabel: t("dashboard.noChartData")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base",
                                    children: t("dashboard.jobsByStatus")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: chartsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-muted-foreground flex h-[240px] items-center justify-center text-sm",
                                    children: t("common.loading")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$charts$2f$StatusPieChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusPieChart"], {
                                    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$chart$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["statusChartData"])(charts?.jobs_by_status ?? [], statusLabel),
                                    emptyLabel: t("dashboard.noChartData")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base",
                                    children: t("dashboard.applicationsByStatus")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: chartsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-muted-foreground flex h-[240px] items-center justify-center text-sm",
                                    children: t("common.loading")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$charts$2f$StatusPieChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusPieChart"], {
                                    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$lib$2f$chart$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["statusChartData"])(charts?.applications_by_status ?? [], statusLabel),
                                    emptyLabel: t("dashboard.noChartData")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon$2f$website$2f$components$2f$dashboard$2f$DashboardShortcuts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardShortcuts"], {
                title: t("dashboard.shortcuts"),
                items: shortcuts
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Hackathon/website/components/dashboard/DashboardStats.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_Hackathon_website_f43c2971._.js.map