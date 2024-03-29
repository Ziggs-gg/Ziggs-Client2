import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';
import ReactTooltip from 'react-tooltip';

const Chartheatmap = ({ heatMapData }) => {
  const backgroundColor = [
    theme.red.redMain,
    theme.red.redB80,
    theme.red.redB60,
    theme.red.redB40,
  ];
  return (
    <table>
      <HeatTr>
        <SpaceTd />
        <LabelTd>게임</LabelTd>
        <LabelTd>킬</LabelTd>
        <LabelTd>데스</LabelTd>
        <LabelTd>어시스트</LabelTd>
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
        <LabelTd data-for="CSD" data-tip>
          CSD@15
        </LabelTd>
        <ReactTooltip
          id="CSD"
          effect="solid"
          getContent={dataTip => '15분 CS 격차'}
        />
        <LabelTd data-for="XPD" data-tip>
          XPD@15
        </LabelTd>
        <ReactTooltip
          id="XPD"
          effect="solid"
          getContent={dataTip => '15분 획득 경험치 격차'}
        />
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

        const csdat15 = {
          background: backgroundColor[player.AVG_CSDat15?.split('/')[1] - 1],
        };

        const xpdat15 = {
          background: backgroundColor[player.AVG_XPDat15?.split('/')[1] - 1],
        };

        return (
          <HeatTr key={idx}>
            <ColumnLabel>
              <YearAndSeasonLabel>
                {player.yy}-{player.splitSeason}
              </YearAndSeasonLabel>
              {player.phID.includes('-')
                ? player.phID.split('-')[4]
                : player.phID}
              <RoleLabel>{player.role}</RoleLabel>
            </ColumnLabel>
            {/* <DataTd>{player}</DataTd> */}
            <DataTd style={count}>{player.gameCount?.split('/')[0]}</DataTd>
            <DataTd style={kills}>{player.AVG_kills?.split('/')[0]}</DataTd>
            <DataTd style={deaths}>{player.AVG_deaths?.split('/')[0]}</DataTd>
            <DataTd style={assists}>{player.AVG_assists?.split('/')[0]}</DataTd>
            <DataTd style={kda}>{player.AVG_KDA?.split('/')[0]}</DataTd>
            <DataTd style={kppct}>{player.AVG_KPPCT?.split('/')[0]}</DataTd>
            <DataTd style={dthpct}>{player.AVG_DTHPCT?.split('/')[0]}</DataTd>
            <DataTd style={csm}>{player.AVG_CSM?.split('/')[0]}</DataTd>
            <DataTd style={gpm}>{player.AVG_GPM?.split('/')[0]}</DataTd>
            <DataTd style={goldpct}>{player.AVG_goldPCT?.split('/')[0]}</DataTd>
            <DataTd style={vspm}>
              {player.AVG_VSPM?.split('/')[0] ?? '-'}
            </DataTd>
            <DataTd style={wpm}>{player.AVG_WPM?.split('/')[0] ?? '-'}</DataTd>
            <DataTd style={wcpm}>
              {player.AVG_WCPM?.split('/')[0] ?? '-'}
            </DataTd>
            <DataTd style={vspct}>
              {player.AVG_VSPCT?.split('/')[0] ?? '-'}
            </DataTd>
            <DataTd style={dpm}>{player.AVG_DPM?.split('/')[0]}</DataTd>
            <DataTd style={dmgpct}>{player.AVG_DMGPCT?.split('/')[0]}</DataTd>
            <DataTd style={dpg}>{player.AVG_DPG?.split('/')[0]}</DataTd>
            <DataTd style={dtpm}>{player.AVG_DTPM?.split('/')[0]}</DataTd>
            <DataTd style={dtpct}>{player.AVG_DTPCT?.split('/')[0]}</DataTd>
            <DataTd style={gdat15}>
              {player.AVG_GDat15?.split('/')[0] ?? '-'}
            </DataTd>
            <DataTd style={csdat15}>
              {player.AVG_CSDat15?.split('/')[0] ?? '-'}
            </DataTd>
            <DataTd style={xpdat15}>
              {player.AVG_XPDat15?.split('/')[0] ?? '-'}
            </DataTd>
          </HeatTr>
        );
      })}
    </table>
  );
};

export default Chartheatmap;

const YearAndSeasonLabel = styled.p`
  font-size: 10px;
  font-weight: 300;
  color: ${theme.white.white50};
  letter-spacing: -0.05em;
  margin-bottom: 3px;
`;

const RoleLabel = styled.p`
  color: ${theme.white.white50};
  font-weight: 300;
  font-size: 12px;
  letter-spacing: -0.03em;
  margin-top: 3px;
`;

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

const ColumnLabel = styled.td`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  color: ${theme.white.white100};
  width: 73px;
  height: 47px;
  margin-right: 2px;
  padding-right: 2px;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.03em;
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
