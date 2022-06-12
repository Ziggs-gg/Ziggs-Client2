import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API } from '../../../../config';
import ChampionCard from './ChampionCard';
const TeamChampionPool = ({ ptID }) => {
  const [championPoolData, setChampionPoolData] = useState();
  const TeamName = ptID.split('-')[3];
  const TeamRegion = ptID.split('-')[1];
  console.log(championPoolData);
  let championPool = {
    TOP: [],
    JUNGLE: [],
    MID: [],
    ADC: [],
    SUPPORT: [],
  };

  const championPoolKeys = Object.keys(championPool);

  championPoolData?.forEach(data => {
    championPool[data?.role].push(data);
  });

  useEffect(() => {
    axios
      .get(`${API.TEAM_CHAMPION_POOL}ptID=${ptID}`)
      .then(Response => {
        setChampionPoolData(Response.data.ChampionPool);
      })
      .catch(Error => {
        console.error('err:', Error);
      });
  }, [ptID]);

  return (
    <TeamChampionPoolLayout>
      <Title>
        <TeamLogo src={`/images/teams/${TeamRegion}/${TeamName}.png`} />
        <TitleText>{`${TeamName} 포지션별 시즌 챔피언풀 요약`}</TitleText>
      </Title>
      <ChampionPoolCardContainer>
        {championPoolKeys.map((role, idx) => {
          return (
            <RoleChapionPool key={idx}>
              <RoleLogo src={`/images/role/role_${role}_B70.png`} />
              {championPool[role].map((championData, idx) => {
                return <ChampionCard championData={championData} key={idx} />;
              })}
            </RoleChapionPool>
          );
        })}
      </ChampionPoolCardContainer>
    </TeamChampionPoolLayout>
  );
};

export default TeamChampionPool;

const TeamChampionPoolLayout = styled.div`
  width: 664px;
  height: 688px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  margin-top: 14px;
`;

const TeamLogo = styled.img`
  width: 32px;
  height: 32px;
`;

const TitleText = styled.p`
  margin-left: 8px;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #f3f3f3;
`;

const ChampionPoolCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 18px;
  height: 608px;
`;

const RoleChapionPool = styled.div`
  width: 195px;
  height: 288px;
  text-align: center;

  &:nth-child(2) {
    margin: 0 32px;
  }

  &:nth-child(4) {
    margin-right: 16px;
  }

  &:nth-child(5) {
    margin-left: 16px;
  }
`;

const RoleLogo = styled.img`
  width: 24px;
  height: 24px;
`;
