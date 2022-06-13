import React from 'react';
import styled from 'styled-components';
import SelectedTeam from './SelectedTeam';
import TeamPlayers from './TeamPlayers';

const SelectedCards = ({ selectedTeams, deleteSelectedTeam }) => {
  return (
    <SelectedCardsLayout>
      <EmptyCards>
        <EmptyCard />
        <EmptyCard />
      </EmptyCards>
      {selectedTeams?.map((team, idx) => {
        return (
          <SelectedTeamData key={idx}>
            <SelectedTeam
              team={team}
              deleteSelectedTeam={deleteSelectedTeam}
              selectedTeams={selectedTeams}
            />
            <TeamPlayers team={team} />
          </SelectedTeamData>
        );
      })}
    </SelectedCardsLayout>
  );
};

export default SelectedCards;

const SelectedCardsLayout = styled.div`
  width: 1360px;
  height: 304px;
  margin: 0 auto;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`;

const SelectedTeamData = styled.div``;

const EmptyCards = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 1360px;
  height: 304px;
  z-index: -1;
`;

const EmptyCard = styled.div`
  width: 664px;
  height: 88px;
  border: 1px solid ${props => props.theme.black.black85};
  border-radius: 10px;
  margin-right: 32px;
  margin-bottom: 16px;

  &:nth-child(2n) {
    margin-right: 0;
  }
`;
