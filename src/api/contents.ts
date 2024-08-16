import { requests } from '.';
import * as contents from '@/types/contents';

const Contents = {
  Get: {
    list: () => requests.get<contents.IContentsListResponse>('/contents'),
  },
  Post: {},
  Put: {},
  Patch: {},
  Delete: {},
};

export default Contents;
