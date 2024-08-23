import { http } from 'msw';
import { commonUrl } from '@/mocks';
import { contentsDatabase } from '@/mocks/fakeDatabase/resources/contents';
import { IContentsRegisterRequest } from '@/types/contents';
import getUserInfo from '@/mocks/utils/getUserInfo';
import CustomResponse from '@/mocks/utils/customResponse';

const contentsUrl = (path?: string) => `${commonUrl(`/contents${path ?? ''}`)}`;

const contentsPostHandler = [
  http.post(`${contentsUrl()}`, async ({ request }) => {
    try {
      const data = (await request.json()) as IContentsRegisterRequest;
      const { email } = getUserInfo(request);
      contentsDatabase.Create.write(data, email);
    } catch (error: any) {
      return CustomResponse({
        code: 500,
        message: error,
        value: undefined,
      });
    }
    return CustomResponse({
      code: 200,
      message: '컨텐츠 등록 성공!',
      value: undefined,
    });
  }),
];

export default contentsPostHandler;
