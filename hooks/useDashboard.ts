"use client";

import { useQuery } from "@tanstack/react-query";
import {
  getDashboardActivityApi,
  getDashboardChartsApi,
  getDashboardStatsApi,
  getUserGrowthApi,
} from "@/api/dashboard";
import { useAuthReady } from "@/hooks/useAuthReady";
import { useAuthStore } from "@/store/auth-store";

export function useDashboardStats() {
  const authReady = useAuthReady();
  const token = useAuthStore((state) => state.token);

  return useQuery({
    queryKey: ["dashboard", "stats", token],
    queryFn: getDashboardStatsApi,
    enabled: authReady,
    retry: (failureCount, error) => {
      const status = (error as { response?: { status?: number } })?.response
        ?.status;
      return status !== 401 && failureCount < 1;
    },
  });
}

export function useDashboardActivity() {
  const authReady = useAuthReady();
  const token = useAuthStore((state) => state.token);

  return useQuery({
    queryKey: ["dashboard", "activity", token],
    queryFn: getDashboardActivityApi,
    enabled: authReady,
    retry: (failureCount, error) => {
      const status = (error as { response?: { status?: number } })?.response
        ?.status;
      return status !== 401 && failureCount < 1;
    },
  });
}

export function useUserGrowth() {
  const authReady = useAuthReady();
  const token = useAuthStore((state) => state.token);

  return useQuery({
    queryKey: ["dashboard", "user-growth", token],
    queryFn: getUserGrowthApi,
    enabled: authReady,
    retry: (failureCount, error) => {
      const status = (error as { response?: { status?: number } })?.response
        ?.status;
      return status !== 401 && failureCount < 1;
    },
  });
}

export function useDashboardCharts() {
  const authReady = useAuthReady();
  const token = useAuthStore((state) => state.token);

  return useQuery({
    queryKey: ["dashboard", "charts", token],
    queryFn: getDashboardChartsApi,
    enabled: authReady,
    retry: (failureCount, error) => {
      const status = (error as { response?: { status?: number } })?.response
        ?.status;
      return status !== 401 && failureCount < 1;
    },
  });
}
