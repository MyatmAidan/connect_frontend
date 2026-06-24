"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable, PageHeader, RowActions } from "@/components/common";
import { getAdminLogsApi } from "@/api/logs";
import { toTableResponse } from "@/lib/pagination";
import type { AdminLog } from "@/interface/entities";
import { localePath } from "@/lib/locale-path";
import { formatDate } from "@/lib/date";
import { useTranslation } from "@/hooks/useTranslation";

export function LogsListContainer() {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();

  const apiDataSource = useMemo(
    () => ({
      fetchFunction: async (page: number, pageSize: number) =>
        toTableResponse(await getAdminLogsApi({ page, per_page: pageSize })),
    }),
    [],
  );

  const columns = useMemo<ColumnDef<AdminLog>[]>(
    () => [
      { accessorKey: "action", header: t("logs.action") },
      { header: t("logs.admin"), cell: ({ row }) => row.original.admin?.name },
      { accessorKey: "description", header: t("logs.description") },
      { accessorKey: "target_type", header: t("logs.targetType") },
      {
        accessorKey: "created_at",
        header: t("common.createdAt"),
        cell: ({ row }) => formatDate(row.original.created_at),
      },
      {
        id: "actions",
        header: t("logs.table.actions"),
        cell: ({ row }) => (
          <RowActions viewHref={localePath(locale, `/logs/${row.original.id}`)} />
        ),
      },
    ],
    [locale, t],
  );

  return (
    <div>
      <PageHeader title={t("menu.logs")} />
      <DataTable columns={columns} apiDataSource={apiDataSource} enableSearch={false} />
    </div>
  );
}
