"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Briefcase, ClipboardList, PlusCircle, UserCircle2 } from "lucide-react";
import { AreaTrendChart } from "@/components/charts/AreaTrendChart";
import { StatusPieChart } from "@/components/charts/StatusPieChart";
import { DashboardShortcuts } from "@/components/dashboard/DashboardShortcuts";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCompanyDashboardStats } from "@/hooks/useCompanyDashboard";
import { useTranslation } from "@/hooks/useTranslation";
import { companyLocalePath } from "@/lib/company-locale-path";
import { statusChartData } from "@/lib/chart-utils";
import { useCompanyAuthStore } from "@/store/company-auth-store";

export function CompanyDashboardContent() {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();
  const profile = useCompanyAuthStore((state) => state.company);
  const { data: stats, isLoading, isError } = useCompanyDashboardStats();

  const formatStatus = (status: string) => status.replace(/_/g, " ");

  const shortcuts = [
    {
      title: t("company.dashboard.shortcutsPostJob"),
      description: t("company.dashboard.shortcutsPostJobDesc"),
      href: companyLocalePath(locale, "/jobs/create"),
      icon: PlusCircle,
    },
    {
      title: t("company.dashboard.shortcutsApplications"),
      description: t("company.dashboard.shortcutsApplicationsDesc"),
      href: companyLocalePath(locale, "/applications"),
      icon: ClipboardList,
    },
    {
      title: t("company.dashboard.shortcutsJobs"),
      description: t("company.dashboard.shortcutsJobsDesc"),
      href: companyLocalePath(locale, "/jobs"),
      icon: Briefcase,
    },
    {
      title: t("company.dashboard.shortcutsProfile"),
      description: t("company.dashboard.shortcutsProfileDesc"),
      href: companyLocalePath(locale, "/profile"),
      icon: UserCircle2,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {t("company.menu.dashboard")}
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          {profile?.company_name ?? t("company.dashboard.company")}
        </p>
      </div>

      {isError ? (
        <p className="text-destructive text-sm">{t("company.dashboard.loadError")}</p>
      ) : null}

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title={t("company.dashboard.company")}
          value={profile?.company_name ?? "—"}
          loading={!profile}
        />
        <StatCard
          title={t("company.dashboard.verified")}
          value={profile?.is_verified ? t("common.yes") : t("common.no")}
          loading={!profile}
        />
        <StatCard
          title={t("company.dashboard.status")}
          value={profile?.is_active ? t("company.dashboard.active") : t("company.dashboard.inactive")}
          loading={!profile}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard title={t("company.dashboard.totalJobs")} value={stats?.total_jobs} loading={isLoading} />
        <StatCard title={t("company.dashboard.openJobs")} value={stats?.open_jobs} loading={isLoading} />
        <StatCard title={t("company.dashboard.draftJobs")} value={stats?.draft_jobs} loading={isLoading} />
        <StatCard title={t("company.dashboard.totalApplications")} value={stats?.total_applications} loading={isLoading} />
        <StatCard title={t("company.dashboard.pendingApplications")} value={stats?.pending_applications} loading={isLoading} />
        <StatCard title={t("company.dashboard.shortlistedApplications")} value={stats?.shortlisted_applications} loading={isLoading} />
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">{t("company.dashboard.applicationsTrend")}</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-muted-foreground flex h-[240px] items-center justify-center text-sm">
                {t("common.loading")}
              </div>
            ) : (
              <AreaTrendChart
                data={stats?.applications_7d ?? []}
                emptyLabel={t("company.dashboard.noChartData")}
              />
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">{t("company.dashboard.jobsByStatus")}</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-muted-foreground flex h-[240px] items-center justify-center text-sm">
                {t("common.loading")}
              </div>
            ) : (
              <StatusPieChart
                data={statusChartData(stats?.jobs_by_status ?? [], formatStatus)}
                emptyLabel={t("company.dashboard.noChartData")}
              />
            )}
          </CardContent>
        </Card>

        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">{t("company.dashboard.applicationsByStatus")}</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-muted-foreground flex h-[240px] items-center justify-center text-sm">
                {t("common.loading")}
              </div>
            ) : (
              <StatusPieChart
                data={statusChartData(stats?.applications_by_status ?? [], formatStatus)}
                emptyLabel={t("company.dashboard.noChartData")}
              />
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">{t("company.dashboard.recentApplications")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {(stats?.recent_applications ?? []).length === 0 ? (
            <p className="text-muted-foreground text-sm">{t("company.dashboard.noChartData")}</p>
          ) : (
            stats?.recent_applications.map((application) => (
              <Link
                key={application.id}
                href={companyLocalePath(locale, `/applications/${application.id}`)}
                className="hover:bg-muted/60 flex items-center justify-between rounded-lg border px-4 py-3 transition-colors"
              >
                <div>
                  <p className="font-medium">{application.applicant_name ?? "—"}</p>
                  <p className="text-muted-foreground text-sm">{application.job_title ?? "—"}</p>
                </div>
                <span className="text-muted-foreground text-sm capitalize">
                  {formatStatus(application.status)}
                </span>
              </Link>
            ))
          )}
        </CardContent>
      </Card>

      <DashboardShortcuts title={t("company.dashboard.shortcuts")} items={shortcuts} />
    </div>
  );
}
