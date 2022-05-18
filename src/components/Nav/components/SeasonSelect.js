import React, { useState } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

const SEASON_DATA = [
  {
    id: 0,
    value: 'Spring',
    name: '스프링 정규시즌',
  },
  {
    id: 1,
    value: 'Spring Playoffs',
    name: '스프링 플레이오프',
  },
  {
    id: 2,
    value: 'Summer',
    name: '썸머 정규시즌',
  },
  {
    id: 3,
    value: 'Summer Playoffs',
    name: '썸머 플레이오프',
  },
];

const SeasonSelect = ({ season, handleSeasonChange }) => {
  const [toggle, setToggle] = useState(false);

  const HeaderValue = () => {
    if (season === 'Spring') {
      return '스프링 정규시즌';
    } else if (season === 'Spring Playoffs') {
      return '스프링 플레이오프';
    } else if (season === 'Summer') {
      return '썸머 정규시즌';
    } else if (season === 'Summer Playoffs') {
      return '썸머 플레이오프';
    }
  };

  return (
    <SeasonSelectContainer
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <DropDownHeader toggle={toggle}>
        <HeaderText>{HeaderValue()}</HeaderText>
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
          <DropDownList onClick={e => handleSeasonChange(e)}>
            {SEASON_DATA.map((data, idx) => {
              return (
                <ListItem
                  value={idx}
                  key={idx}
                  season={season}
                  currentValue={data.value}
                >
                  {data.name}
                </ListItem>
              );
            })}
          </DropDownList>
        </DropDownListContainer>
      )}
    </SeasonSelectContainer>
  );
};

export default SeasonSelect;

const SeasonSelectContainer = styled.div`
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
  padding-top: 4px;
  color: ${props => props.theme.black.black70};
  font-size: 12px;
  font-weight: 500;

  cursor: pointer;

  :hover {
    color: ${props => props.theme.white.white80};
  }

  ${props =>
    props.season === props.currentValue &&
    css`
      color: white;
    `}
`;
