import Home from '@/components/home';
import useGeolocation, { INIT_COORDINATE } from '@/hooks/useGeolocation';
import checkForMarkersRendering from '@/utils/checkForMarkersRendering';
import React from 'react';

export default function HomeContainer() {
  const { naver } = window;
  const mapElement = React.useRef<HTMLDivElement>(null);
  const naverMapRef = React.useRef<naver.maps.Map | null>(null);
  const initSuccessChecker = React.useRef(false);
  const [marketMarkers, setMarketMarkers] = React.useState<naver.maps.Marker[]>([]);
  const userLocation = useGeolocation();

  const isErrorLoadLocation = !userLocation.loaded && userLocation.coordinates;
  const isDeniedPermission = userLocation.loaded && !userLocation.coordinates;

  const permissionExistenceCoordinate = () => {
    const lat = !userLocation.coordinates ? INIT_COORDINATE.LAT : userLocation.coordinates.lat;
    const lng = !userLocation.coordinates ? INIT_COORDINATE.LNG : userLocation.coordinates.lng;
    return { lat, lng };
  };

  const handleZoomChangedMap = () => {
    if (mapElement.current !== null) {
      checkForMarkersRendering(mapElement.current as unknown as naver.maps.Map, marketMarkers);
    }
  };

  const handleDragEndMap = () => {
    if (mapElement.current !== null) {
      checkForMarkersRendering(mapElement.current as unknown as naver.maps.Map, marketMarkers);
    }
  };

  const handleMoveUserLocation = (event: React.MouseEvent) => {
    event.preventDefault();
    if (!naverMapRef.current) return;
    naverMapRef.current.setCenter({
      lat: permissionExistenceCoordinate().lat,
      lng: permissionExistenceCoordinate().lng,
    });
    // TODO: map정보를 useRef로 가져오도록 만들기.
  };

  React.useEffect(
    function initializeMap() {
      if (!mapElement.current || !naver || isErrorLoadLocation) return;
      if (initSuccessChecker.current) return;
      const location = new naver.maps.LatLng(permissionExistenceCoordinate().lat, permissionExistenceCoordinate().lng);
      naverMapRef.current = new naver.maps.Map(mapElement.current, mapOptions(location));

      if (isDeniedPermission) return;

      new naver.maps.Marker({
        position: location,
        map: naverMapRef.current,
      });

      initSuccessChecker.current = true;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userLocation],
  );

  React.useEffect(
    function initializeVirtualizeMarkerEvent() {
      if (!mapElement.current || !naver || isErrorLoadLocation) return;
      if (initSuccessChecker.current) return;
      setMarketMarkers([]);
      const zoomchangeEvent = naver.maps.Event.addListener(mapElement.current, 'zoom_changed', handleZoomChangedMap);
      const dragEndEvent = naver.maps.Event.addListener(mapElement.current, 'dragend', handleDragEndMap);

      return () => naver.maps.Event.removeListener([zoomchangeEvent, dragEndEvent]);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [marketMarkers],
  );

  return <Home ref={mapElement} handleMoveUserLocation={handleMoveUserLocation} />;
}

const mapOptions = (location: naver.maps.LatLng) => ({
  center: location,
  zoom: 17,
  logoControl: false,
  mapDataControl: false,
  zoomControl: false,
});
