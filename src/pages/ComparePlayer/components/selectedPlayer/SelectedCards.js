import React from 'react';
import styled from 'styled-components';
import SelectedPlayer from './SelectedPlayer';

const SelectedCards = ({ selectedPlayers, deleteSelectedPlayer }) => {
  return (
    <CardsContainer>
      {selectedPlayers?.map((player, idx) => {
        return (
          <SelectedPlayer
            player={player}
            key={idx}
            selectedPlayers={selectedPlayers}
            deleteSelectedPlayer={deleteSelectedPlayer}
          />
        );
      })}
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
