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
        description={HELMET_CONTENT.description}
        keywords={HELMET_CONTENT.keywords}
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
  description:
    'VERSUS.PS는 리그오브레전드 데이터를 시각화한 차트를 제공하고 있습니다. 응원하는 선수 혹은 구단의 데이터를 한 눈에 살펴보세요.라이벌 선수 혹은 구단의 지표를 함께 비교해보실 수 있습니다.',
  keywords: '롤 지표사이트, LCK, LPL, LEC, pro stats, league of legend',
};
