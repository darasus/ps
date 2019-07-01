import React, { FC } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { PageTransition } from 'next-page-transitions';

import { GlobalStyle } from '../../globalStyles';
import Header from '../../features/Header';
import theme from 'constants/theme';

type Props = {
  title?: string;
};

const Layout: FC<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{ title } | PS</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap'
        rel='stylesheet'
      />
    </Head>

    <ThemeProvider theme={ theme }>
      <>
        <GlobalStyle />
        <Header />
        <PageTransition timeout={ 1300 } classNames='page-transition'>
          { children }
        </PageTransition>
        <style jsx={ true } global={ true }>{ `
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity 300ms, transform 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        ` }</style>
      </>
    </ThemeProvider>
  </div>
);

export default Layout;
