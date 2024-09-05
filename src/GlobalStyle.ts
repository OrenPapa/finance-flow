// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;900&display=swap');

  :root {
    --primary-color: #1976D2;
    --secondary-color: #5fa6ec;
    --body-color: #FFFFFF;
    --title-text-color: #050C9C;
    --primary-text-color: #000000;
    --tertiary-text-color: #808080; 
    --white-text-color: #FFFFFF;
    --hover-background-color: #f0f0f0;
    --primary-border-color: #e0e0e0;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--body-color);
    color: var(--primary-text-color);
    font-family: 'Roboto', sans-serif;
  }

  p, span, div {
    color: var(--primary-text-color);
  }
  a {
    color: var(--primary-color);
  }
`;

export default GlobalStyle;
