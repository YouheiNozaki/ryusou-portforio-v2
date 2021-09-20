import { Fragment } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import dayjs from 'dayjs';
import { BiCalendarAlt, BiCalendarCheck } from 'react-icons/bi';
import * as cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/night-owl.css';
import { Layout } from 'components/common/Layout';
import { parseHtml } from 'lib/parseHtml';
import { CustomImage } from 'components/atoms/CustomImage';
import { Blog } from 'types/blogs';
import { HeadTemplate } from '../../components/common/Head';
import { fetchBlogs, fetchBlog } from '../../lib/fetchBlogs';
import { createOgImage } from '../../lib/createOgImage';
import { BlogPageStyle } from '../../styles/blog.css';

type Props = {
  blog: Blog;
  content: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await fetchBlogs();

  return {
    paths: blogs.contents.map((blog) => ({
      params: {
        id: blog.id,
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>,
) => {
  const { id } = context.params;
  const blog = await fetchBlog(id);
  const { content } = blog;
  const $ = cheerio.load(content);
  $('pre code').each((_, element) => {
    const result = hljs.highlightAuto($(element).text());
    $(element).html(result.value);
    $(element).addClass('hljs');
  });
  $('img').each((_, element) => {
    $(element).html();
    $(element).addClass(`${BlogPageStyle.blogContentImg}`);
  });

  return {
    props: {
      blog,
      content: $.html(),
    },
    revalidate: 10,
  };
};

const BlogDetail: React.FC<Props> = ({ blog, content }) => {
  const router = useRouter();
  const { ogImageUrl } = createOgImage(
    blog?.image?.url,
    blog?.author?.find((author) => author),
    blog.title,
  );

  if (router.isFallback) {
    return <div>Loading</div>;
  }
  console.log(ogImageUrl);

  return (
    <Layout>
      <HeadTemplate
        pagetitle={blog.title}
        pagedescription={blog.title}
        pagepath="blogs"
        postimg="https://images.microcms-assets.io/assets/c05ef7c10791409a9c2250efa775836c/4f872be84d38481081da67a1907c8fed/ogpbase.png?w=1200&h=1200&txt64=44KK44KF44O844Gd44GG&txt-pad=90&txt-color=00695C&txt-size=24&txt-align=left,top&mark64=aHR0cHM6Ly9pbWFnZXMubWljcm9jbXMtYXNzZXRzLmlvL2Fzc2V0cy9jMDVlZjdjMTA3OTE0MDlhOWMyMjUwZWZhNzc1ODM2Yy80Yzc2Nzk5YmUyMjc0NTAzODhjZjZiYjE2NzNkN2Q0Zi9jYXQuanBnP3c9NDAmaD00MA&mark-x=40&mark-y=80&blend64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L350ZXh0P3R4dHNpemU9NDgmdHh0LWNvbG9yPTAwOTY4OCZ3PTExMjAmdHh0LWFsaWduPW1pZGRsZSZ0eHRmb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC10cmFjaz0yJnR4dDY0PVNtRnRjM1JoWTJ2amdhZmpnYW5qZ3BQamdhcm5sSl9sdnBMamdhZmpnb0xqZ3FMamdxX2pncnZqZ3JuamdhZmpnWTNqZ292amdyWGpncVRqZzRqamdwTGt2WnpqZ29yamdaX2pnWVE&blend-mode=normal&blend-align=top,left&blend-x=80&blend-y=180"
      />
      <h1 className={BlogPageStyle.blogTitle}>{blog.title}</h1>
      {blog.author.map((author) => (
        <div className={BlogPageStyle.blogImageWrapper}>
          <CustomImage
            baseImageUrl={blog.image.url}
            title={blog.title}
            author={author}
            width={600}
            height={315}
          />
        </div>
      ))}
      <div className={BlogPageStyle.blogDescription}>
        <div className={BlogPageStyle.blogTags}>
          {blog.tags.map((tag) => (
            <Fragment key={tag.slug}>
              <p className={BlogPageStyle.blogTag}>{tag.slug}</p>
            </Fragment>
          ))}
        </div>
        <div className={BlogPageStyle.blogDays}>
          <BiCalendarAlt className={BlogPageStyle.blogDayIcon} />
          <p className={BlogPageStyle.blogDay}>
            {dayjs(blog.createdAt).format('YYYY/MM/DD')}
          </p>
          <BiCalendarCheck className={BlogPageStyle.blogDayIcon} />
          <p className={BlogPageStyle.blogDay}>
            {dayjs(blog.updatedAt).format('YYYY/MM/DD')}
          </p>
        </div>
      </div>
      <div>{parseHtml(content)}</div>
    </Layout>
  );
};

export default BlogDetail;
