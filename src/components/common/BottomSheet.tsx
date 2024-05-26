import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';

interface IBottomSheet {
  title?: string;
  children?: React.ReactNode;
  handleCloseBottomSheet: () => void;
}

export default function BottomSheet({ title, handleCloseBottomSheet, children }: IBottomSheet) {
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
        <p className="bottom-sheet__header__title">{title}</p>
        <MdClose size={30} cursor="pointer" onClick={handleCloseBottomSheet} />
      </div>
      <div>{children}</div>
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
    padding: 0 10px;
    .bottom-sheet {
      &__header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 10px;
        &__title {
          font-size: 1.3rem;
          font-weight: 600;
        }
        &__mock {
          width: 30px;
          height: 30px;
        }
      }
    }
  `,
};
