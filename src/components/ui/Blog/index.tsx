import { Fragment, VFC } from 'react';
import dayjs from 'dayjs';
import { BiCalendarAlt, BiCalendarCheck } from 'react-icons/bi';

import { BlogCardStyle } from './blog.css';
import type { BlogType } from '../../../types/blogs';
import { Tag } from '../Tag';
import { Heading2 } from '../Heading2';

type Props = {
  content: BlogType;
};

export const Blog: VFC<Props> = ({ content }) => {
  return (
    <>
      <Heading2 title={content.title} />
      <div className={BlogCardStyle.cardDescription}>
        <div className={BlogCardStyle.cardTags}>
          {content.tags.map((tag) => (
            <Fragment key={tag.slug}>
              <Tag tag={tag} />
            </Fragment>
          ))}
        </div>
        <div className={BlogCardStyle.cardDays}>
          <BiCalendarAlt className={BlogCardStyle.cardDayIcon} />
          <p className={BlogCardStyle.cardDay}>
            {dayjs(content.createdAt).format('YYYY/MM/DD')}
          </p>
          <BiCalendarCheck className={BlogCardStyle.cardDayIcon} />
          <p className={BlogCardStyle.cardDay}>
            {dayjs(content.updatedAt).format('YYYY/MM/DD')}
          </p>
        </div>
      </div>
    </>
  );
};
