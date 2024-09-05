import { type ReactElement, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {
  OutcomeCategoriesContainer,
  SectionTitle,
  FilterContainer,
  FilterButton,
} from './styles';

ChartJS.register(ArcElement, Tooltip, Legend);

interface OutcomeCategory {
  category: string;
  value: number;
}

type TimeFilter = 'oneMonth' | 'trimester' | 'oneYear';

const generateMockData = (timeFilter: TimeFilter): OutcomeCategory[] => {
  const categories = ['Food', 'Transportation', 'Work', 'Bills', 'Others'];
  const data: OutcomeCategory[] = categories.map((category) => ({
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
    '#FFF176', // Bright Yellow
    '#FF8A65', // Salmon Orange
    '#F48FB1', // Light Pink
    '#80DEEA', // Light Cyan
    '#4DB6AC', // Turquoise
    '#4FC3F7', // Light Blue
    '#29B6F6', // Dodger Blue
    '#81C784', // Light Green
    '#AED581', // Pale Green
    '#FFD54F', // Mustard Yellow
  ];
  return baseColors.slice(0, length);
};

function OutcomeCategories(): ReactElement {
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
    <OutcomeCategoriesContainer>
      <SectionTitle variant="h6" gutterBottom>
        Outcome Categories:
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
    </OutcomeCategoriesContainer>
  );
}

export default OutcomeCategories;
