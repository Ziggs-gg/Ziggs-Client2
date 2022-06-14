import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import theme from '../../../styles/theme.js';

const ChartObject = ({ chartData }) => {
  const labels = ['선취점', '포탑 선취', '첫 전령', '첫 드래곤', '첫 바론'];
  const backgroundColor = [theme.green.greenB70, theme.orange.orangeB70];
  let winRateDataArr = [];
  let data = {
    labels: labels,
    datasets: [],
  };
  for (let i = 0; i < chartData.length; i++) {
    data.datasets.push({
      label: chartData[i].teamABBR,
      data: [
        chartData[i].FKpct,
        chartData[i].FTpct,
        chartData[i].FHpct,
        chartData[i].FDpct,
        chartData[i].FNpct,
      ],
      backgroundColor: backgroundColor[i],
      borderRadius: 4,
      barPercentage: 0.8,
      categoryPercentage: 0.4,
    });

    // Insert Win Rate Data
    winRateDataArr.push([
      chartData[i].FKwinPCT,
      chartData[i].FTwinPCT,
      chartData[i].FHwinPCT,
      chartData[i].FDwinPCT,
      chartData[i].FNwinPCT,
    ]);
  }

  let options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: '첫 오브젝트 획득률',
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
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: ctx => {
            console.log(winRateDataArr);
            return ctx.raw
              ? [
                  ctx.dataset.label,
                  `획득률: ${ctx.raw}%`,
                  `획득 시 승률 : ${
                    winRateDataArr[ctx.datasetIndex][ctx.dataIndex]
                  }%`,
                ]
              : `${ctx.dataset.label}: -`;
          },
        },
      },
    },
    interaction: {
      mode: 'index',
    },
    scales: {
      x: {
        grid: {
          color: theme.black.black90,
          backgroundColor: theme.black.black90,
          tickColor: theme.black.black90,
        },
        ticks: {
          color: theme.white.white80,
        },
      },
      y: {
        suggestedMax: 100,
        grid: {
          color: theme.black.black90,
          backgroundColor: theme.black.black90,
          tickColor: theme.black.black90,
        },
        ticks: {
          color: theme.white.white80,
          callback: function (value, index, values) {
            if (value === 0) {
              return value;
            } else {
              return `${value}%`;
            }
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
      <Bar data={data} options={options} font={fontFamily} />
    </ChartLayout>
  );
};

const ChartLayout = styled.div`
  width: 432px;
  height: 304px;
  margin: 16px 32px 16px 32px;
`;
export default ChartObject;
