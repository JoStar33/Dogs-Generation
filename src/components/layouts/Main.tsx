import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

export default function Main({ children }: IProps) {
  return <S.Main>{children}</S.Main>;
}

const S = {
  Main: styled.div`
    width: 100%;
    height: calc(100% - 160px);
    overflow-y: scroll;
  `,
};
