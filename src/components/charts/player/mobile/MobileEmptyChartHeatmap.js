import React from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme.js';

const MobileEmptyChartheatmap = () => {
  return (
    <table>
      <HeatTr>
        <SpaceTd />
        <LabelTd>게임</LabelTd>
        <LabelTd>킬</LabelTd>
        <LabelTd>데스</LabelTd>
        <LabelTd>어시스트</LabelTd>
      </HeatTr>
      <HeatTr>
        <ColumnLabel></ColumnLabel>
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
      </HeatTr>
      <HeatTr>
        <ColumnLabel></ColumnLabel>
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
      </HeatTr>
      <HeatTr>
        <ColumnLabel></ColumnLabel>
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
      </HeatTr>
    </table>
  );
};

export default MobileEmptyChartheatmap;

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
