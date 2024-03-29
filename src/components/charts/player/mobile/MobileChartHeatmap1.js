import React from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme.js';

const MobileChartHeatmap1 = ({ heatMapData }) => {
  const backgroundColor = [
    theme.red.redMain,
    theme.red.redB80,
    theme.red.redB60,
    theme.red.redB40,
  ];
  return (
    <table>
      <HeatTr>
        <LabelTd>게임</LabelTd>
        <LabelTd>킬</LabelTd>
        <LabelTd>데스</LabelTd>
        <LabelTd>어시스트</LabelTd>
      </HeatTr>
      {heatMapData?.map((player, idx) => {
        const count = {
          background: backgroundColor[player.gameCount?.split('/')[1] - 1],
        };

        const kills = {
          background: backgroundColor[player.AVG_kills?.split('/')[1] - 1],
        };

        const deaths = {
          background: backgroundColor[player.AVG_deaths?.split('/')[1] - 1],
        };

        const assists = {
          background: backgroundColor[player.AVG_assists?.split('/')[1] - 1],
        };

        return (
          <HeatTr key={idx}>
            <DataTd style={count}>{player.gameCount?.split('/')[0]}</DataTd>
            <DataTd style={kills}>{player.AVG_kills?.split('/')[0]}</DataTd>
            <DataTd style={deaths}>{player.AVG_deaths?.split('/')[0]}</DataTd>
            <DataTd style={assists}>{player.AVG_assists?.split('/')[0]}</DataTd>
          </HeatTr>
        );
      })}
    </table>
  );
};

export default MobileChartHeatmap1;

const LabelTd = styled.td`
  color: ${theme.white.white100};
  width: 56px;
  height: 24px;
  text-align: center;
  margin-right: 2px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.03em;
`;

const HeatTr = styled.tr`
  display: flex;
`;

const DataTd = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.white.white100};
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background: ${theme.black.black90};
  text-align: center;
  margin: 0 2px 2px 0;
  font-size: 14px;
`;
