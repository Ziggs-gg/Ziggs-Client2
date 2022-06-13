import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const ChartHeatmap = ({ chartData }) => {
  return (
    <ChartLayout>
      <Label>포지션별 VERSUS 인덱스 비교</Label>
      <TableContain>
        <table>
          <thead>
            <HeatTr>
              <LabelTd>team탑</LabelTd>
              <LabelTd>team정글</LabelTd>
              <LabelTd>team미드</LabelTd>
              <LabelTd>team원딜</LabelTd>
              <LabelTd>team서폿</LabelTd>
            </HeatTr>
          </thead>
          <tbody>
            <HeatTr>
              <FirstTeamTd>{chartData[0]?.AVG_CP ?? '-'}</FirstTeamTd>
              <FirstTeamTd>{chartData[1]?.AVG_CP ?? '-'}</FirstTeamTd>
              <FirstTeamTd>{chartData[2]?.AVG_CP ?? '-'}</FirstTeamTd>
              <FirstTeamTd>{chartData[3]?.AVG_CP ?? '-'}</FirstTeamTd>
              <FirstTeamTd>{chartData[4]?.AVG_CP ?? '-'}</FirstTeamTd>
            </HeatTr>
            <HeatTr>
              <FirstTeamTd>{chartData[0]?.AVG_SA ?? '-'}</FirstTeamTd>
              <FirstTeamTd>{chartData[1]?.AVG_SA ?? '-'}</FirstTeamTd>
              <FirstTeamTd>{chartData[2]?.AVG_SA ?? '-'}</FirstTeamTd>
              <FirstTeamTd>{chartData[3]?.AVG_SA ?? '-'}</FirstTeamTd>
              <FirstTeamTd>{chartData[4]?.AVG_SA ?? '-'}</FirstTeamTd>
            </HeatTr>
            <HeatTr>
              <FirstTeamTd>{chartData[0]?.AVG_EP ?? '-'}</FirstTeamTd>
              <FirstTeamTd>{chartData[1]?.AVG_EP ?? '-'}</FirstTeamTd>
              <FirstTeamTd>{chartData[2]?.AVG_EP ?? '-'}</FirstTeamTd>
              <FirstTeamTd>{chartData[3]?.AVG_EP ?? '-'}</FirstTeamTd>
              <FirstTeamTd>{chartData[4]?.AVG_EP ?? '-'}</FirstTeamTd>
            </HeatTr>
            <HeatTr>
              <FirstTeamTd>{chartData[0]?.AVG_VC ?? '-'}</FirstTeamTd>
              <FirstTeamTd>{chartData[1]?.AVG_VC ?? '-'}</FirstTeamTd>
              <FirstTeamTd>{chartData[2]?.AVG_VC ?? '-'}</FirstTeamTd>
              <FirstTeamTd>{chartData[3]?.AVG_VC ?? '-'}</FirstTeamTd>
              <FirstTeamTd>{chartData[4]?.AVG_VC ?? '-'}</FirstTeamTd>
            </HeatTr>
          </tbody>
        </table>
        <table>
          <thead>
            <HeatTr>
              <SpaceTd />
              <LabelTd>team탑</LabelTd>
              <LabelTd>team정글</LabelTd>
              <LabelTd>team미드</LabelTd>
              <LabelTd>team원딜</LabelTd>
              <LabelTd>team서폿</LabelTd>
            </HeatTr>
          </thead>
          <tbody>
            <HeatTr>
              <ColumnLabel>전투력</ColumnLabel>
              <SecondTeamTd>{chartData[5]?.AVG_CP ?? '-'}</SecondTeamTd>
              <SecondTeamTd>{chartData[6]?.AVG_CP ?? '-'}</SecondTeamTd>
              <SecondTeamTd>{chartData[7]?.AVG_CP ?? '-'}</SecondTeamTd>
              <SecondTeamTd>{chartData[8]?.AVG_CP ?? '-'}</SecondTeamTd>
              <SecondTeamTd>{chartData[9]?.AVG_CP ?? '-'}</SecondTeamTd>
            </HeatTr>
            <HeatTr>
              <ColumnLabel>생존력</ColumnLabel>
              <SecondTeamTd>{chartData[5]?.AVG_SA ?? '-'}</SecondTeamTd>
              <SecondTeamTd>{chartData[6]?.AVG_SA ?? '-'}</SecondTeamTd>
              <SecondTeamTd>{chartData[7]?.AVG_SA ?? '-'}</SecondTeamTd>
              <SecondTeamTd>{chartData[8]?.AVG_SA ?? '-'}</SecondTeamTd>
              <SecondTeamTd>{chartData[9]?.AVG_SA ?? '-'}</SecondTeamTd>
            </HeatTr>
            <HeatTr>
              <ColumnLabel>골드수급력</ColumnLabel>
              <SecondTeamTd>{chartData[5]?.AVG_EP ?? '-'}</SecondTeamTd>
              <SecondTeamTd>{chartData[6]?.AVG_EP ?? '-'}</SecondTeamTd>
              <SecondTeamTd>{chartData[7]?.AVG_EP ?? '-'}</SecondTeamTd>
              <SecondTeamTd>{chartData[8]?.AVG_EP ?? '-'}</SecondTeamTd>
              <SecondTeamTd>{chartData[9]?.AVG_EP ?? '-'}</SecondTeamTd>
            </HeatTr>
            <HeatTr>
              <ColumnLabel>시야장악력</ColumnLabel>
              <SecondTeamTd>{chartData[5]?.AVG_VC ?? '-'}</SecondTeamTd>
              <SecondTeamTd>{chartData[6]?.AVG_VC ?? '-'}</SecondTeamTd>
              <SecondTeamTd>{chartData[7]?.AVG_VC ?? '-'}</SecondTeamTd>
              <SecondTeamTd>{chartData[8]?.AVG_VC ?? '-'}</SecondTeamTd>
              <SecondTeamTd>{chartData[9]?.AVG_VC ?? '-'}</SecondTeamTd>
            </HeatTr>
          </tbody>
        </table>
      </TableContain>
    </ChartLayout>
  );
};

const ChartLayout = styled.div`
  width: 664px;
  height: 304px;
  margin-right: 32px;
`;

const TableContain = styled.div`
  display: flex;
`;

const Label = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  letter-spacing: -0.02em;
  color: ${theme.white.white100};
  margin-bottom: 16px;
`;

const HeatTr = styled.tr`
  display: flex;
`;

const LabelTd = styled.td`
  color: ${theme.white.white100};
  width: 56px;
  height: 24px;
  text-align: center;
  margin-right: 2px;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.03em;
`;

const FirstTeamTd = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.white.white100};
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background: ${theme.green.greenMain};
  text-align: center;
  margin: 0 2px 2px 0;
`;

const SecondTeamTd = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.white.white100};
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background: ${theme.orange.orangeMain};
  text-align: center;
  margin: 0 2px 2px 0;
`;

const SpaceTd = styled.td`
  width: 73px;
  height: 24px;
`;

const ColumnLabel = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 73px;
  height: 56px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.03em;
  color: ${theme.white.white100};
  text-align: center;
`;

export default ChartHeatmap;
