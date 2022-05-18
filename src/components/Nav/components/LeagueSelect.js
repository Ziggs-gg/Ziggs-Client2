import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

const LeagueSelect = ({ handleLeagueSelect, league, setLeague }) => {
  return (
    <LeagueSelectBox>
      <SelectAll
        onClick={() => {
          league.length === 4
            ? setLeague([])
            : setLeague(['LCK', 'LPL', 'LEC', 'LCS']);
        }}
      >
        ALL
      </SelectAll>
      <LeagueList>
        {LOGO_DATA.map((data, idx) => {
          const isSelected = league.includes(data.league);

          return (
            <ListItem
              key={idx}
              onClick={() => {
                handleLeagueSelect(data.league, isSelected);
              }}
              isSelected={isSelected}
            >
              <LeagueLogo src={data.image} />
            </ListItem>
          );
        })}
      </LeagueList>
    </LeagueSelectBox>
  );
};

export default LeagueSelect;

const LeagueSelectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  width: 231px;
  height: 40px;
  background-color: ${props => props.theme.black.black85};
  border-radius: 10px;
`;

const SelectAll = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 32px;
  margin-right: 16px;
  color: white;
  font-weight: 500;
  text-decoration: underline;

  cursor: pointer;
`;

const LeagueList = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  cursor: pointer;
  opacity: 0.4;
  ${props =>
    props.isSelected &&
    css`
      opacity: 1;
    `}
`;

const LeagueLogo = styled.img`
  width: 24px;
  margin-right: 16px;
`;

const LOGO_DATA = [
  {
    league: 'LCK',
    image:
      'https://user-images.githubusercontent.com/73605822/167063712-a0107481-1234-43b5-8f5a-f1d1015170a3.png',
  },
  {
    league: 'LPL',
    image:
      'https://user-images.githubusercontent.com/73605822/167063717-a007d712-71a5-4198-b51f-269b927dee5a.png',
  },
  {
    league: 'LEC',
    image:
      'https://user-images.githubusercontent.com/73605822/167063720-5567675d-07bc-4975-9bea-4f9b17c3f468.png',
  },
  {
    league: 'LCS',
    image:
      'https://user-images.githubusercontent.com/73605822/167063724-4e3db1c4-693b-480c-a25d-3a4c4e88906b.png',
  },
];
