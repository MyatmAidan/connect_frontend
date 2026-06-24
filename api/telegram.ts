import type { PaginatedResponse, ApiSuccessResponse } from "@/interface/common";
import type { NotificationLog, TelegramStats } from "@/interface/entities";
import { api } from "./api";
import { buildQueryParams } from "@/lib/pagination";

export async function getTelegramStatsApi(): Promise<TelegramStats> {
  const result = await api.get<ApiSuccessResponse<TelegramStats>>(
    "/telegram/stats",
  );
  const body = result as unknown as ApiSuccessResponse<TelegramStats>;
  return body.data;
}

export async function getTelegramLogsApi(
  params: { page?: number; per_page?: number } = {},
): Promise<PaginatedResponse<NotificationLog>> {
  const result = await api.get<PaginatedResponse<NotificationLog>>(
    "/telegram/logs",
    { params: buildQueryParams(params) },
  );
  return result as unknown as PaginatedResponse<NotificationLog>;
}
