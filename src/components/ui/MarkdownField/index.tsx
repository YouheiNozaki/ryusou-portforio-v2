import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = {
  text: string;
};

export const MarkdownField: React.VFC<Props> = ({ text }) => {
  return (
    <ReactMarkdown
      // eslint-disable-next-line react/no-children-prop
      children={text}
      components={{
        code({
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          node,
          inline,
          className,
          children,
          ...props
        }) {
          const match = /language-(\w+)/.exec(className || '');

          return !inline && match ? (
            <SyntaxHighlighter
              // eslint-disable-next-line react/no-children-prop
              children={String(children).replace(/\n$/, '')}
              style={tomorrow}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};
