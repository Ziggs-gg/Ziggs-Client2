import React from 'react';
import styled from 'styled-components';

import 'swiper/css';
import ChampionPoolSwiperContainer from './ChampionPoolSwiperContainer';

const ChampionPool = ({ selectedPlayers }) => {
  return (
    <ChampionPoolLayout>
      {selectedPlayers.length === 0 && (
        <ChampionPoolEmpty>PLAYER 시즌 챔피언풀</ChampionPoolEmpty>
      )}
      {selectedPlayers.map((phRole, idx) => {
        return (
          <ChampionPoolSwiperContainer
            phRole={phRole}
            key={idx}
            selectedPlayers={selectedPlayers}
          />
        );
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
  height: 496px;
`;

const ChampionPoolEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 496px;
  margin: 0 auto;
  color: ${props => props.theme.white.white80};
  font-size: 22px;
  font-weight: 900;
`;
