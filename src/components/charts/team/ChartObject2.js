import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import theme from '../../../styles/theme.js';

const ChartObject2 = ({ chartData }) => {
  const yLabels = ['선취점', '포탑 선취', '첫 전령', '첫 드래곤'];
  const bgc = [theme.green.greenB70, theme.orange.orangeB70];

  let data = {
    labels: yLabels,
    datasets: [],
  };

  for (let i = 0; i < chartData?.length; i++) {
    data.datasets.push({
      label: chartData[i].teamABBR,
      data: [
        chartData[i]?.AVG_FKsec,
        chartData[i]?.AVG_FTsec,
        chartData[i]?.AVG_FHsec,
        chartData[i]?.AVG_FDsec,
      ],
      backgroundColor: bgc[i],
    });
  }

  // lollipop chart plugin
  const lollipopChart = {
    id: 'lollipopChart',
    afterDatasetsDraw(chart, args, options) {
      const { ctx } = chart;

      ctx.save();
      for (let t = 0; chart.getDatasetMeta(t).type != null; t++) {
        for (let i = 0; i < chart.getDatasetMeta(t).data.length; i++) {
          const x = chart.getDatasetMeta(t).data[i].x - 3;
          const y = chart.getDatasetMeta(t).data[i].y;

          let backgroundColor;
          if (chart.isDatasetVisible(t) === true) {
            backgroundColor = chart.getDatasetMeta(t)._dataset.backgroundColor;
          } else {
            backgroundColor = 'transparent';
          }
          circle(x, y, backgroundColor);
        }
      }

      function circle(xPosition, yPosition, color) {
        const angle = Math.PI / 180;
        ctx.beginPath();
        ctx.fillStyle = color;
        // ctx.arc(xPosition, yPosition, radius, start angle, end angle, false)
        ctx.arc(xPosition, yPosition, 5, angle * 0, angle * 360, false);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }
    },
  };

  const options = {
    barPercentage: chartData.length === 1 ? 0.15 : 0.3,
    categoryPercentage: 0.5,
    interaction: {
      mode: 'index',
      axis: 'y',
    },
    maintainAspectRatio: false,
    plugins: {
      // tooltip: {
      //   yAlign: 'bottom',
      // },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '첫 오브젝트 평균 획득 시간',
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
        intersect: false,
        callbacks: {
          label: ctx => {
            let min = Math.trunc(ctx.raw);
            let sec = Math.round((ctx.raw % 1) * 60);
            const timeType = t => {
              if (t.toString().length < 2) {
                t = '0' + t.toString();
                return t;
              } else {
                return t;
              }
            };
            return `${ctx.dataset.label}: ${timeType(min)}:${timeType(sec)}`;
          },
        },
      },
    },
    indexAxis: 'y',
    scales: {
      x: {
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
              return `${value}분`;
            }
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: theme.black.black90,
          backgroundColor: theme.black.black90,
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
  return (
    <ChartLayout>
      <Bar
        data={data}
        plugins={[lollipopChart]}
        options={options}
        font={fontFamily}
      />
    </ChartLayout>
  );
};

const ChartLayout = styled.div`
  width: 432px;
  height: 304px;
  margin-top: 16px;
`;
export default ChartObject2;
