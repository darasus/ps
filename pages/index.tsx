import React, { FC } from 'react';
import { MDXProvider } from '@mdx-js/react';

import Changelog from 'content/changelog.mdx';
import Layout from 'layouts/Main';
import H2 from 'components/H2';
import P from 'components/P';

const components = {
  h1: H2,
  h2: H2,
  h3: H2,
  p: P,
};

const IndexPage: FC = () => {
  return (
    <Layout title='Changelog'>
      <MDXProvider components={ components }>
        <Changelog />
      </MDXProvider>
    </Layout>
  );
};

export default IndexPage;
