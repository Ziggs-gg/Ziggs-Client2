import React from 'react';
import styled from 'styled-components';

const PlayerCard = () => {
  return (
    <CardLayout>
      <TeamLogo src="images/teams/AF.png" />
      <RoleLogo src="images/role/role_bot_W.png" />
      {/* <PlayerImg src="images/player/21-LCK-SUM-T1-Keria.png" /> */}
      <PlayerImg />
      <PlayerName>Keria</PlayerName>
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
`;

const PlayerImg = styled.div`
  position: absolute;
  width: 84px;
  height: 64px;
  bottom: 0;
  background: url('images/21-LCK-SUM-T1-Keria.png');
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
  font-size: 10px;
  font-weight: 700;

  background-color: rgba(0, 0, 0, 0.3);
`;
