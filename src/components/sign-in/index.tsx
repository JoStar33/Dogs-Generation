import { ISignInForm } from '@/types/auth';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import FormInputA from '@/components/hookForm/FormInputA';

interface IProps {
  onSubmit: SubmitHandler<ISignInForm>;
}

export default function SignIn({ onSubmit }: IProps) {
  const { handleSubmit } = useFormContext<ISignInForm>();

  return (
    <S.SignIn>
      <div className="sign-in-header">
        <h1>로그인</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputA<ISignInForm> name="email" label="이메일" />
        <FormInputA<ISignInForm> name="password" label="비밀번호" type="password" />
        <button className="sign-in-button" type="submit">
          LOGIN
        </button>
      </form>
    </S.SignIn>
  );
}

const S = {
  SignIn: styled.div`
    .sign-in-header {
      display: flex;
      justify-content: center;
      margin: 40px;
      h1 {
        font-size: 1.4rem;
        font-weight: 700;
      }
    }
    .sign-in-button {
      width: 100%;
      border: none;
      border-radius: 8px;
      font-size: 1.4rem;
      height: 60px;
      font-weight: 700;
      margin-top: 50px;
      background-color: ${(props) => props.theme.colors.mustard};
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  `,
};
