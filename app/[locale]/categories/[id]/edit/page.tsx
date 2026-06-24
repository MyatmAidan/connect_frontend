"use client";

import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/common/ButtonLink";
import { getCategoriesApi, updateCategoryApi } from "@/api/categories";
import { CategoryForm } from "../../_components/CategoryForm";
import { localePath } from "@/lib/locale-path";
import { handleApiError } from "@/lib/handle-api-error";
import { useTranslation } from "@/hooks/useTranslation";
import { PageLoading } from "@/components/common/PageLoading";

export default function CategoryEditPage() {
  const { locale, id } = useParams<{ locale: string; id: string }>();
  const router = useRouter();
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["categories", id],
    queryFn: async () => {
      const res = await getCategoriesApi({ per_page: 100 });
      return res.data.find((category) => category.id === id);
    },
  });

  const mutation = useMutation({
    mutationFn: updateCategoryApi.bind(null, id),
    onSuccess: () => {
      toast.success(t("categories.updated"));
      router.push(localePath(locale, "/categories"));
    },
    onError: (err) => handleApiError(err, undefined, t("categories.updateFailed")),
  });

  if (isLoading) return <PageLoading variant="detail" />;
  if (!data) return <p>{t("categories.notFound")}</p>;

  return (
    <div className="space-y-4">
      <ButtonLink href={localePath(locale, "/categories")} variant="outline" size="sm">
        <ArrowLeft className="size-4" />
        {t("common.back")}
      </ButtonLink>
      <h1 className="text-2xl font-bold">{t("categories.editTitle")}</h1>
      <CategoryForm
        defaultValues={{ name_en: data.name_en, name_my: data.name_my }}
        onSubmit={(values) => mutation.mutate(values)}
        isPending={mutation.isPending}
        submitLabel={t("common.save")}
      />
    </div>
  );
}
