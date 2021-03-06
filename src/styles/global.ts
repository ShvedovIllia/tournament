import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    color: #333333;
    font-size: 14px;
    line-height: 1.35;
    overflow: hidden;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  input {
    background-clip: padding-box;
  }
  * {
    -webkit-tap-highlight-color: transparent;
  }
  input::-ms-clear, input::-ms-reveal {
    display: none;
  }
  * :focus {
    outline: none;
  }
  button::-moz-focus-inner {
    border: 0;
  }
  b {
    font-weight: 500;
  }
`;
