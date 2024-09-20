import { Box, Card, Typography, styled } from '@mui/material';

const gradients = [
  'linear-gradient(135deg, #e97261 0%, #f0b3a2 100%)', // red-pink gradient
  'linear-gradient(135deg, #7c78e9 0%, #b0abea 100%)', // blue-purple gradient
  'linear-gradient(135deg, #e9b86c 0%, #ebd8a7 100%)', // yellow gradient
  'linear-gradient(135deg, #78e97c 0%, #b0eab1 100%)', // green gradient
  'linear-gradient(135deg, #6ce9c1 0%, #b0eada 100%)', // teal gradient
];

interface AccountCardProps {
  $gradientIndex: number;
  selected: boolean;
}

export const OverviewContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minWidth: '100%',
  width: '300px',
  height: '100%',
  boxSizing: 'border-box',
  borderRadius: '8px',
});

export const Banner = styled(Box)(({ theme }) => ({
  height: '80px',
  borderRadius: '12px',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  display: 'flex',
  alignItems: 'center',
  padding: '0 32px',
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  userSelect: 'none',
  fontSize: '1.5rem',
  fontWeight: 600,
}));

export const BalanceOverview = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const SectionTitle = styled(Typography)(({ theme }) => ({
  userSelect: 'none',
  color: theme.palette.text.secondary,
  fontSize: '1rem',
  fontWeight: 600,
  margin: 0,
  padding: 0,
}));

export const BalanceRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 32px',

  [theme.breakpoints.down(1600)]: {
    padding: '0 16px',
  },
}));

export const BalanceItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '160px',
  height: '48px',

  [theme.breakpoints.down(900)]: {
    width: '100px',
  },
}));

export const BalanceTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  userSelect: 'none',
  fontSize: '0.875rem',
}));

export const BalanceSum = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  fontSize: '2rem',

  [theme.breakpoints.down(1600)]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.down(900)]: {
    fontSize: '1.25rem',
  },
}));

export const AccountsSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const AccountsRow = styled(Box)(({ theme }) => ({
  userSelect: 'none',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  overflowX: 'auto',
  paddingBottom: '8px',
  scrollBehavior: 'smooth',
  marginTop: '4px',
  width: '100%',

  '&::-webkit-scrollbar': {
    height: '8px',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.divider,
    borderRadius: '4px',
  },
}));

export const AccountCardContainer = styled(Box)(({ theme }) => ({
  width: '210px',
  height: '160px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '8px',

  [theme.breakpoints.down(1600)]: {
    width: '180px',
    height: '140px',
  },
}));

export const AccountCard = styled(Card)<AccountCardProps>(
  ({ $gradientIndex, selected }) => ({
    background: gradients[$gradientIndex % gradients.length],
    flex: '0 0 auto',
    width: selected ? '210px' : '190px',
    height: selected ? '160px' : '140px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',

    '&:hover': {
      width: '210px',
      height: '160px',
    },

    '@media (max-width: 1600px)': {
      width: selected ? '180px' : '160px',
      height: selected ? '140px' : '120px',

      '&:hover': {
        width: '180px',
        height: '140px',
      },
    },
  }),
);

export const AccountTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '1.25rem',

  [theme.breakpoints.down(1600)]: {
    fontSize: '1rem',
  },
}));

export const AddAccountCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #4caf50 0%, #81c784 100%)',
  flex: '0 0 auto',
  width: '190px',
  height: '140px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '12px',
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(1.05)',
  },

  [theme.breakpoints.down(1600)]: {
    width: '160px',
    height: '120px',
  },
}));

export const AddAccountIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  fontSize: '2rem',
  marginRight: '8px',
}));
