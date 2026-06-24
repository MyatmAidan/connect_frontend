export const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

export interface DateCountPoint {
  date: string;
  count: number;
}

export interface StatusCountPoint {
  status: string;
  count: number;
}

export function fillUserGrowthSeries(
  points: DateCountPoint[],
  days = 30,
): DateCountPoint[] {
  const map = new Map(points.map((point) => [point.date.slice(0, 10), point.count]));
  const series: DateCountPoint[] = [];

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const key = date.toISOString().slice(0, 10);
    series.push({ date: key, count: map.get(key) ?? 0 });
  }

  return series;
}

export function formatChartDate(date: string): string {
  const parsed = new Date(`${date}T00:00:00`);
  return parsed.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

export function statusChartData(
  points: StatusCountPoint[],
  labelForStatus: (status: string) => string,
) {
  return points.map((point, index) => ({
    name: labelForStatus(point.status),
    value: point.count,
    fill: CHART_COLORS[index % CHART_COLORS.length],
  }));
}
