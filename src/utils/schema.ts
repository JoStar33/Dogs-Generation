import * as yup from 'yup';
import { validation } from '@/utils/validation';

const signInSchema = yup.object({
  email: validation.SIGN_IN_ID,
  password: validation.PASSWORD,
});

//컨텐츠 등록
const contentRegisterSchema = yup.object({
  title: validation.REQUIRED_TEXT_1({ minLength: 1, maxLength: 100 }),
  contentCategoryId: validation.REQUIRED_SELECT_BOX,
  tagTitleList: validation.REQUIRED_ARRAY,
  thumbnailImage: validation.IMAGE_FILE,
  subImages: validation.IMAGE_FILE_LENGTH({ minLength: 0, maxLength: 5 }),
  openDateTime: yup.string().when('status', {
    is: 'COMING_PUBLIC',
    then: () => validation.REQUIRED_TEXT_1({ minLength: 1, maxLength: 50 }),
  }),
  sourceName: validation.REQUIRED_TEXT_1({ minLength: 1, maxLength: 200 }),
  sourceLink: validation.REQUIRED_TEXT_1({ minLength: 1, maxLength: 200 }),
});

//아이디 찾기
const recoverIdSchema = yup.object({
  name: validation.REQUIRED_TEXT_4({ minLength: 1, maxLength: 20 }),
  email: validation.EMAIL,
});

//비밀번호 찾기
const recoverPassWordSchema = yup.object({
  email: validation.EMAIL,
});

export const schema = {
  signInSchema,
  contentRegisterSchema,
  recoverIdSchema,
  recoverPassWordSchema,
};
