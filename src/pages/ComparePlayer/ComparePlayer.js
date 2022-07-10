import React, { useState } from 'react';
import List from '../../components/List';
import SelectedCards from './components/selectedPlayer/SelectedCards';
import ChartContainer from './components/ChartContainer';
import HeatMapContainer from './components/heatMap/HeatMapContainer';
import ChampionPool from './components/championPool/ChampionPool';
import { Helmet } from 'react-helmet-async';
const ComparePlayer = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const deleteSelectedPlayer = choosenPlayer => {
    const newList = selectedPlayers.filter(player => player !== choosenPlayer);
    setSelectedPlayers(newList);
  };

  return (
    <>
      <Helmet>
        <title>VERSUS Pro Stats | 선수 비교</title>
      </Helmet>
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
      <ChampionPool selectedPlayers={selectedPlayers} />
    </>
  );
};

export default ComparePlayer;
