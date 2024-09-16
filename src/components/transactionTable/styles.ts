import { Box, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  minWidth: 'calc(100% - 32px)',
  height: '100%',
  padding: '0 16px',

  [theme.breakpoints.down(1600)]: {
    width: '100%',
    padding: '0 16px',
  },
}));

export const HeaderContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const ViewAll = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 400,

  '&:hover': {
    color: theme.palette.text.secondary,
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  userSelect: 'none',
  color: theme.palette.text.secondary,
  fontWeight: 600,
  fontSize: '1rem',
}));

export const RowWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '60px',
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export const IconWrapper = styled(Box)({
  flex: '0 0 40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ExpenseText = styled(Typography)(({ theme }) => ({
  flex: 1,
  marginLeft: '16px',
  fontWeight: 600,
  color: theme.palette.text.primary,
  minWidth: '200px',
}));

export const DateText = styled(Typography)(({ theme }) => ({
  flex: '0 0 120px',
  color: theme.palette.text.secondary,
  minWidth: '100px',
}));

export const AmountText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 600,
  minWidth: '100px',
  textAlign: 'end',
  color: theme.palette.text.primary,
}));
