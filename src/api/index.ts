import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { DefaultResponse } from '@/types';
import environment from '@/environment';
import { storage } from '@/utils/storage';
import routerPath from '@/constants/routerPath';
import { useModalStore } from '@/stores/modal';

// eslint-disable-next-line react-refresh/only-export-components
const VERSION = '/v1';
const URL_API = '/api';

const config: AxiosRequestConfig = {
  baseURL: environment.serverUrl + URL_API + VERSION,
  withCredentials: false,
};

const { setModalState, resetModalState } = useModalStore.getState();
const responseBody = <T extends Object = DefaultResponse>(response: AxiosResponse<T>) => response.data;

export const instance = axios.create(config);

instance.interceptors.request.use(
  (config) => {
    try {
      const accessToken = storage.getAccessTokenLocalStorageItem();
      if (!accessToken) return config;
      if (!instance.defaults.headers.common.Authorization) {
        instance.defaults.headers.common['Authorization'] = accessToken;
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

let checkDidItWorkGetAccessToken = false;

instance.interceptors.response.use(
  (config) => {
    checkDidItWorkGetAccessToken = false;
    return config;
  },
  async (error) => {
    const { config, response } = error;
    const inappropriateToken = response?.status === 400;
    const shouldMissingToken = response?.status === 403;
    if (shouldMissingToken && !checkDidItWorkGetAccessToken) {
      const accessToken = storage.getAccessTokenLocalStorageItem();
      if (!accessToken) {
        window.location.href = routerPath.HOME;
        return;
      }
      instance.defaults.headers.common['Authorization'] = accessToken;
      const freshRequest = {
        ...config,
        headers: { 
          ...config.headers, 
          Authorization: accessToken 
        },
      };
      checkDidItWorkGetAccessToken = true;
      return instance.request(freshRequest);
    }
    if (shouldMissingToken && checkDidItWorkGetAccessToken) {
      checkDidItWorkGetAccessToken = false;
      setModalState((prev) => (
        { 
          ...prev, 
          type: 'ALERT', 
          titleText: '부적절한 접근입니다.', 
          confirmButtonText: '확인', 
          onClickConfirm: () => {
            storage.removeAccessToken();
            window.location.href = routerPath.HOME;
            resetModalState();
          },
        }
      ));
      return;
    }
    if (inappropriateToken) {
      setModalState((prev) => (
        { 
          ...prev, 
          type: 'ALERT', 
          titleText: '부적절한 접근입니다.', 
          confirmButtonText: '확인', 
          onClickConfirm: () => {
            storage.removeAccessToken();
            window.location.href = routerPath.HOME;
            resetModalState();
          },
        }
      ));
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
