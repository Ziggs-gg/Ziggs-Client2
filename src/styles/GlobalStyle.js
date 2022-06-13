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
        font-family: 'NotoSansKR', sans-serif !important; 
  }

  ul,dl,dt,dd,li{
      list-style: none;
  }

  body{
    background-color: #131310;
    cursor: default;
  }
`;

export default GlobalStyle;
