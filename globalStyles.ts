import styled, { createGlobalStyle } from 'styled-components';

import theme from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-size: ${theme.font.size.normal}em;
    font-weight: 300;
    font-family: 'Roboto','Verdana','Helvetica', sans-serif;
    color: ${theme.color.black};
    line-height: ${theme.font.lineHeight};
  }

  p {
    line-height: 1.6;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  ${({ theme }) => {
    return `
      padding: 0 ${theme.gutter * 30}px;
    `;
  }}
`;
