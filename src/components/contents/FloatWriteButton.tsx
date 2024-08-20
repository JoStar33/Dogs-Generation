import FloatButtonWrapper from '@/components/common/FloatButtonWrapper';
import { FaPen } from 'react-icons/fa';

interface IProps {
  handleRouteWrite: () => void;
}

export default function FloatWriteButton({ handleRouteWrite }: IProps) {
  return (
    <FloatButtonWrapper onClick={handleRouteWrite}>
      <FaPen size={25} />
    </FloatButtonWrapper>
  );
}
