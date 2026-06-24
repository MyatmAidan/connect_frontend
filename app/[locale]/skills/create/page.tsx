"use client";

import { useParams, useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/common/ButtonLink";
import { createSkillApi } from "@/api/skills";
import { SkillForm } from "../_components/SkillForm";
import { localePath } from "@/lib/locale-path";
import { handleApiError } from "@/lib/handle-api-error";
import { useTranslation } from "@/hooks/useTranslation";
import type { SkillFormValues } from "@/schemas/skillSchema";

export default function SkillCreatePage() {
  const { locale } = useParams<{ locale: string }>();
  const router = useRouter();
  const { t } = useTranslation();

  const mutation = useMutation({
    mutationFn: createSkillApi,
    onSuccess: () => {
      toast.success(t("skills.created"));
      router.push(localePath(locale, "/skills"));
    },
    onError: (err) => handleApiError(err, undefined, t("skills.createFailed")),
  });

  const onSubmit = (values: SkillFormValues) => {
    mutation.mutate({
      name: values.name,
      category_id: values.category_id || null,
      image: values.image ?? null,
    });
  };

  return (
    <div className="space-y-4">
      <ButtonLink href={localePath(locale, "/skills")} variant="outline" size="sm">
        <ArrowLeft className="size-4" />
        {t("common.back")}
      </ButtonLink>
      <h1 className="text-2xl font-bold">{t("skills.createTitle")}</h1>
      <SkillForm
        onSubmit={onSubmit}
        isPending={mutation.isPending}
        submitLabel={t("skills.create")}
      />
    </div>
  );
}
