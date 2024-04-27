import { loadingState } from '@/stores/loading';
import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

export default function useLoading() {
  const [loadingValue, setLoadingValue] = useRecoilState(loadingState);
  const isLoading = loadingValue.isLoading;
  const setIsLoading = (value: boolean) => setLoadingValue((prev) => ({ ...prev, isLoading: value }));
  const resetLoading = useResetRecoilState(loadingState);
  React.useEffect(() => {
    resetLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { isLoading, setIsLoading };
}
