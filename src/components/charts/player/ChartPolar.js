import react from 'react';
import { PolarArea } from 'react-chartjs-2';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const ChartPolar = ({ chartData }) => {
  // to Get PlayerID from phRole
  var playerIDarr = [];
  for (let i = 0; i < chartData.length; i++) {
    let playerID = chartData[i]?.phRole.split('-');
    playerIDarr.push(playerID[3] + ' ' + playerID[4]);
  }
  //
  var bgc = [
    theme.red.redOPA40, // 0: red
    theme.blue.blueOPA40, // 1: blue
    theme.green.greenOPA40, // 2: green
    theme.orange.orangeOPA40, // 3: orange
  ]; // backgroundColor Array
  var bdc = [
    theme.red.redB70, // 0: red
    theme.blue.blueB70, // 1: blue
    theme.green.greenB70, // 2: green
    theme.orange.orangeB70, // 3: oragne
  ]; // borderColor Array
  // insert function
  Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
  };
  let labelsArr = [];
  let backgroundColorArr = [];
  let borderColorArr = [];
  let chartDataArr = [];
  if (playerIDarr[0] != undefined) {
    labelsArr.push(playerIDarr[0]);
    chartDataArr.push(chartData[0]?.KPPCT);
    backgroundColorArr.push(bgc[0]);
    borderColorArr.push(bdc[0]);
  }
  if (playerIDarr[1] != undefined) {
    labelsArr.insert(0, playerIDarr[1]);
    chartDataArr.insert(0, chartData[1]?.KPPCT);
    backgroundColorArr.insert(0, bgc[1]);
    borderColorArr.insert(0, bdc[1]);
  }
  if (playerIDarr[2] != undefined) {
    labelsArr.insert(1, playerIDarr[2]);
    chartDataArr.insert(1, chartData[2]?.KPPCT);
    backgroundColorArr.insert(1, bgc[2]);
    borderColorArr.insert(1, bdc[2]);
  }
  if (playerIDarr[3] != undefined) {
    labelsArr.insert(1, playerIDarr[3]);
    chartDataArr.insert(1, chartData[3]?.KPPCT);
    backgroundColorArr.insert(1, bgc[3]);
    borderColorArr.insert(1, bdc[3]);
  }
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

const PolarLayout = styled.div`
  width: 316px;
  height: 304px;
`;

export default ChartPolar;
