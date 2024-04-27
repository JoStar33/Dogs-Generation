import { Variants, motion } from 'framer-motion';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

const variants: Variants = {
  hidden: {
    left: -300,
    position: 'fixed',
    top: 0,
  },
  show: {
    left: 0,
    position: 'fixed',
    top: 0,
  },
};

interface IProps {
  setIsOpenAside: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Aside({ setIsOpenAside }: IProps) {
  return (
    <S.Aside variants={variants} initial="hidden" animate="show" exit="hidden">
      <div className="aside-header">
        <IoMdClose onClick={() => setIsOpenAside(false)} size={40} fill="#ffffff" cursor="pointer" />
      </div>
      Aside
    </S.Aside>
  );
}

const S = {
  Aside: styled(motion.div)`
    height: 100%;
    width: 300px;
    position: fixed;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 4;
    .aside-header {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  `,
};
