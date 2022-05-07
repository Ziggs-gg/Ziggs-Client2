import React from 'react';
import ChartContainer from './components/ChartContainer';
import HeatMapContainer from './components/HeatMapContainer';
import List from './components/List';
import SelectedCards from './components/SelectedCards';

const CpPlayer = () => {
  return (
    <>
      <List />
      <SelectedCards />
      <ChartContainer />
      <HeatMapContainer />
    </>
  );
};

export default CpPlayer;
