declare module '@next/mdx';
declare module '@mdx-js/react';

declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}
