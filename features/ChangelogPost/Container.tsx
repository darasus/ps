import React, { FC } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

import { Article } from 'types/article';

interface PropsOwn {
  article: Article;
}

type Props = PropsOwn & { className?: string };

const UnstyledChangelogPost: FC<Props> = ({ article, className }) => {
  const { title, date, type, content } = article;

  return (
    <div className={ className }>
      <button className='back-button' onClick={ () => Router.back() }>
        Back
      </button>
      <h1>{ title }</h1>
      <span>{ date }</span>
      <span>{ type }</span>
      <p>{ content }</p>
    </div>
  );
};

const ChangelogPost = styled(UnstyledChangelogPost)`
  ${({ theme }) => `
    padding: ${theme.gutter * 2}px;
  `}

  & .back-button {
    text-decoration: underline;
  }
`;

export default ChangelogPost;
