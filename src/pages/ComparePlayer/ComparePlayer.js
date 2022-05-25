import React, { useState } from 'react';
import ChartContainer from './components/ChartContainer';
import HeatMapContainer from './components/statsDetail/HeatMapContainer';
import List from './components/playerList/List';
import SelectedCards from './components/selectedPlayer/SelectedCards';
import Championful from './components/statsDetail/Championful';
import StatsDetail from './components/statsDetail/StatsDetail';

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
      <StatsDetail selectedPlayers={selectedPlayers} />
    </>
  );
};

export default CpPlayer;
