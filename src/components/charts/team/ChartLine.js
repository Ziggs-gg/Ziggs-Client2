import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import theme from '../../../styles/theme.js';

const ChartLine = ({}) => {
  // const { width, height } = props;

  // const data = canvas => {
  //   const ctx = canvas.getContext('2d');
  //   const gradient = ctx.createLinearGradient(0, 0, 0, height);
  //   gradient.addColorStop(0, 'rgba(250,174,50,1)');
  //   gradient.addColorStop(1, 'rgba(250,174,50,0)');

  //   return {
  //     labels: [
  //       '02:00',
  //       '04:00',
  //       '06:00',
  //       '08:00',
  //       '10:00',
  //       '12:00',
  //       '14:00',
  //       '16:00',
  //       '18:00',
  //       '20:00',
  //       '22:00',
  //       '00:00',
  //     ],
  //     datasets: [
  //       {
  //         backgroundColor: gradient, // Put the gradient here as a fill color
  //         borderColor: '#ff6c23',
  //         borderWidth: 2,
  //         pointColor: '#fff',
  //         pointStrokeColor: '#ff6c23',
  //         pointHighlightFill: '#fff',
  //         pointHighlightStroke: '#ff6c23',
  //         data: [
  //           25.0, 32.4, 22.2, 39.4, 34.2, 22.0, 23.2, -24.1, 20.0, -18.4, 19.1,
  //           17.4,
  //         ],
  //       },
  //     ],
  //   };
  // };

  const data = {
    labels: [],
    datasets: [
      {
        label: 'player1',
        data: [33, 53, 32, 24, 44, 95, 53, 64, 45, 51],
        fill: {
          target: 'origin',
          above: theme.orange.orangeOPA40, // Area will be red above the origin
          below: theme.orange.orangeOPA20,
        },
        backgroundColor: theme.green.greenB70,
        borderColor: theme.green.greenB70,
        pointStyle: 'circle',
        pointRadius: 3,
        pointHoverRadius: 5,
      },
      {
        label: 'player2',
        data: [33, 53, 32, 24, 44, 65, 98, 57, 48, 39],
        fill: {
          target: 'origin',
          above: theme.green.greenOPA40, // Area will be red above the origin
          below: theme.green.greenOPA20,
        },
        backgroundColor: theme.orange.orangeB70,
        borderColor: theme.orange.orangeB70,
        pointStyle: 'circle',
        pointRadius: 3,
        pointHoverRadius: 5,
      },
    ],
  };
  for (let i = 1; i < 51; i++) {
    data.labels.push(i);
  }
  let max = 0;
  for (let i = 0; i < data.datasets.length; i++) {
    for (let j = 0; j < data.datasets[0].data.length; j++) {
      if (data.datasets[i].data[j] > max) {
        max = data.datasets[i].data[j];
      }
    }
  }
  const options = {
    responsive: false,
    scales: {
      x: {
        grid: {
          color: '#363634',
          borderColor: '#363634',
          tickColor: '#363634',
        },
        min: 0,
        max: 50,
        ticks: { stepSize: 1 },
      },
      y: {
        grid: {
          color: '#363634',
          borderColor: '#363634',
          tickColor: '#363634',
        },
        min: max * -1,
        max: max,
        ticks: {
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '시간대별 평균 골드 격차',
        color: theme.white.white100,
        align: 'start',
        padding: '15',
      },
    },
  };

  return (
    <ChartLayout>
      <Line width="894" height="304" data={data} options={options} />
    </ChartLayout>
  );
};

const ChartLayout = styled.div`
  width: 894px;
  height: 304px;
`;

export default ChartLine;
