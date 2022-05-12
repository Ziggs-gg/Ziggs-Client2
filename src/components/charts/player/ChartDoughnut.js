import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-doughnut-innertext';
import styled from 'styled-components';

const ChartDoughnut = () => {
  const data1 = {
    labels: ['Kills', 'Assists', 'Deaths'],
    datasets: [
      {
        label: 'My First Dataset',
        //data: [props.dpg.KDABox[0].AVGkills, props.dpg.KDABox[0].AVGdeaths, props.dpg.KDABox[0].AVGassists],
        data: [3.07, 4.53, 1.88],
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

  const valuetext = 'PLAYER 4.04';

  const options1 = {
    centerText: {
      color: '#F3F3F3',
      //value: "KDA : " + props.dpg.KDABox[0].KDA,
      value: valuetext,
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
        //data: [props.dpg.KDABox[1].AVGkills, props.dpg.KDABox[1].AVGdeaths, props.dpg.KDABox[1].AVGassists],
        data: [3.07, 4.53, 1.88],
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

  const options2 = {
    centerText: {
      color: '#F3F3F3',
      //value: "KDA : " + props.dpg.KDABox[1].KDA,
      value: 'KDA : ' + 4.04,
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
        //data: [props.dpg.KDABox[2].AVGkills, props.dpg.KDABox[2].AVGdeaths, props.dpg.KDABox[2].AVGassists],
        data: [3.07, 4.53, 1.88],
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

  const options3 = {
    centerText: {
      color: '#000',
      //value: "KDA : " + props.dpg.KDABox[2].KDA,
      value: 'KDA : ' + 4.04,
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
        //data: [props.dpg.KDABox[0].AVGkills, props.dpg.KDABox[0].AVGassists, props.dpg.KDABox[0].AVGdeaths],
        data: [3.07, 4.53, 1.88],
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

  const options4 = {
    centerText: {
      color: '#000',
      //value: "KDA : " + props.dpg.KDABox[0].KDA,
      value: 'KDA : ' + 4.04,
      fontSizeAdjust: 0.1, // increase font size 20% based on default font size
    },
    plugins: {
      responsive: true,
      legend: {
        display: false,
      },
    },
  };

  return (
    <DoughnutLayout>
      <Doughnut
        style={firstChart}
        type={'doughnut'}
        data={data1}
        options={options1}
      />
      {/* <Doughnut
        style={secondChart}
        type={'doughnut'}
        data={data2}
        options={options2}
      />
      <Doughnut
        style={thirdChart}
        type={'doughnut'}
        data={data3}
        options={options3}
      />
      <Doughnut
        style={fourthChart}
        type={'doughnut'}
        data={data4}
        options={options4}
      /> */}
    </DoughnutLayout>
  );
};

const firstChart = {
  width: '142px',
  height: '142px',
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

const DoughnutLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 316px;
  height: 304px;
`;

export default ChartDoughnut;
