import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const YEAR_DATA = [
  {
    year: 2021,
  },
  {
    year: 2022,
  },
];

const YearSelect = ({ year, handleYearChange }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <YearSelectContainer
      onClick={() => {
        setToggle(!toggle);
      }}
      onMouseLeave={() => {
        setToggle(false);
      }}
    >
      <DropDownHeader toggle={toggle}>
        <HeaderText>{year}</HeaderText>
        <Arrow
          src={
            toggle
              ? `https://user-images.githubusercontent.com/73605822/168941253-8a0a4918-78d6-4fb7-b924-d9b937a65c10.png`
              : `https://user-images.githubusercontent.com/73605822/168941254-955b5666-ec2f-40a5-aab4-a3f88464059b.png`
          }
        />
      </DropDownHeader>
      {toggle && (
        <DropDownListContainer>
          <DropDownList
            onClick={e => {
              handleYearChange(e);
            }}
          >
            {YEAR_DATA.map((data, idx) => {
              return (
                <ListItem value={data.year} key={idx} year={year}>
                  {data.year}
                </ListItem>
              );
            })}
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
  justify-content: space-between;
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

const HeaderText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 89px;
  margin-top: 2px;
  margin-left: 20px;
  font-size: 12px;
  font-weight: 500;
`;

const Arrow = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 8px;
`;

const DropDownListContainer = styled.div`
  position: absolute;
  padding-top: 2px;
  z-index: 1000000000;
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
  display: flex;
  align-items: center;
  height: 24px;
  color: ${props => props.theme.black.black70};
  padding-top: 4px;
  font-size: 12px;
  font-weight: 500;

  cursor: pointer;

  :hover {
    color: ${props => props.theme.white.white80};
  }

  ${props =>
    props.year === props.value &&
    css`
      color: white;
    `}
`;
