import { requests } from '.';

const Market = {
  Get: {
    list: () => requests.get('/market'),
  },
};

export default Market;
