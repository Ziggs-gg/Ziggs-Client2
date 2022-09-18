import React from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme.js';
import ReactTooltip from 'react-tooltip';

const MobileChartheatmap3 = ({ heatMapData }) => {
  const backgroundColor = [
    theme.red.redMain,
    theme.red.redB80,
    theme.red.redB60,
    theme.red.redB40,
  ];
  return (
    <table>
      <HeatTr>
        <LabelTd data-for="GPM" data-tip>
          GPM
        </LabelTd>
        <ReactTooltip
          id="GPM"
          effect="solid"
          getContent={dataTip => '분당 획득 골드'}
        />
        <LabelTd data-for="GOLD" data-tip>
          GOLD%
        </LabelTd>
        <ReactTooltip
          id="GOLD"
          effect="solid"
          getContent={dataTip => '팀 내 골드 비중'}
        />
        <LabelTd data-for="VSPM" data-tip>
          VSPM
        </LabelTd>
        <ReactTooltip
          id="VSPM"
          effect="solid"
          getContent={dataTip => '분당 시야 점수'}
        />
        <LabelTd data-for="WPM" data-tip>
          WPM
        </LabelTd>
        <ReactTooltip
          id="WPM"
          effect="solid"
          getContent={dataTip => '분당 와드 설치'}
        />
      </HeatTr>
      {heatMapData?.map((player, idx) => {
        const gpm = {
          background: backgroundColor[player.AVG_GPM?.split('/')[1] - 1],
        };

        const goldpct = {
          background: backgroundColor[player.AVG_goldPCT?.split('/')[1] - 1],
        };

        const vspm = {
          background: backgroundColor[player.AVG_VSPM?.split('/')[1] - 1],
        };

        const wpm = {
          background: backgroundColor[player.AVG_WPM?.split('/')[1] - 1],
        };

        return (
          <HeatTr key={idx}>
            <DataTd style={gpm}>{player.AVG_GPM?.split('/')[0]}</DataTd>
            <DataTd style={goldpct}>{player.AVG_goldPCT?.split('/')[0]}</DataTd>
            <DataTd style={vspm}>
              {player.AVG_VSPM?.split('/')[0] ?? '-'}
            </DataTd>
            <DataTd style={wpm}>{player.AVG_WPM?.split('/')[0] ?? '-'}</DataTd>
          </HeatTr>
        );
      })}
    </table>
  );
};

export default MobileChartheatmap3;

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
