import React, { useState } from 'react';
import List from '../../components/List';
import ChartContainer from './components/ChartContainer';
import SelectedCards from './components/selectedTeam/SelectedCards';
import ChampionPool from './components/championPool/ChampionPool';
import SEOMetaTag from '../../components/SEOMetaTag';

const CompareTeam = () => {
  const [selectedTeams, setSelectedTeams] = useState([]);

  const deleteSelectedTeam = choosenTeam => {
    const newList = selectedTeams.filter(player => player !== choosenTeam);
    setSelectedTeams(newList);
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
        selectedTeams={selectedTeams}
        setSelectedTeams={setSelectedTeams}
        deleteSelectedTeam={deleteSelectedTeam}
      />
      <SelectedCards
        selectedTeams={selectedTeams}
        deleteSelectedTeam={deleteSelectedTeam}
      />
      <ChartContainer selectedTeams={selectedTeams} />
      <ChampionPool selectedTeams={selectedTeams} />
    </>
  );
};

export default CompareTeam;

const HELMET_CONTENT = {
  mainTitle: 'VERSUS Pro Stats',
  pageTitle: '팀 비교',
};
