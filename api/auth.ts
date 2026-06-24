import type { LoginCredentials, LoginResponse } from "@/interface/auth";
import type { ApiSuccessResponse } from "@/interface/common";
import type { User } from "@/store/auth-store";
import { api } from "./api";

export async function loginApi(
  credentials: LoginCredentials,
): Promise<LoginResponse> {
  const result = await api.post<ApiSuccessResponse<LoginResponse>>(
    "/auth/login",
    credentials,
  );
  const body = result as unknown as ApiSuccessResponse<LoginResponse>;
  return body.data;
}

export async function logoutApi(): Promise<void> {
  await api.post<ApiSuccessResponse<null>>("/auth/logout");
}

export async function getCurrentUserApi(): Promise<User> {
  const result = await api.get<ApiSuccessResponse<User>>("/auth/me");
  const body = result as unknown as ApiSuccessResponse<User>;
  return body.data;
}
