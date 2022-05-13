import React, { useState } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
const YearSelect = ({ year, handleYearChange }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <YearSelectContainer>
      <DropDownHeader onClick={() => setToggle(!toggle)} toggle={toggle}>
        2022
      </DropDownHeader>
      {toggle && (
        <DropDownListContainer>
          <DropDownList>
            <ListItem value={2021}>2021</ListItem>
            <ListItem value={2022}>2022</ListItem>
          </DropDownList>
        </DropDownListContainer>
      )}
    </YearSelectContainer>
  );
};

export default YearSelect;

const YearSelectContainer = styled.div`
  position: relative;
  width: 141px;
  margin-right: 16px;
  z-index: 1000;
`;

const DropDownHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: white;
  background-color: ${props => props.theme.black.black85};
  border-radius: 10px;
  cursor: pointer;

  ${props =>
    props.toggle &&
    css`
      border: 1px solid ${props => props.theme.white.white60};
    `}
`;

const DropDownListContainer = styled.div`
  position: absolute;
  padding-top: 2px;
`;

const DropDownList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  width: 141px;
  background-color: ${props => props.theme.black.black100};
  border: 1px solid ${props => props.theme.black.black70};
  border-radius: 10px;
`;

const ListItem = styled.li`
  color: ${props => props.theme.black.black70};
  padding-top: 4px;
  cursor: pointer;

  :hover {
    color: ${props => props.theme.white.white80};
  }
`;
