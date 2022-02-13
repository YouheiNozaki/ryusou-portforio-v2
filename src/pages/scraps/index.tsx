import Link from 'next/link';
import dayjs from 'dayjs';
import { BiCalendarAlt } from 'react-icons/bi';

import { Layout } from 'components/common/Layout';
import { HeadTemplate } from 'components/common/Head';
import { Card } from 'components/spacer/Card';

import type { Scraps } from 'types/scraps';
import { clientScraps } from '../../lib/fetchScraps';
import styles from '../../styles/blogs.module.scss';

type Props = {
  scraps: Scraps;
};

const ScrapsPage: React.VFC<Props> = ({ scraps }) => {
  return (
    <Layout>
      <HeadTemplate
        pagetitle="DIARY"
        pagedescription="りゅーそうの日記"
        pagepath="diarys"
        keyword="DIARY"
      />
      <div>
        {scraps.contents.map((content) => (
          <div key={content.id} className={styles.cardWrapper}>
            <Link href={`/scraps/${content.id}`} passHref>
              <a href={`/scraps/${content.id}`} className={styles.cardLink}>
                <Card direction="column">
                  <h3>{content.title}</h3>
                  <div className={styles.cardInfo}>
                    <BiCalendarAlt className={styles.cardDayIcon} />
                    <p>{dayjs(content.createdAt).format('YYYY/MM/DD')}</p>
                  </div>
                </Card>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const data = await clientScraps.get<Scraps>({
    endpoint: 'scraps',
  });

  return {
    props: {
      scraps: data,
    },
  };
}

export default ScrapsPage;
