import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import ReactGA from 'react-ga4';

const TeamCard = ({
  team: { imgPath, ptID, region, splitSeason, teamFullName },
  selectedTeams,
  handleSelectTeam,
}) => {
  const [isSelected, setSelected] = useState(false);

  const orderNumber = selectedTeams.findIndex(
    playerData => playerData === ptID
  );

  useEffect(() => {
    selectedTeams.includes(ptID) ? setSelected(true) : setSelected(false);
  }, [ptID, selectedTeams]);

  return (
    <CardLayout
      onClick={() => {
        handleSelectTeam(ptID);
        !isSelected &&
          ReactGA.event({
            category: 'Click event',
            action: 'Team Select',
          });
      }}
      isSelected={isSelected}
      orderNumber={orderNumber}
    >
      <LeagueLogo src={`/images/League_Logo/${region}_logo_B70.png`} />
      <TeamLogo src={imgPath} />
      <TeamName>{teamFullName}</TeamName>
    </CardLayout>
  );
};

export default TeamCard;

const CardLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 84px;
  height: 100px;
  margin-right: 40px;
  margin-bottom: 24px;
  border: 1px solid ${props => props.theme.black.black85};
  border-radius: 10px;

  &:nth-child(10n) {
    margin-right: 0;
  }

  cursor: pointer;
  z-index: 1;

  ${props =>
    props.isSelected &&
    props.orderNumber === 0 &&
    css`
      border: 1px solid ${props => props.theme.green.greenMain};
    `}

  ${props =>
    props.isSelected &&
    props.orderNumber === 1 &&
    css`
      border: 1px solid ${props => props.theme.orange.orangeMain};
    `}
`;

const TeamLogo = styled.img`
  width: 48px;
  height: 48px;
`;

const LeagueLogo = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  left: 8px;
  top: 6px;
`;

const TeamName = styled.div`
  position: absolute;
  text-align: center;
  bottom: 2px;
  color: white;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.05em;
`;
