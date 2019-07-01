import React from 'react';

// import { CHANGELOG_ENDPOINT } from 'constants/apiRoutes';
import ChangelogList from 'features/ChangelogList';
import Layout from 'layouts/Main';
import { Article } from 'types/article';
// import fetch from 'isomorphic-fetch';

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
  const articles = [
    {
      slug: 'summer-ux-improvements-in-settings-panel',
      title: 'Summer UX improvements in settings panel',
      date: '7/16/2018',
      type: 'new',
      content:
        'We\'ve updated our settings with a bunch of gentle UX improvements. A groundwork for some upcoming product updates 😎\n\n',
    },
    {
      slug: 'wistia-videos-support',
      title: 'Wistia videos support',
      date: '7/14/2018',
      type: 'fix',
      content:
        'Wistia is joining the list of supported video platforms. To add your Wistia video, simply copy its url from the browser and wrap it in a video markdown to turn this:\n`![Wistia is for Marketing](https://wistia.com/medias/ve7pzy0d3y)`\n\n',
    },
    {
      slug: 'empty-emails',
      title: 'Empty emails',
      date: '7/14/2018',
      type: 'improvement',
      content:
        'Today our application sent a few empty emails. We fixed the issue and re-sent all affected messages 🙌\n\n',
    },
  ];
  // const articles = await response.json();

  return { articles };
};

export default IndexPage;
