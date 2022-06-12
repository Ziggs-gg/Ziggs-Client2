import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ViewToggle from './components/ViewToggle';
import YearSelect from './components/YearSelect';
import SeasonSelect from './components/SeasonSelect';
import LeagueSelect from './components/LeagueSelect';
import RoleSelect from './components/RoleSelect';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const [year, setYear] = useState(2022);
  const [season, setSeason] = useState('Spring');
  const [league, setLeague] = useState([]);
  const [role, setRole] = useState([]);

  const [viewToggle, setViewToggle] = useState(false);
  const [filterToggle, setFilterToggle] = useState(false);

  const queryString = viewToggle
    ? league.length !== 0 &&
      `/compare/team?region=${league.join(
        '|'
      )}&year=${year}&splitSeason=${season}`
    : league.length !== 0 &&
      role.length !== 0 &&
      `/compare/player?region=${league.join(
        '|'
      )}&year=${year}&splitSeason=${season}&role=${role.join('|')}`;

  useEffect(() => {
    navigate(queryString);
  }, [navigate, viewToggle, queryString]);

  const handleYearChange = event => {
    const { value } = event.target;
    value &&
      setYear(() => {
        return value;
      });
  };

  const handleSeasonChange = season => {
    setSeason(season);
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

  const handleFilterToggle = () => {
    setFilterToggle(!filterToggle);
  };

  const initFilter = () => {
    setLeague([]);
    setRole([]);
  };

  return (
    <NavLayout>
      <Title
        src="https://user-images.githubusercontent.com/73605822/167045469-91bdb04c-d98a-4981-9526-25381870a911.png"
        alt="Logo"
        onClick={() => {
          initFilter();
          navigate('');
        }}
      />
      <ViewToggle
        viewToggle={viewToggle}
        setViewToggle={setViewToggle}
        initFilter={initFilter}
      />
      <FilterContainer filterToggle={filterToggle}>
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
      <FilterToggle
        src={filterToggle ? `/images/Filter_R.png` : `/images/Filter_W.png`}
        onClick={handleFilterToggle}
      />
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

  cursor: pointer;
`;

const FilterContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  right: 80px;

  @media screen and (max-width: 1360px) {
    display: ${props => (props.filterToggle ? 'flex' : 'none')};
    justify-content: flex-end;
    background-color: ${props => props.theme.black.black90};
    top: 60px;
    right: 0;
    width: 100%;
    padding: 8px 0;
    padding-right: 40px;
    border-top: 1px solid ${props => props.theme.black.black85};
    border-bottom: 1px solid ${props => props.theme.black.black85};
    z-index: 10000;
  }

  @media screen and (max-width: 900px) {
    justify-content: center;
    padding-right: 0;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
    div {
      margin: 0;
    }
  }
`;

const FilterToggle = styled.img`
  position: absolute;
  display: none;
  right: 40px;
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media screen and (max-width: 1360px) {
    position: absolute;
    display: inline-block;
    right: 40px;
    width: 24px;
    height: 24px;
  }
`;
