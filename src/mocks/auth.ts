import { delay, http } from 'msw';
import { ISignInResponse } from '@/types/auth';
import { commonUrl } from '.';

const authUrl = (path?: string) => `${commonUrl(`/auth${path}`)}`;

const authHandler = [
  http.post(`${authUrl('/sign-in')}`, async () => {
    await delay(1000);
    const signInResponse: ISignInResponse = {
      value: { id: 123453245, accessToken: '12dasfjkdfvahjvf', email: '26dfgdg', name: 'user' },
      code: 200,
      detail: 'success',
      message: '성공',
    };
    return new Response(JSON.stringify(signInResponse), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
];

export default authHandler;
