"use client";

import { useQuery } from "@tanstack/react-query";
import { getCompanyDashboardStatsApi } from "@/api/dashboard";
import { useCompanyAuthStore } from "@/store/company-auth-store";

export function useCompanyDashboardStats() {
  const token = useCompanyAuthStore((state) => state.token);

  return useQuery({
    queryKey: ["company", "dashboard", "stats", token],
    queryFn: getCompanyDashboardStatsApi,
    enabled: !!token,
    retry: (failureCount, error) => {
      const status = (error as { response?: { status?: number } })?.response
        ?.status;
      return status !== 401 && failureCount < 1;
    },
  });
}
