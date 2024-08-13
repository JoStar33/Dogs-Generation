import { colors } from '@/styles/Theme';
import styled from 'styled-components';

interface IProps {
  isVertical: boolean;
  width?: string;
  height?: string;
  margin?: string;
  color?: keyof typeof colors;
}

export default function Line({
  isVertical,
  width = isVertical ? '2px' : '100%',
  height = isVertical ? '100%' : '2px',
  margin = '0px',
  color = 'black',
}: IProps) {
  return <S.Line isVertical={isVertical} width={width} height={height} style={{ backgroundColor: colors[color], margin }} />;
}

const S = {
  Line: styled.div<IProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  `,
};
