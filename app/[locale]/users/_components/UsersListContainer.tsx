"use client";

import { useCallback, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  DataTable,
  ConfirmDialog,
  FilterSelect,
  PageHeader,
} from "@/components/common";
import { getUsersApi, deleteUserApi } from "@/api/users";
import { toTableResponse } from "@/lib/pagination";
import type { User, UserRole, UserStatus } from "@/interface/entities";
import { buildUsersColumns } from "./users-list-columns";
import { useTranslation } from "@/hooks/useTranslation";
import { roleFilterOptions, statusFilterOptions } from "@/lib/i18n-options";

export function UsersListContainer() {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [statusFilter, setStatusFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<User | null>(null);
  const [deleting, setDeleting] = useState(false);

  const apiDataSource = useMemo(
    () => ({
      fetchFunction: async (page: number, pageSize: number, search?: string) => {
        const res = await getUsersApi({
          page,
          per_page: pageSize,
          search,
          status: (statusFilter || undefined) as UserStatus | undefined,
          role: (roleFilter || undefined) as UserRole | undefined,
        });
        return toTableResponse(res);
      },
    }),
    [statusFilter, roleFilter],
  );

  const handleDelete = useCallback(async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await deleteUserApi(deleteTarget.id);
      toast.success(t("users.deleted"));
      setDeleteTarget(null);
      setRefreshTrigger((n) => n + 1);
      void queryClient.invalidateQueries({ queryKey: ["users"] });
    } catch {
      toast.error(t("users.deleteFailed"));
    } finally {
      setDeleting(false);
    }
  }, [deleteTarget, queryClient, t]);

  const columns = useMemo(
    () => buildUsersColumns(locale, setDeleteTarget, t),
    [locale, t],
  );

  return (
    <div>
      <PageHeader title={t("menu.users")} />
      <DataTable
        columns={columns}
        apiDataSource={apiDataSource}
        searchPlaceholder={t("users.searchPlaceholder")}
        refreshTrigger={refreshTrigger}
        extraFilters={
          <div className="flex gap-2">
            <FilterSelect
              value={statusFilter}
              onChange={(v) => {
                setStatusFilter(v);
                setRefreshTrigger((n) => n + 1);
              }}
              placeholder={t("users.filterStatus")}
              options={statusFilterOptions(t, ["active", "banned", "suspended"])}
              allLabel={t("common.all")}
            />
            <FilterSelect
              value={roleFilter}
              onChange={(v) => {
                setRoleFilter(v);
                setRefreshTrigger((n) => n + 1);
              }}
              placeholder={t("users.filterRole")}
              options={roleFilterOptions(t, ["user", "admin", "super_admin"])}
              allLabel={t("common.all")}
            />
          </div>
        }
      />
      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
        title={t("users.deleteTitle")}
        description={t("users.deleteDescription")}
        confirmText={t("common.delete")}
        variant="destructive"
        loading={deleting}
        onConfirm={handleDelete}
      />
    </div>
  );
}
