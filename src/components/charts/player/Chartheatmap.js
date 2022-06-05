import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const Chartheatmap = ({ heatMapData }) => {
  console.log(heatMapData);
  return (
    <div>
      <table>
        <thead>
          <HeatTr>
            <SpaceTd></SpaceTd>
            <LabelTd>게임</LabelTd>
            <LabelTd>킬</LabelTd>
            <LabelTd>데스</LabelTd>
            <LabelTd>어시스트</LabelTd>
            <LabelTd>KDA</LabelTd>
            <LabelTd>KP%</LabelTd>
            <LabelTd>DTH%</LabelTd>
            <LabelTd>CSM</LabelTd>
            <LabelTd>GPM</LabelTd>
            <LabelTd>GOLD%</LabelTd>
            <LabelTd>VSPM</LabelTd>
            <LabelTd>WPM</LabelTd>
            <LabelTd>WCPM</LabelTd>
            <LabelTd>VS%</LabelTd>
            <LabelTd>DPM</LabelTd>
            <LabelTd>DMG%</LabelTd>
            <LabelTd>DPG</LabelTd>
            <LabelTd>DTPM</LabelTd>
            <LabelTd>DT%</LabelTd>
            <LabelTd>GD@15</LabelTd>
            <LabelTd>CSD@15</LabelTd>
            <LabelTd>XPD@15</LabelTd>
          </HeatTr>
        </thead>
        <tbody>
          {heatMapData.map((player, idx) => {
            return (
              <HeatTr>
                <ColumnLabel>
                  <YearAndSeasonLabel>
                    {player.yy}-{player.splitSeason}
                  </YearAndSeasonLabel>
                  {player.phID.includes('-')
                    ? player.phID.split('-')[4]
                    : player.phID}
                  <RoleLabel>{player.role}</RoleLabel>
                </ColumnLabel>
                <DataTd>{player.gameCount}</DataTd>
                <DataTd>{player.AVG_kills}</DataTd>
                <DataTd>{player.AVG_deaths}</DataTd>
                <DataTd>{player.AVG_assists}</DataTd>
                <DataTd>{player.AVG_KDA}</DataTd>
                <DataTd>{player.AVG_KPPCT}</DataTd>
                <DataTd>{player.AVG_DTHPCT}</DataTd>
                <DataTd>{player.AVG_CSM}</DataTd>
                <DataTd>{player.AVG_GPM}</DataTd>
                <DataTd>{player.AVG_goldPCT}</DataTd>
                <DataTd>{player.AVG_VSPM ? player.AVG_VSPM : '-'}</DataTd>
                <DataTd>{player.AVG_WPM ? player.AVG_WPM : '-'}</DataTd>
                <DataTd>{player.AVG_WCPM ? player.AVG_WCPM : '-'}</DataTd>
                <DataTd>{player.AVG_VSPCT ? player.AVG_VSPCT : '-'}</DataTd>
                <DataTd>{player.AVG_DPM}</DataTd>
                <DataTd>{player.AVG_DMGPCT}</DataTd>
                <DataTd>{player.AVG_DPG}</DataTd>
                <DataTd>{player.AVG_DTPM}</DataTd>
                <DataTd>{player.AVG_DTPCT}</DataTd>
                <DataTd>
                  {player.AVG_GDat15 !== null ? player.AVG_GDat15 : '-'}
                </DataTd>
                <DataTd>
                  {player.AVG_CSDat15 !== null ? player.AVG_CSDat15 : '-'}
                </DataTd>
                <DataTd>
                  {player.AVG_XPDat15 !== null ? player.AVG_XPDat15 : '-'}
                </DataTd>
              </HeatTr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const YearAndSeasonLabel = styled.p`
  font-size: 10px;
  font-weight: 300;
  color: ${theme.white.white50};
`;

const RoleLabel = styled.p`
  color: ${theme.white.white50};
  font-weight: 300;
  font-size: 12px;
`;

const LabelTd = styled.td`
  color: ${theme.white.white100};
  width: 56px;
  height: 24px;
  text-align: center;
  margin-right: 2px;
`;

const SpaceTd = styled.td`
  width: 93px;
  height: 24px;
  margin-right: 6px;
`;

const HeatTr = styled.tr`
  display: flex;
`;

const ColumnLabel = styled.td`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  color: ${theme.white.white100};
  width: 95px;
  height: 47px;
  margin-right: 2px;
  padding-right: 2px;
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
`;
export default Chartheatmap;
