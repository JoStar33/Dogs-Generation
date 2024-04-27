import Home from '@/components/home';
import React from 'react';

export default function HomeContainer() {
  const mapElement = React.useRef<HTMLDivElement | null>(null);
  const { naver } = window;

  React.useEffect(() => {
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(37.5656, 126.9769);
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Home ref={mapElement} />;
}
