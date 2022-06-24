import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const CSPMChart = ({ chartData }) => {
  let data = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          theme.red.redB70,
          theme.blue.blueB70,
          theme.green.greenB70,
          theme.orange.orangeB70,
        ],
        borderRadius: 4,
        barPercentage: 0.8,
        categoryPercentage: 0.4,
      },
    ],
  };

  for (let i = 0; i < chartData.length; i++) {
    let playerName = chartData[i]?.phRole.split('-');
    data.labels.push(playerName[3] + ' ' + playerName[4]);
    data.datasets[0].data.push(chartData[i]?.CSM);
  }

  const options = {
    interaction: {
      mode: 'index',
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '분당 CS',
        color: theme.white.white100,
        align: 'start',
        padding: {
          top: 0,
          bottom: 16,
        },
        font: {
          size: 14,
          weight: 500,
          lineHeight: '16px',
        },
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: theme.black.black90,
          borderColor: theme.black.black90,
          tickColor: theme.black.black90,
        },
        ticks: {
          color: theme.white.white80,
          display: false,
        },
      },
      y: {
        grid: {
          color: theme.black.black90,
          borderColor: theme.black.black90,
          tickColor: theme.black.black90,
        },
        ticks: {
          color: theme.white.white80,
        },
      },
    },
  };

  const fontFamily = {
    weight: 400,
  };

  return (
    <BarLayout>
      <Bar data={data} options={options} font={fontFamily} />
    </BarLayout>
  );
};

export default CSPMChart;

const BarLayout = styled.div`
  width: 200px;
  height: 304px;
`;
