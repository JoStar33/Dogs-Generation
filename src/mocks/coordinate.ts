//37.28214, 127.0644

import { ICoordinateListResponse } from '@/types/coordinate';
import { delay, http } from 'msw';
import { commonUrl } from '.';

//coordinate
const coordinateUrl = (path?: string) => `${commonUrl(`/coordinate${path ?? ''}`)}`;

const coordinateHandler = [
  http.get(`${coordinateUrl()}`, async () => {
    await delay(2000);
    const coordinateListResponse: ICoordinateListResponse = {
      value: [
        {
          id: 1,
          title: '케뷔와',
          coordinate: {
            lat: 37.28214,
            lng: 127.0644,
          },
        },
      ],
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
];

export default coordinateHandler;
