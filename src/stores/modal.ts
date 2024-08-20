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

export const useModalStore = create<IModalStore>((set) => ({
  modalState: initModalState,
  setModalState: (fn: (prev: IModalState) => IModalState) => {
    set((state) => ({ modalState: fn(state.modalState) }));
  },
  resetModalState: () => set((prev) => ({ ...prev, modalState: initModalState })),
}));
