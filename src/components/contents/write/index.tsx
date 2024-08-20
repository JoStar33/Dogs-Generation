import Button from '@/components/common/Button';
import Form from '@/components/hookForm';
import { IContentsRegisterForm } from '@/types/contents';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

interface IProps {
  onSubmit: SubmitHandler<IContentsRegisterForm>;
}

export default function ContentsWrite({ onSubmit }: IProps) {
  const { handleSubmit } = useFormContext<IContentsRegisterForm>();
  return (
    <S.ContentsWrite onSubmit={handleSubmit(onSubmit)}>
      <Form.FileDrop<IContentsRegisterForm> name="image" />
      <Form.InputA<IContentsRegisterForm> name="title" />
      <Form.TextArea<IContentsRegisterForm> name="description" />
      <Button type="submit" name="positive">
        등록
      </Button>
    </S.ContentsWrite>
  );
}

const S = {
  ContentsWrite: styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
};
