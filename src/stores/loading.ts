import { atom } from 'recoil';
import recoilKeys from '@/constants/recoilKeys';

interface ILoadingState {
  isLoading: boolean;
}

export const loadingState = atom<ILoadingState>({
  key: recoilKeys.LOADING,
  default: {
    isLoading: false,
  },
});
