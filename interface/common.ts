export interface ApiSuccessResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export interface PaginationMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from?: number | null;
  to?: number | null;
}

export interface PaginatedResponse<T> {
  success: boolean;
  message?: string;
  data: T[];
  meta: PaginationMeta;
  links?: {
    first?: string | null;
    last?: string | null;
    prev?: string | null;
    next?: string | null;
  };
}

export type ApiValidationErrors = Record<string, string[] | string>;

export interface ApiAxiosError {
  response?: {
    status?: number;
    data?: {
      message?: string;
      errors?: ApiValidationErrors;
    };
  };
}
