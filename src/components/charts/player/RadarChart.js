import React from 'react';
import { Radar } from 'react-chartjs-2';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const RadarChart = ({ chartData }) => {
  let playerName1, playerName2, playerName3, playerName4;

  if (chartData[0]?.phRole != undefined) {
    playerName1 = chartData[0]?.phRole.split('-');
  } else playerName1 = '';

  if (chartData[1]?.phRole != undefined) {
    playerName2 = chartData[1]?.phRole.split('-');
  } else playerName2 = '';

  if (chartData[2]?.phRole != undefined) {
    playerName3 = chartData[2]?.phRole.split('-');
  } else playerName3 = '';

  if (chartData[3]?.phRole != undefined) {
    playerName4 = chartData[3]?.phRole.split('-');
  } else playerName4 = '';

  const data = {
    labels: ['골드수급력', '생존력', '시야장악력', '전투력'],
    datasets: [
      {
        label: playerName1[3] + ' ' + playerName1[4],
        color: theme.white.white100,
        backgroundColor: theme.red.redOPA40,
        borderColor: theme.red.redMain,
        pointBackgroundColor: theme.red.redMain,
        poingBorderColor: theme.white.white100,
        pointHoverBackgroundColor: theme.white.white100,
        pointHoverBorderColor: theme.red.redMain,
        data: [
          chartData[0]?.AVG_EP,
          chartData[0]?.AVG_SA,
          chartData[0]?.AVG_VC,
          chartData[0]?.AVG_CP,
        ],
      },
      {
        label: playerName2[3] + ' ' + playerName2[4],
        backgroundColor: theme.blue.blueOPA40,
        borderColor: theme.blue.blueMain,
        pointBackgroundColor: theme.blue.blueMain,
        poingBorderColor: theme.white.white100,
        pointHoverBackgroundColor: theme.white.white100,
        pointHoverBorderColor: theme.blue.blueMain,
        data: [
          chartData[1]?.AVG_EP,
          chartData[1]?.AVG_SA,
          chartData[1]?.AVG_VC,
          chartData[1]?.AVG_CP,
        ],
      },
      {
        label: playerName3[3] + ' ' + playerName3[4],
        backgroundColor: theme.green.greenOPA40,
        borderColor: theme.green.greenB70,
        pointBackgroundColor: theme.green.greenB70,
        poingBorderColor: theme.white.white100,
        pointHoverBackgroundColor: theme.white.white100,
        pointHoverBorderColor: theme.green.greenB70,
        data: [
          chartData[2]?.AVG_EP,
          chartData[2]?.AVG_SA,
          chartData[2]?.AVG_VC,
          chartData[2]?.AVG_CP,
        ],
      },
      {
        label: playerName4[3] + ' ' + playerName4[4],
        backgroundColor: theme.orange.orangeOPA40,
        borderColor: theme.orange.orangeB70,
        pointBackgroundColor: theme.orange.orangeB70,
        poingBorderColor: theme.white.white100,
        pointHoverBackgroundColor: theme.white.white100,
        pointHoverBorderColor: theme.orange.orangeB70,
        data: [
          chartData[3]?.AVG_EP,
          chartData[3]?.AVG_SA,
          chartData[3]?.AVG_VC,
          chartData[3]?.AVG_CP,
        ],
      },
    ],
  };

  const options = {
    interaction: {
      mode: 'index',
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    labels: {
      color: theme.white.white100,
    },
    scales: {
      r: {
        pointLabels: {
          color: theme.white.white80,
        },
        angleLines: {
          color: theme.black.black90,
          lineWidth: 1,
        },
        grid: {
          color: theme.black.black90,
        },
        ticks: {
          display: false,
        },
        backgroundColor: theme.black.blackB90OPA25,
        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
  };
  return (
    <RadarLayout>
      <Radar data={data} options={options} />
    </RadarLayout>
  );
};

const RadarLayout = styled.div`
  width: 280px;
  height: 304px;
  padding: 12px 2px 12px 2px;
`;

export default RadarChart;
