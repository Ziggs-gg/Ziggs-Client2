import React from 'react';
import { Radar } from 'react-chartjs-2';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const RadarChart = ({ chartData }) => {
  let raderChartData = [];

  chartData.forEach(element => {
    element.label =
      element.phRole?.split('-')[3] + ' ' + element.phRole?.split('-')[4];
    raderChartData.push(element);
  });

  const backgroundColor = [
    theme.red.redOPA40,
    theme.blue.blueOPA40,
    theme.green.greenOPA40,
    theme.orange.orangeOPA40,
  ];

  const color70 = [
    theme.red.redB70,
    theme.blue.blueB70,
    theme.green.greenB70,
    theme.orange.orangeB70,
  ];

  const mainColor = [
    theme.red.redMain,
    theme.blue.blueMain,
    theme.green.greenMain,
    theme.orange.orangeMain,
  ];

  const data = {
    labels: ['골드수급력', '생존력', '시야장악력', '전투력'],
    datasets: [],
  };

  raderChartData.forEach((playerData, idx) => {
    data.datasets.push({
      label: playerData?.label,
      color: theme.white.white100,
      backgroundColor: backgroundColor[idx],
      borderColor: mainColor[idx],
      pointBackgroundColor: mainColor[idx],
      pointBorderColor: theme.white.white100,
      pointHoverBackgroundColor: theme.white.white100,
      pointHoverBorderColor: color70[idx],
      data: [
        playerData?.AVG_EP,
        playerData?.AVG_SA,
        playerData?.AVG_VC,
        playerData?.AVG_CP,
      ],
    });
  });

  const options = {
    interaction: {
      mode: 'index',
      axis: 'r',
    },
    plugins: {
      tooltip: {
        // intersect: false,
        // xAlign: 'right',
      },
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
    elements: {
      point: {
        hitRadius: 5,
      },
    },
  };

  const fontFamily = {
    weight: 400,
  };

  return (
    <RadarLayout>
      <Radar data={data} options={options} font={fontFamily} />
    </RadarLayout>
  );
};

export default RadarChart;

const RadarLayout = styled.div`
  width: 316px;
  height: 304px;
  padding: 12px 2px 12px 2px;
`;
