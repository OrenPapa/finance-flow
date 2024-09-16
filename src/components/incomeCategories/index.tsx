import { type ReactElement, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {
  IncomeCategoriesContainer,
  SectionTitle,
  ChartContainer,
  StyledFormControl,
  Select,
  SelectItem,
  SelectLabel,
} from './styles';
import { chartColors, mockIncomeData, options } from './constant';
import { type SelectChangeEvent } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

type TimeFilter = 'oneMonth' | 'trimester' | 'oneYear';

const generateColors = (length: number): string[] => {
  return chartColors.slice(0, length);
};

function IncomeCategories(): ReactElement {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('oneMonth');
  const mockData = mockIncomeData[timeFilter];

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

  const handleTimeFilterChange = (event: SelectChangeEvent<unknown>) => {
    const selectedValue = event.target.value as string;
    setTimeFilter(selectedValue as TimeFilter);
  };

  return (
    <IncomeCategoriesContainer>
      <SectionTitle variant="body1" gutterBottom>
        Income Categories:
      </SectionTitle>
      <ChartContainer>
        <Doughnut data={chartData} />
      </ChartContainer>
      <StyledFormControl size="small">
        <SelectLabel>Filter incomes</SelectLabel>
        <Select
          labelId="custom-select-label"
          id="custom-select"
          value={timeFilter}
          onChange={handleTimeFilterChange}
          label="Select Option"
        >
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>
      </StyledFormControl>
    </IncomeCategoriesContainer>
  );
}

export default IncomeCategories;
