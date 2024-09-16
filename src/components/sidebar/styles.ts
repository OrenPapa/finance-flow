import {
  Drawer as MUIDrawer,
  ListItemButton as MUIListItemButton,
  ListItemIcon as MUIListItemIcon,
  ListItemText as MUIListItemText,
  IconButton as MUIIconButton,
  Box as MUIBox,
  styled
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

export const Drawer = styled(MUIDrawer)<DrawerProps>`
  width: ${(props) => (props.$expanded ? '240px' : '56px')};
  flex-shrink: 0;
  white-space: nowrap;
  transition: width 0.3s ease;
  & .MuiDrawer-paper {
    width: ${(props) => (props.$expanded ? '240px' : '56px')};
    box-sizing: border-box;
    transition: width 0.3s ease;
    background-color: var(--body-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    overflow: hidden;
  }
`;

export const IconButton = styled(MUIIconButton)<IconButtonProps>`
  display: flex;
  justify-content: ${(props) => (props.$expanded ? 'flex-end' : 'center')};
  padding: 1rem;
`;

export const Box = styled(MUIBox)<BoxProps>`
  padding-bottom: ${(props) => (props.$isBottom ? '2rem' : '0')};
`;

export const ListItemButton = styled(MUIListItemButton)<ListItemButtonProps>`
  background-color: inherit;
  &:hover {
    background-color: var(--hover-background-color);
    cursor: pointer;
  }
  padding: ${(props) => (props.$expanded ? '10px 16px' : '10px 0')};
  justify-content: ${(props) => (props.$expanded ? 'initial' : 'center')};
`;

export const ListItemIcon = styled(MUIListItemIcon)<ListItemIconProps>`
  min-width: 0;
  justify-content: center;
  color: ${(props) =>
    props.$isSelected ? 'var(--primary-color)' : 'var(--tertiary-text-color)'};
`;

export const ListItemText = styled(MUIListItemText)<ListItemTextProps>`
  margin: 0;
  margin-left: 2rem;
  white-space: nowrap;
  color: ${(props) =>
    props.$isSelected ? 'var(--primary-color)' : 'var(--tertiary-text-color)'};
`;
