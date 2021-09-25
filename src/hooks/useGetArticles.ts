import { useInfiniteQuery } from 'react-query';
import { clientArticle } from '../lib/fetchArticles';
import { useGetArticleCount } from './useGetArticleCount';
import type { Articles } from '../types/article';

export const useGetArticles = () => {
  const { articleCount, setArticleCount } = useGetArticleCount();
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
      staleTime: Infinity,
      getNextPageParam: (lastPage) => {
        const { contents, totalCount } = lastPage;

        return contents.length + articleCount < totalCount
          ? contents.length
          : undefined;
      },
    },
  );
};
