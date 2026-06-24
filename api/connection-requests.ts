import type { PaginatedResponse } from "@/interface/common";
import type { ConnectionRequest, ConnectionRequestStatus } from "@/interface/entities";
import { api } from "./api";
import { buildQueryParams } from "@/lib/pagination";

export interface ConnectionRequestListParams {
  page?: number;
  per_page?: number;
  status?: ConnectionRequestStatus;
}

export async function getConnectionRequestsApi(
  params: ConnectionRequestListParams = {},
): Promise<PaginatedResponse<ConnectionRequest>> {
  const result = await api.get<PaginatedResponse<ConnectionRequest>>(
    "/connection-requests",
    { params: buildQueryParams(params) },
  );
  return result as unknown as PaginatedResponse<ConnectionRequest>;
}
