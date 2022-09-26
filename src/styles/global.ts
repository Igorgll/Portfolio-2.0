import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

   * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
      font-family: 'Kantumruy Pro', sans-serif;
      overflow-x: hidden !important;
    }

    html {
      scroll-behavior: smooth;
    }

    :root {
    --yellow: #FEF8B4;
    --light: #F6F4F6;
    --dark: #404040;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  
  a {
    color: inherit;
    text-decoration: none;
    outline: none;
  }
  
  button {
    border: 0;
  }
  
  button:hover {
    cursor: pointer;
  }

`;

export default GlobalStyle;
