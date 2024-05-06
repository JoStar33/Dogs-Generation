import { ICoordinateDetailInfoResponse } from '@/types/coordinate';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';

interface IBottomSheet {
  data?: ICoordinateDetailInfoResponse;
  handleCloseBottomSheet: () => void;
}

export default function BottomSheet({ data, handleCloseBottomSheet }: IBottomSheet) {
  return (
    <S.BottomSheet
      exit={{
        height: '0px',
      }}
      initial={{
        height: '0px',
      }}
      animate={{
        height: '400px',
      }}
    >
      <div className="bottom-sheet__header">
        <div className="bottom-sheet__header__mock" />
        <p className="bottom-sheet__header__title">{data?.value.title}</p>
        <MdClose size={30} cursor="pointer" onClick={handleCloseBottomSheet} />
      </div>
    </S.BottomSheet>
  );
}

const S = {
  BottomSheet: styled(motion.div)`
    position: fixed;
    z-index: 100;
    transform: translateX(-50%);
    left: 50%;
    border-radius: 20px 20px 0 0;
    width: 100%;
    bottom: 0px;
    overflow: hidden;
    background-color: ${(props) => props.theme.colors.white};
    .bottom-sheet {
      &__header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 10px;
        &__title {
          font-size: 1.3rem;
        }
        &__mock {
          width: 30px;
          height: 30px;
        }
      }
    }
  `,
};
