import { type ReactElement, useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  SearchInput,
  Title,
  TitleContainer,
  MenuButton,
  ActionContainer,
} from './styles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { pageTitles } from './constants';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface NavbarProps {
  expanded: boolean;
  onToggleSidebar: () => void;
}

function Navbar({ expanded, onToggleSidebar }: NavbarProps): ReactElement {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'Page';
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target as Node)
    ) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <AppBar position="static">
      <Toolbar>
        <TitleContainer>
          <MenuButton onClick={onToggleSidebar}>
            {expanded ? <ChevronLeftIcon /> : <MenuIcon />}
          </MenuButton>
          <Title>{title}</Title>
        </TitleContainer>
        <ActionContainer>
          {isSearchOpen ? (
            <SearchInput
              ref={searchInputRef}
              placeholder="Search..."
              onBlur={() => setIsSearchOpen(false)}
              isSearchOpen={isSearchOpen}
            />
          ) : (
            <IconButton edge="end" color="inherit" onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
          )}
          <IconButton edge="end" color="inherit">
            <NotificationsIcon />
          </IconButton>
        </ActionContainer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
