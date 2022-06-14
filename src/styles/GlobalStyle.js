import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '../font/font.css';

const GlobalStyle = createGlobalStyle`
  ${reset}

  a{
        text-decoration: none;
        color: inherit;
    }

  *{
        box-sizing: border-box;
  }

  ul,dl,dt,dd,li{
      list-style: none;
  }

  body{
    font-family: 'NotoSansKR', sans-serif !important; 
    background-color: #131310;
    letter-spacing:-0.02em;
    cursor: default;
  }
`;

export default GlobalStyle;
