import React, { useState } from 'react';
import ChartContainer from './components/ChartContainer';
import HeatMapContainer from './components/HeatMapContainer';
import List from './components/List';
import SelectedCards from './components/SelectedCards';
import Championful from './components/Championful';

const CpPlayer = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const deleteSelectedPlayer = choosenPlayer => {
    const newList = selectedPlayers.filter(player => player !== choosenPlayer);
    setSelectedPlayers(newList);
  };

  return (
    <>
      <List
        setSelectedPlayers={setSelectedPlayers}
        selectedPlayers={selectedPlayers}
        deleteSelectedPlayer={deleteSelectedPlayer}
      />
      <SelectedCards
        selectedPlayers={selectedPlayers}
        deleteSelectedPlayer={deleteSelectedPlayer}
      />
      <ChartContainer selectedPlayers={selectedPlayers} />
      <HeatMapContainer selectedPlayers={selectedPlayers} />
      <Championful selectedPlayers={selectedPlayers} />
    </>
  );
};

export default CpPlayer;
