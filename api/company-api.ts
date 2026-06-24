import axios from "axios";
import { useCompanyAuthStore } from "@/store/company-auth-store";
import { useLoadingStore } from "@/store/loading-store";
import { toast } from "sonner";
import i18n from "@/i18n/config";

const companyApiBaseUrl =
  process.env.NEXT_PUBLIC_COMPANY_API_BASE_URL ||
  "http://localhost:8000/api/v1/company";

export const companyApi = axios.create({
  baseURL: companyApiBaseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

companyApi.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    useLoadingStore.getState().incrementApiLoading();
    const token = useCompanyAuthStore.getState().token || "";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    const lng =
      (typeof i18n?.language === "string" && i18n.language) ||
      localStorage.getItem("i18nextLng") ||
      "en";
    config.headers["Accept-Language"] = lng;
  }
  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"];
  }
  return config;
});

companyApi.interceptors.response.use(
  (response) => {
    if (typeof window !== "undefined") {
      useLoadingStore.getState().decrementApiLoading();
    }
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (typeof window !== "undefined") {
      useLoadingStore.getState().decrementApiLoading();
      const status = error.response?.status;
      if (status === 401 || status === 419) {
        useCompanyAuthStore.getState().logout();
        window.dispatchEvent(new Event("company:unauthorized"));
      } else if (status === 403) {
        const requestUrl = String(error.config?.url ?? "");
        if (!requestUrl.includes("/auth/login")) {
          const message = error.response?.data?.message;
          toast.error(
            typeof message === "string" ? message : i18n.t("auth.unauthorized"),
          );
        }
      }
    }
    return Promise.reject(error);
  },
);
