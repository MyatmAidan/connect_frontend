import type { ApiSuccessResponse } from "@/interface/common";

export function unwrapApiData<T>(response: unknown): T {
  if (
    response &&
    typeof response === "object" &&
    "data" in response &&
    (response as ApiSuccessResponse<T>).data !== undefined &&
    (response as ApiSuccessResponse<T>).data !== null
  ) {
    return (response as ApiSuccessResponse<T>).data;
  }

  return response as T;
}
