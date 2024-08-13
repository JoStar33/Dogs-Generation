import { IMarketListResponse } from '@/types/market';
import styled from 'styled-components';
import MarketCard from './MarketCard';

interface IProps {
  data: IMarketListResponse;
}

export default function Market({ data }: IProps) {
  return (
    <S.Market>
      {data.value.map((element) => (
        <MarketCard element={element} />
      ))}
    </S.Market>
  );
}

const S = {
  Market: styled.div`
    display: flex;
    flex-wrap: wrap;
  `,
};
