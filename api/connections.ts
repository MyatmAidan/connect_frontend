import type { PaginatedResponse, ApiSuccessResponse } from "@/interface/common";
import type { Connection } from "@/interface/entities";
import { api } from "./api";
import { buildQueryParams } from "@/lib/pagination";

export interface ConnectionListParams {
  page?: number;
  per_page?: number;
}

export async function getConnectionsApi(
  params: ConnectionListParams = {},
): Promise<PaginatedResponse<Connection>> {
  const result = await api.get<PaginatedResponse<Connection>>("/connections", {
    params: buildQueryParams(params),
  });
  return result as unknown as PaginatedResponse<Connection>;
}

export async function getConnectionByIdApi(id: string): Promise<Connection> {
  const result = await api.get<ApiSuccessResponse<Connection>>(
    `/connections/${id}`,
  );
  const body = result as unknown as ApiSuccessResponse<Connection>;
  return body.data;
}

export async function deleteConnectionApi(id: string): Promise<void> {
  await api.delete(`/connections/${id}`);
}
