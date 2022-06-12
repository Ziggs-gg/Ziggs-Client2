import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import gradient from 'chartjs-plugin-gradient';
import theme from '../../../styles/theme.js';

const ChartLine = ({ chartData }) => {
  const gradientBGC = [
    [
      'rgba(162, 212, 67, 0.05)', // team1 : green
      'rgba(247, 125, 28, 0.05)', // team2 : orange
    ],
    [
      'rgba(162, 212, 67, 0.2)', // team1 : green
      'rgba(247, 125, 28, 0.2)', // team2 : orange
    ],
  ];
  const mainBGC = [theme.green.greenB70, theme.orange.orangeB70];
  let data = {
    datasets: [],
  };

  let ticksMinMax = [];
  let gameCountArr = [];

  for (let i = 0; i < chartData.length; i++) {
    let minutesArr = JSON.parse('[' + chartData[i].minutes + ']');
    let GDArr = JSON.parse('[' + chartData[i].AVG_GD + ']');
    gameCountArr.push(JSON.parse('[' + chartData[i].gameCount + ']'));

    let dataArr = [];
    for (let n = 0; n < minutesArr.length; n++) {
      let dummyArr = [];
      dummyArr.push(minutesArr[n]);
      dummyArr.push(GDArr[n]);
      dataArr.push(dummyArr);
    }

    data.datasets.push({
      label: chartData[i].teamABBR,
      data: dataArr,
      gradient: {
        backgroundColor: {
          axis: 'y',
          colors: {
            0: gradientBGC[0][i],
          },
        },
      },
      borderColor: mainBGC[i],
      pointBackgroundColor: mainBGC[i],
      pointBorderColor: mainBGC[i],
    });
    // 그라디언트 시작 위치 값
    let negativePosition = Math.min.apply(null, GDArr) * 0.45;
    let positivePosition = Math.max.apply(null, GDArr) * 0.45;
    data.datasets[i].gradient.backgroundColor.colors[negativePosition] =
      gradientBGC[1][i];
    data.datasets[i].gradient.backgroundColor.colors[positivePosition] =
      gradientBGC[1][i];

    ticksMinMax.push(Math.min.apply(null, GDArr));
    ticksMinMax.push(Math.max.apply(null, GDArr));
  }

  let maxTick = Math.max.apply(
    null,
    ticksMinMax.map(x => Math.abs(x))
  );

  const options = {
    fill: true,
    borderWidth: 2,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
    },
    scales: {
      x: {
        type: 'linear',
        position: 'center',
        grid: {
          display: false,
        },
        ticks: {
          z: 3,
          stepSize: 1,
          color: theme.white.white80,
          callback: function (value, index, values) {
            if (value === 0) {
              return value;
            } else {
              return `${value}분`;
            }
          },
        },
      },
      y: {
        suggestedMax: Math.ceil(maxTick / 1000) * 1000,
        suggestedMin: Math.floor((maxTick * -1) / 1000) * 1000,
        grid: {
          color: theme.black.black90,
          backgroundColor: theme.black.black90,
          tickColor: theme.black.black90,
        },
        ticks: {
          color: theme.white.white80,
          callback: function (value, index, values) {
            if (Math.abs(value) < 1000) {
              return value;
            } else {
              return `${value / 1000}K`;
            }
          },
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
        yAlign: 'top',
        intersect: false,
        mode: 'x',
        callbacks: {
          title: ctx => {
            return `${ctx[0].label}분`;
          },
          label: ctx => {
            return [
              ctx.dataset.label,
              `게임 수: ${gameCountArr[ctx.datasetIndex][ctx.dataIndex]}`,
              `골드 격차:  ${ctx.formattedValue}`,
            ];
          },
        },
      },
    },
  };
  const fontFamily = {
    weight: 400,
  };
  return (
    <ChartLayout>
      <Line
        data={data}
        plugins={[gradient]}
        options={options}
        font={fontFamily}
      />
    </ChartLayout>
  );
};

const ChartLayout = styled.div`
  width: 894px;
  height: 304px;
`;

export default ChartLine;
