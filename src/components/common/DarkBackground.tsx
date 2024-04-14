import React from 'react';
import styled from 'styled-components';

interface IDarkBackground {
  children?: React.ReactNode;
  onClickClose?: () => void;
  style?: React.CSSProperties;
}

export default function DarkBackground({ onClickClose, style, children }: IDarkBackground) {
  React.useEffect(() => {
    const targetElement = document.querySelector('body') as HTMLBodyElement;
    targetElement.style.overflow = 'hidden';
    return () => {
      targetElement.style.overflow = 'visible';
    };
  }, []);

  return (
    <S.DarkBackground style={style} onClick={onClickClose}>
      {children}
    </S.DarkBackground>
  );
}

const S = {
  DarkBackground: styled.div`
    z-index: 9;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.1);
  `,
};
