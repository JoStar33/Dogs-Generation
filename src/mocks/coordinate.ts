//37.28214, 127.0644

import { ICoordinateListResponse } from '@/types/coordinate';
import { delay, http } from 'msw';
import { commonUrl } from '.';
import { coordinateList } from './fakeDatabase/resources/coordinate';
import { marketList } from './fakeDatabase/resources/market';
import CustomResponse from './utils/customResponse';

//coordinate
const coordinateUrl = (path?: string) => `${commonUrl(`/coordinate${path ?? ''}`)}`;

const coordinateHandler = [
  http.get(`${coordinateUrl()}`, async () => {
    await delay(2000);
    const coordinateListResponse: ICoordinateListResponse = {
      value: coordinateList,
      code: 200,
      detail: 'success',
      message: '성공',
    };
    return new Response(JSON.stringify(coordinateListResponse), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
  http.get(`${coordinateUrl('/*')}`, async ({ request }) => {
    await delay(2000);
    const urlObj = new URL(request.url);
    const pathSegments = urlObj.pathname.split('/');
    const lastPathSegment = pathSegments[pathSegments.length - 1];
    const marketId = parseInt(lastPathSegment);
    if (isNaN(parseInt(lastPathSegment))) {
      return CustomResponse({
        code: 404,
        message: '마켓정보를 찾을 수 없습니다.',
      });
    }
    const marketInfo = marketList.find((element) => element.id === marketId);
    if (!marketInfo) {
      return CustomResponse({
        code: 404,
        message: '마켓정보를 찾을 수 없습니다.',
      });
    }
    return CustomResponse({
      code: 200,
      value: marketInfo,
      message: '성공!',
    });
  }),
];

export default coordinateHandler;
