import { IMarketListElement } from '@/types/market';

const marketList: IMarketListElement[] = [
  {
    id: 1,
    title: 'Puppy Cafe Seoul',
    address: '서울특별시 중구 명동2가',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-1111-2222',
  },
  {
    id: 2,
    title: 'Dog-Friendly Diner',
    address: '부산광역시 해운대구 좌동',
    averageRate: 4.2,
    image:
      'https://media.istockphoto.com/id/1400194993/ko/%EC%82%AC%EC%A7%84/%EC%B9%B4%ED%91%B8%EC%B9%98%EB%85%B8-%EC%98%88%EC%88%A0%EC%A7%81.jpg?s=612x612&w=0&k=20&c=lum31BwhnHLtD647HI-RGcWRSNyZEBQ063C2rrNYdoE=',
    type: 'CAFE',
    phoneNumber: '010-2222-3333',
  },
  {
    id: 3,
    title: 'Furry Friends Cafe',
    address: '대구광역시 중구 삼덕동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1541753866388-0b3c701627d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-4444-5555',
  },
  {
    id: 4,
    title: 'Woof & Brew',
    address: '울산광역시 남구 삼산동',
    averageRate: 4.1,
    image:
      'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-5555-6666',
  },
  {
    id: 5,
    title: 'Paws & Coffee',
    address: '인천광역시 연수구 송도동',
    averageRate: 4.2,
    image:
      'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-6666-7777',
  },
  {
    id: 6,
    title: 'Barkery Cafe',
    address: '광주광역시 서구 치평동',
    averageRate: 4.0,
    image:
      'https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-an-interior-area-of-an-empty-cafe-in-the-area-image_2538739.png',
    type: 'RESTAURANT',
    phoneNumber: '010-6666-7777',
  },
  {
    id: 7,
    title: 'Canine Cafe Corner',
    address: '대전광역시 서구 둔산동',
    averageRate: 4.5,
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-6666-7777',
  },
  {
    id: 8,
    title: 'Pooch Plaza Cafe',
    address: '서울특별시 종로구 사직동',
    averageRate: 4.6,
    image: 'https://www.qplace.kr/content/images/2022/10/No.3185------.jpg',
    type: 'RESTAURANT',
    phoneNumber: '010-6666-7777',
  },
  {
    id: 9,
    title: 'Doggy Delights',
    address: '충청북도 청주시 흥덕구 복대동',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1507143550189-fed454f93097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-6666-7777',
  },
  {
    id: 10,
    title: "Pup's Place",
    address: '경기도 수원시 팔달구 인계동',
    averageRate: 4.2,
    image:
      'https://images.unsplash.com/photo-1587486924816-1a6c74a38bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-6666-7777',
  },
  {
    id: 11,
    title: 'Paw Paradise',
    address: '서울특별시 마포구 서교동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1587486924816-1a6c74a38bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-1234-5678',
  },
  {
    id: 12,
    title: 'Bark Bistro',
    address: '서울특별시 성동구 행당동',
    averageRate: 4.5,
    image:
      'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-2345-6789',
  },
  {
    id: 13,
    title: 'Doggy Den',
    address: '서울특별시 관악구 봉천동',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-3456-7890',
  },
  {
    id: 14,
    title: 'Paws & Paws',
    address: '서울특별시 광진구 구의동',
    averageRate: 4.6,
    image:
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-4567-8901',
  },
  {
    id: 15,
    title: 'Fido & Co.',
    address: '서울특별시 중구 명동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1559181567-c3190ca9959b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-5678-9012',
  },
  {
    id: 16,
    title: 'Bark & Beans',
    address: '서울특별시 동대문구 청량리동',
    averageRate: 4.5,
    image:
      'https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-an-interior-area-of-an-empty-cafe-in-the-area-image_2538739.png',
    type: 'RESTAURANT',
    phoneNumber: '010-6789-0123',
  },
  {
    id: 17,
    title: 'Puppy Park',
    address: '서울특별시 강동구 둔촌동',
    averageRate: 4.6,
    image:
      'https://images.unsplash.com/photo-1587486924816-1a6c74a38bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-7890-1234',
  },
  {
    id: 18,
    title: 'Pooch Patio',
    address: '경기도 평택시 비전동',
    averageRate: 4.3,
    image: 'https://www.qplace.kr/content/images/2022/10/No.3185------.jpg',
    type: 'CAFE',
    phoneNumber: '010-1234-5678',
  },
  {
    id: 19,
    title: 'Bark & Brunch',
    address: '충청북도 충주시 호암동',
    averageRate: 4.4,
    image:
      'https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-an-interior-area-of-an-empty-cafe-in-the-area-image_2538739.png',
    type: 'RESTAURANT',
    phoneNumber: '010-9876-5432',
  },
  {
    id: 20,
    title: "Doggo's Den",
    address: '서울특별시 강남구 압구정동',
    averageRate: 4.5,
    image:
      'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-2345-6789',
  },
  {
    id: 21,
    title: 'Puppy Playground',
    address: '대구광역시 달서구 본리동',
    averageRate: 4.2,
    image:
      'https://images.unsplash.com/photo-1587486924816-1a6c74a38bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-3456-7890',
  },
  {
    id: 22,
    title: 'Canine Cafe',
    address: '경기도 고양시 일산서구 탄현동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-4567-8901',
  },
  {
    id: 23,
    title: 'Doggy Delight',
    address: '충청남도 아산시 배방읍',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1548943487-a2e4d21aa3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-5678-9012',
  },
  {
    id: 24,
    title: "Pup's Place",
    address: '강원도 춘천시 동내면',
    averageRate: 4.5,
    image:
      'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-6789-0123',
  },
  {
    id: 25,
    title: 'Barkery Cafe',
    address: '경상남도 창원시 마산합포구 산호동',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1552642320-9551c3cf6d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-7890-1234',
  },
  {
    id: 26,
    title: 'Fido & Friends',
    address: '경상북도 구미시 원평동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1541753866388-0b3c701627d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-8901-2345',
  },
  {
    id: 27,
    title: 'Canine Corner',
    address: '부산광역시 사하구 당리동',
    averageRate: 4.2,
    image:
      'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-9012-3456',
  },
  {
    id: 28,
    title: 'Puppy Paradise',
    address: '경기도 성남시 분당구 서현동',
    averageRate: 4.4,
    image: 'https://www.qplace.kr/content/images/2022/10/No.3185------.jpg',
    type: 'RESTAURANT',
    phoneNumber: '010-0123-4567',
  },
  {
    id: 29,
    title: 'Doggo Den',
    address: '서울특별시 강서구 방화동',
    averageRate: 4.5,
    image:
      'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-1234-6789',
  },
  {
    id: 30,
    title: 'Paws & Perks',
    address: '서울특별시 강북구 미아동',
    averageRate: 4.6,
    image:
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-2345-7890',
  },
  {
    id: 31,
    title: 'Bark & Brew',
    address: '서울특별시 서대문구 연희동',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-3456-8901',
  },
  {
    id: 32,
    title: 'Furry Fiesta',
    address: '경기도 광명시 하안동',
    averageRate: 4.5,
    image:
      'https://images.unsplash.com/photo-1559181567-c3190ca9959b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-4567-9012',
  },
  {
    id: 33,
    title: 'Paws & Coffee',
    address: '경기도 부천시 원미구 중동',
    averageRate: 4.6,
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-5678-0123',
  },
  {
    id: 34,
    title: 'Canine Cuisine',
    address: '서울특별시 양천구 목동',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-6789-1234',
  },
  {
    id: 35,
    title: 'Doggy Diner',
    address: '서울특별시 구로구 구로동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1587486924816-1a6c74a38bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-7890-2345',
  },
  {
    id: 36,
    title: 'Puppy Palace',
    address: '서울특별시 은평구 응암동',
    averageRate: 4.5,
    image:
      'https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-an-interior-area-of-an-empty-cafe-in-the-area-image_2538739.png',
    type: 'CAFE',
    phoneNumber: '010-8901-3456',
  },
  {
    id: 37,
    title: 'Fido Feast',
    address: '서울특별시 성동구 성수동',
    averageRate: 4.6,
    image:
      'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-9012-4567',
  },
  {
    id: 38,
    title: 'Doggy Delight',
    address: '서울특별시 중랑구 면목동',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1559181567-c3190ca9959b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-0123-5678',
  },
  {
    id: 39,
    title: 'Canine Corner',
    address: '서울특별시 노원구 상계동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-2345-6789',
  },
  {
    id: 40,
    title: 'Paws & Plates',
    address: '경기도 성남시 수정구 신흥동',
    averageRate: 4.6,
    image:
      'https://images.unsplash.com/photo-1587486924816-1a6c74a38bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-3456-7890',
  },
  {
    id: 41,
    title: 'Bark & Sip',
    address: '서울특별시 동작구 상도동',
    averageRate: 4.5,
    image:
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-4567-8901',
  },
  {
    id: 42,
    title: 'Pup & Pop',
    address: '서울특별시 서초구 방배동',
    averageRate: 4.3,
    image:
      'https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-an-interior-area-of-an-empty-cafe-in-the-area-image_2538739.png',
    type: 'RESTAURANT',
    phoneNumber: '010-5678-9012',
  },
  {
    id: 43,
    title: 'Canine Cafe',
    address: '서울특별시 송파구 잠실동',
    averageRate: 4.6,
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-6789-0123',
  },
  {
    id: 44,
    title: 'Fido & Friends',
    address: '서울특별시 성북구 정릉동',
    averageRate: 4.5,
    image:
      'https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-an-interior-area-of-an-empty-cafe-in-the-area-image_2538739.png',
    type: 'RESTAURANT',
    phoneNumber: '010-7890-1234',
  },
  {
    id: 45,
    title: 'Puppy & Pints',
    address: '서울특별시 종로구 삼청동',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-8901-2345',
  },
  {
    id: 46,
    title: 'Canine Company',
    address: '서울특별시 강남구 대치동',
    averageRate: 4.5,
    image:
      'https://images.unsplash.com/photo-1587486924816-1a6c74a38bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-9012-3456',
  },
  {
    id: 47,
    title: 'Paws & Pints',
    address: '경기도 의정부시 가능동',
    averageRate: 4.6,
    image:
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-0123-4567',
  },
  {
    id: 48,
    title: 'Fido Feast',
    address: '경기도 용인시 수지구 상현동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1559181567-c3190ca9959b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-1234-5678',
  },
  {
    id: 49,
    title: 'Doggy Diner',
    address: '경기도 남양주시 평내동',
    averageRate: 4.6,
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'CAFE',
    phoneNumber: '010-2345-6789',
  },
  {
    id: 50,
    title: 'Paws & Pies',
    address: '서울특별시 서초구 반포동',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    type: 'RESTAURANT',
    phoneNumber: '010-3456-7890',
  },
  {
    id: 51,
    title: 'Canine Canteen',
    address: '서울특별시 강북구 미아동',
    averageRate: 4.5,
    image:
      'https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-an-interior-area-of-an-empty-cafe-in-the-area-image_2538739.png',
    type: 'CAFE',
    phoneNumber: '010-4567-8901',
  },
];

export { marketList };
