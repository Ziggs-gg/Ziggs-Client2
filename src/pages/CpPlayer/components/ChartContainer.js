import React, { useState, useEffect } from 'react';
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
import axios from 'axios';

const ChartContainer = () => {
  const [chartData, setChartData] = useState([]);

  let phRole = [
    '21-LCK-SUM-HLE-Chovy-MID',
    '21-LCK-SUM-T1-Faker-MID',
    '21-LCK-SUM-DK-Showmaker-MID',
    '21-LCK-SUM-DK-Canyon-JUNGLE',
  ];

  useEffect(() => {
    axios
      .get(
        'http://13.209.5.6:3000/compare/player/Chart?phRole=21-LCK-SUM-HLE-Chovy-MID&phRole=21-LCK-SUM-T1-Faker-MID&phRole=21-LCK-SUM-DK-Showmaker-MID&phRole=21-LCK-SUM-DK-Canyon-JUNGLE'
      )
      .then(Response => {
        setChartData(Response.data);
        console.log(Response.data);
      })
      .catch(Error => {
        console.error(Error);
      });
  }, []);

  return (
    <ChartsLayout>
      {chartData.IndexRadarChart && (
        <RadarChart chartData={chartData?.IndexRadarChart} />
      )}
      <ChartBoxplot />
      {chartData.WardDataChart && (
        <ChartBar3 chartData={chartData?.WardDataChart} />
      )}
      {chartData.KDABox && <ChartDoughnut chartData={chartData?.KDABox} />}
      {chartData.TeamPercentageDataChart && (
        <ChartBar chartData={chartData?.TeamPercentageDataChart} />
      )}
      {chartData.DPGChart && <ChartBubble chartData={chartData?.DPGChart} />}
      {chartData.KPPercentageChart && (
        <ChartPolar chartData={chartData?.KPPercentageChart} />
      )}
      {chartData.RoleDifferPercentageDataChart && (
        <ChartBar2 chartData={chartData?.RoleDifferPercentageDataChart} />
      )}
      {chartData.EGPMChart && <ChartBar4 chartData={chartData?.EGPMChart} />}
      {chartData.CSPMChart && <ChartBar5 chartData={chartData?.CSPMChart} />}
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
