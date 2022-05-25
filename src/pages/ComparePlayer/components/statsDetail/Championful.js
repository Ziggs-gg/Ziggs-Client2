import React from 'react';
import styled from 'styled-components';
import ChampionfulCard from './ChampionfulCard';

const Championful = () => {
  return (
    <ChampionfulLayout>
      <ChampionfulCard />
    </ChampionfulLayout>
  );
};

export default Championful;

const ChampionfulLayout = styled.div`
  width: 1360px;
  margin: 0 auto;
`;
