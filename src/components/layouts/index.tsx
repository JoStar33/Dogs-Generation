import React from 'react';
import styled from 'styled-components';
import Main from './Main';
import Header from './Header';
import BottomTab from './BottomTab';
import Aside from './Aside';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  const [isOpenAside, setIsOpenAside] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(
    function autoCloser() {
      setIsOpenAside(false);
    },
    [pathname],
  );

  return (
    <S.Layout>
      <div className="layout__cover">
        <AnimatePresence>{isOpenAside && <Aside setIsOpenAside={setIsOpenAside} />}</AnimatePresence>
        <Header setIsOpenAside={setIsOpenAside} />
        <Main>{children}</Main>
        <BottomTab />
      </div>
    </S.Layout>
  );
}

const S = {
  Layout: styled.div`
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: center;
    .layout {
      &__cover {
        position: relative;
        overflow: hidden;
        transform: scale(1);
        width: 100%;
        max-width: 500px;
        height: 100dvh;
      }
    }
  `,
};
