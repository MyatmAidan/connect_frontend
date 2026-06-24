"use client";

import { useMemo } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable, PageHeader } from "@/components/common";
import { getJobApplicationsApi } from "@/api/job-applications";
import { toTableResponse } from "@/lib/pagination";
import type { JobApplication } from "@/interface/entities";
import { useTranslation } from "@/hooks/useTranslation";

export function JobApplicationsListContainer() {
  const { t } = useTranslation();

  const apiDataSource = useMemo(
    () => ({
      fetchFunction: async (page: number, pageSize: number) =>
        toTableResponse(await getJobApplicationsApi({ page, per_page: pageSize })),
    }),
    [],
  );

  const columns = useMemo<ColumnDef<JobApplication>[]>(
    () => [
      {
        id: "job",
        header: t("jobApplications.job"),
        cell: ({ row }) => row.original.job?.title ?? "—",
      },
      {
        id: "company",
        header: t("jobApplications.company"),
        cell: ({ row }) => row.original.job?.company_profile?.company_name ?? "—",
      },
      {
        id: "applicant",
        header: t("jobApplications.applicant"),
        cell: ({ row }) => row.original.applicant?.name ?? "—",
      },
      { accessorKey: "status", header: t("jobApplications.status") },
    ],
    [t],
  );

  return (
    <div>
      <PageHeader title={t("menu.jobApplications")} />
      <DataTable columns={columns} apiDataSource={apiDataSource} />
    </div>
  );
}
