import { flexCenter } from '@/styles/Common';
import React from 'react';
import { styled } from 'styled-components';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}

export default function FloatButtonWrapper({ children, ...rest }: IProps) {
  return <S.FloatButtonWrapper {...rest}>{children}</S.FloatButtonWrapper>;
}

const S = {
  FloatButtonWrapper: styled.div`
    border-radius: 100px;
    width: 50px;
    height: 50px;
    position: fixed;
    cursor: pointer;
    z-index: 50;
    right: 50px;
    bottom: 120px;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 16px 0px;
    ${flexCenter}
    background-color: ${(props) => props.theme.colors.white};
    &:hover {
      transform: scale(1.05);
    }
  `,
};
