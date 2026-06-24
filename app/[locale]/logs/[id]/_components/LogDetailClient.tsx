"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/common/ButtonLink";
import { DetailCard, DetailDate, DetailField } from "@/components/common";
import { getAdminLogByIdApi } from "@/api/logs";
import { localePath } from "@/lib/locale-path";
import { useTranslation } from "@/hooks/useTranslation";

import { PageLoading } from "@/components/common/PageLoading";

export function LogDetailClient({ id }: { id: string }) {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["logs", id],
    queryFn: () => getAdminLogByIdApi(id),
  });

  if (isLoading) return <PageLoading variant="detail" />;
  if (!data) return <p>{t("logs.notFound")}</p>;

  return (
    <div className="space-y-6">
      <ButtonLink href={localePath(locale, "/logs")} variant="outline" size="sm">
        <ArrowLeft className="size-4" />
        {t("common.back")}
      </ButtonLink>
      <DetailCard title={data.action}>
        <DetailField label={t("logs.admin")} value={data.admin?.name} />
        <DetailField label={t("logs.description")} value={data.description} />
        <DetailField label={t("logs.targetType")} value={data.target_type} />
        <DetailField label={t("logs.targetId")} value={data.target_id} />
        <DetailField label={t("common.createdAt")} value={<DetailDate value={data.created_at} />} />
      </DetailCard>
    </div>
  );
}
