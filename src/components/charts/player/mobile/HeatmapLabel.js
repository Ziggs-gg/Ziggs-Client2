import React from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme.js';

const HeatmapLabel = ({ heatMapData }) => {
  console.log(heatMapData);
  return (
    <div>
      {heatMapData?.map((player, idx) => {
        return (
          <ColumnLabel key={idx}>
            <YearAndSeasonLabel>
              {player.yy}-{player.splitSeason}
            </YearAndSeasonLabel>
            {player.phID.includes('-')
              ? player.phID.split('-')[4]
              : player.phID}
            <RoleLabel>{player.role}</RoleLabel>
          </ColumnLabel>
        );
      })}
    </div>
  );
};

export default HeatmapLabel;

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

const ColumnLabel = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  color: ${theme.white.white100};
  width: 73px;
  height: 47px;
  margin-bottom: 15%;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.03em;
`;
