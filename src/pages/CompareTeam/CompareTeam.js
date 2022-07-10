import React, { useState } from 'react';
import List from '../../components/List';
import ChartContainer from './components/ChartContainer';
import SelectedCards from './components/selectedTeam/SelectedCards';
import ChampionPool from './components/championPool/ChampionPool';
import { Helmet } from 'react-helmet-async';

const CompareTeam = () => {
  const [selectedTeams, setSelectedTeams] = useState([]);

  const deleteSelectedTeam = choosenTeam => {
    const newList = selectedTeams.filter(player => player !== choosenTeam);
    setSelectedTeams(newList);
  };
  return (
    <>
      <Helmet>
        <title>VERSUS Pro Stats | 팀 비교</title>
      </Helmet>
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
