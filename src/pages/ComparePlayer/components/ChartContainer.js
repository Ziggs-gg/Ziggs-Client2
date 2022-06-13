import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
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
import axios from 'axios';
import { API } from '../../../config';
import { Loading } from 'react-loading-dot';

const ChartContainer = ({ selectedPlayers }) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let chartQuery = [];
    if (selectedPlayers !== 0) {
      selectedPlayers.forEach(el => chartQuery.push(`phRole=${el}`));
    }

    setLoading(true);
    axios
      .get(`${API.PLAYER_CHART}${chartQuery.join('&')}`)
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
      {loading && (
        <LoadingComponents loading={loading.toString()}>
          <Loading size="1rem" />
        </LoadingComponents>
      )}
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
  display: flex;
  flex-wrap: wrap;
  width: 1360px;
  height: 944px;
  margin: 0 auto;
  margin-bottom: 16px;
  background-color: #131310;
`;

const LoadingComponents = styled.div`
  position: absolute;
  width: 1360px;
  height: 944px;

  ${props =>
    props.loading &&
    css`
      backdrop-filter: blur(10px);
    `}

  z-index:10000;
`;
