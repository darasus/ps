import React from 'react';

import ChangelogPost from 'features/ChangelogPost';
import { articles } from '../__mocks__/articles';
import { Article } from 'types/article';
import Layout from 'layouts/Main';

interface IndexPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: any) => P;
}

interface Props {
  article: Article | undefined;
}

const Post: IndexPage<Props> = ({ article }) => {
  if (!article) {
    return null;
  }

  return (
    <Layout title='Changelog'>
      <ChangelogPost article={ article } />
    </Layout>
  );
};

Post.getInitialProps = (ctx) => {
  const article = articles.find(({ slug }) => slug === ctx.query.slug);

  return { article };
};

export default Post;
