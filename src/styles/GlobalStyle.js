import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  a{
        text-decoration: none;
        color: inherit;
    }

  *{
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif !important; 
  }

  ul,dl,dt,dd,li{
      list-style: none;
  }

  body{
    background-color: #131310;
  }
`;

export default GlobalStyle;
