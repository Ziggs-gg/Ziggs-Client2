import React from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme.js';
import ReactTooltip from 'react-tooltip';

const MobileChartheatmap4 = ({ heatMapData }) => {
  const backgroundColor = [
    theme.red.redMain,
    theme.red.redB80,
    theme.red.redB60,
    theme.red.redB40,
  ];
  return (
    <table>
      <HeatTr>
        <LabelTd data-for="WCPM" data-tip>
          WCPM
        </LabelTd>
        <ReactTooltip
          id="WCPM"
          effect="solid"
          getContent={dataTip => '분당 와드 제거'}
        />
        <LabelTd data-for="VS" data-tip>
          VS%
        </LabelTd>
        <ReactTooltip
          id="VS"
          effect="solid"
          getContent={dataTip => '팀 내 와드 비중'}
        />
        <LabelTd data-for="DPM" data-tip>
          DPM
        </LabelTd>
        <ReactTooltip
          id="DPM"
          effect="solid"
          getContent={dataTip => '분당 가한 피해량'}
        />
        <LabelTd data-for="DMG" data-tip>
          DMG%
        </LabelTd>
        <ReactTooltip
          id="DMG"
          effect="solid"
          getContent={dataTip => '팀 내 가한 피해량 비중'}
        />
      </HeatTr>
      {heatMapData?.map((player, idx) => {
        const wcpm = {
          background: backgroundColor[player.AVG_WCPM?.split('/')[1] - 1],
        };

        const vspct = {
          background: backgroundColor[player.AVG_VSPCT?.split('/')[1] - 1],
        };

        const dpm = {
          background: backgroundColor[player.AVG_DPM?.split('/')[1] - 1],
        };

        const dmgpct = {
          background: backgroundColor[player.AVG_DMGPCT?.split('/')[1] - 1],
        };

        return (
          <HeatTr key={idx}>
            <DataTd style={wcpm}>
              {player.AVG_WCPM?.split('/')[0] ?? '-'}
            </DataTd>
            <DataTd style={vspct}>
              {player.AVG_VSPCT?.split('/')[0] ?? '-'}
            </DataTd>
            <DataTd style={dpm}>{player.AVG_DPM?.split('/')[0]}</DataTd>
            <DataTd style={dmgpct}>{player.AVG_DMGPCT?.split('/')[0]}</DataTd>
          </HeatTr>
        );
      })}
    </table>
  );
};

export default MobileChartheatmap4;

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
