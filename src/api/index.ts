import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { DefaultResponse } from '@/types';
import environment from '@/environment';
import { storage } from '@/utils/storage';
import routerPath from '@/constants/routerPath';

// eslint-disable-next-line react-refresh/only-export-components
const VERSION = '/v1';
const URL_API = '/api';

const config: AxiosRequestConfig = {
  baseURL: environment.serverUrl + URL_API + VERSION,
  withCredentials: false,
};

const responseBody = <T extends Object = DefaultResponse>(response: AxiosResponse<T>) => response.data;

export const instance = axios.create(config);

instance.interceptors.request.use(
  (config) => {
    try {
      const accessToken = storage.getAccessTokenLocalStorageItem();
      if (accessToken) {
        if (!instance.defaults.headers.common.Authorization) {
          instance.defaults.headers.common['Authorization'] = accessToken;
        }
      }
    } catch (error) {
      console.log(error);
    }
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const { config, response } = error;
    const shouldMissingToken = response?.status === 403;
    if (shouldMissingToken) {
      const accessToken = storage.getAccessTokenLocalStorageItem();
      if (accessToken) {
        instance.defaults.headers.common['Authorization'] = accessToken;
        const freshRequest = {
          ...config,
          headers: { ...config.headers, Authorization: accessToken },
        };
        return instance.request(freshRequest);
      }
      window.location.href = routerPath.SIGN_IN;
      return;
    }
    return Promise.reject(error);
  },
);


export const requests = {
  get: <T extends DefaultResponse = DefaultResponse>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T extends DefaultResponse = DefaultResponse>(url: string, body: object | FormData) =>
    instance.post<T>(url, body).then(responseBody),
  put: <T extends DefaultResponse = DefaultResponse>(url: string, body: object | FormData) => instance.put<T>(url, body).then(responseBody),
  delete: <T extends DefaultResponse = DefaultResponse>(url: string) => instance.delete<T>(url).then(responseBody),
  patch: <T extends DefaultResponse = DefaultResponse>(url: string, body: object | FormData | undefined) =>
    instance.patch<T>(url, body).then(responseBody),
};
