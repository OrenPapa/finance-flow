import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

export const ChartContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: calc(100% - 32px);
  height: 100%;
  padding: 0 16px;

  @media (max-width: 1600px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const SectionTitle = styled(Typography)`
  user-select: none;
  color: var(--tertiary-text-color);
  font-weight: 600;
  width: 100%;
`;

export const LineChart = styled(Line)`
  min-width: 100% !important;
  max-height: calc(100% - 24px);
  min-height: calc(100% - 24px);
`;
