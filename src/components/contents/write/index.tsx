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
      <h1 className="contents-write__header">컨텐츠 작성</h1>
      <Form.ImageDrop<IContentsRegisterForm> name="image" />
      <Form.InputA<IContentsRegisterForm> name="title" label="제목" />
      <Form.TextArea<IContentsRegisterForm> name="description" label="내용" />
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
    .contents-write {
      &__header {
        text-align: center;
        font-size: 19px;
        font-weight: 500;
        margin: 10px 0;
      }
    }
  `,
};
