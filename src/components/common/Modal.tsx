import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import Portal from '@/components/common/Portal';
import DarkBackground from '@/components/common/DarkBackground';
import { textEllipsis } from '@/styles/Common';
import { modalWithText } from '@/stores/modal';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const modalVariants = {
  hidden: {
    opacity: 0,
    y: '-100%',
    // x: '100%',
  },
  visible: {
    opacity: 1,
    y: '90%',
    // x: '100%',
    transition: {
      stiffness: 150,
      mass: 0.4,
      damping: 10,
      type: 'spring',
    },
  },
};

function Alert() {
  const modalValue = useRecoilValue(modalWithText);
  const computedDescTextArr = modalValue.descText?.split('\n');

  return (
    <Portal>
      <DarkBackground>
        <S.Modal variants={modalVariants} animate="visible" initial="hidden">
          <div className="modal-wrapper">
            <i className="info-icon">
              <IoMdInformationCircleOutline size={20} />
            </i>
            <h3 className="title-text">{modalValue.titleText}</h3>
            <div className="desc-text-container">{computedDescTextArr?.map((desc) => <p className="desc-text">{desc}</p>)}</div>
          </div>
          <button className="button-box__confirm" onClick={modalValue.onClickConfirm}>
            {modalValue.confirmButtonText}
          </button>
        </S.Modal>
      </DarkBackground>
    </Portal>
  );
}

function Confirm() {
  const modalValue = useRecoilValue(modalWithText);
  const computedDescTextArr = modalValue.descText?.split('\n');

  return (
    <Portal>
      <DarkBackground>
        <S.Modal variants={modalVariants} animate="visible" initial="hidden" exit="hidden">
          <div className="modal-wrapper">
            <i className="info-icon">
              <IoMdInformationCircleOutline size={20} />
            </i>
            <h3 className="title-text">{modalValue.titleText}</h3>
            <div className="desc-text-container">{computedDescTextArr?.map((desc) => <p className="desc-text">{desc}</p>)}</div>
          </div>
          <div className="button-box">
            <button className="button-box__cancel" onClick={modalValue.onClickCancel}>
              {modalValue.cancelButtonText}
            </button>
            <button className="button-box__confirm" onClick={modalValue.onClickConfirm}>
              {modalValue.confirmButtonText}
            </button>
          </div>
        </S.Modal>
      </DarkBackground>
    </Portal>
  );
}

const S = {
  Modal: styled(motion.article)`
    background-color: #fff;
    aspect-ratio: 16/9;
    margin: 0 auto;
    width: 400px;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 16px 0px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    will-change: transform;
    padding: 15px;
    z-index: 10;
    .modal-wrapper {
      width: 100%;
    }
    .info-icon {
      text-align: center;
      display: flex;
      justify-content: center;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .title-text {
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 20px;
    }
    .desc-text-container {
      display: flex;
      flex-direction: column;
      margin: 10px 0 40px 0;
    }
    .desc-text {
      text-align: center;
      ${textEllipsis}
      font-size: 16px;
      font-weight: 500;
      padding: 0 10px;
    }
    .button-box {
      display: flex;
      width: 100%;
      gap: 10px;
      font-size: 2rem;
      font-weight: 800;
      &__cancel {
        width: 50%;
        height: 50px;
        border-radius: 10px;
        border: 1px solid black;
        background-color: ${(props) => props.theme.colors.white};
      }
      &__confirm {
        width: 50%;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: ${(props) => props.theme.colors.main};
        color: ${(props) => props.theme.colors.white};
      }
    }
  `,
};

const Modal = { Alert, Confirm };

export default Modal;
