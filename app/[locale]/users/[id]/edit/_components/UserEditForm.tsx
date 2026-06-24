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
import { Switch } from "@/components/ui/switch";
import { RoleIconSelect } from "@/components/common/RoleIconSelect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getUserByIdApi, updateUserApi } from "@/api/users";
import { updateUserSchema, type UpdateUserFormValues } from "@/schemas/userSchema";
import { localePath } from "@/lib/locale-path";
import { handleApiError } from "@/lib/handle-api-error";
import { useTranslation } from "@/hooks/useTranslation";
import { roleFilterOptions } from "@/lib/i18n-options";
import { resolveMediaUrl } from "@/lib/media";
import type { UserRole } from "@/interface/entities";

import { PageLoading } from "@/components/common/PageLoading";

function userInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function UserEditForm({ id }: { id: string }) {
  const { locale } = useParams<{ locale: string }>();
  const router = useRouter();
  const { t } = useTranslation();

  const { data: user, isLoading } = useQuery({
    queryKey: ["users", id],
    queryFn: () => getUserByIdApi(id),
  });

  const form = useForm<UpdateUserFormValues>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "user",
      status: "active",
    },
    values: user
      ? {
          name: user.name,
          email: user.email,
          role: user.role,
          status: user.status,
          avatar: user.avatar,
        }
      : undefined,
  });

  const mutation = useMutation({
    mutationFn: (values: UpdateUserFormValues) => updateUserApi(id, values),
    onSuccess: () => {
      toast.success(t("users.updated"));
      router.push(localePath(locale, `/users/${id}`));
    },
    onError: (err) => handleApiError(err, form, t("users.updateFailed")),
  });

  const role = useWatch({ control: form.control, name: "role" });
  const status = useWatch({ control: form.control, name: "status" });
  const roleOptions = roleFilterOptions(t, ["user", "admin", "super_admin"]);

  if (isLoading) return <PageLoading variant="detail" />;
  if (!user) return <p>{t("users.notFound")}</p>;

  const profilePhotoUrl = resolveMediaUrl(
    user.developer_profile?.profile_photo ?? user.avatar,
  );
  const isActive = status === "active";

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <ButtonLink href={localePath(locale, `/users/${id}`)} variant="outline" size="sm">
        <ArrowLeft className="size-4" />
        {t("common.back")}
      </ButtonLink>

      <form
        onSubmit={form.handleSubmit((v) => mutation.mutate(v))}
        className="rounded-lg border p-6"
      >
        <h1 className="mb-6 text-xl font-bold">{t("users.editTitle")}</h1>

        <div className="grid gap-6 md:grid-cols-[220px_1fr]">
          <div className="flex flex-col items-center gap-3 rounded-xl border bg-muted/30 p-6">
            <Avatar className="size-36">
              {profilePhotoUrl ? (
                <AvatarImage src={profilePhotoUrl} alt={user.name} />
              ) : null}
              <AvatarFallback className="text-2xl font-semibold">
                {userInitials(user.name)}
              </AvatarFallback>
            </Avatar>
            <div className="text-center">
              <p className="font-medium">{user.name}</p>
              <p className="text-muted-foreground text-sm">{user.email}</p>
            </div>
            <p className="text-muted-foreground text-center text-xs">
              {t("profiles.photo")}
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t("users.name")}</Label>
              <Input id="name" {...form.register("name")} />
              {form.formState.errors.name && (
                <p className="text-destructive text-sm">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("auth.email")}</Label>
              <Input id="email" type="email" {...form.register("email")} />
            </div>

            <div className="space-y-2">
              <Label>{t("users.role")}</Label>
              <RoleIconSelect
                value={(role ?? user.role) as UserRole}
                options={roleOptions.map((opt) => ({
                  value: opt.value as UserRole,
                  label: opt.label,
                }))}
                onChange={(value) => form.setValue("role", value)}
              />
            </div>

            <div className="flex items-center justify-between gap-4 rounded-xl border p-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Label htmlFor="user-active-switch">{t("users.activeAccount")}</Label>
                  {status === "suspended" ? (
                    <Badge variant="secondary">{t("status.suspended")}</Badge>
                  ) : null}
                </div>
                <p className="text-muted-foreground text-xs">
                  {status === "suspended"
                    ? t("users.suspendedNote")
                    : isActive
                      ? t("users.accountEnabled")
                      : t("users.accountDisabled")}
                </p>
              </div>
              <Switch
                id="user-active-switch"
                checked={isActive}
                onCheckedChange={(checked) => {
                  form.setValue("status", checked ? "active" : "banned");
                }}
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
