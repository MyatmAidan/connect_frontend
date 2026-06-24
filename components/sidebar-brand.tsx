"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { BrandIcon, BrandTitle } from "@/components/brand/brand-mark";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { localePath } from "@/lib/locale-path";
import { BRAND_NAME } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function SidebarBrand() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const homeHref = localePath(locale, "/dashboard");
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          render={<Link href={homeHref} aria-label={`${BRAND_NAME} home`} />}
          className={cn(
            "h-auto min-h-14 rounded-xl px-3 py-2.5",
            "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/60",
            "group-data-[collapsible=icon]:size-12! group-data-[collapsible=icon]:min-h-12! group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:rounded-xl group-data-[collapsible=icon]:p-0!",
          )}
        >
          {collapsed ? (
            <BrandIcon size={40} alt={BRAND_NAME} className="size-10" />
          ) : (
            <BrandTitle
              iconSize={40}
              iconClassName="size-10"
              textClassName="text-lg"
            />
          )}
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
