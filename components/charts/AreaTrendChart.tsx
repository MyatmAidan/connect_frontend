"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatChartDate } from "@/lib/chart-utils";

interface AreaTrendChartProps {
  data: { date: string; count: number }[];
  emptyLabel: string;
}

export function AreaTrendChart({ data, emptyLabel }: AreaTrendChartProps) {
  const hasData = data.some((point) => point.count > 0);

  if (!hasData) {
    return (
      <div className="text-muted-foreground flex h-[240px] items-center justify-center text-sm">
        {emptyLabel}
      </div>
    );
  }

  return (
    <div className="h-[240px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.35} />
              <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border/60" />
          <XAxis
            dataKey="date"
            tickFormatter={formatChartDate}
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            minTickGap={24}
          />
          <YAxis allowDecimals={false} tick={{ fontSize: 12 }} tickLine={false} axisLine={false} width={32} />
          <Tooltip
            labelFormatter={(value) => formatChartDate(String(value))}
            formatter={(value) => [value, ""]}
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid hsl(var(--border))",
              background: "hsl(var(--popover))",
            }}
          />
          <Area
            type="monotone"
            dataKey="count"
            stroke="var(--chart-1)"
            fill="url(#trendFill)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
