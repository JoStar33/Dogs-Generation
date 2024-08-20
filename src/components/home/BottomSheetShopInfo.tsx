import { textEllipsis } from '@/styles/Common';
import { ICoordinateDetailInfoResponse } from '@/types/coordinate';
import styled from 'styled-components';
import Image from '@/components/common/Image';

interface IProps {
  data?: ICoordinateDetailInfoResponse;
}

export default function BottomSheetShopInfo({ data }: IProps) {
  if (!data) return <></>;
  return (
    <S.BottomSheetShopInfo>
      <Image src={data.value.image} alt="좌표상 이미지 정보" width={100} height={100} />
      <div className="bottom-sheet-shop-info__content">
        <p>
          <strong>주소:</strong> {data.value.address}
        </p>
        <p>
          <strong>번호:</strong> {data.value.phoneNumber}
        </p>
      </div>
    </S.BottomSheetShopInfo>
  );
}

const S = {
  BottomSheetShopInfo: styled.div`
    display: flex;
    gap: 10px;
    img {
      object-fit: cover;
    }
    p {
      ${textEllipsis};
      max-width: calc(100% - 20px - 0.5rem);
      strong {
        font-weight: 600;
        padding-right: 0.5rem;
      }
    }
    .bottom-sheet-shop-info {
      &__content {
        padding: 5px 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  `,
};
