"use client";

import { useCallback, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import type { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";
import {
  DataTable,
  ConfirmDialog,
  PageHeader,
  RowActions,
} from "@/components/common";
import { getCategoriesApi, deleteCategoryApi } from "@/api/categories";
import { toTableResponse } from "@/lib/pagination";
import type { Category } from "@/interface/entities";
import { localePath } from "@/lib/locale-path";
import { useTranslation } from "@/hooks/useTranslation";

export function CategoriesListContainer() {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [deleteTarget, setDeleteTarget] = useState<Category | null>(null);
  const [deleting, setDeleting] = useState(false);

  const apiDataSource = useMemo(
    () => ({
      fetchFunction: async (page: number, pageSize: number, search?: string) =>
        toTableResponse(await getCategoriesApi({ page, per_page: pageSize, search })),
    }),
    [],
  );

  const columns = useMemo<ColumnDef<Category>[]>(
    () => [
      { accessorKey: "name", header: t("categories.name") },
      { accessorKey: "slug", header: t("categories.slug") },
      {
        id: "actions",
        header: t("categories.table.actions"),
        cell: ({ row }) => (
          <RowActions
            editHref={localePath(locale, `/categories/${row.original.id}/edit`)}
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
      await deleteCategoryApi(deleteTarget.id);
      toast.success(t("categories.deleted"));
      setDeleteTarget(null);
      setRefreshTrigger((n) => n + 1);
    } catch {
      toast.error(t("categories.deleteFailed"));
    } finally {
      setDeleting(false);
    }
  }, [deleteTarget, t]);

  return (
    <div>
      <PageHeader
        title={t("menu.categories")}
        createHref={localePath(locale, "/categories/create")}
        createLabel={t("categories.create")}
      />
      <DataTable
        columns={columns}
        apiDataSource={apiDataSource}
        searchPlaceholder={t("categories.searchPlaceholder")}
        refreshTrigger={refreshTrigger}
      />
      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(null)}
        title={t("categories.deleteTitle")}
        description={t("categories.deleteDescription")}
        confirmText={t("common.delete")}
        variant="destructive"
        loading={deleting}
        onConfirm={handleDelete}
      />
    </div>
  );
}
