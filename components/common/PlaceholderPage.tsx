"use client";

import { useTranslation } from "@/hooks/useTranslation";

export function PlaceholderPage({ title }: { title: string }) {
  const { t } = useTranslation();

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground">{t("common.comingSoon")}</p>
    </div>
  );
}
