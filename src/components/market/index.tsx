import { IMarketListResponse } from '@/types/market';
import styled from 'styled-components';
import MarketCard from './MarketCard';
import MarketSearchInput from './MarketSearchInput';

interface IProps {
  data: IMarketListResponse;
}

export default function Market({ data }: IProps) {
  return (
    <S.Market>
      <MarketSearchInput />
      <div className="market-card-wrapper">
        {data.value.map((element) => (
          <MarketCard element={element} />
        ))}
      </div>
    </S.Market>
  );
}

const S = {
  Market: styled.div`
    display: flex;
    flex-direction: column;
    .market-card-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
  `,
};
