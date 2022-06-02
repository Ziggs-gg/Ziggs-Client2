import React from 'react';
import styled, { css } from 'styled-components';

const TeamCard = () => {
  return (
    <CardLayout>
      <LeagueLogo />
      <TeamLogo />
      <TeamName />
    </CardLayout>
  );
};

export default TeamCard;

const CardLayout = styled.div`
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
      border: 1px solid ${props => props.theme.red.redMain};
    `}

  ${props =>
    props.isSelected &&
    props.orderNumber === 1 &&
    css`
      border: 1px solid ${props => props.theme.blue.blueMain};
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 24px;
  bottom: 0;
  color: white;
  font-size: 12px;
  font-weight: 500;
`;
