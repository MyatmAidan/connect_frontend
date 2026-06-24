import type { ApiSuccessResponse, PaginatedResponse } from "@/interface/common";
import type { JobApplication } from "@/interface/entities";
import { api } from "./api";
import { buildQueryParams } from "@/lib/pagination";

export async function getJobApplicationsApi(params: Record<string, unknown> = {}) {
  const result = await api.get<PaginatedResponse<JobApplication>>("/job-applications", {
    params: buildQueryParams(params),
  });
  return result as unknown as PaginatedResponse<JobApplication>;
}

export async function getJobApplicationApi(id: string) {
  const result = await api.get<ApiSuccessResponse<JobApplication>>(
    `/job-applications/${id}`,
  );
  const body = result as unknown as ApiSuccessResponse<JobApplication>;
  return body.data;
}
