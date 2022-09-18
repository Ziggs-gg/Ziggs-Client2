import React from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme.js';
import ReactTooltip from 'react-tooltip';

const MobileChartheatmap6 = ({ heatMapData }) => {
  const backgroundColor = [
    theme.red.redMain,
    theme.red.redB80,
    theme.red.redB60,
    theme.red.redB40,
  ];
  return (
    <table>
      <HeatTr>
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
        const csdat15 = {
          background: backgroundColor[player.AVG_CSDat15?.split('/')[1] - 1],
        };

        const xpdat15 = {
          background: backgroundColor[player.AVG_XPDat15?.split('/')[1] - 1],
        };

        return (
          <HeatTr key={idx}>
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

export default MobileChartheatmap6;

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
