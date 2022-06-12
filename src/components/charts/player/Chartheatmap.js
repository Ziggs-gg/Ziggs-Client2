import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';
import ReactTooltip from 'react-tooltip';

const Chartheatmap = ({ heatMapData }) => {
  const hasMap = new Map();
  for (let i = 0; i < heatMapData.length; i++) {
    hasMap.set(i, heatMapData[i].gameCount);
  }

  const mapSort = new Map([...hasMap.entries()].sort((a, b) => a[1] - b[1]));
  console.log(mapSort);
  console.log(mapSort.get());

  return (
    <div>
      <table>
        <thead>
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
export default Chartheatmap;
