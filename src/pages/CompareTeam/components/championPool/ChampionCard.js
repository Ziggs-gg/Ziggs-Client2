import React from 'react';
import styled from 'styled-components';

const ChampionCard = ({
  championData: {
    AVG_DPM,
    AVG_GPM,
    AVG_KDA,
    AVG_VSPM,
    DDname,
    championName,
    gameCount,
    winRate,
  },
}) => {
  const imgPath = `http://ddragon.leagueoflegends.com/cdn/img/champion/centered/${DDname}_0.jpg`;

  return (
    <ChampionCardLayout>
      <BackgroundImg imgPath={imgPath} />
      <ChampionName>{championName}</ChampionName>
      <GameData>
        <GameCount>{`게임 ${gameCount}`}</GameCount>
        <WinRate>{`승률 ${winRate}`}</WinRate>
      </GameData>
      <StatsContainer>
        <StatBox>
          <StatTitle>KDA</StatTitle>
          <StatText>{AVG_KDA}</StatText>
        </StatBox>
        <StatBox>
          <StatTitle>DPM</StatTitle>
          <StatText>{AVG_DPM}</StatText>
        </StatBox>
        <StatBox>
          <StatTitle>GPM</StatTitle>
          <StatText>{AVG_GPM}</StatText>
        </StatBox>
        <StatBox>
          <StatTitle>VSPM</StatTitle>
          <StatText>{AVG_VSPM ? AVG_VSPM : '-'}</StatText>
        </StatBox>
      </StatsContainer>
    </ChampionCardLayout>
  );
};

export default ChampionCard;

const ChampionCardLayout = styled.div`
  position: relative;
  width: 195px;
  height: 72px;
  border: 1px solid #353532;
  border-radius: 10px;
  margin-top: 16px;
`;

const BackgroundImg = styled.div`
  position: absolute;
  background-image: url(${props => props.imgPath});
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  width: 60%;
  height: 100%;
  top: 0;
  mask-image: linear-gradient(
    to right,
    #c4c4c4 30%,
    rgba(196, 196, 196, 0.1) 86.46%,
    rgba(196, 196, 196, 0) 100%
  );
  border-radius: 9px;
  opacity: 0.6;
  z-index: -1;
`;

const ChampionName = styled.p`
  position: absolute;
  right: 9px;
  bottom: 50px;
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.05em;
  color: ${props => props.theme.white.white100};
`;

const GameData = styled.div`
  display: flex;
  gap: 11px;
  position: absolute;
  right: 9px;
  top: 22px;
`;

const GameCount = styled.p`
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.05em;
  color: ${props => props.theme.white.white100};
`;

const WinRate = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.05em;
  color: ${props => props.theme.white.white100};
`;

const StatsContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 11px;
  right: 9px;
  bottom: 4px;
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StatTitle = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.05em;
  color: ${props => props.theme.white.white50};
`;

const StatText = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.05em;
  color: ${props => props.theme.white.white100};
`;
