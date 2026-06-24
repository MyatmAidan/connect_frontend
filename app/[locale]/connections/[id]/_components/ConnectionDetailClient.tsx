"use client";

import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeft, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/common/ButtonLink";
import { DetailCard, DetailDate, DetailField } from "@/components/common";
import { getConnectionByIdApi, deleteConnectionApi } from "@/api/connections";
import { localePath } from "@/lib/locale-path";
import { useTranslation } from "@/hooks/useTranslation";

import { PageLoading } from "@/components/common/PageLoading";

export function ConnectionDetailClient({ id }: { id: string }) {
  const { locale } = useParams<{ locale: string }>();
  const router = useRouter();
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["connections", id],
    queryFn: () => getConnectionByIdApi(id),
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteConnectionApi(id),
    onSuccess: () => {
      toast.success(t("connections.deleted"));
      router.push(localePath(locale, "/connections"));
    },
  });

  if (isLoading) return <PageLoading variant="detail" />;
  if (!data) return <p>{t("connections.notFound")}</p>;

  return (
    <div className="space-y-6">
      <div className="flex gap-3">
        <ButtonLink href={localePath(locale, "/connections")} variant="outline" size="sm">
          <ArrowLeft className="size-4" />
          {t("common.back")}
        </ButtonLink>
        <Button
          variant="destructive"
          size="sm"
          disabled={deleteMutation.isPending}
          onClick={() => deleteMutation.mutate()}
        >
          <Trash2 className="size-4" />
          {t("common.delete")}
        </Button>
      </div>
      <DetailCard title={t("connections.detailTitle")}>
        <DetailField label={t("connections.userOne")} value={data.user_one?.name} />
        <DetailField label={t("connections.userTwo")} value={data.user_two?.name} />
        <DetailField label={t("common.createdAt")} value={<DetailDate value={data.created_at} />} />
        <DetailField label={t("connections.conversationId")} value={data.conversation?.id} />
      </DetailCard>
    </div>
  );
}
