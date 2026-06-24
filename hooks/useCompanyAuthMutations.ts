"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { companyLoginApi, companyLogoutApi } from "@/api/company-auth";
import { useCompanyAuthStore } from "@/store/company-auth-store";
import { toast } from "sonner";
import type { LoginCredentials } from "@/interface/auth";
import { useTranslation } from "@/hooks/useTranslation";

const COMPANY_AUTH_QUERY_KEY = ["company-auth"];

export function useCompanyLoginMutation() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const login = useCompanyAuthStore((s) => s.login);
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => companyLoginApi(credentials),
    onSuccess: async (data) => {
      login(data.company, data.token);
      toast.success(t("auth.login"));
      queryClient.setQueryData(COMPANY_AUTH_QUERY_KEY, data.company);
      await queryClient.invalidateQueries();
      router.replace(`/company/${locale}/dashboard`);
    },
  });
}

export function useCompanyLogoutMutation() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const logout = useCompanyAuthStore((s) => s.logout);
  const { t } = useTranslation();

  return useMutation({
    mutationFn: () => companyLogoutApi(),
    onSuccess: async () => {
      logout();
      toast.success(t("auth.logout"));
      queryClient.removeQueries({ queryKey: COMPANY_AUTH_QUERY_KEY });
      router.replace(`/company/${locale}/login`);
    },
    onError: async () => {
      logout();
      queryClient.removeQueries({ queryKey: COMPANY_AUTH_QUERY_KEY });
      router.replace(`/company/${locale}/login`);
    },
  });
}
