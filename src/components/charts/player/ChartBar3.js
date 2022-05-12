import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const data3 = {
  labels: ['시야 점수', '와드 설치', '와드 구매', '와드 제거'],
  datasets: [
    {
      label: 'player1',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgb(193, 53, 49)',
        'rgb(193, 53, 49)',
        'rgb(193, 53, 49)',
        'rgb(193, 53, 49)',
      ],
      borderRadius: 2,
      borderWidth: 3,
    },
    {
      label: 'player2',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgb(49, 115, 193)',
        'rgb(49, 115, 193)',
        'rgb(49, 115, 193)',
        'rgb(49, 115, 193)',
      ],
      borderRadius: 2,
      borderWidth: 3,
    },
    {
      label: 'player3',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgb(119, 154, 52)',
        'rgb(119, 154, 52)',
        'rgb(119, 154, 52)',
        'rgb(119, 154, 52)',
      ],
      borderRadius: 2,
      borderWidth: 3,
    },
    {
      label: 'player4',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgb(179, 93, 24)',
        'rgb(179, 93, 24)',
        'rgb(179, 93, 24)',
        'rgb(179, 93, 24)',
      ],
      borderRadius: 2,
      borderWidth: 3,
    },
  ],
};
const options3 = {
  plugins: {
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
        fontColor: '#F3F3F3',
      },
    },
    y: {
      grid: {
        color: '#363634',
        borderColor: '#363634',
        tickColor: '#363634',
      },
      ticks: {
        fontColor: '#F3F3F3',
      },
    },
  },
};

const ChartBar3 = () => {
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
