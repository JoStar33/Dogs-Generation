import { IContentsListElement } from '@/types/contents';
import databaseKey from '@/mocks/fakeDatabase/constants/databaseKey';

const contentsDatabase = {
  Get: {
    list: () => {
      const localStorageContentsList = localStorage.getItem(databaseKey.contentsList) ?? '';
      const parsedContentsList: IContentsListElement[] = localStorageContentsList ? JSON.parse(localStorageContentsList) : [];
      return {
        code: 200,
        value: parsedContentsList,
        message: '회원목록 조회 성공',
      };
    },
  },
};

const initializeContentsDatabase = () => {
  const contentsLocalStorageList = localStorage.getItem(databaseKey.contentsList);
  if (contentsLocalStorageList && contentsLocalStorageList?.length !== 0) return;
  localStorage.setItem(databaseKey.contentsList, JSON.stringify(contentsList));
};

const contentsList: IContentsListElement[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1548699876-14a88d7ea3a8',
    title: 'Happy Golden Retriever',
    createdAt: '2024-08-10',
    description: 'A cheerful Golden Retriever enjoying the outdoors.',
    author: 'JohnDoe123',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1516728778615-2d590ea185ee',
    title: 'Cute Puppy Eyes',
    createdAt: '2024-08-11',
    description: 'Adorable puppy with big, round eyes staring at the camera.',
    author: 'JaneSmith',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1556228724-4b37f0b58f40',
    title: 'Dog at the Beach',
    createdAt: '2024-08-12',
    description: 'A happy dog running along the beach during sunset.',
    author: 'DogLover22',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1506947411565-16e2028c9f28',
    title: 'Playful Pug',
    createdAt: '2024-08-13',
    description: 'A playful pug enjoying a sunny day at the park.',
    author: 'PugFan',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1548191265-cc70d3d45ba1',
    title: 'Sleepy Husky',
    createdAt: '2024-08-14',
    description: 'A sleepy Husky dog resting on the couch.',
    author: 'HuskyLover',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1592194996308-7b9b6c9b2456',
    title: 'Corgi Fun',
    createdAt: '2024-08-15',
    description: 'A Corgi having fun with a ball in the backyard.',
    author: 'CorgiFanatic',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006',
    title: 'German Shepherd',
    createdAt: '2024-08-16',
    description: 'A majestic German Shepherd sitting proudly.',
    author: 'ShepherdLover',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1555685812-4b743f4b8b36',
    title: 'Adventurous Beagle',
    createdAt: '2024-08-17',
    description: 'A Beagle exploring the woods on an adventure.',
    author: 'BeagleLover',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1574169208507-843761648969',
    title: 'Chihuahua Charm',
    createdAt: '2024-08-18',
    description: 'A Chihuahua with a charming expression on its face.',
    author: 'TinyDogs',
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1598133894006-3e4ed935ad6f',
    title: 'Border Collie',
    createdAt: '2024-08-19',
    description: 'A smart Border Collie playing fetch in the field.',
    author: 'CollieFan',
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1548191265-cc70d3d45ba1',
    title: 'Golden Hour Walk',
    createdAt: '2024-08-20',
    description: 'A dog walking during the golden hour of the day.',
    author: 'SunsetWalker',
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783',
    title: 'Shiba Inu Smile',
    createdAt: '2024-08-21',
    description: 'A Shiba Inu with a big smile enjoying the day.',
    author: 'ShibaInuFan',
  },
  {
    id: 13,
    image: 'https://images.unsplash.com/photo-1556229012-150a2d7cf43b',
    title: 'Dalmatian Spots',
    createdAt: '2024-08-22',
    description: 'A Dalmatian showing off its beautiful spots.',
    author: 'DalmatianLover',
  },
  {
    id: 14,
    image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783',
    title: 'French Bulldog',
    createdAt: '2024-08-23',
    description: 'A French Bulldog posing for a photo.',
    author: 'BulldogFan',
  },
  {
    id: 15,
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a',
    title: 'Labrador Retriever',
    createdAt: '2024-08-24',
    description: 'A Labrador Retriever swimming in the lake.',
    author: 'LabradorLover',
  },
  {
    id: 16,
    image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8',
    title: 'Puppy Playtime',
    createdAt: '2024-08-25',
    description: 'Puppies playing together in a garden.',
    author: 'PlayfulPups',
  },
  {
    id: 17,
    image: 'https://images.unsplash.com/photo-1506947411565-16e2028c9f28',
    title: 'Boxer on Guard',
    createdAt: '2024-08-26',
    description: 'A Boxer dog standing guard at the front yard.',
    author: 'BoxerFan',
  },
  {
    id: 18,
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006',
    title: 'Pomeranian Puff',
    createdAt: '2024-08-27',
    description: 'A fluffy Pomeranian looking adorable.',
    author: 'PomeranianLove',
  },
  {
    id: 19,
    image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783',
    title: 'Mischievous Terrier',
    createdAt: '2024-08-28',
    description: 'A mischievous terrier looking for some trouble.',
    author: 'TerrierTrouble',
  },
  {
    id: 20,
    image: 'https://images.unsplash.com/photo-1506947411565-16e2028c9f28',
    title: 'Barking Beagle',
    createdAt: '2024-08-29',
    description: 'A Beagle barking with enthusiasm.',
    author: 'BeagleBark',
  },
];

export { contentsDatabase, contentsList, initializeContentsDatabase };
