import { requests } from '.';
import * as auth from '@/types/auth';

const Auth = {
  Post: {
    signIn: (body: auth.ISignInRequest) => requests.post<auth.ISignInResponse>('/auth/sign-in', body),
  },
};

export default Auth;
