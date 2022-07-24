import React from 'react';
import styled from 'styled-components';
import TeamChampionPool from './TeamChampionPool';

const ChampionPool = ({ selectedTeams }) => {
  return (
    <ChampionPoolLayout>
      {selectedTeams.length === 0 && (
        <ChampionPoolEmpty> TEAM 시즌 챔피언풀</ChampionPoolEmpty>
      )}
      {selectedTeams.map((ptID, idx) => {
        return <TeamChampionPool ptID={ptID} key={idx} />;
      })}
      {selectedTeams.length !== 0 && <Divider />}
    </ChampionPoolLayout>
  );
};

export default ChampionPool;

const ChampionPoolLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 688px;
  margin-bottom: 16px;
  border-top: 3px solid ${props => props.theme.black.black85};
  border-bottom: 3px solid ${props => props.theme.black.black85};
`;

const Divider = styled.div`
  position: absolute;
  height: 656px;
  width: 1px;
  left: 679.5px;
  top: 16px;
  background: #353532;
`;

const ChampionPoolEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 688px;
  width: 100%;
  margin-bottom: 16px;
  color: ${props => props.theme.white.white80};
  font-size: 22px;
  font-weight: 900;
`;
