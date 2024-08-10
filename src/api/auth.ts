import { requests } from '.';
import * as auth from '@/types/auth';

const Auth = {
  Post: {
    signIn: (body: auth.ISignInRequest) => requests.post<auth.ISignInResponse>('/auth/sign-in', body),
    signUp: (body: auth.ISignUpRequest) => requests.post('/auth/sign-up', body),
  },
};

export default Auth;
