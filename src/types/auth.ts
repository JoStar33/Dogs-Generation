import { DefaultResponse } from '.';

/*************************** Domain & DTO ***************************/
export interface IUser {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

/******************************* Form ********************************/
export interface ISignInForm {
  email: string;
  password: string;
}

/***************************** Request *****************************/
export interface ISignInRequest extends ISignInForm {}

/***************************** Response *****************************/
export interface ISignInResponse extends DefaultResponse {
  value: {
    accessToken: string;
    id: number;
    name: string;
    email: string;
  };
}
