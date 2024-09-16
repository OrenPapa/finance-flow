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
        <BannerTitle>Hello, Oren!</BannerTitle>
      </Banner>

      <BalanceOverview>
        <SectionTitle>Balance overview:</SectionTitle>
        <BalanceRow>
          <BalanceItem>
            <BalanceTitle>Current month:</BalanceTitle>
            <BalanceSum>{selectedAccount?.currentMonth}</BalanceSum>
          </BalanceItem>
          <BalanceItem>
            <BalanceTitle>Last trimester:</BalanceTitle>
            <BalanceSum>{selectedAccount?.lastTrimester}</BalanceSum>
          </BalanceItem>
          <BalanceItem>
            <BalanceTitle>Total balance:</BalanceTitle>
            <BalanceSum>{selectedAccount?.totalBalance}</BalanceSum>
          </BalanceItem>
        </BalanceRow>
      </BalanceOverview>

      <AccountsSection>
        <SectionTitle>Accounts:</SectionTitle>
        <AccountsRow>
          {mockAccounts.map((account, index) => (
            <AccountCardContainer key={account.id}>
              <AccountCard
                $gradientIndex={index}
                selected={account.id === selectedAccountId}
                onClick={() => handleAccountClick(account.id)}
              >
                <AccountTitle>{account.title}</AccountTitle>
              </AccountCard>
            </AccountCardContainer>
          ))}
          <AccountCardContainer>
            <AddAccountCard>
              <AddAccountIcon>
                <AddIcon />
              </AddAccountIcon>
              <AccountTitle>Add Account</AccountTitle>
            </AddAccountCard>
          </AccountCardContainer>
        </AccountsRow>
      </AccountsSection>
    </OverviewContainer>
  );
};

export default Overview;
