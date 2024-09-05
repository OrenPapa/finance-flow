import React, { useState } from 'react';
import {
  OverviewContainer,
  Banner,
  BannerTitle,
  BalanceOverview,
  SectionTitle,
  BalanceRow,
  BalanceItem,
  BalanceTitle,
  BalanceSum,
  AccountsSection,
  AccountsRow,
  AccountCard,
  AccountTitle,
  AddAccountCard,
  AddAccountIcon,
  AccountCardContainer,
} from './styles';
import AddIcon from '@mui/icons-material/Add';
import { mockAccounts } from './constant';

const Overview: React.FC = () => {
  const [selectedAccountId, setSelectedAccountId] = useState<number>(1);

  const handleAccountClick = (id: number) => {
    setSelectedAccountId(id);
  };

  const selectedAccount = mockAccounts.find(
    (account) => account.id === selectedAccountId,
  );

  return (
    <OverviewContainer>
      <Banner>
        <BannerTitle variant="h6">Hello, Oren!</BannerTitle>
      </Banner>

      <BalanceOverview>
        <SectionTitle variant="body1">Balance overview:</SectionTitle>
        <BalanceRow>
          <BalanceItem>
            <BalanceTitle variant="body2">Current month:</BalanceTitle>
            <BalanceSum variant="h4">
              {selectedAccount?.currentMonth}
            </BalanceSum>
          </BalanceItem>
          <BalanceItem>
            <BalanceTitle>Last trimester:</BalanceTitle>
            <BalanceSum variant="h4">
              {selectedAccount?.lastTrimester}
            </BalanceSum>
          </BalanceItem>
          <BalanceItem>
            <BalanceTitle>Total balance:</BalanceTitle>
            <BalanceSum variant="h4">
              {selectedAccount?.totalBalance}
            </BalanceSum>
          </BalanceItem>
        </BalanceRow>
      </BalanceOverview>

      <AccountsSection>
        <SectionTitle variant="body1">Accounts:</SectionTitle>
        <AccountsRow>
          {mockAccounts.map((account, index) => (
            <AccountCardContainer key={account.id}>
              <AccountCard
                $gradientIndex={index}
                selected={account.id === selectedAccountId}
                onClick={() => handleAccountClick(account.id)}
              >
                <AccountTitle variant="h6">{account.title}</AccountTitle>
              </AccountCard>
            </AccountCardContainer>
          ))}
          <AccountCardContainer>
            <AddAccountCard>
              <AddAccountIcon>
                <AddIcon />
              </AddAccountIcon>
              <AccountTitle variant="h6">Add Account</AccountTitle>
            </AddAccountCard>
          </AccountCardContainer>
        </AccountsRow>
      </AccountsSection>
    </OverviewContainer>
  );
};

export default Overview;
