import type { ApiSuccessResponse } from "@/interface/common";
import type { CompanyProfile } from "@/interface/entities";
import { companyApi } from "./company-api";

export interface CompanyLoginCredentials {
  email: string;
  password: string;
}

export interface CompanyRegisterPayload extends CompanyLoginCredentials {
  name: string;
  password_confirmation: string;
  company_name: string;
  description?: string;
  website?: string;
  location?: string;
  industry?: string;
  contact_phone?: string;
}

export async function companyLoginApi(credentials: CompanyLoginCredentials) {
  const result = await companyApi.post<
    ApiSuccessResponse<{ company: CompanyProfile; token: string }>
  >("/auth/login", credentials);
  const body = result as unknown as ApiSuccessResponse<{
    company: CompanyProfile;
    token: string;
  }>;
  return body.data;
}

export async function companyRegisterApi(payload: CompanyRegisterPayload) {
  const result = await companyApi.post<
    ApiSuccessResponse<{ company: CompanyProfile; token: string }>
  >("/auth/register", payload);
  const body = result as unknown as ApiSuccessResponse<{
    company: CompanyProfile;
    token: string;
  }>;
  return body.data;
}

export async function companyLogoutApi() {
  await companyApi.post("/auth/logout");
}

export async function getCompanyMeApi(): Promise<CompanyProfile> {
  const result = await companyApi.get<ApiSuccessResponse<CompanyProfile>>("/auth/me");
  const body = result as unknown as ApiSuccessResponse<CompanyProfile>;
  return body.data;
}
