import React, { useState } from 'react';
import styled from 'styled-components';
import ViewToggle from './components/ViewToggle';
import YearSelect from './components/YearSelect';
import SeasonSelect from './components/SeasonSelect';
import LeagueSelect from './components/LeagueSelect';
import RoleSelect from './components/RoleSelect';

const Nav = () => {
  const [year, setYear] = useState(2022);
  const [season, setSeason] = useState('Spring');
  const [league, setLeague] = useState([]);
  const [role, setRole] = useState([]);

  const [filterValues, setFilterValues] = useState({
    year: 2022,
    season: 'spring',
    league: [],
    role: [],
  });

  const [viewToggle, setViewToggle] = useState(false);

  const handleYearChange = event => {
    const { value } = event.target;
    value && setYear(value);
  };

  const handleSeasonChange = event => {
    const { value } = event.target;
    if (value === 0) {
      setSeason('Spring');
    } else if (value === 1) {
      setSeason('Spring-playoff');
    } else if (value === 2) {
      setSeason('Summer');
    } else if (value === 3) {
      setSeason('Summer-playoff');
    }
  };

  const handleLeagueSelect = (leagueData, isSelected) => {
    if (!isSelected) {
      setLeague(prev => [...prev, leagueData]);
    } else {
      const newList = league.filter(el => el !== leagueData);
      setLeague(newList);
    }
  };

  const handleRoleSelect = (roleData, isSelected) => {
    if (!isSelected) {
      setRole(prev => [...prev, roleData]);
    } else {
      const newList = role.filter(el => el !== roleData);
      setRole(newList);
    }
  };

  return (
    <NavLayout>
      <Title
        src="https://user-images.githubusercontent.com/73605822/167045469-91bdb04c-d98a-4981-9526-25381870a911.png"
        alt="Logo"
      />
      <ViewToggle viewToggle={viewToggle} setViewToggle={setViewToggle} />
      <FilterContainer>
        <SelectWrapper>
          <YearSelect year={year} handleYearChange={handleYearChange} />
          <SeasonSelect
            season={season}
            handleSeasonChange={handleSeasonChange}
          />
          <LeagueSelect
            handleLeagueSelect={handleLeagueSelect}
            league={league}
            setLeague={setLeague}
          />
          {!viewToggle && (
            <RoleSelect
              handleRoleSelect={handleRoleSelect}
              role={role}
              setRole={setRole}
            />
          )}
        </SelectWrapper>
      </FilterContainer>
    </NavLayout>
  );
};

export default Nav;

const NavLayout = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.black.black93};
  height: 60px;
  width: 100%;
`;

const Title = styled.img`
  position: absolute;
  height: 40px;
  left: 32px;
`;

const FilterContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  right: 228px;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
