import React from 'react';
import styled from 'styled-components';
import SelectedTeam from './SelectedTeam';
import TeamPlayers from './TeamPlayers';

const SelectedCards = ({ selectedTeams, deleteSelectedTeam }) => {
  return (
    <SelectedCardsLayout>
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
