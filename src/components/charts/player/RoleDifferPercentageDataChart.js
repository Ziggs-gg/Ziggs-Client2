import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const RoleDifferPercentageDataChart = ({ chartData }) => {
  const bgc = [
    theme.red.redB70,
    theme.blue.blueB70,
    theme.green.greenB70,
    theme.orange.orangeB70,
  ];

  let data = {
    labels: ['가한 피해량', '받은 피해량', '획득골드', '시야 점수'],
    datasets: [],
  };

  for (let i = 0; i < chartData.length; i++) {
    const playerName = chartData[i]?.phRole.split('-');
    data.datasets.push({
      label: playerName[3] + ' ' + playerName[4],
      data: [
        chartData[i]?.DR,
        chartData[i]?.DTR,
        chartData[i]?.GR,
        chartData[i]?.VSR,
      ],
      backgroundColor: bgc[i],
      borderRadius: 4,
      barPercentage: 0.8,
      categoryPercentage: 0.4,
    });
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
        text: '시즌 평균 동일 포지션 대비 데이터',
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
      tooltip: {
        callbacks: {
          label: ctx => {
            return ctx.raw
              ? `${ctx.dataset.label}: ${ctx.raw}%`
              : `${ctx.dataset.label}: -`;
          },
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
      },
      y: {
        grid: {
          color: theme.black.black90,
          borderColor: theme.black.black90,
          tickColor: theme.black.black90,
        },
        ticks: {
          color: theme.white.white80,
          callback: function (value) {
            if (value === 0) {
              return value;
            } else {
              return `${value}%`;
            }
          },
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

export default RoleDifferPercentageDataChart;

const BarLayout = styled.div`
  width: 548px;
  height: 304px;
  margin: 0 32px 0 32px;

  @media screen and (max-width: 428px) {
    width: 256px;
    height: 286px;
    margin: 0 32px 0 32px;
  }
`;
