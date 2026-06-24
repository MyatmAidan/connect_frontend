import type { PaginatedResponse, ApiSuccessResponse } from "@/interface/common";
import type { DeveloperProfile } from "@/interface/entities";
import { api } from "./api";
import { buildQueryParams } from "@/lib/pagination";

export interface DeveloperProfileListParams {
  page?: number;
  per_page?: number;
  role?: string;
  skill?: string;
  experience_level?: string;
}

export interface UpdateDeveloperProfilePayload {
  profile_photo?: string | null;
  headline?: string | null;
  bio?: string | null;
  category_id?: string | null;
  experience_level?: string | null;
  location?: string | null;
  github_url?: string | null;
  linkedin_url?: string | null;
  portfolio_url?: string | null;
  is_public?: boolean;
  skill_ids?: string[];
}

export async function getDeveloperProfilesApi(
  params: DeveloperProfileListParams = {},
): Promise<PaginatedResponse<DeveloperProfile>> {
  const result = await api.get<PaginatedResponse<DeveloperProfile>>(
    "/developer-profiles",
    { params: buildQueryParams(params) },
  );
  return result as unknown as PaginatedResponse<DeveloperProfile>;
}

export async function getDeveloperProfileByIdApi(
  id: string,
): Promise<DeveloperProfile> {
  const result = await api.get<ApiSuccessResponse<DeveloperProfile>>(
    `/developer-profiles/${id}`,
  );
  const body = result as unknown as ApiSuccessResponse<DeveloperProfile>;
  return body.data;
}

export async function updateDeveloperProfileApi(
  id: string,
  payload: UpdateDeveloperProfilePayload,
): Promise<DeveloperProfile> {
  const result = await api.put<ApiSuccessResponse<DeveloperProfile>>(
    `/developer-profiles/${id}`,
    payload,
  );
  const body = result as unknown as ApiSuccessResponse<DeveloperProfile>;
  return body.data;
}

export async function deleteDeveloperProfileApi(id: string): Promise<void> {
  await api.delete(`/developer-profiles/${id}`);
}
