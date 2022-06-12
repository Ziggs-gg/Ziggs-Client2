import React from 'react';
import styled from 'styled-components';
import { Bar, Chart } from 'react-chartjs-2';
import theme from '../../../styles/theme.js';
import chartStyle from '../../../styles/chartStyle';

const dummyData = [
  {
    ptID: '22-LCK-SPR-HLE',
    teamABBR: 'HLE',
    role: '탑',
    DMGPCT: 25.94575212,
    DTPCT: 23.53633113,
    CS: 24.58475982,
    golds: 21.39912241,
    visionScore: 13.54773498,
  },
  {
    ptID: '22-LCK-SPR-HLE',
    teamABBR: 'HLE',
    role: '정글',
    DMGPCT: 13.74248928,
    DTPCT: 32.50808248,
    CS: 16.96018739,
    golds: 18.99185049,
    visionScore: 18.1480562,
  },
  {
    ptID: '22-LCK-SPR-HLE',
    teamABBR: 'HLE',
    role: '미드',
    DMGPCT: 24.76789844,
    DTPCT: 17.0466248,
    CS: 25.16901824,
    golds: 21.5525633,
    visionScore: 18.46037158,
  },
  {
    ptID: '22-LCK-SPR-HLE',
    teamABBR: 'HLE',
    role: '원딜',
    DMGPCT: 26.55712956,
    DTPCT: 12.97242399,
    CS: 30.4523837,
    golds: 24.94895893,
    visionScore: 17.27863769,
  },
  {
    ptID: '22-LCK-SPR-HLE',
    teamABBR: 'HLE',
    role: '서폿',
    DMGPCT: 8.98673054,
    DTPCT: 13.93653762,
    CS: 2.83365336,
    golds: 13.10750484,
    visionScore: 32.56520968,
  },
  {
    ptID: '21-LCK-SPR-GEN',
    teamABBR: 'GEN',
    role: '탑',
    DMGPCT: 22.88831781,
    DTPCT: 24.87122758,
    CS: 21.8331977,
    golds: 19.920956,
    visionScore: 12.46078453,
  },
  {
    ptID: '21-LCK-SPR-GEN',
    teamABBR: 'GEN',
    role: '정글',
    DMGPCT: 19.41231234,
    DTPCT: 32.03622123,
    CS: 20.75652558,
    golds: 20.35277395,
    visionScore: 20.7947889,
  },
  {
    ptID: '21-LCK-SPR-GEN',
    teamABBR: 'GEN',
    role: '미드',
    DMGPCT: 25.49317822,
    DTPCT: 12.5410327,
    CS: 26.4518764,
    golds: 22.53010689,
    visionScore: 16.35427692,
  },
  {
    ptID: '21-LCK-SPR-GEN',
    teamABBR: 'GEN',
    role: '원딜',
    DMGPCT: 22.37898936,
    DTPCT: 13.92271271,
    CS: 26.08686824,
    golds: 23.66315527,
    visionScore: 19.38701789,
  },
  {
    ptID: '21-LCK-SPR-GEN',
    teamABBR: 'GEN',
    role: '서폿',
    DMGPCT: 9.82720227,
    DTPCT: 16.62880576,
    CS: 4.87153351,
    golds: 13.53300796,
    visionScore: 31.00313981,
  },
];

const Chartimportance = ({}) => {
  const chartColor = [
    // team1
    theme.green.greenB70, // 탑
    theme.green.greenB50, // 정글
    theme.green.greenW80, // 미드
    theme.green.greenW60, // 원딜
    theme.green.greenMain, // 서폿
    // team2
    theme.orange.orangeB70, // 탑
    theme.orange.orangeB50, // 정글
    theme.orange.orangeW80, // 미드
    theme.orange.orangeW60, // 원딜
    theme.orange.orangeMain, // 서폿
  ];
  const xLabels = [
    '가한 피해량 비중',
    '받은 피해량 비중',
    'CS 비중',
    '획득 골드 비중',
    '시야 점수 비중',
  ];
  let data = {
    labels: xLabels,
    datasets: [],
  };
  // data.datasets에 데이터 삽입
  for (let i = 0; i < dummyData.length; i++) {
    data.datasets.push({
      label: `${dummyData[i].teamABBR} ${dummyData[i].role}`,
      data: [
        dummyData[i].DMGPCT,
        dummyData[i].DTPCT,
        dummyData[i].CS,
        dummyData[i].golds,
        dummyData[i].visionScore,
      ],
      backgroundColor: chartColor[i],
      stack: dummyData[i].teamABBR,
    });
  }

  const options = {
    borderRadius: 4,
    barPercentage: 0.8,
    categoryPercentage: 0.4,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: '포지션별 평균 팀 내 비중 데이터',
        color: theme.white.white100,
        align: 'start',
        padding: '0',
        font: {
          family: 'Noto Sans KR',
          size: 14,
          weight: '500',
        },
      },
      tooltip: {
        callbacks: {
          label: ctx => {
            // 소수점 2번째 자리에서 반올림하는 함수
            function roundToTwo(num) {
              return +(Math.round(num + 'e+2') + 'e-2');
            }
            return `${ctx.dataset.label}: ${roundToTwo(ctx.raw)}%`;
          },
        },
      },
      legend: {
        // onClick: ctx => {
        //   console.log(ctx);
        // },
        fullSize: true,
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          color: theme.white.white100,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: theme.white.white80,
        },
      },
      y: {
        grid: {
          color: theme.black.black90,
          backgroundColor: theme.black.black90,
          tickColor: theme.black.black90,
        },
        ticks: {
          color: theme.white.white80,
        },
        max: 100,
        beginAtZero: true,
        stacked: true,
      },
    },
  };
  return (
    <ChartLayout>
      <Bar data={data} options={options} font={chartStyle} />
    </ChartLayout>
  );
};

const ChartLayout = styled.div`
  width: 664px;
  height: 304px;
`;

export default Chartimportance;
