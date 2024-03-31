import { textEllipsis } from '@/styles/Common';
import { TextStyles } from '@/styles/TextStyles';
import { ColorsTypes, colors } from '@/styles/Theme';
import styled from 'styled-components';

interface IText extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  variant?: keyof typeof TextStyles;
  color?: keyof ColorsTypes;
  lineHeight?: string;
  width?: string;
  isEllipsis?: boolean;
}

export default function Text({
  variant = 'body1',
  color = 'black',
  width = 'auto',
  lineHeight = '1.2rem',
  isEllipsis = false,
  ...rest
}: IText) {
  return (
    <S.Text
      isEllipsis={isEllipsis}
      style={{
        ...rest.style,
        ...TextStyles[variant],
        color: colors[color],
        width,
        lineHeight,
      }}
      {...rest}
    />
  );
}

const S = {
  Text: styled.p<{ isEllipsis: boolean }>`
    ${(props) => props.isEllipsis && textEllipsis}
  `,
};
