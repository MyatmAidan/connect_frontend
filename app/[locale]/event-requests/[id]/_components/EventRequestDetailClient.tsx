"use client";

import { useParams } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeft, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/common/ButtonLink";
import { DetailCard, DetailDate, DetailField, StatusBadge } from "@/components/common";
import {
  approveEventRequestApi,
  getEventRequestByIdApi,
  rejectEventRequestApi,
} from "@/api/event-requests";
import { localePath } from "@/lib/locale-path";
import { resolveMediaUrl } from "@/lib/media";
import { useTranslation } from "@/hooks/useTranslation";
import { PageLoading } from "@/components/common/PageLoading";
import Image from "next/image";

export function EventRequestDetailClient({ id }: { id: string }) {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["event-requests", id],
    queryFn: () => getEventRequestByIdApi(id),
  });

  const invalidate = () => void queryClient.invalidateQueries({ queryKey: ["event-requests", id] });

  const approveMutation = useMutation({
    mutationFn: () => approveEventRequestApi(id),
    onSuccess: () => {
      toast.success(t("eventRequests.approved"));
      invalidate();
    },
  });

  const rejectMutation = useMutation({
    mutationFn: () => rejectEventRequestApi(id),
    onSuccess: () => {
      toast.success(t("eventRequests.rejected"));
      invalidate();
    },
  });

  if (isLoading) return <PageLoading variant="detail" />;
  if (!data) return <p>{t("eventRequests.notFound")}</p>;

  const photoUrl = resolveMediaUrl(data.photo);
  const pending = data.status === "pending";

  return (
    <div className="space-y-6">
      <ButtonLink href={localePath(locale, "/event-requests")} variant="outline" size="sm">
        <ArrowLeft className="size-4" />
        {t("common.back")}
      </ButtonLink>

      {pending ? (
        <div className="flex flex-wrap gap-2">
          <Button size="sm" disabled={approveMutation.isPending} onClick={() => approveMutation.mutate()}>
            <Check className="size-4" />
            {t("eventRequests.approve")}
          </Button>
          <Button variant="destructive" size="sm" disabled={rejectMutation.isPending} onClick={() => rejectMutation.mutate()}>
            <X className="size-4" />
            {t("eventRequests.reject")}
          </Button>
        </div>
      ) : null}

      <DetailCard title={data.title}>
        {photoUrl ? (
          <div className="relative mb-4 h-52 w-full max-w-sm overflow-hidden rounded-2xl border bg-muted/30">
            <Image src={photoUrl} alt={data.title} fill className="object-contain object-left p-2" unoptimized />
          </div>
        ) : null}
        <DetailField label={t("common.status")} value={<StatusBadge status={data.status} />} />
        <DetailField label={t("eventRequests.requester")} value={data.user?.name} />
        <DetailField label={t("events.section")} value={data.section} />
        <DetailField label={t("events.eventDate")} value={data.event_date ? <DetailDate value={data.event_date} /> : null} />
        <DetailField label={t("events.meetingUrl")} value={data.meeting_url} />
        <DetailField label={t("eventRequests.message")} value={data.message} />
        {data.event_id ? (
          <DetailField
            label={t("eventRequests.createdEvent")}
            value={
              <ButtonLink href={localePath(locale, `/events/${data.event_id}`)} size="sm">
                {t("eventRequests.viewEvent")}
              </ButtonLink>
            }
          />
        ) : null}
        <DetailField label={t("common.createdAt")} value={<DetailDate value={data.created_at} />} />
      </DetailCard>
    </div>
  );
}
