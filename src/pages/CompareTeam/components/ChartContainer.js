import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChartCamp from '../../../components/charts/team/ChartCamp';
import ChartLine from '../../../components/charts/team/ChartLine';
import ChartIndicators from '../../../components/charts/team/ChartIndicators';
import ChartObject from '../../../components/charts/team/ChartObject';
import ChartObject2 from '../../../components/charts/team/ChartObject2';
import ChartHeatmap from '../../../components/charts/team/ChartHeatMap';
import Chartimportance from '../../../components/charts/team/Chartimportance';
import Chart from 'chart.js/auto';
import axios from 'axios';
import { API } from '../../../config';
import LoadingDots from '../../../components/charts/LoadingDots';

const ChartContainer = ({ selectedTeams }) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const querys = [];
    selectedTeams.forEach(phRole => {
      querys.push(`ptID=${phRole}`);
    });
    const queryString = selectedTeams.length === 0 ? 'ptID=' : querys.join('&');

    setLoading(true);

    axios
      .get(`${API.TEAM_CHART}${queryString}`)
      .then(Response => {
        setChartData(Response.data);
        setLoading(false);
      })
      .catch(Error => {
        console.error(Error);
      });
  }, [selectedTeams]);

  return (
    <ChartsLayout>
      {loading && <LoadingDots />}
      {chartData.WinRatebySide && (
        <ChartCamp chartData={chartData?.WinRatebySide} />
      )}
      {chartData.GoldDifferbyGameTime && (
        <ChartLine chartData={chartData?.GoldDifferbyGameTime} />
      )}
      {chartData.TeamStatsbyGames && (
        <ChartIndicators chartData={chartData?.TeamStatsbyGames} />
      )}
      {chartData.FirstObjectRateAndWR_result && (
        <ChartObject chartData={chartData?.FirstObjectRateAndWR_result} />
      )}
      {chartData.FirstObjectTime && (
        <ChartObject2 chartData={chartData?.FirstObjectTime} />
      )}
      {chartData.IndexHeatmapbyPosition && (
        <ChartHeatmap chartData={chartData?.IndexHeatmapbyPosition} />
      )}
      {chartData.TeamPercentDatabyPosition && (
        <Chartimportance chartData={chartData?.TeamPercentDatabyPosition} />
      )}
    </ChartsLayout>
  );
};

export default ChartContainer;

const ChartsLayout = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 944px;
  margin-top: 16px;
  margin-bottom: 16px;
`;
