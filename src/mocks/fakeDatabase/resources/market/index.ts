import { IMarketListElement } from '@/types/market';

const marketList: IMarketListElement[] = [
  {
    id: 1,
    title: 'Puppy Cafe Seoul',
    address: '서울특별시 중구 명동2가',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 2,
    title: 'Dog-Friendly Diner',
    address: '부산광역시 해운대구 좌동',
    averageRate: 4.2,
    image:
      'https://images.unsplash.com/photo-1552642320-9551c3cf6d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 3,
    title: 'Furry Friends Cafe',
    address: '대구광역시 중구 삼덕동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1541753866388-0b3c701627d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 4,
    title: 'Woof & Brew',
    address: '울산광역시 남구 삼산동',
    averageRate: 4.1,
    image:
      'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 5,
    title: 'Paws & Coffee',
    address: '인천광역시 연수구 송도동',
    averageRate: 4.2,
    image:
      'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 6,
    title: 'Barkery Cafe',
    address: '광주광역시 서구 치평동',
    averageRate: 4.0,
    image:
      'https://images.unsplash.com/photo-1545586690-d4e0f91f6c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 7,
    title: 'Canine Cafe Corner',
    address: '대전광역시 서구 둔산동',
    averageRate: 4.5,
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 8,
    title: 'Pooch Plaza Cafe',
    address: '서울특별시 종로구 사직동',
    averageRate: 4.6,
    image:
      'https://images.unsplash.com/photo-1605360925443-6db8f18a7ae5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 9,
    title: 'Doggy Delights',
    address: '충청북도 청주시 흥덕구 복대동',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1507143550189-fed454f93097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 10,
    title: "Pup's Place",
    address: '경기도 수원시 팔달구 인계동',
    averageRate: 4.2,
    image:
      'https://images.unsplash.com/photo-1587486924816-1a6c74a38bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 11,
    title: 'Woof Woof Cafe',
    address: '경상북도 포항시 북구 중앙동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 12,
    title: "Puppy's Paradise",
    address: '전라남도 목포시 상동',
    averageRate: 4.1,
    image:
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 13,
    title: 'Dog Haven Cafe',
    address: '전라남도 순천시 연향동',
    averageRate: 4.5,
    image:
      'https://images.unsplash.com/photo-1517423568366-8b83523034fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 14,
    title: "Fido's Cafe",
    address: '서울특별시 노원구 공릉동',
    averageRate: 4.2,
    image:
      'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 15,
    title: 'Bark & Bite',
    address: '제주특별자치도 제주시 애월읍',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1507143550189-fed454f93097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 16,
    title: "Furry's Feast",
    address: '경기도 용인시 수지구 동천동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 17,
    title: 'Canine Cravings',
    address: '충청남도 천안시 서북구 불당동',
    averageRate: 4.5,
    image:
      'https://images.unsplash.com/photo-1517423568366-8b83523034fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 18,
    title: 'Pooch Patio',
    address: '경기도 평택시 비전동',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1605360925443-6db8f18a7ae5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 19,
    title: 'Bark & Brunch',
    address: '충청북도 충주시 호암동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1545586690-d4e0f91f6c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 20,
    title: "Doggo's Den",
    address: '서울특별시 강남구 압구정동',
    averageRate: 4.5,
    image:
      'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 21,
    title: 'Puppy Playground',
    address: '대구광역시 달서구 본리동',
    averageRate: 4.2,
    image:
      'https://images.unsplash.com/photo-1587486924816-1a6c74a38bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 22,
    title: 'Canine Cafe',
    address: '경기도 고양시 일산서구 탄현동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 23,
    title: 'Doggy Delight',
    address: '충청남도 아산시 배방읍',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1548943487-a2e4d21aa3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 24,
    title: "Pup's Place",
    address: '강원도 춘천시 동내면',
    averageRate: 4.5,
    image:
      'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 25,
    title: 'Barkery Cafe',
    address: '경상남도 창원시 마산합포구 산호동',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1552642320-9551c3cf6d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 26,
    title: 'Fido & Friends',
    address: '경상북도 구미시 원평동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1541753866388-0b3c701627d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 27,
    title: 'Canine Corner',
    address: '부산광역시 사하구 당리동',
    averageRate: 4.2,
    image:
      'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 28,
    title: 'Puppy Paradise',
    address: '경기도 성남시 분당구 서현동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1605360925443-6db8f18a7ae5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 29,
    title: 'Doggo Den',
    address: '서울특별시 강서구 방화동',
    averageRate: 4.5,
    image:
      'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 30,
    title: 'Paws & Perks',
    address: '서울특별시 강북구 미아동',
    averageRate: 4.6,
    image:
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 31,
    title: 'Bark & Brew',
    address: '대구광역시 북구 산격동',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1587486924816-1a6c74a38bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 32,
    title: 'Puppy Cafe Delight',
    address: '서울특별시 서대문구 신촌동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1541753866388-0b3c701627d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 33,
    title: 'Canine Cafe Spot',
    address: '충청북도 청주시 상당구 용암동',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 34,
    title: 'Doggy Den',
    address: '경기도 안양시 만안구 안양동',
    averageRate: 4.2,
    image:
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 35,
    title: 'Fido & Co.',
    address: '부산광역시 금정구 장전동',
    averageRate: 4.5,
    image:
      'https://images.unsplash.com/photo-1545586690-d4e0f91f6c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 36,
    title: 'Paws & Pints',
    address: '서울특별시 마포구 서교동',
    averageRate: 4.6,
    image:
      'https://images.unsplash.com/photo-1541753866388-0b3c701627d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 37,
    title: 'Bark & Brew',
    address: '서울특별시 동작구 상도동',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1605360925443-6db8f18a7ae5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 38,
    title: "Pup's Playground",
    address: '서울특별시 양천구 목동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 39,
    title: 'Canine Cafe',
    address: '서울특별시 은평구 녹번동',
    averageRate: 4.2,
    image:
      'https://images.unsplash.com/photo-1552642320-9551c3cf6d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 40,
    title: 'Puppy Cafe Corner',
    address: '서울특별시 성북구 정릉동',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1587486924816-1a6c74a38bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 41,
    title: 'Dog House Cafe',
    address: '서울특별시 중랑구 신내동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 42,
    title: "Pooch's Cafe",
    address: '경기도 성남시 수정구 태평동',
    averageRate: 4.2,
    image:
      'https://images.unsplash.com/photo-1541753866388-0b3c701627d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 43,
    title: 'Furry Friends Cafe',
    address: '서울특별시 서대문구 홍제동',
    averageRate: 4.5,
    image:
      'https://images.unsplash.com/photo-1541753866388-0b3c701627d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 44,
    title: 'Canine Cafe',
    address: '서울특별시 노원구 상계동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1605360925443-6db8f18a7ae5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 45,
    title: "Pup's Paradise",
    address: '서울특별시 관악구 신림동',
    averageRate: 4.3,
    image:
      'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 46,
    title: 'Barkery Cafe',
    address: '서울특별시 동대문구 전농동',
    averageRate: 4.2,
    image:
      'https://images.unsplash.com/photo-1552642320-9551c3cf6d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 47,
    title: 'Doggy Den',
    address: '서울특별시 금천구 시흥동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 48,
    title: 'Paws & Perks',
    address: '서울특별시 용산구 이태원동',
    averageRate: 4.6,
    image:
      'https://images.unsplash.com/photo-1552642320-9551c3cf6d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 49,
    title: 'Pooch & Brew',
    address: '서울특별시 강동구 천호동',
    averageRate: 4.5,
    image:
      'https://images.unsplash.com/photo-1592194996308-7ff7c644cc7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 50,
    title: 'Furry Haven',
    address: '서울특별시 서초구 서초동',
    averageRate: 4.4,
    image:
      'https://images.unsplash.com/photo-1545586690-d4e0f91f6c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 51,
    title: 'Canine Lounge',
    address: '서울특별시 송파구 잠실동',
    averageRate: 4.6,
    image:
      'https://images.unsplash.com/photo-1587486924816-1a6c74a38bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
  },
];

export { marketList };
