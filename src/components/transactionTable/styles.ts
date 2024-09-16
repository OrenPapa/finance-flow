import { Box, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: calc(100% - 32px);
  height: 100%;
  padding: 0 16px;

  @media (max-width: 1600px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const HeaderContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ViewAll = styled(Link)`
  color: var(--tertiary-text-color);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;

  &:hover {
    color: var(--tertiary-text-color);
  }
`;

export const SectionTitle = styled(Typography)`
  user-select: none;
  color: var(--tertiary-text-color);
  font-weight: 600;
  font-size: 1rem;
`;

export const RowWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-top: 1px solid var(--primary-border-color);
`;

export const IconWrapper = styled(Box)`
  flex: 0 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExpenseText = styled(Typography)`
  flex: 1;
  margin-left: 16px;
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
