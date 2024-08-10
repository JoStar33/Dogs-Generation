import { delay, http } from 'msw';
import { ISignInRequest, ISignUpRequest } from '@/types/auth';
import { commonUrl } from '.';
import userDatabase from './fakeDatabase/userDatabase';

const authUrl = (path?: string) => `${commonUrl(`/auth${path}`)}`;

const authHandler = [
  http.post(`${authUrl('/sign-in')}`, async ({ request }) => {
    const data = (await request.json()) as ISignInRequest;
    const userDetail = userDatabase.GET.detail({ key: 'email', value: data.email });
    if (userDetail.code === 400)
      return new Response(
        JSON.stringify({
          code: 400,
          message: '유저 정보를 찾을 수 없습니다.',
          value: undefined,
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    if (userDetail.code === 500)
      return new Response(
        JSON.stringify({
          code: 500,
          message: '서버상에 오류가 발생했습니다!',
          value: undefined,
        }),

        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    if (userDetail.value?.password !== data.password) {
      return new Response(
        JSON.stringify({
          code: 400,
          message: '비밀번호가 일치하지않습니다!',
          value: undefined,
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    await delay(1000);

    return new Response(
      JSON.stringify({
        code: 200,
        message: '로그인 성공!',
        value: {
          ...userDetail.value,
          accessToken: 'test',
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }),
  http.post(`${authUrl('/sign-up')}`, async ({ request }) => {
    const data = (await request.json()) as ISignUpRequest;
    const userDetail = userDatabase.GET.detail({ key: 'email', value: data.email });

    if (userDetail.code === 200) {
      return new Response(
        JSON.stringify({
          code: 400,
          message: '이미 존재하는 이메일입니다.',
          value: undefined,
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    const createdInfo = userDatabase.CREATE.user(data);

    if (createdInfo.code !== 200) {
      return new Response(
        JSON.stringify({
          code: 500,
          message: createdInfo.message,
          value: undefined,
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }
    return new Response(
      JSON.stringify({
        code: 200,
        message: '성공!',
        value: undefined,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }),
];

export default authHandler;
