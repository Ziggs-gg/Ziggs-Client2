import React from "react";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
  datasets: [
    {
      label: "player1",
      data: [33, 53, 32, 24, 44, 65, 53, 64, 45, 51],
      fill: false,
      backgroundColor: "#8D2B27",
      borderColor: "#8D2B27",
      pointStyle: 'circle',
      pointRadius: 3,
      pointHoverRadius: 5
    },
    {
      label: "player2",
      data: [33, 53, 32, 24, 44, 65, 86, 57, 48, 39],
      fill: false,
      backgroundColor: "#B35D18",
      borderColor: "#B35D18",
      pointStyle: 'circle',
      pointRadius: 3,
      pointHoverRadius: 5
    },
    {
      label: "player3",
      data: [33, 53, 32, 24, 44, 65, 20, 59, 86, 23],
      fill: false,
      backgroundColor: "#28568C",
      borderColor: "#28568C",
      pointStyle: 'circle',
      pointRadius: 3,
      pointHoverRadius: 5
    },
    {
      label: "player4",
      data: [33, 25, 35, 51, 54, 76, 68, 75, 59, 88],
      fill: false,
      backgroundColor: "#779A34",
      borderColor: "#779A34",
      pointStyle: 'circle',
      pointRadius: 3,
      pointHoverRadius: 5
    }
  ]
};

const options = {
  scales: {
    x: {
      grid: {
        color: '#363634',
        borderColor: '#363634',
        tickColor: '#363634'
      }
    },
    y: {
      grid: {
        color: '#363634',
        borderColor: '#363634',
        tickColor: '#363634'
      }
    }
  },
  plugins : {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: '주차별 분 당 가한 피해량',
      color: '#F3F3F3',
      align: 'start',
      padding: '15'
    }
  }
}

const LineChart = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;