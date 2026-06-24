"use client";

import { useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable, FilterSelect, PageHeader, StatusBadge } from "@/components/common";
import { getConnectionRequestsApi } from "@/api/connection-requests";
import { toTableResponse } from "@/lib/pagination";
import type { ConnectionRequest, ConnectionRequestStatus } from "@/interface/entities";
import { formatDate } from "@/lib/date";
import { useTranslation } from "@/hooks/useTranslation";
import { statusFilterOptions } from "@/lib/i18n-options";

export function ConnectionRequestsListContainer() {
  const { t } = useTranslation();
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [statusFilter, setStatusFilter] = useState("");

  const apiDataSource = useMemo(
    () => ({
      fetchFunction: async (page: number, pageSize: number) =>
        toTableResponse(
          await getConnectionRequestsApi({
            page,
            per_page: pageSize,
            status: (statusFilter || undefined) as ConnectionRequestStatus | undefined,
          }),
        ),
    }),
    [statusFilter],
  );

  const columns = useMemo<ColumnDef<ConnectionRequest>[]>(
    () => [
      {
        header: t("connectionRequests.sender"),
        cell: ({ row }) => row.original.sender?.name ?? row.original.sender_id,
      },
      {
        header: t("connectionRequests.receiver"),
        cell: ({ row }) => row.original.receiver?.name ?? row.original.receiver_id,
      },
      { accessorKey: "message", header: t("connectionRequests.message") },
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
    ],
    [t],
  );

  return (
    <div>
      <PageHeader title={t("menu.connectionRequests")} />
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
              "accepted",
              "rejected",
              "cancelled",
            ])}
            allLabel={t("common.all")}
          />
        }
      />
    </div>
  );
}
