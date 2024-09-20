import {
  Box,
  Typography,
  FormControl,
  MenuItem,
  Select as MuiSelect,
  InputLabel,
  styled,
} from '@mui/material';

export const IncomeCategoriesContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  height: 100%;
`;

export const SectionTitle = styled(Typography)(({ theme }) => ({
  userSelect: 'none',
  color: theme.palette.text.secondary,
  fontWeight: 600,
  width: '100%',
}));

export const ChartContainer = styled(Box)`
  max-width: 100%;
  max-height: 100%;
`;

export const StyledFormControl = styled(FormControl)`
  width: 100%;
  max-width: 400px;
`;

export const SelectItem = styled(MenuItem)``;

export const Select = styled(MuiSelect)``;

export const SelectLabel = styled(InputLabel)``;
