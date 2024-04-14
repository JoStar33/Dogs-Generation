import styled from 'styled-components';

interface IProps {
  height: number;
}

export default function Space({ height }: IProps) {
  return <S.Space height={height} />;
}

const S = {
  Space: styled.div<IProps>`
    height: ${(props) => props.height}px;
  `,
};
