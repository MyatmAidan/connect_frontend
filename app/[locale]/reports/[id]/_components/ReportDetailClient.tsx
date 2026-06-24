"use client";

import { useParams } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeft, Check, X, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/common/ButtonLink";
import { DetailCard, DetailDate, DetailField, StatusBadge } from "@/components/common";
import {
  getReportByIdApi,
  reviewReportApi,
  resolveReportApi,
  rejectReportApi,
} from "@/api/reports";
import { localePath } from "@/lib/locale-path";
import { useTranslation } from "@/hooks/useTranslation";

import { PageLoading } from "@/components/common/PageLoading";

export function ReportDetailClient({ id }: { id: string }) {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["reports", id],
    queryFn: () => getReportByIdApi(id),
  });

  const invalidate = () => void queryClient.invalidateQueries({ queryKey: ["reports", id] });

  const reviewMutation = useMutation({
    mutationFn: () => reviewReportApi(id),
    onSuccess: () => { toast.success(t("reports.reviewed")); invalidate(); },
  });
  const resolveMutation = useMutation({
    mutationFn: () => resolveReportApi(id),
    onSuccess: () => { toast.success(t("reports.resolved")); invalidate(); },
  });
  const rejectMutation = useMutation({
    mutationFn: () => rejectReportApi(id),
    onSuccess: () => { toast.success(t("reports.rejected")); invalidate(); },
  });

  if (isLoading) return <PageLoading variant="detail" />;
  if (!data) return <p>{t("reports.notFound")}</p>;

  const pending = data.status === "pending";

  return (
    <div className="space-y-6">
      <ButtonLink href={localePath(locale, "/reports")} variant="outline" size="sm">
        <ArrowLeft className="size-4" />
        {t("common.back")}
      </ButtonLink>

      {pending && (
        <div className="flex flex-wrap gap-2">
          <Button size="sm" disabled={reviewMutation.isPending} onClick={() => reviewMutation.mutate()}>
            <Eye className="size-4" />
            {t("reports.review")}
          </Button>
          <Button size="sm" disabled={resolveMutation.isPending} onClick={() => resolveMutation.mutate()}>
            <Check className="size-4" />
            {t("reports.resolve")}
          </Button>
          <Button variant="destructive" size="sm" disabled={rejectMutation.isPending} onClick={() => rejectMutation.mutate()}>
            <X className="size-4" />
            {t("reports.reject")}
          </Button>
        </div>
      )}

      <DetailCard title={t("reports.detailTitle")}>
        <DetailField label={t("common.status")} value={<StatusBadge status={data.status} />} />
        <DetailField label={t("reports.reason")} value={data.reason} />
        <DetailField label={t("reports.reporter")} value={data.reporter?.name} />
        <DetailField label={t("reports.reportedUser")} value={data.reported_user?.name} />
        <DetailField label={t("reports.description")} value={data.description} />
        <DetailField label={t("common.createdAt")} value={<DetailDate value={data.created_at} />} />
        <DetailField label={t("reports.reviewedAt")} value={<DetailDate value={data.reviewed_at} />} />
      </DetailCard>
    </div>
  );
}
