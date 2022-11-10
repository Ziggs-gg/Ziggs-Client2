import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import axios from 'axios';
import { API } from '../../../../../config';

const MobileSelectedPlayer = ({
  player,
  selectedPlayers,
  deleteSelectedPlayer,
}) => {
  const [playerData, setPlayerData] = useState();
  const [buttonVisible, setButtonVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const playerInfoArr = playerData?.phRole?.split('-');

  let playerStats = [];

  const orderNumber = selectedPlayers.findIndex(
    playerData => playerData === player
  );

  if (playerData) {
    playerStats = [
      {
        name: '게임',
        data: playerData.games ?? '-',
      },
      {
        name: '승리',
        data: playerData.winCount ?? '-',
      },
      {
        name: '패배',
        data: playerData.defeatCount ?? '-',
      },
      {
        name: '총 킬',
        data: playerData.totalKills ?? '-',
      },
      {
        name: '총 데스',
        data: playerData.totalDeaths ?? '-',
      },
      {
        name: '총 어시',
        data: playerData.totalAssists ?? '-',
      },
    ];
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API.SELECTED_PLAYER}phRole=${player}`)
      .then(Response => {
        setPlayerData(Response.data[0]);
        setLoading(false);
      })
      .catch(Error => {
        console.error('err:', Error);
      });
  }, [player]);

  return (
    <Card
      orderNumber={orderNumber}
      buttonVisible={buttonVisible}
      onMouseEnter={() => setButtonVisible(true)}
      onMouseLeave={() => setButtonVisible(false)}
    >
      <CardLegends orderNumber={orderNumber} />
      <DeleteButton
        buttonVisible={buttonVisible}
        onClick={() => deleteSelectedPlayer(player)}
      >
        <DeleteIcon src="https://user-images.githubusercontent.com/73605822/169196397-e82fc567-7952-444a-b7f4-4614552a3e95.png" />
      </DeleteButton>
      <ContentsWrapper buttonVisible={buttonVisible}>
        <PlayerInfo>
          {loading ? (
            <TeamLogoLoading />
          ) : (
            <TeamLogo
              src={`/images/teams/${playerData?.region}/${playerData?.teamName}.png`}
              alt="teamLogo"
            />
          )}
          {loading ? (
            <RoleLogoLoading />
          ) : (
            <RoleLogo src={`/images/role/role_${playerData?.role}_W.png`} />
          )}
          <PlayerImg
            src={
              loading
                ? '/images/Players_fill_B70.png'
                : `${playerData?.imgPath}`
            }
            alt="Player_img"
          />
        </PlayerInfo>

        <All>
          <DescAndMost>
            <PlayerDesc>
              {loading ? (
                <PlayerTeamLoading />
              ) : (
                <PlayerTeam>
                  {playerData?.phRole &&
                    ` ${playerInfoArr[0]} - ${playerInfoArr[1]} - ${playerInfoArr[2]}`}
                </PlayerTeam>
              )}
              {loading ? (
                <PlayerNameLoading />
              ) : (
                <PlayerName>
                  {playerData?.phRole &&
                    `${playerInfoArr[3]} ${playerInfoArr[4]}`}
                </PlayerName>
              )}
            </PlayerDesc>
            <MostChampions>
              {loading ? (
                <MostChampionsTitleLoading />
              ) : (
                <StatesText>선호 챔피언</StatesText>
              )}

              {loading ? (
                <MostChampionsLoading />
              ) : (
                <Champions>
                  {playerData?.most1 && (
                    <ChampionsImg
                      src={`http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${playerData.most1}_0.jpg`}
                    />
                  )}
                  {playerData?.most2 && (
                    <ChampionsImg
                      src={`http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${playerData.most2}_0.jpg`}
                    />
                  )}
                  {playerData?.most3 && (
                    <ChampionsImg
                      src={`http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${playerData.most3}_0.jpg`}
                    />
                  )}
                  {playerData?.most4 && (
                    <ChampionsImg
                      src={`http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${playerData.most4}_0.jpg`}
                    />
                  )}
                  {playerData?.most5 && (
                    <ChampionsImg
                      src={`http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${playerData.most5}_0.jpg`}
                    />
                  )}
                </Champions>
              )}
            </MostChampions>
          </DescAndMost>

          <PlayerDataContainer>
            {playerStats.length === 0 ? (
              <>
                <PlayerData>
                  <StatesTextLoading />
                  <StatesTextLoading />
                </PlayerData>
                <PlayerData>
                  <StatesTextLoading />
                  <StatesTextLoading />
                </PlayerData>
                <PlayerData>
                  <StatesTextLoading />
                  <StatesTextLoading />
                </PlayerData>
                <PlayerData>
                  <StatesTextLoading />
                  <StatesTextLoading />
                </PlayerData>
                <PlayerData>
                  <StatesTextLoading />
                  <StatesTextLoading />
                </PlayerData>
                <PlayerData>
                  <StatesTextLoading />
                  <StatesTextLoading />
                </PlayerData>
              </>
            ) : (
              playerStats.map((stats, idx) => {
                return (
                  <PlayerData key={idx}>
                    <StatesText>{stats.name}</StatesText>
                    <StatesText>{stats.data}</StatesText>
                  </PlayerData>
                );
              })
            )}
          </PlayerDataContainer>
        </All>
      </ContentsWrapper>
    </Card>
  );
};

export default MobileSelectedPlayer;

const DescAndMost = styled.div`
  display: flex;
  margin-bottom: 8px;
  margin-left: 3%;
`;

const All = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;

  border: 1px solid ${props => props.theme.black.black85};
  border-radius: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-right: 0;
  margin-bottom: 8px;

  &:nth-child(2n) {
    margin-right: 0;
  }

  ${props =>
    props.orderNumber === 0 &&
    css`
      background: linear-gradient(
        180deg,
        rgba(19, 19, 16, 0) 0%,
        rgba(193, 54, 49, 0.05) 100%
      );
    `}

  ${props =>
    props.orderNumber === 1 &&
    css`
      background: linear-gradient(
        180deg,
        rgba(19, 19, 16, 0) 0%,
        rgba(49, 115, 193, 0.05) 100%
      );
    `}

    ${props =>
    props.orderNumber === 2 &&
    css`
      background: linear-gradient(
        180deg,
        rgba(19, 19, 16, 0) 0%,
        rgba(162, 212, 67, 0.05) 100%
      );
    `}

    ${props =>
    props.orderNumber === 3 &&
    css`
      background: linear-gradient(
        180deg,
        rgba(19, 19, 16, 0) 0%,
        rgba(64, 40, 19, 0.15) 100%,
        rgba(247, 125, 28, 0.05) 100%
      );
    `}
`;

const CardLegends = styled.div`
  position: absolute;
  width: 8px;
  height: 100px;
  left: -1px;
  top: -1px;
  border-radius: 10px;
  z-index: 1000;

  ${props =>
    props.orderNumber === 0 &&
    css`
      background: ${props => props.theme.red.redMain};
    `}

  ${props =>
    props.orderNumber === 1 &&
    css`
      background: ${props => props.theme.blue.blueMain};
    `}

    ${props =>
    props.orderNumber === 2 &&
    css`
      background: ${props => props.theme.green.greenMain};
    `}

    ${props =>
    props.orderNumber === 3 &&
    css`
      background: ${props => props.theme.orange.orangeMain};
    `}
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.buttonVisible &&
    css`
      filter: blur(4px);
    `}
`;

const PlayerInfo = styled.div`
  position: relative;
  width: 110px;
  height: 100px;
  margin-right: 8px;
  margin-left: 5px;
`;

const TeamLogo = styled.img`
  position: absolute;
  width: 12px;
  height: 12px;
  left: 4px;
  top: 6%;
`;

const TeamLogoLoading = styled.span`
  position: absolute;
  width: 12px;
  height: 12px;
  left: 4px;
  top: 6%;
  background: #565654;
  border: 1px solid #353532;
  border-radius: 3px;
`;

const RoleLogo = styled.img`
  position: absolute;
  width: 12px;
  height: 12px;
  right: 4px;
  top: 6%;
  opacity: 0.5;
`;

const RoleLogoLoading = styled.span`
  position: absolute;
  width: 12px;
  height: 12px;
  right: 4px;
  top: 6%;
  background: #565654;
  border: 1px solid #353532;
  border-radius: 3px;
`;

const PlayerImg = styled.img`
  position: absolute;
  width: 75px;
  height: 78px;
  bottom: 0;
  color: white;

  object-fit: contain;
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
  letter-spacing: -0.03em;
  width: 120px;
  margin-top: 17px;
  padding-left: 8px;
`;

const PlayerName = styled.p`
  font-size: 12px;
  font-weight: 500;
  height: 16px;
  letter-spacing: -0.03em;
  color: ${props => props.theme.white.white100};
`;

const PlayerNameLoading = styled.div`
  height: 16px;
  width: 100px;
  background-color: ${props => props.theme.black.black70};
  border-radius: 3px;
`;

const PlayerTeam = styled.p`
  font-size: 10px;
  font-weight: 300;
  height: 14px;
  color: ${props => props.theme.white.white50};
`;

const PlayerTeamLoading = styled.div`
  height: 14px;
  width: 100px;
  margin-bottom: 2px;
  background-color: ${props => props.theme.black.black70};
  border-radius: 3px;
`;

const PlayerDataContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 36px;
  margin-left: 4px;
`;

const PlayerData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 4px;
`;

const StatesText = styled.span`
  height: 16px;
  margin-top: 4px;
  font-weight: 500;
  font-size: 12px;
  color: #f3f3f3;
`;

const StatesTextLoading = styled.div`
  height: 16px;
  width: 20px;
  margin-top: 4px;
  background-color: ${props => props.theme.black.black70};
  border-radius: 3px;
`;

const MostChampions = styled.div`
  height: 36px;
  margin-top: 5px;
`;
const MostChampionsTitleLoading = styled.div`
  height: 16px;
  width: 30px;
  margin-top: 2px;
  background-color: ${props => props.theme.black.black70};
  border-radius: 3px;
`;
const MostChampionsLoading = styled.div`
  width: 128px;
  height: 16px;
  margin-top: 4px;

  background-color: ${props => props.theme.black.black70};
  border-radius: 3px;
`;
const Champions = styled.div``;

const ChampionsImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 2px;
  border: 1px solid ${props => props.theme.black.black85};
  border-radius: 3px;
`;

const DeleteButton = styled.button`
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  top: 30px;
  right: 155px;
  width: 40px;
  height: 40px;
  background: none;
  background-image: url();
  border: 1px solid ${props => props.theme.black.black85};
  border-radius: 10px;
  z-index: 10000;

  cursor: pointer;

  ${props =>
    props.buttonVisible &&
    css`
      display: flex;
    `}
`;

const DeleteIcon = styled.img`
  width: 24px;
`;
