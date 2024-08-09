import { modalState } from '@/stores/modal';
import { DefaultResponse } from '@/types';
import axios, { AxiosError } from 'axios';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

export function useErrorHandler() {
  const setModalState = useSetRecoilState(modalState);
  const resetModalState = useResetRecoilState(modalState);
  const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
      return setModalState((prev) => ({
        ...prev,
        type: 'ALERT',
        titleText: '오류 발생',
        descText: error?.message ? error.message : '잠시 후 다시 시도해주세요',
        confirmButtonText: '확인',
        onClickConfirm: () => {
          resetModalState();
        },
      }));
    }
    const axiosError: AxiosError<DefaultResponse> = error;
    const isConnectionRefusedError = error.code?.includes('ERR_NETWORK');
    const isUnprocessableEntity = axiosError.response?.status === 422;
    const isInternalServerError = axiosError.response?.status === 500;

    if (isConnectionRefusedError) {
      return setModalState((prev) => ({
        ...prev,
        type: 'ALERT',
        titleText: '네트워크 통신이 원활하지 않습니다.',
        descText: '네트워크 상태를 확인해주세요.',
        confirmButtonText: '확인',
        onClickConfirm: () => {
          resetModalState();
        },
      }));
    }
    if (isUnprocessableEntity) {
      return setModalState((prev) => ({
        ...prev,
        type: 'ALERT',
        titleText: '유효하지 않습니다.',
        descText: axiosError.response?.data.message,
        confirmButtonText: '확인',
        onClickConfirm: () => {
          resetModalState();
        },
      }));
    }
    if (isInternalServerError) {
      return setModalState((prev) => ({
        ...prev,
        type: 'ALERT',
        titleText: '오류 발생',
        descText: axiosError.message ? axiosError.message : '서버에서 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
        confirmButtonText: '확인',
        onClickConfirm: () => {
          resetModalState();
        },
      }));
    }
    return setModalState((prev) => ({
      ...prev,
      type: 'ALERT',
      titleText: '오류 발생',
      descText: '잠시 후 다시 시도해주세요.',
      confirmButtonText: '확인',
      onClickConfirm: () => {
        resetModalState();
      },
    }));
  };
  return { handleError };
}
