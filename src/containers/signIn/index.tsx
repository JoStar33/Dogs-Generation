import Auth from '@/api/auth';
import SignIn from '@/components/signIn';
import routerPath from '@/constants/routerPath';
import { useErrorHandler } from '@/hooks/useErrorHandler';
import useLoading from '@/hooks/useLoading';
import { ISignInForm } from '@/types/auth';
import { schema } from '@/utils/validate/schema';
import { storage } from '@/utils/storage';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function SignInContainer() {
  const { handleError } = useErrorHandler();
  const { isLoading, setIsLoading } = useLoading();
  const navigate = useNavigate();
  const methods = useForm<ISignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema.signInSchema),
  });

  const fetchSignIn = async (submitData: ISignInForm) => {
    try {
      if (isLoading) return;
      const response = await Auth.Post.signIn(submitData);
      if (response.code !== 200) throw new Error(response.message);
      storage.setAccessTokenLocalStorage(response.value.accessToken);
      navigate(routerPath.HOME);
    } catch (error: unknown) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<ISignInForm> = React.useCallback(
    async (submitData, event) => {
      event?.preventDefault();
      setIsLoading(true);
      fetchSignIn(submitData);
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
