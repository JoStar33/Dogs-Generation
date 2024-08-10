import { ISignUpRequest } from '@/types/auth';
import { IDatabaseUser } from '../types/auth';
import { IValueResponseReturn, TDatabase } from '../types';

const userDatabase: TDatabase = {
  GET: {
    userList: () => {
      const localStorageUserList = localStorage.getItem('userList') ?? '';
      const parsedUserList: IDatabaseUser[] = JSON.parse(localStorageUserList);
      return {
        code: 200,
        data: parsedUserList,
        message: '성공!',
      };
    },
  },
  CREATE: {
    signUpUser: (user: ISignUpRequest) => {
      try {
        const userList = (userDatabase.GET.userList() as IValueResponseReturn<IDatabaseUser[]>).data;
        const lastUserId = userList[userList.length].id ?? 0;
        localStorage.setItem('userList', JSON.stringify([...userList, { id: lastUserId + 1, ...user }]));
        return {
          code: 200,
          message: '회원가입 성공!',
        };
      } catch (error: any) {
        return {
          code: 500,
          message: error,
        };
      }
    },
  },
  UPDATE: {},
  DELETE: {},
};

export default userDatabase;
