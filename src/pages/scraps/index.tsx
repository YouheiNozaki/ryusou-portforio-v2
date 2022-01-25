import Link from 'next/link';
import dayjs from 'dayjs';

import { Layout } from 'components/common/Layout';
import { HeadTemplate } from 'components/common/Head';
import { Card } from 'components/ui/Card';

import type { Scraps } from 'types/scraps';
import { clientScraps } from '../../lib/fetchScraps';
import { BlogsPageStyle } from '../../styles/blogs.css';

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
          <div key={content.id} className={BlogsPageStyle.cardWrapper}>
            <Link href={`/scraps/${content.id}`} passHref>
              <a
                href={`/scraps/${content.id}`}
                className={BlogsPageStyle.cardLink}
              >
                <Card direction="column">
                  <h3>{content.title}</h3>
                  <p>{dayjs(content.createdAt).format('YYYY/MM/DD')}</p>
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
