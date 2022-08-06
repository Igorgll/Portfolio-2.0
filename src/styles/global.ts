import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
   
   * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
      font-family: 'Ubuntu', sans-serif;
      overflow-x: hidden;
    }

    html {
      scroll-behavior: smooth;
    }

    :root {
    --primary: #26547C;
    --yellow: #FEF8B4;
    --black: #0A100D;
    --laurel-green: #B9BAA3;
    --light: #F6F4F6;
    --light-window: #F7F7F7;
    --dark: #404040;

    --dark-background: #383c3f;
    --dark-shadow: #1c1c1b;
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
`

export default GlobalStyle;