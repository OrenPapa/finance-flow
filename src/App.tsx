import type { ReactElement } from 'react';
import GlobalStyle from './GlobalStyle';
import Router from './router';

function App(): ReactElement {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
