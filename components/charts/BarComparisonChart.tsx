"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface BarComparisonChartProps {
  data: { name: string; value: number }[];
  emptyLabel: string;
}

export function BarComparisonChart({ data, emptyLabel }: BarComparisonChartProps) {
  const hasData = data.some((item) => item.value > 0);

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
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border/60" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
          <YAxis allowDecimals={false} tick={{ fontSize: 12 }} tickLine={false} axisLine={false} width={32} />
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid hsl(var(--border))",
              background: "hsl(var(--popover))",
            }}
          />
          <Bar dataKey="value" fill="var(--chart-2)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
