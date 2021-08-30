import { createClient } from 'microcms-js-sdk';
import type { Articles } from '../types/article';

// Initialize Client SDK.
export const clientArticle = createClient({
  serviceDomain: 'ryusou-portfolio',
  apiKey: process.env.NEXT_PUBLIC__X_API_KEY,
});

export const fetchArticles = async () => {
  const articles = await clientArticle.get<Articles>({
    endpoint: 'articles',
  });

  return articles;
};
