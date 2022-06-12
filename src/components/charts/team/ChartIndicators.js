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
              <LeftTeamName>{chartData[0]?.team}</LeftTeamName>
              {chartData[0]?.team && (
                <TeamLogo src={`/images/teams/${chartData[0]?.team}.png`} />
              )}
            </FisrtTeamNameAndImage>
            <CenterTd></CenterTd>
            <SecondTeamNameAndImage>
              {chartData[1]?.team && (
                <TeamLogo src={`/images/teams/${chartData[1]?.team}.png`} />
              )}
              <RightTeamName>{chartData[1]?.team}</RightTeamName>
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
            {chartData[0]?.kills > chartData[1]?.kills ? (
              <LeftTeamTd style={winColor}>{chartData[0]?.kills}</LeftTeamTd>
            ) : (
              <LeftTeamTd style={defeatColor}>{chartData[0]?.kills}</LeftTeamTd>
            )}
            <CenterTd>킬</CenterTd>
            {chartData[0]?.kills < chartData[1]?.kills ? (
              <RightTeamTd style={winColor}>{chartData[1]?.kills}</RightTeamTd>
            ) : (
              <RightTeamTd style={defeatColor}>
                {chartData[1]?.kills}
              </RightTeamTd>
            )}
          </tr>
          <tr>
            {chartData[0]?.deaths < chartData[1]?.deaths ? (
              <LeftTeamTd style={winColor}>{chartData[0]?.deaths}</LeftTeamTd>
            ) : (
              <LeftTeamTd style={defeatColor}>
                {chartData[0]?.deaths}
              </LeftTeamTd>
            )}
            <CenterTd>데스</CenterTd>
            {chartData[0]?.deaths > chartData[1]?.deaths ? (
              <RightTeamTd style={winColor}>{chartData[1]?.deaths}</RightTeamTd>
            ) : (
              <RightTeamTd style={defeatColor}>
                {chartData[1]?.deaths}
              </RightTeamTd>
            )}
          </tr>
          <tr>
            {chartData[0]?.countTurretDestroy >
            chartData[1]?.countTurretDestroy ? (
              <LeftTeamTd style={winColor}>
                {chartData[0]?.countTurretDestroy}
              </LeftTeamTd>
            ) : (
              <LeftTeamTd style={defeatColor}>
                {chartData[0]?.countTurretDestroy}
              </LeftTeamTd>
            )}
            <CenterTd>포탑 파괴</CenterTd>
            {chartData[0]?.countTurretDestroy <
            chartData[1]?.countTurretDestroy ? (
              <RightTeamTd style={winColor}>
                {chartData[1]?.countTurretDestroy}
              </RightTeamTd>
            ) : (
              <RightTeamTd style={defeatColor}>
                {chartData[1]?.countTurretDestroy}
              </RightTeamTd>
            )}
          </tr>
          <tr>
            {chartData[0]?.golds > chartData[1]?.golds ? (
              <LeftTeamTd style={winColor}>{chartData[0]?.golds}</LeftTeamTd>
            ) : (
              <LeftTeamTd style={defeatColor}>{chartData[0]?.golds}</LeftTeamTd>
            )}
            <CenterTd>획득 골드</CenterTd>
            {chartData[0]?.golds < chartData[1]?.golds ? (
              <RightTeamTd style={winColor}>{chartData[1]?.golds}</RightTeamTd>
            ) : (
              <RightTeamTd style={defeatColor}>
                {chartData[1]?.golds}
              </RightTeamTd>
            )}
          </tr>
          <tr>
            {chartData[0]?.visionScore > chartData[1]?.visionScore ? (
              <LeftTeamTd style={winColor}>
                {chartData[0]?.visionScore}
              </LeftTeamTd>
            ) : (
              <LeftTeamTd style={defeatColor}>
                {chartData[0]?.visionScore}
              </LeftTeamTd>
            )}
            <CenterTd>시야 점수 합계</CenterTd>
            {chartData[0]?.visionScore < chartData[1]?.visionScore ? (
              <RightTeamTd style={winColor}>
                {chartData[1]?.visionScore}
              </RightTeamTd>
            ) : (
              <RightTeamTd style={defeatColor}>
                {chartData[1]?.visionScore}
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
                {chartData[0]?.countHerald}
              </LeftTeamTd>
            ) : (
              <LeftTeamTd style={defeatColor}>
                {chartData[0]?.countHerald}
              </LeftTeamTd>
            )}
            <CenterTd>협곡의 정령 획득</CenterTd>
            {chartData[0]?.countHerald < chartData[1]?.countHerald ? (
              <RightTeamTd style={winColor}>
                {chartData[1]?.countHerald}
              </RightTeamTd>
            ) : (
              <RightTeamTd style={defeatColor}>
                {chartData[1]?.countHerald}
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
                {chartData[0]?.countInhibitDestroy}
              </LeftTeamTd>
            ) : (
              <LeftTeamTd style={defeatColor}>
                {chartData[0]?.countInhibitDestroy}
              </LeftTeamTd>
            )}
            <CenterTd>장로 드래곤 획득</CenterTd>
            {chartData[0]?.countInhibitDestroy <
            chartData[1]?.countInhibitDestroy ? (
              <RightTeamTd style={winColor}>
                {chartData[1]?.countInhibitDestroy}
              </RightTeamTd>
            ) : (
              <RightTeamTd style={defeatColor}>
                {chartData[1]?.countInhibitDestroy}
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
  font-weight: bold;
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
  font-weight: 300;
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
