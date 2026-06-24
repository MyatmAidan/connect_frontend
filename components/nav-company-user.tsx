"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronsUpDown, Globe, LogOut, Moon, Sun, Monitor, UserRound } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useTheme } from "@/hooks/useTheme";
import { useCompanyLogoutMutation } from "@/hooks/useCompanyAuthMutations";
import { useCompanyAuthStore } from "@/store/company-auth-store";
import { useTranslation } from "@/hooks/useTranslation";
import { companyLocalePath } from "@/lib/company-locale-path";

const THEMES = [
  { value: "light", icon: Sun },
  { value: "dark", icon: Moon },
  { value: "system", icon: Monitor },
] as const;

export function NavCompanyUser() {
  const { locale } = useParams<{ locale: string }>();
  const { isMobile } = useSidebar();
  const { i18n, t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const company = useCompanyAuthStore((s) => s.company);
  const logoutMutation = useCompanyLogoutMutation();
  const [logoutOpen, setLogoutOpen] = useState(false);

  if (!company) return null;

  const displayName = company.company_name ?? company.company?.name;
  const languageOptions = [
    { code: "en", name: t("common.languages.en") },
    { code: "my", name: t("common.languages.my") },
  ] as const;
  const currentLang =
    languageOptions.find((l) => l.code === i18n.language) ?? languageOptions[0];

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger render={<SidebarMenuButton size="lg" />}>
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={undefined} alt={displayName} />
                <AvatarFallback className="rounded-lg">
                  {(displayName ?? "").charAt(0) || "?"}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{displayName}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {company.contact_email ?? company.company?.email}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuGroup>
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarFallback className="rounded-lg">
                        {(displayName ?? "").charAt(0) || "?"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">{displayName}</span>
                      <span className="truncate text-xs">{company.contact_email ?? company.company?.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  render={<Link href={companyLocalePath(locale, "/profile")} />}
                >
                  <UserRound className="size-4" />
                  {t("company.menu.profile")}
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Globe className="size-4" />
                    <span>{t("common.language")}</span>
                    <span className="ml-auto text-xs text-muted-foreground">
                      {currentLang.name}
                    </span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    {languageOptions.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => {
                          i18n.changeLanguage(lang.code);
                          const path = window.location.pathname.replace(
                            /^\/company\/(en|my)/,
                            `/company/${lang.code}`,
                          );
                          window.location.href = path;
                        }}
                      >
                        {lang.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Sun className="size-4" />
                    <span>{t("common.theme")}</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuRadioGroup
                      value={theme ?? "system"}
                      onValueChange={setTheme}
                    >
                      {THEMES.map((item) => {
                        const Icon = item.icon;
                        return (
                          <DropdownMenuRadioItem key={item.value} value={item.value}>
                            <Icon className="size-4" />
                            {t(`common.themeOptions.${item.value}`)}
                          </DropdownMenuRadioItem>
                        );
                      })}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setLogoutOpen(true)}>
                <LogOut />
                {t("auth.logout")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

      <AlertDialog open={logoutOpen} onOpenChange={setLogoutOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("auth.logout")}</AlertDialogTitle>
            <AlertDialogDescription>
              {t("auth.logoutConfirm")}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("common.cancel")}</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => void logoutMutation.mutateAsync()}
              disabled={logoutMutation.isPending}
            >
              {t("auth.logout")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
