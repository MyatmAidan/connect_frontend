"use client";

import { useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import type { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";
import { DataTable, FilterSelect, PageHeader, StatusBadge } from "@/components/common";
import { UserRecipientPicker } from "@/components/common/UserRecipientPicker";
import { getNotificationsApi, broadcastNotificationApi } from "@/api/notifications";
import { toTableResponse } from "@/lib/pagination";
import type { NotificationLog } from "@/interface/entities";
import { broadcastSchema, type BroadcastFormValues } from "@/schemas/broadcastSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatDate } from "@/lib/date";
import { handleApiError } from "@/lib/handle-api-error";
import { useTranslation } from "@/hooks/useTranslation";
import { channelFilterOptions } from "@/lib/i18n-options";

export function NotificationsPageClient() {
  const { t } = useTranslation();
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [channelFilter, setChannelFilter] = useState("");

  const apiDataSource = useMemo(
    () => ({
      fetchFunction: async (page: number, pageSize: number) =>
        toTableResponse(
          await getNotificationsApi({
            page,
            per_page: pageSize,
            channel: channelFilter || undefined,
          }),
        ),
    }),
    [channelFilter],
  );

  const columns = useMemo<ColumnDef<NotificationLog>[]>(
    () => [
      { accessorKey: "title", header: t("notifications.title") },
      { accessorKey: "channel", header: t("notifications.channel") },
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
    ],
    [t],
  );

  const form = useForm<BroadcastFormValues>({
    resolver: zodResolver(broadcastSchema),
    defaultValues: {
      title: "",
      body: "",
      channel: "in_app",
      audience: "all",
      user_ids: [],
    },
  });

  const broadcastMutation = useMutation({
    mutationFn: broadcastNotificationApi,
    onSuccess: (data) => {
      const summary =
        data.sent !== undefined
          ? t("notifications.broadcastTelegramResult", {
              sent: data.sent,
              failed: data.failed ?? 0,
              recipients: data.recipients,
            })
          : t("notifications.broadcastRecipients", { count: data.recipients });

      toast.success(`${t("notifications.broadcastSuccess")} (${summary})`);
      form.reset({
        title: "",
        body: "",
        channel: "in_app",
        audience: "all",
        user_ids: [],
      });
      setRefreshTrigger((n) => n + 1);
    },
    onError: (err) => handleApiError(err, form, t("notifications.broadcastFailed")),
  });

  const channel = useWatch({ control: form.control, name: "channel" });
  const audience = useWatch({ control: form.control, name: "audience" });
  const selectedUserIds = useWatch({ control: form.control, name: "user_ids" }) ?? [];

  return (
    <div className="space-y-8">
      <PageHeader title={t("menu.notifications")} />

      <form
        onSubmit={form.handleSubmit((values) => {
          const payload = {
            title: values.title,
            body: values.body,
            channel: values.channel,
            ...(values.audience === "selected" ? { user_ids: values.user_ids } : {}),
          };
          broadcastMutation.mutate(payload);
        })}
        className="space-y-4 rounded-lg border p-6"
      >
        <h2 className="text-lg font-semibold">{t("notifications.broadcastTitle")}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>{t("notifications.title")}</Label>
            <Input {...form.register("title")} />
          </div>
          <div className="space-y-2">
            <Label>{t("notifications.channel")}</Label>
            <Select
              value={channel}
              onValueChange={(v) =>
                form.setValue("channel", v as BroadcastFormValues["channel"])
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {channelFilterOptions(t, ["in_app", "telegram", "push"]).map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>{t("notifications.audience")}</Label>
          <div className="grid gap-2 sm:grid-cols-2">
            {(["all", "selected"] as const).map((option) => (
              <label
                key={option}
                className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-3 text-sm ${
                  audience === option ? "border-primary bg-primary/5" : ""
                }`}
              >
                <input
                  type="radio"
                  value={option}
                  checked={audience === option}
                  onChange={() => {
                    form.setValue("audience", option);
                    if (option === "all") {
                      form.setValue("user_ids", []);
                    }
                  }}
                />
                <span>
                  {option === "all"
                    ? t("notifications.audienceAll")
                    : t("notifications.audienceSelected")}
                </span>
              </label>
            ))}
          </div>
        </div>

        {audience === "selected" ? (
          <UserRecipientPicker
            label={t("notifications.selectUsers")}
            hint={
              channel === "telegram"
                ? t("notifications.telegramSelectedHint")
                : t("notifications.selectedHint")
            }
            value={selectedUserIds}
            onChange={(userIds) => form.setValue("user_ids", userIds, { shouldValidate: true })}
          />
        ) : null}
        {form.formState.errors.user_ids ? (
          <p className="text-destructive text-sm">{form.formState.errors.user_ids.message}</p>
        ) : null}

        <div className="space-y-2">
          <Label>{t("notifications.body")}</Label>
          <Textarea rows={3} {...form.register("body")} />
        </div>
        <Button type="submit" disabled={broadcastMutation.isPending}>
          {t("notifications.broadcast")}
        </Button>
      </form>

      <DataTable
        columns={columns}
        apiDataSource={apiDataSource}
        refreshTrigger={refreshTrigger}
        enableSearch={false}
        extraFilters={
          <FilterSelect
            value={channelFilter}
            onChange={(v) => {
              setChannelFilter(v);
              setRefreshTrigger((n) => n + 1);
            }}
            placeholder={t("notifications.filterChannel")}
            options={channelFilterOptions(t, ["in_app", "telegram", "push"])}
            allLabel={t("common.all")}
          />
        }
      />
    </div>
  );
}
