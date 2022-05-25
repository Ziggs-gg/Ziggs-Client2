import react from 'react';
import { PolarArea } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartPolar = ({ chartData }) => {
  const data = {
    labels: ['player1', 'player2', 'player3', 'player4'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [
          chartData[0]?.KPPCT,
          chartData[1]?.KPPCT,
          chartData[2]?.KPPCT,
          chartData[3]?.KPPCT,
        ],
        backgroundColor: [
          'rgba(193, 53, 49, .3)',
          'rgba(49, 115, 193, .3)',
          'rgba(119, 154, 52, .3)',
          'rgba(179, 93, 24, .3)',
        ],
        borderColor: 'rgba(131, 131, 129, 0.1)',
      },
    ],
  };

  const options = {
    plugins: {
      responsive: true,
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '시즌 평균 킬 관여율',
        color: '#F3F3F3',
        align: 'start',
        padding: '15',
      },
    },
    scales: {
      r: {
        angleLines: {
          color: '#363634',
          lineWidth: 1,
        },
        grid: {
          color: '#363634',
        },
        ticks: {
          display: false,
        },
        backgroundColor: 'rgba(131, 131, 129, 0.1)',
      },
    },
  };
  return (
    <PolarLayout>
      <PolarArea data={data} options={options} />
    </PolarLayout>
  );
};

const PolarLayout = styled.div`
  width: 316px;
  height: 304px;
`;

export default ChartPolar;
