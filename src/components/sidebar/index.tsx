import { type ReactElement } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Drawer,
  IconButton,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from './styles';
import { menuItems } from './constants';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface SidebarProps {
  expanded: boolean;
  onToggleSidebar: () => void;
}

function Sidebar({ expanded, onToggleSidebar }: SidebarProps): ReactElement {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    onToggleSidebar();
  };

  return (
    <Drawer variant="permanent" open={true} $expanded={expanded}>
      <Box>
        <IconButton onClick={onToggleSidebar} $expanded={expanded}>
          {expanded ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        {menuItems.map((item) => {
          const isSelected = location.pathname === item.path;
          return (
            <ListItemButton
              key={item.title}
              onClick={() => handleNavigation(item.path)}
              $expanded={expanded}
            >
              <ListItemIcon $isSelected={isSelected}>{item.icon}</ListItemIcon>
              {expanded && (
                <ListItemText
                  primary={item.title}
                  disableTypography
                  $isSelected={isSelected}
                />
              )}
            </ListItemButton>
          );
        })}
      </Box>
      <Box $isBottom>
        <ListItemButton
          onClick={() => handleNavigation('/settings')}
          $expanded={expanded}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          {expanded && <ListItemText primary="Settings" disableTypography />}
        </ListItemButton>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
