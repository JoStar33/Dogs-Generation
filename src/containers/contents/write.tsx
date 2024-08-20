import ContentsWrite from '@/components/contents/write';
import { IContentsRegisterForm } from '@/types/contents';
import { schema } from '@/utils/validate/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

export default function ContentsWriteContainer() {
  const methods = useForm<IContentsRegisterForm>({
    defaultValues: {
      image: [],
      title: '',
      description: '',
    },
    resolver: yupResolver(schema.contentsRegisterSchema),
  });

  const onSubmit: SubmitHandler<IContentsRegisterForm> = (submitData) => {
    console.log(submitData);
  };

  return (
    <FormProvider {...methods}>
      <ContentsWrite onSubmit={onSubmit} />
    </FormProvider>
  );
}
