import React from 'react';
import { Bubble, Chart } from 'react-chartjs-2';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const ChartBubble = ({ chartData }) => {
  const dataBackground = [
    theme.red.redOPA40,
    theme.blue.blueOPA40,
    theme.green.greenOPA40,
    theme.orange.orangeOPA40,
  ];
  const dataBorder = [
    theme.red.redB70,
    theme.blue.blueB70,
    theme.green.greenB70,
    theme.orange.orangeB70,
  ];
  let data = {
    datasets: [],
  };
  let matchesArr = [];
  for (let i = 0; i < chartData.length; i++) {
    let playerName = chartData[i]?.phRole.split('-');
    matchesArr.push(chartData[i]?.matches.split(','));
    let DPM = JSON.parse('[' + chartData[i].DPM + ']');
    let GPM = JSON.parse('[' + chartData[i].GPM + ']');
    let DPG = JSON.parse('[' + chartData[i].DPG + ']');
    let dataArr = [];
    for (let el = 0; el < DPM.length; el++) {
      dataArr.push({ x: GPM[el], y: DPM[el], r: DPG[el] * 8 }); // radius scale
    }
    data.datasets.push({
      label: playerName[3] + ' ' + playerName[4],
      data: dataArr,
      backgroundColor: dataBackground[i],
      borderColor: dataBorder[i],
    });
  }
  const options = {
    interaction: {
      mode: 'point',
    },
    tooltips: {
      mode: ['x', 'y'],
      position: 'left',
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: theme.white.white80,
        },
        grid: {
          color: theme.black.black90,
          borderColor: theme.black.black90,
          tickColor: theme.black.black90,
        },
        title: {
          display: 'true',
          text: '분당 획득 골드',
          size: '12',
          color: theme.white.white50,
        },
      },
      y: {
        ticks: {
          color: theme.white.white80,
        },
        grid: {
          color: theme.black.black90,
          borderColor: theme.black.black90,
          tickColor: theme.black.black90,
        },
        title: {
          display: 'true',
          text: '분당 가한 피해량',
          size: '12',
          color: theme.white.white50,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '매치별 골드당 가한 피해량',
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
          label: function (context) {
            let value = [context.dataset.label];
            // let value2 = context.dataset.label || ' ';

            // 소수점 2번째 자리에서 반올림하는 함수
            function roundToTwo(num) {
              return +(Math.round(num + 'e+2') + 'e-2');
            }
            let value2 =
              `${matchesArr[context.datasetIndex][context.dataIndex]}` +
              `  GPM: ${context.parsed.x}` +
              `  DPM: ${context.parsed.y}` +
              `  DPG: ${roundToTwo(context.parsed._custom / 8)}`;
            value.push(value2);
            return value;
          },
        },
      },
    },
  };
  const fontFamily = {
    weight: 400,
  };
  return (
    <BubbleLayout>
      <Bubble type="bubble" data={data} options={options} font={fontFamily} />
    </BubbleLayout>
  );
};

const BubbleLayout = styled.div`
  width: 432px;
  height: 304px;
`;

export default ChartBubble;
