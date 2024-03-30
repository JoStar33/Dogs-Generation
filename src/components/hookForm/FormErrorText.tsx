import styled from 'styled-components';
import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, FieldValues } from 'react-hook-form';

interface IFormErrorText {
  name: string;
  errors: FieldErrors<FieldValues>;
  margin?: string;
}

export default function FormErrorText({ name, errors, margin }: IFormErrorText) {
  return (
    <S.FormErrorText margin={margin}>
      <ErrorMessage errors={errors} name={name} />
    </S.FormErrorText>
  );
}

const S = {
  FormErrorText: styled.div<{ margin?: string }>`
    height: 15px;
    font-size: 12px;
    color: ${(props) => props.theme.colors.red};
    margin: ${(props) => (props.margin ? props.margin : '2px 0 0 0')};
  `,
};
