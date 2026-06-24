import type { ApiSuccessResponse, PaginatedResponse } from "@/interface/common";
import type { JobApplication } from "@/interface/entities";
import { companyApi } from "./company-api";
import { buildQueryParams } from "@/lib/pagination";

export async function getCompanyApplicationsApi(params: Record<string, unknown> = {}) {
  const result = await companyApi.get<PaginatedResponse<JobApplication>>(
    "/job-applications",
    { params: buildQueryParams(params) },
  );
  return result as unknown as PaginatedResponse<JobApplication>;
}

export async function getCompanyApplicationApi(id: string) {
  const result = await companyApi.get<ApiSuccessResponse<JobApplication>>(
    `/job-applications/${id}`,
  );
  const body = result as unknown as ApiSuccessResponse<JobApplication>;
  return body.data;
}

export async function updateApplicationStatusApi(
  id: string,
  payload: { status: string; company_notes?: string },
) {
  const result = await companyApi.put<ApiSuccessResponse<JobApplication>>(
    `/job-applications/${id}/status`,
    payload,
  );
  const body = result as unknown as ApiSuccessResponse<JobApplication>;
  return body.data;
}

export async function sendInterviewAcknowledgmentApi(id: string, message?: string) {
  const result = await companyApi.post<ApiSuccessResponse<JobApplication>>(
    `/job-applications/${id}/interview-ack`,
    message ? { message } : undefined,
  );
  const body = result as unknown as ApiSuccessResponse<JobApplication>;
  return body.data;
}
