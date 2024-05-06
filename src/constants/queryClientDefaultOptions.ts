import { QueryClientConfig } from '@tanstack/react-query';

const queryClientDefaultOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      retryDelay: 1,
      retry: 0,
    },
  },
} as const;

export default queryClientDefaultOptions;
