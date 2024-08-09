import { ISignInForm } from '@/types/auth';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import Form from '@/components/hookForm';
import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';
import routerPath from '@/constants/routerPath';

interface IProps {
  onSubmit: SubmitHandler<ISignInForm>;
}

export default function SignIn({ onSubmit }: IProps) {
  const { handleSubmit } = useFormContext<ISignInForm>();
  const navigate = useNavigate();

  const handleClickSignUp = () => {
    navigate(routerPath.SIGN_UP);
  };

  return (
    <S.SignIn>
      <div className="sign-in-header">
        <h1>로그인</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.InputA<ISignInForm> name="email" label="이메일" />
        <Form.InputA<ISignInForm> name="password" label="비밀번호" type="password" />
        <Button backgroundColor="mustard" buttonType="custom" borderRadius="5px" className="sign-in-button" type="submit">
          SIGN IN
        </Button>
        <Button onClick={handleClickSignUp} backgroundColor="modernBlack" color="white" buttonType="custom" borderRadius="5px">
          SIGN UP
        </Button>
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
