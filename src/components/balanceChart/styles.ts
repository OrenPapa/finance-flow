import { Box, Typography, styled } from '@mui/material';
import { Line } from 'react-chartjs-2';

export const ChartContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const SectionTitle = styled(Typography)(({ theme }) => ({
  userSelect: 'none',
  color: theme.palette.text.secondary,
  fontWeight: 600,
  width: '100%',
}));

export const LineChart = styled(Line)`
  min-width: 100% !important;
  max-height: calc(100% - 24px);
  min-height: calc(100% - 24px);
`;
