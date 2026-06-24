"use client";

import { useParams, usePathname } from "next/navigation";
import { CompanySidebar } from "@/components/company/CompanySidebar";
import { ShellHeaderBrand } from "@/components/brand/brand-mark";
import { useLoadingStore } from "@/store/loading-store";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const PANEL_PREFIXES = ["/dashboard", "/jobs", "/applications", "/profile"];

function isPanelRoute(path: string, locale: string): boolean {
  const base = `/company/${locale}`;
  return PANEL_PREFIXES.some(
    (p) => path === `${base}${p}` || path.startsWith(`${base}${p}/`),
  );
}

export function CompanyShellProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const showShell = isPanelRoute(pathname, locale);
  const isMobile = useIsMobile();
  const apiLoadingCount = useLoadingStore((s) => s.apiLoadingCount);

  if (!showShell) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <CompanySidebar />
      <SidebarInset className="flex h-svh min-h-0 flex-col overflow-hidden">
        <header className="relative flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className={isMobile ? "" : "-ml-1"} />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <ShellHeaderBrand badge="Company" />
          {apiLoadingCount > 0 ? (
            <div className="bg-primary/15 ml-auto h-1.5 w-20 overflow-hidden rounded-full">
              <div className="dc-api-progress h-full w-1/3 rounded-full bg-primary" />
            </div>
          ) : null}
          {apiLoadingCount > 0 ? (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 overflow-hidden bg-primary/10">
              <div className="dc-api-progress h-full w-1/4 bg-primary" />
            </div>
          ) : null}
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
