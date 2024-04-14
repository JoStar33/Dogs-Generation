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

/***************************** Response *****************************/
