import { DefaultBodyType, StrictRequest } from 'msw';
import { crypto } from '@/utils/crypto';

export default function getUserInfo(request: StrictRequest<DefaultBodyType>) {
  const accessToken = request.headers.get('Authorization');
  if (!accessToken)
    return {
      email: 'error',
      userId: 'error',
    };
  const decryptionToken = crypto.decryptionDES(accessToken) ?? '';
  const splitData = decryptionToken.replaceAll('"', '').split('/');
  return {
    email: splitData[0],
    userId: splitData[1],
  };
}
