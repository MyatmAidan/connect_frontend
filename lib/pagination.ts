import type { PaginatedResponse } from "@/interface/common";
import type { ApiResponse } from "@/interface/DataTable";

export const DEFAULT_TABLE_PAGE_SIZE = 10;
export const TABLE_PAGE_SIZE_OPTIONS = [10, 20, 50, 100] as const;
export type TablePageSizeOption = (typeof TABLE_PAGE_SIZE_OPTIONS)[number] | "all";

export function toTableResponse<T>(
  response: PaginatedResponse<T>,
): ApiResponse<T> {
  const data = response.data;
  return {
    data: Array.isArray(data) ? data : [],
    totalCount: response.meta?.total ?? (Array.isArray(data) ? data.length : 0),
  };
}

export interface ListParams {
  page?: number;
  per_page?: number;
  search?: string;
  [key: string]: string | number | undefined;
}

export function buildQueryParams(params: object): Record<string, string> {
  const query: Record<string, string> = {};
  Object.entries(params as Record<string, unknown>).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      query[key] = String(value);
    }
  });
  return query;
}
