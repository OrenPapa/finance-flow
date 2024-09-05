import { type ReactElement, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {
  IncomeCategoriesContainer,
  SectionTitle,
  FilterContainer,
  FilterButton,
} from './styles';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IncomeCategory {
  category: string;
  value: number;
}

type TimeFilter = 'oneMonth' | 'trimester' | 'oneYear';

const generateMockData = (timeFilter: TimeFilter): IncomeCategory[] => {
  const categories = [
    'Salary',
    'Investments',
    'Transactions',
    'Freelance',
    // 'Gifts',
    // 'Bonuses',
    // 'Dividends',
    // 'Rent',
    // 'Miscellaneous',
    'Others',
  ];
  const data: IncomeCategory[] = categories.map((category) => ({
    category,
    value: Math.floor(Math.random() * 1000) + 50,
  }));

  if (timeFilter === 'oneMonth') {
    return data.map((item) => ({ ...item, value: item.value * 0.5 }));
  } else if (timeFilter === 'trimester') {
    return data.map((item) => ({ ...item, value: item.value * 0.75 }));
  }

  return data;
};

const generateColors = (length: number): string[] => {
  const baseColors = [
    '#88D66C', // Bright Green
    '#F9A825', // Golden Yellow
    '#60A3A8', // Deep Teal
    '#33BBFF', // Sky Blue
    '#42A5F5', // Medium Blue
    '#64D8CB', // Aqua
    '#A8E5A0', // Pastel Green
    '#B3E5FC', // Pale Blue
    '#D4E157', // Lime Yellow
    '#FFCDD2', // Light Coral Pink
  ];
  return baseColors.slice(0, length);
};

function IncomeCategories(): ReactElement {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('oneMonth');
  const mockData = generateMockData(timeFilter);

  const chartData = {
    labels: mockData.map((item) => item.category),
    datasets: [
      {
        data: mockData.map((item) => item.value),
        backgroundColor: generateColors(mockData.length),
        hoverBackgroundColor: generateColors(mockData.length).map(
          (color) => color + 'CC',
        ),
      },
    ],
  };

  return (
    <IncomeCategoriesContainer>
      <SectionTitle variant="h6" gutterBottom>
        Income Categories:
      </SectionTitle>
      <Doughnut data={chartData} />

      <FilterContainer>
        <FilterButton
          selected={timeFilter === 'oneMonth'}
          onClick={() => setTimeFilter('oneMonth')}
        >
          One Month
        </FilterButton>
        <FilterButton
          selected={timeFilter === 'trimester'}
          onClick={() => setTimeFilter('trimester')}
        >
          Trimester
        </FilterButton>
        <FilterButton
          selected={timeFilter === 'oneYear'}
          onClick={() => setTimeFilter('oneYear')}
        >
          One Year
        </FilterButton>
      </FilterContainer>
    </IncomeCategoriesContainer>
  );
}

export default IncomeCategories;
