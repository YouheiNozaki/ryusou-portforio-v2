import { Fragment } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import dayjs from 'dayjs';
import clsx from 'clsx';
import { BiCalendarAlt } from 'react-icons/bi';
import { FcDocument, FcMusic } from 'react-icons/fc';
import { Layout } from 'components/common/Layout';
import type { Scrap } from 'types/scraps';
import { HeadTemplate } from '../../components/common/Head';
import { Heading2 } from '../../components/ui/Heading2';
import { MarkdownField } from '../../components/ui/MarkdownField';
import { clientScraps } from '../../lib/fetchScraps';
import styles from '../../styles/scrap.module.scss';

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
      <div className={styles.scrapDescription}>
        <Heading2 title={scrap.title} />
        <div className={styles.scrapDays}>
          <BiCalendarAlt className={styles.scrapDayIcon} />
          <p className={styles.scrapDay}>
            {dayjs(scrap.createdAt).format('YYYY/MM/DD')}
          </p>
        </div>
      </div>
      <div>
        {scrap?.topic?.map((topic, id) => (
          <Fragment key={id}>
            {topic.fieldId === 'tech' && (
              <div className={clsx(styles.scrapWrapper, styles.techWrapper)}>
                <span className={clsx(styles.label, styles.techLabel)}>
                  <FcDocument size={16} />
                  <p className={clsx(styles.text, styles.techText)}>tech</p>
                </span>
                <div className={styles.detail}>
                  <h3>{topic.title}</h3>
                  <div>
                    {topic.body.map((body, index) => {
                      return body.fieldId === 'richeditor' ? (
                        <div key={index} className={styles.letterBody}>
                          <div
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: body.richText }}
                          />
                        </div>
                      ) : body.fieldId === 'markdown' ? (
                        <div key={index} className={styles.letterBody}>
                          <MarkdownField text={body.markdownText} />
                        </div>
                      ) : body.fieldId === 'richlink' ? (
                        <Fragment key={index}>
                          <a href={body.url}>{body.title}</a>
                        </Fragment>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            )}
            {topic.fieldId === 'hobby' && (
              <div className={clsx(styles.scrapWrapper, styles.hobbyWrapper)}>
                <span className={clsx(styles.label, styles.hobbyLabel)}>
                  <FcMusic size={20} />
                  <p className={clsx(styles.text, styles.hobbyText)}>Hobby</p>
                </span>
                <div className={styles.detail}>
                  <h3>{topic.title}</h3>
                  {topic.body.map((body, index) => {
                    return body.fieldId === 'richeditor' ? (
                      <div key={index} className={styles.letterBody}>
                        <div
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{ __html: body.richText }}
                        />
                      </div>
                    ) : body.fieldId === 'markdown' ? (
                      <div key={index} className={styles.letterBody}>
                        <MarkdownField text={body.markdownText} />
                      </div>
                    ) : body.fieldId === 'richlink' ? (
                      <Fragment key={index}>
                        <a href={body.url}>{body.title}</a>
                      </Fragment>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </Layout>
  );
};

export default ScrapDetail;
