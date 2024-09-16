import {
  Box,
  Typography,
  FormControl,
  MenuItem,
  Select as MuiSelect,
  InputLabel,
  styled,
} from '@mui/material';

export const OutcomeCategoriesContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: calc(100% - 32px);
  height: 100%;
  padding: 0 16px;

  @media (max-width: 1600px) {
    width: 100%;
    padding: 0 16px;
  }
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
  margin-top: 32px;
`;

export const SelectItem = styled(MenuItem)``;

export const Select = styled(MuiSelect)``;

export const SelectLabel = styled(InputLabel)``;
