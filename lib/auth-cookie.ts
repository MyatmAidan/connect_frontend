export async function setAuthCookie(token: string): Promise<void> {
  const response = await fetch("/api/auth/session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ token }),
  });

  if (!response.ok) {
    throw new Error("Failed to persist auth session.");
  }
}

export async function deleteAuthCookie(): Promise<void> {
  await fetch("/api/auth/logout", {
    method: "POST",
    credentials: "include",
  });
}
