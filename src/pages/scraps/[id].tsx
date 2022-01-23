import { Fragment } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import dayjs from 'dayjs';
import { BiCalendarAlt } from 'react-icons/bi';
import { Layout } from 'components/common/Layout';
import { parseHtml } from 'lib/parseHtml';
import type { Scrap } from 'types/scraps';
import { Card } from 'components/layout/Card';
import { HeadTemplate } from '../../components/common/Head';
import { clientScraps } from '../../lib/fetchScraps';
import { BlogPageStyle } from '../../styles/blog.css';

type Props = {
  scrap: Scrap;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<{ id: string }>,
) => {
  const { id } = context.params;
  const data = await clientScraps.get<Scrap>({
    endpoint: `scraps/${id}`,
  });

  return {
    props: { scrap: data },
  };
};

const ScrapDetail: React.FC<Props> = ({ scrap }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>;
  }

  return (
    <Layout>
      <HeadTemplate
        pagetitle={scrap.title}
        pagedescription={scrap.title}
        pagepath="scraps"
      />
      <h1 className={BlogPageStyle.blogTitle}>{scrap.title}</h1>
      <div className={BlogPageStyle.blogDescription}>
        <div className={BlogPageStyle.blogDays}>
          <BiCalendarAlt className={BlogPageStyle.blogDayIcon} />
          <p className={BlogPageStyle.blogDay}>
            {dayjs(scrap.createdAt).format('YYYY/MM/DD')}
          </p>
        </div>
      </div>
      <div>
        {scrap?.topic?.map((topic, id) => (
          <Fragment key={id}>
            <Card direction="column">
              <h3>{topic.title}</h3>
              <div>
                {topic.body.map((body, index) => {
                  return body.fieldId === 'richeditor' ? (
                    <Fragment key={index}>
                      <p>{parseHtml(body.richText)}</p>
                    </Fragment>
                  ) : body.fieldId === 'markdown' ? (
                    <Fragment key={index}>
                      <p>{body.markdownText}</p>
                    </Fragment>
                  ) : body.fieldId === 'richlink' ? (
                    <Fragment key={index}>
                      <a href={body.url}>{body.title}</a>
                    </Fragment>
                  ) : null;
                })}
              </div>
            </Card>
          </Fragment>
        ))}
      </div>
    </Layout>
  );
};

export default ScrapDetail;
