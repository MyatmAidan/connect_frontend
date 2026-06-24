import { notFound } from "next/navigation";
import { CompanyProviders } from "@/components/company/CompanyProviders";
import { isValidLocale, type Locale } from "@/lib/i18n-config";

export default async function CompanyLocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  return <CompanyProviders locale={locale as Locale}>{children}</CompanyProviders>;
}
