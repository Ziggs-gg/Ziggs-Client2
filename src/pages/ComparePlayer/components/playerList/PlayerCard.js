import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const PlayerCard = ({
  player: { phID, phRole, role, region, imgPath },
  handleSelectPlayer,
  selectedPlayers,
}) => {
  const [isSelected, setSelected] = useState(false);
  const orderNumber = selectedPlayers.findIndex(
    playerData => playerData === phRole
  );

  useEffect(() => {
    selectedPlayers.includes(phRole) ? setSelected(true) : setSelected(false);
  }, [phRole, selectedPlayers]);

  return (
    <CardLayout
      onClick={() => {
        handleSelectPlayer(phRole);
      }}
      isSelected={isSelected}
      orderNumber={orderNumber}
    >
      <TeamLogo src={`/images/teams/${region}/${phID.split('-')[3]}.png`} />
      <RoleLogo src={`/images/role/role_${role}_W.png`} />
      <PlayerImg imgPath={imgPath} />
      <PlayerName>{phID.split('-')[4]}</PlayerName>
    </CardLayout>
  );
};

export default PlayerCard;

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

    ${props =>
    props.isSelected &&
    props.orderNumber === 2 &&
    css`
      border: 1px solid ${props => props.theme.green.greenMain};
    `}

    ${props =>
    props.isSelected &&
    props.orderNumber === 3 &&
    css`
      border: 1px solid ${props => props.theme.orange.orangeMain};
    `}
`;

const PlayerImg = styled.div`
  position: absolute;
  bottom: 0;
  width: 84px;
  height: 78px;
  /* position: absolute; */
  /* border-radius: 10px; */
  /* border: 1px solid ${props => props.theme.black.black85}; */

  mask-image: linear-gradient(
    to bottom,
    #c4c4c4 52.71%,
    rgba(196, 196, 196, 0.2) 86.46%,
    rgba(196, 196, 196, 0) 100%
  );

  border-radius: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  background-image: url(${props => props.imgPath});
`;

const TeamLogo = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  left: 8px;
  top: 6px;
`;

const RoleLogo = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  right: 8px;
  top: 6px;
  opacity: 0.5;
`;

const PlayerName = styled.div`
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
