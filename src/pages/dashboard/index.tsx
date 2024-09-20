import React from 'react';
import { Grid } from '@mui/material';
import { DashboardContainer, GridItem } from './styles';
import Overview from '../../components/overview';
import IncomeCategories from '../../components/incomeCategories';
import OutcomeCategories from '../../components/outcomeCategories';
import TransactionTable from '../../components/transactionTable';
import BalanceChart from '../../components/balanceChart';

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Grid container spacing={2}>
        {/* First Row */}
        <Grid item xs={12} lg={6} className="item1">
          <GridItem className="item1">
            <Overview />
          </GridItem>
        </Grid>
        <Grid item xs={12} lg={6} className="combinedItem">
          {/* Nested Grid to combine Income and Outcome Categories */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} className="item2">
              <GridItem className="item2">
                <IncomeCategories />
              </GridItem>
            </Grid>
            <Grid item xs={12} md={6} className="item3">
              <GridItem className="item3">
                <OutcomeCategories />
              </GridItem>
            </Grid>
          </Grid>
        </Grid>

        {/* Second Row */}
        <Grid item xs={12} lg={6} className="item4">
          <GridItem className="item4">
            <TransactionTable />
          </GridItem>
        </Grid>
        <Grid item xs={12} lg={6} className="item5">
          <GridItem className="item5">
            <BalanceChart />
          </GridItem>
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

export default Dashboard;
