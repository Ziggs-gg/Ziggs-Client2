import React from 'react';
import styled from 'styled-components';

const SeasonSelect = ({ season, handleSeasonChange }) => {
  return (
    <SeasonBox name="season">
      <option value="Spring">스프링 정규시즌</option>
      <option value="Spring Playoffs">스프링 플레이오프</option>
      <option value="Summner">썸머 정규시즌</option>
      <option value="Summner Playoffs">썸머 플레이오프</option>
    </SeasonBox>
  );
};

export default SeasonSelect;

const SeasonBox = styled.select`
  margin-right: 16px;
  width: 141px;
  height: 40px;
  color: white;
  text-align: center;
  background-color: ${props => props.theme.black.black85};
  border-radius: 10px;
  border: none;
`;
