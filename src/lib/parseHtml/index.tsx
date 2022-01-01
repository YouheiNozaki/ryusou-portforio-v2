import { Fragment, createElement } from 'react';
import unified from 'unified';
import parse from 'rehype-parse';
import rehypeReact from 'rehype-react';

export const parseHtml = (content: string) => {
  const htmlAst = unified()
    .use(parse, { fragment: true })
    .use(parse)
    .use(rehypeReact, {
      createElement,
      Fragment,
    })
    .processSync(content).result;

  return htmlAst;
};
