import { useModalStore } from '@/stores/modal';
import React from 'react';

interface ILocationType {
  loaded: boolean;
  coordinates?: { lat: number; lng: number };
  error?: { code: number; message: string };
}

/**
 *
 * @returns {{ location: ILocationType, isErrorLoadLocation: boolean, isDeniedPermission: boolean, }}
 * @description - location: 좌표와 관련된 정보
 * - isErrorLoadLocation: 현재 내 좌표 로드 에러 유무
 * - isDeniedPermission: 브라우저 권한을 얻지못했는지 판별
 */
export default function useGeolocation() {
  const { setModalState, resetModalState } = useModalStore();
  const [location, setLocation] = React.useState<ILocationType>({
    loaded: false,
    coordinates: { lat: INIT_COORDINATE.LAT, lng: INIT_COORDINATE.LNG },
  });

  const onSuccess = (currentLocation: { coords: { latitude: number; longitude: number } }) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: currentLocation.coords.latitude,
        lng: currentLocation.coords.longitude,
      },
    });
  };

  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  React.useEffect(function initializeGeolocation() {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: '해당 브라우저는 GPS 기능을 지원하지 않습니다!',
      });
      setModalState((prev) => ({
        ...prev,
        type: 'ALERT',
        titleText: '해당 브라우저는 GPS 기능을 지원하지 않습니다!',
        confirmButtonText: '확인',
        onClickConfirm: () => {
          resetModalState();
        },
      }));
    }

    const watch = navigator.geolocation.watchPosition(onSuccess, onError, watchOptions);
    return () => navigator.geolocation.clearWatch(watch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /**
   * 내 현재위치를 가져오는게 실패했는지
   */
  const isErrorLoadLocation = !location.loaded && location.coordinates;
  /**
   * 브라우저에서 권한을 가져오는게 실패했는지
   */
  const isDeniedPermission = location.loaded && !location.coordinates;

  return { location, isErrorLoadLocation, isDeniedPermission };
}

export const INIT_COORDINATE = {
  LAT: 37.5656,
  LNG: 126.9769,
};

const watchOptions = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};
