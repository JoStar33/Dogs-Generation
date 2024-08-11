import { ISignUpRequest } from '@/types/auth';
import { IDatabaseUser } from '../../types/auth';

const userDatabase = {
  Get: {
    list: () => {
      const localStorageUserList = localStorage.getItem('userList') ?? '';
      const parsedUserList: IDatabaseUser[] = localStorageUserList ? JSON.parse(localStorageUserList) : [];
      return {
        code: 200,
        value: parsedUserList,
        message: '회원목록 조회 성공',
      };
    },
    detail: ({ key, value }: { key: keyof IDatabaseUser; value: string }) => {
      try {
        const userList = userDatabase.Get.list().value;
        const findUser = userList.find((element) => element[key] === value);
        if (!findUser) {
          return {
            code: 400,
            message: '회원정보가 없음.',
          };
        }
        return {
          code: 200,
          message: '회원 상세정보 조회 성공.',
          value: findUser,
        };
      } catch (error: any) {
        return {
          code: 500,
          message: '사용자 상세정보 조회중 에러발생.',
        };
      }
    },
  },
  Create: {
    user: (request: ISignUpRequest) => {
      try {
        const userList = userDatabase.Get.list().value;
        const lastUserId = userList[userList.length] ? userList[userList.length].id : 0;
        const newUserInfo = {
          id: lastUserId + 1,
          ...request,
          passwordConfirm: undefined,
        };
        localStorage.setItem('userList', JSON.stringify([...userList, newUserInfo]));
        return {
          code: 200,
          message: '사용자 등록 성공.',
        };
      } catch (error: any) {
        return {
          code: 500,
          message: '사용자 정보 등록중 에러발생',
        };
      }
    },
  },
  Update: {
    user: (request: ISignUpRequest) => {
      try {
        const userList = userDatabase.Get.list().value;
        const lastUserId = userList[userList.length] ? userList[userList.length].id : 0;
        localStorage.setItem('userList', JSON.stringify([...userList, { id: lastUserId + 1, ...request }]));
        return {
          code: 200,
          message: '사용자 등록 성공.',
        };
      } catch (error: any) {
        return {
          code: 500,
          message: '사용자 정보 수정중 에러발생',
        };
      }
    },
  },
  Delete: {},
};

export default userDatabase;
