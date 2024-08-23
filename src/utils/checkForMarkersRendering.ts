/**
 * 마커 그리기
 * @param map 지도
 * @param marker 마커
 */
const showMarker = (map: naver.maps.Map, marker: naver.maps.Marker) => {
  marker.setMap(map);
};

/**
 * 마커 가리기
 * @param marker 마커
 */
const hideMarker = (marker: naver.maps.Marker) => {
  marker.setMap(null);
};

/**
 * 사용자가 바라보고있는 지도에 마커가 위치하고있는지 판별하고 위치해있다면 화면에 마커를 렌더링하거나 숨겨버린다.
 * @param map 지도
 * @param markers 마커배열
 */
const checkForMarkersRendering = (map: naver.maps.Map, markers: naver.maps.Marker[]) => {
  const mapBounds = map.getBounds();
  markers.forEach((marker) => {
    const position = marker.getPosition();
    if (!mapBounds.hasPoint(position)) return hideMarker(marker);
    showMarker(map, marker);
  });
};

export default checkForMarkersRendering;
