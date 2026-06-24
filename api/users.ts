import type { PaginatedResponse, ApiSuccessResponse } from "@/interface/common";
import type { User, UserRole, UserStatus } from "@/interface/entities";
import { api } from "./api";
import { buildQueryParams } from "@/lib/pagination";

export interface UserListParams {
  page?: number;
  per_page?: number;
  search?: string;
  status?: UserStatus;
  role?: UserRole;
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  role?: UserRole;
  status?: UserStatus;
  avatar?: string | null;
}

export async function getUsersApi(
  params: UserListParams = {},
): Promise<PaginatedResponse<User>> {
  const result = await api.get<PaginatedResponse<User>>("/users", {
    params: buildQueryParams(params),
  });
  return result as unknown as PaginatedResponse<User>;
}

export async function getUserByIdApi(id: string): Promise<User> {
  const result = await api.get<ApiSuccessResponse<User>>(`/users/${id}`);
  const body = result as unknown as ApiSuccessResponse<User>;
  return body.data;
}

export async function updateUserApi(
  id: string,
  payload: UpdateUserPayload,
): Promise<User> {
  const result = await api.put<ApiSuccessResponse<User>>(`/users/${id}`, payload);
  const body = result as unknown as ApiSuccessResponse<User>;
  return body.data;
}

export async function banUserApi(id: string): Promise<User> {
  const result = await api.post<ApiSuccessResponse<User>>(`/users/${id}/ban`);
  const body = result as unknown as ApiSuccessResponse<User>;
  return body.data;
}

export async function unbanUserApi(id: string): Promise<User> {
  const result = await api.post<ApiSuccessResponse<User>>(`/users/${id}/unban`);
  const body = result as unknown as ApiSuccessResponse<User>;
  return body.data;
}

export async function deleteUserApi(id: string): Promise<void> {
  await api.delete(`/users/${id}`);
}
