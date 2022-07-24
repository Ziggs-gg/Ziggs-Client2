import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RadarChart from '../../../components/charts/player/RadarChart';
import ChartBoxplot from '../../../components/charts/player/ChartBoxplot';
import WardDataChart from '../../../components/charts/player/WardDataChart';
import ChartDoughnut from '../../../components/charts/player/ChartDoughnut';
import TeamPercentageDataChart from '../../../components/charts/player/TeamPercentageDataChart';
import ChartBubble from '../../../components/charts/player/ChartBubble';
import ChartPolar from '../../../components/charts/player/ChartPolar';
import RoleDifferPercentageDataChart from '../../../components/charts/player/RoleDifferPercentageDataChart';
import EGPMChart from '../../../components/charts/player/EGPMChart';
import CSPMChart from '../../../components/charts/player/CSPMChart';
import Chart from 'chart.js/auto';
import axios from 'axios';
import { API } from '../../../config';
import LoadingDots from '../../../components/charts/LoadingDots';

const ChartContainer = ({ selectedPlayers }) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const querys = [];
    selectedPlayers.forEach(phRole => {
      querys.push(`phRole=${phRole}`);
    });
    const queryString =
      selectedPlayers.length === 0 ? 'phRole=' : querys.join('&');

    setLoading(true);

    axios
      .get(`${API.PLAYER_CHART}${queryString}`)
      .then(Response => {
        setChartData(Response.data);
        setLoading(false);
      })
      .catch(Error => {
        console.error(Error);
      });
  }, [selectedPlayers]);

  return (
    <ChartsLayout>
      {loading && <LoadingDots />}
      {chartData.IndexRadarChart && (
        <RadarChart chartData={chartData?.IndexRadarChart} />
      )}
      {chartData.PerMinChart && (
        <ChartBoxplot chartData={chartData?.PerMinChart} />
      )}
      {chartData.WardDataChart && (
        <WardDataChart chartData={chartData?.WardDataChart} />
      )}
      {chartData.KDABox && <ChartDoughnut chartData={chartData?.KDABox} />}
      {chartData.TeamPercentageDataChart && (
        <TeamPercentageDataChart
          chartData={chartData?.TeamPercentageDataChart}
        />
      )}
      {chartData.DPGChart && <ChartBubble chartData={chartData?.DPGChart} />}
      {chartData.KPPercentageChart && (
        <ChartPolar chartData={chartData?.KPPercentageChart} />
      )}
      {chartData.RoleDifferPercentageDataChart && (
        <RoleDifferPercentageDataChart
          chartData={chartData?.RoleDifferPercentageDataChart}
        />
      )}
      {chartData.EGPMChart && <EGPMChart chartData={chartData?.EGPMChart} />}
      {chartData.CSPMChart && <CSPMChart chartData={chartData?.CSPMChart} />}
    </ChartsLayout>
  );
};

export default ChartContainer;

const ChartsLayout = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 944px;
  margin-bottom: 16px;
  background-color: #131310;
`;
