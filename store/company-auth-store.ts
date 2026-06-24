import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CompanyProfile } from "@/interface/entities";
import { getCompanyMeApi } from "@/api/company-auth";

interface CompanyAuthState {
  company: CompanyProfile | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (company: CompanyProfile, token: string) => void;
  logout: () => void;
  setCompany: (company: CompanyProfile | null) => void;
  refetchCompany: () => Promise<void>;
}

export const useCompanyAuthStore = create<CompanyAuthState>()(
  persist(
    (set) => ({
      company: null,
      token: null,
      isAuthenticated: false,
      login: (company, token) =>
        set({ company, token, isAuthenticated: true }),
      logout: () =>
        set({ company: null, token: null, isAuthenticated: false }),
      setCompany: (company) => set({ company }),
      refetchCompany: async () => {
        try {
          const data = await getCompanyMeApi();
          set({ company: data, isAuthenticated: true });
        } catch {
          set({ company: null, token: null, isAuthenticated: false });
        }
      },
    }),
    {
      name: "connect-company-auth",
      partialize: (state) => ({
        company: state.company,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
      onRehydrateStorage: () => (state) => {
        if (state?.token) {
          state.isAuthenticated = true;
        }
      },
    },
  ),
);
