import React from 'react';
import { Radar } from 'react-chartjs-2';
import styled from 'styled-components';

const RadarChart = ({ chartData }) => {
  let playerName1, playerName2, playerName3, playerName4;

  if (chartData[0]?.phRole != undefined) {
    playerName1 = chartData[0]?.phRole.split('-');
  } else playerName1 = '';

  if (chartData[1]?.phRole != undefined) {
    playerName2 = chartData[1]?.phRole.split('-');
  } else playerName2 = '';

  if (chartData[2]?.phRole != undefined) {
    playerName3 = chartData[2]?.phRole.split('-');
  } else playerName3 = '';

  if (chartData[3]?.phRole != undefined) {
    playerName4 = chartData[3]?.phRole.split('-');
  } else playerName4 = '';

  const data = {
    labels: ['골드수급력', '생존력', '시야장악력', '전투력'],
    datasets: [
      {
        label: playerName1[3] + ' ' + playerName1[4],
        color: '#F3F3F3',
        backgroundColor: 'rgba(193, 53, 49, .3)',
        borderColor: '#C13631',
        pointBackgroundColor: '#C13631',
        poingBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#C13631',
        data: [
          chartData[0]?.AVG_EP,
          chartData[0]?.AVG_SA,
          chartData[0]?.AVG_VC,
          chartData[0]?.AVG_CP,
        ],
      },
      {
        label: playerName2[3] + ' ' + playerName2[4],
        backgroundColor: 'rgba(49, 115, 193, .3)',
        borderColor: '#3173C1',
        pointBackgroundColor: '#3173C1',
        poingBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#3173C1',
        data: [
          chartData[1]?.AVG_EP,
          chartData[1]?.AVG_SA,
          chartData[1]?.AVG_VC,
          chartData[1]?.AVG_CP,
        ],
      },
      {
        label: playerName3[3] + ' ' + playerName3[4],
        backgroundColor: 'rgba(119, 154, 52, .3)',
        borderColor: '#779A34',
        pointBackgroundColor: '#779A34',
        poingBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#779A34',
        data: [
          chartData[2]?.AVG_EP,
          chartData[2]?.AVG_SA,
          chartData[2]?.AVG_VC,
          chartData[2]?.AVG_CP,
        ],
      },
      {
        label: playerName4[3] + ' ' + playerName4[4],
        backgroundColor: 'rgba(179, 93, 24, .3)',
        borderColor: '#B35D18',
        pointBackgroundColor: '#B35D18',
        poingBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#B35D18',
        data: [
          chartData[3]?.AVG_EP,
          chartData[3]?.AVG_SA,
          chartData[3]?.AVG_VC,
          chartData[3]?.AVG_CP,
        ],
      },
    ],
  };

  const options = {
    interaction: {
      mode: 'index',
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    labels: {
      color: '#F3F3F3',
    },
    scales: {
      r: {
        pointLabels: {
          color: '#C6C6C5',
        },
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
        suggestedMin: 0,
        suggestedMax: 10,
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
  width: 280px;
  height: 304px;
  padding: 12px 2px 12px 2px;
`;

export default RadarChart;
