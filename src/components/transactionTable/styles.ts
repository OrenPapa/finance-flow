import { Typography } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const SectionTitle = styled(Typography)`
  user-select: none;
  color: var(--tertiary-text-color);
  font-weight: 600;
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid var(--primary-border-color);
`;

export const IconWrapper = styled.div`
  flex: 0 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExpenseText = styled(Typography)`
  flex: 1;
  margin-left: 1rem;
  font-weight: 600;
  color: #333;
  min-width: 200px;
  color: var(--primary-text-color);
`;

export const DateText = styled(Typography)`
  flex: 0 0 120px;
  color: #757575;
  min-width: 100px;
  color: var(--tertiary-text-color);
`;

export const AmountText = styled(Typography)`
  font-size: 1rem;
  font-weight: 600;
  min-width: 100px;
  text-align: end;
  color: var(--primary-text-color);
`;
