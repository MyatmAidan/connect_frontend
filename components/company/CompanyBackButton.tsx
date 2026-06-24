"use client";

import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/common/ButtonLink";
import { useTranslation } from "@/hooks/useTranslation";

export function CompanyBackButton({
  href,
  label,
}: {
  href: string;
  label?: string;
}) {
  const { t } = useTranslation();

  return (
    <ButtonLink href={href} variant="outline" size="sm">
      <ArrowLeft className="size-4" />
      {label ?? t("common.back")}
    </ButtonLink>
  );
}
