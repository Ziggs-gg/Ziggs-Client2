import React from 'react';
import styled from 'styled-components';

const PlayerCard = ({
  player: { phID, phRole, role, region, imgPath },
  handleSelectPlayer,
}) => {
  const playerName = phID.split('-')[4];
  const playerTeam = phID.split('-')[3];
  return (
    <CardLayout
      onClick={() => {
        handleSelectPlayer(phRole);
      }}
    >
      <TeamLogo src={`/images/teams/${region}/${playerTeam}.png`} />
      <RoleLogo src={`/images/role/role_${role}_W.png`} />
      <GradientMask imgPath={imgPath} />
      {/* <PlayerImg src={`${imgPath}`} alt={phID} /> */}

      <PlayerName>{playerName}</PlayerName>
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
`;

const GradientMask = styled.div`
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
