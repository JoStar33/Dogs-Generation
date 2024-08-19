import { IContentsListResponse } from '@/types/contents';
import styled from 'styled-components';
import ContentCard from './ContentCard';
import FloatWriteButton from './FloatWriteButton';

interface IProps {
  data: IContentsListResponse;
}

export default function Contents({ data }: IProps) {
  return (
    <>
      <FloatWriteButton />
      <S.Contents>
        {data.value.map((element) => (
          <ContentCard element={element} />
        ))}
      </S.Contents>
    </>
  );
}

const S = {
  Contents: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  `,
};
