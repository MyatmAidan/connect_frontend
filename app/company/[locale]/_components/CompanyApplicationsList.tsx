"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable, PageHeader, RowActions } from "@/components/common";
import { getCompanyApplicationsApi } from "@/api/company-applications";
import { companyLocalePath } from "@/lib/company-locale-path";
import { toTableResponse } from "@/lib/pagination";
import type { JobApplication } from "@/interface/entities";
import { useTranslation } from "@/hooks/useTranslation";

export function CompanyApplicationsList() {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();

  const apiDataSource = useMemo(
    () => ({
      fetchFunction: async (page: number, pageSize: number) =>
        toTableResponse(await getCompanyApplicationsApi({ page, per_page: pageSize })),
    }),
    [],
  );

  const columns = useMemo<ColumnDef<JobApplication>[]>(
    () => [
      {
        id: "job",
        header: t("company.jobs.title"),
        cell: ({ row }) => row.original.job?.title ?? "—",
      },
      {
        id: "applicant",
        header: t("company.applications.applicant"),
        cell: ({ row }) => row.original.applicant?.name ?? "—",
      },
      { accessorKey: "status", header: t("company.applications.status") },
      {
        id: "actions",
        header: t("categories.table.actions"),
        cell: ({ row }) => (
          <RowActions
            viewHref={companyLocalePath(locale, `/applications/${row.original.id}`)}
          />
        ),
      },
    ],
    [locale, t],
  );

  return (
    <div>
      <PageHeader title={t("company.menu.applications")} />
      <DataTable columns={columns} apiDataSource={apiDataSource} />
    </div>
  );
}
