import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // equivalent to --primary-color
    },
    secondary: {
      main: '#5fa6ec', // equivalent to --secondary-color
    },
    text: {
      primary: '#000000', // equivalent to --primary-text-color
      secondary: '#808080', // equivalent to --tertiary-text-color
    },
    background: {
      default: '#FFFFFF', // equivalent to --body-color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      color: '#050C9C', // equivalent to --title-text-color
    },
    body1: {
      color: '#000000', // equivalent to --primary-text-color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: '#e0e0e0', // equivalent to --primary-border-color
          '&:hover': {
            backgroundColor: '#f0f0f0', // equivalent to --hover-background-color
          },
        },
      },
    },
  },
});

export default theme;
