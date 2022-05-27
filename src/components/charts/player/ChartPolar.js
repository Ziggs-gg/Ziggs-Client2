import react from 'react';
import { PolarArea } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartPolar = ({ chartData }) => {
  // to Get PlayerID from phRole
  var playerIDarr = [];
  for (let i = 0; i < chartData.length; i++) {
    let playerID = chartData[i]?.phRole.split('-');
    playerIDarr.push(playerID[3] + ' ' + playerID[4]);
  }
  //
  var bgc = [
    'rgba(193, 53, 49, .3)', // 0: red
    'rgba(49, 115, 193, .3)', // 1: blue
    'rgba(119, 154, 52, .3)', // 2: green
    'rgba(179, 93, 24, .3)', // 3: orange
  ]; // backgroundColor Array
  var bdc = [
    'rgba(141, 44, 39, 1)', // 0: red
    'rgba(40, 87, 140, 1)', // 1: blue
    'rgba(119, 154, 52, 1)', // 2: green
    'rgba(179, 94, 25, 1)', // 3: oragne
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
        label: 'My First Dataset',
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
        color: '#F3F3F3',
        align: 'start',
        padding: '15',
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
          z: 3,
          color: 'rgba(198, 198, 197, 1)',
          backdropColor: 'rgba(0, 0, 0, 0)',
          // major: true,
        },
        backgroundColor: 'rgba(131, 131, 129, 0.1)',
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };
  return (
    <PolarLayout>
      <PolarArea data={data} options={options} />
    </PolarLayout>
  );
};

const PolarLayout = styled.div`
  width: 316px;
  height: 304px;
`;

export default ChartPolar;
