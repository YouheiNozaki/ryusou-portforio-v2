import { createClient } from 'microcms-js-sdk';
import type { Articles } from '../types/article';

// Initialize Client SDK.
export const clientArticle = createClient({
  serviceDomain: 'ryusou-portfolio',
  apiKey: process.env.X_API_KEY,
});

export const getArticleList = async () => {
  const articles = await clientArticle.get<Articles>({
    endpoint: 'articles',
    queries: {
      limit: 9999,
    },
  });

  return { articles };
};
