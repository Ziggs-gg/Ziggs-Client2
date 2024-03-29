import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';
import ReactTooltip from 'react-tooltip';

const EmptyChartheatmap = () => {
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
      <HeatTr>
        <ColumnLabel></ColumnLabel>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
      </HeatTr>
      <HeatTr>
        <ColumnLabel></ColumnLabel>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
      </HeatTr>
      <HeatTr>
        <ColumnLabel></ColumnLabel>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
        <DataTd>-</DataTd>
      </HeatTr>
    </table>
  );
};

export default EmptyChartheatmap;

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
