"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { loginApi, logoutApi } from "@/api/auth";
import { useAuthStore } from "@/store/auth-store";
import { setAuthCookie, deleteAuthCookie } from "@/lib/auth-cookie";
import { toast } from "sonner";
import type { LoginCredentials } from "@/interface/auth";
import { useTranslation } from "@/hooks/useTranslation";

const AUTH_QUERY_KEY = ["auth"];

export function useLoginMutation() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const login = useAuthStore((s) => s.login);
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => loginApi(credentials),
    onSuccess: async (data) => {
      login(data.user, data.token);
      toast.success(t("auth.login"));
      await setAuthCookie(data.token);
      queryClient.setQueryData(AUTH_QUERY_KEY, data.user);
      await queryClient.invalidateQueries();
      router.replace(`/${locale}/dashboard`);
    },
  });
}

export function useLogoutMutation() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const logout = useAuthStore((s) => s.logout);
  const { t } = useTranslation();

  return useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: async () => {
      logout();
      toast.success(t("auth.logout"));
      await deleteAuthCookie();
      queryClient.removeQueries({ queryKey: AUTH_QUERY_KEY });
      router.replace(`/${locale}/login`);
    },
    onError: async () => {
      logout();
      await deleteAuthCookie();
      queryClient.removeQueries({ queryKey: AUTH_QUERY_KEY });
      router.replace(`/${locale}/login`);
    },
  });
}
