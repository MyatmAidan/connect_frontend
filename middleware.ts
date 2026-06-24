import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isValidLocale } from "@/lib/i18n-config";

const STATIC_EXTENSIONS =
  /\.(jpg|jpeg|png|gif|svg|webp|ico|css|js|woff|woff2|ttf|eot)(\?.*)?$/i;

function getLocaleFromPath(pathname: string): string | null {
  const segment = pathname.split("/")[1];
  return segment && isValidLocale(segment) ? segment : null;
}

function isNextInternalRequest(request: NextRequest): boolean {
  return (
    request.headers.has("next-action") ||
    request.headers.has("next-router-state-tree") ||
    request.headers.get("rsc") === "1" ||
    request.headers.get("next-router-prefetch") === "1" ||
    request.nextUrl.searchParams.has("_rsc")
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    STATIC_EXTENSIONS.test(pathname) ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    isNextInternalRequest(request)
  ) {
    return NextResponse.next();
  }

  if (pathname === "/company" || pathname === "/company/") {
    const url = request.nextUrl.clone();
    url.pathname = "/company/en/login";
    return NextResponse.redirect(url);
  }

  if (pathname.startsWith("/company/")) {
    return NextResponse.next();
  }

  const pathnameLocale = getLocaleFromPath(pathname);

  if (!pathnameLocale) {
    const preferred =
      request.cookies.get("NEXT_LOCALE")?.value ||
      request.headers.get("accept-language")?.split(",")[0]?.split("-")[0] ||
      defaultLocale;
    const locale = isValidLocale(preferred) ? preferred : defaultLocale;
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", pathnameLocale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
