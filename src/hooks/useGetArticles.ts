import { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { clientArticle } from '../lib/fetchArticles';
import type { Articles } from '../types/article';

export const useGetArticles = () => {
  const [articleCount, setArticleCount] = useState<number>(0);
  const fetchArticles = async (pageParam: number) => {
    setArticleCount((prevArticleCount) => prevArticleCount + pageParam);

    const articles = await clientArticle.get<Articles>({
      endpoint: 'articles',
      queries: {
        offset: articleCount + pageParam,
      },
    });

    return articles;
  };

  return useInfiniteQuery(
    ['articles'],
    ({ pageParam = 0 }) => fetchArticles(pageParam),
    {
      staleTime: 0,
      getNextPageParam: (lastPage) => {
        const { contents, totalCount } = lastPage;

        return contents.length + articleCount < totalCount
          ? contents.length
          : undefined;
      },
    },
  );
};
