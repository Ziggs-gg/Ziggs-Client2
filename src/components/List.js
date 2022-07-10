import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PlayerCard from '../pages/ComparePlayer/components/playerList/PlayerCard';
import TeamCard from '../pages/CompareTeam/components/teamList/TeamCard';
import { useLocation } from 'react-router-dom';
import { API } from '../config';
import ReactGA from 'react-ga';

const List = ({
  setSelectedPlayers,
  selectedPlayers,
  deleteSelectedPlayer,
  selectedTeams,
  setSelectedTeams,
  deleteSelectedTeam,
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

  const handleSelectTeam = Team => {
    if (selectedTeams.length < 2 && selectedTeams.includes(Team) === false) {
      setSelectedTeams(prev => [...prev, Team]);
    } else {
      deleteSelectedTeam(Team);
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

  if (
    location.search &&
    location.pathname === '/compare/player' &&
    playerList.length !== 0
  ) {
    return (
      <ListLayout>
        {playerList.map((player, idx) => {
          return (
            <PlayerCard
              key={idx}
              player={player}
              handleSelectPlayer={handleSelectPlayer}
              selectedPlayers={selectedPlayers}
              onClick={() =>
                ReactGA.event({
                  category: 'Player List',
                  action: 'Player Select',
                })
              }
            />
          );
        })}
      </ListLayout>
    );
  } else if (
    location.search &&
    location.pathname === '/compare/team' &&
    teamList.length !== 0
  ) {
    return (
      <ListLayout>
        {teamList.map((team, idx) => {
          return (
            <TeamCard
              key={idx}
              team={team}
              handleSelectTeam={handleSelectTeam}
              selectedTeams={selectedTeams}
            />
          );
        })}
      </ListLayout>
    );
  } else {
    return (
      <ListLayout>
        <NotFoundLayout>
          <NotFound>
            <NotFoundIcon src="/images/landing/InfoIcon.png" />
            <NotFoundDescLarge>데이터가 없습니다.</NotFoundDescLarge>
            <NotFoundDescSmall>
              우측 상단 필터를 확인해주세요!
            </NotFoundDescSmall>
          </NotFound>
        </NotFoundLayout>
      </ListLayout>
    );
  }
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
