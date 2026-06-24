"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Pencil } from "lucide-react";
import { ButtonLink } from "@/components/common/ButtonLink";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DetailCard, DetailDate, DetailField } from "@/components/common";
import { getDeveloperProfileByIdApi } from "@/api/developer-profiles";
import { localePath } from "@/lib/locale-path";
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

export function ProfileDetailClient({ id }: { id: string }) {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();

  const { data: profile, isLoading } = useQuery({
    queryKey: ["profiles", id],
    queryFn: () => getDeveloperProfileByIdApi(id),
  });

  if (isLoading) return <PageLoading variant="detail" />;
  if (!profile) return <p>{t("profiles.notFound")}</p>;

  const photoUrl = resolveMediaUrl(profile.profile_photo);
  const displayName = profile.user?.name ?? profile.headline ?? t("menu.profiles");

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="flex flex-wrap gap-3">
        <ButtonLink href={localePath(locale, "/profiles")} variant="outline" size="sm">
          <ArrowLeft className="size-4" />
          {t("common.back")}
        </ButtonLink>
        <ButtonLink href={localePath(locale, `/profiles/${id}/edit`)} size="sm">
          <Pencil className="size-4" />
          {t("common.edit")}
        </ButtonLink>
      </div>

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
          <div className="text-center">
            <p className="font-medium">{displayName}</p>
            {profile.headline ? (
              <p className="text-muted-foreground text-sm">{profile.headline}</p>
            ) : null}
          </div>
          <Badge variant={profile.is_public ? "default" : "secondary"}>
            {profile.is_public ? t("profiles.public") : t("profiles.private")}
          </Badge>
        </div>

        <DetailCard title={t("profiles.detailTitle")}>
          {profile.user ? (
            <DetailField
              label={t("profiles.user")}
              value={
                <Link
                  href={localePath(locale, `/users/${profile.user_id}`)}
                  className="text-primary font-medium hover:underline"
                >
                  {profile.user.name} ({profile.user.email})
                </Link>
              }
            />
          ) : null}
          <DetailField
            label={t("profiles.category")}
            value={profile.category?.name ?? t("common.notAvailable")}
          />
          <DetailField label={t("profiles.experience")} value={profile.experience_level} />
          <DetailField label={t("profiles.location")} value={profile.location} />
          <DetailField
            label={t("common.createdAt")}
            value={<DetailDate value={profile.created_at} />}
          />
          <DetailField label={t("profiles.github")} value={profile.github_url} />
          <DetailField label={t("profiles.linkedin")} value={profile.linkedin_url} />
          <DetailField label={t("profiles.portfolio")} value={profile.portfolio_url} />
          <DetailField
            label={t("profiles.bio")}
            value={
              <p className="whitespace-pre-wrap">
                {profile.bio ?? t("common.notAvailable")}
              </p>
            }
          />
          <DetailField
            label={t("profiles.skills")}
            value={
              profile.skills?.length ? (
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill) => (
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
      </div>
    </div>
  );
}
