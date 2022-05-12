import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const data4 = {
  labels: [''],
  datasets: [
    {
      label: 'player1',
      data: [12],
      backgroundColor: ['rgb(193, 53, 49)'],
      borderWidth: 5,
    },
    {
      label: 'player2',
      data: [12],
      backgroundColor: ['rgb(49, 115, 193)'],
      borderWidth: 5,
    },
    {
      label: 'player3',
      data: [12],
      backgroundColor: ['rgb(119, 154, 52)'],
      borderWidth: 5,
    },
    {
      label: 'player4',
      data: [12],
      backgroundColor: ['rgb(179, 93, 24)'],
      borderWidth: 5,
    },
  ],
};
const options4 = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '분당 순수 획득 골드',
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

const ChartBar4 = () => {
  return (
    <BarLayout>
      <Bar data={data4} options={options4} />
    </BarLayout>
  );
};

const BarLayout = styled.div`
  width: 200px;
  height: 304px;
`;

export default ChartBar4;
