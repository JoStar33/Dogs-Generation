import { requests } from '.';
import * as contents from '@/types/contents';

const Contents = {
  Get: {
    list: () => requests.get<contents.IContentsListResponse>('/contents'),
  },
  Post: {
    write: (body: contents.IContentsRegisterRequest) => requests.post('/contents', body),
  },
  Put: {},
  Patch: {},
  Delete: {},
};

export default Contents;
