import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventNoteIcon from '@mui/icons-material/EventNote';

export interface MenuItem {
  title: string;
  icon: React.ReactElement;
  path: string;
}

export const menuItems: MenuItem[] = [
  { title: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { title: 'Activities', icon: <EventNoteIcon />, path: '/activities' },
  { title: 'Calendar', icon: <CalendarTodayIcon />, path: '/calendar' },
];
