import { IContentsListElement } from '@/types/contents';
import styled from 'styled-components';
import Dimmed from '../common/Dimmed';

interface IProps {
  element: IContentsListElement;
}

export default function ContentCard({ element }: IProps) {
  return (
    <S.ContentCard>
      <div className="content-card__image-wrapper">
        <img src={element.image} alt="컨텐츠 이미지" />
        <Dimmed />
      </div>
      <div className="content-card__main-info">
        <h3>{element.title}</h3>
        <p></p>
      </div>
    </S.ContentCard>
  );
}

const S = {
  ContentCard: styled.div`
    display: flex;
    gap: 20px;
    .content-card {
      &__image-wrapper {
        position: relative;
        overflow: hidden;
        width: 150px;
        height: 150px;
        border-radius: 10px;
        img {
          position: absolute;
          object-fit: cover;
        }
      }
      &__main-info {
        display: flex;
        flex-direction: column;
        padding: 10px 0;
      }
    }
  `,
};
