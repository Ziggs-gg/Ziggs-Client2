import React from 'react';
import styled from 'styled-components';

const SeasonSelect = ({ season, handleSeasonChange }) => {
  return (
    <select name="season">
      <option value="Spring">스프링 정규시즌</option>
      <option value="Spring-po">스프링 플레이오프</option>
      <option value="Summner">썸머 정규시즌</option>
      <option value="Summner-po">썸머 플레이오프</option>
    </select>
  );
};

export default SeasonSelect;
