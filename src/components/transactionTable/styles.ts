import { Box, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '100%',
  height: '100%',
});

export const HeaderContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '8px',
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
  borderBottom: `1px solid ${theme.palette.divider}`,
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

  [theme.breakpoints.down(900)]: {
    minWidth: '100px',
    fontWeight: 400,
  },
}));

export const DateText = styled(Typography)(({ theme }) => ({
  flex: '0 0 120px',
  color: theme.palette.text.secondary,
  minWidth: '100px',

  [theme.breakpoints.down(900)]: {
    minWidth: '80px',
  },
}));

export const AmountText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 600,
  minWidth: '100px',
  textAlign: 'end',
  color: theme.palette.text.primary,

  [theme.breakpoints.down(900)]: {
    minWidth: '50px',
    fontWeight: 400,
  },
}));
