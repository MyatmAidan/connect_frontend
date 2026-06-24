"use client";

import { useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { BrandLoading } from "@/components/common/BrandLoading";
import { useAuthStore } from "@/store/auth-store";
import { getCurrentUserApi } from "@/api/auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const {
    isAuthenticated,
    token,
    user,
    setUser,
    setLoading,
    logout,
    refetchUser,
    login,
  } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname() ?? "";
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const [hasHydrated, setHasHydrated] = useState(false);
  const [syncedFromCookie, setSyncedFromCookie] = useState(false);

  const isPublic =
    pathname.endsWith("/login") ||
    pathname === `/${locale}` ||
    pathname === `/${locale}/`;

  useEffect(() => {
    const unsub = useAuthStore.persist.onFinishHydration(() =>
      setHasHydrated(true),
    );

    if (useAuthStore.persist.hasHydrated()) {
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
    if (!hasHydrated || syncedFromCookie) return;

    if (isPublic) {
      setSyncedFromCookie(true);
      return;
    }

    let cancelled = false;

    const timeout = window.setTimeout(() => {
      if (!cancelled) setSyncedFromCookie(true);
    }, 4000);

    fetch("/api/auth/session", { credentials: "include" })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(new Error("No session")),
      )
      .then((data: { user?: unknown; token?: string }) => {
        if (!cancelled && data?.user && data?.token) {
          login(
            data.user as Parameters<typeof login>[0],
            data.token,
          );
        }
      })
      .catch(() => {
        if (!cancelled && useAuthStore.getState().token) {
          logout();
        }
      })
      .finally(() => {
        if (!cancelled) {
          window.clearTimeout(timeout);
          setSyncedFromCookie(true);
        }
      });

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, [hasHydrated, isPublic, syncedFromCookie, login, logout]);

  useEffect(() => {
    if (!hasHydrated || !syncedFromCookie || token == null) return;
    if (pathname.endsWith("/login")) {
      router.replace(`/${locale}/dashboard`);
    }
  }, [hasHydrated, syncedFromCookie, token, pathname, router, locale]);

  useEffect(() => {
    if (!hasHydrated || isPublic || !syncedFromCookie || token != null) return;
    router.replace(`/${locale}/login`);
  }, [hasHydrated, isPublic, token, syncedFromCookie, router, locale]);

  useEffect(() => {
    if (!hasHydrated || !isAuthenticated || isPublic || token == null) return;
    if (user != null) return;

    let cancelled = false;
    setLoading(true);

    getCurrentUserApi()
      .then((data) => {
        if (!cancelled) setUser(data);
      })
      .catch(() => {
        if (!cancelled) {
          logout();
          router.replace(`/${locale}/login`);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [
    hasHydrated,
    isAuthenticated,
    isPublic,
    token,
    user,
    setUser,
    setLoading,
    logout,
    router,
    locale,
  ]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void refetchUser({ silent: true });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isAuthenticated, refetchUser]);

  useEffect(() => {
    const handleUnauthorized = () => {
      logout();
      router.replace(`/${locale}/login`);
    };

    window.addEventListener("auth:unauthorized", handleUnauthorized);
    return () =>
      window.removeEventListener("auth:unauthorized", handleUnauthorized);
  }, [logout, router, locale]);

  const booting = !hasHydrated || (!isPublic && !syncedFromCookie);

  if (booting) {
    return <BrandLoading fullScreen />;
  }

  return <>{children}</>;
}
