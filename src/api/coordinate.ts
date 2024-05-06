import { requests } from '.';
import * as coordinate from '@/types/coordinate';

const Coordinate = {
  Get: {
    list: () => requests.get<coordinate.ICoordinateListResponse>('/coordinate'),
    detailInfo: ({ coordinateId }: { coordinateId: number }) =>
      requests.get<coordinate.ICoordinateDetailInfoResponse>(`/coordinate/${coordinateId}`),
  },
};

export default Coordinate;
