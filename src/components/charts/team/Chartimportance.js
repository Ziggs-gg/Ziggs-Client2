import React from 'react';
import styled from 'styled-components';
import { Bar, Chart } from 'react-chartjs-2';
import theme from '../../../styles/theme.js';

const Chartimportance = ({ chartData }) => {
  const chartColor = [
    // team1
    theme.green.greenB70, // 탑
    theme.green.greenB50, // 정글
    theme.green.greenW80, // 미드
    theme.green.greenW60, // 원딜
    theme.green.greenMain, // 서폿
    // team2
    theme.orange.orangeB70, // 탑
    theme.orange.orangeB50, // 정글
    theme.orange.orangeW80, // 미드
    theme.orange.orangeW60, // 원딜
    theme.orange.orangeMain, // 서폿
  ];
  const xLabels = [
    '가한 피해량 비중',
    '받은 피해량 비중',
    'CS 비중',
    '획득 골드 비중',
    '시야 점수 비중',
  ];
  let data = {
    labels: xLabels,
    datasets: [],
  };
  // data.datasets에 데이터 삽입
  for (let i = 0; i < chartData?.length; i++) {
    let ptIDsplit = chartData[i].ptID.split('-');
    data.datasets.push({
      label: `${chartData[i].teamABBR} ${chartData[i]?.role}`,
      data: [
        chartData[i]?.DMGPCT,
        chartData[i]?.DTPCT,
        chartData[i]?.CS,
        chartData[i]?.golds,
        chartData[i]?.visionScore,
      ],
      backgroundColor: chartColor[i],
      stack: `${ptIDsplit[0]} ${ptIDsplit[2]} ${
        ptIDsplit[ptIDsplit.length - 1]
      }`,
    });
  }

  const options = {
    interaction: {
      mode: 'x',
    },
    borderRadius: 4,
    barPercentage: 0.8,
    categoryPercentage: 0.4,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: '포지션별 평균 팀 내 비중 데이터',
        color: theme.white.white100,
        align: 'start',
        padding: 0,
        font: {
          size: 14,
          weight: 500,
          lineHeight: '16px',
        },
      },
      tooltip: {
        intersect: false,
        yAlign: 'center',
        itemSort: ctx => {
          return ctx.datasetIndex * -1;
        },
        callbacks: {
          label: ctx => {
            // 소수점 2번째 자리에서 반올림하는 함수
            function roundToTwo(num) {
              return +(Math.round(num + 'e+2') + 'e-2');
            }
            return `${ctx.dataset.label}: ${roundToTwo(ctx.raw)}%`;
          },
        },
      },
      legend: {
        fullSize: true,
        labels: {
          font: {
            size: 11,
          },
          boxWidth: 10,
          boxHeight: 10,
          color: theme.white.white100,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: theme.white.white80,
        },
      },
      y: {
        grid: {
          color: theme.black.black90,
          backgroundColor: theme.black.black90,
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
        max: 100,
        beginAtZero: true,
        stacked: true,
      },
    },
  };
  const fontFamily = {
    weight: 400,
  };
  return (
    <ChartLayout>
      <Bar data={data} options={options} font={fontFamily} />
    </ChartLayout>
  );
};

const ChartLayout = styled.div`
  width: 664px;
  height: 304px;
`;

export default Chartimportance;
