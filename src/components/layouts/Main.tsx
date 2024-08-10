import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

export default function Main({ children }: IProps) {
  return <S.Main>{children}</S.Main>;
}

const S = {
  Main: styled.div`
    position: relative;
    width: 100%;
    transform: rotate(0);
    height: calc(100% - 160px);
    padding: 10px;
    overflow-y: scroll;
  `,
};
