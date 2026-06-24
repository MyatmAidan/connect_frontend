"use client";

import { useMemo } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable, PageHeader } from "@/components/common";
import { getCompaniesApi } from "@/api/companies";
import { toTableResponse } from "@/lib/pagination";
import type { CompanyProfile } from "@/interface/entities";
import { useTranslation } from "@/hooks/useTranslation";

export function CompaniesListContainer() {
  const { t } = useTranslation();

  const apiDataSource = useMemo(
    () => ({
      fetchFunction: async (page: number, pageSize: number, search?: string) =>
        toTableResponse(await getCompaniesApi({ page, per_page: pageSize, search })),
    }),
    [],
  );

  const columns = useMemo<ColumnDef<CompanyProfile>[]>(
    () => [
      { accessorKey: "company_name", header: t("companies.name") },
      { accessorKey: "location", header: t("companies.location") },
      { accessorKey: "industry", header: t("companies.industry") },
      {
        accessorKey: "is_verified",
        header: t("companies.verified"),
        cell: ({ row }) => (row.original.is_verified ? t("common.yes") : t("common.no")),
      },
      {
        accessorKey: "is_active",
        header: t("companies.active"),
        cell: ({ row }) => (row.original.is_active ? t("common.yes") : t("common.no")),
      },
    ],
    [t],
  );

  return (
    <div>
      <PageHeader title={t("menu.companies")} />
      <DataTable columns={columns} apiDataSource={apiDataSource} searchPlaceholder={t("companies.searchPlaceholder")} />
    </div>
  );
}
