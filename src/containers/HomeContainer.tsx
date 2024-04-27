import Home from '@/components/home';
import React from 'react';

export default function HomeContainer() {
  const mapElement = React.useRef<HTMLDivElement>(null);
  const { naver } = window;

  React.useEffect(function initializeMap() {
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(INIT_COORDINATE.LAT, INIT_COORDINATE.LNG);
    const map = new naver.maps.Map(mapElement.current, mapOptions(location));

    new naver.maps.Marker({
      position: location,
      map,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Home ref={mapElement} />;
}

const mapOptions = (location: naver.maps.LatLng) => ({
  center: location,
  zoom: 17,
  zoomControl: false,
});

const INIT_COORDINATE = {
  LAT: 37.5656,
  LNG: 126.9769,
};
