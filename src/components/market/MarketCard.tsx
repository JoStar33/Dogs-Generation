import { IMarketListElement } from '@/types/market';
import styled from 'styled-components';
import Image from '@/components/common/Image';

interface IProps {
  element: IMarketListElement;
}

export default function MarketCard({ element }: IProps) {
  const addDefaultImg = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = '/images/empty.png';
  };

  return (
    <S.MarketCard>
      <div className="market-card__image-wrapper">
        <Image isFill onError={addDefaultImg} src={element.image} alt={element.title} />
      </div>
      <div className="market-card__info-wrapper">
        <p className="market-card__title">{element.title}</p>
        <p className="market-card__address-info">{element.address}</p>
        <div></div>
      </div>
    </S.MarketCard>
  );
}

const S = {
  MarketCard: styled.div`
    width: calc(33% - 10px);
    margin: 5px;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    margin-bottom: 20px;
    .market-card {
      &__title {
        font-weight: 600;
        font-size: 17px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      &__info-wrapper {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      &__image-wrapper {
        width: 100%;
        border-radius: 5px;
        aspect-ratio: 1;
        position: relative;
        overflow: hidden;
        background-color: ${(props) => props.theme.colors.gray};
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
        }
      }
      &__address-info {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 14px;
      }
    }
  `,
};
