import { DefaultResponse } from '.';

/*************************** Domain & DTO ***************************/
export interface IContentsListElement {
  id: number;
  image: string;
  title: string;
  createdAt: string;
  description: string;
  author: string;
}

/******************************* Form ********************************/

/***************************** Request *****************************/

/***************************** Response *****************************/
export interface IContentsListResponse extends DefaultResponse {
  value: IContentsListElement[];
}
