import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const data2 = {
  labels: ['가한 피해량', '받은 피해량', '획득골드', '시야 점수'],
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
const options2 = {
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

const ChartBar2 = () => {
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
