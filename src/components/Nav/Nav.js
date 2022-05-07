import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ViewToggle from './components/ViewToggle';
import YearSelect from './components/YearSelect';
import SeasonSelect from './components/SeasonSelect';
import LeagueSelect from './components/LeagueSelect';
import RoleSelect from './components/RoleSelect';

const Nav = () => {
  const [year, setYear] = useState('');
  const [season, setSeason] = useState('');

  const handleYearChange = event => {
    setYear(event.target.value);
  };

  const handleSeasonChange = event => {
    setSeason(event.target.value);
  };

  return (
    <NavLayout>
      <Title
        src="https://user-images.githubusercontent.com/73605822/167045469-91bdb04c-d98a-4981-9526-25381870a911.png"
        alt="Logo"
      />
      <ViewToggle />
      <FilterContainer>
        <SelectWrapper>
          <YearSelect year={year} handleYearChange={handleYearChange} />
          <SeasonSelect
            season={season}
            handleSeasonChange={handleSeasonChange}
          />
          <LeagueSelect />
          <RoleSelect />
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
