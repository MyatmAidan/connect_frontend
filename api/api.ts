import axios from "axios";
import { useLoadingStore } from "@/store/loading-store";
import { useAuthStore } from "@/store/auth-store";
import { deleteAuthCookie } from "@/lib/auth-cookie";
import i18n from "@/i18n/config";
import { toast } from "sonner";

const apiBaseUrl =
  process.env.NEXT_PUBLIC_APP_API_BASE_URL || "http://localhost:8000/api/v1/admin";

const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

function getAuthToken() {
  if (typeof window === "undefined") return "";
  return useAuthStore.getState().token || "";
}

api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      useLoadingStore.getState().incrementApiLoading();
      const token = getAuthToken();
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
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
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
        useAuthStore.getState().logout();
        void deleteAuthCookie();
        window.dispatchEvent(new Event("auth:unauthorized"));
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

export { api };
