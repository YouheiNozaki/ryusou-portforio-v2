import Image from 'next/image';
import { Heading2 } from '../components/ui/Heading2';
import { Layout } from '../components/common/Layout';
import error from '../../public/error.png';

const Custom404: React.VFC = () => {
  return (
    <Layout>
      <Heading2 title="このページは移動しました。ブログ記事は、一覧ページから見ることができます" />
      <Image
        src={error}
        width={400}
        height={400}
        alt="404：このページは移動しました"
      />
    </Layout>
  );
};

export default Custom404;
