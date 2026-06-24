"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import type { ColumnDef } from "@tanstack/react-table";
import { ImageIcon } from "lucide-react";
import { toast } from "sonner";
import {
  DataTable,
  ConfirmDialog,
  PageHeader,
  RowActions,
} from "@/components/common";
import { getSkillsApi, deleteSkillApi } from "@/api/skills";
import { toTableResponse } from "@/lib/pagination";
import type { Skill } from "@/interface/entities";
import { localePath } from "@/lib/locale-path";
import { resolveMediaUrl } from "@/lib/media";
import { useTranslation } from "@/hooks/useTranslation";

export function SkillsListContainer() {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [deleteTarget, setDeleteTarget] = useState<Skill | null>(null);
  const [deleting, setDeleting] = useState(false);

  const apiDataSource = useMemo(
    () => ({
      fetchFunction: async (page: number, pageSize: number, search?: string) =>
        toTableResponse(await getSkillsApi({ page, per_page: pageSize, search })),
    }),
    [],
  );

  const columns = useMemo<ColumnDef<Skill>[]>(
    () => [
      {
        id: "image",
        header: t("skills.image"),
        cell: ({ row }) => {
          const imageUrl = resolveMediaUrl(row.original.image);
          return imageUrl ? (
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border">
              <Image src={imageUrl} alt={row.original.name} fill className="object-cover" unoptimized />
            </div>
          ) : (
            <div className="bg-muted text-muted-foreground flex h-10 w-10 items-center justify-center rounded-lg border">
              <ImageIcon className="size-4" />
            </div>
          );
        },
      },
      { accessorKey: "name", header: t("skills.name") },
      { accessorKey: "slug", header: t("skills.slug") },
      {
        id: "category",
        header: t("skills.category"),
        cell: ({ row }) => row.original.category?.name ?? t("common.notAvailable"),
      },
      {
        id: "actions",
        header: t("skills.table.actions"),
        cell: ({ row }) => (
          <RowActions
            editHref={localePath(locale, `/skills/${row.original.id}/edit`)}
            onDelete={() => setDeleteTarget(row.original)}
          />
        ),
      },
    ],
    [locale, t],
  );

  const handleDelete = useCallback(async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await deleteSkillApi(deleteTarget.id);
      toast.success(t("skills.deleted"));
      setDeleteTarget(null);
      setRefreshTrigger((n) => n + 1);
    } catch {
      toast.error(t("skills.deleteFailed"));
    } finally {
      setDeleting(false);
    }
  }, [deleteTarget, t]);

  return (
    <div>
      <PageHeader
        title={t("menu.skills")}
        createHref={localePath(locale, "/skills/create")}
        createLabel={t("skills.create")}
      />
      <DataTable
        columns={columns}
        apiDataSource={apiDataSource}
        searchPlaceholder={t("skills.searchPlaceholder")}
        refreshTrigger={refreshTrigger}
      />
      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(null)}
        title={t("skills.deleteTitle")}
        description={t("skills.deleteDescription")}
        confirmText={t("common.delete")}
        variant="destructive"
        loading={deleting}
        onConfirm={handleDelete}
      />
    </div>
  );
}
