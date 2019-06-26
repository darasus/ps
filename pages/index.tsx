import React, { lazy, Suspense, FC } from 'react';
import { importMDX } from 'mdx.macro';

import Layout from '../layouts/Main';

const Content = lazy(() => importMDX('./Content.mdx'));

const IndexPage: FC = () => {
  return (
    <Layout title="Changelog">
      <div>hello</div>
    </Layout>
  );
};

export default IndexPage;
