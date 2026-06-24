import type { ApiSuccessResponse, PaginatedResponse } from "@/interface/common";
import type { JobPosting } from "@/interface/entities";
import { companyApi } from "./company-api";
import { buildQueryParams } from "@/lib/pagination";

export interface JobPayload {
  title: string;
  description: string;
  requirements?: string;
  category_id?: string | null;
  employment_type: string;
  experience_level?: string | null;
  location?: string;
  salary_min?: number;
  salary_max?: number;
  salary_currency?: string;
}

export async function getCompanyJobsApi(params: Record<string, unknown> = {}) {
  const result = await companyApi.get<PaginatedResponse<JobPosting>>("/jobs", {
    params: buildQueryParams(params),
  });
  return result as unknown as PaginatedResponse<JobPosting>;
}

export async function createCompanyJobApi(payload: JobPayload) {
  const result = await companyApi.post<ApiSuccessResponse<JobPosting>>("/jobs", payload);
  const body = result as unknown as ApiSuccessResponse<JobPosting>;
  return body.data;
}

export async function updateCompanyJobApi(id: string, payload: Partial<JobPayload>) {
  const result = await companyApi.put<ApiSuccessResponse<JobPosting>>(`/jobs/${id}`, payload);
  const body = result as unknown as ApiSuccessResponse<JobPosting>;
  return body.data;
}

export async function publishCompanyJobApi(id: string) {
  const result = await companyApi.post<ApiSuccessResponse<JobPosting>>(`/jobs/${id}/publish`);
  const body = result as unknown as ApiSuccessResponse<JobPosting>;
  return body.data;
}

export async function closeCompanyJobApi(id: string) {
  const result = await companyApi.post<ApiSuccessResponse<JobPosting>>(`/jobs/${id}/close`);
  const body = result as unknown as ApiSuccessResponse<JobPosting>;
  return body.data;
}

export async function reopenCompanyJobApi(id: string) {
  const result = await companyApi.post<ApiSuccessResponse<JobPosting>>(`/jobs/${id}/reopen`);
  const body = result as unknown as ApiSuccessResponse<JobPosting>;
  return body.data;
}

export async function deleteCompanyJobApi(id: string) {
  await companyApi.delete(`/jobs/${id}`);
}
