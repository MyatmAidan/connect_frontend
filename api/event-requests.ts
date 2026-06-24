import type { PaginatedResponse, ApiSuccessResponse } from "@/interface/common";
import type { EventRequest, EventRequestStatus } from "@/interface/entities";
import { api } from "./api";
import { buildQueryParams } from "@/lib/pagination";

export interface EventRequestListParams {
  page?: number;
  per_page?: number;
  status?: EventRequestStatus;
}

export async function getEventRequestsApi(
  params: EventRequestListParams = {},
): Promise<PaginatedResponse<EventRequest>> {
  const result = await api.get<PaginatedResponse<EventRequest>>("/event-requests", {
    params: buildQueryParams(params),
  });
  return result as unknown as PaginatedResponse<EventRequest>;
}

export async function getEventRequestByIdApi(id: string): Promise<EventRequest> {
  const result = await api.get<ApiSuccessResponse<EventRequest>>(`/event-requests/${id}`);
  const body = result as unknown as ApiSuccessResponse<EventRequest>;
  return body.data;
}

export async function approveEventRequestApi(id: string): Promise<EventRequest> {
  const result = await api.post<ApiSuccessResponse<EventRequest>>(`/event-requests/${id}/approve`);
  const body = result as unknown as ApiSuccessResponse<EventRequest>;
  return body.data;
}

export async function rejectEventRequestApi(id: string): Promise<EventRequest> {
  const result = await api.post<ApiSuccessResponse<EventRequest>>(`/event-requests/${id}/reject`);
  const body = result as unknown as ApiSuccessResponse<EventRequest>;
  return body.data;
}
