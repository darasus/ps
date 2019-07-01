import React, { FC } from 'react';

import { Article } from 'types/article';
import styled from 'styled-components';
import Link from 'next/link';

interface PropsOwn {
  articles: Article[];
}

type Props = PropsOwn & { className?: string };

const UnstyledChangelogList: FC<Props> = ({ articles, className }) => {
  return (
    <div className={ className }>
      { articles.map(({ title, slug, date, type, shortContent }, i) => {
        return (
          <Link href={ `/post/${slug}` } key={ i }>
            <a className='changelog-list__item'>
              <h2>{ title }</h2>
              <span>{ date }</span>
              <span>{ type }</span>
              <p>{ shortContent }</p>
            </a>
          </Link>
        );
      }) }
    </div>
  );
};

const ChangelogList = styled(UnstyledChangelogList)`
  ${({ theme }) => `
    padding: ${theme.gutter * 2}px;
  `}

  .changelog-list {
    &__item {
      ${({ theme }) => `
        color: ${theme.color.black};
        padding: ${theme.gutter}px;
        text-decoration: none;
      `}
    }
  }
`;

export default ChangelogList;
