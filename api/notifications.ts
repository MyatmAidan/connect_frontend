import type { PaginatedResponse, ApiSuccessResponse } from "@/interface/common";
import type { NotificationLog, NotificationChannel } from "@/interface/entities";
import { api } from "./api";
import { buildQueryParams } from "@/lib/pagination";

export interface NotificationListParams {
  page?: number;
  per_page?: number;
  channel?: string;
  status?: string;
}

export interface BroadcastPayload {
  title: string;
  body: string;
  channel: NotificationChannel;
  user_ids?: string[];
}

export interface BroadcastResult {
  recipients: number;
  sent?: number;
  failed?: number;
}

export async function getNotificationsApi(
  params: NotificationListParams = {},
): Promise<PaginatedResponse<NotificationLog>> {
  const result = await api.get<PaginatedResponse<NotificationLog>>(
    "/notifications",
    { params: buildQueryParams(params) },
  );
  return result as unknown as PaginatedResponse<NotificationLog>;
}

export async function broadcastNotificationApi(
  payload: BroadcastPayload,
): Promise<BroadcastResult> {
  const result = await api.post<ApiSuccessResponse<BroadcastResult>>(
    "/notifications/broadcast",
    payload,
  );
  const body = result as unknown as ApiSuccessResponse<BroadcastResult>;
  return body.data;
}
