import { http } from 'msw';
import { commonUrl } from '..';
import CustomResponse from '../utils/customResponse';
import { marketDatabase } from '../fakeDatabase/resources/market';

const marketUrl = (path?: string) => `${commonUrl(`/market${path ?? ''}`)}`;

const marketGetHandler = [
  http.get(`${marketUrl()}`, ({ request }) => {
    const marketList = marketDatabase.Get.list().value;
    try {
      const urlObj = new URL(request.url);
      const params = urlObj.searchParams;
      const searchKeyword = params.get('searchKeyword');
      if (params.has('searchKeyword')) {
        const searchedMarketList = marketList.filter((marketElement) => {
          return (
            marketElement.title.toLowerCase().includes((searchKeyword as string).toLowerCase()) ||
            marketElement.address.toLowerCase().includes((searchKeyword as string).toLowerCase())
          );
        });
        return CustomResponse({
          value: searchedMarketList,
          message: '성공!',
          code: 200,
        });
      }
    } catch (error: any) {
      console.log(error);
      return CustomResponse({ value: undefined, message: error, code: 500 });
    }
    return CustomResponse({ value: marketList, message: '성공!', code: 200 });
  }),
];

export default marketGetHandler;
