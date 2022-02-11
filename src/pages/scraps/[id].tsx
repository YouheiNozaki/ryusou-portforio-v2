import { Fragment } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import dayjs from 'dayjs';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { BiCalendarAlt } from 'react-icons/bi';
import { FcGraduationCap, FcMusic } from 'react-icons/fc';
import { Layout } from 'components/common/Layout';
import { parseHtml } from 'lib/parseHtml';
import type { Scrap } from 'types/scraps';
import { HeadTemplate } from '../../components/common/Head';
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
    <Layout toggleColor>
      <HeadTemplate
        pagetitle={scrap.title}
        pagedescription={scrap.title}
        pagepath="scraps"
      />
      <h1 className={styles.scrapTitle}>{scrap.title}</h1>
      <div className={styles.scrapDescription}>
        <div className={styles.scrapDays}>
          <BiCalendarAlt className={styles.scrapDayIcon} />
          <p className={styles.scrapDay}>
            {dayjs(scrap.createdAt).format('YYYY/MM/DD')}
          </p>
        </div>
      </div>
      <div>
        {scrap?.topic?.map((topic, id) => (
          <div key={id} className={styles.block}>
            {topic.fieldId === 'tech' && (
              <div className={styles.tech}>
                <span className={styles.techLabel}>
                  <FcGraduationCap size={20} />
                  <p className={styles.techText}>Tech</p>
                </span>
                <div className={styles.techDetail}>
                  <h3>{topic.title}</h3>
                  <div>
                    {topic.body.map((body, index) => {
                      return body.fieldId === 'richeditor' ? (
                        <Fragment key={index}>
                          <p>{parseHtml(body.richText)}</p>
                        </Fragment>
                      ) : body.fieldId === 'markdown' ? (
                        <Fragment key={index}>
                          <ReactMarkdown
                            // eslint-disable-next-line react/no-children-prop
                            children={body.markdownText}
                            components={{
                              code({
                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                node,
                                inline,
                                className,
                                children,
                                ...props
                              }) {
                                const match = /language-(\w+)/.exec(
                                  className || '',
                                );

                                return !inline && match ? (
                                  <SyntaxHighlighter
                                    // eslint-disable-next-line react/no-children-prop
                                    children={String(children).replace(
                                      /\n$/,
                                      '',
                                    )}
                                    style={base16AteliersulphurpoolLight}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                  />
                                ) : (
                                  <code className={className} {...props}>
                                    {children}
                                  </code>
                                );
                              },
                            }}
                          />
                        </Fragment>
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
              <div className={styles.hobby}>
                <span className={styles.hobbyLabel}>
                  <FcMusic size={20} />
                  <p className={styles.hobbyText}>Hobby</p>
                </span>
                <div className={styles.hobbyDetail}>
                  <h3>{topic.title}</h3>
                  {topic.body.map((body, index) => {
                    return body.fieldId === 'richeditor' ? (
                      <Fragment key={index}>
                        <p>{parseHtml(body.richText)}</p>
                      </Fragment>
                    ) : body.fieldId === 'markdown' ? (
                      <Fragment key={index}>
                        <ReactMarkdown
                          // eslint-disable-next-line react/no-children-prop
                          children={body.markdownText}
                          components={{
                            code({
                              // eslint-disable-next-line @typescript-eslint/no-unused-vars
                              node,
                              inline,
                              className,
                              children,
                              ...props
                            }) {
                              const match = /language-(\w+)/.exec(
                                className || '',
                              );

                              return !inline && match ? (
                                <SyntaxHighlighter
                                  // eslint-disable-next-line react/no-children-prop
                                  children={String(children).replace(/\n$/, '')}
                                  style={base16AteliersulphurpoolLight}
                                  language={match[1]}
                                  PreTag="div"
                                  {...props}
                                />
                              ) : (
                                <code className={className} {...props}>
                                  {children}
                                </code>
                              );
                            },
                          }}
                        />
                      </Fragment>
                    ) : body.fieldId === 'richlink' ? (
                      <Fragment key={index}>
                        <a href={body.url}>{body.title}</a>
                      </Fragment>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ScrapDetail;
