import { notFound } from "next/navigation";
import { Providers } from "@/components/Providers";
import { isValidLocale, type Locale } from "@/lib/i18n-config";

export default async function LocaleLayout({
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

  return <Providers locale={locale as Locale}>{children}</Providers>;
}
