import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PlayerCard from './PlayerCard';
import { useLocation } from 'react-router-dom';
import { API } from '../../../config';

const List = ({ setSelectedPlayers, selectedPlayers }) => {
  const location = useLocation();

  const [playerList, setPlayerList] = useState([]);

  const handleSelectPlayer = player => {
    if (
      selectedPlayers.length < 4 &&
      selectedPlayers.includes(player) === false
    ) {
      setSelectedPlayers(prev => [...prev, player]);
    }
  };

  useEffect(() => {
    axios
      .get(`${API.PLAYER_LIST}${location.search}`)
      .then(Response => {
        setPlayerList(Response.data);
      })
      .catch(Error => {
        console.error('err:', Error);
      });
  }, [location.search]);

  return (
    <ListLayout>
      {playerList.map((player, idx) => {
        return (
          <PlayerCard
            key={idx}
            player={player}
            handleSelectPlayer={handleSelectPlayer}
          />
        );
      })}
    </ListLayout>
  );
};

export default List;

const ListLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 1360px;
  height: 432px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 16px 78px;
  padding-bottom: 0px;
  overflow-y: scroll;
  border-top: 1px solid ${props => props.theme.black.black85};
  border-bottom: 3px solid ${props => props.theme.black.black85};

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: ${props => props.theme.white.white80};
  }
`;
