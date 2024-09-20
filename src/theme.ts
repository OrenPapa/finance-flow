import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2',
    },
    secondary: {
      main: '#5fa6ec',
    },
    text: {
      primary: '#000000',
      secondary: '#808080',
    },
    background: {
      default: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      color: '#050C9C',
    },
    body1: {
      color: '#000000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: '#e0e0e0',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768, // Custom lg breakpoint
      md: 900,
      lg: 1350, // Custom lg breakpoint
      xl: 1536,
    },
  },
});

export default theme;
