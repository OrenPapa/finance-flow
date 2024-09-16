export const options = [
  { value: 'oneMonth', label: 'One Month' },
  { value: 'trimester', label: 'Last Trimester' },
  { value: 'oneYear', label: 'One Year' },
];

export const mockIncomeData = {
  oneMonth: [
    { category: 'Salary', value: 500 },
    { category: 'Investments', value: 300 },
    { category: 'Freelance', value: 200 },
    { category: 'Others', value: 150 },
  ],
  trimester: [
    { category: 'Salary', value: 1700 },
    { category: 'Investments', value: 2100 },
    { category: 'Freelance', value: 600 },
    { category: 'Others', value: 250 },
  ],
  oneYear: [
    { category: 'Salary', value: 5200 },
    { category: 'Investments', value: 4600 },
    { category: 'Freelance', value: 1900 },
    { category: 'Others', value: 1000 },
  ],
};

export const chartColors = [
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
