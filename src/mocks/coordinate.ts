//37.28214, 127.0644

import { ICoordinateDetailInfoResponse, ICoordinateListResponse } from '@/types/coordinate';
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
          id: 51,
          title: '케뷔와',
          coordinate: {
            lat: 37.28214,
            lng: 127.0644,
          },
        },
        { id: 1, title: 'Puppy Cafe Seoul', coordinate: { lat: 37.5665, lng: 126.978 } },
        { id: 2, title: 'Dog-Friendly Diner', coordinate: { lat: 37.57, lng: 126.983 } },
        { id: 3, title: 'Furry Friends Cafe', coordinate: { lat: 37.572, lng: 126.98 } },
        { id: 4, title: 'Woof & Brew', coordinate: { lat: 37.573, lng: 126.975 } },
        { id: 5, title: 'Paws & Coffee', coordinate: { lat: 37.571, lng: 126.982 } },
        { id: 6, title: 'Barkery Cafe', coordinate: { lat: 37.569, lng: 126.985 } },
        { id: 7, title: 'Canine Cafe Corner', coordinate: { lat: 37.574, lng: 126.977 } },
        { id: 8, title: 'Pooch Plaza Cafe', coordinate: { lat: 37.575, lng: 126.978 } },
        { id: 9, title: 'Doggy Delights', coordinate: { lat: 37.568, lng: 126.986 } },
        { id: 10, title: "Pup's Place", coordinate: { lat: 37.567, lng: 126.988 } },
        { id: 11, title: 'Woof Woof Cafe', coordinate: { lat: 37.576, lng: 126.979 } },
        { id: 12, title: "Puppy's Paradise", coordinate: { lat: 37.577, lng: 126.981 } },
        { id: 13, title: 'Dog Haven Cafe', coordinate: { lat: 37.566, lng: 126.984 } },
        { id: 14, title: "Fido's Cafe", coordinate: { lat: 37.565, lng: 126.99 } },
        { id: 15, title: 'Bark & Bite', coordinate: { lat: 37.564, lng: 126.992 } },
        { id: 16, title: 'Pawfect Place', coordinate: { lat: 37.563, lng: 126.987 } },
        { id: 17, title: "Doggo's Delight", coordinate: { lat: 37.562, lng: 126.979 } },
        { id: 18, title: "Paw's Cafe", coordinate: { lat: 37.561, lng: 126.982 } },
        { id: 19, title: 'Bark & Brew', coordinate: { lat: 37.56, lng: 126.984 } },
        { id: 20, title: 'Furry Cafe', coordinate: { lat: 37.559, lng: 126.986 } },
        { id: 21, title: 'Doggy Spot', coordinate: { lat: 37.558, lng: 126.987 } },
        { id: 22, title: 'Pup Cafe', coordinate: { lat: 37.557, lng: 126.989 } },
        { id: 23, title: 'Canine Cafe', coordinate: { lat: 37.556, lng: 126.99 } },
        { id: 24, title: 'Pawsome Cafe', coordinate: { lat: 37.555, lng: 126.992 } },
        { id: 25, title: 'Bark Cafe', coordinate: { lat: 37.554, lng: 126.993 } },
        { id: 26, title: 'Puppy Love Cafe', coordinate: { lat: 37.553, lng: 126.995 } },
        { id: 27, title: "Fido's Place", coordinate: { lat: 37.552, lng: 126.996 } },
        { id: 28, title: 'Doggy Diner', coordinate: { lat: 37.551, lng: 126.998 } },
        { id: 29, title: 'Paws & Coffee', coordinate: { lat: 37.55, lng: 126.999 } },
        { id: 30, title: 'Bark & Brew', coordinate: { lat: 37.549, lng: 126.991 } },
        { id: 31, title: 'Furry Friends Cafe', coordinate: { lat: 37.548, lng: 126.993 } },
        { id: 32, title: 'Woof & Brew', coordinate: { lat: 37.547, lng: 126.994 } },
        { id: 33, title: 'Paws & Coffee', coordinate: { lat: 37.546, lng: 126.996 } },
        { id: 34, title: 'Barkery Cafe', coordinate: { lat: 37.545, lng: 126.997 } },
        { id: 35, title: 'Canine Cafe Corner', coordinate: { lat: 37.544, lng: 126.999 } },
        { id: 36, title: 'Pooch Plaza Cafe', coordinate: { lat: 37.543, lng: 126.991 } },
        { id: 37, title: 'Doggy Delights', coordinate: { lat: 37.542, lng: 126.993 } },
        { id: 38, title: "Pup's Place", coordinate: { lat: 37.541, lng: 126.995 } },
        { id: 39, title: 'Woof Woof Cafe', coordinate: { lat: 37.54, lng: 126.996 } },
        { id: 40, title: "Puppy's Paradise", coordinate: { lat: 37.539, lng: 126.998 } },
        { id: 41, title: 'Dog Haven Cafe', coordinate: { lat: 37.538, lng: 126.999 } },
        { id: 42, title: "Fido's Cafe", coordinate: { lat: 37.537, lng: 126.991 } },
        { id: 43, title: 'Bark & Bite', coordinate: { lat: 37.536, lng: 126.992 } },
        { id: 44, title: 'Pawfect Place', coordinate: { lat: 37.535, lng: 126.993 } },
        { id: 45, title: "Doggo's Delight", coordinate: { lat: 37.534, lng: 126.995 } },
        { id: 46, title: "Paw's Cafe", coordinate: { lat: 37.533, lng: 126.996 } },
        { id: 47, title: 'Bark & Brew', coordinate: { lat: 37.532, lng: 126.998 } },
        { id: 48, title: 'Furry Cafe', coordinate: { lat: 37.531, lng: 126.999 } },
        { id: 49, title: 'Doggy Spot', coordinate: { lat: 37.53, lng: 126.991 } },
        { id: 50, title: 'Pup Cafe', coordinate: { lat: 37.529, lng: 126.993 } },
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
  http.get(`${coordinateUrl('/1')}`, async () => {
    await delay(2000);
    const coordinateDetailInfoResponse: ICoordinateDetailInfoResponse = {
      value: {
        id: 1,
        title: '케뷔와',
        address: '경기도 수원시 영통구 광교호수로 139 나루터 선착장 앞',
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
