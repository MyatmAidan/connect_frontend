import type { ApiSuccessResponse, PaginatedResponse } from "@/interface/common";
import type { EventRegistration, EventRegistrationStatus } from "@/interface/entities";
import { api } from "./api";
import { buildQueryParams } from "@/lib/pagination";

export interface EventRegistrationListParams {
  page?: number;
  per_page?: number;
  status?: EventRegistrationStatus;
}

export async function getEventRegistrationsApi(
  eventId: string,
  params: EventRegistrationListParams = {},
): Promise<PaginatedResponse<EventRegistration>> {
  const result = await api.get<PaginatedResponse<EventRegistration>>(
    `/events/${eventId}/registrations`,
    { params: buildQueryParams(params) },
  );
  return result as unknown as PaginatedResponse<EventRegistration>;
}

export async function acceptEventRegistrationApi(
  eventId: string,
  registrationId: string,
): Promise<EventRegistration> {
  const result = await api.post<ApiSuccessResponse<EventRegistration>>(
    `/events/${eventId}/registrations/${registrationId}/accept`,
  );
  const body = result as unknown as ApiSuccessResponse<EventRegistration>;
  return body.data;
}

export async function rejectEventRegistrationApi(
  eventId: string,
  registrationId: string,
): Promise<EventRegistration> {
  const result = await api.post<ApiSuccessResponse<EventRegistration>>(
    `/events/${eventId}/registrations/${registrationId}/reject`,
  );
  const body = result as unknown as ApiSuccessResponse<EventRegistration>;
  return body.data;
}
