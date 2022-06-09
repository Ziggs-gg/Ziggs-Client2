import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import gradient from 'chartjs-plugin-gradient';
import theme from '../../../styles/theme.js';

const dummyData = [
  {
    ptID: '22-LCK-SPR-DK',
    teamABBR: 'DK',
    minutes:
      '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55',
    AVG_GD:
      '0.00,1.43,23.45,21.14,143.12,173.67,221.86,254.98,400.64,437.74,517.36,562.02,504.93,717.57,720.90,722.67,732.71,809.55,718.45,880.79,1068.64,1089.24,1203.83,1506.60,1807.88,1577.54,2143.24,1305.98,845.57,615.06,-231.59,981.57,885.86,500.61,589.30,660.56,1158.29,489.41,-862.47,-1087.44,-1031.64,-232.78,-1957.90,1766.00,501.60,520.00,-191.00,-409.50,-334.50,2313.00,4234.00,3667.00,3588.00,3256.00,3180.00,7271.00',
    gameCount:
      '42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,43,41,42,40,35,35,37,30,29,28,30,27,21,17,15,16,11,9,10,6,5,5,6,4,4,1,1,1,1,1,1,2',
  },
  {
    ptID: '22-LCK-SPR-T1',
    teamABBR: 'T1',
    minutes:
      '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55',
    AVG_GD:
      '0.00,-0.98,35.74,90.74,144.14,168.12,269.60,366.53,618.95,695.65,750.33,1081.67,1281.14,1510.07,1711.19,1895.53,2150.95,2348.88,2588.86,3248.48,3015.95,3138.54,3469.68,2985.72,3161.64,4172.21,3278.60,3385.23,3699.09,4049.85,4698.80,2051.42,2656.42,891.70,1988.42,2312.12,3385.06,2720.14,2404.42,2576.33,3206.42,2397.67,2476.14,1707.29,2752.17,3050.00,3632.57,3485.67,-749.00,-2313.00,-4234.00,-3667.00,-3588.00,-3256.00,-3180.00,-7271.00',
    gameCount:
      '43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,44,42,41,41,39,39,42,35,35,34,34,35,26,24,20,19,17,16,14,12,12,12,12,7,7,6,6,7,3,1,1,1,1,1,1,1,2',
  },
];

// const dummyData = [
//   {
//     ptID: '22-LCK-SPR-BRO',
//     teamABBR: 'BRO',
//     minutes:
//       '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46',
//     AVG_GD:
//       '0.00,-0.68,-6.45,-49.55,-149.68,-109.75,-84.91,-23.14,-120.77,-74.34,-155.77,-196.23,-493.23,-503.82,-441.98,-586.86,-501.98,-473.07,-632.75,-1105.64,-445.07,-34.95,-32.74,9.79,-167.26,67.05,-98.95,223.95,298.64,3.70,433.78,1684.23,2667.19,2162.63,1791.87,1546.63,923.70,-541.24,-410.43,-441.83,365.88,-3116.46,-290.00,991.75,140.80,-2472.00,-6952.00',
//     gameCount:
//       '44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,45,43,42,42,42,42,42,42,43,39,40,37,35,32,30,31,27,23,21,21,18,16,13,8,8,5,6,1',
//     'COUNT(minutes)': 47,
//     'COUNT(AVG_GD)': 47,
//     'COUNT(gameCount)': 47,
//   },
//   {
//     ptID: '22-LCK-SPR-KDF',
//     teamABBR: 'KDF',
//     minutes:
//       '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48',
//     AVG_GD:
//       '0.00,-1.19,-23.50,-74.52,-119.71,-78.43,-108.74,-146.17,-236.45,-307.88,-148.40,-113.93,-143.95,-191.00,-225.57,-221.33,-57.33,70.02,185.00,184.29,221.21,319.36,134.81,389.31,476.26,133.00,692.37,762.51,707.15,964.13,-89.90,-414.48,-1063.94,-68.88,1652.00,-339.83,-1453.61,-1890.14,-238.00,-201.09,407.80,-978.73,1791.17,469.50,2165.50,2219.40,2581.00,1339.00,-2181.50',
//     gameCount:
//       '42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,43,41,41,41,39,40,33,31,26,26,23,18,14,11,11,10,11,6,6,4,5,1,1,2',
//     'COUNT(minutes)': 49,
//     'COUNT(AVG_GD)': 49,
//     'COUNT(gameCount)': 49,
//   },
// ];

const ChartLine = ({}) => {
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

  for (let i = 0; i < dummyData.length; i++) {
    let minutesArr = JSON.parse('[' + dummyData[i].minutes + ']');
    let GDArr = JSON.parse('[' + dummyData[i].AVG_GD + ']');
    gameCountArr.push(JSON.parse('[' + dummyData[i].gameCount + ']'));

    let dataArr = [];
    for (let n = 0; n < minutesArr.length; n++) {
      let dummyArr = [];
      dummyArr.push(minutesArr[n]);
      dummyArr.push(GDArr[n]);
      dataArr.push(dummyArr);
    }

    data.datasets.push({
      label: dummyData[i].teamABBR,
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
        padding: '16',
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

  return (
    <ChartLayout>
      <Line data={data} plugins={[gradient]} options={options} />
    </ChartLayout>
  );
};

const ChartLayout = styled.div`
  width: 894px;
  height: 304px;
`;

export default ChartLine;
