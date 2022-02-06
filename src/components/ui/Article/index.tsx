import { Fragment, VFC } from 'react';
import dayjs from 'dayjs';
import { BiCalendarAlt } from 'react-icons/bi';

import { ArticleType } from 'types/article';
import { Heading2 } from '../Heading2';
import styles from './article.module.scss';

type Props = {
  content: ArticleType;
};

export const Article: VFC<Props> = ({ content }) => {
  return (
    <>
      {content.category.map((category) => (
        <Fragment key={category.id}>
          <div className={styles.cardImage}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${category.caregoryImage.url}?h=40&w=40`}
              alt={category.id}
            />
          </div>
        </Fragment>
      ))}
      <div className={styles.cardDescription}>
        <Heading2 title={content.title} />
        <div className={styles.cardInfo}>
          <BiCalendarAlt className={styles.cardDayIcon} />
          <p className={styles.cardAt}>
            {dayjs(content.publishArticleAt).format('YYYY/MM/DD')}
          </p>
        </div>
      </div>
    </>
  );
};
