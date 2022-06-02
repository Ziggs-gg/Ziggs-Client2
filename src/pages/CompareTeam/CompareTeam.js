import React from 'react';
import List from '../../components/List';
import ChartContainer from './components/ChartContainer';
import SelectedCards from './components/selectedTeam/SelectedCards';
import ChampionPool from './components/championPool/ChampionPool';

const CompareTeam = () => {
  return (
    <>
      <List />
      <SelectedCards />
      <ChartContainer />
      <ChampionPool />
    </>
  );
};

export default CompareTeam;
