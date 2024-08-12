import Coordinate from '@/api/coordinate';
import DarkBackground from '@/components/common/DarkBackground';
import Loading from '@/components/common/Loading';
import Home from '@/components/home';
import MarkerIcon from '@/components/home/MarkerIcon';
import queryKeys from '@/constants/queryKeys';
import useGeolocation, { INIT_COORDINATE } from '@/hooks/useGeolocation';
import useSimpleQuery, { IUseSimpleQuery } from '@/hooks/useSimpleQuery';
import { ICoordinateItem, ICoordinateListResponse } from '@/types/coordinate';
import checkForMarkersRendering from '@/utils/checkForMarkersRendering';
import React from 'react';
import BottomSheetContainer from './BottomSheetContainer';
import { AnimatePresence } from 'framer-motion';

const TEN_MINUTES = 10 * 60 * 1000;

export interface IBottomSheetState {
  isShow: boolean;
  coordinateId: number;
}

export default function HomeContainer() {
  const { naver } = window;
  const mapElement = React.useRef<HTMLDivElement>(null);
  const naverMapRef = React.useRef<naver.maps.Map | null>(null);
  const initSuccessChecker = React.useRef(false);
  const [marketMarkers, setMarketMarkers] = React.useState<naver.maps.Marker[]>([]);
  const [bottomSheetState, setBottomSheetState] = React.useState<IBottomSheetState>({
    isShow: false,
    coordinateId: 0,
  });
  const userLocation = useGeolocation();

  const isErrorLoadLocation = !userLocation.loaded && userLocation.coordinates;
  const isDeniedPermission = userLocation.loaded && !userLocation.coordinates;

  const request: IUseSimpleQuery = {
    queryKey: [queryKeys.coordinateList],
    requestAPI: Coordinate.Get.list,
    options: {
      staleTime: TEN_MINUTES,
    },
  };

  const { data, isLoading } = useSimpleQuery<ICoordinateListResponse>(request);

  const permissionExistenceCoordinate = () => {
    const lat = !userLocation.coordinates ? INIT_COORDINATE.LAT : userLocation.coordinates.lat;
    const lng = !userLocation.coordinates ? INIT_COORDINATE.LNG : userLocation.coordinates.lng;
    return { lat, lng };
  };

  const handleZoomChangedMap = (zoom: number) => {
    if (naverMapRef.current !== null) {
      checkForMarkersRendering(zoom, naverMapRef.current, marketMarkers);
    }
  };

  const handleDragEndMap = () => {
    if (naverMapRef.current !== null) {
      checkForMarkersRendering(naverMapRef.current.getZoom(), naverMapRef.current, marketMarkers);
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

  const handleClickCoordinate = (element: ICoordinateItem, marker: naver.maps.Marker) => {
    marker.setAnimation(naver.maps.Animation.BOUNCE);
    naverMapRef.current?.setCenter(element.coordinate);
    setBottomSheetState({
      isShow: true,
      coordinateId: element.id,
    });
    naverMapRef.current?.setZoom(16, true);
    setTimeout(() => {
      marker.setAnimation(null);
    }, 2000);
  };

  React.useEffect(
    function initializeMap() {
      if (!mapElement.current || !naver || isErrorLoadLocation) return;
      if (initSuccessChecker.current) return;
      const location = new naver.maps.LatLng(permissionExistenceCoordinate().lat, permissionExistenceCoordinate().lng);
      naverMapRef.current = new naver.maps.Map(mapElement.current, mapOptions(location));

      if (isDeniedPermission) return;

      // Set My Place
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
        naver.maps.Event.addListener(marker, 'click', () => handleClickCoordinate(element, marker));
        return marker;
      });
      setMarketMarkers(computedMarkers);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, naverMapRef.current],
  );

  React.useEffect(
    function initializeVirtualizeMarkerEvent() {
      if (!naverMapRef.current || !naver) return;
      if (marketMarkers.length === 0) return;
      const zoomChangeEvent = naver.maps.Event.addListener(naverMapRef.current, 'zoom_changed', (zoom: number) =>
        handleZoomChangedMap(zoom),
      );
      const dragEndEvent = naver.maps.Event.addListener(naverMapRef.current, 'dragend', handleDragEndMap);

      return () => naver.maps.Event.removeListener([zoomChangeEvent, dragEndEvent]);
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
      <AnimatePresence>
        {bottomSheetState.isShow && <BottomSheetContainer setBottomSheetState={setBottomSheetState} bottomSheetState={bottomSheetState} />}
      </AnimatePresence>
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
