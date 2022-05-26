import React from 'react';
import { Bubble } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartBubble = ({ chartData }) => {
  let DPM1 = chartData[0]?.DPM;
  let GPM1 = chartData[0]?.GPM;
  let DPG1 = chartData[0]?.DPG;

  let DPM2 = chartData[1]?.DPM;
  let GPM2 = chartData[1]?.GPM;
  let DPG2 = chartData[1]?.DPG;

  let DPM3 = chartData[2]?.DPM;
  let GPM3 = chartData[2]?.GPM;
  let DPG3 = chartData[2]?.DPG;

  let DPM4 = chartData[3]?.DPM;
  let GPM4 = chartData[3]?.GPM;
  let DPG4 = chartData[3]?.DPG;

  let DPMarr1 = JSON.parse('[' + DPM1 + ']');
  let GPMarr1 = JSON.parse('[' + GPM1 + ']');
  let DPGarr1 = JSON.parse('[' + DPG1 + ']');

  let DPMarr2 = JSON.parse('[' + DPM2 + ']');
  let GPMarr2 = JSON.parse('[' + GPM2 + ']');
  let DPGarr2 = JSON.parse('[' + DPG2 + ']');

  let DPMarr3 = JSON.parse('[' + DPM3 + ']');
  let DPGarr3 = JSON.parse('[' + GPM3 + ']');
  let GPMarr3 = JSON.parse('[' + DPG3 + ']');

  let DPMarr4 = JSON.parse('[' + DPM4 + ']');
  let DPGarr4 = JSON.parse('[' + GPM4 + ']');
  let GPMarr4 = JSON.parse('[' + DPG4 + ']');

  // DPMarr1.forEach(element => {
  //   console.log(element);
  // });
  console.log(DPMarr1);
  console.log(DPGarr1);
  console.log(GPMarr1);
  console.log(DPMarr2);
  console.log(DPGarr2);
  console.log(GPMarr2);
  console.log(DPMarr3);
  console.log(DPGarr3);
  console.log(GPMarr3);
  console.log(DPMarr4);
  console.log(DPGarr4);
  console.log(GPMarr4);

  // player1 = [];
  // player2 = [];
  // player3 = [];
  // player4 = [];

  // for (let i = 0; i < DPMarr1.length; i++) {
  //   player1.push([DPMarr1[i], DPGarr1[i], GPMarr1[i]]);
  // }
  // for (let i = 0; i < DPMarr2.length; i++) {
  //   player2.push([DPMarr2[i], DPGarr2[i], GPMarr2[i]]);
  // }
  // for (let i = 0; i < DPMarr3.length; i++) {
  //   player3.push([DPMarr3[i], DPGarr3[i], GPMarr3[i]]);
  // }
  // for (let i = 0; i < DPMarr4.length; i++) {
  //   player4.push([DPMarr4[i], DPGarr4[i], GPMarr4[i]]);
  // }
  // console.log(player1);
  // console.log(player2);
  // console.log(player3);
  // console.log(player4);
  const data = {
    datasets: [
      {
        label: 'player1',
        // data: [player1],
        backgroundColor: ['rgba(193, 53, 59, .5)'],
        borderColor: ['rgb(193, 53, 59)'],
      },
      {
        label: 'player2',
        // data: [player2],
        backgroundColor: ['rgba(49, 115, 193, .5)'],
        borderColor: ['rgb(49, 115, 193)'],
      },
      {
        label: 'player3',
        // data: [player3],
        backgroundColor: ['rgba(119, 154, 52, .5)'],
        borderColor: ['rgb(119, 154, 52)'],
      },
      {
        label: 'player4',
        // data: [player4],
        backgroundColor: ['rgba(179, 93, 24, .5)'],
        borderColor: ['rgb(179, 93, 24)'],
      },
    ],
  };

  const options = {
    tooltips: {
      mode: ['x', 'y'],
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: '#363634',
          borderColor: '#363634',
          tickColor: '#363634',
        },
        title: {
          display: 'true',
          text: '골드',
          size: '10',
        },
      },
      y: {
        grid: {
          color: '#363634',
          borderColor: '#363634',
          tickColor: '#363634',
        },
        title: {
          display: 'true',
          text: '가한 피해량',
          size: '10',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '골드 당 피해량',
        color: '#F3F3F3',
        align: 'start',
        padding: '15',
      },
    },
  };
  return (
    <BubbleLayout>
      <Bubble type={'bubble'} data={data} options={options} />
    </BubbleLayout>
  );
};

const BubbleLayout = styled.div`
  width: 432px;
  height: 304px;
`;

export default ChartBubble;
