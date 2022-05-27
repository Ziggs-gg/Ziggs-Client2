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
      <TotalData>
        <GameCount>{`${games} 게임`}</GameCount>
        <WinRate>{`승률 ${winRate}`}</WinRate>
      </TotalData>
      <DetailData>
        <Stats>
          <StatsTitle>KDA</StatsTitle>
          <StatsText>{`${kills} / ${deaths} / ${assists}`}</StatsText>
        </Stats>
        <Stats>
          <StatsTitle>DPM</StatsTitle>
          <StatsText>{`${DPM}`}</StatsText>
        </Stats>
        <Stats>
          <StatsTitle>GPM</StatsTitle>
          <StatsText>{`${GPM}`}</StatsText>
        </Stats>
        <Stats>
          <StatsTitle>VSPM</StatsTitle>
          <StatsText>{`${VSPM}`}</StatsText>
        </Stats>
      </DetailData>
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
  opacity: 0.5;
  /* filter: blur(1px); */
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

const TotalData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  height: 24px;
  left: 54px;
  top: 62px;
`;

const GameCount = styled.p`
  text-align: right;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: -0.05em;
  color: ${props => props.theme.white.white100};
`;

const WinRate = styled.p`
  text-align: right;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: -0.05em;
  color: ${props => props.theme.white.white100};
`;

const DetailData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 6px;
  gap: 2px;
  position: absolute;
  width: 96px;
  height: 62px;
  left: 4px;
  top: 92px;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2px;
`;

const StatsTitle = styled.span`
  font-weight: 700;
  font-size: 10px;
  letter-spacing: -0.05em;
  color: ${props => props.theme.white.white50};
`;

const StatsText = styled.span`
  font-weight: 700;
  font-size: 10px;
  letter-spacing: -0.05em;
  color: ${props => props.theme.white.white100};
`;
