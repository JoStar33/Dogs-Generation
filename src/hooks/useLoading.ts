import { useLoadingStore } from '@/stores/loading';

export default function useLoading() {
  const { isLoading, setIsLoading } = useLoadingStore();

  return { isLoading, setIsLoading };
}
