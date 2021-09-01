import { Fragment, useEffect, useMemo } from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { useInView } from 'react-intersection-observer';
import dayjs from 'dayjs';
import ReactLoading from 'react-loading';
import { BiCalendarAlt, BiCalendarCheck } from 'react-icons/bi';
import { Layout } from 'components/common/Layout';
import { useGetBlogs } from '../../hooks/useGetBlogs';
import { fetchBlogs } from '../../lib/fetchBlogs';
import { BlogsPageStyle } from '../../styles/blogs.css';

export default function Home(): JSX.Element {
  const { data, isLoading, hasNextPage, fetchNextPage } = useGetBlogs();

  const [ref, inView] = useInView({
    rootMargin: '-20px',
  });

  useEffect(() => {
    if (inView) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  const blogs = useMemo(
    () => data && data.pages.flatMap(({ contents }) => contents),
    [data],
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout>
      <section>
        {blogs.map((content) => (
          <Fragment key={content.id}>
            <article className={BlogsPageStyle.card}>
              <div className={BlogsPageStyle.cardImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${content.image.url}?h=124&w=328`}
                  alt={content.title}
                />
              </div>
              <div className={BlogsPageStyle.cardDescription}>
                <h3 className={BlogsPageStyle.cardTitle}>{content.title}</h3>
                <div className={BlogsPageStyle.cardTags}>
                  {content.tags.map((tag) => (
                    <Fragment key={tag.slug}>
                      <p className={BlogsPageStyle.cardTag}>{tag.slug}</p>
                    </Fragment>
                  ))}

                  <BiCalendarAlt className={BlogsPageStyle.cardDayIcon} />
                  <p className={BlogsPageStyle.cardDay}>
                    {dayjs(content.createdAt).format('YYYY/MM/DD')}
                  </p>
                  <BiCalendarCheck className={BlogsPageStyle.cardDayIcon} />
                  <p className={BlogsPageStyle.cardDay}>
                    {dayjs(content.updatedAt).format('YYYY/MM/DD')}
                  </p>
                </div>
              </div>
            </article>
          </Fragment>
        ))}
      </section>
      {hasNextPage && (
        <div ref={ref} className={BlogsPageStyle.more}>
          <ReactLoading type="spin" width={40} height={40} color="#e91e63" />
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery('blogs', fetchBlogs);

  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
