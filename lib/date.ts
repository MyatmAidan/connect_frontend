import { format, parseISO } from "date-fns";

export function formatDate(
  value: string | Date | null | undefined,
  pattern = "PP",
): string {
  if (!value) return "—";
  const date = typeof value === "string" ? parseISO(value) : value;
  return format(date, pattern);
}
