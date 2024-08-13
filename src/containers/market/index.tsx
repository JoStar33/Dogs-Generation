import Market from '@/api/market';
import queryKeys from '@/constants/queryKeys';
import useSimpleQuery, { IUseSimpleQuery } from '@/hooks/useSimpleQuery';
import { IMarketListResponse } from '@/types/market';
import MarketComponent from '@/components/market';

const TEN_MINUTES = 10 * 60 * 1000;

export default function MarketContainer() {
  const request: IUseSimpleQuery = {
    queryKey: [queryKeys.marketList],
    requestAPI: Market.Get.list,
    options: {
      staleTime: TEN_MINUTES,
    },
  };

  const { data, isLoading } = useSimpleQuery<IMarketListResponse>(request);
  if (!data || isLoading) return <></>;

  return <MarketComponent data={data} />;
}
