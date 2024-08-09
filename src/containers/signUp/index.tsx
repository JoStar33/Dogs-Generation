import SignUp from '@/components/signUp';
import { ISignUpForm } from '@/types/auth';
import { schema } from '@/utils/validate/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

export default function SignUpContainer() {
  const methods = useForm<ISignUpForm>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      name: '',
      age: 0,
      phoneNumber: '',
      agreement: 'N',
      gender: 'MAN',
      address: '',
      addressDetail: '',
    },
    resolver: yupResolver(schema.signUpSchema),
  });

  const onSubmit: SubmitHandler<ISignUpForm> = (submitData) => {
    console.log(submitData);
  };

  return (
    <S.SignUpContainer>
      <FormProvider {...methods}>
        <SignUp onSubmit={onSubmit} />
      </FormProvider>
    </S.SignUpContainer>
  );
}

const S = {
  SignUpContainer: styled.div``,
};
