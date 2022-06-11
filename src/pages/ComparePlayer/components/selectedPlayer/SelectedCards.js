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
  width: 1360px;
  height: 240px;
  margin: 16px auto;
`;

const EmptyCards = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 1360px;
  height: 240px;
  z-index: -1;
`;

const EmptyCard = styled.div`
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
`;
