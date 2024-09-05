import { type ReactElement, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from '../sidebar';
import Navbar from '../navbar';

function PrivateLayout(): ReactElement {
  const [expanded, setExpanded] = useState(false);

  const handleToggleSidebar = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Box display="flex" height="100vh">
      <Sidebar expanded={expanded} onToggleSidebar={handleToggleSidebar} />
      <Box
        sx={{
          flexGrow: 1,
          transition: 'margin-left 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            maxWidth: '1864px',
            // maxHeight: '820px',
            p: 2,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default PrivateLayout;
