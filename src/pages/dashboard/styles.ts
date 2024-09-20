import { Box, styled } from '@mui/material';

export const DashboardContainer = styled(Box)`
  .MuiGrid-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const GridItem = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 16px 32px;
  flex: 1;
  box-shadow:
    rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;

  @media (max-width: 1600px) {
    padding: 16px;
  }

  &.item1 {
    min-width: 540px;
    height: 440px;

    @media (max-width: 1600px) {
      height: 420px;
    }
    @media (max-width: 900px) {
      min-width: 300px;
    }
  }
  &.item2 {
    min-width: 300px;
    height: 440px;

    @media (max-width: 1600px) {
      height: 420px;
    }
  }
  &.item3 {
    min-width: 300px;
    height: 440px;

    @media (max-width: 1600px) {
      height: 420px;
    }
  }
  &.item4 {
    min-width: 540px;
    height: 380px;

    @media (max-width: 1600px) {
      height: 340px;
    }

    @media (max-width: 900px) {
      min-width: 300px;
    }
  }
  &.item5 {
    min-width: 540px;
    height: 380px;

    @media (max-width: 1600px) {
      height: 340px;
    }

    @media (max-width: 1350px) {
      height: 440px;
    }

    @media (max-width: 900px) {
      min-width: 300px;
    }

    @media (max-width: 768px) {
      height: 340px;
    }

    @media (max-width: 500px) {
      height: 280px;
    }
  }
`;
