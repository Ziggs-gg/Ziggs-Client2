import React from 'react';
import styled from 'styled-components';

const YearSelect = ({ year, handleYearChange }) => {
  return (
    <YearBox name="years">
      <option value={2021}>2021</option>
      <option value={2022}>2022</option>
    </YearBox>
  );
};

export default YearSelect;

const YearBox = styled.select`
  margin-right: 16px;
  width: 141px;
  height: 40px;
  color: white;
  text-align: center;
  background-color: ${props => props.theme.black.black85};
  border-radius: 10px;
  border: none;
`;
