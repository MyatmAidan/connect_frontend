import type { PaginatedResponse, ApiSuccessResponse } from "@/interface/common";
import type { Report, ReportStatus } from "@/interface/entities";
import { api } from "./api";
import { buildQueryParams } from "@/lib/pagination";

export interface ReportListParams {
  page?: number;
  per_page?: number;
  status?: ReportStatus;
}

export async function getReportsApi(
  params: ReportListParams = {},
): Promise<PaginatedResponse<Report>> {
  const result = await api.get<PaginatedResponse<Report>>("/reports", {
    params: buildQueryParams(params),
  });
  return result as unknown as PaginatedResponse<Report>;
}

export async function getReportByIdApi(id: string): Promise<Report> {
  const result = await api.get<ApiSuccessResponse<Report>>(`/reports/${id}`);
  const body = result as unknown as ApiSuccessResponse<Report>;
  return body.data;
}

export async function reviewReportApi(id: string): Promise<Report> {
  const result = await api.post<ApiSuccessResponse<Report>>(
    `/reports/${id}/review`,
  );
  const body = result as unknown as ApiSuccessResponse<Report>;
  return body.data;
}

export async function resolveReportApi(id: string): Promise<Report> {
  const result = await api.post<ApiSuccessResponse<Report>>(
    `/reports/${id}/resolve`,
  );
  const body = result as unknown as ApiSuccessResponse<Report>;
  return body.data;
}

export async function rejectReportApi(id: string): Promise<Report> {
  const result = await api.post<ApiSuccessResponse<Report>>(
    `/reports/${id}/reject`,
  );
  const body = result as unknown as ApiSuccessResponse<Report>;
  return body.data;
}
