import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import { Layout } from 'components/common/Layout';
import { Blog } from 'types/blogs';
import { fetchBlogs, fetchBlog } from '../../lib/fetchBlogs';

type Props = {
  blog: Blog;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await fetchBlogs();

  return {
    paths: blogs.contents.map((blog) => ({
      params: {
        id: blog.id,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>,
) => {
  const { id } = context.params;
  const blog = await fetchBlog(id);

  return {
    props: {
      blog,
    },
  };
};

const BlogDetail: React.FC<Props> = ({ blog }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>;
  }

  return (
    <Layout>
      <h1>{blog.title}</h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={blog.image.url} alt="" />
      <div>{blog.createdAt}</div>
      <div>{blog.updatedAt}</div>
    </Layout>
  );
};

export default BlogDetail;
