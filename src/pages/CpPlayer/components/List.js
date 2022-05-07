import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PlayerCard from './PlayerCard';
const List = () => {
  // useEffect(() => {
  //   axios
  //     .get(
  //       'http://18.237.44.175:3000/api/compare/player?region=1&year=2021&splitSeason=Spring'
  //     )
  //     .then(Response => {
  //       console.log('OK:', Response);
  //     })
  //     .catch(Error => {
  //       console.error('err:', Error);
  //     });
  // }, []);

  return (
    <ListLayout>
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
    </ListLayout>
  );
};

export default List;

const ListLayout = styled.div`
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
