import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { useInView } from 'react-intersection-observer';
import ReactLoading from 'react-loading';

import { Layout } from 'components/common/Layout';
import { HeadTemplate } from 'components/common/Head';
import { Card } from 'components/ui/Card';
import { Blog } from 'components/ui/Blog';
import { useGetBlogs } from '../../hooks/useGetBlogs';
import { fetchBlogs } from '../../lib/fetchBlogs';
import { BlogsPageStyle } from '../../styles/blogs.css';

export default function BlogsPage(): JSX.Element {
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
      <HeadTemplate
        pagetitle="BLOG"
        pagedescription="りゅーそうBLOG一覧"
        pagepath="blogs"
        keyword="BLOG"
      />
      <div>
        {blogs.map((content) => (
          <div key={content.id} className={BlogsPageStyle.cardWrapper}>
            <Link href={`/blogs/${content.id}`} passHref>
              <a
                href={`/blogs/${content.id}`}
                className={BlogsPageStyle.cardLink}
              >
                <Card direction="column">
                  <Blog content={content} />
                </Card>
              </a>
            </Link>
          </div>
        ))}
        {hasNextPage && (
          <div ref={ref} className={BlogsPageStyle.more}>
            <ReactLoading type="spin" width={40} height={40} color="#42a5f5" />
          </div>
        )}
      </div>
    </Layout>
  );
}

const queryClient = new QueryClient();

export async function getServerSideProps() {
  await queryClient.prefetchInfiniteQuery('blogs', fetchBlogs, {
    staleTime: Infinity,
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
