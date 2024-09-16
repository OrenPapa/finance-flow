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

export const AppBar = styled(MUIAppBar)`
  background-color: transparent;
  box-shadow: none;
  border-bottom: 1px solid var(--primary-border-color);
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  & .MuiToolbar-root {
    padding: 0 16px;
  }

  & .css-hyum1k-MuiToolbar-root {
    min-height: 56px;
  }
`;

export const Title = styled(MUITypography)`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Toolbar = styled(MUIToolbar)`
  display: flex;
  justify-content: space-between;
`;

export const Typography = styled(MUITypography)`
  color: var(--primary-text-color);
  margin: 0;
`;

export const IconButton = styled(MUIIconButton)`
  color: var(--tertiary-text-color);
  margin-left: 16px;
`;

export const Box = styled(MUIBox)``;

export const SearchInput = styled(MUIInputBase)<SearchInputProps>`
  background-color: white;
  color: var(--tertiary-text-color);
  transition:
    width 0.3s ease,
    opacity 0.3s ease;
  width: ${(props) => (props.isSearchOpen ? '400px' : '0')};
  height: 36px;
  opacity: ${(props) => (props.isSearchOpen ? 1 : 0)};
  border: 1px solid grey;
  border-radius: 4px;
  padding: 0 8px;
  box-sizing: border-box;
  position: relative;
  right: 0;
  &:focus {
    outline: none;
  }
`;
