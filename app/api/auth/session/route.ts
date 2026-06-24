import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const apiBaseUrl =
  process.env.NEXT_PUBLIC_APP_API_BASE_URL || "http://localhost:8000/api/v1/admin";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  sameSite: "lax" as const,
  maxAge: 60 * 60 * 24 * 31,
};

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;
  if (!token) {
    return NextResponse.json({ error: "No token" }, { status: 401 });
  }

  try {
    const res = await fetch(`${apiBaseUrl}/auth/me`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    const data = await res.json();
    const user = data?.data;
    if (!user) {
      return NextResponse.json({ error: "No user" }, { status: 401 });
    }
    return NextResponse.json({ user, token });
  } catch {
    return NextResponse.json({ error: "Request failed" }, { status: 401 });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { token?: string };
    if (!body.token) {
      return NextResponse.json({ error: "Token required" }, { status: 400 });
    }

    const cookieStore = await cookies();
    cookieStore.set("authToken", body.token, cookieOptions);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
