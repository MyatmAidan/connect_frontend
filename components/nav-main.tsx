"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    titleKey: string;
    title: string;
    url: string;
    icon?: LucideIcon;
  }[];
}) {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();

  const isActive = (url: string) => {
    const path = (pathname ?? "").replace(/\/+$/, "") || "/";
    const target = url.replace(/\/+$/, "") || "/";
    return path === target || path.startsWith(`${target}/`);
  };

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.titleKey} className="dc-nav-item">
            <SidebarMenuButton
              isActive={isActive(item.url)}
              tooltip={item.title}
              className="rounded-lg"
              render={
                <Link
                  href={item.url}
                  onClick={() => isMobile && setOpenMobile(false)}
                />
              }
            >
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
