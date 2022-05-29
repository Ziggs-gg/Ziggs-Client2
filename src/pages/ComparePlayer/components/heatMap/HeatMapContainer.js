import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Chartheatmap from '../../../components/charts/player/Chartheatmap';

const HeatMapContainer = () => {
  const [heatMapData, setHeatMapData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'http://13.209.5.6:3000/compare/player/HeatMap?phRole=21-LCK-SUM-HLE-Chovy-MID&phRole=21-LCK-SUM-T1-Faker-MID&phRole=22-LCK-SPR-T1-Faker-MID&phRole=21-LCK-SUM-DK-Showmaker-MID'
      )
      .then(Response => {
        setHeatMapData(Response.data);
        console.log(Response.data);
      })
      .catch(Error => {
        console.error(Error);
      });
  }, []);

  console.log(heatMapData.Heatmap);

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
  height: 624px;
  margin: 16px auto;

  background-color: gray;
`;
