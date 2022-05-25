import React from 'react';
import { Bubble } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartBubble = ({ chartData }) => {
  // let DPM1 = chartData[0]?.DPM;
  // let GPM1 = chartData[0]?.GPM;
  // let DPG1 = chartData[0]?.DPG;

  // let DPM2 = chartData[1]?.DPM;
  // let GPM2 = chartData[1]?.GPM;
  // let DPG2 = chartData[1]?.DPG;

  // let DPM3 = chartData[2]?.DPM;
  // let GPM3 = chartData[2]?.GPM;
  // let DPG3 = chartData[2]?.DPG;

  // let DPM4 = chartData[3]?.DPM;
  // let GPM4 = chartData[3]?.GPM;
  // let DPG4 = chartData[3]?.DPG;

  // let DPMarr1 = JSON.parse('[' + DPM1 + ']');
  // let GPMarr1 = JSON.parse('[' + GPM1 + ']');
  // let DPGarr1 = JSON.parse('[' + DPG1 + ']');

  // let DPMarr2 = JSON.parse('[' + DPM2 + ']');
  // let GPMarr2 = JSON.parse('[' + GPM2 + ']');
  // let DPGarr2 = JSON.parse('[' + DPG2 + ']');

  // let DPMarr3 = JSON.parse('[' + DPM3 + ']');
  // let DPTMarr3 = JSON.parse('[' + GPM3 + ']');
  // let GPMarr3 = JSON.parse('[' + DPG3 + ']');

  // let DPMarr4 = JSON.parse('[' + DPM4 + ']');
  // let DPTMarr4 = JSON.parse('[' + GPM4 + ']');
  // let GPMarr4 = JSON.parse('[' + DPG4 + ']');

  // DPMarr1.forEach(element => {
  //   console.log(element);
  // });
  // console.log(DPMarr);
  // console.log(DPTMarr);
  // console.log(GPMarr);
  const data = {
    datasets: [
      {
        label: 'player1',
        data: [[0, 0, 0]],
        backgroundColor: ['rgba(193, 53, 59, .5)'],
        borderColor: ['rgb(193, 53, 59)'],
      },
      {
        label: 'player2',
        data: [
          { x: 17, y: 17, r: 10 },
          { x: 19, y: 19, r: 10 },
          { x: 25, y: 25, r: 10 },
        ],
        backgroundColor: ['rgba(49, 115, 193, .5)'],
        borderColor: ['rgb(49, 115, 193)'],
      },
      {
        label: 'player3',
        data: [
          // chartData.array.forEach(element, index, array => {
          //   {x: element.DPM, y: element.DPTM, r: element.GPM}
          // })
          { x: 14, y: 14, r: 10 },
          { x: 12, y: 12, r: 10 },
          { x: 11, y: 11, r: 10 },
        ],
        backgroundColor: ['rgba(119, 154, 52, .5)'],
        borderColor: ['rgb(119, 154, 52)'],
      },
      {
        label: 'player4',
        data: [
          // chartData.array.forEach(element, index, array => {
          //   {x: element.DPM, y: element.DPTM, r: element.GPM}
          // })
          { x: 10, y: 10, r: 10 },
          { x: 20, y: 20, r: 10 },
          { x: 30, y: 30, r: 10 },
        ],
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
