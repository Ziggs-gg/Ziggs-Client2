import React from 'react';
import styled from 'styled-components';
import SelectedPlayer from './SelectedPlayer';

const SelectedCards = ({ selectedPlayers, deleteSelectedPlayer }) => {
  return (
    <CardsContainer>
      {selectedPlayers.length !== 0 &&
        selectedPlayers?.map((player, idx) => {
          return (
            <SelectedPlayer
              player={player}
              key={idx}
              selectedPlayers={selectedPlayers}
              deleteSelectedPlayer={deleteSelectedPlayer}
            />
          );
        })}
      <EmptyCards>
        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
      </EmptyCards>
    </CardsContainer>
  );
};

export default SelectedCards;

const CardsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  height: 240px;
  margin: 16px 0;
`;

const EmptyCards = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  height: 240px;
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
