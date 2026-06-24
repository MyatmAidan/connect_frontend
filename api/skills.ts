import type { PaginatedResponse, ApiSuccessResponse } from "@/interface/common";
import type { Skill } from "@/interface/entities";
import { api } from "./api";
import { buildQueryParams } from "@/lib/pagination";

export interface SkillListParams {
  page?: number;
  per_page?: number;
  search?: string;
  category_id?: string;
}

export interface SkillPayload {
  name: string;
  category_id?: string | null;
  image?: File | null;
}

function buildSkillFormData(input: SkillPayload): FormData {
  const form = new FormData();
  form.append("name", input.name);
  if (input.category_id) {
    form.append("category_id", input.category_id);
  }
  if (input.image) {
    form.append("image", input.image);
  }
  return form;
}

export async function getSkillsApi(
  params: SkillListParams = {},
): Promise<PaginatedResponse<Skill>> {
  const result = await api.get<PaginatedResponse<Skill>>("/skills", {
    params: buildQueryParams(params),
  });
  return result as unknown as PaginatedResponse<Skill>;
}

export async function createSkillApi(payload: SkillPayload): Promise<Skill> {
  const result = await api.post<ApiSuccessResponse<Skill>>("/skills", buildSkillFormData(payload));
  const body = result as unknown as ApiSuccessResponse<Skill>;
  return body.data;
}

export async function updateSkillApi(
  id: string,
  payload: Partial<SkillPayload>,
): Promise<Skill> {
  const form = new FormData();
  if (payload.name !== undefined) form.append("name", payload.name);
  if (payload.category_id !== undefined && payload.category_id) {
    form.append("category_id", payload.category_id);
  }
  if (payload.image) {
    form.append("image", payload.image);
  }
  const result = await api.put<ApiSuccessResponse<Skill>>(`/skills/${id}`, form);
  const body = result as unknown as ApiSuccessResponse<Skill>;
  return body.data;
}

export async function deleteSkillApi(id: string): Promise<void> {
  await api.delete(`/skills/${id}`);
}
