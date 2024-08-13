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
        { id: 1, title: 'Puppy Cafe Seoul', coordinate: { lat: 36.2665, lng: 126.93 } }, // 서울
        { id: 2, title: 'Dog-Friendly Diner', coordinate: { lat: 35.1796, lng: 129.0756 } }, // 부산
        { id: 3, title: 'Furry Friends Cafe', coordinate: { lat: 35.8714, lng: 128.6014 } }, // 대구
        { id: 4, title: 'Woof & Brew', coordinate: { lat: 35.5384, lng: 129.3114 } }, // 울산
        { id: 5, title: 'Paws & Coffee', coordinate: { lat: 37.4563, lng: 126.7052 } }, // 인천
        { id: 6, title: 'Barkery Cafe', coordinate: { lat: 35.1595, lng: 126.8526 } }, // 광주
        { id: 7, title: 'Canine Cafe Corner', coordinate: { lat: 36.351, lng: 127.385 } }, // 대전
        { id: 8, title: 'Pooch Plaza Cafe', coordinate: { lat: 37.5665, lng: 126.978 } }, // 서울
        { id: 9, title: 'Doggy Delights', coordinate: { lat: 36.6358, lng: 127.4913 } }, // 충청북도 청주
        { id: 10, title: "Pup's Place", coordinate: { lat: 37.2747, lng: 127.0096 } }, // 경기도 수원
        { id: 11, title: 'Woof Woof Cafe', coordinate: { lat: 35.9916, lng: 129.3858 } }, // 경상북도 포항
        { id: 12, title: "Puppy's Paradise", coordinate: { lat: 34.8051, lng: 126.3945 } }, // 전라남도 목포
        { id: 13, title: 'Dog Haven Cafe', coordinate: { lat: 34.9476, lng: 127.4956 } }, // 전라남도 순천
        { id: 14, title: "Fido's Cafe", coordinate: { lat: 37.4665, lng: 126.778 } }, // 서울
        { id: 15, title: 'Bark & Bite', coordinate: { lat: 33.5097, lng: 126.5219 } }, // 제주도 제주시
        { id: 16, title: 'Pawfect Place', coordinate: { lat: 37.4563, lng: 126.7052 } }, // 인천
        { id: 17, title: "Doggo's Delight", coordinate: { lat: 36.351, lng: 127.385 } }, // 대전
        { id: 18, title: "Paw's Cafe", coordinate: { lat: 35.1796, lng: 129.0756 } }, // 부산
        { id: 19, title: 'Bark & Brew', coordinate: { lat: 35.1595, lng: 126.8526 } }, // 광주
        { id: 20, title: 'Furry Cafe', coordinate: { lat: 35.8714, lng: 128.6014 } }, // 대구
        { id: 21, title: 'Doggy Spot', coordinate: { lat: 36.6358, lng: 127.4913 } }, // 충청북도 청주
        { id: 22, title: 'Pup Cafe', coordinate: { lat: 37.2747, lng: 127.0496 } }, // 경기도 수원
        { id: 23, title: 'Canine Cafe', coordinate: { lat: 35.9916, lng: 129.3858 } }, // 경상북도 포항
        { id: 24, title: 'Pawsome Cafe', coordinate: { lat: 34.8051, lng: 126.3945 } }, // 전라남도 목포
        { id: 25, title: 'Bark Cafe', coordinate: { lat: 34.9476, lng: 127.4956 } }, // 전라남도 순천
        { id: 26, title: 'Puppy Love Cafe', coordinate: { lat: 35.5391, lng: 129.3107 } }, // 울산
        { id: 27, title: "Fido's Place", coordinate: { lat: 37.4563, lng: 126.7052 } }, // 인천
        { id: 28, title: 'Doggy Diner', coordinate: { lat: 37.7665, lng: 126.878 } }, // 서울
        { id: 29, title: 'Paws & Coffee', coordinate: { lat: 35.1595, lng: 126.8526 } }, // 광주
        { id: 30, title: 'Bark & Brew', coordinate: { lat: 35.8714, lng: 128.6014 } }, // 대구
        { id: 31, title: 'Furry Friends Cafe', coordinate: { lat: 36.351, lng: 127.385 } }, // 대전
        { id: 32, title: 'Woof & Brew', coordinate: { lat: 37.4563, lng: 126.7052 } }, // 인천
        { id: 33, title: 'Paws & Coffee', coordinate: { lat: 36.6358, lng: 127.4913 } }, // 충청북도 청주
        { id: 34, title: 'Barkery Cafe', coordinate: { lat: 37.2447, lng: 127.0196 } }, // 경기도 수원
        { id: 35, title: 'Canine Cafe Corner', coordinate: { lat: 35.9916, lng: 129.3858 } }, // 경상북도 포항
        { id: 36, title: 'Pooch Plaza Cafe', coordinate: { lat: 34.8051, lng: 126.3945 } }, // 전라남도 목포
        { id: 37, title: 'Doggy Delights', coordinate: { lat: 34.9476, lng: 127.4956 } }, // 전라남도 순천
        { id: 38, title: "Pup's Place", coordinate: { lat: 35.1796, lng: 129.0756 } }, // 부산
        { id: 39, title: 'Woof Woof Cafe', coordinate: { lat: 33.5097, lng: 126.5219 } }, // 제주도 제주시
        { id: 40, title: "Puppy's Paradise", coordinate: { lat: 37.2665, lng: 127.978 } }, // 서울
        { id: 41, title: 'Dog Haven Cafe', coordinate: { lat: 35.1595, lng: 126.8526 } }, // 광주
        { id: 42, title: "Fido's Cafe", coordinate: { lat: 35.8714, lng: 128.6014 } }, // 대구
        { id: 43, title: 'Bark & Bite', coordinate: { lat: 36.351, lng: 127.385 } }, // 대전
        { id: 44, title: 'Pawfect Place', coordinate: { lat: 37.4563, lng: 126.7052 } }, // 인천
        { id: 45, title: "Doggo's Delight", coordinate: { lat: 36.6358, lng: 127.4913 } }, // 충청북도 청주
        { id: 46, title: "Paw's Cafe", coordinate: { lat: 35.1796, lng: 129.0756 } }, // 부산
        { id: 47, title: 'Bark & Brew', coordinate: { lat: 35.5391, lng: 129.3107 } }, // 울산
        { id: 48, title: 'Furry Cafe', coordinate: { lat: 37.5665, lng: 126.978 } }, // 서울
        { id: 49, title: 'Doggy Spot', coordinate: { lat: 36.351, lng: 127.385 } }, // 대전
        { id: 50, title: 'Pup Cafe', coordinate: { lat: 37.4563, lng: 126.7052 } }, // 인천
        {
          id: 51,
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
  http.get(`${coordinateUrl('/51')}`, async () => {
    await delay(2000);
    const coordinateDetailInfoResponse: ICoordinateDetailInfoResponse = {
      value: {
        id: 51,
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
