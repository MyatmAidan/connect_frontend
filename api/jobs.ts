import type { ApiSuccessResponse, PaginatedResponse } from "@/interface/common";
import type { JobPosting } from "@/interface/entities";
import { api } from "./api";
import { buildQueryParams } from "@/lib/pagination";

export async function getJobsApi(params: Record<string, unknown> = {}) {
  const result = await api.get<PaginatedResponse<JobPosting>>("/jobs", {
    params: buildQueryParams(params),
  });
  return result as unknown as PaginatedResponse<JobPosting>;
}

export async function getJobApi(id: string) {
  const result = await api.get<ApiSuccessResponse<JobPosting>>(`/jobs/${id}`);
  const body = result as unknown as ApiSuccessResponse<JobPosting>;
  return body.data;
}

export async function deleteJobApi(id: string) {
  await api.delete(`/jobs/${id}`);
}
