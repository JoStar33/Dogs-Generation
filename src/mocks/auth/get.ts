import { http } from 'msw';
import userDatabase from '@/mocks/fakeDatabase/resources/user';
import CustomResponse from '@/mocks/utils/customResponse';
import { commonUrl } from '@/mocks';
import { crypto } from '@/utils/crypto';

const authUrl = (path?: string) => `${commonUrl(`/auth${path ?? ''}`)}`;

const authGetHandler = [
  http.get(`${authUrl('/user')}`, async ({ request }) => {
    const accessToken = request.headers.get('Authorization');
    if (!accessToken) return CustomResponse({ value: undefined, message: '토큰이 없습니다', code: 403 });
    const decryptionToken = crypto.decryptionDES(accessToken) ?? '';
    const splitData = decryptionToken.replaceAll('"', '').split('/');
    const userDetail = userDatabase.Get.detail({ key: 'email', value: splitData[0] });

    return CustomResponse({ value: userDetail.value, message: userDetail.message, code: userDetail.code });
  }),
];

export default authGetHandler;
