import React, { FC } from 'react';

interface Props {
  children: string;
}

const H2: FC<Props> = ({ children }) => {
  return <h2 style={ { color: 'tomato' } }>{ children }</h2>;
};

export default H2;
