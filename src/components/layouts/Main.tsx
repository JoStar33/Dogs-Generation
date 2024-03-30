import styled from 'styled-components';

interface IMain {
  children: React.ReactNode;
}

export default function Main({ children }: IMain) {
  return <S.Main>{children}</S.Main>;
}

const S = {
  Main: styled.div`
    width: 100%;
    height: calc(100% - 160px);
    overflow-y: scroll;
  `,
};
