import { Fragment, useEffect, useMemo } from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { useInView } from 'react-intersection-observer';
import dayjs from 'dayjs';
import { BiCalendarAlt } from 'react-icons/bi';
import ReactLoading from 'react-loading';
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
            <article className={HomePageStyle.card}>
              <a href={content.url} className={HomePageStyle.cardLink}>
                {content.category.map((category) => (
                  <Fragment key={category.id}>
                    <div className={HomePageStyle.cardImage}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`${category.caregoryImage.url}?h=40&w=40`}
                        alt={category.id}
                      />
                    </div>
                  </Fragment>
                ))}
                <div className={HomePageStyle.cardDescription}>
                  <h3 className={HomePageStyle.cardTitle}>{content.title}</h3>
                  <div className={HomePageStyle.cardInfo}>
                    <BiCalendarAlt className={HomePageStyle.cardDayIcon} />
                    <p className={HomePageStyle.cardAt}>
                      {dayjs(content.publishArticleAt).format('YYYY/MM/DD')}
                    </p>
                  </div>
                </div>
              </a>
            </article>
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

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery('articles', fetchArticles);

  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 10,
  };
}
