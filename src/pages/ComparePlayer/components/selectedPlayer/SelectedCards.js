import React from 'react';
import styled from 'styled-components';
import SelectedPlayer from './SelectedPlayer';
import MobileSelectedPlayer from './mobile/MobileSelectedPlayer';
import { useMediaQuery } from 'react-responsive';

const SelectedCards = ({ selectedPlayers, deleteSelectedPlayer }) => {
  const isPc = useMediaQuery({
    query: '(min-width:429px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width:428px)',
  });
  return (
    <CardsContainer>
      {selectedPlayers.length !== 0 &&
        selectedPlayers?.map((player, idx) => {
          return (
            <>
              {isPc && (
                <SelectedPlayer
                  player={player}
                  key={idx}
                  selectedPlayers={selectedPlayers}
                  deleteSelectedPlayer={deleteSelectedPlayer}
                />
              )}
              {isMobile && (
                <MobileSelectedPlayer
                  player={player}
                  key={idx}
                  selectedPlayers={selectedPlayers}
                  deleteSelectedPlayer={deleteSelectedPlayer}
                />
              )}
            </>
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

  @media screen and (max-width: 428px) {
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 95%;
    height: 432px;
    margin: 16px 8px;
  }
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

  @media screen and (max-width: 428px) {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    height: 432px;
    z-index: -1;
  }
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

  @media screen and (max-width: 428px) {
    width: 95%;
    height: 100px;
    border: 1px solid ${props => props.theme.black.black85};
    border-radius: 10px;
    margin-bottom: 8px;

    &:nth-child(1n) {
      margin-right: 0;
    }
  }
`;
