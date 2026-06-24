"use client";

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import type { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { DataTable, PageHeader, StatusBadge } from "@/components/common";
import { getTelegramStatsApi, getTelegramLogsApi } from "@/api/telegram";
import { toTableResponse } from "@/lib/pagination";
import type { NotificationLog } from "@/interface/entities";
import { formatDate } from "@/lib/date";
import { useTranslation } from "@/hooks/useTranslation";

export function TelegramPageClient() {
  const { t } = useTranslation();

  const { data: stats, isLoading } = useQuery({
    queryKey: ["telegram", "stats"],
    queryFn: getTelegramStatsApi,
  });

  const apiDataSource = useMemo(
    () => ({
      fetchFunction: async (page: number, pageSize: number) =>
        toTableResponse(await getTelegramLogsApi({ page, per_page: pageSize })),
    }),
    [],
  );

  const columns = useMemo<ColumnDef<NotificationLog>[]>(
    () => [
      { accessorKey: "title", header: t("notifications.title") },
      { accessorKey: "type", header: t("notifications.type") },
      {
        accessorKey: "status",
        header: t("common.status"),
        cell: ({ row }) => <StatusBadge status={row.original.status} />,
      },
      {
        accessorKey: "sent_at",
        header: t("notifications.sentAt"),
        cell: ({ row }) => formatDate(row.original.sent_at),
      },
      {
        accessorKey: "error_message",
        header: t("telegram.error"),
        cell: ({ row }) => row.original.error_message ?? t("common.notAvailable"),
      },
    ],
    [t],
  );

  return (
    <div className="space-y-6">
      <PageHeader title={t("menu.telegram")} />
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: t("telegram.connected"), value: stats?.connected_users },
          { label: t("telegram.notifyEnabled"), value: stats?.notify_enabled_users },
          { label: t("telegram.failed"), value: stats?.failed_notifications },
        ].map((item) => (
          <Card key={item.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {item.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-16" />
              ) : (
                <p className="text-2xl font-bold">{item.value ?? 0}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <DataTable columns={columns} apiDataSource={apiDataSource} enableSearch={false} />
    </div>
  );
}
