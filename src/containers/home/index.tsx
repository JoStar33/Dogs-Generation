import Coordinate from '@/api/coordinate';
import DarkBackground from '@/components/common/DarkBackground';
import Loading from '@/components/common/Loading';
import Home from '@/components/home';
import MarkerIcon from '@/components/home/MarkerIcon';
import queryKeys from '@/constants/queryKeys';
import useGeolocation, { INIT_COORDINATE } from '@/hooks/useGeolocation';
import useSimpleQuery, { IUseSimpleQuery } from '@/hooks/useSimpleQuery';
import { ICoordinateListResponse } from '@/types/coordinate';
import checkForMarkersRendering from '@/utils/checkForMarkersRendering';
import React from 'react';

const TEN_MINUTES = 10 * 60 * 1000;

export default function HomeContainer() {
  const { naver } = window;
  const mapElement = React.useRef<HTMLDivElement>(null);
  const naverMapRef = React.useRef<naver.maps.Map | null>(null);
  const initSuccessChecker = React.useRef(false);
  const [marketMarkers, setMarketMarkers] = React.useState<naver.maps.Marker[]>([]);
  const userLocation = useGeolocation();

  const isErrorLoadLocation = !userLocation.loaded && userLocation.coordinates;
  const isDeniedPermission = userLocation.loaded && !userLocation.coordinates;

  const request: IUseSimpleQuery = {
    queryKey: [queryKeys.coordinateList],
    requestAPI: Coordinate.Get.list,
    options: {
      enabled: !!mapElement.current,
      staleTime: TEN_MINUTES,
    },
  };

  const { data, isLoading } = useSimpleQuery<ICoordinateListResponse>(request);

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
    function initializeMarker() {
      if (!mapElement.current || !naver || isErrorLoadLocation || !data || !naverMapRef.current) return;
      if (marketMarkers.length !== 0) return;
      const computedMarkers = data.value.map((element) => {
        const marker = new naver.maps.Marker({
          position: element.coordinate,
          title: element.title,
          clickable: true,
          icon: {
            content: MarkerIcon(element.title),
            anchor: new naver.maps.Point(19, 58),
          },
          map: naverMapRef.current as naver.maps.Map,
        });
        marker.setTitle(element.title);
        naver.maps.Event.addListener(marker, 'click', () => {
          marker.setAnimation(naver.maps.Animation.BOUNCE);
          setTimeout(() => {
            marker.setAnimation(null);
          }, 2000);
        });
        return marker;
      });
      setMarketMarkers(computedMarkers);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data],
  );

  React.useEffect(
    function initializeVirtualizeMarkerEvent() {
      if (!mapElement.current || !naver) return;
      if (marketMarkers.length === 0) return;
      const zoomchangeEvent = naver.maps.Event.addListener(mapElement.current, 'zoom_changed', handleZoomChangedMap);
      const dragEndEvent = naver.maps.Event.addListener(mapElement.current, 'dragend', handleDragEndMap);

      return () => naver.maps.Event.removeListener([zoomchangeEvent, dragEndEvent]);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [marketMarkers],
  );

  return (
    <>
      {isLoading && (
        <DarkBackground>
          <Loading mode="block" />
        </DarkBackground>
      )}
      <Home ref={mapElement} handleMoveUserLocation={handleMoveUserLocation} />
    </>
  );
}

const mapOptions = (location: naver.maps.LatLng) => ({
  center: location,
  zoom: 17,
  logoControl: false,
  mapDataControl: false,
  zoomControl: false,
});
