import Link from 'next/link';
import { Layout } from 'components/common/Layout';
import { HeadTemplate } from 'components/common/Head';
import { Card } from 'components/ui/Card';
import { Blog } from 'components/ui/Blog';
import { Pagination } from 'components/ui/Pagination';
import type { BlogType } from 'types/blogs';
import type { GetStaticProps } from 'next';
import { getBlogList } from '../../../lib/fetchBlogs';
import { BlogsPageStyle } from '../../../styles/blogs.css';

type Props = {
  blogs: BlogType[];
  totalCount: number;
};

const BlogsPageId: React.VFC<Props> = ({ blogs, totalCount }) => {
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
      </div>
      <Pagination totalCount={totalCount} />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const { blogs } = await getBlogList();

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(blogs.totalCount / 10)).map(
    (id) => `/blogs/page/${id}`,
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const { blogs } = await getBlogList(Number(id));

  return {
    props: {
      blogs: blogs.contents,
      totalCount: blogs.totalCount,
    },
  };
};

export default BlogsPageId;
