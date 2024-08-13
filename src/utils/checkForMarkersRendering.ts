// const OPTIMIZE_COORD_RANGE = 5;

const showMarker = (map: naver.maps.Map, marker: naver.maps.Marker) => {
  marker.setMap(map);
};

const hideMarker = (marker: naver.maps.Marker) => {
  marker.setMap(null);
};

const checkForMarkersRendering = (map: naver.maps.Map, markers: naver.maps.Marker[]) => {
  const mapBounds = map.getBounds();
  markers.forEach((marker) => {
    const position = marker.getPosition();
    if (!mapBounds.hasPoint(position)) return hideMarker(marker);
    showMarker(map, marker);
  });
};

export default checkForMarkersRendering;
