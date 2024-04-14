import recoilKeys from '@/constants/recoilKeys';
import { atom, selector } from 'recoil';

interface IModalState {
  type?: 'ALERT' | 'CONFIRM';
  titleText?: string;
  descText?: string;
  confirmButtonText: string;
  cancelButtonText: string;
  onClickConfirm: (...args: any) => void;
  onClickCancel: (...args: any) => void;
}

export const modalState = atom<IModalState>({
  key: recoilKeys.MODAL,
  default: {
    type: undefined,
    titleText: undefined,
    descText: undefined,
    confirmButtonText: '',
    cancelButtonText: '',
    onClickConfirm: () => {},
    onClickCancel: () => {},
  },
});

export const modalWithText = selector({
  key: recoilKeys.MODAL_WITH_TEXT,
  get: ({ get }) => {
    const getModalState = get(modalState);
    return {
      type: getModalState.type,
      titleText: getModalState.titleText,
      descText: getModalState.descText,
      confirmButtonText: getModalState.confirmButtonText,
      cancelButtonText: getModalState.cancelButtonText,
      onClickConfirm: getModalState.onClickConfirm,
      onClickCancel: getModalState.onClickCancel,
    };
  },
});
