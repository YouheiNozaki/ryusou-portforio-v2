/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Fragment, createElement } from 'react';
import unified from 'unified';
import parse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import { ContentsStyle } from './content.css';

type Props = {
  children: React.ReactNode;
};

const Heading1: React.VFC<Props> = ({ children }) => {
  return <h1 className={ContentsStyle.h1}>{children}</h1>;
};

const Heading2: React.VFC<Props> = ({ children }) => {
  return <h2 className={ContentsStyle.h2}>{children}</h2>;
};

const Heading3: React.VFC<Props> = ({ children }) => {
  return <h3 className={ContentsStyle.h3}>{children}</h3>;
};

const Paragraph: React.VFC<Props> = ({ children }) => {
  return <p className={ContentsStyle.p}>{children}</p>;
};

const Strong: React.VFC<Props> = ({ children }) => {
  return <strong className={ContentsStyle.strong}>{children}</strong>;
};

export const parseHtml = (content: string) => {
  const htmlAst = unified()
    .use(parse, { fragment: true })
    .use(parse)
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {
        h1: Heading1,
        h2: Heading2,
        h3: Heading3,
        p: Paragraph,
        strong: Strong,
      },
    })
    .processSync(content).result;

  return htmlAst;
};
