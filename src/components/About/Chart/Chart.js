import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['React.js', 'Node.js', 'Pen Testing'],
  datasets: [
    {
      label: 'Out of 10',
      data: [7, 5, 6, 10, 8, 7],
      backgroundColor: [
        'rgb(255,209,92)',
        'rgb(255,76,96)',
        'rgb(108,108,229)',
        'rgb(206, 128, 46)',
        'rgb(222, 53, 146)',
        'rgb(66, 231, 50)',
      ],
      
      borderWidth: 0,
    },
  ],
};

const options = {
  indexAxis: 'y',
  
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    // legend: {
    //   position: 'right',
    // },
    title: {
      display: true,
      text: 'My Experties',
    },
  },
};

const Chart = () => (
  <>
    <Bar data={data} options={options} />
  </>
);

export default Chart ;