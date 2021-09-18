import parse, { domToReact, HTMLReactParserOptions } from 'html-react-parser';
import { Element } from 'domhandler/lib/node';
import { ContentsStyle } from './content.css';

export const parseHtml = (postContent: string) => {
  const options: HTMLReactParserOptions = {
    // eslint-disable-next-line consistent-return
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === 'strong') {
          return (
            <strong className={ContentsStyle.strong}>
              {domToReact(domNode.children)}
            </strong>
          );
        }
      }
    },
  };

  return parse(postContent, options);
};
