import { Box } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled.div`
  .MuiGrid-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Responsive grid setup */
  /* @media (max-width: 1600px) {
    .item1,
    .item4,
    .item5 {
      min-width: 560px;
    }
    .item2,
    .item3 {
      min-width: 300px;
    }
  } */

  /* Mobile responsive behavior */
  /* @media (max-width: 560px) {
    .item1,
    .item2,
    .item3,
    .item4,
    .item5 {
      min-width: 100%;
    }
  } */
`;

export const GridItem = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 16px;
  flex: 1;
  /* border-right: 1px solid var(--primary-border-color); */

  &.item1 {
    min-width: 540px;
    /* background-color: #ff6b6b; */
    height: 410px;

    @media (max-width: 1600px) {
      height: 380px;
    }
  }
  &.item2 {
    min-width: 300px;
    /* background-color: #feca57; */
    height: 410px;

    @media (max-width: 1600px) {
      height: 380px;
    }
  }
  &.item3 {
    min-width: 300px;
    /* background-color: #1dd1a1; */
    height: 410px;

    @media (max-width: 1600px) {
      height: 380px;
    }
  }
  &.item4 {
    min-width: 540px;
    /* background-color: #5f27cd; */
    height: 330px;

    @media (max-width: 1600px) {
      height: 280px;
    }
  }
  &.item5 {
    /* min-width: 540px;
    background-color: #ff9ff3; */
    height: 330px;

    @media (max-width: 1600px) {
      height: 280px;
    }
  }
`;
