"use client";

import { useParams, useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/common/ButtonLink";
import { createEventApi } from "@/api/events";
import { EventForm } from "../_components/EventForm";
import { localePath } from "@/lib/locale-path";
import { handleApiError } from "@/lib/handle-api-error";
import { useTranslation } from "@/hooks/useTranslation";

export default function EventCreatePage() {
  const { locale } = useParams<{ locale: string }>();
  const router = useRouter();
  const { t } = useTranslation();

  const mutation = useMutation({
    mutationFn: createEventApi,
    onSuccess: () => {
      toast.success(t("events.created"));
      router.push(localePath(locale, "/events"));
    },
    onError: (err) => handleApiError(err, undefined, t("events.createFailed")),
  });

  return (
    <div className="space-y-4">
      <ButtonLink href={localePath(locale, "/events")} variant="outline" size="sm">
        <ArrowLeft className="size-4" />
        {t("common.back")}
      </ButtonLink>
      <h1 className="text-2xl font-bold">{t("events.createTitle")}</h1>
      <EventForm
        onSubmit={(values) => mutation.mutate(values)}
        isPending={mutation.isPending}
        submitLabel={t("events.create")}
      />
    </div>
  );
}
