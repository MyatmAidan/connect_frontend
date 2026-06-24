"use client";

import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/common/ButtonLink";
import { getSkillsApi, updateSkillApi } from "@/api/skills";
import { SkillForm } from "../../_components/SkillForm";
import { localePath } from "@/lib/locale-path";
import { handleApiError } from "@/lib/handle-api-error";
import { useTranslation } from "@/hooks/useTranslation";
import type { SkillFormValues } from "@/schemas/skillSchema";

import { PageLoading } from "@/components/common/PageLoading";

export default function SkillEditPage() {
  const { locale, id } = useParams<{ locale: string; id: string }>();
  const router = useRouter();
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["skills", id],
    queryFn: async () => {
      const res = await getSkillsApi({ per_page: 100 });
      return res.data.find((s) => s.id === id);
    },
  });

  const mutation = useMutation({
    mutationFn: (values: SkillFormValues) =>
      updateSkillApi(id, {
        name: values.name,
        category_id: values.category_id || null,
        image: values.image ?? null,
      }),
    onSuccess: () => {
      toast.success(t("skills.updated"));
      router.push(localePath(locale, "/skills"));
    },
    onError: (err) => handleApiError(err, undefined, t("skills.updateFailed")),
  });

  if (isLoading) return <PageLoading variant="detail" />;
  if (!data) return <p>Skill not found</p>;

  return (
    <div className="space-y-4">
      <ButtonLink href={localePath(locale, "/skills")} variant="outline" size="sm">
        <ArrowLeft className="size-4" />
        {t("common.back")}
      </ButtonLink>
      <h1 className="text-2xl font-bold">{t("skills.editTitle")}</h1>
      <SkillForm
        defaultValues={{ name: data.name, category_id: data.category_id ?? null }}
        existingImageUrl={data.image}
        onSubmit={(v) => mutation.mutate(v)}
        isPending={mutation.isPending}
        submitLabel={t("common.save")}
      />
    </div>
  );
}
