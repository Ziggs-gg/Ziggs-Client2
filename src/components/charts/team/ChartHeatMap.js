import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const ChartHeatmap = ({}) => {
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
              <FirstTeamTd>00.00</FirstTeamTd>
              <FirstTeamTd>00.00</FirstTeamTd>
              <FirstTeamTd>00.00</FirstTeamTd>
              <FirstTeamTd>00.00</FirstTeamTd>
              <FirstTeamTd>00.00</FirstTeamTd>
            </HeatTr>
            <HeatTr>
              <FirstTeamTd>00.00</FirstTeamTd>
              <FirstTeamTd>00.00</FirstTeamTd>
              <FirstTeamTd>00.00</FirstTeamTd>
              <FirstTeamTd>00.00</FirstTeamTd>
              <FirstTeamTd>00.00</FirstTeamTd>
            </HeatTr>
            <HeatTr>
              <FirstTeamTd>00.00</FirstTeamTd>
              <FirstTeamTd>00.00</FirstTeamTd>
              <FirstTeamTd>00.00</FirstTeamTd>
              <FirstTeamTd>00.00</FirstTeamTd>
              <FirstTeamTd>00.00</FirstTeamTd>
            </HeatTr>
            <HeatTr>
              <FirstTeamTd>00.00</FirstTeamTd>
              <FirstTeamTd>00.00</FirstTeamTd>
              <FirstTeamTd>00.00</FirstTeamTd>
              <FirstTeamTd>00.00</FirstTeamTd>
              <FirstTeamTd>00.00</FirstTeamTd>
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
              <SecondTeamTd>00.00</SecondTeamTd>
              <SecondTeamTd>00.00</SecondTeamTd>
              <SecondTeamTd>00.00</SecondTeamTd>
              <SecondTeamTd>00.00</SecondTeamTd>
              <SecondTeamTd>00.00</SecondTeamTd>
            </HeatTr>
            <HeatTr>
              <ColumnLabel>생존력</ColumnLabel>
              <SecondTeamTd>00.00</SecondTeamTd>
              <SecondTeamTd>00.00</SecondTeamTd>
              <SecondTeamTd>00.00</SecondTeamTd>
              <SecondTeamTd>00.00</SecondTeamTd>
              <SecondTeamTd>00.00</SecondTeamTd>
            </HeatTr>
            <HeatTr>
              <ColumnLabel>골드수급력</ColumnLabel>
              <SecondTeamTd>00.00</SecondTeamTd>
              <SecondTeamTd>00.00</SecondTeamTd>
              <SecondTeamTd>00.00</SecondTeamTd>
              <SecondTeamTd>00.00</SecondTeamTd>
              <SecondTeamTd>00.00</SecondTeamTd>
            </HeatTr>
            <HeatTr>
              <ColumnLabel>시야장악력</ColumnLabel>
              <SecondTeamTd>00.00</SecondTeamTd>
              <SecondTeamTd>00.00</SecondTeamTd>
              <SecondTeamTd>00.00</SecondTeamTd>
              <SecondTeamTd>00.00</SecondTeamTd>
              <SecondTeamTd>00.00</SecondTeamTd>
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
  font-weight: bold;
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
