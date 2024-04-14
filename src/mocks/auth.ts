import { delay, http } from 'msw';
import { ISignInResponse } from '@/types/auth';
import environment from '@/environment';

const authHandler = [
  http.post(`${environment.serverUrl}/api/v1/auth/sign-in`, async () => {
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
