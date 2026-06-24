/** API origin for storage assets (strips `/api/v1/admin` from the public API base URL). */
export function getApiOrigin(): string {
  const base =
    process.env.NEXT_PUBLIC_APP_API_BASE_URL ||
    "http://localhost:8000/api/v1/admin";

  return base.replace(/\/api\/v1\/admin\/?$/, "");
}

export function resolveMediaUrl(url: string | null | undefined): string | null {
  if (!url?.trim()) return null;

  const origin = getApiOrigin();

  if (url.startsWith("/storage/")) {
    return `${origin}${url}`;
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    try {
      const parsed = new URL(url);
      if (parsed.pathname.startsWith("/storage/")) {
        return `${origin}${parsed.pathname}`;
      }
    } catch {
      return url;
    }
    return url;
  }

  return `${origin}/${url.replace(/^\/+/, "")}`;
}
