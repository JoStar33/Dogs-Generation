import { DefaultResponse, TGender, TYN } from '.';

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

export interface ISignUpForm {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  age: number;
  phoneNumber: string;
  agreement: TYN;
  gender: TGender;
  address: string;
  addressDetail: string;
}

/***************************** Request *****************************/
export interface ISignInRequest extends ISignInForm {}

export interface ISignUpRequest extends ISignUpForm {}

/***************************** Response *****************************/
export interface ISignInResponse extends DefaultResponse {
  value: {
    accessToken: string;
    id: number;
    name: string;
    email: string;
  };
}
