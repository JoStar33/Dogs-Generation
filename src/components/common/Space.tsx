import styled from 'styled-components';

interface ISpace {
  height: number;
}

export default function Space({ height }: ISpace) {
  return <S.Space height={height} />;
}

const S = {
  Space: styled.div<ISpace>`
    height: ${(props) => props.height}px;
  `,
};
