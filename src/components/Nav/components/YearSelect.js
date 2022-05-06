import React from 'react';
import styled from 'styled-components';

const YearSelect = ({ year, handleYearChange }) => {
  return (
    <select name="years">
      <option value={2021}>2021</option>
      <option value={2022}>2022</option>
    </select>
  );
};

export default YearSelect;
