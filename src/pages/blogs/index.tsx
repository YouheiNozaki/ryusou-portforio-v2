import Link from 'next/link';
import { Layout } from 'components/common/Layout';
import { HeadTemplate } from 'components/common/Head';
import { Card } from 'components/spacer/Card';
import { Blog } from 'components/ui/Blog';
import { Pagination } from 'components/ui/Pagination';
import type { BlogType } from 'types/blogs';
import { getBlogList } from '../../lib/fetchBlogs';
import { BlogsPageStyle } from '../../styles/blogs.css';

type Props = {
  blogs: BlogType[];
  totalCount: number;
};

const BlogsPage: React.VFC<Props> = ({ blogs, totalCount }) => {
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

export const getStaticProps = async () => {
  const { blogs } = await getBlogList();

  return {
    props: {
      blogs: blogs.contents,
      totalCount: blogs.totalCount,
    },
  };
};

export default BlogsPage;
