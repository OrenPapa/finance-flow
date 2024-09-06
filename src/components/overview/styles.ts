import styled from 'styled-components';
import { Box, Card, Typography } from '@mui/material';

const gradients = [
  'linear-gradient(135deg, #e97261 0%, #f0b3a2 100%)', // red-pink gradient
  'linear-gradient(135deg, #7c78e9 0%, #b0abea 100%)', // blue-purple gradient
  'linear-gradient(135deg, #78e97c 0%, #b0eab1 100%)', // green gradient
  'linear-gradient(135deg, #e9b86c 0%, #ebd8a7 100%)', // yellow gradient
  'linear-gradient(135deg, #6ce9c1 0%, #b0eada 100%)', // teal gradient
];

interface AccountCardProps {
  $gradientIndex: number;
  selected: boolean;
}

export const OverviewContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const Banner = styled(Box)`
  width: calc(100% - 64px);
  height: 80px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  display: flex;
  align-items: center;
  padding: 0 32px;
`;

export const BannerTitle = styled(Typography)`
  color: var(--white-text-color);
  user-select: none;
`;

export const BalanceOverview = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const SectionTitle = styled(Typography)`
  user-select: none;
  color: var(--tertiary-text-color);
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

export const BalanceRow = styled(Box)`
  width: calc(100% - 32px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  padding: 0 16px;
`;

export const BalanceItem = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const BalanceTitle = styled(Typography)`
  color: var(--tertiary-text-color);
  user-select: none;
`;

export const BalanceSum = styled(Typography)`
  color: var(--primary-text-color);
  font-weight: 600;
`;

export const AccountsSection = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const AccountsRow = styled(Box)`
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  padding-bottom: 8px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-border-color);
    border-radius: 4px;
  }
`;

export const AccountCardContainer = styled(Box)`
  width: 220px;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;

  @media (max-width: 1600px) {
    width: 180px;
    height: 140px;
  }
`;

export const AccountCard = styled(Card)<AccountCardProps>`
  background: ${({ $gradientIndex }) =>
    gradients[$gradientIndex % gradients.length]};
  flex: 0 0 auto;
  width: ${({ selected }) => (selected ? '220px' : '200px')};
  height: ${({ selected }) => (selected ? '170px' : '150px')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    width: 220px;
    height: 170px;
  }

  @media (max-width: 1600px) {
    width: ${({ selected }) => (selected ? '180px' : '160px')};
    height: ${({ selected }) => (selected ? '140px' : '120px')};

    &:hover {
      width: 180px;
      height: 140px;
    }
  }
`;

export const AccountTitle = styled(Typography)`
  color: var(--white-text-color);

  @media (max-width: 1600px) {
    font-size: 1rem;
  }
`;

export const AddAccountCard = styled(Card)`
  background: linear-gradient(135deg, #4caf50 0%, #81c784 100%);
  flex: 0 0 auto;
  width: 200px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.05);
  }

  @media (max-width: 1600px) {
    width: 160px;
    height: 120px;
  }
`;

export const AddAccountIcon = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white-text-color);
  font-size: 2rem;
  margin-right: 8px;
`;
