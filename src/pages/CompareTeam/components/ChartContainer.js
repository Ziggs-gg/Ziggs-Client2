import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChartCamp from '../../../components/charts/team/ChartCamp';
import ChartLine from '../../../components/charts/team/ChartLine';
import ChartIndicators from '../../../components/charts/team/ChartIndicators';
import ChartObject from '../../../components/charts/team/ChartObject';
import ChartObject2 from '../../../components/charts/team/ChartObject2';
import ChartHeatmap from '../../../components/charts/team/ChartHeatMap';
import Chartimportance from '../../../components/charts/team/Chartimportance';
import axios from 'axios';
import { API } from '../../../config';

const ChartContainer = ({ selectedTeams }) => {
  const [chartData, setChartData] = useState([]);
  let chartUrl = `${API.TEAM_CHART}ptID=22-LCK-SPR-NS&ptID=22-LCK-SPR-T1`;
  // if (selectedTeams.length == 0) {
  //   chartUrl = `${API.TEAM_CHART}ptID=`;
  // } else if (selectedTeams.length == 1) {
  //   chartUrl = `${API.TEAM_CHART}ptID=${selectedTeams[0]}`;
  // } else if (selectedTeams.length == 2) {
  //   chartUrl = `${API.TEAM_CHART}ptID=${selectedTeams[0]}&ptID=${selectedTeams[1]}`;
  // }

  useEffect(() => {
    axios
      .get(chartUrl)
      .then(Response => {
        setChartData(Response.data);
      })
      .catch(Error => {
        console.error(Error);
      });
  }, [chartUrl]);

  return (
    <ChartsLayout>
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
  display: flex;
  flex-wrap: wrap;
  width: 1360px;
  height: 944px;
  margin: 0 auto;
  margin-top: 16px;
  margin-bottom: 16px;
`;
