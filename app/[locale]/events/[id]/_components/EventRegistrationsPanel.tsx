"use client";

import { useMemo, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ColumnDef } from "@tanstack/react-table";
import { Check, X } from "lucide-react";
import { toast } from "sonner";
import { DataTable, FilterSelect, StatusBadge } from "@/components/common";
import { Button } from "@/components/ui/button";
import {
  acceptEventRegistrationApi,
  getEventRegistrationsApi,
  rejectEventRegistrationApi,
} from "@/api/event-registrations";
import type { EventRegistration, EventRegistrationStatus } from "@/interface/entities";
import { toTableResponse } from "@/lib/pagination";
import { formatDate } from "@/lib/date";
import { useTranslation } from "@/hooks/useTranslation";
import { statusFilterOptions } from "@/lib/i18n-options";

export function EventRegistrationsPanel({ eventId }: { eventId: string }) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [statusFilter, setStatusFilter] = useState("");

  const invalidate = () => {
    void queryClient.invalidateQueries({ queryKey: ["events", eventId] });
    setRefreshTrigger((n) => n + 1);
  };

  const acceptMutation = useMutation({
    mutationFn: (registrationId: string) => acceptEventRegistrationApi(eventId, registrationId),
    onSuccess: () => {
      toast.success(t("eventRegistrations.accepted"));
      invalidate();
    },
  });

  const rejectMutation = useMutation({
    mutationFn: (registrationId: string) => rejectEventRegistrationApi(eventId, registrationId),
    onSuccess: () => {
      toast.success(t("eventRegistrations.rejected"));
      invalidate();
    },
  });

  const apiDataSource = useMemo(
    () => ({
      fetchFunction: async (page: number, pageSize: number) =>
        toTableResponse(
          await getEventRegistrationsApi(eventId, {
            page,
            per_page: pageSize,
            status: (statusFilter || undefined) as EventRegistrationStatus | undefined,
          }),
        ),
    }),
    [eventId, statusFilter],
  );

  const columns = useMemo<ColumnDef<EventRegistration>[]>(
    () => [
      {
        header: t("eventRegistrations.name"),
        cell: ({ row }) => row.original.name,
      },
      { accessorKey: "email", header: t("eventRegistrations.email") },
      { accessorKey: "phone", header: t("eventRegistrations.phone") },
      { accessorKey: "message", header: t("eventRegistrations.message") },
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
        header: t("events.table.actions"),
        cell: ({ row }) => {
          if (row.original.status !== "pending") return null;

          return (
            <div className="flex gap-2">
              <Button
                size="sm"
                disabled={acceptMutation.isPending}
                onClick={() => acceptMutation.mutate(row.original.id)}
              >
                <Check className="size-4" />
                {t("eventRegistrations.accept")}
              </Button>
              <Button
                variant="destructive"
                size="sm"
                disabled={rejectMutation.isPending}
                onClick={() => rejectMutation.mutate(row.original.id)}
              >
                <X className="size-4" />
                {t("eventRegistrations.reject")}
              </Button>
            </div>
          );
        },
      },
    ],
    [acceptMutation, rejectMutation, t],
  );

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">{t("eventRegistrations.title")}</h2>
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
            options={statusFilterOptions(t, ["pending", "accepted", "rejected"])}
            allLabel={t("common.all")}
          />
        }
      />
    </div>
  );
}
