import React from 'react';
import { Chart } from 'react-chartjs-2';
import { BoxPlotChart } from '@sgratzl/chartjs-chart-boxplot';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const ChartBoxplot = ({ chartData }) => {
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
  const itemBackgroundColor = [
    theme.red.redOPA20,
    theme.blue.blueOPA20,
    theme.green.greenOPA20,
    theme.orange.orangeOPA20,
  ];
  let boxplotData = {
    labels: ['분당 가한 피해량', '분당 받은 피해량', '분당 획득 골드'],
    datasets: [],
  };
  for (let i = 0; i < chartData.length; i++) {
    let playerName = chartData[i]?.phRole.split('-');
    let DPM = JSON.parse('[' + chartData[i].DPM + ']');
    let DTPM = JSON.parse('[' + chartData[i].DTPM + ']');
    let GPM = JSON.parse('[' + chartData[i].GPM + ']');
    boxplotData.datasets.push({
      label: playerName[3] + ' ' + playerName[4],
      data: [DPM, DTPM, GPM],
      backgroundColor: dataBackground[i],
      borderColor: dataBorder[i],
      borderWidth: 2,
      meanBorderColor: theme.white.white50,
      meanBackgroundColor: dataBackground[i],
      itemRadius: 2,
      itemBackgroundColor: itemBackgroundColor[i],
      barPercentage: 0.7,
      categoryPercentage: 0.4,
    });
  }
  const boxplotOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: context => {
            const values = [
              context.dataset.label,
              `경기수: ${context.parsed.items?.length}`,
              `최대값: ${context.parsed.whiskerMax}`,
              `3사분위수: ${context.parsed.q3}`,
              `중앙값: ${context.parsed.median}`,
              `1사분위수: ${context.parsed.q1}`,
              `최소값: ${context.parsed.whiskerMin}`,
            ];
            return values;
          },
        },
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '주요 분당 데이터',
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
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: theme.black.black90,
          borderColor: theme.black.black90,
          tickColor: theme.black.black90,
        },
        ticks: {
          color: theme.white.white80,
        },
      },
      y: {
        grid: {
          color: theme.black.black90,
          borderColor: theme.black.black90,
          tickColor: theme.black.black90,
        },
        ticks: {
          color: theme.white.white80,
        },
      },
    },
  };
  const fontFamily = {
    weight: 400,
  };
  try {
    throw new Error();
  } catch {
    return (
      <BoxplotLayout>
        <BoxPlotChart
          type="boxplot"
          data={boxplotData}
          options={boxplotOptions}
        />
      </BoxplotLayout>
    );
  } finally {
    return (
      <BoxplotLayout>
        <Chart
          type="boxplot"
          data={boxplotData}
          options={boxplotOptions}
          font={fontFamily}
        />
      </BoxplotLayout>
    );
  }
};

const BoxplotLayout = styled.div`
  width: 548px;
  height: 304px;
  margin: 0 32px 0 32px;
`;
export default ChartBoxplot;
