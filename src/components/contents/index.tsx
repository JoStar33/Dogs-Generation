import { IContentsListResponse } from '@/types/contents';
import styled from 'styled-components';
import ContentCard from './ContentCard';
import FloatWriteButton from './FloatWriteButton';
import { useNavigate } from 'react-router-dom';
import routerPath from '@/constants/routerPath';

interface IProps {
  data: IContentsListResponse;
}

export default function Contents({ data }: IProps) {
  const navigate = useNavigate();
  const handleRouteWrite = () => {
    navigate(routerPath.CONTENTS_WRITE);
  };

  return (
    <>
      <FloatWriteButton handleRouteWrite={handleRouteWrite} />
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
