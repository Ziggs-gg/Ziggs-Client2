import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const ChartPolar = ({ chartData }) => {
  let playerIDarr = [];
  for (let i = 0; i < chartData.length; i++) {
    let playerID = chartData[i]?.phRole.split('-');
    playerIDarr.push(playerID[3] + ' ' + playerID[4]);
  }

  const bgc = [
    theme.red.redOPA40, // 0: red
    theme.blue.blueOPA40, // 1: blue
    theme.green.greenOPA40, // 2: green
    theme.orange.orangeOPA40, // 3: orange
  ];

  const bdc = [
    theme.red.redB70, // 0: red
    theme.blue.blueB70, // 1: blue
    theme.green.greenB70, // 2: green
    theme.orange.orangeB70, // 3: oragne
  ];

  let labelsArr = [];
  let backgroundColorArr = [];
  let borderColorArr = [];
  let chartDataArr = [];

  (function updateDataArr() {
    for (let playerIdx = 0; playerIdx < playerIDarr.length; playerIdx++) {
      labelsArr.push(playerIDarr[playerIdx]);
      chartDataArr.push(chartData[playerIdx]?.KPPCT);
      backgroundColorArr.push(bgc[playerIdx]);
      borderColorArr.push(bdc[playerIdx]);
    }
  })();

  let data = {
    labels: labelsArr,
    datasets: [
      {
        data: chartDataArr,
        backgroundColor: backgroundColorArr,
        borderColor: borderColorArr,
        borderAlign: 'inner',
      },
    ],
  };

  const options = {
    plugins: {
      responsive: true,
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '시즌 평균 킬 관여율',
        color: theme.white.white100,
        align: 'start',
        padding: {
          top: 0,
          bottom: 16,
        },
        font: {
          size: 14,
          weight: 500,
          lineHeight: '16px',
        },
      },
      tooltip: {
        callbacks: {
          title: ctx => {
            return ctx[0].label;
          },
          label: ctx => {
            return ctx.raw ? `${ctx.raw}%` : '-';
          },
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          color: theme.black.black90,
          lineWidth: 1,
        },
        grid: {
          color: theme.black.black90,
        },
        ticks: {
          z: 3,
          color: theme.white.white80,
          backdropColor: 'rgba(0, 0, 0, 0)',
          callback: function (value, index, values) {
            if (value === 0) {
              return value;
            } else {
              return `${value}%`;
            }
          },
          // major: true,
        },
        backgroundColor: theme.black.blackB90OPA25,
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  const fontFamily = {
    weight: 400,
  };

  return (
    <PolarLayout>
      <PolarArea data={data} options={options} font={fontFamily} />
    </PolarLayout>
  );
};

export default ChartPolar;

const PolarLayout = styled.div`
  width: 316px;
  height: 304px;

  @media screen and (max-width: 428px) {
    width: 256px;
    height: 286px;
  }
`;
