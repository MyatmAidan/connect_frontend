"use client";

import { useAuthStore } from "@/store/auth-store";

export function useAuthReady() {
  const token = useAuthStore((state) => state.token);
  return Boolean(token);
}
