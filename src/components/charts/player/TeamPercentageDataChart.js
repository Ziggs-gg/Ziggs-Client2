import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const TeamPercentageDataChart = ({ chartData }) => {
  let bgc = [
    theme.red.redB70,
    theme.blue.blueB70,
    theme.green.greenB70,
    theme.orange.orangeB70,
  ];
  let data1 = {
    labels: [
      '가한 피해량 비중',
      '받은 피해량 비중',
      '획득 골드 비중',
      '시야 점수 비중',
    ],
    datasets: [],
  };
  for (let i = 0; i < chartData.length; i++) {
    let playerName = chartData[i]?.phRole.split('-');
    data1.datasets.push({
      label: playerName[3] + ' ' + playerName[4],
      data: [
        chartData[i]?.DMGPCT,
        chartData[i]?.DTPMPCT,
        chartData[i]?.goldPCT,
        chartData[i]?.VSPCT,
      ],
      backgroundColor: bgc[i],
      borderRadius: 4,
      barPercentage: 0.8,
      categoryPercentage: 0.4,
    });
  }

  const options1 = {
    interaction: {
      mode: 'index',
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '시즌 평균 팀 내 비중 데이터',
        fontSize: '16',
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
          callback: function (value, index, values) {
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
      <Bar data={data1} options={options1} font={fontFamily} />
    </BarLayout>
  );
};

const BarLayout = styled.div`
  width: 548px;
  height: 304px;
  margin: 0 32px 0 32px;
`;

export default TeamPercentageDataChart;
