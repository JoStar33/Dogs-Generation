import { ISignUpRequest } from '@/types/auth';
import { IDatabaseUser } from '../types/auth';
import { IValueResponseReturn } from '../types';

const userDatabase = {
  GET: {
    list: () => {
      const localStorageUserList = localStorage.getItem('userList') ?? '';
      const parsedUserList: IDatabaseUser[] = localStorageUserList ? JSON.parse(localStorageUserList) : [];
      return {
        code: 200,
        value: parsedUserList,
        message: '성공!',
      };
    },
    detail: ({ key, value }: { key: keyof IDatabaseUser; value: string }) => {
      try {
        const userList = (userDatabase.GET.list() as IValueResponseReturn<IDatabaseUser[]>).value;
        const findUser = userList.find((element) => element[key] === value);
        if (!findUser) {
          return {
            code: 400,
            message: '회원정보가 존재하지 않습니다!',
          };
        }
        return {
          code: 200,
          message: '성공!',
          value: findUser,
        };
      } catch (error: any) {
        console.log(error);
        return {
          code: 500,
          message: error,
        };
      }
    },
  },
  CREATE: {
    user: (request: ISignUpRequest) => {
      try {
        const userList = (userDatabase.GET.list() as IValueResponseReturn<IDatabaseUser[]>).value;
        const lastUserId = userList[userList.length] ? userList[userList.length].id : 0;
        localStorage.setItem('userList', JSON.stringify([...userList, { id: lastUserId + 1, ...request }]));
        return {
          code: 200,
          message: '회원가입 성공!',
        };
      } catch (error: any) {
        console.log(error);
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
