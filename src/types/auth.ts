import { DefaultResponse, TGender, TYN } from '.';

/*************************** Domain & DTO ***************************/
export interface IUser extends Omit<ISignUpForm, 'passwordConfirm' | 'agreement'> {
  id: number;
  accessToken: string;
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

export interface IUpdateUserInfoForm {
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
  value: IUser;
}

export interface IUserDetailResponse extends DefaultResponse {
  value: IUser;
}
