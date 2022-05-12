import React from 'react';
import { Radar } from 'react-chartjs-2';
import styled from 'styled-components';

const RadarChart = () => {
  const data = {
    labels: ['골드 수급력', '생존력', '시야장악력', '전투력'],
    datasets: [
      {
        label: 'Player1',
        backgroundColor: 'rgba(193, 53, 49, .3)',
        borderColor: '#C13631',
        pointBackgroundColor: '#C13631',
        poingBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#C13631',
        data: [6.98, 3.2, 3.4, 3.6],
      },
      {
        label: 'Player2',
        backgroundColor: 'rgba(49, 115, 193, .3)',
        borderColor: '#3173C1',
        pointBackgroundColor: '#3173C1',
        poingBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#3173C1',
        data: [6.92, 2.2, 2.6, 4.3],
      },
      {
        label: 'Player3',
        backgroundColor: 'rgba(119, 154, 52, .3)',
        borderColor: '#779A34',
        pointBackgroundColor: '#779A34',
        poingBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#779A34',
        data: [7.16, 3.6, 3.9, 2.3],
      },
      {
        label: 'Player4',
        backgroundColor: 'rgba(179, 93, 24, .3)',
        borderColor: '#B35D18',
        pointBackgroundColor: '#B35D18',
        poingBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#B35D18',
        data: [6.87, 4.3, 3.5, 3.0],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        angleLines: {
          color: '#363634',
          lineWidth: 1,
        },
        grid: {
          color: '#363634',
        },
        ticks: {
          display: false,
        },
        backgroundColor: 'rgba(131, 131, 129, 0.1)',
      },
    },
  };
  return (
    <RadarLayout>
      <Radar data={data} options={options} />
    </RadarLayout>
  );
};

const RadarLayout = styled.div`
  width: 316px;
  height: 304px;
`;

export default RadarChart;
