import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartBar2 = ({ chartData }) => {
  let bgc = [
    'rgb(193, 53, 49)',
    'rgb(49, 115, 193)',
    'rgb(119, 154, 52)',
    'rgb(179, 93, 24)',
  ];
  let data2 = {
    labels: ['가한 피해량', '받은 피해량', '획득골드', '시야 점수'],
    datasets: [],
  };
  for (let i = 0; i < chartData.length; i++) {
    let playerName = chartData[i]?.phRole.split('-');
    data2.datasets.push({
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
  const options2 = {
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
      },
      y: {
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
  return (
    <BarLayout>
      <Bar data={data2} options={options2} />
    </BarLayout>
  );
};

const BarLayout = styled.div`
  width: 548px;
  height: 304px;
  margin: 0 32px 0 32px;
`;

export default ChartBar2;
