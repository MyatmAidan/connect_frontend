"use client";

import { useParams, useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/common/ButtonLink";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SkillPicker } from "@/components/common/SkillPicker";
import {
  getDeveloperProfileByIdApi,
  updateDeveloperProfileApi,
} from "@/api/developer-profiles";
import { getSkillsApi } from "@/api/skills";
import { getCategoriesApi } from "@/api/categories";
import {
  updateDeveloperProfileSchema,
  type UpdateDeveloperProfileFormValues,
} from "@/schemas/developerProfileSchema";
import { localePath } from "@/lib/locale-path";
import { handleApiError } from "@/lib/handle-api-error";
import { resolveMediaUrl } from "@/lib/media";
import { useTranslation } from "@/hooks/useTranslation";
import { PageLoading } from "@/components/common/PageLoading";

function profileInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function ProfileEditForm({ id }: { id: string }) {
  const { locale } = useParams<{ locale: string }>();
  const router = useRouter();
  const { t } = useTranslation();

  const { data: profile, isLoading } = useQuery({
    queryKey: ["profiles", id],
    queryFn: () => getDeveloperProfileByIdApi(id),
  });

  const { data: skillsData, isLoading: skillsLoading } = useQuery({
    queryKey: ["skills", "all"],
    queryFn: async () => {
      const res = await getSkillsApi({ per_page: 100 });
      return res.data;
    },
  });

  const { data: categoriesData } = useQuery({
    queryKey: ["categories", "all"],
    queryFn: () => getCategoriesApi({ per_page: 100 }),
  });

  const form = useForm<UpdateDeveloperProfileFormValues>({
    resolver: zodResolver(updateDeveloperProfileSchema),
    values: profile
      ? {
          profile_photo: profile.profile_photo ?? "",
          headline: profile.headline,
          bio: profile.bio,
          category_id: profile.category_id,
          experience_level: profile.experience_level,
          location: profile.location,
          github_url: profile.github_url ?? "",
          linkedin_url: profile.linkedin_url ?? "",
          portfolio_url: profile.portfolio_url ?? "",
          is_public: profile.is_public,
          skill_ids: profile.skills?.map((s) => s.id) ?? [],
        }
      : undefined,
  });

  const skillIds = useWatch({ control: form.control, name: "skill_ids" }) ?? [];
  const categoryId = useWatch({ control: form.control, name: "category_id" });
  const isPublic = useWatch({ control: form.control, name: "is_public" });
  const profilePhoto = useWatch({ control: form.control, name: "profile_photo" });

  const mutation = useMutation({
    mutationFn: (values: UpdateDeveloperProfileFormValues) =>
      updateDeveloperProfileApi(id, {
        ...values,
        profile_photo: values.profile_photo || null,
        category_id: values.category_id || null,
        github_url: values.github_url || null,
        linkedin_url: values.linkedin_url || null,
        portfolio_url: values.portfolio_url || null,
      }),
    onSuccess: () => {
      toast.success(t("profiles.updated"));
      router.push(localePath(locale, `/profiles/${id}`));
    },
    onError: (err) => handleApiError(err, form, t("profiles.updateFailed")),
  });

  if (isLoading) return <PageLoading variant="detail" />;
  if (!profile) return <p>{t("profiles.notFound")}</p>;

  const displayName = profile.user?.name ?? profile.headline ?? t("menu.profiles");
  const photoUrl = resolveMediaUrl(profilePhoto || profile.profile_photo);

  const categories = categoriesData?.data ?? [];

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <ButtonLink href={localePath(locale, `/profiles/${id}`)} variant="outline" size="sm">
        <ArrowLeft className="size-4" />
        {t("common.back")}
      </ButtonLink>

      <form
        onSubmit={form.handleSubmit((v) => mutation.mutate(v))}
        className="rounded-lg border p-6"
      >
        <h1 className="mb-6 text-xl font-bold">{t("profiles.editTitle")}</h1>

        <div className="grid gap-6 md:grid-cols-[220px_1fr]">
          <div className="flex flex-col items-center gap-3 rounded-xl border bg-muted/30 p-6">
            <Avatar className="size-36">
              {photoUrl ? (
                <AvatarImage src={photoUrl} alt={displayName} />
              ) : null}
              <AvatarFallback className="text-2xl font-semibold">
                {profileInitials(displayName)}
              </AvatarFallback>
            </Avatar>
            <div className="w-full space-y-2">
              <Label htmlFor="profile_photo">{t("profiles.photoUrl")}</Label>
              <Input
                id="profile_photo"
                placeholder="/storage/..."
                {...form.register("profile_photo")}
              />
            </div>
          </div>

          <div className="space-y-4">
            {profile.user ? (
              <div className="space-y-1 rounded-xl border p-3">
                <p className="text-muted-foreground text-xs">{t("profiles.user")}</p>
                <p className="font-medium">{profile.user.name}</p>
                <p className="text-muted-foreground text-sm">{profile.user.email}</p>
              </div>
            ) : null}

            {(["headline", "experience_level", "location"] as const).map(
              (field) => (
                <div key={field} className="space-y-2">
                  <Label htmlFor={field}>{t(`profiles.${field}`)}</Label>
                  <Input id={field} {...form.register(field)} />
                </div>
              ),
            )}

            <div className="space-y-2">
              <Label>{t("profiles.category")}</Label>
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
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">{t("profiles.bio")}</Label>
              <Textarea id="bio" rows={4} {...form.register("bio")} />
            </div>

            {(
              [
                ["github_url", "profiles.github"],
                ["linkedin_url", "profiles.linkedin"],
                ["portfolio_url", "profiles.portfolio"],
              ] as const
            ).map(([field, labelKey]) => (
              <div key={field} className="space-y-2">
                <Label htmlFor={field}>{t(labelKey)}</Label>
                <Input id={field} {...form.register(field)} />
              </div>
            ))}

            <div className="flex items-center justify-between gap-4 rounded-xl border p-4">
              <div className="space-y-1">
                <Label htmlFor="profile-public-switch">{t("profiles.public")}</Label>
                <p className="text-muted-foreground text-xs">
                  {isPublic ? t("profiles.publicEnabled") : t("profiles.publicDisabled")}
                </p>
              </div>
              <Switch
                id="profile-public-switch"
                checked={!!isPublic}
                onCheckedChange={(checked) => form.setValue("is_public", checked)}
              />
            </div>

            <div className="space-y-2">
              <Label>{t("profiles.skills")}</Label>
              <SkillPicker
                skills={skillsData ?? []}
                selectedIds={skillIds}
                onChange={(ids) => form.setValue("skill_ids", ids)}
                loading={skillsLoading}
              />
            </div>

            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? t("common.saving") : t("common.save")}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
