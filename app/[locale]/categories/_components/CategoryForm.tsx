"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { categorySchema, type CategoryFormValues } from "@/schemas/categorySchema";
import { useTranslation } from "@/hooks/useTranslation";

export function CategoryForm({
  defaultValues,
  onSubmit,
  isPending,
  submitLabel,
}: {
  defaultValues?: CategoryFormValues;
  onSubmit: (values: CategoryFormValues) => void;
  isPending?: boolean;
  submitLabel: string;
}) {
  const { t } = useTranslation();
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: defaultValues ?? { name_en: "", name_my: "" },
  });

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="mx-auto max-w-lg space-y-4 rounded-lg border p-6"
    >
      <div className="space-y-2">
        <Label htmlFor="name_en">{t("categories.nameEn")}</Label>
        <Input id="name_en" {...form.register("name_en")} />
        {form.formState.errors.name_en && (
          <p className="text-destructive text-sm">{form.formState.errors.name_en.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="name_my">{t("categories.nameMy")}</Label>
        <Input id="name_my" {...form.register("name_my")} />
        {form.formState.errors.name_my && (
          <p className="text-destructive text-sm">{form.formState.errors.name_my.message}</p>
        )}
      </div>
      <Button type="submit" disabled={isPending}>
        {isPending ? t("common.saving") : submitLabel}
      </Button>
    </form>
  );
}
