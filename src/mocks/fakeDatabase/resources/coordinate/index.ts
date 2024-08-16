import { ICoordinateItem } from '@/types/coordinate';
import databaseKey from '@/mocks/fakeDatabase/constants/databaseKey';

const coordinateDatabase = {
  Get: {
    list: () => {
      const localStorageCoordinateList = localStorage.getItem(databaseKey.coordinateList) ?? '';
      const parsedCoordinateList: ICoordinateItem[] = localStorageCoordinateList ? JSON.parse(localStorageCoordinateList) : [];
      return {
        code: 200,
        value: parsedCoordinateList,
        message: '회원목록 조회 성공',
      };
    },
  },
};

const coordinateList: ICoordinateItem[] = [
  { id: 1, title: 'Puppy Cafe Seoul', coordinate: { lat: 36.2665, lng: 126.93 }, type: 'CAFE' },
  { id: 2, title: 'Dog-Friendly Diner', coordinate: { lat: 35.1796, lng: 129.0756 }, type: 'RESTAURANT' },
  { id: 3, title: 'Furry Friends Cafe', coordinate: { lat: 35.8714, lng: 128.6014 }, type: 'CAFE' },
  { id: 4, title: 'Woof & Brew', coordinate: { lat: 35.5384, lng: 129.3114 }, type: 'CAFE' },
  { id: 5, title: 'Paws & Coffee', coordinate: { lat: 37.4563, lng: 126.7052 }, type: 'CAFE' },
  { id: 6, title: 'Barkery Cafe', coordinate: { lat: 35.1595, lng: 126.8526 }, type: 'CAFE' },
  { id: 7, title: 'Canine Cafe Corner', coordinate: { lat: 36.351, lng: 127.385 }, type: 'CAFE' },
  { id: 8, title: 'Pooch Plaza Cafe', coordinate: { lat: 37.5265, lng: 126.938 }, type: 'CAFE' },
  { id: 9, title: 'Doggy Delights', coordinate: { lat: 36.6358, lng: 127.4913 }, type: 'RESTAURANT' },
  { id: 10, title: "Pup's Place", coordinate: { lat: 37.2747, lng: 127.0196 }, type: 'CAFE' },
  { id: 11, title: 'Woof Woof Cafe', coordinate: { lat: 35.9916, lng: 129.3858 }, type: 'CAFE' },
  { id: 12, title: "Puppy's Paradise", coordinate: { lat: 34.8051, lng: 126.3945 }, type: 'CAFE' },
  { id: 13, title: 'Dog Haven Cafe', coordinate: { lat: 34.9476, lng: 127.4956 }, type: 'CAFE' },
  { id: 14, title: "Fido's Cafe", coordinate: { lat: 37.4665, lng: 126.778 }, type: 'CAFE' },
  { id: 15, title: 'Bark & Bite', coordinate: { lat: 33.5097, lng: 126.5219 }, type: 'RESTAURANT' },
  { id: 16, title: 'Pawfect Place', coordinate: { lat: 37.4563, lng: 126.7052 }, type: 'CAFE' },
  { id: 17, title: "Doggo's Delight", coordinate: { lat: 36.351, lng: 127.385 }, type: 'RESTAURANT' },
  { id: 18, title: "Paw's Cafe", coordinate: { lat: 35.1796, lng: 129.0756 }, type: 'CAFE' },
  { id: 19, title: 'Bark & Brew', coordinate: { lat: 35.1595, lng: 126.8526 }, type: 'CAFE' },
  { id: 20, title: 'Furry Cafe', coordinate: { lat: 35.8714, lng: 128.6014 }, type: 'CAFE' },
  { id: 21, title: 'Doggy Spot', coordinate: { lat: 36.6358, lng: 127.4913 }, type: 'RESTAURANT' },
  { id: 22, title: 'Pup Cafe', coordinate: { lat: 37.2747, lng: 127.0496 }, type: 'CAFE' },
  { id: 23, title: 'Canine Cafe', coordinate: { lat: 35.9916, lng: 129.3858 }, type: 'CAFE' },
  { id: 24, title: 'Pawsome Cafe', coordinate: { lat: 34.8051, lng: 126.3945 }, type: 'CAFE' },
  { id: 25, title: 'Bark Cafe', coordinate: { lat: 34.9476, lng: 127.4956 }, type: 'CAFE' },
  { id: 26, title: 'Puppy Love Cafe', coordinate: { lat: 35.5391, lng: 129.3107 }, type: 'CAFE' },
  { id: 27, title: "Fido's Place", coordinate: { lat: 37.4563, lng: 126.7052 }, type: 'CAFE' },
  { id: 28, title: 'Doggy Diner', coordinate: { lat: 37.7665, lng: 126.878 }, type: 'RESTAURANT' },
  { id: 29, title: 'Paws & Coffee', coordinate: { lat: 35.1595, lng: 126.8526 }, type: 'CAFE' },
  { id: 30, title: 'Bark & Brew', coordinate: { lat: 35.8714, lng: 128.6014 }, type: 'CAFE' },
  { id: 31, title: 'Furry Friends Cafe', coordinate: { lat: 36.351, lng: 127.385 }, type: 'CAFE' },
  { id: 32, title: 'Woof & Brew', coordinate: { lat: 37.4563, lng: 126.7052 }, type: 'CAFE' },
  { id: 33, title: 'Paws & Coffee', coordinate: { lat: 36.6358, lng: 127.4913 }, type: 'CAFE' },
  { id: 34, title: 'Barkery Cafe', coordinate: { lat: 37.2447, lng: 127.0196 }, type: 'CAFE' },
  { id: 35, title: 'Canine Cafe Corner', coordinate: { lat: 35.9916, lng: 129.3858 }, type: 'CAFE' },
  { id: 36, title: 'Pooch Plaza Cafe', coordinate: { lat: 34.8051, lng: 126.3945 }, type: 'CAFE' },
  { id: 37, title: 'Doggy Delights', coordinate: { lat: 34.9176, lng: 127.4856 }, type: 'RESTAURANT' },
  { id: 38, title: "Pup's Place", coordinate: { lat: 35.1796, lng: 129.0756 }, type: 'CAFE' },
  { id: 39, title: 'Woof Woof Cafe', coordinate: { lat: 33.5097, lng: 126.5219 }, type: 'CAFE' },
  { id: 40, title: "Puppy's Paradise", coordinate: { lat: 37.2665, lng: 127.978 }, type: 'CAFE' },
  { id: 41, title: 'Dog Haven Cafe', coordinate: { lat: 35.1595, lng: 126.8526 }, type: 'CAFE' },
  { id: 42, title: "Fido's Cafe", coordinate: { lat: 35.8714, lng: 128.6014 }, type: 'CAFE' },
  { id: 43, title: 'Bark & Bite', coordinate: { lat: 36.351, lng: 127.385 }, type: 'RESTAURANT' },
  { id: 44, title: 'Pawfect Place', coordinate: { lat: 37.4563, lng: 126.7052 }, type: 'CAFE' },
  { id: 45, title: "Doggo's Delight", coordinate: { lat: 36.6358, lng: 127.4913 }, type: 'RESTAURANT' },
  { id: 46, title: "Paw's Cafe", coordinate: { lat: 35.1796, lng: 129.0756 }, type: 'CAFE' },
  { id: 47, title: 'Bark & Brew', coordinate: { lat: 35.5391, lng: 129.3107 }, type: 'CAFE' },
  { id: 48, title: 'Furry Cafe', coordinate: { lat: 37.5665, lng: 126.978 }, type: 'CAFE' },
  { id: 49, title: 'Doggy Spot', coordinate: { lat: 36.351, lng: 127.385 }, type: 'RESTAURANT' },
  { id: 50, title: 'Pup Cafe', coordinate: { lat: 37.4533, lng: 126.7042 }, type: 'CAFE' },
  { id: 51, title: '케뷔와', coordinate: { lat: 37.28214, lng: 127.0644 }, type: 'CAFE' },
];

const initializeCoordinateDatabase = () => {
  const coordinateLocalStorageList = localStorage.getItem(databaseKey.coordinateList);
  if (coordinateLocalStorageList && coordinateLocalStorageList?.length !== 0) return;
  localStorage.setItem(databaseKey.coordinateList, JSON.stringify(coordinateList));
};

export { coordinateDatabase, coordinateList, initializeCoordinateDatabase };
