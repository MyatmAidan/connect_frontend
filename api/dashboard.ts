import type {
  CompanyDashboardStats,
  DashboardActivity,
  DashboardCharts,
  DashboardStats,
  UserGrowthPoint,
} from "@/interface/dashboard";
import { unwrapApiData } from "@/lib/api-response";
import { api } from "./api";
import { companyApi } from "./company-api";

export async function getDashboardStatsApi(): Promise<DashboardStats> {
  const result = await api.get("/dashboard/stats");
  return unwrapApiData<DashboardStats>(result);
}

export async function getDashboardActivityApi(): Promise<DashboardActivity> {
  const result = await api.get("/dashboard/activity");
  return unwrapApiData<DashboardActivity>(result);
}

export async function getUserGrowthApi(): Promise<UserGrowthPoint[]> {
  const result = await api.get("/dashboard/user-growth");
  return unwrapApiData<UserGrowthPoint[]>(result);
}

export async function getDashboardChartsApi(): Promise<DashboardCharts> {
  const result = await api.get("/dashboard/charts");
  return unwrapApiData<DashboardCharts>(result);
}

export async function getCompanyDashboardStatsApi(): Promise<CompanyDashboardStats> {
  const result = await companyApi.get("/dashboard/stats");
  return unwrapApiData<CompanyDashboardStats>(result);
}
