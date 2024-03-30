import React from 'react';
import styled from 'styled-components';
import Main from './Main';
import Header from './Header';
import BottomTab from './BottomTab';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <S.Layout>
      <Header />
      <Main>{children}</Main>
      <BottomTab />
    </S.Layout>
  );
}

const S = {
  Layout: styled.div`
    width: 100%;
    max-width: 500px;
    height: 100vh;
  `,
};
