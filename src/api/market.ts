import { requests } from '.';
import * as market from '@/types/market';

const Market = {
  Get: {
    list: ({ searchKeyword }: market.IMarketListRequest) => {
      const params = new URLSearchParams();
      if (searchKeyword) params.set('searchKeyword', searchKeyword);

      const queryString = params.toString();
      const url = `/market${queryString ? `?${queryString}` : ''}`;
      return requests.get<market.IMarketListResponse>(url);
    },
  },
};

export default Market;
