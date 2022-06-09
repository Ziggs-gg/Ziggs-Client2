import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const ChartIndicators = ({}) => {
  const [textColor, setTextColor] = useState([
    theme.white.white100,
    theme.red.redW80,
  ]);

  const data1 = 13;
  const data2 = 11;
  let leftColor;
  let rightColor;
  if (data1 > data2) {
    leftColor = textColor[1];
    rightColor = textColor[0];
  }
  return (
    <ChartLayout>
      <Label>게임별 지표</Label>
      <TableLayout>
        <table>
          <tr>
            <TeamNameAndImage>
              <LeftTeamName>T1</LeftTeamName>
              <TeamLogo src="/images/teams/DK.png" />
            </TeamNameAndImage>
            <CenterTd></CenterTd>
            <TeamNameAndImage>
              <TeamLogo src="/images/teams/DK.png" />
              <RightTeamName>DK</RightTeamName>
            </TeamNameAndImage>
          </tr>
          <tr>
            <LeftTeamTd>00:00</LeftTeamTd>
            <CenterTd>게임 시간</CenterTd>
            <RightTeamTd>00:00</RightTeamTd>
          </tr>
          <tr>
            <LeftTeamTd>00</LeftTeamTd>
            <CenterTd>킬</CenterTd>
            <RightTeamTd>00</RightTeamTd>
          </tr>
          <tr>
            <LeftTeamTd>00</LeftTeamTd>
            <CenterTd>데스</CenterTd>
            <RightTeamTd>00</RightTeamTd>
          </tr>
          <tr>
            <LeftTeamTd>00</LeftTeamTd>
            <CenterTd>포탑 파괴</CenterTd>
            <RightTeamTd>00</RightTeamTd>
          </tr>
          <tr>
            <LeftTeamTd>00</LeftTeamTd>
            <CenterTd>획득 골드</CenterTd>
            <RightTeamTd>00</RightTeamTd>
          </tr>
          <tr>
            <LeftTeamTd>00</LeftTeamTd>
            <CenterTd>시야 점수 합계</CenterTd>
            <RightTeamTd>00</RightTeamTd>
          </tr>
          <tr>
            <LeftTeamTd>00</LeftTeamTd>
            <CenterTd>드래곤 획득</CenterTd>
            <RightTeamTd>00</RightTeamTd>
          </tr>
          <tr>
            <LeftTeamTd>00</LeftTeamTd>
            <CenterTd>협곡의 정령 획득</CenterTd>
            <RightTeamTd>00</RightTeamTd>
          </tr>
          <tr>
            <LeftTeamTd>00</LeftTeamTd>
            <CenterTd>내셔 남작 획득</CenterTd>
            <RightTeamTd>00</RightTeamTd>
          </tr>
          <tr>
            <LeftTeamTd>00</LeftTeamTd>
            <CenterTd>장로 드래곤 획득</CenterTd>
            <RightTeamTd>00</RightTeamTd>
          </tr>
        </table>
      </TableLayout>
    </ChartLayout>
  );
};

const ChartLayout = styled.div`
  width: 432px;
  height: 304px;
  margin-top: 16px;
`;

const TableLayout = styled.div`
  display: flex;
  justify-content: center;
`;

const Label = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  letter-spacing: -0.02em;
  color: ${theme.white.white100};
  margin-bottom: 16px;
`;

const TeamNameAndImage = styled.td`
  display: flex;
`;

const CenterTd = styled.td`
  width: 143px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${theme.white.white100};
  text-align: center;
  padding-bottom: 8px;
`;

const LeftTeamName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${theme.white.white100};
  padding-bottom: 8px;
  padding-right: 4px;
`;

const RightTeamName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${theme.white.white100};
  padding-bottom: 8px;
  padding-left: 4px;
`;

const TeamLogo = styled.img`
  /* position: absolute;
  width: 16px;
  height: 16px;
  left: 287px;
  top: 32px; */
  width: 16px;
  height: 16px;
`;

const LeftTeamTd = styled.td`
  color: ${theme.white.white100};
  text-align: right;
  padding-bottom: 8px;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
`;

const RightTeamTd = styled.td`
  color: ${theme.white.white100};
  text-align: left;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
`;

export default ChartIndicators;
