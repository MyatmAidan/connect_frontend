import type { PaginatedResponse, ApiSuccessResponse } from "@/interface/common";
import type { Category } from "@/interface/entities";
import { api } from "./api";
import { buildQueryParams } from "@/lib/pagination";

export interface CategoryListParams {
  page?: number;
  per_page?: number;
  search?: string;
}

export interface CategoryPayload {
  name_en: string;
  name_my: string;
}

export async function getCategoriesApi(
  params: CategoryListParams = {},
): Promise<PaginatedResponse<Category>> {
  const result = await api.get<PaginatedResponse<Category>>("/categories", {
    params: buildQueryParams(params),
  });
  return result as unknown as PaginatedResponse<Category>;
}

export async function createCategoryApi(payload: CategoryPayload): Promise<Category> {
  const result = await api.post<ApiSuccessResponse<Category>>("/categories", payload);
  const body = result as unknown as ApiSuccessResponse<Category>;
  return body.data;
}

export async function updateCategoryApi(
  id: string,
  payload: CategoryPayload,
): Promise<Category> {
  const result = await api.put<ApiSuccessResponse<Category>>(`/categories/${id}`, payload);
  const body = result as unknown as ApiSuccessResponse<Category>;
  return body.data;
}

export async function deleteCategoryApi(id: string): Promise<void> {
  await api.delete(`/categories/${id}`);
}
