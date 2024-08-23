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

const TEN_MINUTES = 3 * 60 * 1000;
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
  /**
   * 성공적으로 지도를 만들었는지 확인
   */
  const initSuccessCheckerRef = React.useRef(false);
  const [marketMarkers, setMarketMarkers] = React.useState<naver.maps.Marker[]>([]);
  const [bottomSheetState, setBottomSheetState] = React.useState<IBottomSheetState>(initBottomSheetState);
  const { location: userLocation, isErrorLoadLocation, isDeniedPermission } = useGeolocation();

  const request: IUseSimpleQuery = {
    queryKey: [queryKeys.coordinateList],
    requestAPI: Coordinate.Get.list,
    options: {
      staleTime: TEN_MINUTES,
      refetchOnReconnect: true,
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

  /**
   * 좌표 클릭이벤트
   * @param element 좌표요소 정보
   * @param marker 마커정보
   * @description 클릭시 마커위치로 이동 및 마커 애니메이션 적용 및 지도확대
   */
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

  //사용자 마커 렌더링
  React.useEffect(
    function initializeUserMarker() {
      if (!mapElement.current || !naverMapRef.current || isDeniedPermission || isErrorLoadLocation) return;
      const location = new naver.maps.LatLng(permissionExistenceCoordinate().lat, permissionExistenceCoordinate().lng);
      // 내 좌표설정
      userMarkerRef.current = new naver.maps.Marker({
        position: location,
        map: naverMapRef.current,
      });
      return () => {
        if (!userMarkerRef.current) return;
        userMarkerRef.current.setMap(null);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userLocation, naverMapRef.current],
  );

  //최초 페이지 로드시에 현재위치로 이동되도록 하는 훅
  React.useEffect(
    function moveOnceCurrentLocation() {
      if (initSuccessCheckerRef.current) return;
      if (!mapElement.current || !naverMapRef.current || isDeniedPermission || isErrorLoadLocation) return;
      if (!mapElement.current || !naver || initSuccessCheckerRef.current) return;
      naverMapRef.current.setCenter(permissionExistenceCoordinate());
      initSuccessCheckerRef.current = true;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mapElement.current, userLocation],
  );

  //지도 렌더링
  React.useEffect(function initializeMap() {
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(permissionExistenceCoordinate().lat, permissionExistenceCoordinate().lng);
    //지도 설정
    naverMapRef.current = new naver.maps.Map(mapElement.current, mapOptions(location));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //각 마커들 렌더링
  React.useEffect(
    function initializeMarker() {
      if (!mapElement.current || !naverMapRef.current || !naver || !data || marketMarkers.length !== 0 || isErrorLoadLocation) return;
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
        ...clusterDefaultOptions,
        map: naverMapRef.current,
        markers: [...computedMarkers, userMarkerRef.current],
        icons: [clusterMarker],
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

  //메모리 클린업
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

  //화면에 보이면 마커렌더링 & 화면에 안보이면 마커가림
  React.useEffect(
    function initializeVirtualizeMarkerEvent() {
      if (!naverMapRef.current || !naver || marketMarkers.length === 0) return;

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

const clusterDefaultOptions = {
  minClusterSize: 2,
  maxZoom: 13,
  disableClickZoom: false,
  gridSize: 120,
  indexGenerator: [10, 20, 30, 61, 100],
};
