import Image from 'next/image';
import { Layout } from '../components/common/Layout';
import error from '../../public/error.png';
import { ErrorPageStyle } from '../styles/error.css';

export default function Custom404() {
  return (
    <Layout>
      <h1 className={ErrorPageStyle.title}>
        このページは移動しました。ブログ記事は、一覧ページから見ることができます
      </h1>
      <Image
        src={error}
        width={1200}
        height={630}
        alt="404：このページは移動しました"
      />
    </Layout>
  );
}
