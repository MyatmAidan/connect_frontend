export function companyLocalePath(locale: string, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/company/${locale}${normalized}`;
}
