"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable, FilterSelect, PageHeader, RowActions, StatusBadge } from "@/components/common";
import { getEventRequestsApi } from "@/api/event-requests";
import { toTableResponse } from "@/lib/pagination";
import type { EventRequest, EventRequestStatus } from "@/interface/entities";
import { localePath } from "@/lib/locale-path";
import { formatDate } from "@/lib/date";
import { useTranslation } from "@/hooks/useTranslation";
import { statusFilterOptions } from "@/lib/i18n-options";

export function EventRequestsListContainer() {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [statusFilter, setStatusFilter] = useState("");

  const apiDataSource = useMemo(
    () => ({
      fetchFunction: async (page: number, pageSize: number) =>
        toTableResponse(
          await getEventRequestsApi({
            page,
            per_page: pageSize,
            status: (statusFilter || undefined) as EventRequestStatus | undefined,
          }),
        ),
    }),
    [statusFilter],
  );

  const columns = useMemo<ColumnDef<EventRequest>[]>(
    () => [
      { accessorKey: "title", header: t("events.eventTitle") },
      { accessorKey: "section", header: t("events.section") },
      {
        accessorKey: "event_date",
        header: t("events.eventDate"),
        cell: ({ row }) => (row.original.event_date ? formatDate(row.original.event_date, "PP") : "—"),
      },
      { header: t("eventRequests.requester"), cell: ({ row }) => row.original.user?.name },
      {
        accessorKey: "status",
        header: t("common.status"),
        cell: ({ row }) => <StatusBadge status={row.original.status} />,
      },
      {
        accessorKey: "created_at",
        header: t("common.createdAt"),
        cell: ({ row }) => formatDate(row.original.created_at, "PP"),
      },
      {
        id: "actions",
        header: t("events.table.actions"),
        cell: ({ row }) => (
          <RowActions viewHref={localePath(locale, `/event-requests/${row.original.id}`)} />
        ),
      },
    ],
    [locale, t],
  );

  return (
    <div>
      <PageHeader title={t("menu.eventRequests")} />
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
            options={statusFilterOptions(t, ["pending", "approved", "rejected"])}
            allLabel={t("common.all")}
          />
        }
      />
    </div>
  );
}
