import { Fragment, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { useInView } from 'react-intersection-observer';
import ReactLoading from 'react-loading';
import { ArticleCard } from 'components/ui/ArticleCard';
import { useGetArticles } from '../hooks/useGetArticles';
import { fetchArticles } from '../lib/fetchArticles';

import { Layout } from '../components/common/Layout';
import { HeadTemplate } from '../components/common/Head';
import { HomePageStyle } from '../styles/home.css';

export default function Home(): JSX.Element {
  const { data, isLoading, hasNextPage, fetchNextPage } = useGetArticles();

  const [ref, inView] = useInView({
    rootMargin: '-40px',
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
    <Layout>
      <HeadTemplate />
      <section>
        {articles.map((content) => (
          <Fragment key={content.id}>
            <Link href={content.url} passHref>
              <a href={content.url} className={HomePageStyle.cardLink}>
                <article className={HomePageStyle.card}>
                  <ArticleCard content={content} />
                </article>
              </a>
            </Link>
          </Fragment>
        ))}
      </section>
      {hasNextPage && (
        <div ref={ref} className={HomePageStyle.more}>
          <ReactLoading type="spin" width={40} height={40} color="#009688" />
        </div>
      )}
    </Layout>
  );
}

const queryClient = new QueryClient();
export async function getServerSideProps() {
  await queryClient.prefetchInfiniteQuery('articles', fetchArticles, {
    staleTime: Infinity,
  });

  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
