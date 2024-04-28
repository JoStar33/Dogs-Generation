import React from 'react';

interface ILocationType {
  loaded: boolean;
  coordinates?: { lat: number; lng: number };
  error?: { code: number; message: string };
}

export default function useGeolocation() {
  const [location, setLocation] = React.useState<ILocationType>({
    loaded: false,
    coordinates: { lat: INIT_COORDINATE.LAT, lng: INIT_COORDINATE.LNG },
  });

  const onSuccess = (location: { coords: { latitude: number; longitude: number } }) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
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
    if (!('geolocation' in navigator))
      onError({
        code: 0,
        message: '해당 브라우저는 GPS 기능을 지원하지 않습니다!',
      });

    const watch = navigator.geolocation.watchPosition(onSuccess, onError, watchOptions);
    return () => navigator.geolocation.clearWatch(watch);
  }, []);

  return location;
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
