import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ChartContainer, LineChart, SectionTitle } from './styles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const BalanceChart: React.FC = () => {
  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  }).reverse();

  const balanceData = [
    1500, 900, 1600, 2300, 2900, 1900, 1400, 2150, 2600, 3400, 3150, 3500,
  ];

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Balance',
        data: balanceData,
        fill: false,
        borderColor: '#5fa6ec',
        backgroundColor: '#1976D2',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Balance ($)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
    },
  };

  return (
    <ChartContainer>
      <SectionTitle>Balance history:</SectionTitle>
      <LineChart data={data} options={options} style={{ width: '100%' }} />
    </ChartContainer>
  );
};

export default BalanceChart;
