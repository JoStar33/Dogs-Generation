import Auth from '@/api/auth';
import SignUp from '@/components/signUp';
import routerPath from '@/constants/routerPath';
import { useErrorHandler } from '@/hooks/useErrorHandler';
import useLoading from '@/hooks/useLoading';
import { useModalStore } from '@/stores/modal';
import { ISignUpForm } from '@/types/auth';
import { schema } from '@/utils/validate/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function SignUpContainer() {
  const { isLoading, setIsLoading } = useLoading();
  const { handleError } = useErrorHandler();
  const { resetModalState, setModalState } = useModalStore();
  const navigate = useNavigate();
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

  const fetchSignUp = async (submitData: ISignUpForm) => {
    try {
      if (isLoading) return;
      const response = await Auth.Post.signUp(submitData);
      if (response.code !== 200) throw new Error(response.message);
      setModalState((prev) => ({
        ...prev,
        type: 'ALERT',
        titleText: '회원가입 성공!',
        descText: '회원가입에 성공했습니다. 어서오세요',
        confirmButtonText: '확인',
        onClickConfirm: () => {
          navigate(routerPath.HOME);
          resetModalState();
        },
      }));
    } catch (error: unknown) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<ISignUpForm> = async (submitData) => {
    setIsLoading(true);
    fetchSignUp(submitData);
  };

  return (
    <FormProvider {...methods}>
      <SignUp onSubmit={onSubmit} />
    </FormProvider>
  );
}
