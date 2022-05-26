import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
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
  const imgPath = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${DDname}_0.jpg`;
  return (
    <CardLayout>
      <ImgMask imgPath={imgPath} />
      <ChampionName DDname={DDname}>{championName}</ChampionName>
      <BlurMask />
      <GameCount>{games}</GameCount>
    </CardLayout>
  );
};

export default ChampionPoolCard;

const CardLayout = styled.div`
  position: relative;
  width: 104px;
  height: 160px;
  border: 1px solid ${props => props.theme.black.black85};
  border-radius: 10px;
`;

const ImgMask = styled.div`
  position: absolute;
  width: 104px;
  height: 159px;
  bottom: 1px;
  border-radius: 10px;
  background-image: url(${props => props.imgPath});
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.6;
  z-index: -1;
`;

const BlurMask = styled.div`
  position: absolute;
  width: 102px;
  height: 88px;

  bottom: 1px;

  background: linear-gradient(
    180deg,
    rgba(19, 19, 16, 0.2) 0%,
    rgba(19, 19, 16, 0.8) 100%
  );

  border-radius: 0px 0px 10px 10px;
`;

const ChampionName = styled.p`
  margin-top: 8px;
  margin-left: 4px;
  color: white;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: -0.05em;
`;

const GameCount = styled.p`
  font-weight: 700;
  font-size: 10px;
  letter-spacing: -0.05em;
  color: white;
`;
