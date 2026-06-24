"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface StatusPieChartProps {
  data: { name: string; value: number; fill?: string }[];
  emptyLabel: string;
}

export function StatusPieChart({ data, emptyLabel }: StatusPieChartProps) {
  const filtered = data.filter((item) => item.value > 0);

  if (filtered.length === 0) {
    return (
      <div className="text-muted-foreground flex h-[240px] items-center justify-center text-sm">
        {emptyLabel}
      </div>
    );
  }

  return (
    <div className="h-[240px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={filtered}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={52}
            outerRadius={84}
            paddingAngle={3}
          >
            {filtered.map((entry, index) => (
              <Cell key={entry.name} fill={entry.fill ?? `var(--chart-${(index % 5) + 1})`} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid hsl(var(--border))",
              background: "hsl(var(--popover))",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-2 flex flex-wrap justify-center gap-3 text-xs">
        {filtered.map((entry, index) => (
          <div key={entry.name} className="flex items-center gap-1.5">
            <span
              className="inline-block size-2.5 rounded-full"
              style={{ background: entry.fill ?? `var(--chart-${(index % 5) + 1})` }}
            />
            <span>{entry.name}</span>
            <span className="text-muted-foreground">({entry.value})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
