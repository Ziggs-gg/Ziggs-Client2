import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const ChartHeatmap = ({ chartData }) => {
  let firstName = chartData[0]?.ptID.split('-');
  let secondName = chartData[5]?.ptID.split('-');

  return (
    <ChartLayout>
      <Label>포지션별 VERSUS 인덱스 비교</Label>
      <TableContain>
        <table>
          {firstName === undefined && (
            <HeatTr>
              <LabelTd>탑</LabelTd>
              <LabelTd>정글</LabelTd>
              <LabelTd>미드</LabelTd>
              <LabelTd>원딜</LabelTd>
              <LabelTd>서폿</LabelTd>
            </HeatTr>
          )}
          {firstName !== undefined && (
            <HeatTr>
              <LabelTd>{firstName[3] ?? ''} 탑</LabelTd>
              <LabelTd>{firstName[3] ?? ''} 정글</LabelTd>
              <LabelTd>{firstName[3] ?? ''} 미드</LabelTd>
              <LabelTd>{firstName[3] ?? ''} 원딜</LabelTd>
              <LabelTd>{firstName[3] ?? ''} 서폿</LabelTd>
            </HeatTr>
          )}
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
        </table>
        <table>
          {secondName === undefined && (
            <HeatTr>
              <SpaceTd />
              <LabelTd>탑</LabelTd>
              <LabelTd>정글</LabelTd>
              <LabelTd>미드</LabelTd>
              <LabelTd>원딜</LabelTd>
              <LabelTd>서폿</LabelTd>
            </HeatTr>
          )}
          {secondName !== undefined && (
            <HeatTr>
              <SpaceTd />
              <LabelTd>{secondName[3] ?? ''} 탑</LabelTd>
              <LabelTd>{secondName[3] ?? ''} 정글</LabelTd>
              <LabelTd>{secondName[3] ?? ''} 미드</LabelTd>
              <LabelTd>{secondName[3] ?? ''} 원딜</LabelTd>
              <LabelTd>{secondName[3] ?? ''} 서폿</LabelTd>
            </HeatTr>
          )}
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
  background: ${theme.black.black90};
  text-align: center;
  margin: 0 2px 2px 0;
  font-size: 14px;
`;

const SecondTeamTd = styled.td`
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
