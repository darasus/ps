import React, { FC } from 'react';

import { Article } from 'types/article';

interface PropsOwn {
  articles: Article[];
}

type Props = PropsOwn;

const ChangelogList: FC<Props> = ({ articles }) => {
  return (
    <>
      { articles.map(({ title }, i) => {
        return <div key={ i }>{ title }</div>;
      }) }
    </>
  );
};

export default ChangelogList;
