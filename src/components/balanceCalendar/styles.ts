import {
  Button,
  IconButton as MuiIconButton,
  Select as MuiSelect,
  MenuItem as MuiMenuItem,
  Typography as MuiTypography,
  FormControl as MuiFormControl,
  Box,
  styled,
} from '@mui/material';

interface AmountProps {
  $positive: boolean;
}

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const Toolbar = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
`;

export const IconButton = styled(MuiIconButton)`
  cursor: pointer;
`;

export const NavButton = styled(Button)`
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: transparent;
  }
`;

export const SelectContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MonthFormControl = styled(MuiFormControl)`
  width: 200px;
`;

export const YearFormControl = styled(MuiFormControl)`
  width: 100px;
  margin: 0 16px;
`;

export const Select = styled(MuiSelect)``;

export const MenuItem = styled(MuiMenuItem)`
  padding: 8px;
`;

export const Typography = styled(MuiTypography)`
  font-size: 14px;
`;

export const CalendarGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  width: 100%;
  max-width: 100%;
`;

export const DayBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.divider,
  borderRadius: '8px',
  padding: '8px',
  minHeight: '100px',
  minWidth: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}));

export const DayText = styled(Typography)`
  position: absolute;
  top: 10px;
  left: 16px;
`;

export const AmountText = styled(Typography)<AmountProps>`
  color: ${(props) => (props.$positive ? 'green' : 'red')};
  margin-top: 8px;
  font-weight: 600;
  font-size: 24px;
`;
