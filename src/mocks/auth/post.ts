import { ISignInRequest, ISignUpRequest } from '@/types/auth';
import userDatabase from '../fakeDatabase/resources/user';
import { delay, http } from 'msw';
import { commonUrl } from '..';
import CustomResponse from '../utils/customResponse';
const authUrl = (path?: string) => `${commonUrl(`/auth${path}`)}`;

const authPostHandler = [
  http.post(`${authUrl('/sign-in')}`, async ({ request }) => {
    const data = (await request.json()) as ISignInRequest;
    const userDetail = userDatabase.Get.detail({ key: 'email', value: data.email });
    if (userDetail.code === 400) return CustomResponse({ code: 400, message: '유저 정보를 찾을 수 없습니다.', value: undefined });
    if (userDetail.code === 500)
      return CustomResponse({
        code: 500,
        message: '서버상에 오류가 발생했습니다!',
        value: undefined,
      });

    if (userDetail.value?.password !== data.password) {
      return CustomResponse({
        code: 400,
        message: '비밀번호가 일치하지않습니다!',
        value: undefined,
      });
    }

    await delay(1000);
    const accessToken = `${userDetail.value.email}/${userDetail.value.id}`;
    return CustomResponse({
      code: 200,
      message: '로그인 성공!',
      value: {
        ...userDetail.value,
        accessToken,
      },
    });
  }),
  http.post(`${authUrl('/sign-up')}`, async ({ request }) => {
    const data = (await request.json()) as ISignUpRequest;
    const userDetail = userDatabase.Get.detail({ key: 'email', value: data.email });

    if (userDetail.code === 200) {
      return CustomResponse({
        code: 400,
        message: '이미 존재하는 이메일입니다.',
        value: undefined,
      });
    }

    const createdInfo = userDatabase.Create.user(data);

    if (createdInfo.code !== 200) {
      return CustomResponse({
        code: 500,
        message: createdInfo.message,
        value: undefined,
      });
    }

    return CustomResponse({
      code: 200,
      message: '성공!',
      value: undefined,
    });
  }),
];

export default authPostHandler;
