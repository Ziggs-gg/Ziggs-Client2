import React, { useState } from 'react';
import List from './components/playerList/List';
import SelectedCards from './components/selectedPlayer/SelectedCards';
import ChartContainer from './components/ChartContainer';
import HeatMapContainer from './components/heatMap/HeatMapContainer';
import ChampionPool from './components/championPool/ChampionPool';

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
      {/* <HeatMapContainer selectedPlayers={selectedPlayers} /> */}
      <ChampionPool selectedPlayers={selectedPlayers} />
    </>
  );
};

export default CpPlayer;
