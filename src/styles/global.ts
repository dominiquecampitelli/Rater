import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    margin: 0 auto;
    padding: 0;
  }
  
  * {
    min-width: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    background: #121212;
    -webkit-font-smoothing: antialiased;
  }
  
  body,
  input,
  button {
    font: 16px Inter, sans-serif;
  }

  input,
  button {
    border: 0;
  }
  
  button {
    cursor: pointer;
  }
`;
