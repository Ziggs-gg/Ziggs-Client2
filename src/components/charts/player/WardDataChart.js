import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const WardDataChart = ({ chartData }) => {
  let bgc = [
    theme.red.redB70,
    theme.blue.blueB70,
    theme.green.greenB70,
    theme.orange.orangeB70,
  ];
  let data3 = {
    labels: ['시야 점수', '와드 설치', '와드 구매', '와드 제거'],
    datasets: [],
  };
  for (let i = 0; i < chartData.length; i++) {
    let playerName = chartData[i]?.phRole.split('-');

    data3.datasets.push({
      label: playerName[3] + ' ' + playerName[4],
      data: [
        chartData[i]?.visionScore,
        chartData[i]?.wardsPlaced,
        chartData[i]?.controlWardsPurchased,
        chartData[i]?.wardsDestroyed,
      ],
      backgroundColor: bgc[i],
      borderRadius: 4,
      barPercentage: 0.8,
      categoryPercentage: 0.4,
    });
  }
  const options3 = {
    interaction: {
      mode: 'index',
    },
    plugins: {
      tooltips: {
        callbacks: {
          labelTextColor(tooltipItem, chart) {
            return 'rgb(179, 93, 24)';
          },
        },
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '시즌 평균 분당 시야 데이터',
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
        },
        xAxes: [
          {
            barThickness: 'flex',
            maxBarThickness: 8,
          },
        ],
      },
      y: {
        pointLabels: {
          color: theme.white.white100,
        },
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
    family: 'Noto Sans KR',
    weight: 400,
  };
  return (
    <BarLayout>
      <Bar data={data3} options={options3} font={fontFamily} />
    </BarLayout>
  );
};

const BarLayout = styled.div`
  width: 432px;
  height: 304px;
`;

export default WardDataChart;
