import React from 'react';
import styled from 'styled-components';

const LeagueSelect = () => {
  return (
    <LeagueSelectBox>
      <SelectAll>ALL</SelectAll>
      {LOGO_DATA.map((data, idx) => {
        return <LeagueLogo src={data.image} key={idx} />;
      })}
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
  text-decoration: underline;

  cursor: pointer;
`;

const LeagueLogo = styled.img`
  width: 24px;
  margin-right: 16px;

  cursor: pointer;
`;

const LOGO_DATA = [
  {
    name: 'LCK',
    image:
      'https://user-images.githubusercontent.com/73605822/167063712-a0107481-1234-43b5-8f5a-f1d1015170a3.png',
  },
  {
    name: 'LPL',
    image:
      'https://user-images.githubusercontent.com/73605822/167063717-a007d712-71a5-4198-b51f-269b927dee5a.png',
  },
  {
    name: 'LEC',
    image:
      'https://user-images.githubusercontent.com/73605822/167063720-5567675d-07bc-4975-9bea-4f9b17c3f468.png',
  },
  {
    name: 'LCS',
    image:
      'https://user-images.githubusercontent.com/73605822/167063724-4e3db1c4-693b-480c-a25d-3a4c4e88906b.png',
  },
];
