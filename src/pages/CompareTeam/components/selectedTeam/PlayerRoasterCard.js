import React from 'react';
import styled from 'styled-components';
const PlayerRoasterCard = ({
  player: {
    phID,
    player,
    ptID,
    role,
    KDA,
    DPM,
    GPM,
    VSPM,
    playerIMGPath,
    teamIMGpath,
  },
}) => {
  return (
    <CardLayout>
      <TeamLogo src={`${teamIMGpath}`} />
      <RoleLogo src={`/images/role/role_${role}_B70.png`} />
      <PlayerName>{player}</PlayerName>
      <PlayerImg imgPath={`${playerIMGPath}`} />
      <StatsContainer>
        <StatsDesc>
          <StatsTitle>KDA</StatsTitle>
          <StatsText>{KDA}</StatsText>
        </StatsDesc>
        <StatsDesc>
          <StatsTitle>DPM</StatsTitle>
          <StatsText>{DPM}</StatsText>
        </StatsDesc>
        <StatsDesc>
          <StatsTitle>GPM</StatsTitle>
          <StatsText>{GPM}</StatsText>
        </StatsDesc>
        <StatsDesc>
          <StatsTitle>VSPM</StatsTitle>
          <StatsText>{VSPM}</StatsText>
        </StatsDesc>
      </StatsContainer>
    </CardLayout>
  );
};

export default PlayerRoasterCard;

const CardLayout = styled.div`
  width: 112px;
  height: 176px;
  border: 1px solid #353532;
  border-radius: 10px;
  text-align: center;
`;

const PlayerImg = styled.div`
  position: absolute;
  width: 112px;
  height: 138px;
  left: 0px;
  top: 28px;
  mask-image: linear-gradient(
    to bottom,
    #c4c4c4 52.71%,
    rgba(196, 196, 196, 0.2) 86.46%,
    rgba(196, 196, 196, 0) 100%
  );
  background-image: url(${props => props.imgPath});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const TeamLogo = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  left: 8px;
  top: 5px;
`;

const RoleLogo = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  left: 88px;
  top: 5px;
`;

const PlayerName = styled.p`
  display: flex;
  align-items: center;
  position: absolute;
  width: 22px;
  height: 14px;
  left: 8px;
  top: 23px;
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.05em;
  color: ${props => props.theme.white.white100};
  z-index: 100;
`;

const StatsContainer = styled.div`
  position: absolute;
  width: 96px;
  height: 56px;
  left: 8px;
  bottom: 12px;
`;

const StatsDesc = styled.div`
  display: flex;
  justify-content: space-between;
  height: 14px;
`;

const StatsTitle = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  color: ${props => props.theme.white.white50};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StatsText = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  color: ${props => props.theme.white.white100};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
