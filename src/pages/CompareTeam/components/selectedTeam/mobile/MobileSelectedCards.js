import React from 'react';
import styled from 'styled-components';
import MobileSelectedTeam from './MobileSelectedTeam';
import TeamPlayers from '../TeamPlayers';

const MobileSelectedCards = ({ selectedTeams, deleteSelectedTeam }) => {
  return (
    <SelectedCardsLayout>
      <EmptyCards>
        <EmptyCard />
        <EmptyCard />
      </EmptyCards>
      {selectedTeams?.map((team, idx) => {
        return (
          <SelectedTeamData key={idx}>
            <MobileSelectedTeam
              team={team}
              deleteSelectedTeam={deleteSelectedTeam}
              selectedTeams={selectedTeams}
            />
          </SelectedTeamData>
        );
      })}
    </SelectedCardsLayout>
  );
};

export default MobileSelectedCards;

const SelectedCardsLayout = styled.div`
  height: 304px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectedTeamData = styled.div``;

const EmptyCards = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 304px;
  z-index: -1;
`;

const EmptyCard = styled.div`
  width: 95%;
  height: 88px;
  border: 1px solid ${props => props.theme.black.black85};
  border-radius: 10px;
  margin-bottom: 16px;
`;
