import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartBar5 = ({ chartData }) => {
  let bgc = [
    'rgb(193, 53, 49)',
    'rgb(49, 115, 193)',
    'rgb(119, 154, 52)',
    'rgb(179, 93, 24)',
  ];
  let data = {
    labels: [''],
    datasets: [],
  };
  for (let i = 0; i < chartData.length; i++) {
    let playerName = chartData[i]?.phRole.split('-');

    data.datasets.push({
      label: playerName[3] + ' ' + playerName[4],
      data: [chartData[i]?.CSM],
      backgroundColor: bgc[i],
      borderRadius: 4,
      barPercentage: 0.8,
      categoryPercentage: 0.4,
    });
  }

  const options4 = {
    interaction: {
      mode: 'index',
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '분당 CS',
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
      <Bar data={data} options={options4} />
    </BarLayout>
  );
};

const BarLayout = styled.div`
  width: 200px;
  height: 304px;
`;

export default ChartBar5;
