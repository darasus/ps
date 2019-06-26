import React from 'react';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class DefaultLayout extends Document<any> {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      const initialPropsStyles = initialProps.styles || [];

      return {
        ...initialProps,
        styles: [...initialPropsStyles, ...sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
}

export default DefaultLayout;
