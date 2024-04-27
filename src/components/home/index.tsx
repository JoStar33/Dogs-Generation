import React from 'react';
import styled from 'styled-components';

const Home = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <S.Home>
      <div id="map" ref={ref} />
    </S.Home>
  );
});

export default Home;

const S = {
  Home: styled.div`
    height: 100%;
    width: 100%;
    #map {
      width: 100%;
      height: 100%;
    }
  `,
};
