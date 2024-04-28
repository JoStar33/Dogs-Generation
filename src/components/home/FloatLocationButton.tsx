import { flexCenter } from '@/styles/Common';
import { motion } from 'framer-motion';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import styled from 'styled-components';

interface IProps {
  handleMoveUserLocation: (event: React.MouseEvent) => void;
}

export default function FloatLocationButton({ handleMoveUserLocation }: IProps) {
  return (
    <S.FloatLocationButton onClick={handleMoveUserLocation}>
      <FaLocationCrosshairs size={25} />
    </S.FloatLocationButton>
  );
}

const S = {
  FloatLocationButton: styled(motion.div)`
    border-radius: 100px;
    width: 50px;
    height: 50px;
    position: fixed;
    z-index: 50;
    right: 30px;
    bottom: 40px;
    ${flexCenter}
    background-color: ${(props) => props.theme.colors.white};
    &:hover {
      transform: scale(1.05);
    }
  `,
};
