"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DetailCard, DetailDate, DetailField } from "@/components/common";
import { getUserByIdApi, updateUserApi } from "@/api/users";
import { useAuthStore } from "@/store/auth-store";
import { handleApiError } from "@/lib/handle-api-error";
import { resolveMediaUrl } from "@/lib/media";
import { roleLabel } from "@/lib/i18n-options";
import {
  accountProfileSchema,
  type AccountProfileFormValues,
} from "@/schemas/accountProfileSchema";
import { useTranslation } from "@/hooks/useTranslation";
import { PageLoading } from "@/components/common/PageLoading";

function userInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function AccountProfileClient() {
  const { t } = useTranslation();
  const authUser = useAuthStore((s) => s.user);
  const setUser = useAuthStore((s) => s.setUser);

  const { data: user, isLoading } = useQuery({
    queryKey: ["account-profile", authUser?.id],
    queryFn: () => getUserByIdApi(authUser!.id),
    enabled: !!authUser?.id,
  });

  const form = useForm<AccountProfileFormValues>({
    resolver: zodResolver(accountProfileSchema),
    values: user
      ? {
          name: user.name,
          email: user.email,
        }
      : undefined,
  });

  const mutation = useMutation({
    mutationFn: (values: AccountProfileFormValues) =>
      updateUserApi(user!.id, values),
    onSuccess: (updated) => {
      setUser({
        id: updated.id,
        name: updated.name,
        email: updated.email,
        avatar: updated.avatar,
        role: updated.role,
        status: updated.status,
      });
      toast.success(t("account.updated"));
    },
    onError: (err) => handleApiError(err, form, t("account.updateFailed")),
  });

  if (!authUser) return null;
  if (isLoading) return <PageLoading variant="detail" />;
  if (!user) return <p>{t("account.notFound")}</p>;

  const photoUrl = resolveMediaUrl(
    user.avatar ?? user.developer_profile?.profile_photo,
  );

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{t("account.title")}</h1>
        <p className="text-muted-foreground text-sm">{t("account.subtitle")}</p>
      </div>

      <form
        onSubmit={form.handleSubmit((values) => mutation.mutate(values))}
        className="rounded-lg border p-6"
      >
        <div className="grid gap-6 md:grid-cols-[220px_1fr]">
          <div className="flex flex-col items-center gap-3 rounded-xl border bg-muted/30 p-6">
            <Avatar className="size-36">
              {photoUrl ? (
                <AvatarImage src={photoUrl} alt={user.name} />
              ) : null}
              <AvatarFallback className="text-2xl font-semibold">
                {userInitials(user.name)}
              </AvatarFallback>
            </Avatar>
            <div className="text-center">
              <p className="font-medium">{user.name}</p>
              <p className="text-muted-foreground text-sm">{user.email}</p>
            </div>
            <Badge variant="secondary">{roleLabel(t, user.role)}</Badge>
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
              {form.formState.errors.email && (
                <p className="text-destructive text-sm">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? t("common.saving") : t("common.save")}
            </Button>
          </div>
        </div>
      </form>

      <DetailCard title={t("account.accountInfo")}>
        <DetailField label={t("users.role")} value={roleLabel(t, user.role)} />
        <DetailField
          label={t("common.status")}
          value={t(`status.${user.status}`, { defaultValue: user.status })}
        />
        <DetailField
          label={t("common.joined")}
          value={<DetailDate value={user.created_at} />}
        />
        {user.telegram_username ? (
          <DetailField
            label={t("account.telegram")}
            value={`@${user.telegram_username}`}
          />
        ) : null}
      </DetailCard>
    </div>
  );
}
