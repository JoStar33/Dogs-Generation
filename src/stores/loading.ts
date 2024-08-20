import { create } from 'zustand';

interface ILoadingStore {
  isLoading: boolean;
  setIsLoading: (isShow: boolean) => void;
}

export const useLoadingStore = create<ILoadingStore>((set) => ({
  isLoading: false,
  setIsLoading: (isShow: boolean) => set((state) => ({ ...state, isLoading: isShow })),
}));
