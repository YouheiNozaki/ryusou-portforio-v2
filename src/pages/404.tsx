import Image from 'next/image';
import { Heading3 } from '../components/ui/Heading3';
import { Layout } from '../components/common/Layout';
import error from '../../public/error.png';

const Custom404: React.VFC = () => {
  return (
    <Layout>
      <Heading3 title="このページは移動しました。ブログ記事は、一覧ページから見ることができます" />
      <Image
        src={error}
        width={680}
        height={680}
        alt="404：このページは移動しました"
      />
    </Layout>
  );
};

export default Custom404;
