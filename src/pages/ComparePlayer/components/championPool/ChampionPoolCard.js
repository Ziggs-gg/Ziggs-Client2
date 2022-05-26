import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ChampionPoolCard = ({
  championData: {
    DDname,
    DPM,
    GPM,
    VSPM,
    assists,
    championName,
    deaths,
    games,
    kills,
    winRate,
  },
}) => {
  return (
    <CardLayout>
      <ChampionName>{championName}</ChampionName>
    </CardLayout>
  );
};

export default ChampionPoolCard;

const CardLayout = styled.div`
  width: 104px;
  height: 160px;
  border: 1px solid ${props => props.theme.black.black85};
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(19, 19, 16, 0.6) 0%,
    rgba(19, 19, 16, 0) 51.04%,
    rgba(19, 19, 16, 0.9) 100%
  );
  background-image: url('');
`;

const ChampionName = styled.p`
  margin-top: 8px;
  margin-left: 4px;
  color: white;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: -0.05em;
`;
