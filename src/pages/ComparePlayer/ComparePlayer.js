import React, { useState } from 'react';
import List from '../../components/List';
import SelectedCards from './components/selectedPlayer/SelectedCards';
import ChartContainer from './components/ChartContainer';
import HeatMapContainer from './components/heatMap/HeatMapContainer';
import ChampionPool from './components/championPool/ChampionPool';
import SEOMetaTag from '../../components/SEOMetaTag';

const ComparePlayer = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const deleteSelectedPlayer = choosenPlayer => {
    const newList = selectedPlayers.filter(player => player !== choosenPlayer);
    setSelectedPlayers(newList);
  };

  return (
    <>
      <SEOMetaTag
        mainTitle={HELMET_CONTENT.mainTitle}
        pageTitle={HELMET_CONTENT.pageTitle}
      />
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

const HELMET_CONTENT = {
  mainTitle: 'VERSUS Pro Stats',
  pageTitle: '선수 비교',
};
