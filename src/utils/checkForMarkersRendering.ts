import { ICoordinate } from '@/types/coordinate';

// const OPTIMIZE_COORD_RANGE = 5;
const OPTIMIZE_MAX_COUNT = 20;

const showMarker = (map: naver.maps.Map, marker: naver.maps.Marker) => {
  marker.setMap(map);
};

const hideMarker = (marker: naver.maps.Marker) => {
  marker.setMap(null);
};

// 1기준
const zoomOptimizeMarkerShow = (optimizeDatumCoord: ICoordinate, map: naver.maps.Map, markers: naver.maps.Marker[]) => {
  let coordTrigger = false;
  for (let latCoord = 0; latCoord < OPTIMIZE_MAX_COUNT; latCoord++) {
    for (let lngCoord = 0; lngCoord < OPTIMIZE_MAX_COUNT; lngCoord++) {
      markers.map((marker) => {
        const markerLat = marker.getPosition().y;
        const markerLng = marker.getPosition().x;
        if (
          optimizeDatumCoord.lat + latCoord > markerLat &&
          optimizeDatumCoord.lat + latCoord - 1 < markerLat &&
          optimizeDatumCoord.lng + lngCoord > markerLng &&
          optimizeDatumCoord.lng + lngCoord - 1 < markerLng &&
          !coordTrigger
        ) {
          showMarker(map, marker);
          coordTrigger = true;
          return {
            ...marker,
            isTriggeOver: true,
          };
        }
        return marker;
      });
      coordTrigger = true;
    }
  }
};

const checkForMarkersRendering = (zoom: number, map: naver.maps.Map, markers: naver.maps.Marker[]) => {
  const mapBounds = map.getBounds();
  if (zoom <= 12) return zoomOptimizeMarkerShow({ lat: 34.566, lng: 123.984 }, map, markers);
  markers.forEach((marker) => {
    const position = marker.getPosition();
    if (!mapBounds.hasPoint(position)) return hideMarker(marker);
    showMarker(map, marker);
  });
};

export default checkForMarkersRendering;
