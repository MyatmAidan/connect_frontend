"use client";

import { useCallback, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import type { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";
import { DataTable, PageHeader } from "@/components/common";
import { toTableResponse } from "@/lib/pagination";
import type { JobPosting } from "@/interface/entities";
import {
  closeCompanyJobApi,
  deleteCompanyJobApi,
  getCompanyJobsApi,
  publishCompanyJobApi,
} from "@/api/company-jobs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";

const LEVEL_VARIANTS: Record<string, string> = {
  junior: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  mid: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  senior: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  lead: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
};

export function CompanyJobsList() {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const apiDataSource = useMemo(
    () => ({
      fetchFunction: async (page: number, pageSize: number, search?: string) =>
        toTableResponse(await getCompanyJobsApi({ page, per_page: pageSize, search })),
    }),
    [],
  );

  const handlePublish = useCallback(async (job: JobPosting) => {
    try {
      await publishCompanyJobApi(job.id);
      toast.success(t("company.jobs.published"));
      setRefreshTrigger((n) => n + 1);
    } catch {
      toast.error(t("company.jobs.actionFailed"));
    }
  }, [t]);

  const handleClose = useCallback(async (job: JobPosting) => {
    try {
      await closeCompanyJobApi(job.id);
      toast.success(t("company.jobs.closed"));
      setRefreshTrigger((n) => n + 1);
    } catch {
      toast.error(t("company.jobs.actionFailed"));
    }
  }, [t]);

  const handleDelete = useCallback(async (job: JobPosting) => {
    try {
      await deleteCompanyJobApi(job.id);
      toast.success(t("company.jobs.deleted"));
      setRefreshTrigger((n) => n + 1);
    } catch {
      toast.error(t("company.jobs.actionFailed"));
    }
  }, [t]);

  const columns = useMemo<ColumnDef<JobPosting>[]>(
    () => [
      {
        accessorKey: "title",
        header: t("company.jobs.title"),
        cell: ({ row }) => (
          <div>
            <p className="font-semibold">{row.original.title}</p>
            {row.original.location ? (
              <p className="text-xs text-muted-foreground">{row.original.location}</p>
            ) : null}
          </div>
        ),
      },
      {
        id: "category",
        header: t("company.jobs.category"),
        cell: ({ row }) =>
          row.original.category ? (
            <Badge variant="outline" className="border-violet-300 text-violet-700 dark:border-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-900/20">
              {row.original.category.name_en}
            </Badge>
          ) : (
            <span className="text-muted-foreground text-xs">—</span>
          ),
      },
      {
        id: "experience_level",
        header: t("company.jobs.experienceLevel"),
        cell: ({ row }) => {
          const lvl = row.original.experience_level;
          if (!lvl) return <span className="text-muted-foreground text-xs">—</span>;
          return (
            <Badge variant="outline" className={cn("border-0", LEVEL_VARIANTS[lvl] ?? "bg-muted text-muted-foreground")}>
              {lvl}
            </Badge>
          );
        },
      },
      {
        id: "status",
        header: t("company.jobs.status"),
        cell: ({ row }) => (
          <span className="capitalize">{row.original.status.replace(/_/g, " ")}</span>
        ),
      },
      {
        id: "actions",
        header: t("common.table.actions"),
        cell: ({ row }) => (
          <div className="flex gap-2">
            {row.original.status === "draft" ? (
              <Button size="sm" variant="outline" onClick={() => void handlePublish(row.original)}>
                {t("company.jobs.publish")}
              </Button>
            ) : null}
            {row.original.status === "open" ? (
              <Button size="sm" variant="outline" onClick={() => void handleClose(row.original)}>
                {t("company.jobs.close")}
              </Button>
            ) : null}
            <Button size="sm" variant="destructive" onClick={() => void handleDelete(row.original)}>
              {t("common.delete")}
            </Button>
          </div>
        ),
      },
    ],
    [t, handlePublish, handleClose, handleDelete],
  );

  return (
    <div>
      <PageHeader
        title={t("company.menu.jobs")}
        createHref={`/company/${locale}/jobs/create`}
        createLabel={t("company.jobs.create")}
      />
      <DataTable columns={columns} apiDataSource={apiDataSource} refreshTrigger={refreshTrigger} />
    </div>
  );
}
