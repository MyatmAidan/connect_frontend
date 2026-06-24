import { create } from "zustand";

interface LoadingState {
  apiLoadingCount: number;
  incrementApiLoading: () => void;
  decrementApiLoading: () => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  apiLoadingCount: 0,
  incrementApiLoading: () =>
    set((s) => ({ apiLoadingCount: s.apiLoadingCount + 1 })),
  decrementApiLoading: () =>
    set((s) => ({ apiLoadingCount: Math.max(0, s.apiLoadingCount - 1) })),
}));
