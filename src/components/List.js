import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PlayerCard from '../pages/ComparePlayer/components/playerList/PlayerCard';
import { useLocation } from 'react-router-dom';
import { API } from '../config';

const List = ({
  setSelectedPlayers,
  selectedPlayers,
  deleteSelectedPlayer,
}) => {
  const location = useLocation();

  const [playerList, setPlayerList] = useState([]);
  const [teamList, setTeamList] = useState([]);

  const handleSelectPlayer = player => {
    if (
      selectedPlayers.length < 4 &&
      selectedPlayers.includes(player) === false
    ) {
      setSelectedPlayers(prev => [...prev, player]);
    } else {
      deleteSelectedPlayer(player);
    }
  };

  useEffect(() => {
    const fetchPlayerData = () => {
      axios
        .get(`${API.PLAYER_LIST}${location.search}`)
        .then(Response => {
          setPlayerList(Response.data);
        })
        .catch(Error => {
          console.error('err:', Error);
        });
    };

    const fetchTeamData = () => {
      axios
        .get(`${API.TEAM_LIST}${location.search}`)
        .then(Response => {
          setTeamList(Response.data);
        })
        .catch(Error => {
          console.error('err:', Error);
        });
    };

    location.pathname === '/compare/player' && fetchPlayerData();
    location.pathname === '/compare/team' && fetchTeamData();
  }, [location.search, location.pathname]);

  return (
    <ListLayout>
      {location.search && location.pathname === '/compare/player' ? (
        playerList.map((player, idx) => {
          return (
            <PlayerCard
              key={idx}
              player={player}
              handleSelectPlayer={handleSelectPlayer}
              selectedPlayers={selectedPlayers}
            />
          );
        })
      ) : (
        <NotFoundLayout>
          <NotFound>
            <NotFoundIcon src="/images/landing/InfoIcon.png" />
            <NotFoundDescLarge>데이터가 없습니다.</NotFoundDescLarge>
            <NotFoundDescSmall>상단 필터를 확인해주세요!</NotFoundDescSmall>
          </NotFound>
        </NotFoundLayout>
      )}
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

const NotFoundLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const NotFound = styled.div`
  width: 175px;
  height: 124px;
  text-align: center;
`;

const NotFoundIcon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 8px;
`;

const NotFoundDescLarge = styled.p`
  font-weight: 900;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  color: ${props => props.theme.white.white100};
`;
const NotFoundDescSmall = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${props => props.theme.white.white100};
`;