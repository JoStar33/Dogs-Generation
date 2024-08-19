import { FaLocationCrosshairs } from 'react-icons/fa6';
import FloatButtonWrapper from '@/components/common/FloatButtonWrapper';

interface IProps {
  handleMoveUserLocation: (event: React.MouseEvent) => void;
}

export default function FloatLocationButton({ handleMoveUserLocation }: IProps) {
  return (
    <FloatButtonWrapper onClick={handleMoveUserLocation}>
      <FaLocationCrosshairs size={25} />
    </FloatButtonWrapper>
  );
}
