/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Fragment } from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Image from 'next/dist/client/image';
import { useRouter } from 'next/dist/client/router';
import dayjs from 'dayjs';
import { BiCalendarAlt, BiCalendarCheck } from 'react-icons/bi';
import * as cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/night-owl.css';
import { BlogType } from 'types/blogs';
import { Tag } from 'components/ui/Tag';
import { Layout } from '../../components/common/Layout';
import { HeadTemplate } from '../../components/common/Head';
import { Heading2 } from '../../components/ui/Heading2';
import { getBlog, getBlogList } from '../../lib/fetchBlogs';
import { createOgImage } from '../../lib/createOgImage';
import styles from '../../styles/blogdetail.module.scss';

type Props = {
  blog: BlogType;
  content: string;
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>,
) => {
  const { id } = context.params;
  const blog = await getBlog(id);
  const { content } = blog;
  const $ = cheerio.load(content);
  $('pre code').each((_, element) => {
    const result = hljs.highlightAuto($(element).text());
    $(element).html(result.value);
    $(element).addClass('hljs');
  });
  $('img').each((_, element) => {
    $(element).html();
    $(element).addClass(`${styles.blogContentImg}`);
  });
  $('a').each((_, element) => {
    $(element).html();
    $(element).addClass(`${styles.blogContentLink}`);
  });
  $('h1').each((_, element) => {
    $(element).html();
    $(element).addClass(`${styles.heading1}`);
  });
  $('h2').each((_, element) => {
    $(element).html();
    $(element).addClass(`${styles.heading2}`);
  });
  $('h3').each((_, element) => {
    $(element).html();
    $(element).addClass(`${styles.heading3}`);
  });
  $('p').each((_, element) => {
    $(element).html();
    $(element).addClass(`${styles.paragraph}`);
  });
  $('strong').each((_, element) => {
    $(element).html();
    $(element).addClass(`${styles.strongtext}`);
  });

  return {
    props: {
      blog,
      content: $.html(),
    },
  };
};

export const getStaticPaths = async () => {
  const { blogs } = await getBlogList(0, 9999);
  const paths = blogs.contents.map((content) => `/blogs/${content.id}`);

  return { paths, fallback: false };
};

const BlogDetail: React.FC<Props> = ({ blog, content }) => {
  const router = useRouter();
  const { ogImageUrl } = createOgImage(blog?.image?.url, blog.title);

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
      <Heading2 title={blog.title} />
      <div className={styles.blogDescription}>
        <div className={styles.blogTags}>
          {blog.tags.map((tag) => (
            <Fragment key={tag.slug}>
              <Tag tag={tag.slug} />
            </Fragment>
          ))}
        </div>
        <div className={styles.blogDays}>
          <BiCalendarAlt className={styles.blogDayIcon} />
          <p className={styles.blogDay}>
            {dayjs(blog.createdAt).format('YYYY/MM/DD')}
          </p>
          <BiCalendarCheck className={styles.blogDayIcon} />
          <p className={styles.blogDay}>
            {dayjs(blog.updatedAt).format('YYYY/MM/DD')}
          </p>
        </div>
      </div>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div>
        {blog?.repeater?.map((repeater) =>
          repeater.fieldId === 'content' ? (
            <div className={styles.repeatContent}>
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={{ __html: repeater.content }} />
            </div>
          ) : repeater.fieldId === 'amazonlink' ? (
            <a href={repeater.url} className={styles.amazonLink}>
              <p className={styles.amazonLinkText}>{repeater.name}</p>
              <div className={styles.amazonLinkImage}>
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
