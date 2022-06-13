import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import { API } from '../../../../config';

const SelectedTeam = ({ team, selectedTeams, deleteSelectedTeam }) => {
  const [teamData, setTeamData] = useState();
  const [buttonVisible, setButtonVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  let teamStats = [];

  const orderNumber = selectedTeams.findIndex(ptID => ptID === team);

  if (teamData) {
    teamStats = [
      {
        name: '리그 순위',
        data: teamData[0].leagueRank,
      },
      {
        name: '매치 승리',
        data: teamData[0].matchWinCount,
      },
      {
        name: '매치 패배',
        data: teamData[0].matchDefeatCount,
      },
      {
        name: '매치 승률',
        data: teamData[0].matchWinRate,
      },
      {
        name: '세트 승리',
        data: teamData[0].gameWinCount,
      },
      {
        name: '세트 패배',
        data: teamData[0].gameDefeatCount,
      },
    ];
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API.SELECTED_TEAMBOX}ptID=${team}`)
      .then(Response => {
        setTeamData(Response.data);
        setLoading(false);
      })
      .catch(Error => {
        console.error('err:', Error);
      });
  }, [team]);

  return (
    <CardLayout
      orderNumber={orderNumber}
      buttonVisible={buttonVisible}
      onMouseEnter={() => setButtonVisible(true)}
      onMouseLeave={() => setButtonVisible(false)}
    >
      <CardLegends orderNumber={orderNumber} />
      <DeleteButton
        buttonVisible={buttonVisible}
        onClick={() => deleteSelectedTeam(team)}
      >
        <DeleteIcon src="https://user-images.githubusercontent.com/73605822/169196397-e82fc567-7952-444a-b7f4-4614552a3e95.png" />
      </DeleteButton>
      <ContentsWrapper buttonVisible={buttonVisible}>
        {loading ? (
          <TeamLogoLoading />
        ) : (
          <TeamLogo src={`${teamData && teamData[0].imgPath}`} />
        )}

        <TeamDesc>
          {loading ? (
            <TeamInfoLoading />
          ) : (
            <TeamInfo>{`${teamData && teamData[0].leagueID}`}</TeamInfo>
          )}
          {loading ? (
            <TeamNameLoading />
          ) : (
            <TeamName>{`${teamData && teamData[0].teamFullName}`}</TeamName>
          )}
        </TeamDesc>
        <TeamDataContainer>
          {teamStats.length === 0 ? (
            <>
              <TeamStats>
                <StatesTextLoading />
                <StatesTextLoading />
              </TeamStats>
              <TeamStats>
                <StatesTextLoading />
                <StatesTextLoading />
              </TeamStats>
              <TeamStats>
                <StatesTextLoading />
                <StatesTextLoading />
              </TeamStats>
              <TeamStats>
                <StatesTextLoading />
                <StatesTextLoading />
              </TeamStats>
              <TeamStats>
                <StatesTextLoading />
                <StatesTextLoading />
              </TeamStats>
              <TeamStats>
                <StatesTextLoading />
                <StatesTextLoading />
              </TeamStats>
            </>
          ) : (
            teamStats.map((stat, idx) => {
              return (
                <TeamStats key={idx}>
                  <StatesText>{stat.name}</StatesText>
                  <StatesText>{stat.data}</StatesText>
                </TeamStats>
              );
            })
          )}
        </TeamDataContainer>
      </ContentsWrapper>
    </CardLayout>
  );
};

export default SelectedTeam;

const CardLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 664px;
  height: 88px;

  border: 1px solid ${props => props.theme.black.black85};
  border-radius: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-right: 32px;
  margin-bottom: 16px;

  &:nth-child(2n) {
    margin-right: 0;
  }

  ${props =>
    props.orderNumber === 0 &&
    css`
      background: linear-gradient(
        180deg,
        rgba(19, 19, 16, 0) 0%,
        rgba(162, 212, 67, 0.05) 100%
      );
    `}

  ${props =>
    props.orderNumber === 1 &&
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
  height: 88px;
  left: -1px;
  top: -1px;
  border-radius: 10px;
  z-index: 1000;

  ${props =>
    props.orderNumber === 0 &&
    css`
      background: ${props => props.theme.green.greenMain};
    `}

  ${props =>
    props.orderNumber === 1 &&
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

const TeamLogo = styled.img`
  width: 72px;
  height: 72px;
  margin-left: 24px;
`;

const TeamLogoLoading = styled.span`
  width: 72px;
  height: 72px;
  margin-left: 24px;
  background: #565654;
  border-radius: 8px;
`;

const TeamDesc = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  letter-spacing: -0.03em;
  width: 151px;
  margin-left: 8px;
`;

const TeamInfo = styled.p`
  font-size: 12px;
  font-weight: 300;
  letter-spacing: -0.03em;
  color: ${props => props.theme.white.white50};
`;

const TeamInfoLoading = styled.span`
  width: 60px;
  height: 12px;
  background: #565654;
  margin-bottom: 1px;
  border-radius: 3px;
`;

const TeamName = styled.p`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: ${props => props.theme.white.white100};
`;

const TeamNameLoading = styled.span`
  width: 80px;
  height: 14px;
  background: #565654;
  border-radius: 3px;
`;

const TeamDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  width: 384px;
  height: 32px;
  margin-right: 8px;
`;

const TeamStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 54px;
  height: 32px;
`;

const StatesText = styled.span`
  height: 14px;
  margin-top: 4px;
  letter-spacing: -0.02em;
  font-weight: 500;
  font-size: 14px;
  color: #f3f3f3;
`;

const DeleteButton = styled.button`
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  top: 24px;
  right: 312px;
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

const StatesTextLoading = styled.div`
  height: 16px;
  width: 30px;
  margin-top: 4px;
  background-color: ${props => props.theme.black.black70};
  border-radius: 3px;
`;
