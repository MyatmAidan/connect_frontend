"use client";

import { useParams } from "next/navigation";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { SidebarBrand } from "@/components/sidebar-brand";
import { SidebarBrandDivider } from "@/components/sidebar-brand-divider";
import { SidebarWatermark } from "@/components/sidebar-watermark";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslation } from "@/hooks/useTranslation";
import { getAdminMenuConfig } from "@/lib/menu-config";

export function AppSidebar() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const items = getAdminMenuConfig(t, locale);

  return (
    <Sidebar collapsible="icon" variant="floating" className="connect-sidebar">
      <SidebarWatermark />
      <SidebarHeader className="relative z-[1] gap-2.5 px-1 pb-2 pt-3">
        <SidebarBrand />
        <SidebarBrandDivider />
      </SidebarHeader>
      <SidebarContent className="relative z-[1] px-1.5">
        <ScrollArea className="h-full">
          <NavMain items={items} />
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter className="relative z-[1] border-t border-sidebar-border/70 bg-sidebar-accent/25 p-2 backdrop-blur-sm">
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
