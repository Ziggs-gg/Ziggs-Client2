import React from 'react';
import styled from 'styled-components';
import TeamChampionPool from './TeamChampionPool';

const ChampionPool = ({ selectedTeams }) => {
  return (
    <ChampionPoolLayout>
      {selectedTeams.map((ptID, idx) => {
        return <TeamChampionPool ptID={ptID} key={idx} />;
      })}
      <Divider />
    </ChampionPoolLayout>
  );
};

export default ChampionPool;

const ChampionPoolLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 1360px;
  height: 688px;
  margin: 0 auto;
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
