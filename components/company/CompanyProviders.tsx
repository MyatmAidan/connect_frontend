"use client";

import { I18nProvider } from "@/components/I18nProvider";
import { ThemeProvider } from "@/components/provider/ThemeProvider";
import { QueryProvider } from "@/components/provider/QueryProvider";
import { CompanyAuthProvider } from "@/components/company/CompanyAuthProvider";
import { CompanyShellProvider } from "@/components/company/CompanyShellProvider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Locale } from "@/lib/i18n-config";

export function CompanyProviders({
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
            <CompanyAuthProvider>
              <CompanyShellProvider>{children}</CompanyShellProvider>
              <Toaster position="top-right" />
            </CompanyAuthProvider>
          </I18nProvider>
        </TooltipProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
