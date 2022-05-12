import React from 'react';
import { Bubble } from 'react-chartjs-2';
import styled from 'styled-components';

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First Dataset',
      // data: [
      //   { x: DPG[0].DPM, y: DPG[0].GPM, r: DPG[0].DPG * 20 },
      //   { x: DPG[1].DPM, y: DPG[1].GPM, r: DPG[1].DPG * 20 },
      //   { x: DPG[2].DPM, y: DPG[2].GPM, r: DPG[2].DPG },
      //   { x: DPG[3].DPM, y: DPG[3].GPM, r: DPG[3].DPG },
      //   { x: DPG[4].DPM, y: DPG[4].GPM, r: DPG[4].DPG },
      //   { x: DPG[4].DPM, y: DPG[4].GPM, r: DPG[4].DPG },
      //   { x: DPG[5].DPM, y: DPG[5].GPM, r: DPG[5].DPG },
      //   { x: DPG[6].DPM, y: DPG[6].GPM, r: DPG[6].DPG },
      //   { x: DPG[7].DPM, y: DPG[7].GPM, r: DPG[7].DPG },
      //   { x: DPG[8].DPM, y: DPG[8].GPM, r: DPG[8].DPG },
      // ],
      data: [
        { x: 4, y: 2, r: 10 },
        { x: 2, y: 6, r: 10 },
        { x: 1, y: 3, r: 10 },
      ],
      backgroundColor: [
        'rgba(193, 53, 59, .5)',
        'rgba(49, 115, 193, .5)',
        'rgba(119, 154, 52, .5)',
        'rgba(179, 93, 24, .5)',
      ],
      borderColor: [
        'rgb(193, 53, 59)',
        'rgb(49, 115, 193)',
        'rgb(119, 154, 52)',
        'rgb(179, 93, 24)',
      ],
    },
  ],
};

const options = {
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

function ChartBubble() {
  return (
    <BubbleLayout>
      <Bubble type={'bubble'} data={data} options={options} />
    </BubbleLayout>
  );
}

const BubbleLayout = styled.div`
  width: 432px;
  height: 304px;
`;

export default ChartBubble;
