import React from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme.js';
import ReactTooltip from 'react-tooltip';

const MobileChartHeatmap2 = ({ heatMapData }) => {
  const backgroundColor = [
    theme.red.redMain,
    theme.red.redB80,
    theme.red.redB60,
    theme.red.redB40,
  ];
  return (
    <table>
      <HeatTr>
        <LabelTd>KDA</LabelTd>
        <LabelTd data-for="KP" data-tip>
          KP%
        </LabelTd>
        <ReactTooltip
          id="KP"
          effect="solid"
          getContent={dataTip => '킬 관여율'}
        />
        <LabelTd data-for="DTH" data-tip>
          DTH%
        </LabelTd>
        <ReactTooltip
          id="DTH"
          effect="solid"
          getContent={dataTip => '데스 비중'}
        />
        <LabelTd data-for="CSM" data-tip>
          CSM
        </LabelTd>
        <ReactTooltip
          id="CSM"
          effect="solid"
          getContent={dataTip => '분당 CS'}
        />
      </HeatTr>
      {heatMapData?.map((player, idx) => {
        const kda = {
          background: backgroundColor[player.AVG_KDA?.split('/')[1] - 1],
        };

        const kppct = {
          background: backgroundColor[player.AVG_KPPCT?.split('/')[1] - 1],
        };

        const dthpct = {
          background: backgroundColor[player.AVG_DTHPCT?.split('/')[1] - 1],
        };

        const csm = {
          background: backgroundColor[player.AVG_CSM?.split('/')[1] - 1],
        };

        return (
          <HeatTr key={idx}>
            <DataTd style={kda}>{player.AVG_KDA?.split('/')[0]}</DataTd>
            <DataTd style={kppct}>{player.AVG_KPPCT?.split('/')[0]}</DataTd>
            <DataTd style={dthpct}>{player.AVG_DTHPCT?.split('/')[0]}</DataTd>
            <DataTd style={csm}>{player.AVG_CSM?.split('/')[0]}</DataTd>
          </HeatTr>
        );
      })}
    </table>
  );
};

export default MobileChartHeatmap2;

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

const SpaceTd = styled.td`
  width: 71px;
  height: 24px;
  margin-right: 6px;
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
