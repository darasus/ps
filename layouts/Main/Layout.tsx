import React, { FC } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../../globalStyles';
import Header from '../../features/Header';
import theme from '../../theme';

type Props = {
  title?: string;
};

const Layout: FC<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title} | PS</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap"
        rel="stylesheet"
      />
    </Head>

    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        {children}
      </>
    </ThemeProvider>
  </div>
);

export default Layout;
