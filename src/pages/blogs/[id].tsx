import { Fragment } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Image from 'next/dist/client/image';
import { useRouter } from 'next/dist/client/router';
import dayjs from 'dayjs';
import { BiCalendarAlt, BiCalendarCheck } from 'react-icons/bi';
import * as cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/night-owl.css';
import { Layout } from 'components/common/Layout';
import { parseHtml } from 'lib/parseHtml';
import { Blog } from 'types/blogs';
import { HeadTemplate } from '../../components/common/Head';
import { fetchBlog } from '../../lib/fetchBlogs';
import { createOgImage } from '../../lib/createOgImage';
import { BlogPageStyle } from '../../styles/blog.css';

type Props = {
  blog: Blog;
  content: string;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<{ id: string }>,
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
  $('a').each((_, element) => {
    $(element).html();
    $(element).addClass(`${BlogPageStyle.blogContentLink}`);
  });
  $('h1').each((_, element) => {
    $(element).html();
    $(element).addClass(`${BlogPageStyle.h1}`);
  });
  $('h2').each((_, element) => {
    $(element).html();
    $(element).addClass(`${BlogPageStyle.h2}`);
  });
  $('h3').each((_, element) => {
    $(element).html();
    $(element).addClass(`${BlogPageStyle.h3}`);
  });
  $('h3').each((_, element) => {
    $(element).html();
    $(element).addClass(`${BlogPageStyle.h3}`);
  });
  $('p').each((_, element) => {
    $(element).html();
    $(element).addClass(`${BlogPageStyle.p}`);
  });
  $('strong').each((_, element) => {
    $(element).html();
    $(element).addClass(`${BlogPageStyle.strong}`);
  });

  return {
    props: {
      blog,
      content: $.html(),
    },
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

  return (
    <Layout>
      <HeadTemplate
        pagetitle={blog.title}
        pagedescription={blog.title}
        pagepath="blogs"
        postimg={ogImageUrl}
      />
      <h1 className={BlogPageStyle.blogTitle}>{blog.title}</h1>
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
      <div>{content && parseHtml(content)}</div>
      <div>
        {blog?.repeater?.map((repeater) =>
          repeater.fieldId === 'content' ? (
            <div>{parseHtml(repeater.content)}</div>
          ) : repeater.fieldId === 'amazonlink' ? (
            <a
              target="blank"
              href={repeater.url}
              className={BlogPageStyle.amazonLink}
            >
              <div className={BlogPageStyle.amazonLinkDescription}>
                <p className={BlogPageStyle.amazonLinkText}>{repeater.name}</p>
                <p className={BlogPageStyle.amazonLinkButton}>
                  Amazonで購入する
                </p>
              </div>
              <div className={BlogPageStyle.amazonLinkImage}>
                <Image
                  src={repeater.image.url}
                  width={repeater.image.width / 3}
                  height={repeater.image.height / 3}
                  alt={`${repeater.name}の画像`}
                />
              </div>
            </a>
          ) : null,
        )}
      </div>
    </Layout>
  );
};

export default BlogDetail;
