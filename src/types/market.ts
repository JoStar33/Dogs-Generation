import { DefaultResponse, TMarketType } from '.';
import { IReview } from './review';

/*************************** Domain & DTO ***************************/
export interface IMarketListElement {
  id: number;
  title: string;
  address: string;
  averageRate: number;
  image: string;
  type: TMarketType;
  phoneNumber: string;
}

export interface IMarket {
  id: number;
  title: string;
  description: string;
  phoneNumber: string;
  address: string;
  image: string;
  averageRate: number;
  menus: IMenu[];
  reviews: IReview[];
}

export interface IMenu {
  id: string;
  title: string;
  price: number;
  description: string;
}

/******************************* Form ********************************/

/***************************** Request *****************************/
export interface IMarketListRequest {
  searchKeyword: string;
}

/***************************** Response *****************************/
export interface IMarketListResponse extends DefaultResponse {
  value: IMarketListElement[];
}
