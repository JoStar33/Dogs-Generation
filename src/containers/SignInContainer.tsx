import Auth from '@/api/auth';
import SignIn from '@/components/sign-in';
import { ISignInForm } from '@/types/auth';
import { schema } from '@/utils/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import styled from 'styled-components';

export default function SignInContainer() {
  const methods = useForm<ISignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema.signInSchema),
  });

  const onSubmit: SubmitHandler<ISignInForm> = React.useCallback(
    async (submitData, event) => {
      event?.preventDefault();
      Auth.Post.signIn(submitData);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [methods],
  );

  return (
    <S.SignInContainer>
      <FormProvider {...methods}>
        <SignIn onSubmit={onSubmit} />
      </FormProvider>
    </S.SignInContainer>
  );
}

const S = {
  SignInContainer: styled.div``,
};
