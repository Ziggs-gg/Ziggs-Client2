import React, { useState } from 'react';
import List from '../../components/List';
import ChartContainer from './components/ChartContainer';
import SelectedCards from './components/selectedTeam/SelectedCards';
import MobileSelectedCards from './components/selectedTeam/mobile/MobileSelectedCards';
import ChampionPool from './components/championPool/ChampionPool';
import SEOMetaTag from '../../components/SEOMetaTag';
import { useMediaQuery } from 'react-responsive';

const CompareTeam = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:428px)',
  });
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
      />
      <List
        selectedTeams={selectedTeams}
        setSelectedTeams={setSelectedTeams}
        deleteSelectedTeam={deleteSelectedTeam}
      />
      {isMobile ? (
        <>
          <MobileSelectedCards
            selectedTeams={selectedTeams}
            deleteSelectedTeam={deleteSelectedTeam}
          />
          {/* <ChartContainer selectedTeams={selectedTeams} /> */}
          {/* <ChampionPool selectedTeams={selectedTeams} /> */}
        </>
      ) : (
        <>
          <SelectedCards
            selectedTeams={selectedTeams}
            deleteSelectedTeam={deleteSelectedTeam}
          />
          <ChartContainer selectedTeams={selectedTeams} />
          <ChampionPool selectedTeams={selectedTeams} />
        </>
      )}
    </>
  );
};

export default CompareTeam;

const HELMET_CONTENT = {
  mainTitle: 'VERSUS Pro Stats',
  pageTitle: '팀 비교',
};
