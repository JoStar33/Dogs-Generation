import { requests } from '.';
import * as coordinate from '@/types/coordinate';

const Coordinate = {
  Get: {
    list: () => requests.get<coordinate.ICoordinateListResponse>('/coordinate'),
  },
};

export default Coordinate;
