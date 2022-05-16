import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SelectedPlayer = () => {
  const [playerData, setPlayerData] = useState();
  let playerStats = [];

  if (playerData) {
    playerStats = [
      {
        name: '게임',
        data: playerData.games,
      },
      {
        name: '승리',
        data: playerData.winCount,
      },
      {
        name: '패배',
        data: playerData.defeatCount,
      },
      {
        name: '총 킬',
        data: playerData.totalKills,
      },
      {
        name: '총 데스',
        data: playerData.totalDeaths,
      },
      {
        name: '총 어시스트',
        data: playerData.totalAssists,
      },
    ];
  }

  useEffect(() => {
    axios
      .get(
        'http://18.237.44.175:3000/api/compare/player/SelectedPlayerBox?phRole=21-LCK-SUM-HLE-Chovy-MID'
      )
      .then(Response => {
        setPlayerData(Response.data);
      })
      .catch(Error => {
        console.error('err:', Error);
      });
  }, []);

  console.log(playerData);

  return (
    <Card>
      <CardLegends />
      <PlayerInfo>
        <TeamLogo src="images/teams/AF.png" />
        <RoleLogo src="images/role/role_TOP_W.png" />
        <PlayerImg src="images/player/21-LCK-SUM-T1-Keria.png" alt="img" />
      </PlayerInfo>
      <PlayerDesc>
        <PlayerTeam>
          {playerData && `${playerData.region} - ${playerData.teamName}`}
        </PlayerTeam>
        <PlayerName>{playerData && playerData.playerIDinGame}</PlayerName>
      </PlayerDesc>
      <PlayerDataContainer>
        {playerStats.map((stats, idx) => {
          return (
            <PlayerData key={idx}>
              <StatesText>{stats.name}</StatesText>
              <StatesText>{stats.data}</StatesText>
            </PlayerData>
          );
        })}
        <MostChampions>
          <StatesText>선호 챔피언</StatesText>
          <ChampionsImg src="http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Aatrox_0.jpg" />
          <ChampionsImg src="http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Gnar_0.jpg" />
          <ChampionsImg src="http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Gragas_0.jpg" />
          <ChampionsImg src="http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Teemo_0.jpg" />
          <ChampionsImg src="http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Jayce_0.jpg" />
        </MostChampions>
      </PlayerDataContainer>
    </Card>
  );
};

export default SelectedPlayer;

const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 664px;
  height: 88px;
  background: linear-gradient(
    180deg,
    rgba(19, 19, 16, 0) 0%,
    rgba(49, 115, 193, 0.05) 100%
  );
  border: 1px solid ${props => props.theme.black.black85};
  border-radius: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-right: 32px;
  margin-bottom: 16px;

  &:nth-child(2n) {
    margin-right: 0;
  }
`;

const CardLegends = styled.div`
  position: absolute;
  width: 8px;
  height: 88px;
  left: -1px;
  top: -1px;

  background: ${props => props.theme.red.redMain};
  border-radius: 10px;
`;

const PlayerInfo = styled.div`
  position: relative;
  width: 84px;
  height: 88px;
  margin-left: 24px;
`;

const TeamLogo = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  left: 8px;
  top: 6px;
`;

const RoleLogo = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  right: 8px;
  top: 6px;
`;

const PlayerImg = styled.img`
  position: absolute;
  width: 84px;
  height: 64px;
  bottom: 0;
  color: white;

  mask-image: linear-gradient(
    to bottom,
    #c4c4c4 52.71%,
    rgba(196, 196, 196, 0.2) 86.46%,
    rgba(196, 196, 196, 0) 100%
  );
`;

const PlayerDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85px;
  height: 32px;
  margin-left: 8px;
`;

const PlayerName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.white.white100};
`;

const PlayerTeam = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: ${props => props.theme.white.white50};
`;

const PlayerDataContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 447px;
  height: 36px;
  margin-left: 8px;
`;

const PlayerData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4px;
  margin-right: 16px;
`;

const StatesText = styled.p`
  height: 16px;
  font-weight: 500;
  font-size: 14px;
  color: #f3f3f3;
`;

const MostChampions = styled.div`
  width: 90px;
  height: 36px;
`;

const ChampionsImg = styled.img`
  width: 18px;
  height: 18px;

  border: 1px solid ${props => props.theme.black.black85};
  border-radius: 3px;
`;
