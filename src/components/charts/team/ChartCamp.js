import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import theme from '../../../styles/theme.js';
import { borderRadius } from '@mui/system';

// 테스트용 더미데이터 JSON.
const dummyData = [
  {
    ptID: '21-LCK-SPR-DK',
    teamABBR: 'DK',
    yAxis: '15,20,25,end',
    gameCount_Blue: '12,14,12,21',
    winCount_Blue: '10,12,10,16',
    WR_Blue: '83.3,85.7,83.3,76.2',
    gameCount_Red: '14,13,15,22',
    winCount_Red: '14,13,14,17',
    WR_Red: '100.0,100.0,93.3,77.3',
  },
  {
    ptID: '22-LCK-SPR-T1',
    teamABBR: 'T1',
    yAxis: '15,20,25,end',
    gameCount_Blue: '15,16,12,17',
    winCount_Blue: '13,14,11,15',
    WR_Blue: '86.7,87.5,91.7,88.2',
    gameCount_Red: '20,19,17,26',
    winCount_Red: '18,15,14,21',
    WR_Red: '90.0,78.9,82.4,80.8',
  },
];

const ChartCamp = ({}) => {
  const yLabels = ['GL@15', 'GL@20', 'GL@25', '전체'];
  let data = {
    labels: yLabels,
    datasets: [],
  };
  // data.datasets에 데이터 삽입
  for (let i = 0; i < dummyData.length; i++) {
    // 블루 진영 값 음수로 변환 작업
    const dataNegative = n => n * -1;
    let blueData = JSON.parse('[' + dummyData[i].WR_Blue + ']');
    // 블루진영 데이터 푸쉬
    data.datasets.push({
      label: `${dummyData[i].teamABBR} 블루`,
      data: blueData.map(dataNegative),
      backgroundColor: theme.blue.blueB70,
      borderWidth: 1,
      stack: dummyData[i].teamABBR,
      borderRadius: 4,
      datalabels: {
        display: true,
        anchor: 'end',
        color: theme.white.white100,
        formatter: function (value, ctx) {
          return dummyData[i].teamABBR;
        },
      },
    });
    // 레드진영 데이터 푸쉬
    data.datasets.push({
      label: `${dummyData[i].teamABBR} 레드`,
      data: JSON.parse('[' + dummyData[i].WR_Red + ']'),
      backgroundColor: theme.red.redB70,
      borderWidth: 1,
      stack: dummyData[i].teamABBR,
      borderRadius: 4,
    });
  }
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '진영별 승률',
        color: theme.white.white100,
        align: 'start',
        padding: '16',
      },
      // 플러그인 해당 차트 전역에 적용시키기
      datalabels: {
        display: false,
      },
      // 호버링시 툴팁 커스터마이징
      tooltip: {
        // 툴팁 타이틀 한글화
        callbacks: {
          title: ctx => {
            let title = '';
            if (ctx[0].label === 'GL@15') {
              title = '15분 골드 리드시';
            } else if (ctx[0].label === 'GL@20') {
              title = '20분 골드 리드시';
            } else if (ctx[0].label === 'GL@25') {
              title = '25분 골드 리드시';
            } else {
              title = ctx[0].label;
            }
            return title;
          },
          label: ctx => {
            return `${ctx.dataset.label}: ${Math.abs(ctx.raw)}`;
          },
        },
      },
    },
    interaction: {
      mode: 'y',
    },
    indexAxis: 'y',
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: theme.black.black90,
          backgroundColor: theme.black.black90,
          tickColor: theme.black.black90,
        },
        ticks: {
          color: theme.white.white80,
          // 좌측 평면 xAxis 음수 -> 양수로 변경
          callback: function (value, index, values) {
            return Math.abs(value);
          },
          // x 값 범위 -100~100으로 설정
          min: -100,
          max: 100,
          stepSize: 20,
        },
      },
      // 진영 축 표시
      xAxis: {
        labels: ['', '블루 진영', '', '', '', '', '레드 진영', ''],
        type: 'category',
        stacked: true,
        position: 'top',
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: theme.white.white50,
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
        beginAtZero: true,
        stacked: true,
      },
    },
  };
  return (
    <ChartLayout>
      <Bar data={data} plugins={[ChartDataLabels]} options={options} />
    </ChartLayout>
  );
};

const ChartLayout = styled.div`
  width: 432px;
  height: 304px;
  margin-right: 34px;
`;

export default ChartCamp;
