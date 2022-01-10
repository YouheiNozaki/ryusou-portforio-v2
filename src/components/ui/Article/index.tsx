import { Fragment, VFC } from 'react';
import dayjs from 'dayjs';
import { BiCalendarAlt } from 'react-icons/bi';

import { Article as ArticleType } from 'types/article';
import { Heading2 } from '../Heading2';
import { ArticleStyle } from './article.css';

type Props = {
  content: ArticleType;
};

export const Article: VFC<Props> = ({ content }) => {
  return (
    <>
      {content.category.map((category) => (
        <Fragment key={category.id}>
          <div className={ArticleStyle.cardImage}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${category.caregoryImage.url}?h=40&w=40`}
              alt={category.id}
            />
          </div>
        </Fragment>
      ))}
      <div className={ArticleStyle.cardDescription}>
        <Heading2 title={content.title} />
        <div className={ArticleStyle.cardInfo}>
          <BiCalendarAlt className={ArticleStyle.cardDayIcon} />
          <p className={ArticleStyle.cardAt}>
            {dayjs(content.publishArticleAt).format('YYYY/MM/DD')}
          </p>
        </div>
      </div>
    </>
  );
};
