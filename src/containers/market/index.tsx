import Market from '@/api/market';
import queryKeys from '@/constants/queryKeys';
import useSimpleQuery, { IUseSimpleQuery } from '@/hooks/useSimpleQuery';
import { IMarketListResponse } from '@/types/market';
import MarketComponent from '@/components/market';
import { useLocation } from 'react-router-dom';
import Loading from '@/components/common/Loading';
import { ErrorComponent } from '@/components/error/ErrorComponent';

const TEN_MINUTES = 10 * 60 * 1000;

export default function MarketContainer() {
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);

  const searchKeyword = urlSearchParams.get('searchKeyword')?.trim();

  const request: IUseSimpleQuery = {
    queryKey: [queryKeys.marketList, searchKeyword],
    requestAPI: Market.Get.list,
    options: {
      staleTime: TEN_MINUTES,
    },
    requestQuery: {
      searchKeyword,
    },
  };

  const { data, isLoading } = useSimpleQuery<IMarketListResponse>(request);

  if (isLoading) return <Loading mode="block" />;

  if (!data) return <ErrorComponent.Text />;

  return <MarketComponent data={data} />;
}
