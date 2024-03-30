import { AxiosError } from 'axios';
import { QueryKey, UseQueryOptions, useQuery } from '@tanstack/react-query';

export interface IUsePrivateQuery {
  queryKey: any[];
  requestAPI: (...arg: any) => Promise<any>;
  options: Omit<UseQueryOptions<any, AxiosError<unknown, any>, any, QueryKey>, 'queryKey' | 'queryFn'>;
  requestQuery: object;
}

export default function useSimpleQuery<T>({ queryKey, requestAPI, options, requestQuery }: IUsePrivateQuery) {
  const fetcher = async () => await requestAPI(requestQuery);

  const OPTION = {
    queryFn: fetcher,
    queryKey,
    ...options,
  };

  const { data, isLoading, isSuccess, isError, isFetching, refetch } = useQuery<T, AxiosError>(OPTION);

  return {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    refetch,
  };
}
