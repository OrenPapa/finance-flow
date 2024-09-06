import styled from 'styled-components';
import { Box, Typography, Button } from '@mui/material';

interface FilterButtonProps {
  selected: boolean;
}

export const OutcomeCategoriesContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled(Typography)`
  user-select: none;
  color: var(--tertiary-text-color);
  font-weight: 600;
  width: 100%;
`;

export const FilterContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const FilterButton = styled(Button)<FilterButtonProps>`
  background-color: var(--primary-color);
  color: var(--white-text-color);
  font-size: 0.75rem;
  padding: 5px 10px;
  margin: 16px 4px 0 4px;
  transition: all 0.2s ease;
  transform: ${({ selected }) => (selected ? 'scale(1.1)' : 'scale(1)')};

  &:hover {
    transform: scale(1.1);
    background-color: var(--primary-color);
  }
`;

export const ChartContainer = styled(Box)`
  max-width: 100%;
  max-height: 100%;
`;
