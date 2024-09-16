export const options = [
  { value: 'oneMonth', label: 'One Month' },
  { value: 'trimester', label: 'Last Trimester' },
  { value: 'oneYear', label: 'One Year' },
];

export const mockOutcomeData = {
  oneMonth: [
    { category: 'Food', value: 400 },
    { category: 'Transportation', value: 50 },
    { category: 'Bills', value: 200 },
    { category: 'Holidays', value: 100 },
    { category: 'Others', value: 50 },
  ],
  trimester: [
    { category: 'Food', value: 1400 },
    { category: 'Transportation', value: 120 },
    { category: 'Bills', value: 650 },
    { category: 'Holidays', value: 700 },
    { category: 'Others', value: 250 },
  ],
  oneYear: [
    { category: 'Food', value: 5200 },
    { category: 'Transportation', value: 300 },
    { category: 'Bills', value: 2200 },
    { category: 'Holidays', value: 2200 },
    { category: 'Others', value: 400 },
  ],
};

export const chartColors = [
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
