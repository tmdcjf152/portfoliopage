import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    background: #000;
  }

  a {
    text-decoration: none;
  }
  ul,ol,li{
    list-style: none;
  }

  input {
    border: none;
    outline: none;
  }
  .hidden{
    position: relative;
    top: -99999999999px;
    opacity: 0;
    overflow: hidden;
  }

`;

export default GlobalStyle;
