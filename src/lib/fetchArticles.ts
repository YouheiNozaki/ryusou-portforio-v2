import { client } from './microcmsClient';
import type { Articles } from '../types/article';

export const fetchArticles = async () => {
  const articles = await client.get<Articles>({
    endpoint: 'articles',
  });

  return articles;
};
