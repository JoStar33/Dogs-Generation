import Contents from '@/api/contents';
import ContentsComponent from '@/components/contents';
import queryKeys from '@/constants/queryKeys';
import useSimpleQuery, { IUseSimpleQuery } from '@/hooks/useSimpleQuery';
import { IContentsListResponse } from '@/types/contents';

const TEN_MINUTES = 10 * 60 * 1000;

export default function ContentsContainer() {
  const request: IUseSimpleQuery = {
    queryKey: [queryKeys.marketList],
    requestAPI: Contents.Get.list,
    options: {
      staleTime: TEN_MINUTES,
    },
  };

  const { data, isLoading } = useSimpleQuery<IContentsListResponse>(request);

  if (!data || isLoading) return <></>;

  return <ContentsComponent data={data} />;
}
