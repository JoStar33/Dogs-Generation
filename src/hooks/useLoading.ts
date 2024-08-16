import { loadingState } from '@/stores/loading';
import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

export default function useLoading() {
  const [loadingValue, setLoadingValue] = useRecoilState(loadingState);
  const resetLoading = useResetRecoilState(loadingState);

  const isLoading = loadingValue.isLoading;
  const setIsLoading = (value: boolean) => setLoadingValue((prev) => ({ ...prev, isLoading: value }));

  React.useEffect(() => {
    return () => {
      resetLoading();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { isLoading, setIsLoading };
}
