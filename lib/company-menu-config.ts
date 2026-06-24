import { Briefcase, ClipboardList, LayoutDashboard, UserCircle2, type LucideIcon } from "lucide-react";

export interface CompanyMenuItem {
  titleKey: string;
  title: string;
  url: string;
  icon?: LucideIcon;
}

export function getCompanyMenuConfig(t: (key: string) => string, locale: string): CompanyMenuItem[] {
  const prefix = `/company/${locale}`;
  return [
    {
      titleKey: "company.menu.dashboard",
      title: t("company.menu.dashboard"),
      icon: LayoutDashboard,
      url: `${prefix}/dashboard`,
    },
    {
      titleKey: "company.menu.jobs",
      title: t("company.menu.jobs"),
      icon: Briefcase,
      url: `${prefix}/jobs`,
    },
    {
      titleKey: "company.menu.applications",
      title: t("company.menu.applications"),
      icon: ClipboardList,
      url: `${prefix}/applications`,
    },
    {
      titleKey: "company.menu.profile",
      title: t("company.menu.profile"),
      icon: UserCircle2,
      url: `${prefix}/profile`,
    },
  ];
}
