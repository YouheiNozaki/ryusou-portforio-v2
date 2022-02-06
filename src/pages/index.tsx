import Link from 'next/link';
import { ArticleType } from 'types/article';
import { getArticleList } from '../lib/fetchArticles';
import { Layout } from '../components/common/Layout';
import { HeadTemplate } from '../components/common/Head';
import { Card } from '../components/spacer/Card';
import { Article } from '../components/ui/Article';

import styles from '../styles/home.module.scss';

type Props = {
  articles: ArticleType[];
};

const Home: React.VFC<Props> = ({ articles }) => {
  return (
    <Layout>
      <HeadTemplate />
      <div>
        {articles.map((content) => (
          <div key={content.id} className={styles.cardWrapper}>
            <Link href={content.url} passHref>
              <a href={content.url} className={styles.cardLink}>
                <Card>
                  <Article content={content} />
                </Card>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { articles } = await getArticleList();

  return {
    props: {
      articles: articles.contents,
    },
  };
};

export default Home;
