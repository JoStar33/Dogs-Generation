import { create } from 'zustand';

interface IModalState {
  type?: 'ALERT' | 'CONFIRM';
  titleText?: string;
  descText?: string;
  confirmButtonText: string;
  cancelButtonText: string;
  onClickConfirm: (...args: any) => void;
  onClickCancel: (...args: any) => void;
}

interface IModalStore {
  modalState: IModalState;
  setModalState: (fn: (prev: IModalState) => IModalState) => void;
  resetModalState: () => void;
}

const initModalState = {
  type: undefined,
  titleText: undefined,
  descText: undefined,
  confirmButtonText: '',
  cancelButtonText: '',
  onClickConfirm: () => {},
  onClickCancel: () => {},
};

/**
 * 모달 노출 및 모달에 노출될 정보설정을 해주는 스토어
 */
export const useModalStore = create<IModalStore>((set) => ({
  modalState: initModalState,
  setModalState: (fn: (prev: IModalState) => IModalState) => {
    set((state) => ({ modalState: fn(state.modalState) }));
  },
  resetModalState: () => set((prev) => ({ ...prev, modalState: initModalState })),
}));
