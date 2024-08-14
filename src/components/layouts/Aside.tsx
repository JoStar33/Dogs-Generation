import { Variants, motion } from 'framer-motion';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import bottomTab from '@/constants/bottomTab';
import { useNavigate } from 'react-router-dom';
import React from 'react';

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
  const navigate = useNavigate();

  const handleClickMenuItem = (path: string) => {
    setIsOpenAside(false);
    navigate(path);
  };

  return (
    <S.Aside variants={variants} initial="hidden" animate="show" exit="hidden">
      <div className="aside-header">
        <IoMdClose onClick={() => setIsOpenAside(false)} size={40} fill="#ffffff" cursor="pointer" />
      </div>
      <div className="aside-body">
        {[...bottomTab]
          .sort((a, b) => (a.priority > b.priority ? 1 : -1))
          .map((tabElement) => (
            <div className="aside-body__element" onClick={() => handleClickMenuItem(tabElement.path)}>
              {tabElement.title}
            </div>
          ))}
      </div>
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
    z-index: 101;
    .aside-header {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 40px;
    }
    .aside-body {
      margin-left: 15px;
      margin-top: 15;
      display: flex;
      flex-direction: column;
      gap: 30px;
      &__element {
        width: 100%;
        user-select: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 1.3rem;
        color: ${(props) => props.theme.colors.white};
      }
    }
  `,
};
