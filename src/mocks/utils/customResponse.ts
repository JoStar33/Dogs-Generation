import { ICommonResponseReturn } from '../fakeDatabase/types';

const CustomResponse = ({ code, message, value }: ICommonResponseReturn) =>
  new Response(
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
