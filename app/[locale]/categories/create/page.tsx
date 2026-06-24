"use client";

import { useParams, useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/common/ButtonLink";
import { createCategoryApi } from "@/api/categories";
import { CategoryForm } from "../_components/CategoryForm";
import { localePath } from "@/lib/locale-path";
import { handleApiError } from "@/lib/handle-api-error";
import { useTranslation } from "@/hooks/useTranslation";

export default function CategoryCreatePage() {
  const { locale } = useParams<{ locale: string }>();
  const router = useRouter();
  const { t } = useTranslation();

  const mutation = useMutation({
    mutationFn: createCategoryApi,
    onSuccess: () => {
      toast.success(t("categories.created"));
      router.push(localePath(locale, "/categories"));
    },
    onError: (err) => handleApiError(err, undefined, t("categories.createFailed")),
  });

  return (
    <div className="space-y-4">
      <ButtonLink href={localePath(locale, "/categories")} variant="outline" size="sm">
        <ArrowLeft className="size-4" />
        {t("common.back")}
      </ButtonLink>
      <h1 className="text-2xl font-bold">{t("categories.createTitle")}</h1>
      <CategoryForm
        onSubmit={(values) => mutation.mutate(values)}
        isPending={mutation.isPending}
        submitLabel={t("categories.create")}
      />
    </div>
  );
}
