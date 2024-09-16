import {
  AppBar as MUIAppBar,
  Toolbar as MUIToolbar,
  Typography as MUITypography,
  IconButton as MUIIconButton,
  Box as MUIBox,
  InputBase as MUIInputBase,
  styled,
} from '@mui/material';

interface SearchInputProps {
  isSearchOpen: boolean;
}

export const AppBar = styled(MUIAppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,

  '& .MuiToolbar-root': {
    padding: '0 16px',
  },

  '& .css-hyum1k-MuiToolbar-root': {
    minHeight: '56px',
  },
}));

export const Title = styled(MUITypography)({
  fontSize: '1.5rem',
  fontWeight: 600,
});

export const Toolbar = styled(MUIToolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const Typography = styled(MUITypography)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: 0,
}));

export const IconButton = styled(MUIIconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginLeft: '16px',
}));

export const Box = styled(MUIBox)({});

export const SearchInput = styled(MUIInputBase)<SearchInputProps>(
  ({ theme, isSearchOpen }) => ({
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.secondary,
    transition: 'width 0.3s ease, opacity 0.3s ease',
    width: isSearchOpen ? '400px' : '0',
    height: '36px',
    opacity: isSearchOpen ? 1 : 0,
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: '4px',
    padding: '0 8px',
    boxSizing: 'border-box',
    position: 'relative',
    right: 0,
    '&:focus': {
      outline: 'none',
    },
  }),
);
