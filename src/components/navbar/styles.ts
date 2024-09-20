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
  position: 'fixed',
  backgroundColor: theme.palette.background.default,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  zIndex: 1001,

  '& .MuiToolbar-root': {
    padding: '0 16px',
    width: 'calc(100% - 60px)',

    [theme.breakpoints.down(600)]: {
      width: 'calc(100% - 16px)',
    },
  },

  '& .css-hyum1k-MuiToolbar-root': {
    minHeight: '56px',
  },

  [theme.breakpoints.down(600)]: {
    width: 'calc(100vw)',
  },
}));

export const Title = styled(MUITypography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,

  [theme.breakpoints.down(600)]: {
    fontSize: '1.25rem',
    fontWeight: 600,
  },
}));

export const Toolbar = styled(MUIToolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

export const TitleContainer = styled(MUIBox)({
  display: 'fles',
  flexDirection: 'row',
  alignItems: 'center',
});

export const MenuButton = styled(MUIBox)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: '0 16px 0 0',
  padding: '0',
  color: theme.palette.text.secondary,

  [theme.breakpoints.up(600)]: {
    display: 'none',
  },
}));

export const Typography = styled(MUITypography)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: 0,
}));

export const ActionContainer = styled(MUIBox)(() => ({
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '16px',
}));

export const IconButton = styled(MUIIconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginLeft: '16px',
}));

export const SearchInput = styled(MUIInputBase)<SearchInputProps>(
  ({ theme, isSearchOpen }) => ({
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.secondary,
    transition: 'width 0.3s ease, opacity 0.3s ease',
    width: '400px',
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

    [theme.breakpoints.down(768)]: {
      width: '200px',
    },
    [theme.breakpoints.down(500)]: {
      width: '120px',
    },
  }),
);
