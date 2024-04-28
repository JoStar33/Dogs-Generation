import React from 'react';
import styled from 'styled-components';
import FloatLocationButton from '@/components/home/FloatLocationButton';

interface IProps {
  handleMoveUserLocation: (event: React.MouseEvent) => void;
}

const Home = React.forwardRef<HTMLDivElement, IProps>(({ handleMoveUserLocation }, ref) => {
  return (
    <S.Home>
      <div id="map" ref={ref} />
      <FloatLocationButton handleMoveUserLocation={handleMoveUserLocation} />
    </S.Home>
  );
});

export default Home;

const S = {
  Home: styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    //자식요소가 확실하게 부모요소를 따르도록 rotate지정.
    transform: rotate(0);
    #map {
      width: 100%;
      height: 100%;
    }
  `,
};
