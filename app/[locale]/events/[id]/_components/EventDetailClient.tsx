"use client";

import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/common/ButtonLink";
import { DetailCard, DetailDate, DetailField } from "@/components/common";
import { deleteEventApi, getEventByIdApi } from "@/api/events";
import { localePath } from "@/lib/locale-path";
import { resolveMediaUrl } from "@/lib/media";
import { useTranslation } from "@/hooks/useTranslation";
import { PageLoading } from "@/components/common/PageLoading";
import { EventRegistrationsPanel } from "./EventRegistrationsPanel";
import Image from "next/image";

export function EventDetailClient({ id }: { id: string }) {
  const { locale } = useParams<{ locale: string }>();
  const router = useRouter();
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["events", id],
    queryFn: () => getEventByIdApi(id),
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteEventApi(id),
    onSuccess: () => {
      toast.success(t("events.deleted"));
      router.push(localePath(locale, "/events"));
    },
  });

  if (isLoading) return <PageLoading variant="detail" />;
  if (!data) return <p>{t("events.notFound")}</p>;

  const photoUrl = resolveMediaUrl(data.photo);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        <ButtonLink href={localePath(locale, "/events")} variant="outline" size="sm">
          <ArrowLeft className="size-4" />
          {t("common.back")}
        </ButtonLink>
        <ButtonLink href={localePath(locale, `/events/${id}/edit`)} size="sm">
          <Pencil className="size-4" />
          {t("common.edit")}
        </ButtonLink>
        <Button variant="destructive" size="sm" disabled={deleteMutation.isPending} onClick={() => deleteMutation.mutate()}>
          <Trash2 className="size-4" />
          {t("common.delete")}
        </Button>
      </div>

      <DetailCard title={data.title}>
        {photoUrl ? (
          <div className="relative mb-4 h-52 w-full max-w-sm overflow-hidden rounded-2xl border bg-muted/30">
            <Image src={photoUrl} alt={data.title} fill className="object-contain object-left p-2" unoptimized />
          </div>
        ) : null}
        <DetailField label={t("events.section")} value={data.section} />
        <DetailField label={t("events.eventDate")} value={data.event_date ? <DetailDate value={data.event_date} /> : null} />
        <DetailField label={t("events.meetingUrl")} value={data.meeting_url} />
        <DetailField label={t("events.creator")} value={data.creator?.name} />
        <DetailField label={t("common.createdAt")} value={<DetailDate value={data.created_at} />} />
      </DetailCard>

      <EventRegistrationsPanel eventId={id} />
    </div>
  );
}
