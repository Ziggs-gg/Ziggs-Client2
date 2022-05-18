import React, { useState } from 'react';
import ChartContainer from './components/ChartContainer';
import HeatMapContainer from './components/HeatMapContainer';
import List from './components/List';
import SelectedCards from './components/SelectedCards';

const CpPlayer = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  return (
    <>
      <List
        setSelectedPlayers={setSelectedPlayers}
        selectedPlayers={selectedPlayers}
      />
      <SelectedCards selectedPlayers={selectedPlayers} />
      <ChartContainer selectedPlayers={selectedPlayers} />
      <HeatMapContainer selectedPlayers={selectedPlayers} />
    </>
  );
};

export default CpPlayer;
