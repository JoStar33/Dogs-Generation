import { ISignUpForm } from '@/types/auth';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import Form from '@/components/hookForm';
import Button from '@/components/common/Button';

interface IProps {
  onSubmit: SubmitHandler<ISignUpForm>;
}

export default function SignUp({ onSubmit }: IProps) {
  const { handleSubmit } = useFormContext<ISignUpForm>();

  return (
    <S.SignUp>
      <div className="sign-up-header">
        <h1>회원가입</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.InputA<ISignUpForm> label="이메일" name="email" />
        <Form.InputA<ISignUpForm> label="비밀번호" name="password" type="password" />
        <Form.InputA<ISignUpForm> label="비밀번호 확인" name="passwordConfirm" type="password" />
        <Button type="submit" borderRadius="5px">
          가입
        </Button>
      </form>
    </S.SignUp>
  );
}

const S = {
  SignUp: styled.div`
    .sign-up-header {
      display: flex;
      justify-content: center;
      margin: 40px;
      h1 {
        font-size: 1.4rem;
        font-weight: 700;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  `,
};
