import { Fragment, VFC } from 'react';
import dayjs from 'dayjs';
import { BiCalendarAlt, BiCalendarCheck } from 'react-icons/bi';

import styles from './blog.module.scss';
import type { BlogType } from '../../../types/blogs';
import { Tag } from '../Tag';
import { Heading3 } from '../Heading3';

type Props = {
  content: BlogType;
};

export const Blog: VFC<Props> = ({ content }) => {
  return (
    <>
      <Heading3 title={content.title} />
      <div className={styles.cardDescription}>
        <div className={styles.cardTags}>
          {content.tags.map((tag) => (
            <Fragment key={tag.slug}>
              <Tag tag={tag} />
            </Fragment>
          ))}
        </div>
        <div className={styles.cardDays}>
          <BiCalendarAlt className={styles.cardDayIcon} />
          <p className={styles.cardDay}>
            {dayjs(content.createdAt).format('YYYY/MM/DD')}
          </p>
          <BiCalendarCheck className={styles.cardDayIcon} />
          <p className={styles.cardDay}>
            {dayjs(content.updatedAt).format('YYYY/MM/DD')}
          </p>
        </div>
      </div>
    </>
  );
};
