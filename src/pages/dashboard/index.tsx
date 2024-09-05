import React from 'react';
import { DashboardContainer, GridItem, GridItemContent } from './styles';
import Overview from '../../components/overview';
import IncomeCategories from '../../components/incomeCategories';
import OutcomeCategories from '../../components/outcomeCategories';
import TransactionTable from '../../components/transactionTable';

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <GridItem area="item1">
        <GridItemContent>
          <Overview />
        </GridItemContent>
      </GridItem>
      <GridItem area="item2">
        <GridItemContent>
          <IncomeCategories />
        </GridItemContent>
      </GridItem>
      <GridItem area="item3">
        <GridItemContent>
          <OutcomeCategories />
        </GridItemContent>
      </GridItem>
      <GridItem area="item4">
        <GridItemContent>
          <TransactionTable />
        </GridItemContent>
      </GridItem>
      <GridItem area="item5">
        <GridItemContent></GridItemContent>
      </GridItem>
      <GridItem area="item6">
        <GridItemContent></GridItemContent>
      </GridItem>
    </DashboardContainer>
  );
};

export default Dashboard;
