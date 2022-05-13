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
  }

  ul,dl,dt,dd,li{
      list-style: none;
  }

  body{
    background-color: #131310 ;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyle;
