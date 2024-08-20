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
export interface IContentsRegisterForm {
  image: string[];
  title: string;
  description?: string;
}

/***************************** Request *****************************/

/***************************** Response *****************************/
export interface IContentsListResponse extends DefaultResponse {
  value: IContentsListElement[];
}
