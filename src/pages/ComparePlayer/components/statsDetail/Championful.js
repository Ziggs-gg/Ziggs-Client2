import React from 'react';
import styled from 'styled-components';
import ChampionfulCard from './ChampionfulCard';
const Championful = ({ selectedPlayers }) => {
  return (
    <ChampionfulLayout>
      {selectedPlayers.map((player, idx) => {
        return <ChampionfulCard player={player} key={idx} />;
      })}
    </ChampionfulLayout>
  );
};

export default Championful;

const ChampionfulLayout = styled.div`
  width: 1360px;
  margin: 0 auto;
`;
