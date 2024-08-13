import { http } from 'msw';
import { commonUrl } from '..';
import { marketList } from '../fakeDatabase/resources/market';
import CustomResponse from '../utils/customResponse';

const marketUrl = (path?: string) => `${commonUrl(`/market${path ?? ''}`)}`;

const marketGetHandler = [
  http.get(`${marketUrl()}`, ({ request }) => {
    try {
      const urlObj = new URL(request.url);
      const params = urlObj.searchParams;
      if ('searchKeyword' in params) {
        const searchedMarketList = marketList.map(
          (marketElement) =>
            marketElement.title.includes(params.searchKeyword as string) || marketElement.address.includes(params.searchKeyword as string),
        );
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
