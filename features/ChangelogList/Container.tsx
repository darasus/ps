import React, { FC } from 'react';

import ChangelogList from './ChangelogList';
import { Article } from 'types/article';

interface PropsOwn {
  articles: Article[];
}

type Props = PropsOwn;

const ChangelogListContainer: FC<Props> = ({ articles }) => {
  return <ChangelogList articles={ articles } />;
};

export default ChangelogListContainer;
