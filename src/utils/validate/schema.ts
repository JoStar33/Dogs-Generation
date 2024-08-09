import * as yup from 'yup';
import { validation } from '@/utils/validate/validation';

//로그인
const signInSchema = yup.object({
  email: validation.EMAIL,
  password: validation.PASSWORD,
});

//회원가입
const signUpSchema = yup.object({
  email: validation.EMAIL,
  password: validation.PASSWORD,
  passwordConfirm: validation.PASSWORD_CONFIRM,
  name: validation.REQUIRED_TEXT_6({ maxLength: 6, minLength: 1 }),
  age: validation.REQUIRED_NUMBER_2({ minNum: 15 }),
  phoneNumber: validation.PHONE_NUMBER,
  agreement: validation.REQUIRED_YES_CHECK,
  gender: validation.REQUIRED_GENDER,
  address: validation.REQUIRED_TEXT_1({ maxLength: 999, minLength: 1 }),
  addressDetail: validation.REQUIRED_TEXT_1({ maxLength: 999, minLength: 1 }),
});

//비밀번호 찾기
const recoverPassWordSchema = yup.object({
  email: validation.EMAIL,
});

export const schema = {
  signInSchema,
  signUpSchema,
  recoverPassWordSchema,
};
