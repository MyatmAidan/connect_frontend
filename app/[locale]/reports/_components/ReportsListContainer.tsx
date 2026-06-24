"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable, FilterSelect, PageHeader, RowActions, StatusBadge } from "@/components/common";
import { getReportsApi } from "@/api/reports";
import { toTableResponse } from "@/lib/pagination";
import type { Report, ReportStatus } from "@/interface/entities";
import { localePath } from "@/lib/locale-path";
import { formatDate } from "@/lib/date";
import { useTranslation } from "@/hooks/useTranslation";
import { statusFilterOptions } from "@/lib/i18n-options";

export function ReportsListContainer() {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [statusFilter, setStatusFilter] = useState("");

  const apiDataSource = useMemo(
    () => ({
      fetchFunction: async (page: number, pageSize: number) =>
        toTableResponse(
          await getReportsApi({
            page,
            per_page: pageSize,
            status: (statusFilter || undefined) as ReportStatus | undefined,
          }),
        ),
    }),
    [statusFilter],
  );

  const columns = useMemo<ColumnDef<Report>[]>(
    () => [
      { accessorKey: "reason", header: t("reports.reason") },
      { header: t("reports.reporter"), cell: ({ row }) => row.original.reporter?.name },
      { header: t("reports.reportedUser"), cell: ({ row }) => row.original.reported_user?.name },
      {
        accessorKey: "status",
        header: t("common.status"),
        cell: ({ row }) => <StatusBadge status={row.original.status} />,
      },
      {
        accessorKey: "created_at",
        header: t("common.createdAt"),
        cell: ({ row }) => formatDate(row.original.created_at),
      },
      {
        id: "actions",
        header: t("reports.table.actions"),
        cell: ({ row }) => (
          <RowActions viewHref={localePath(locale, `/reports/${row.original.id}`)} />
        ),
      },
    ],
    [locale, t],
  );

  return (
    <div>
      <PageHeader title={t("menu.reports")} />
      <DataTable
        columns={columns}
        apiDataSource={apiDataSource}
        refreshTrigger={refreshTrigger}
        enableSearch={false}
        extraFilters={
          <FilterSelect
            value={statusFilter}
            onChange={(v) => {
              setStatusFilter(v);
              setRefreshTrigger((n) => n + 1);
            }}
            placeholder={t("common.filterStatus")}
            options={statusFilterOptions(t, [
              "pending",
              "reviewed",
              "resolved",
              "rejected",
            ])}
            allLabel={t("common.all")}
          />
        }
      />
    </div>
  );
}
