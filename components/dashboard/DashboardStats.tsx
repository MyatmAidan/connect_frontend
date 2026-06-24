"use client";

import { useParams } from "next/navigation";
import {
  Briefcase,
  Building2,
  ClipboardList,
  Flag,
  Send,
  UserCircle2,
  Users,
} from "lucide-react";
import { AreaTrendChart } from "@/components/charts/AreaTrendChart";
import { BarComparisonChart } from "@/components/charts/BarComparisonChart";
import { StatusPieChart } from "@/components/charts/StatusPieChart";
import { DashboardShortcuts } from "@/components/dashboard/DashboardShortcuts";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  useDashboardActivity,
  useDashboardCharts,
  useDashboardStats,
  useUserGrowth,
} from "@/hooks/useDashboard";
import { useTranslation } from "@/hooks/useTranslation";
import { fillUserGrowthSeries, statusChartData } from "@/lib/chart-utils";
import { useAuthStore } from "@/store/auth-store";

export function DashboardStats() {
  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation();
  const token = useAuthStore((state) => state.token);
  const prefix = `/${locale}`;

  const {
    data: stats,
    isLoading: statsLoading,
    isError: statsError,
  } = useDashboardStats();
  const {
    data: activity,
    isLoading: activityLoading,
    isError: activityError,
  } = useDashboardActivity();
  const {
    data: growth,
    isLoading: growthLoading,
  } = useUserGrowth();
  const {
    data: charts,
    isLoading: chartsLoading,
  } = useDashboardCharts();

  const statusLabel = (status: string) =>
    t(`status.${status}`, { defaultValue: status.replace(/_/g, " ") });

  const growthSeries = fillUserGrowthSeries(
    (growth ?? []).map((point) => ({
      date: String(point.date).slice(0, 10),
      count: Number(point.count),
    })),
  );

  const activityBars = [
    { name: t("dashboard.newUsers"), value: activity?.new_users_7d ?? 0 },
    { name: t("dashboard.newConnections"), value: activity?.new_connections_7d ?? 0 },
    { name: t("dashboard.newEvents"), value: activity?.new_events_7d ?? 0 },
  ];

  const shortcuts = [
    {
      title: t("dashboard.shortcutsUsers"),
      description: t("dashboard.shortcutsUsersDesc"),
      href: `${prefix}/users`,
      icon: Users,
    },
    {
      title: t("dashboard.shortcutsJobs"),
      description: t("dashboard.shortcutsJobsDesc"),
      href: `${prefix}/jobs`,
      icon: Briefcase,
    },
    {
      title: t("dashboard.shortcutsApplications"),
      description: t("dashboard.shortcutsApplicationsDesc"),
      href: `${prefix}/job-applications`,
      icon: ClipboardList,
    },
    {
      title: t("dashboard.shortcutsReports"),
      description: t("dashboard.shortcutsReportsDesc"),
      href: `${prefix}/reports`,
      icon: Flag,
    },
    {
      title: t("dashboard.shortcutsTelegram"),
      description: t("dashboard.shortcutsTelegramDesc"),
      href: `${prefix}/telegram`,
      icon: Send,
    },
    {
      title: t("dashboard.shortcutsCompanies"),
      description: t("dashboard.shortcutsCompaniesDesc"),
      href: `${prefix}/companies`,
      icon: Building2,
    },
    {
      title: t("dashboard.shortcutsProfiles"),
      description: t("dashboard.shortcutsProfilesDesc"),
      href: `${prefix}/profiles`,
      icon: UserCircle2,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {t("dashboard.title")}
        </h1>
      </div>

      {token && (statsError || activityError) && (
        <p className="text-destructive text-sm">
          {t("dashboard.loadError")}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title={t("dashboard.totalUsers")} value={stats?.total_users} loading={statsLoading} />
        <StatCard title={t("dashboard.activeUsers")} value={stats?.active_users} loading={statsLoading} />
        <StatCard title={t("dashboard.totalJobs")} value={stats?.total_jobs} loading={statsLoading} />
        <StatCard title={t("dashboard.openJobs")} value={stats?.open_jobs} loading={statsLoading} />
        <StatCard title={t("dashboard.totalApplications")} value={stats?.total_applications} loading={statsLoading} />
        <StatCard title={t("dashboard.pendingApplications")} value={stats?.pending_applications} loading={statsLoading} />
        <StatCard title={t("dashboard.connections")} value={stats?.total_connections} loading={statsLoading} />
        <StatCard title={t("dashboard.telegramLinked")} value={stats?.telegram_connected_users} loading={statsLoading} />
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">{t("dashboard.userGrowth")}</CardTitle>
          </CardHeader>
          <CardContent>
            {growthLoading ? (
              <div className="text-muted-foreground flex h-[240px] items-center justify-center text-sm">
                {t("common.loading")}
              </div>
            ) : (
              <AreaTrendChart data={growthSeries} emptyLabel={t("dashboard.noChartData")} />
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">{t("dashboard.activityChart")}</CardTitle>
          </CardHeader>
          <CardContent>
            {activityLoading ? (
              <div className="text-muted-foreground flex h-[240px] items-center justify-center text-sm">
                {t("common.loading")}
              </div>
            ) : (
              <BarComparisonChart data={activityBars} emptyLabel={t("dashboard.noChartData")} />
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">{t("dashboard.jobsByStatus")}</CardTitle>
          </CardHeader>
          <CardContent>
            {chartsLoading ? (
              <div className="text-muted-foreground flex h-[240px] items-center justify-center text-sm">
                {t("common.loading")}
              </div>
            ) : (
              <StatusPieChart
                data={statusChartData(charts?.jobs_by_status ?? [], statusLabel)}
                emptyLabel={t("dashboard.noChartData")}
              />
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">{t("dashboard.applicationsByStatus")}</CardTitle>
          </CardHeader>
          <CardContent>
            {chartsLoading ? (
              <div className="text-muted-foreground flex h-[240px] items-center justify-center text-sm">
                {t("common.loading")}
              </div>
            ) : (
              <StatusPieChart
                data={statusChartData(charts?.applications_by_status ?? [], statusLabel)}
                emptyLabel={t("dashboard.noChartData")}
              />
            )}
          </CardContent>
        </Card>
      </div>

      <DashboardShortcuts title={t("dashboard.shortcuts")} items={shortcuts} />
    </div>
  );
}
