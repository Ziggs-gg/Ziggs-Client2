import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const ChartIndicators = ({ chartData }) => {
  const [textColor, setTextColor] = useState([
    theme.white.white100,
    theme.red.redW80,
  ]);

  const winColor = {
    color: textColor[1],
  };

  const defeatColor = {
    color: textColor[0],
  };

  return (
    <ChartLayout>
      <Label>게임별 지표</Label>
      <TableLayout>
        <table>
          <tr>
            <FisrtTeamNameAndImage>
              <LeftTeamName>{chartData[0]?.teamABBR}</LeftTeamName>
              {chartData[0]?.teamABBR && (
                <TeamLogo src={chartData[0]?.imgPath} />
              )}
            </FisrtTeamNameAndImage>
            <CenterTd></CenterTd>
            <SecondTeamNameAndImage>
              {chartData[1]?.teamABBR && (
                <TeamLogo src={chartData[1]?.imgPath} />
              )}
              <RightTeamName>{chartData[1]?.teamABBR}</RightTeamName>
            </SecondTeamNameAndImage>
          </tr>
          <tr>
            {chartData[0]?.gameTime < chartData[1]?.gameTime ? (
              <LeftTeamTd style={winColor}>{chartData[0]?.gameTime}</LeftTeamTd>
            ) : (
              <LeftTeamTd style={defeatColor}>
                {chartData[0]?.gameTime}
              </LeftTeamTd>
            )}
            <CenterTd>게임 시간</CenterTd>
            {chartData[0]?.gameTime > chartData[1]?.gameTime ? (
              <RightTeamTd style={winColor}>
                {chartData[1]?.gameTime}
              </RightTeamTd>
            ) : (
              <RightTeamTd style={defeatColor}>
                {chartData[1]?.gameTime}
              </RightTeamTd>
            )}
          </tr>
          <tr>
            {chartData[0]?.killsPerMin > chartData[1]?.killsPerMin ? (
              <LeftTeamTd style={winColor}>
                {chartData[0]?.killsPerMin}
              </LeftTeamTd>
            ) : (
              <LeftTeamTd style={defeatColor}>
                {chartData[0]?.killsPerMin}
              </LeftTeamTd>
            )}
            <CenterTd>분당 킬</CenterTd>
            {chartData[0]?.killsPerMin < chartData[1]?.killsPerMin ? (
              <RightTeamTd style={winColor}>
                {chartData[1]?.killsPerMin}
              </RightTeamTd>
            ) : (
              <RightTeamTd style={defeatColor}>
                {chartData[1]?.killsPerMin}
              </RightTeamTd>
            )}
          </tr>
          <tr>
            {chartData[0]?.deathsPerMin < chartData[1]?.deathsPerMin ? (
              <LeftTeamTd style={winColor}>
                {chartData[0]?.deathsPerMin}
              </LeftTeamTd>
            ) : (
              <LeftTeamTd style={defeatColor}>
                {chartData[0]?.deathsPerMin}
              </LeftTeamTd>
            )}
            <CenterTd>분당 데스</CenterTd>
            {chartData[0]?.deathsPerMin > chartData[1]?.deathsPerMin ? (
              <RightTeamTd style={winColor}>
                {chartData[1]?.deathsPerMin}
              </RightTeamTd>
            ) : (
              <RightTeamTd style={defeatColor}>
                {chartData[1]?.deathsPerMin}
              </RightTeamTd>
            )}
          </tr>
          <tr>
            {chartData[0]?.countTurretDestroyPerMin >
            chartData[1]?.countTurretDestroyPerMin ? (
              <LeftTeamTd style={winColor}>
                {chartData[0]?.countTurretDestroyPerMin}
              </LeftTeamTd>
            ) : (
              <LeftTeamTd style={defeatColor}>
                {chartData[0]?.countTurretDestroyPerMin}
              </LeftTeamTd>
            )}
            <CenterTd>분당 포탑 파괴</CenterTd>
            {chartData[0]?.countTurretDestroyPerMin <
            chartData[1]?.countTurretDestroyPerMin ? (
              <RightTeamTd style={winColor}>
                {chartData[1]?.countTurretDestroyPerMin}
              </RightTeamTd>
            ) : (
              <RightTeamTd style={defeatColor}>
                {chartData[1]?.countTurretDestroyPerMin}
              </RightTeamTd>
            )}
          </tr>
          <tr>
            {chartData[0]?.goldsPerMin > chartData[1]?.goldsPerMin ? (
              <LeftTeamTd style={winColor}>
                {chartData[0]?.goldsPerMin}
              </LeftTeamTd>
            ) : (
              <LeftTeamTd style={defeatColor}>
                {chartData[0]?.goldsPerMin}
              </LeftTeamTd>
            )}
            <CenterTd>분당 획득 골드</CenterTd>
            {chartData[0]?.goldsPerMin < chartData[1]?.goldsPerMin ? (
              <RightTeamTd style={winColor}>
                {chartData[1]?.goldsPerMin}
              </RightTeamTd>
            ) : (
              <RightTeamTd style={defeatColor}>
                {chartData[1]?.goldsPerMin}
              </RightTeamTd>
            )}
          </tr>
          <tr>
            {chartData[0]?.visionScorePerMin >
            chartData[1]?.visionScorePerMin ? (
              <LeftTeamTd style={winColor}>
                {chartData[0]?.visionScorePerMin
                  ? chartData[0]?.visionScorePerMin
                  : '-'}
              </LeftTeamTd>
            ) : (
              <LeftTeamTd style={defeatColor}>
                {chartData[0]?.visionScorePerMin
                  ? chartData[0]?.visionScorePerMin
                  : '-'}
              </LeftTeamTd>
            )}
            <CenterTd>분당 시야 점수</CenterTd>
            {chartData[0]?.visionScorePerMin <
            chartData[1]?.visionScorePerMin ? (
              <RightTeamTd style={winColor}>
                {chartData[1]?.visionScorePerMin
                  ? chartData[1]?.visionScorePerMin
                  : '-'}
              </RightTeamTd>
            ) : (
              <RightTeamTd style={defeatColor}>
                {chartData[1]?.visionScorePerMin
                  ? chartData[1]?.visionScorePerMin
                  : '-'}
              </RightTeamTd>
            )}
          </tr>
          <tr>
            {chartData[0]?.countDrake > chartData[1]?.countDrake ? (
              <LeftTeamTd style={winColor}>
                {chartData[0]?.countDrake}
              </LeftTeamTd>
            ) : (
              <LeftTeamTd style={defeatColor}>
                {chartData[0]?.countDrake}
              </LeftTeamTd>
            )}
            <CenterTd>드래곤 획득</CenterTd>
            {chartData[0]?.countDrake < chartData[1]?.countDrake ? (
              <RightTeamTd style={winColor}>
                {chartData[1]?.countDrake}
              </RightTeamTd>
            ) : (
              <RightTeamTd style={defeatColor}>
                {chartData[1]?.countDrake}
              </RightTeamTd>
            )}
          </tr>
          <tr>
            {chartData[0]?.countHerald > chartData[1]?.countHerald ? (
              <LeftTeamTd style={winColor}>
                {chartData[0]?.countHerald ? chartData[0]?.countHerald : '-'}
              </LeftTeamTd>
            ) : (
              <LeftTeamTd style={defeatColor}>
                {chartData[0]?.countHerald ? chartData[0]?.countHerald : '-'}
              </LeftTeamTd>
            )}
            <CenterTd>협곡의 전령 획득</CenterTd>
            {chartData[0]?.countHerald < chartData[1]?.countHerald ? (
              <RightTeamTd style={winColor}>
                {chartData[1]?.countHerald ? chartData[1]?.countHerald : '-'}
              </RightTeamTd>
            ) : (
              <RightTeamTd style={defeatColor}>
                {chartData[1]?.countHerald ? chartData[1]?.countHerald : '-'}
              </RightTeamTd>
            )}
          </tr>
          <tr>
            {chartData[0]?.countNashor > chartData[1]?.countNashor ? (
              <LeftTeamTd style={winColor}>
                {chartData[0]?.countNashor}
              </LeftTeamTd>
            ) : (
              <LeftTeamTd style={defeatColor}>
                {chartData[0]?.countNashor}
              </LeftTeamTd>
            )}
            <CenterTd>내셔 남작 획득</CenterTd>
            {chartData[0]?.countNashor < chartData[1]?.countNashor ? (
              <RightTeamTd style={winColor}>
                {chartData[1]?.countNashor}
              </RightTeamTd>
            ) : (
              <RightTeamTd style={defeatColor}>
                {chartData[1]?.countNashor}
              </RightTeamTd>
            )}
          </tr>
          <tr>
            {chartData[0]?.countInhibitDestroy >
            chartData[1]?.countInhibitDestroy ? (
              <LeftTeamTd style={winColor}>
                {chartData[0]?.countInhibitDestroy
                  ? chartData[0]?.countInhibitDestroy
                  : '-'}
              </LeftTeamTd>
            ) : (
              <LeftTeamTd style={defeatColor}>
                {chartData[0]?.countInhibitDestroy
                  ? chartData[0]?.countInhibitDestroy
                  : '-'}
              </LeftTeamTd>
            )}
            <CenterTd>억제기 파괴</CenterTd>
            {chartData[0]?.countInhibitDestroy <
            chartData[1]?.countInhibitDestroy ? (
              <RightTeamTd style={winColor}>
                {chartData[1]?.countInhibitDestroy
                  ? chartData[1]?.countInhibitDestroy
                  : '-'}
              </RightTeamTd>
            ) : (
              <RightTeamTd style={defeatColor}>
                {chartData[1]?.countInhibitDestroy
                  ? chartData[1]?.countInhibitDestroy
                  : '-'}
              </RightTeamTd>
            )}
          </tr>
        </table>
      </TableLayout>
    </ChartLayout>
  );
};

