"use client";

import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/common/ButtonLink";
import { getEventByIdApi, updateEventApi } from "@/api/events";
import { EventForm } from "../../_components/EventForm";
import { localePath } from "@/lib/locale-path";
import { handleApiError } from "@/lib/handle-api-error";
import { useTranslation } from "@/hooks/useTranslation";
import { PageLoading } from "@/components/common/PageLoading";

export default function EventEditPage() {
  const { locale, id } = useParams<{ locale: string; id: string }>();
  const router = useRouter();
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["events", id],
    queryFn: () => getEventByIdApi(id),
  });

  const mutation = useMutation({
    mutationFn: (values: Parameters<typeof updateEventApi>[1]) => updateEventApi(id, values),
    onSuccess: () => {
      toast.success(t("events.updated"));
      router.push(localePath(locale, `/events/${id}`));
    },
    onError: (err) => handleApiError(err, undefined, t("events.updateFailed")),
  });

  if (isLoading) return <PageLoading variant="detail" />;
  if (!data) return <p>{t("events.notFound")}</p>;

  return (
    <div className="space-y-4">
      <ButtonLink href={localePath(locale, `/events/${id}`)} variant="outline" size="sm">
        <ArrowLeft className="size-4" />
        {t("common.back")}
      </ButtonLink>
      <h1 className="text-2xl font-bold">{t("events.editTitle")}</h1>
      <EventForm
        defaultValues={{
          title: data.title,
          section: data.section,
          event_date: data.event_date ?? "",
          meeting_url: data.meeting_url,
        }}
        existingPhotoUrl={data.photo}
        onSubmit={(values) => mutation.mutate(values)}
        isPending={mutation.isPending}
        submitLabel={t("common.save")}
      />
    </div>
  );
}
