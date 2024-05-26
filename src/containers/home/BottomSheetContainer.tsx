import Coordinate from '@/api/coordinate';
import queryKeys from '@/constants/queryKeys';
import useSimpleQuery, { IUseSimpleQuery } from '@/hooks/useSimpleQuery';
import { ICoordinateDetailInfoResponse } from '@/types/coordinate';
import { IBottomSheetState } from '.';
import BottomSheet from '@/components/common/BottomSheet';
import BottomSheetShopInfo from '@/components/home/BottomSheetShopInfo';

interface IBottomSheetContainer {
  bottomSheetState: IBottomSheetState;
  setBottomSheetState: React.Dispatch<React.SetStateAction<IBottomSheetState>>;
}

const TEN_MINUTES = 10 * 60 * 1000;

export default function BottomSheetContainer({ bottomSheetState, setBottomSheetState }: IBottomSheetContainer) {
  const request: IUseSimpleQuery = {
    queryKey: [queryKeys.coordinateDetail, bottomSheetState.coordinateId],
    requestAPI: Coordinate.Get.detailInfo,
    options: {
      staleTime: TEN_MINUTES,
    },
    requestQuery: { coordinateId: bottomSheetState.coordinateId },
  };

  const { data } = useSimpleQuery<ICoordinateDetailInfoResponse>(request);

  const handleCloseBottomSheet = () => {
    setBottomSheetState({
      isShow: false,
      coordinateId: 0,
    });
  };

  return (
    <BottomSheet title={data?.value.title} handleCloseBottomSheet={handleCloseBottomSheet}>
      <BottomSheetShopInfo data={data} />
    </BottomSheet>
  );
}
