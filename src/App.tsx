import type { ReactElement } from 'react';
import Router from './router';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
