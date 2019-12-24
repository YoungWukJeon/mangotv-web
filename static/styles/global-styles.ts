import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

type COLOR = {
  mainColor: string;
  subColor?: string;
}

export const GLOBAL_COLOR: COLOR = {
  mainColor: '#FF8902'
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html{
    font-size: 16px;
  }
  body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }

  @media only screen and (max-width: 778px) {
    body {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 12px;
    }
  }
`;

export default GlobalStyle;