import React from 'react';

// import { CHANGELOG_ENDPOINT } from 'constants/apiRoutes';
import ChangelogList from 'features/ChangelogList';
import Layout from 'layouts/Main';
import { Article } from 'types/article';
// import fetch from 'isomorphic-fetch';
import { articles } from '../__mocks__/articles';

interface IndexPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

interface Props {
  articles: Article[];
}

const IndexPage: IndexPage<Props> = ({ articles }) => (
  <Layout title='Changelog'>
    <ChangelogList articles={ articles } />
  </Layout>
);

IndexPage.getInitialProps = async () => {
  // const response = await fetch(`${process.env.BASE_URL}${CHANGELOG_ENDPOINT}`);
  // const articles = await response.json();

  return { articles };
};

export default IndexPage;
