import React from 'react';
import styled from 'styled-components';
import PlayerCard from './PlayerCard';
const List = () => {
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
  padding: 16px 80px;
  padding-bottom: 0px;
  overflow-y: scroll;

  border-top: 1px solid ${props => props.theme.black.black85};
  border-bottom: 3px solid ${props => props.theme.black.black85};
`;
