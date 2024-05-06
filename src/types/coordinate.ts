/*************************** Domain & DTO ***************************/

import { DefaultResponse } from '.';

/**
 * @param lat 위도
 * @param lng 경도
 */
export interface ICoordinate {
  lat: number;
  lng: number;
}

export interface ICoordinateItem {
  id: number;
  title: string;
  coordinate: ICoordinate;
}

export interface ICoordinateDetailInfo {
  id: number;
  title: string;
  address: string;
  phoneNumber: string;
  image: string;
}

/******************************* Form ********************************/

/***************************** Request *****************************/

/***************************** Response *****************************/
export interface ICoordinateListResponse extends DefaultResponse {
  value: ICoordinateItem[];
}

export interface ICoordinateDetailInfoResponse extends DefaultResponse {
  value: ICoordinateDetailInfo;
}
