"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { BrandWordmark } from "@/components/brand/brand-mark";
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
            <BrandWordmark
              alt={BRAND_NAME}
              className="h-10 w-10 shrink-0 object-cover object-left"
            />
          ) : (
            <BrandWordmark
              alt={BRAND_NAME}
              className="h-9 w-auto max-w-[200px]"
            />
          )}
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
