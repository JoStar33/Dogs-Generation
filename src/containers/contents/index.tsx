import Contents from '@/api/contents';
import Loading from '@/components/common/Loading';
import ContentsComponent from '@/components/contents';
import { ErrorComponent } from '@/components/error/ErrorComponent';
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

  if (isLoading) return <Loading mode="block" />;

  if (!data) return <ErrorComponent.Text />;

  return <ContentsComponent data={data} />;
}
