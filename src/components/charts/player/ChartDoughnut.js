import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-doughnut-innertext';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const ChartDoughnut = ({ chartData }) => {
  const data1 = {
    labels: ['Kills', 'Deaths', 'Assists'],
    datasets: [
      {
        data: [
          chartData[0]?.AVGkills,
          chartData[0]?.AVGdeaths,
          chartData[0]?.AVGassists,
        ],
        backgroundColor: [
          theme.red.redMain,
          theme.red.redB50,
          theme.red.redW80,
        ],
        weight: 10,
        hoverOffset: 4,
        cutout: '90%',
        borderColor: null,
      },
    ],
  };

  const valuetext1 = 'KDA: ' + chartData[0]?.KDA;

  const options1 = {
    responsive: false,
    centerText: {
      color: theme.white.white100,
      value: valuetext1,
      fontSizeAdjust: 0.2, // increase font size 20% based on default font size
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data2 = {
    labels: ['Kills', 'Deaths', 'Assists'],
    datasets: [
      {
        data: [
          chartData[1]?.AVGkills,
          chartData[1]?.AVGdeaths,
          chartData[1]?.AVGassists,
        ],
        backgroundColor: [
          theme.blue.blueMain,
          theme.blue.blueB50,
          theme.blue.blueW80,
        ],
        weight: 10,
        hoverOffset: 4,
        cutout: '90%',
        borderColor: null,
      },
    ],
  };

  const valuetext2 = 'KDA: ' + chartData[1]?.KDA;

  const options2 = {
    responsive: false,
    centerText: {
      color: theme.white.white100,
      value: valuetext2,
      fontSizeAdjust: 0.1, // increase font size 20% based on default font size
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const data3 = {
    labels: ['Kills', 'Deaths', 'Assists'],
    datasets: [
      {
        data: [
          chartData[2]?.AVGkills,
          chartData[2]?.AVGdeaths,
          chartData[2]?.AVGassists,
        ],
        backgroundColor: [
          theme.green.greenMain,
          theme.green.greenB50,
          theme.green.greenW80,
        ],
        weight: 10,
        hoverOffset: 4,
        cutout: '90%',
        borderColor: null,
      },
    ],
  };

  const valuetext3 = 'KDA: ' + chartData[2]?.KDA;

  const options3 = {
    responsive: false,
    centerText: {
      color: theme.white.white100,
      value: valuetext3,
      fontSizeAdjust: 0.1, // increase font size 20% based on default font size
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data4 = {
    labels: ['Kills', 'Deaths', 'Assists'],
    datasets: [
      {
        data: [
          chartData[3]?.AVGkills,
          chartData[3]?.AVGdeaths,
          chartData[3]?.AVGassists,
        ],
        backgroundColor: [
          theme.orange.orangeMain,
          theme.orange.orangeB50,
          theme.orange.orangeW80,
        ],
        weight: 10,
        hoverOffset: 4,
        cutout: '90%',
        borderColor: null,
      },
    ],
  };

  const valuetext4 = 'KDA: ' + chartData[3]?.KDA;

  const options4 = {
    responsive: false,
    centerText: {
      color: theme.white.white100,
      value: valuetext4,
      fontSizeAdjust: 0.1, // increase font size 20% based on default font size
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const noneData = {
    labels: ['Kills', 'Deaths', 'Assists'],
    datasets: [
      {
        data: [100],
        backgroundColor: [theme.black.black90],
        weight: 10,
        hoverOffset: 4,
        cutout: '90%',
        borderColor: null,
      },
    ],
  };
  const noneOption = {
    responsive: false,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <DoughnutLayout>
      {chartData[0] ? (
        <Doughnut
          width="150"
          height="150"
          type={'doughnut'}
          data={data1}
          options={options1}
        />
      ) : (
        <Doughnut
          width="150"
          height="150"
          type={'doughnut'}
          data={noneData}
          options={noneOption}
        />
      )}
      {chartData[1] ? (
        <Doughnut
          width="150"
          height="150"
          type={'doughnut'}
          data={data2}
          options={options2}
        />
      ) : (
        <Doughnut
          width="150"
          height="150"
          type={'doughnut'}
          data={noneData}
          options={noneOption}
        />
      )}
      {chartData[2] ? (
        <Doughnut
          width="150"
          height="150"
          type={'doughnut'}
          data={data3}
          options={options3}
        />
      ) : (
        <Doughnut
          width="150"
          height="150"
          type={'doughnut'}
          data={noneData}
          options={noneOption}
        />
      )}
      {chartData[3] ? (
        <Doughnut
          width="150"
          height="150"
          type={'doughnut'}
          data={data4}
          options={options4}
        />
      ) : (
        <Doughnut
          width="150"
          height="150"
          type={'doughnut'}
          data={noneData}
          options={noneOption}
        />
      )}
    </DoughnutLayout>
  );
};

const DoughnutLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 316px;
  height: 304px;
`;

export default ChartDoughnut;
