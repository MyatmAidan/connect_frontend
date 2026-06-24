import {
  LayoutDashboard,
  Users,
  UserCircle2,
  Tags,
  FolderTree,
  Briefcase,
  Building2,
  ClipboardList,
  Link2,
  UserPlus,
  Calendar,
  Flag,
  Bell,
  Send,
  ScrollText,
  type LucideIcon,
} from "lucide-react";

export interface MenuConfigItem {
  titleKey: string;
  title: string;
  url: string;
  icon?: LucideIcon;
}

export type TFunction = (key: string) => string;

export function getAdminMenuConfig(t: TFunction, locale: string): MenuConfigItem[] {
  const prefix = `/${locale}`;
  return [
    {
      titleKey: "menu.dashboard",
      title: t("menu.dashboard"),
      icon: LayoutDashboard,
      url: `${prefix}/dashboard`,
    },
    {
      titleKey: "menu.users",
      title: t("menu.users"),
      icon: Users,
      url: `${prefix}/users`,
    },
    {
      titleKey: "menu.profiles",
      title: t("menu.profiles"),
      icon: UserCircle2,
      url: `${prefix}/profiles`,
    },
    {
      titleKey: "menu.companies",
      title: t("menu.companies"),
      icon: Building2,
      url: `${prefix}/companies`,
    },
    {
      titleKey: "menu.jobs",
      title: t("menu.jobs"),
      icon: Briefcase,
      url: `${prefix}/jobs`,
    },
    {
      titleKey: "menu.jobApplications",
      title: t("menu.jobApplications"),
      icon: ClipboardList,
      url: `${prefix}/job-applications`,
    },
    {
      titleKey: "menu.categories",
      title: t("menu.categories"),
      icon: FolderTree,
      url: `${prefix}/categories`,
    },
    {
      titleKey: "menu.skills",
      title: t("menu.skills"),
      icon: Tags,
      url: `${prefix}/skills`,
    },
    {
      titleKey: "menu.connections",
      title: t("menu.connections"),
      icon: Link2,
      url: `${prefix}/connections`,
    },
    {
      titleKey: "menu.connectionRequests",
      title: t("menu.connectionRequests"),
      icon: UserPlus,
      url: `${prefix}/connection-requests`,
    },
    {
      titleKey: "menu.events",
      title: t("menu.events"),
      icon: Calendar,
      url: `${prefix}/events`,
    },
    {
      titleKey: "menu.eventRequests",
      title: t("menu.eventRequests"),
      icon: UserPlus,
      url: `${prefix}/event-requests`,
    },
    {
      titleKey: "menu.reports",
      title: t("menu.reports"),
      icon: Flag,
      url: `${prefix}/reports`,
    },
    {
      titleKey: "menu.notifications",
      title: t("menu.notifications"),
      icon: Bell,
      url: `${prefix}/notifications`,
    },
    {
      titleKey: "menu.telegram",
      title: t("menu.telegram"),
      icon: Send,
      url: `${prefix}/telegram`,
    },
    {
      titleKey: "menu.logs",
      title: t("menu.logs"),
      icon: ScrollText,
      url: `${prefix}/logs`,
    },
  ];
}
