import { ICommonResponseReturn } from '@/mocks/fakeDatabase/types';
import { HttpResponse } from 'msw';

const CustomResponse = ({ code, message, value }: ICommonResponseReturn) =>
  new HttpResponse(
    JSON.stringify({
      code,
      message,
      value,
    }),
    {
      status: code,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

export default CustomResponse;
