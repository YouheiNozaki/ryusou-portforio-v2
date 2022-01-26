import { Fragment, createElement } from 'react';
import { unified } from 'unified';
import parse from 'rehype-parse';
import rehypeReact from 'rehype-react';

import { Paragraph } from './paragraph';
import { Strong } from './strong';

export const parseHtml = (content: string) => {
  const htmlAst = unified()
    .use(parse, { fragment: true })
    .use(parse)
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {
        p: Paragraph,
        strong: Strong,
      },
    })
    .processSync(content).result;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return htmlAst;
};
