import { Fragment, useMemo } from 'react';
import { useGetArticles } from '../../hooks/useGetArticles';

export const ArticleList = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useGetArticles();

  const articles = useMemo(
    () => data && data.pages.flatMap(({ contents }) => contents),
    [data],
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {articles.map((content) => (
        <Fragment key={content.id}>
          <a href={content.url}>
            <h3>{content.title}</h3>
            <p>{content.publishedAt}</p>
          </a>
        </Fragment>
      ))}
      {hasNextPage && (
        <button type="button" onClick={() => fetchNextPage()}>
          もっとみる
        </button>
      )}
    </div>
  );
};
