import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import YearSelect from './components/YearSelect';
import SeasonSelect from './components/SeasonSelect';

const Nav = () => {
  const [year, setYear] = useState('');
  const [season, setSeason] = useState('');
  const handleYearChange = event => {
    setYear(event.target.value);
  };

  const handleSeasonChange = event => {
    setYear(event.target.value);
  };

  // useEffect(() => {
  //   axios
  //     .get(
  //       'http://18.237.44.175:3000/api/compare/player?region=1&year=2021&splitSeason=Spring'
  //     )
  //     .then(Response => {
  //       console.log(Response);
  //     })
  //     .catch(Error => {
  //       console.error(Error);
  //     });
  // }, []);

  return (
    <NavLayout>
      <Title>ZIGGS.GG</Title>
      <FilterContainer>
        <YearSelect year={year} handleYearChange={handleYearChange} />
        <SeasonSelect season={season} handleSeasonChange={handleSeasonChange} />
      </FilterContainer>
    </NavLayout>
  );
};

export default Nav;

const NavLayout = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #363634;
  height: 60px;
  width: 100%;
`;

const Title = styled.span`
  position: absolute;
  left: 40px;
  color: ${props => props.theme.white.white100};
  font-size: 22px;
  font-weight: 900;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 112px;
  width: 1610px;
  margin: 0 auto;
`;
