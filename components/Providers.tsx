"use client";

import { I18nProvider } from "@/components/I18nProvider";
import { ThemeProvider } from "@/components/provider/ThemeProvider";
import { QueryProvider } from "@/components/provider/QueryProvider";
import { AuthProvider } from "@/components/provider/AuthProvider";
import { AppShellProvider } from "@/components/provider/AppShellProvider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Locale } from "@/lib/i18n-config";

export function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryProvider>
        <TooltipProvider>
          <I18nProvider locale={locale}>
            <AuthProvider>
              <AppShellProvider>{children}</AppShellProvider>
              <Toaster position="top-right" />
            </AuthProvider>
          </I18nProvider>
        </TooltipProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
