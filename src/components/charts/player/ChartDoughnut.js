import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-doughnut-innertext';
import styled from 'styled-components';

const ChartDoughnut = ({ chartData }) => {
  const data1 = {
    labels: ['Kills', 'Deaths', 'Assists'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [
          chartData[0]?.AVGkills,
          chartData[0]?.AVGdeaths,
          chartData[0]?.AVGassists,
        ],
        backgroundColor: [
          'rgb(193, 54, 49)',
          'rgb(105, 36, 32)',
          'rgb(203, 92, 88)',
        ],
        weight: 10,
        hoverOffset: 4,
        cutout: '90%',
      },
    ],
  };

  const valuetext1 = 'KDA: ' + chartData[0]?.KDA;

  const options1 = {
    centerText: {
      color: '#F3F3F3',
      value: valuetext1,
      fontSizeAdjust: 0.1, // increase font size 20% based on default font size
    },
    plugins: {
      responsive: true,
      legend: {
        display: false,
      },
    },
  };

  const data2 = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [
          chartData[1]?.AVGkills,
          chartData[1]?.AVGdeaths,
          chartData[1]?.AVGassists,
        ],
        backgroundColor: [
          'rgb(49, 115, 193)',
          'rgb(33, 67, 104)',
          'rgb(88, 141, 203)',
        ],
        weight: 10,
        hoverOffset: 4,
        cutout: '90%',
      },
    ],
  };

  const valuetext2 = 'KDA: ' + chartData[1]?.KDA;

  const options2 = {
    centerText: {
      color: '#F3F3F3',
      value: valuetext2,
      fontSizeAdjust: 0.1, // increase font size 20% based on default font size
    },
    plugins: {
      responsive: true,
      legend: {
        display: false,
      },
    },
  };
  const data3 = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [
          chartData[2]?.AVGkills,
          chartData[2]?.AVGdeaths,
          chartData[2]?.AVGassists,
        ],
        backgroundColor: [
          'rgb(247, 125, 28)',
          'rgb(133, 72, 22)',
          'rgb(246, 149, 71)',
        ],
        weight: 10,
        hoverOffset: 4,
        cutout: '90%',
      },
    ],
  };

  const valuetext3 = 'KDA: ' + chartData[2]?.KDA;

  const options3 = {
    centerText: {
      color: '#F3F3F3',
      value: valuetext3,
      fontSizeAdjust: 0.1, // increase font size 20% based on default font size
    },
    plugins: {
      responsive: true,
      legend: {
        display: false,
      },
    },
  };

  const data4 = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [
          chartData[3]?.AVGkills,
          chartData[3]?.AVGdeaths,
          chartData[3]?.AVGassists,
        ],
        backgroundColor: [
          'rgb(162, 212, 67)',
          'rgb(90, 115, 41)',
          'rgb(178, 218, 102)',
        ],
        weight: 10,
        hoverOffset: 4,
        cutout: '90%',
      },
    ],
  };

  const valuetext4 = 'KDA: ' + chartData[3]?.KDA;

  const options4 = {
    centerText: {
      color: '#000',
      //value: "KDA : " + props.dpg.KDABox[0].KDA,
      value: valuetext4,
      fontSizeAdjust: 0.1, // increase font size 20% based on default font size
    },
    plugins: {
      responsive: true,
      legend: {
        display: false,
      },
    },
  };

  const firstChart = {
    width: 142,
    height: 142,
    margin: '0 32px 20px 0',
  };
  const secondChart = {
    width: '142px',
    height: '142px',
    margin: '0 0 20px 0',
  };
  const thirdChart = {
    width: '142px',
    height: '142px',
    margin: '0 32px 0 0',
  };
  const fourthChart = {
    width: '142px',
    height: '142px',
  };

  return (
    <DoughnutLayout>
      {chartData[0] && (
        <Doughnut
          style={firstChart}
          type={'doughnut'}
          data={data1}
          options={options1}
        />
      )}
      {chartData[1] && (
        <Doughnut
          style={secondChart}
          type={'doughnut'}
          data={data2}
          options={options2}
        />
      )}
      {chartData[2] && (
        <Doughnut
          style={thirdChart}
          type={'doughnut'}
          data={data3}
          options={options3}
        />
      )}
      {chartData[3] && (
        <Doughnut
          style={fourthChart}
          type={'doughnut'}
          data={data4}
          options={options4}
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
