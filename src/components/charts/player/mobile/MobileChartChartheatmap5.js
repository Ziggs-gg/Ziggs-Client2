import React from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme.js';
import ReactTooltip from 'react-tooltip';

const MobileChartheatmap5 = ({ heatMapData }) => {
  const backgroundColor = [
    theme.red.redMain,
    theme.red.redB80,
    theme.red.redB60,
    theme.red.redB40,
  ];
  return (
    <table>
      <HeatTr>
        <LabelTd data-for="DPG" data-tip>
          DPG
        </LabelTd>
        <ReactTooltip
          id="DPG"
          effect="solid"
          getContent={dataTip => '골드당 가한 피해량'}
        />
        <LabelTd data-for="DTPM" data-tip>
          DTPM
        </LabelTd>
        <ReactTooltip
          id="DTPM"
          effect="solid"
          getContent={dataTip => '분당 받은 피해량'}
        />
        <LabelTd data-for="DT" data-tip>
          DT%
        </LabelTd>
        <ReactTooltip
          id="DT"
          effect="solid"
          getContent={dataTip => '팀내 받은 피해량 비중'}
        />
        <LabelTd data-for="GD" data-tip>
          GD@15
        </LabelTd>
        <ReactTooltip
          id="GD"
          effect="solid"
          getContent={dataTip => '15분 획득 골드 격차'}
        />
      </HeatTr>
      {heatMapData?.map((player, idx) => {
        const dpg = {
          background: backgroundColor[player.AVG_DPG?.split('/')[1] - 1],
        };

        const dtpm = {
          background: backgroundColor[player.AVG_DTPM?.split('/')[1] - 1],
        };

        const dtpct = {
          background: backgroundColor[player.AVG_DTPCT?.split('/')[1] - 1],
        };

        const gdat15 = {
          background: backgroundColor[player.AVG_GDat15?.split('/')[1] - 1],
        };

        return (
          <HeatTr key={idx}>
            <DataTd style={dpg}>{player.AVG_DPG?.split('/')[0]}</DataTd>
            <DataTd style={dtpm}>{player.AVG_DTPM?.split('/')[0]}</DataTd>
            <DataTd style={dtpct}>{player.AVG_DTPCT?.split('/')[0]}</DataTd>
            <DataTd style={gdat15}>
              {player.AVG_GDat15?.split('/')[0] ?? '-'}
            </DataTd>
          </HeatTr>
        );
      })}
    </table>
  );
};

export default MobileChartheatmap5;

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
