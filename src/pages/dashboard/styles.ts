import { Box } from '@mui/material';
import styled from 'styled-components';

interface GridItemProps {
  area: string;
}

export const DashboardContainer = styled(Box)`
  display: grid;
  grid-template-areas:
    'item1 item2 item3'
    'item4 item5 item6';
  grid-template-columns: minmax(644px, 2fr) minmax(240px, 1fr) minmax(
      240px,
      1fr
    );
  grid-template-rows: 500px 300px;
  gap: 16px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  min-width: 1200px;

  @media (max-width: 768px) {
    grid-template-areas:
      'item1'
      'item2'
      'item3'
      'item4'
      'item5'
      'item6';
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 300px);
  }
`;

export const GridItem = styled(Box)<GridItemProps>`
  grid-area: ${(props) => props.area};
  display: flex;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-radius: 8px;
  min-width: ${(props) => (props.area === 'item1' ? '644px' : '240px')};
  box-sizing: border-box;
`;

export const GridItemContent = styled(Box)`
  /* background-color: yellow; */
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  padding: 16px;
  border-right: 1px solid var(--primary-border-color);
`;
