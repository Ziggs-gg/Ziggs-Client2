import React, { useState } from 'react';
import List from '../../components/List';
import ChartContainer from './components/ChartContainer';
import SelectedCards from './components/selectedTeam/SelectedCards';
import ChampionPool from './components/championPool/ChampionPool';

const CompareTeam = () => {
  const [selectedTeams, setSelectedTeams] = useState([]);

  const deleteSelectedTeam = choosenTeam => {
    const newList = selectedTeams.filter(player => player !== choosenTeam);
    setSelectedTeams(newList);
  };
  return (
    <>
      <List
        selectedTeams={selectedTeams}
        setSelectedTeams={setSelectedTeams}
        deleteSelectedTeam={deleteSelectedTeam}
      />
      <SelectedCards />
      <ChartContainer />
      <ChampionPool />
    </>
  );
};

export default CompareTeam;
