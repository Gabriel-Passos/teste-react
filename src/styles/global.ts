import { createGlobalStyle } from 'styled-components'; 

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-blue-50: #d7f0ff;
    --color-blue-500: #00b4d8;
    
    --color-grey-50: #f8f9fa;
    --color-grey-150: #dee2e6;
    --color-grey-750: #333533;

    --color-white: #ffffff;

    --max-width: 1340px;
  }

  html {
    -webkit-font-smoothing: antialiased;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 16px 'Roboto', sans-serif;
  }
`;