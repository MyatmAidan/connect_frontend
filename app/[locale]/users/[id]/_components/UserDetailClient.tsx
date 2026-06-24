"use client";

import { useParams } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeft, Ban, ShieldCheck, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/common/ButtonLink";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { resolveMediaUrl } from "@/lib/media";
import {
  DetailCard,
  DetailDate,
  DetailField,
  StatusBadge,
} from "@/components/common";
import { getUserByIdApi, banUserApi, unbanUserApi } from "@/api/users";
import { localePath } from "@/lib/locale-path";
import { useTranslation } from "@/hooks/useTranslation";
import { roleLabel } from "@/lib/i18n-options";

import { PageLoading } from "@/components/common/PageLoading";

export function UserDetailClient({ id }: { id: string }) {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ["users", id],
    queryFn: () => getUserByIdApi(id),
  });

  const banMutation = useMutation({
    mutationFn: () => banUserApi(id),
    onSuccess: () => {
      toast.success(t("users.banned"));
      void queryClient.invalidateQueries({ queryKey: ["users", id] });
    },
  });

  const unbanMutation = useMutation({
    mutationFn: () => unbanUserApi(id),
    onSuccess: () => {
      toast.success(t("users.unbanned"));
      void queryClient.invalidateQueries({ queryKey: ["users", id] });
    },
  });

  if (isLoading) return <PageLoading variant="detail" />;
  if (!user) return <p>{t("users.notFound")}</p>;

  const photoUrl = resolveMediaUrl(
    user.avatar ?? user.developer_profile?.profile_photo,
  );
  const initials = user.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
  const developerProfile = user.developer_profile;
  const developerPhotoUrl = developerProfile
    ? resolveMediaUrl(developerProfile.profile_photo)
    : null;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href={localePath(locale, "/users")} variant="outline" size="sm">
          <ArrowLeft className="size-4" />
          {t("common.back")}
        </ButtonLink>
        <ButtonLink href={localePath(locale, `/users/${id}/edit`)} size="sm">
          <Pencil className="size-4" />
          {t("common.edit")}
        </ButtonLink>
        {user.status === "banned" ? (
          <Button
            variant="outline"
            size="sm"
            disabled={unbanMutation.isPending}
            onClick={() => unbanMutation.mutate()}
          >
            <ShieldCheck className="size-4" />
            {t("users.unban")}
          </Button>
        ) : (
          <Button
            variant="destructive"
            size="sm"
            disabled={banMutation.isPending}
            onClick={() => banMutation.mutate()}
          >
            <Ban className="size-4" />
            {t("users.ban")}
          </Button>
        )}
      </div>

      <DetailCard title={user.name}>
        <div className="mb-4 flex items-center gap-4">
          <Avatar className="size-14">
            {photoUrl ? <AvatarImage src={photoUrl} alt={user.name} /> : null}
            <AvatarFallback className="font-semibold">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-muted-foreground text-sm">{user.email}</p>
          </div>
        </div>
        <DetailField label={t("auth.email")} value={user.email} />
        <DetailField
          label={t("users.role")}
          value={<span className="capitalize">{roleLabel(t, user.role)}</span>}
        />
        <DetailField label={t("users.status")} value={<StatusBadge status={user.status} />} />
        <DetailField
          label={t("users.telegram")}
          value={user.telegram_username ?? t("common.notAvailable")}
        />
        <DetailField label={t("common.createdAt")} value={<DetailDate value={user.created_at} />} />
      </DetailCard>

      {developerProfile && (
        <DetailCard title={t("menu.profiles")}>
          <DetailField
            label={t("profiles.photo")}
            value={
              developerPhotoUrl ? (
                <Avatar className="size-20">
                  <AvatarImage src={developerPhotoUrl} alt={user.name} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              ) : (
                t("common.notAvailable")
              )
            }
          />
          <DetailField label={t("profiles.headline")} value={developerProfile.headline} />
          <DetailField
            label={t("profiles.category")}
            value={developerProfile.category?.name ?? t("common.notAvailable")}
          />
          <DetailField
            label={t("profiles.experience")}
            value={
              developerProfile.experience_level ? (
                <span className="capitalize">{developerProfile.experience_level}</span>
              ) : (
                t("common.notAvailable")
              )
            }
          />
          <DetailField label={t("profiles.location")} value={developerProfile.location} />
          <DetailField
            label={t("profiles.skills")}
            value={
              developerProfile.skills?.length ? (
                <div className="flex flex-wrap gap-2">
                  {developerProfile.skills.map((skill) => (
                    <Badge key={skill.id} variant="secondary">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              ) : (
                t("common.notAvailable")
              )
            }
          />
        </DetailCard>
      )}
    </div>
  );
}
