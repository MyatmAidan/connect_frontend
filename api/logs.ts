import type { PaginatedResponse, ApiSuccessResponse } from "@/interface/common";
import type { AdminLog } from "@/interface/entities";
import { api } from "./api";
import { buildQueryParams } from "@/lib/pagination";

export interface AdminLogListParams {
  page?: number;
  per_page?: number;
  admin_id?: string;
  action?: string;
}

export async function getAdminLogsApi(
  params: AdminLogListParams = {},
): Promise<PaginatedResponse<AdminLog>> {
  const result = await api.get<PaginatedResponse<AdminLog>>("/logs", {
    params: buildQueryParams(params),
  });
  return result as unknown as PaginatedResponse<AdminLog>;
}

export async function getAdminLogByIdApi(id: string): Promise<AdminLog> {
  const result = await api.get<ApiSuccessResponse<AdminLog>>(`/logs/${id}`);
  const body = result as unknown as ApiSuccessResponse<AdminLog>;
  return body.data;
}
