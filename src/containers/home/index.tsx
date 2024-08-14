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
import { makeMarkerClustering } from '@/libs/makeMarkerClustering.js';

const TEN_MINUTES = 10 * 60 * 1000;
const STOP_ANIMATION_TIME = 2 * 1000;

export interface IBottomSheetState {
  isShow: boolean;
  coordinateId: number;
}

const initBottomSheetState = {
  isShow: false,
  coordinateId: 0,
};

export default function HomeContainer() {
  const { naver } = window;
  const mapElement = React.useRef<HTMLDivElement>(null);
  const naverMapRef = React.useRef<naver.maps.Map | null>(null);
  const userMarkerRef = React.useRef<naver.maps.Marker | null>(null);
  const currentEventListRef = React.useRef<naver.maps.MapEventListener[]>([]);
  const initSuccessCheckerRef = React.useRef(false);
  const [marketMarkers, setMarketMarkers] = React.useState<naver.maps.Marker[]>([]);
  const [bottomSheetState, setBottomSheetState] = React.useState<IBottomSheetState>(initBottomSheetState);
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

  const handleZoomChangedMap = () => {
    if (naverMapRef.current !== null) {
      checkForMarkersRendering(naverMapRef.current, marketMarkers);
    }
  };

  const handleDragEndMap = () => {
    if (naverMapRef.current !== null) {
      checkForMarkersRendering(naverMapRef.current, marketMarkers);
    }
  };

  const handleMoveUserLocation = (event: React.MouseEvent) => {
    event.preventDefault();
    naverMapRef.current?.setCenter({
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
    }, STOP_ANIMATION_TIME);
  };

  React.useEffect(
    function initializeMap() {
      if (!mapElement.current || !naver || isErrorLoadLocation) return;
      if (initSuccessCheckerRef.current) return;
      const location = new naver.maps.LatLng(permissionExistenceCoordinate().lat, permissionExistenceCoordinate().lng);
      naverMapRef.current = new naver.maps.Map(mapElement.current, mapOptions(location));

      if (isDeniedPermission) return;
      // 내 좌표설정
      userMarkerRef.current = new naver.maps.Marker({
        position: location,
        map: naverMapRef.current,
      });

      initSuccessCheckerRef.current = true;
      return () => {
        if (!userMarkerRef.current) return;
        userMarkerRef.current.setMap(null);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userLocation],
  );

  React.useEffect(
    function initializeMarker() {
      if (!mapElement.current || !naver || isErrorLoadLocation || !data || !naverMapRef.current) return;
      if (marketMarkers.length !== 0) return;
      // 마커 렌더링
      const computedMarkers = data.value.map((element, index) => {
        const marker = new naver.maps.Marker({
          position: element.coordinate,
          title: element.title,
          clickable: true,
          icon: {
            content: MarkerIcon(element.title),
            anchor: new naver.maps.Point(19, 58),
          },
          zIndex: 1,
          map: naverMapRef.current as naver.maps.Map,
        });
        marker.setTitle(element.title);
        currentEventListRef.current[index] = naver.maps.Event.addListener(marker, 'click', () => handleClickCoordinate(element, marker));
        return marker;
      });

      const clusterMarker = {
        content: MarkerIcon(''),
        size: new naver.maps.Size(40, 40),
        anchor: new naver.maps.Point(19, 58),
      };

      // 마커 클러스터링 진행
      const MarkerClustering = makeMarkerClustering(naver);
      new MarkerClustering({
        minClusterSize: 2,
        maxZoom: 13,
        map: naverMapRef.current,
        markers: [...computedMarkers, userMarkerRef.current],
        disableClickZoom: false,
        gridSize: 120,
        icons: [clusterMarker],
        indexGenerator: [10, 20, 30, 61, 100],
        // stylingFunction: (clusterMarker: any, count: number) => {
        //   clusterMarker.getElement().querySelector('div:first-child').innerText = count;
        // },
      });
      setMarketMarkers(computedMarkers);
      return () => {
        computedMarkers.forEach((marker) => {
          marker.setMap(null);
        });
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, naverMapRef.current],
  );

  React.useEffect(function cleanUpMemory() {
    return () => {
      naverMapRef.current?.destroy();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      currentEventListRef.current.forEach((element) => {
        naver.maps.Event.removeListener(element);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(
    function initializeVirtualizeMarkerEvent() {
      if (!naverMapRef.current || !naver) return;
      if (marketMarkers.length === 0) return;
      const zoomChangeEvent = naver.maps.Event.addListener(naverMapRef.current, 'zoom_changed', () => handleZoomChangedMap());
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
