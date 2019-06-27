import React, { FC } from 'react';

interface Props {
  children: string;
}

const P: FC<Props> = ({ children }) => {
  return <p style={ { color: 'tomato' } }>{ children }</p>;
};

export default P;
