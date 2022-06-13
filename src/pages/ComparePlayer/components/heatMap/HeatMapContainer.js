import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API } from '../../../../config';
import Chartheatmap from '../../../../components/charts/player/Chartheatmap';

const HeatMapContainer = ({ selectedPlayers }) => {
  const [heatMapData, setHeatMapData] = useState([]);

  let heatMapUrl;
  if (selectedPlayers.length == 0) {
    heatMapUrl = `${API.HEATMAP_PLAYER}phRole=`;
  } else if (selectedPlayers.length == 1) {
    heatMapUrl = `${API.HEATMAP_PLAYER}phRole=${selectedPlayers[0]}`;
  } else if (selectedPlayers.length == 2) {
    heatMapUrl = `${API.HEATMAP_PLAYER}phRole=${selectedPlayers[0]}&phRole=${selectedPlayers[1]}`;
  } else if (selectedPlayers.length == 3) {
    heatMapUrl = `${API.HEATMAP_PLAYER}phRole=${selectedPlayers[0]}&phRole=${selectedPlayers[1]}&phRole=${selectedPlayers[2]}`;
  } else if (selectedPlayers.length == 4) {
    heatMapUrl = `${API.HEATMAP_PLAYER}phRole=${selectedPlayers[0]}&phRole=${selectedPlayers[1]}&phRole=${selectedPlayers[2]}&phRole=${selectedPlayers[3]}`;
  }

  useEffect(() => {
    axios
      .get(heatMapUrl)
      .then(Response => {
        setHeatMapData(Response.data);
      })
      .catch(Error => {
        console.error(Error);
      });
  }, [heatMapUrl]);

  return (
    <HeatMapLayout>
      {heatMapData.Heatmap && (
        <Chartheatmap heatMapData={heatMapData.Heatmap} />
      )}
    </HeatMapLayout>
  );
};

export default HeatMapContainer;

const HeatMapLayout = styled.div`
  width: 1360px;
  height: 670x;
  margin: 16px auto;
  padding: 16px 0;
  border-top: 3px solid ${props => props.theme.black.black85};
  border-bottom: 3px solid ${props => props.theme.black.black85};
`;
