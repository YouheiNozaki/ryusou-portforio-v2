import { Fragment, VFC } from 'react';
import dayjs from 'dayjs';
import { BiCalendarAlt, BiCalendarCheck } from 'react-icons/bi';

import { BlogCardStyle } from './blog.css';
import type { Blog as BlogType } from '../../../types/blogs';

type Props = {
  content: BlogType;
};

export const Blog: VFC<Props> = ({ content }) => {
  return (
    <>
      <h3 className={BlogCardStyle.cardTitle}>{content.title}</h3>
      <div className={BlogCardStyle.cardDescription}>
        <div className={BlogCardStyle.cardTags}>
          {content.tags.map((tag) => (
            <Fragment key={tag.slug}>
              <p className={BlogCardStyle.cardTag}>{tag.slug}</p>
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
