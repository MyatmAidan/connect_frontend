import type { PaginatedResponse, ApiSuccessResponse } from "@/interface/common";
import type { Event } from "@/interface/entities";
import { api } from "./api";
import { buildQueryParams } from "@/lib/pagination";

export interface EventListParams {
  page?: number;
  per_page?: number;
  search?: string;
}

export interface EventInput {
  title: string;
  section: string;
  event_date: string;
  meeting_url?: string | null;
  photo?: File | null;
}

export async function getEventsApi(
  params: EventListParams = {},
): Promise<PaginatedResponse<Event>> {
  const result = await api.get<PaginatedResponse<Event>>("/events", {
    params: buildQueryParams(params),
  });
  return result as unknown as PaginatedResponse<Event>;
}

export async function getEventByIdApi(id: string): Promise<Event> {
  const result = await api.get<ApiSuccessResponse<Event>>(`/events/${id}`);
  const body = result as unknown as ApiSuccessResponse<Event>;
  return body.data;
}

function buildEventFormData(input: EventInput): FormData {
  const form = new FormData();
  form.append("title", input.title);
  form.append("section", input.section);
  form.append("event_date", input.event_date);
  if (input.meeting_url) {
    form.append("meeting_url", input.meeting_url);
  }
  if (input.photo) {
    form.append("photo", input.photo);
  }
  return form;
}

export async function createEventApi(input: EventInput): Promise<Event> {
  const result = await api.post<ApiSuccessResponse<Event>>("/events", buildEventFormData(input));
  const body = result as unknown as ApiSuccessResponse<Event>;
  return body.data;
}

export async function updateEventApi(id: string, input: Partial<EventInput>): Promise<Event> {
  const form = new FormData();
  if (input.title !== undefined) form.append("title", input.title);
  if (input.section !== undefined) form.append("section", input.section);
  if (input.event_date !== undefined) form.append("event_date", input.event_date);
  if (input.meeting_url !== undefined) {
    form.append("meeting_url", input.meeting_url ?? "");
  }
  if (input.photo) {
    form.append("photo", input.photo);
  }
  const result = await api.put<ApiSuccessResponse<Event>>(`/events/${id}`, form);
  const body = result as unknown as ApiSuccessResponse<Event>;
  return body.data;
}

export async function deleteEventApi(id: string): Promise<void> {
  await api.delete(`/events/${id}`);
}

export async function reorderEventsApi(ids: string[]): Promise<void> {
  await api.post("/events/reorder", { ids });
}
