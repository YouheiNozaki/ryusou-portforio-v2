import { Fragment } from 'react';
import { client } from 'lib/microcmsClient';
import { GetStaticProps } from 'next';
import type { Articles, Article } from '../types/article';

export default function Home({ contents }: Article): JSX.Element {
  return (
    <div>
      {contents.map((content) => (
        <Fragment key={content.id}>
          <a href={content.url}>
            <h3>{content.title}</h3>
            <p>{content.publishedAt}</p>
          </a>
        </Fragment>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<Articles>({ endpoint: 'articles' });

  return {
    props: {
      contents: data.contents,
    },
  };
};
