import { Fragment, VFC } from 'react';
import dayjs from 'dayjs';
import { BiCalendarAlt } from 'react-icons/bi';

import { Article } from 'types/article';
import { ArticleStyle } from './article.css';

type Props = {
  content: Article;
};

export const ArticleCard: VFC<Props> = ({ content }) => {
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
        <h3 className={ArticleStyle.cardTitle}>{content.title}</h3>
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
