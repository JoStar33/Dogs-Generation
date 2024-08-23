import Contents from '@/api/contents';
import ContentsWrite from '@/components/contents/write';
import { useErrorHandler } from '@/hooks/useErrorHandler';
import { useModalStore } from '@/stores/modal';
import { IContentsRegisterForm, IContentsRegisterRequest } from '@/types/contents';
import { schema } from '@/utils/validate/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

export default function ContentsWriteContainer() {
  const { handleError } = useErrorHandler();
  const { setModalState, resetModalState } = useModalStore();
  const methods = useForm<IContentsRegisterForm>({
    defaultValues: {
      image: [],
      title: '',
      description: '',
    },
    resolver: yupResolver(schema.contentsRegisterSchema),
  });

  const fetchContentsWrite = async (requestData: IContentsRegisterRequest) => {
    try {
      const response = await Contents.Post.write(requestData);
      if (response.code !== 200) {
        throw new Error(response.message);
      }
      setModalState((prev) => ({
        ...prev,
        type: 'ALERT',
        titleText: '등록되었습니다!',
        confirmButtonText: '확인',
        onClickConfirm: () => {
          resetModalState();
        },
      }));
    } catch (error: any) {
      handleError(error);
    }
  };

  const onSubmit: SubmitHandler<IContentsRegisterForm> = async (submitData) => {
    const requestData = {
      ...submitData,
      image: submitData.image[0],
    };
    setModalState((prev) => ({
      ...prev,
      type: 'CONFIRM',
      titleText: '등록하시겠습니까?',
      cancelButtonText: '취소',
      confirmButtonText: '등록',
      onClickConfirm: () => {
        fetchContentsWrite(requestData);
      },
      onClickCancel: () => {
        resetModalState();
      },
    }));
  };

  return (
    <FormProvider {...methods}>
      <ContentsWrite onSubmit={onSubmit} />
    </FormProvider>
  );
}
