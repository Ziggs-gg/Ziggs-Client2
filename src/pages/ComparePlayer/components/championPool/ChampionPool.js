import React from 'react';
import styled from 'styled-components';

import 'swiper/css';
import ChampionPoolSwiperContainer from './ChampionPoolSwiperContainer';

const ChampionPool = ({ selectedPlayers }) => {
  return (
    <ChampionPoolLayout>
      {selectedPlayers.map((phRole, idx) => {
        return <ChampionPoolSwiperContainer phRole={phRole} key={idx} />;
      })}
    </ChampionPoolLayout>
  );
};

export default ChampionPool;

const ChampionPoolLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 1360px;
  height: 496px;
  margin: 0 auto;
`;
