"use client";

import { useCallback, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import type { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";
import { DataTable, ConfirmDialog, PageHeader, RowActions } from "@/components/common";
import { getConnectionsApi, deleteConnectionApi } from "@/api/connections";
import { toTableResponse } from "@/lib/pagination";
import type { Connection } from "@/interface/entities";
import { localePath } from "@/lib/locale-path";
import { formatDate } from "@/lib/date";
import { useTranslation } from "@/hooks/useTranslation";

export function ConnectionsListContainer() {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [deleteTarget, setDeleteTarget] = useState<Connection | null>(null);
  const [deleting, setDeleting] = useState(false);

  const apiDataSource = useMemo(
    () => ({
      fetchFunction: async (page: number, pageSize: number) =>
        toTableResponse(await getConnectionsApi({ page, per_page: pageSize })),
    }),
    [],
  );

  const columns = useMemo<ColumnDef<Connection>[]>(
    () => [
      {
        header: t("connections.userOne"),
        cell: ({ row }) => row.original.user_one?.name ?? row.original.user_one_id,
      },
      {
        header: t("connections.userTwo"),
        cell: ({ row }) => row.original.user_two?.name ?? row.original.user_two_id,
      },
      {
        accessorKey: "created_at",
        header: t("common.createdAt"),
        cell: ({ row }) => formatDate(row.original.created_at),
      },
      {
        id: "actions",
        header: t("connections.table.actions"),
        cell: ({ row }) => (
          <RowActions
            viewHref={localePath(locale, `/connections/${row.original.id}`)}
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
      await deleteConnectionApi(deleteTarget.id);
      toast.success(t("connections.deleted"));
      setDeleteTarget(null);
      setRefreshTrigger((n) => n + 1);
    } catch {
      toast.error(t("connections.deleteFailed"));
    } finally {
      setDeleting(false);
    }
  }, [deleteTarget, t]);

  return (
    <div>
      <PageHeader title={t("menu.connections")} />
      <DataTable columns={columns} apiDataSource={apiDataSource} refreshTrigger={refreshTrigger} enableSearch={false} />
      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(null)}
        title={t("connections.deleteTitle")}
        description={t("connections.deleteDescription")}
        confirmText={t("common.delete")}
        variant="destructive"
        loading={deleting}
        onConfirm={handleDelete}
      />
    </div>
  );
}
