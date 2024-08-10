export interface ICommonResponseReturn {
  code: number;
  message: string;
}

export interface IValueResponseReturn<T> {
  data: T;
  code: number;
  message: string;
}

export type ICommonResponse = (args?: any) => ICommonResponseReturn;

export type IValueResponse<T = any> = (args?: any) => IValueResponseReturn<T>;

type IDatabaseActionType = 'GET' | 'CREATE' | 'UPDATE' | 'DELETE';
type IDatabaseQuery = Record<string, ICommonResponse | IValueResponse>;

export type TDatabase = Record<IDatabaseActionType, IDatabaseQuery>;
