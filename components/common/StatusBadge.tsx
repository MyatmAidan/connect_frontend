"use client";

import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";
import { statusLabel } from "@/lib/i18n-options";
import { cn } from "@/lib/utils";

const STATUS_VARIANTS: Record<string, string> = {
  active: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  banned: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  suspended: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  pending: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  accepted: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  rejected: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  cancelled: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300",
  scheduled: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  completed: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  reviewed: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  resolved: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  sent: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  failed: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  draft: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300",
  open: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  closed: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300",
  filled: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  shortlisted: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
  withdrawn: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300",
  inactive: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300",
  verified: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  unverified: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
};

export function StatusBadge({ status }: { status: string }) {
  const { t } = useTranslation();
  const variant = STATUS_VARIANTS[status] ?? "bg-muted text-muted-foreground";

  return (
    <Badge variant="outline" className={cn("border-0", variant)}>
      {statusLabel(t, status)}
    </Badge>
  );
}
