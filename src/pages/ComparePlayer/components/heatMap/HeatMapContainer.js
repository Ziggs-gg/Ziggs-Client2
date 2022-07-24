import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API } from '../../../../config';
import Chartheatmap from '../../../../components/charts/player/Chartheatmap';
import EmptyChartheatmap from '../../../../components/charts/player/EmptyChartheatmap';

const HeatMapContainer = ({ selectedPlayers }) => {
  const [heatMapData, setHeatMapData] = useState([]);

  useEffect(() => {
    let selectedPlayersQuery = [];
    if (selectedPlayers !== 0) {
      selectedPlayers.forEach(el => selectedPlayersQuery.push(`phRole=${el}`));
    }

    axios
      .get(`${API.HEATMAP_PLAYER}${selectedPlayersQuery.join('&')}`)
      .then(Response => {
        setHeatMapData(Response.data);
      })
      .catch(Error => {
        console.error(Error);
      });
  }, [selectedPlayers]);

  return (
    <HeatMapLayout>
      {selectedPlayers.length === 0 && <EmptyChartheatmap />}
      {selectedPlayers.length > 0 && (
        <Chartheatmap heatMapData={heatMapData?.Heatmap} />
      )}
    </HeatMapLayout>
  );
};

export default HeatMapContainer;

const HeatMapLayout = styled.div`
  height: 670x;
  margin: 16px 0;
  padding: 16px 0;
  border-top: 3px solid ${props => props.theme.black.black85};
  border-bottom: 3px solid ${props => props.theme.black.black85};
`;
