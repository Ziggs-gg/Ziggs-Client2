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

  // const valuetext1 = 'KDA: ' + chartData[0]?.KDA;

  const options1 = {
    responsive: false,
    // centerText: {
    //   color: theme.white.white100,
    //   value: valuetext1,
    //   fontSizeAdjust: 0.2, // increase font size 20% based on default font size
    // },
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

  // const valuetext2 = 'KDA: ' + chartData[1]?.KDA;

  const options2 = {
    responsive: false,
    // centerText: {
    //   color: theme.white.white100,
    //   value: valuetext2,
    //   fontSizeAdjust: 0.01, // increase font size 20% based on default font size
    // },
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

  // const valuetext3 = 'KDA: ' + chartData[2]?.KDA;

  const options3 = {
    responsive: false,
    // centerText: {
    //   color: theme.white.white100,
    //   // value: valuetext3,
    //   fontSizeAdjust: 0.1, // increase font size 20% based on default font size
    // },
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

  // const valuetext4 = 'KDA: ' + chartData[3]?.KDA;

  const options4 = {
    responsive: false,
    // centerText: {
    //   color: theme.white.white100,
    //   value: valuetext4,
    //   fontSizeAdjust: 0.1, // increase font size 20% based on default font size
    // },
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
  let playerName = [];
  for (let i = 0; i < chartData.length; i++) {
    let name = chartData[i]?.phRole.split('-');
    playerName.push(name[3] + ' ' + name[4]);
  }

  return (
    <DoughnutLayout>
      <div>
        {chartData[0] ? (
          <Doughnut
            width="150"
            height="150"
            type={'doughnut'}
            data={data1}
            options={options1}
            style={{ position: 'absolute' }}
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
        {playerName[0] && (
          <FirstInnerText style={{ zIndex: '0' }}>
            <PlayerName>{playerName[0]}</PlayerName>
            <TextContain>
              <PlayerKDA>{chartData[0].KDA}</PlayerKDA>
              <GameText>/경기</GameText>
            </TextContain>
          </FirstInnerText>
        )}
      </div>
      <div>
        {chartData[1] ? (
          <Doughnut
            width="150"
            height="150"
            type={'doughnut'}
            data={data2}
            options={options2}
            style={{ position: 'absolute' }}
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
        {playerName[1] && (
          <SecondInnerText>
            <PlayerName>{playerName[1]}</PlayerName>
            <TextContain>
              <PlayerKDA>{chartData[1].KDA}</PlayerKDA>
              <GameText>/경기</GameText>
            </TextContain>
          </SecondInnerText>
        )}
      </div>
      <div>
        {chartData[2] ? (
          <Doughnut
            width="150"
            height="150"
            type={'doughnut'}
            data={data3}
            options={options3}
            style={{ position: 'absolute' }}
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
        {playerName[2] && (
          <ThirdInnerText>
            <PlayerName>{playerName[2]}</PlayerName>
            <TextContain>
              <PlayerKDA>{chartData[2].KDA}</PlayerKDA>
              <GameText>/경기</GameText>
            </TextContain>
          </ThirdInnerText>
        )}
      </div>
      <div>
        {chartData[3] ? (
          <Doughnut
            width="150"
            height="150"
            type={'doughnut'}
            data={data4}
            options={options4}
            style={{ position: 'absolute' }}
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
        {playerName[3] && (
          <FourthInnerText>
            <PlayerName>PLAYER {playerName[3]}</PlayerName>
            <TextContain>
              <PlayerKDA>{chartData[3].KDA}</PlayerKDA>
              <GameText>/경기</GameText>
            </TextContain>
          </FourthInnerText>
        )}
      </div>
    </DoughnutLayout>
  );
};

const DoughnutLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 316px;
  height: 304px;
`;

const FirstInnerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 150px;
  height: 150px;
  text-align: center;
`;

const SecondInnerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 150px;
  height: 150px;
  text-align: center;
  z-index: 1;
`;

const ThirdInnerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 150px;
  height: 150px;
  text-align: center;
  z-index: 1;
`;

const FourthInnerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 150px;
  height: 150px;
  text-align: center;
  z-index: 1;
`;

const PlayerName = styled.p`
  color: #f3f3f3;
  font-weight: 500;
  font-size: 14px;
`;

const TextContain = styled.div`
  display: flex;
  margin-top: 4px;
`;

const PlayerKDA = styled.p`
  color: #f3f3f3;
  font-weight: 500;
  font-size: 12px;
`;

const GameText = styled.p`
  color: #838382;
  font-weight: 500;
  font-size: 10px;
`;
export default ChartDoughnut;
