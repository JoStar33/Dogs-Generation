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
        <h3 className="content-card__main-info__title">{element.title}</h3>
        <p className="content-card__main-info__day">작성일: {element.createdAt}</p>
        <p className="content-card__main-info__description">{element.description}</p>
      </div>
    </S.ContentCard>
  );
}

const S = {
  ContentCard: styled.div`
    display: flex;
    gap: 20px;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 16px 0px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    .content-card {
      &__image-wrapper {
        position: relative;
        overflow: hidden;
        min-width: 150px;
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
        gap: 10px;
        &__title {
          font-weight: 600;
        }
        &__day {
          font-size: 14px;
        }
      }
    }
  `,
};
