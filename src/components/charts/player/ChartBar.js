import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartBar = () => {
  const data1 = {
    labels: [
      '킬 관여율',
      '가한 피해량 비중',
      '받은 피해량 비중',
      '획득 골드 비중',
      '시야 점수 비중',
    ],
    datasets: [
      {
        label: 'player1',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgb(193, 53, 49)',
          'rgb(193, 53, 49)',
          'rgb(193, 53, 49)',
          'rgb(193, 53, 49)',
        ],
        borderWidth: 3,
      },
      {
        label: 'player2',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgb(49, 115, 193)',
          'rgb(49, 115, 193)',
          'rgb(49, 115, 193)',
          'rgb(49, 115, 193)',
        ],
        borderWidth: 3,
      },
      {
        label: 'player3',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgb(119, 154, 52)',
          'rgb(119, 154, 52)',
          'rgb(119, 154, 52)',
          'rgb(119, 154, 52)',
        ],
        borderWidth: 3,
      },
      {
        label: 'player4',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgb(179, 93, 24)',
          'rgb(179, 93, 24)',
          'rgb(179, 93, 24)',
          'rgb(179, 93, 24)',
        ],
        borderWidth: 3,
      },
    ],
  };
  const options1 = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '시즌 평균 팀 내 비중 데이터',
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

  return (
    <BarLayout>
      <Bar data={data1} options={options1} />
    </BarLayout>
  );
};

const BarLayout = styled.div`
  width: 548px;
  height: 304px;
  margin: 0 32px 0 32px;
`;

export default ChartBar;
