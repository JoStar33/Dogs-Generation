//37.28214, 127.0644

import { ICoordinateDetailInfoResponse, ICoordinateListResponse } from '@/types/coordinate';
import { delay, http } from 'msw';
import { commonUrl } from '.';
import { coordinateList } from './fakeDatabase/resources/coordinate';

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
  http.get(`${coordinateUrl('/51')}`, async () => {
    await delay(2000);
    const coordinateDetailInfoResponse: ICoordinateDetailInfoResponse = {
      value: {
        id: 51,
        title: '케뷔와',
        address: '경기도 수원시 영통구 광교호수로 139 나루터 선착장 앞',
        type: 'CAFE',
        image: 'https://tong.visitkorea.or.kr/cms/resource/22/2892722_image2_1.jpg',
        phoneNumber: '070-7722-2777',
      },
      code: 200,
      detail: 'success',
      message: '성공',
    };
    return new Response(JSON.stringify(coordinateDetailInfoResponse), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
];

export default coordinateHandler;
