import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

   * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body, button, textarea, input {
    color: var(--text);
    font: 400 1rem "Roboto", sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong, b {
    font-family: var(--font-poppins);
    }

    html {
      scroll-behavior: smooth;
    }

    :root {
    --background: #1D1D34;
    --blue: #1A1A2E;
    --light: #FFFFFE;
    --text: #94A1A6;
    --font-poppins: 'Poppins';
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
