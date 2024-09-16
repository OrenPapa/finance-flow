import { Box } from '@mui/material';
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  .MuiGrid-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const GridItem = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 16px;
  flex: 1;
  box-shadow:
    rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;

  &.item1 {
    min-width: 540px;
    height: 400px;
  }
  &.item2 {
    min-width: 300px;
    height: 400px;
  }
  &.item3 {
    min-width: 300px;
    height: 400px;
  }
  &.item4 {
    min-width: 540px;
    height: 380px;

    @media (max-width: 1600px) {
      height: 340px;
    }
  }
  &.item5 {
    min-width: 540px;
    height: 380px;

    @media (max-width: 1600px) {
      height: 340px;
    }
  }
`;
