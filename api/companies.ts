import type { ApiSuccessResponse, PaginatedResponse } from "@/interface/common";
import type { CompanyProfile } from "@/interface/entities";
import { api } from "./api";
import { buildQueryParams } from "@/lib/pagination";

export async function getCompaniesApi(params: Record<string, unknown> = {}) {
  const result = await api.get<PaginatedResponse<CompanyProfile>>("/companies", {
    params: buildQueryParams(params),
  });
  return result as unknown as PaginatedResponse<CompanyProfile>;
}

export async function getCompanyApi(id: string) {
  const result = await api.get<ApiSuccessResponse<CompanyProfile>>(`/companies/${id}`);
  const body = result as unknown as ApiSuccessResponse<CompanyProfile>;
  return body.data;
}

export async function updateCompanyApi(
  id: string,
  payload: Partial<CompanyProfile>,
) {
  const result = await api.put<ApiSuccessResponse<CompanyProfile>>(
    `/companies/${id}`,
    payload,
  );
  const body = result as unknown as ApiSuccessResponse<CompanyProfile>;
  return body.data;
}
