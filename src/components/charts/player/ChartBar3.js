import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartBar3 = ({ chartData }) => {
  let bgc = [
    'rgb(193, 53, 49)',
    'rgb(49, 115, 193)',
    'rgb(119, 154, 52)',
    'rgb(179, 93, 24)',
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
        color: '#F3F3F3',
        align: 'start',
        padding: '15',
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: '#363634',
          borderColor: '#363634',
          tickColor: '#363634',
        },
        ticks: {
          color: '#C6C6C5',
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
          color: '#F3F3F3',
        },
        grid: {
          color: '#363634',
          borderColor: '#363634',
          tickColor: '#363634',
        },
        ticks: {
          color: '#C6C6C5',
        },
      },
    },
  };
  console.log(data3);
  return (
    <BarLayout>
      <Bar data={data3} options={options3} />
    </BarLayout>
  );
};

const BarLayout = styled.div`
  width: 432px;
  height: 304px;
`;

export default ChartBar3;
