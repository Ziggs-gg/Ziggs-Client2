import React from 'react';
import styled from 'styled-components';
import RadarChart from '../../../components/charts/player/RadarChart';
import ChartBoxplot from '../../../components/charts/player/ChartBoxplot';
import ChartBar3 from '../../../components/charts/player/ChartBar3';
import ChartDoughnut from '../../../components/charts/player/ChartDoughnut';
import ChartBar from '../../../components/charts/player/ChartBar';
import ChartBubble from '../../../components/charts/player/ChartBubble';
import ChartPolar from '../../../components/charts/player/ChartPolar';
import ChartBar2 from '../../../components/charts/player/ChartBar2';
import ChartBar4 from '../../../components/charts/player/ChartBar4';
import ChartBar5 from '../../../components/charts/player/ChartBar5';
import Chart from 'chart.js/auto';

const ChartContainer = () => {
  return (
    <ChartsLayout>
      <RadarChart />
      <ChartBoxplot />
      <ChartBar3 />
      <ChartDoughnut />
      <ChartBar />
      <ChartBubble />
      <ChartPolar />
      <ChartBar2 />
      <ChartBar4 />
      <ChartBar5 />
    </ChartsLayout>
  );
};

export default ChartContainer;

const ChartsLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1360px;
  height: 944px;
  margin: 0 auto;

  background-color: #131310;
`;
