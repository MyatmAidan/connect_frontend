import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getCurrentUserApi } from "@/api/auth";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string | null;
  role?: string;
  status?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  refetchUser: (options?: { silent?: boolean }) => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      login: (user, token) =>
        set({ user, token, isAuthenticated: true, isLoading: false }),
      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        }),
      setUser: (user) => set({ user }),
      setLoading: (isLoading) => set({ isLoading }),
      refetchUser: async (options?: { silent?: boolean }) => {
        const silent = options?.silent ?? false;
        if (!silent) set({ isLoading: true });
        try {
          const data = await getCurrentUserApi();
          set({ user: data, isAuthenticated: true });
        } catch {
          set({ user: null, token: null, isAuthenticated: false });
        } finally {
          if (!silent) set({ isLoading: false });
        }
      },
    }),
    {
      name: "connect-auth",
      partialize: (state) => ({
        user: state.user,
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
