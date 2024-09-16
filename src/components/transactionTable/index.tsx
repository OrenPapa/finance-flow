import React from 'react';
import {
  Container,
  IconWrapper,
  AmountText,
  ExpenseText,
  RowWrapper,
  SectionTitle,
  DateText,
  HeaderContainer,
  ViewAll,
} from './styles';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const transactions = [
  { type: 'coffee', name: 'Coffee', amount: '-5$', date: '2024-09-01' },
  { type: 'food', name: 'Lunch', amount: '-12$', date: '2024-09-02' },
  {
    type: 'transportation',
    name: 'Bus Ticket',
    amount: '-2$',
    date: '2024-09-03',
  },
  { type: 'groceries', name: 'Groceries', amount: '-88$', date: '2024-09-04' },
  { type: 'bills', name: 'Electric Bill', amount: '-100$', date: '2024-09-04' },
];

function getIcon(type: string) {
  switch (type) {
    case 'food':
      return <LocalDiningIcon style={{ color: '#ff9800' }} />;
    case 'coffee':
      return <LocalCafeIcon style={{ color: '#795548' }} />;
    case 'transportation':
      return <DirectionsBusIcon style={{ color: '#2196f3' }} />;
    case 'groceries':
      return <ShoppingCartOutlinedIcon style={{ color: '#f439bf' }} />;
    default:
      return <AttachMoneyIcon style={{ color: '#4caf50' }} />;
  }
}

const TransactionTable: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <SectionTitle>Last transactions:</SectionTitle>
        <ViewAll to="/">View all</ViewAll>
      </HeaderContainer>

      {transactions.map((transaction, index) => (
        <RowWrapper key={index}>
          <IconWrapper>{getIcon(transaction.type)}</IconWrapper>
          <ExpenseText>{transaction.name}</ExpenseText>
          <DateText>{transaction.date}</DateText>
          <AmountText>{transaction.amount}</AmountText>
        </RowWrapper>
      ))}
    </Container>
  );
};

export default TransactionTable;
