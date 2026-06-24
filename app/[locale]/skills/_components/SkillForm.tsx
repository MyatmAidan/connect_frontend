"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCategoriesApi } from "@/api/categories";
import { skillSchema, type SkillFormValues } from "@/schemas/skillSchema";
import { resolveMediaUrl } from "@/lib/media";
import { useTranslation } from "@/hooks/useTranslation";

export function SkillForm({
  defaultValues,
  existingImageUrl,
  onSubmit,
  isPending,
  submitLabel,
}: {
  defaultValues?: SkillFormValues;
  existingImageUrl?: string | null;
  onSubmit: (values: SkillFormValues) => void;
  isPending?: boolean;
  submitLabel: string;
}) {
  const { t } = useTranslation();
  const [image, setImage] = useState<File | null>(null);
  const form = useForm<SkillFormValues>({
    resolver: zodResolver(skillSchema),
    defaultValues: defaultValues ?? { name: "", category_id: null },
  });

  const { data: categoriesData } = useQuery({
    queryKey: ["categories", "all"],
    queryFn: () => getCategoriesApi({ per_page: 100 }),
  });

  const categories = categoriesData?.data ?? [];
  const categoryId = form.watch("category_id");
  const previewUrl = image ? URL.createObjectURL(image) : resolveMediaUrl(existingImageUrl);

  return (
    <form
      onSubmit={form.handleSubmit((values) => onSubmit({ ...values, image }))}
      className="mx-auto max-w-lg space-y-4 rounded-lg border p-6"
    >
      <div className="space-y-2">
        <Label htmlFor="name">{t("skills.name")}</Label>
        <Input id="name" {...form.register("name")} />
        {form.formState.errors.name ? (
          <p className="text-destructive text-sm">{form.formState.errors.name.message}</p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label>{t("skills.category")}</Label>
        <Select
          value={categoryId ?? "none"}
          onValueChange={(value) =>
            form.setValue("category_id", value === "none" ? null : value)
          }
        >
          <SelectTrigger>
            <SelectValue placeholder={t("skills.selectCategory")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">{t("skills.noCategory")}</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {categories.length === 0 ? (
          <p className="text-muted-foreground text-xs">{t("skills.noCategoriesHint")}</p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">{t("skills.image")}</Label>
        {previewUrl ? (
          <div className="relative mb-2 h-24 w-24 overflow-hidden rounded-xl border bg-muted/30">
            <Image src={previewUrl} alt={form.watch("name") || t("skills.image")} fill className="object-cover" unoptimized />
          </div>
        ) : null}
        <Input
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] ?? null)}
        />
      </div>
      <Button type="submit" disabled={isPending}>
        {isPending ? t("common.saving") : submitLabel}
      </Button>
    </form>
  );
}