const ChartLayout = styled.div`
  width: 432px;
  height: 304px;
  margin-top: 16px;
`;

const TableLayout = styled.div`
  display: flex;
  justify-content: center;
`;

const Label = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  letter-spacing: -0.02em;
  color: ${theme.white.white100};
  margin-bottom: 16px;
`;

const FisrtTeamNameAndImage = styled.td`
  display: flex;
  justify-content: end;
`;

const SecondTeamNameAndImage = styled.td`
  display: flex;
  justify-content: start;
`;

const CenterTd = styled.td`
  width: 143px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${theme.white.white100};
  text-align: center;
  padding-bottom: 8px;
`;

const LeftTeamName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${theme.white.white100};
  padding-bottom: 8px;
  padding-right: 4px;
`;

const RightTeamName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${theme.white.white100};
  padding-bottom: 8px;
  padding-left: 4px;
`;

const TeamLogo = styled.img`
  /* position: absolute;
  width: 16px;
  height: 16px;
  left: 287px;
  top: 32px; */
  width: 16px;
  height: 16px;
`;

const LeftTeamTd = styled.td`
  color: ${theme.white.white100};
  text-align: right;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
`;

const RightTeamTd = styled.td`
  color: ${theme.white.white100};
  text-align: left;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
`;

export default ChartIndicators;
