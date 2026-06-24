import type { ApiSuccessResponse } from "@/interface/common";
import type { Category } from "@/interface/entities";
import { companyApi } from "./company-api";

export async function getCompanyCategoriesApi(): Promise<Category[]> {
  const result = await companyApi.get<ApiSuccessResponse<Category[]>>("/categories");
  const body = result as unknown as ApiSuccessResponse<Category[]>;
  return body.data;
}
