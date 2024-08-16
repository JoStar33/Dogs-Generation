import Market from '@/api/market';
import queryKeys from '@/constants/queryKeys';
import useSimpleQuery, { IUseSimpleQuery } from '@/hooks/useSimpleQuery';
import { IMarketListResponse } from '@/types/market';
import MarketComponent from '@/components/market';
import { useLocation } from 'react-router-dom';

const TEN_MINUTES = 10 * 60 * 1000;

export default function MarketContainer() {
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);

  const searchKeyword = urlSearchParams.get('searchKeyword')?.trim();

  const request: IUseSimpleQuery = {
    queryKey: [queryKeys.marketList, urlSearchParams.get('searchKeyword')],
    requestAPI: Market.Get.list,
    options: {
      staleTime: TEN_MINUTES,
    },
    requestQuery: {
      searchKeyword,
    },
  };

  const { data, isLoading } = useSimpleQuery<IMarketListResponse>(request);
  if (!data || isLoading) return <></>;

  return <MarketComponent data={data} />;
}
