import {
  Drawer as MUIDrawer,
  ListItemButton as MUIListItemButton,
  ListItemIcon as MUIListItemIcon,
  ListItemText as MUIListItemText,
  IconButton as MUIIconButton,
  Box as MUIBox,
  Backdrop as MUIBackdrop,
  styled,
} from '@mui/material';

interface DrawerProps {
  $expanded: boolean;
}

interface IconButtonProps {
  $expanded: boolean;
}

interface BoxProps {
  $isBottom?: boolean;
}

interface ListItemButtonProps {
  $expanded: boolean;
}

interface ListItemIconProps {
  $isSelected?: boolean;
}

interface ListItemTextProps {
  $isSelected?: boolean;
}

export const Drawer = styled(MUIDrawer)<DrawerProps>(
  ({ theme, $expanded }) => ({
    width: $expanded ? '240px' : '56px',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    transition: 'width 0.3s ease',

    '& .MuiDrawer-paper': {
      width: $expanded ? '240px' : '56px',
      boxSizing: 'border-box',
      transition: 'width 0.3s ease',
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100vh',
      overflow: 'hidden',

      [theme.breakpoints.down(600)]: {
        width: $expanded ? '240px' : '0',
        position: 'fixed',
        top: '57px',
        height: 'calc(100vh - 57px)',
      },
    },

    [theme.breakpoints.down(600)]: {
      position: 'fixed',
      visibility: $expanded ? 'show' : 'none',
      width: $expanded ? '240px' : '0',
      top: '57px',
      height: 'calc(100vh - 57px)',
      zIndex: '1000',
    },
  }),
);

export const IconButton = styled(MUIIconButton)<IconButtonProps>(
  ({ theme, $expanded }) => ({
    display: 'flex',
    justifyContent: $expanded ? 'flex-end' : 'center',
    padding: '1rem',

    [theme.breakpoints.down(600)]: {
      display: 'none',
    },
  }),
);

export const Box = styled(MUIBox)<BoxProps>(({ $isBottom }) => ({
  paddingBottom: $isBottom ? '2rem' : '0',
}));

export const ListItemButton = styled(MUIListItemButton)<ListItemButtonProps>(
  ({ theme, $expanded }) => ({
    backgroundColor: 'inherit',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      cursor: 'pointer',
    },
    padding: $expanded ? '10px 16px' : '10px 0',
    justifyContent: $expanded ? 'initial' : 'center',
  }),
);

export const ListItemIcon = styled(MUIListItemIcon)<ListItemIconProps>(
  ({ theme, $isSelected }) => ({
    minWidth: 0,
    justifyContent: 'center',
    color: $isSelected
      ? theme.palette.primary.main
      : theme.palette.text.secondary,
  }),
);

export const ListItemText = styled(MUIListItemText)<ListItemTextProps>(
  ({ theme, $isSelected }) => ({
    margin: 0,
    marginLeft: '2rem',
    whiteSpace: 'nowrap',
    color: $isSelected
      ? theme.palette.primary.main
      : theme.palette.text.secondary,
  }),
);

export const BackdropStyled = styled(MUIBackdrop)(({ theme }) => ({
  [theme.breakpoints.down(600)]: {
    zIndex: 999,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));
