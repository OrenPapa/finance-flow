import { type ReactElement, useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  SearchInput,
} from './styles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { pageTitles } from './constants';

function Navbar(): ReactElement {
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
        <Typography variant="h5" fontWeight={600}>
          {title}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
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
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
