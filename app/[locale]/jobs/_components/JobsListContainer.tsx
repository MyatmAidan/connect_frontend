"use client";

import { useMemo } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable, PageHeader } from "@/components/common";
import { getJobsApi } from "@/api/jobs";
import { toTableResponse } from "@/lib/pagination";
import type { JobPosting } from "@/interface/entities";
import { useTranslation } from "@/hooks/useTranslation";

export function JobsListContainer() {
  const { t } = useTranslation();

  const apiDataSource = useMemo(
    () => ({
      fetchFunction: async (page: number, pageSize: number, search?: string) =>
        toTableResponse(await getJobsApi({ page, per_page: pageSize, search })),
    }),
    [],
  );

  const columns = useMemo<ColumnDef<JobPosting>[]>(
    () => [
      { accessorKey: "title", header: t("jobs.title") },
      {
        id: "company",
        header: t("jobs.company"),
        cell: ({ row }) => row.original.company_profile?.company_name ?? "—",
      },
      { accessorKey: "status", header: t("jobs.status") },
      { accessorKey: "employment_type", header: t("jobs.employmentType") },
      { accessorKey: "experience_level", header: t("jobs.experienceLevel") },
      {
        id: "category",
        header: t("jobs.category"),
        cell: ({ row }) => row.original.category?.name_en ?? "—",
      },
      { accessorKey: "location", header: t("jobs.location") },
    ],
    [t],
  );

  return (
    <div>
      <PageHeader title={t("menu.jobs")} />
      <DataTable columns={columns} apiDataSource={apiDataSource} searchPlaceholder={t("jobs.searchPlaceholder")} />
    </div>
  );
}
