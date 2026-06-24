"use client";

import { useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { BrandLoading } from "@/components/common/BrandLoading";
import { getCompanyMeApi } from "@/api/company-auth";
import { useCompanyAuthStore } from "@/store/company-auth-store";

export function CompanyAuthProvider({ children }: { children: React.ReactNode }) {
  const {
    isAuthenticated,
    token,
    company,
    setCompany,
    logout,
    refetchCompany,
  } = useCompanyAuthStore();
  const router = useRouter();
  const pathname = usePathname() ?? "";
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const [hasHydrated, setHasHydrated] = useState(false);

  const isPublic =
    pathname.endsWith("/login") || pathname.endsWith("/register");

  useEffect(() => {
    const unsub = useCompanyAuthStore.persist.onFinishHydration(() =>
      setHasHydrated(true),
    );

    if (useCompanyAuthStore.persist.hasHydrated()) {
      const id = window.setTimeout(() => setHasHydrated(true), 0);
      return () => {
        window.clearTimeout(id);
        unsub();
      };
    }

    const fallback = window.setTimeout(() => setHasHydrated(true), 1200);

    return () => {
      window.clearTimeout(fallback);
      unsub();
    };
  }, []);

  useEffect(() => {
    if (!hasHydrated || isPublic || token != null) return;
    router.replace(`/company/${locale}/login`);
  }, [hasHydrated, isPublic, token, router, locale]);

  useEffect(() => {
    if (!hasHydrated || !isAuthenticated || isPublic || token == null) return;
    if (company != null) return;

    let cancelled = false;

    getCompanyMeApi()
      .then((data) => {
        if (!cancelled) setCompany(data);
      })
      .catch(() => {
        if (!cancelled) {
          logout();
          router.replace(`/company/${locale}/login`);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [
    hasHydrated,
    isAuthenticated,
    isPublic,
    token,
    company,
    setCompany,
    logout,
    router,
    locale,
  ]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void refetchCompany();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isAuthenticated, refetchCompany]);

  useEffect(() => {
    const handleUnauthorized = () => {
      logout();
      router.replace(`/company/${locale}/login`);
    };

    window.addEventListener("company:unauthorized", handleUnauthorized);
    return () =>
      window.removeEventListener("company:unauthorized", handleUnauthorized);
  }, [logout, router, locale]);

  const booting = !hasHydrated;

  if (booting) {
    return <BrandLoading fullScreen />;
  }

  if (!isPublic && !token && !isAuthenticated) {
    return <BrandLoading fullScreen />;
  }

  return <>{children}</>;
}
