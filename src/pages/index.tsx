import { Fragment, useEffect, useMemo } from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { useInView } from 'react-intersection-observer';
import { useGetArticles } from '../hooks/useGetArticles';
import { fetchArticles } from '../lib/fetchArticles';

export default function Home(): JSX.Element {
  const { data, isLoading, hasNextPage, fetchNextPage } = useGetArticles();

  const [ref, inView] = useInView({
    rootMargin: '-80px',
  });

  useEffect(() => {
    if (inView) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  const articles = useMemo(
    () => data && data.pages.flatMap(({ contents }) => contents),
    [data],
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div style={{ marginBottom: '100px' }}>
      <div>
        {articles.map((content) => (
          <Fragment key={content.id}>
            <a href={content.url}>
              <h3>{content.title}</h3>
              <p>{content.publishedAt}</p>
            </a>
          </Fragment>
        ))}
      </div>
      {hasNextPage && <div ref={ref}>もっとみる</div>}
    </div>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery('articles', fetchArticles);

  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
