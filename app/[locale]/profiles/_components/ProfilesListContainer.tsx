"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import type { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";
import { DataTable, ConfirmDialog, PageHeader, RowActions } from "@/components/common";
import { getDeveloperProfilesApi, deleteDeveloperProfileApi } from "@/api/developer-profiles";
import { toTableResponse } from "@/lib/pagination";
import type { DeveloperProfile } from "@/interface/entities";
import { localePath } from "@/lib/locale-path";
import { useTranslation } from "@/hooks/useTranslation";

export function ProfilesListContainer() {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [deleteTarget, setDeleteTarget] = useState<DeveloperProfile | null>(null);
  const [deleting, setDeleting] = useState(false);

  const apiDataSource = useMemo(
    () => ({
      fetchFunction: async (page: number, pageSize: number) =>
        toTableResponse(await getDeveloperProfilesApi({ page, per_page: pageSize })),
    }),
    [],
  );

  const columns = useMemo<ColumnDef<DeveloperProfile>[]>(
    () => [
      {
        accessorKey: "user.name",
        header: t("users.name"),
        cell: ({ row }) => (
          <Link
            href={localePath(locale, `/profiles/${row.original.id}`)}
            className="font-medium hover:underline"
          >
            {row.original.user?.name ?? row.original.headline ?? t("common.notAvailable")}
          </Link>
        ),
      },
      {
        id: "category",
        header: t("profiles.category"),
        cell: ({ row }) =>
          row.original.category?.name ?? t("common.notAvailable"),
      },
      { accessorKey: "experience_level", header: t("profiles.experience") },
      { accessorKey: "location", header: t("profiles.location") },
      {
        accessorKey: "is_public",
        header: t("profiles.public"),
        cell: ({ row }) =>
          row.original.is_public ? t("common.yes") : t("common.no"),
      },
      {
        id: "actions",
        header: t("profiles.table.actions"),
        cell: ({ row }) => (
          <RowActions
            viewHref={localePath(locale, `/profiles/${row.original.id}`)}
            editHref={localePath(locale, `/profiles/${row.original.id}/edit`)}
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
      await deleteDeveloperProfileApi(deleteTarget.id);
      toast.success(t("profiles.deleted"));
      setDeleteTarget(null);
      setRefreshTrigger((n) => n + 1);
    } catch {
      toast.error(t("profiles.deleteFailed"));
    } finally {
      setDeleting(false);
    }
  }, [deleteTarget, t]);

  return (
    <div>
      <PageHeader title={t("menu.profiles")} />
      <DataTable columns={columns} apiDataSource={apiDataSource} refreshTrigger={refreshTrigger} enableSearch={false} />
      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(null)}
        title={t("profiles.deleteTitle")}
        description={t("profiles.deleteDescription")}
        confirmText={t("common.delete")}
        variant="destructive"
        loading={deleting}
        onConfirm={handleDelete}
      />
    </div>
  );
}
